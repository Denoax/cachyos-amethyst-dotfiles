#!/usr/bin/python
"""Single-file contest workflow. Standard library only; never invokes a shell."""
import argparse
import difflib
import json
import math
import os
from pathlib import Path
import selectors
import shlex
import shutil
import signal
import subprocess
import sys
import tempfile
import time

ROOT = Path(__file__).resolve().parent.parent
TC = ROOT / '.toolchains'
NAMES = {'cpp':'main.cpp','c':'main.c','python':'main.py','java':'Main.java',
         'rust':'main.rs','go':'main.go','js':'main.js','ts':'main.ts'}
LIMIT = 1024 * 1024  # per stream, per process
class Failure(Exception): pass

def executable(name):
    if name in ('java', 'javac'):
        p = TC / 'jdk/bin' / name
        if p.exists(): return str(p)
    p = TC / 'repo/usr/bin' / name
    if p.exists(): return str(p)
    found = shutil.which(name)
    if not found: raise Failure(f'MISSING TOOL: {name}')
    return found

def selected():
    exact = ROOT / '.cp-source'
    if exact.is_symlink():
        if not exact.is_file(): raise Failure('The last selected source was moved or deleted. Open a solution and run again.')
        return exact.resolve()
    p = ROOT / '.cp-selected'
    if not p.is_symlink() or not p.exists(): raise Failure('No selected problem. Run select <problem> first.')
    return p.resolve()

def source(target=None):
    p = Path(target).expanduser().resolve() if target else selected()
    if p.is_dir():
        candidates = [f for f in p.iterdir() if f.is_file() and f.suffix in ('.cpp','.cc','.cxx','.c','.py','.java','.rs','.go','.js','.ts')]
        if len(candidates) != 1: raise Failure('Ambiguous target: pass the source file explicitly.')
        return candidates[0]
    if p.suffix not in ('.cpp','.cc','.cxx','.c','.py','.java','.rs','.go','.js','.ts') or not p.is_file():
        raise Failure(f'Not a solution source: {p}')
    return p

def language(s):
    return {'.cpp':'cpp','.cc':'cpp','.cxx':'cpp','.c':'c','.py':'python','.java':'java',
            '.rs':'rust','.go':'go','.js':'js','.ts':'ts'}[s.suffix]

def command(args, cwd=None):
    print('$ ' + shlex.join(map(str,args)), flush=True)
    try: r = subprocess.run(list(map(str,args)), cwd=cwd)
    except OSError as e: raise Failure(str(e))
    print(f'exit={r.returncode}', flush=True)
    if r.returncode: raise Failure('CE: compilation failed; no executable will be launched.')

def build(s, mode='release', std='c++23', release='21', python='python'):
    lang = language(s)
    if mode == 'sanitize' and lang not in ('cpp','c'): raise Failure('Sanitize is available only for C/C++.')
    d = s.parent / '.build' / mode
    d.mkdir(parents=True, exist_ok=True)
    out = d / (s.stem + '-' + lang)
    # Remove prior product before compilation; failed builds cannot leave stale runnable output.
    if out.is_dir(): shutil.rmtree(out)
    elif out.exists(): out.unlink()
    if lang in ('cpp','c'):
        flags = {'release':['-O2'], 'debug':['-Og','-g3','-D_GLIBCXX_ASSERTIONS','-DLOCAL'],
                 'sanitize':['-O1','-g3','-D_GLIBCXX_ASSERTIONS','-DLOCAL','-fsanitize=address,undefined',
                             '-fno-omit-frame-pointer','-fno-sanitize-recover=all']}[mode]
        args = [executable('g++' if lang=='cpp' else 'gcc'), '-std='+ (std if lang=='cpp' else 'c17'),
                *flags,'-Wall','-Wextra','-Wshadow',str(s),'-o',str(out)+'.tmp']
        command(args); os.replace(str(out)+'.tmp',out)
        return [str(out)]
    if lang=='java':
        out.mkdir(); command([executable('javac'),'--release',release,'-g','-d',out,s])
        return [executable('java'),'-cp',str(out),s.stem]
    if lang=='python': return [executable(python),str(s)]
    if lang=='js': return [executable('node'),str(s)]
    if lang=='ts':
        out.mkdir();command([executable('tsc'),s,
                            '--target','ES2022','--module','commonjs','--outDir',out])
        return [executable('node'),str(out/(s.stem+'.js'))]
    if lang=='rust':
        command([executable('rustc'),'--edition=2021','-g' if mode!='release' else '-O',s,'-o',str(out)+'.tmp'])
    if lang=='go':
        env_old=os.environ.get('GOROOT'); os.environ['GOROOT']=str(TC/'repo/usr/lib/go') if (TC/'repo/usr/lib/go').is_dir() else subprocess.check_output([executable('go'),'env','GOROOT'],text=True).strip()
        try: command([executable('go'),'build','-o',str(out)+'.tmp',s],cwd=s.parent)
        finally:
            if env_old is None: os.environ.pop('GOROOT',None)
            else: os.environ['GOROOT']=env_old
    os.replace(str(out)+'.tmp',out)
    return [str(out)]

def capture(cmd, data, timeout=3, cwd=None):
    """Bound both output streams while draining pipes and kill the full process group."""
    start=time.monotonic(); chunks={1:bytearray(),2:bytearray()}; status='OK'
    with tempfile.TemporaryFile() as inp:
        inp.write(data);inp.seek(0)
        p=subprocess.Popen(cmd,stdin=inp,stdout=subprocess.PIPE,stderr=subprocess.PIPE,
                           cwd=cwd,start_new_session=True)
        sel=selectors.DefaultSelector()
        for n,stream in ((1,p.stdout),(2,p.stderr)):
            os.set_blocking(stream.fileno(),False);sel.register(stream,selectors.EVENT_READ,n)
        try:
            while sel.get_map():
                if time.monotonic()-start>timeout: status='TIMEOUT';break
                for key,_ in sel.select(0.03):
                    b=os.read(key.fileobj.fileno(),65536)
                    if not b: sel.unregister(key.fileobj);continue
                    n=key.data; left=LIMIT-len(chunks[n]);chunks[n].extend(b[:left])
                    if len(b)>left: status='OUTPUT LIMIT';break
                if status!='OK': break
        finally:
            # Also terminate descendants holding pipes or remaining after parent exit.
            try: os.killpg(p.pid,signal.SIGKILL)
            except ProcessLookupError: pass
            p.wait();sel.close();p.stdout.close();p.stderr.close()
        if status=='OK' and p.returncode: status='RUNTIME ERROR'
        return status,bytes(chunks[1]),bytes(chunks[2]),p.returncode,time.monotonic()-start

def equal(a,b,mode='exact',abs_tol=1e-9,rel_tol=1e-9):
    a=a.replace(b'\r\n',b'\n');b=b.replace(b'\r\n',b'\n')
    if mode=='exact': return a==b
    if mode=='tokens': return a.split()==b.split()
    aa,bb=a.split(),b.split()
    if len(aa)!=len(bb):return False
    for x,y in zip(aa,bb):
        try:
            f,g=float(x),float(y)
            if math.isnan(f) or math.isnan(g):return False
            if not math.isclose(f,g,abs_tol=abs_tol,rel_tol=rel_tol): return False
        except ValueError:
            if x!=y:return False
    return True

def output_diff(expected, actual):
    def lines(data):
        result=[]
        for line in data.replace(b'\r\n',b'\n').decode(errors='replace').splitlines(keepends=True):
            result.append(line if line.endswith('\n') else line+'\n\\ No newline at end of file\n')
        return result
    return ''.join(difflib.unified_diff(lines(expected),lines(actual),fromfile='expected output.txt',tofile='actual stdout'))

def test(s,cmd,a):
    tests=sorted((s.parent/'tests').glob('*.in'))
    if not tests: print('NO TESTS');return 2
    failed=False
    for case in tests:
        st,out,err,code,elapsed=capture(cmd,case.read_bytes(),a.timeout,s.parent)
        d=s.parent/'.build/results';d.mkdir(parents=True,exist_ok=True)
        (d/(case.stem+'.actual')).write_bytes(out);(d/(case.stem+'.stderr')).write_bytes(err)
        expected=case.with_suffix('.out')
        if st=='OK':
            if not expected.exists():st='RUN ONLY'
            elif equal(out,expected.read_bytes(),a.compare,a.abs_tol,a.rel_tol):st='PASS'
            else:st='MISMATCH'
        print(f'{case.name}: {st} {elapsed*1000:.1f}ms exit={code}')
        if err:print(err.decode(errors='replace'),file=sys.stderr)
        if st=='MISMATCH':
            print(''.join(difflib.unified_diff(expected.read_text(errors='replace').splitlines(True),
                  out.decode(errors='replace').splitlines(True),fromfile='expected',tofile='actual')))
        failed |= st!='PASS'
    return 1 if failed else 0

def select(p):
    s=source(p)
    # Remember the exact source, including non-template filenames like test.cpp.
    for name, target in (('.cp-selected',s.parent),('.cp-source',s)):
        link=ROOT/name;tmp=ROOT/(name+'.tmp')
        if link.exists() and not link.is_symlink(): raise Failure(f'Refusing to replace {link}')
        if tmp.is_symlink():tmp.unlink()
        tmp.symlink_to(target,target_is_directory=target.is_dir());tmp.replace(link)
    print('Selected:',s)

def editor_source(context):
    """Use an open solution; keep the last solution when input or notes have focus."""
    if context:
        p=Path(context).expanduser().resolve()
        problems=(ROOT/'problems').resolve()
        if p.is_relative_to(problems) and p.is_file():
            if p.suffix in ('.cpp','.cc','.cxx','.c','.py','.java','.rs','.go','.js','.ts'):
                s=source(p);select(s);return s
            # A sample/input in another problem must not run the old solution.
            owner=p.parent.parent if p.parent.name=='tests' else p.parent
            try: current=source()
            except Failure:
                s=source(owner);select(s);return s
            if current.parent!=owner:
                raise Failure('This input belongs to another problem. Open its solution before running.')
    return source()

def new(a):
    ident=Path(a.id)
    if ident.is_absolute() or '..' in ident.parts: raise Failure('Problem ID must stay inside problems/.')
    p=ROOT/'problems'/ident
    if not p.resolve().is_relative_to((ROOT/'problems').resolve()): raise Failure('Problem path escapes problems/.')
    if p.exists():raise Failure('Refusing to overwrite an existing problem.')
    p.mkdir(parents=True);(p/'tests').mkdir()
    shutil.copyfile(ROOT/'templates'/NAMES[a.lang],p/NAMES[a.lang])
    (p/'input.txt').write_text('');(p/'output.txt').write_text('');(p/'tests/sample01.in').write_text('')
    print('Created:',p);select(p)

def stress(a):
    cmds=[build(source(x),a.mode,a.std,a.java_release) for x in (a.fast,a.brute,a.generator)]
    for seed in range(a.seed,a.seed+a.iterations):
        gen=capture(cmds[2]+[str(seed)],b'',a.timeout)
        data=gen[1]; fast=capture(cmds[0],data,a.timeout); brute=capture(cmds[1],data,a.timeout)
        if gen[0]!='OK' or fast[0]!='OK' or brute[0]!='OK' or not equal(fast[1],brute[1],a.compare,a.abs_tol,a.rel_tol):
            d=ROOT/'.build/stress'/f'seed-{seed}-{time.time_ns()}';d.mkdir(parents=True)
            for n,b in [('input.txt',data),('fast.out',fast[1]),('brute.out',brute[1]),('fast.stderr',fast[2]),('brute.stderr',brute[2]),('generator.stderr',gen[2])]: (d/n).write_bytes(b)
            (d/'replay.json').write_text(json.dumps({'seed':seed,'commands':cmds,'statuses':[gen[0],fast[0],brute[0]],'failure':('GENERATOR '+gen[0] if gen[0]!='OK' else 'FAST '+fast[0] if fast[0]!='OK' else 'BRUTE '+brute[0] if brute[0]!='OK' else 'MISMATCH'),'comparison':a.compare,'timeout':a.timeout,'abs_tol':a.abs_tol,'rel_tol':a.rel_tol},indent=2))
            print('COUNTEREXAMPLE:',d);return 1
    print(f'{a.iterations} stress cases passed (not a judge verdict)');return 0

def main():
    p=argparse.ArgumentParser(description=__doc__);sub=p.add_subparsers(dest='action',required=True)
    n=sub.add_parser('new');n.add_argument('id');n.add_argument('--lang',choices=NAMES,default='cpp')
    n=sub.add_parser('select');n.add_argument('target')
    sub.add_parser('doctor')
    c=sub.add_parser('copy');c.add_argument('--context')
    sub.add_parser('stress-demo')
    for action in ('build','run','test','stress'):
        q=sub.add_parser(action)
        if action=='stress':
            for x in ('fast','brute','generator'):q.add_argument(x)
            q.add_argument('--seed',type=int,default=1);q.add_argument('--iterations',type=int,default=100)
        else:q.add_argument('target',nargs='?')
        q.add_argument('--context',help='Editor file hint; non-source tabs retain the last solution')
        q.add_argument('--expect',choices=NAMES,help='Reject a mismatched selected debug language')
        q.add_argument('--mode',choices=['release','debug','sanitize'],default='release')
        q.add_argument('--std',choices=['c++17','c++20','c++23','gnu++23'],default='c++23')
        q.add_argument('--java-release',choices=['17','21'],default='21')
        q.add_argument('--python',choices=['python','pypy3'],default='python')
        q.add_argument('--timeout',type=float,default=3)
        q.add_argument('--compare',choices=['exact','tokens','float'],default='exact')
        q.add_argument('--abs-tol',type=float,default=1e-9);q.add_argument('--rel-tol',type=float,default=1e-9)
        if action=='run':
            q.add_argument('--input',default='input.txt');q.add_argument('--interactive',action='store_true')
            check=q.add_mutually_exclusive_group()
            check.add_argument('--expected',help='Expected output file (relative to the input directory)')
            check.add_argument('--no-check',action='store_true',help='Run without comparing output.txt')
    a=p.parse_args()
    if a.action=='new':new(a);return 0
    if a.action=='select':select(a.target);return 0
    if a.action=='stress-demo':
        d=ROOT/'.build/stress-demo';d.mkdir(parents=True,exist_ok=True)
        examples={'fast.py':'import sys\na,b=map(int,sys.stdin.buffer.read().split())\nprint(a+b+(a==7))\n','brute.py':'import sys\na,b=map(int,sys.stdin.buffer.read().split())\nprint(a+b)\n','generator.py':'import random,sys\nr=random.Random(int(sys.argv[1]))\nprint(7,r.randrange(-10,11))\n'}
        for name,text in examples.items():(d/name).write_text(text)
        return stress(argparse.Namespace(fast=str(d/'fast.py'),brute=str(d/'brute.py'),generator=str(d/'generator.py'),seed=42,iterations=10,timeout=3,mode='release',std='c++23',java_release='21',compare='exact',abs_tol=1e-9,rel_tol=1e-9))
    if a.action=='copy':
        s=editor_source(a.context);subprocess.run([executable('wl-copy')],input=s.read_bytes(),stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,check=True);print('Copied plain source:',s);return 0
    if a.action=='doctor':
        for n in ('g++','gcc','gdb','python','pypy3','java','javac','rustc','cargo','go','node','clang-format'):
            try:
                x=executable(n);r=subprocess.run([x,'version' if n=='go' else '--version'],capture_output=True,text=True,timeout=10)
                print(n,x,(r.stdout+r.stderr).splitlines()[0])
            except (Failure,IndexError,subprocess.TimeoutExpired) as e:print(n,e)
        return 0
    if a.timeout<=0:raise Failure('Timeout must be positive.')
    if a.action=='stress':
        if a.iterations <= 0: raise Failure('Iterations must be positive.')
        return stress(a)
    s=source(a.target) if a.target else editor_source(a.context)
    if a.expect and language(s)!=a.expect: raise Failure(f'Selected {language(s)} target does not match {a.expect} debugger. Choose the matching debug configuration.')
    debug_alias=ROOT/'.build/debug/selected-cpp'
    if a.expect=='cpp' and a.mode=='debug':
        if debug_alias.is_symlink():debug_alias.unlink()
        elif debug_alias.exists():raise Failure(f'Refusing to replace {debug_alias}')
    cmd=build(s,a.mode,a.std,a.java_release,a.python)
    if a.expect=='cpp' and a.mode=='debug':
        debug_alias.parent.mkdir(parents=True,exist_ok=True);debug_alias.symlink_to(cmd[0])
    if a.action=='build':return 0
    if a.action=='test':return test(s,cmd,a)
    print('$ '+shlex.join(cmd),flush=True)
    if a.interactive:
        return subprocess.call(cmd,cwd=s.parent)
    inp=Path(a.input);inp=inp if inp.is_absolute() else s.parent/inp
    if a.input=='input.txt' and not inp.is_file() and s.is_relative_to(ROOT/'problems') and (ROOT/'input.txt').is_file():
        inp=ROOT/'input.txt'
    if not inp.is_file():raise Failure(f'No input file: {inp}\nUse Shift+F6 to type input in the terminal, or create input.txt beside your solution or at the workspace root and press F6.')
    print('Input:',inp,flush=True)
    expected=None
    if not a.no_check:
        expected=Path(a.expected) if a.expected else Path('output.txt')
        if not expected.is_absolute():expected=inp.parent/expected
        if not expected.is_file():
            if a.expected:raise Failure(f'Expected output file not found: {expected}')
            expected=None
    # Snapshot expected output before execution; it is never used as stdout's destination.
    expected_data=expected.read_bytes() if expected else None
    if expected:print('Expected:',expected,flush=True)
    st,out,err,code,t=capture(cmd,inp.read_bytes(),a.timeout,s.parent)
    results=s.parent/'.build/results';results.mkdir(parents=True,exist_ok=True)
    (results/(s.name+'.actual')).write_bytes(out);(results/(s.name+'.stderr')).write_bytes(err)
    sys.stdout.flush();sys.stdout.buffer.write(out);sys.stdout.buffer.flush();sys.stderr.buffer.write(err)
    success=st=='OK'
    if success and expected_data is not None:
        success=equal(out,expected_data,a.compare,a.abs_tol,a.rel_tol)
        st='PASS' if success else 'FAIL (output mismatch)'
    elif success and not a.no_check:st='RUN ONLY (no output.txt)'
    print(f'\n{st}: {t*1000:.1f}ms exit={code}')
    if st=='FAIL (output mismatch)':
        print(output_diff(expected_data,out),end='')
        print('Actual output:',results/(s.name+'.actual'))
    return 0 if success else 1

if __name__=='__main__':
    try:sys.exit(main())
    except (Failure,OSError) as e:print(str(e),file=sys.stderr);sys.exit(1)
    except KeyboardInterrupt:print('Cancelled',file=sys.stderr);sys.exit(130)
