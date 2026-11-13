#!/usr/bin/python
"""Disposable regression checks for the runner; demos are separate from real solutions."""
import importlib.util
from pathlib import Path
import subprocess,sys,tempfile,shutil,json
R=Path(__file__).resolve().parent.parent
spec=importlib.util.spec_from_file_location('cpw',R/'tools/cpw.py');w=importlib.util.module_from_spec(spec);spec.loader.exec_module(w)
CP=[sys.executable,str(R/'tools/cpw.py')]
def cli(*args,expected=0):
 r=subprocess.run(CP+list(map(str,args)),capture_output=True,text=True)
 print(r.stdout,end='');print(r.stderr,end='',file=sys.stderr)
 assert r.returncode==expected,(args,r.returncode,expected)
 return r.stdout+r.stderr
sums={
'cpp':'#include <iostream>\n#include <vector>\nint main(){long long a,b;std::cin>>a>>b;std::vector<long long> v{a,b};std::cout<<v[0]+v[1]<<"\\n";}\n',
'c':'#include <stdio.h>\nint main(void){long long a,b;if(scanf("%lld%lld",&a,&b)!=2)return 1;printf("%lld\\n",a+b);return 0;}\n',
'python':'import sys\na,b=map(int,sys.stdin.buffer.read().split())\nanswer=a+b\nprint(answer)\n',
'java':'public class Main {\n public static void main(String[] args) {\n java.util.Scanner in = new java.util.Scanner(System.in);\n long a=in.nextLong(),b=in.nextLong();\n long answer=a+b;\n System.out.println(answer);\n }\n}\n',
'rust':'use std::io::{self,Read};fn main(){let mut s=String::new();io::stdin().read_to_string(&mut s).unwrap();let a:Vec<i64>=s.split_whitespace().map(|x|x.parse().unwrap()).collect();println!("{}",a[0]+a[1]);}\n',
'go':'package main\nimport("fmt";"bufio";"os")\nfunc main(){in:=bufio.NewReader(os.Stdin);var a,b int64;fmt.Fscan(in,&a,&b);fmt.Println(a+b)}\n',
'js':'const fs=require("node:fs");const [a,b]=fs.readFileSync(0,"utf8").trim().split(/\\s+/).map(BigInt);console.log(String(a+b));\n',
 'ts':'declare function require(name:string):any;const fs=require("node:fs");const [a,b]=fs.readFileSync(0,"utf8").trim().split(/\\s+/).map(BigInt);console.log(String(a+b));\n'}

def fixture(p,lang,text=None):
 p.mkdir(parents=True,exist_ok=True);s=p/w.NAMES[lang];s.write_text(text or sums[lang]);(p/'input.txt').write_text('2 3\n');(p/'tests').mkdir(exist_ok=True);(p/'tests/sample01.in').write_text('2 3\n');(p/'tests/sample01.out').write_text('5\n');return s

def editor_checks():
 # Use an isolated workspace so selection tests never change the user's target.
 bootstrap='''import importlib.util,sys
from pathlib import Path
spec=importlib.util.spec_from_file_location('cpw',sys.argv[1])
w=importlib.util.module_from_spec(spec);spec.loader.exec_module(w)
w.ROOT=Path(sys.argv[2]);sys.argv=['cpw']+sys.argv[3:]
try: sys.exit(w.main())
except (w.Failure,OSError) as e: print(e,file=sys.stderr);sys.exit(1)
'''
 with tempfile.TemporaryDirectory(prefix='cp editor Ω ; ') as d:
  root=Path(d);p=root/'problems';p.mkdir()
  test=p/'test.cpp';test.write_text(sums['cpp'])
  other=p/'other.cpp';other.write_text('#include <iostream>\nint main(){std::cout<<99<<"\\n";}\n')
  inp=root/'input.txt';inp.write_text('2 3\n')
  notes=root/'README.md';notes.write_text('Notes')
  def run(*args,expected=0):
   res=subprocess.run([sys.executable,'-c',bootstrap,str(R/'tools/cpw.py'),str(root),*map(str,args)],capture_output=True,text=True)
   assert res.returncode==expected,(args,res.stdout,res.stderr)
   return res.stdout+res.stderr
  run('build','--context',test)
  assert (root/'.cp-source').resolve()==test
  assert '\n5\n' in run('run','--context',inp)  # root input + remembered custom source
  expected=root/'output.txt';expected.write_text('5\n')
  assert 'PASS:' in run('run','--context',expected)  # output tab keeps the solution
  local_input=p/'input.txt';local_input.write_text('2 3\n')
  local_output=p/'output.txt';local_output.write_text('6\n')
  assert 'FAIL (output mismatch)' in run('run','--context',test,expected=1)
  assert expected.read_text()=='5\n' and local_output.read_text()=='6\n'
  local_input.unlink();local_output.unlink();expected.unlink()
  assert '\n99\n' in run('run','--context',other)
  assert '\n99\n' in run('run','--context',notes)
  run('select',p,expected=1)  # two sources: no guessing
  foreign=p/'other-problem';foreign.mkdir();(foreign/'input.txt').write_text('')
  assert 'another problem' in run('run','--context',foreign/'input.txt',expected=1)
  run('build','--context',test,'--mode','debug','--expect','cpp')
  alias=root/'.build/debug/selected-cpp'
  assert alias.resolve()==p/'.build/debug/test-cpp'
  assert subprocess.check_output([str(alias)],input='2 3\n',text=True)=='5\n'
  test.write_text('broken compile !!!')
  assert 'CE:' in run('build','--context',test,'--mode','debug','--expect','cpp',expected=1)
  assert not alias.exists() and not alias.is_symlink()
 print('PASS active file, custom filenames, remembered target, root input and stale-debug checks')

def output_checks():
 with tempfile.TemporaryDirectory(prefix='cp output Ω ; ') as d:
  p=Path(d);s=p/'main.py';s.write_text(sums['python']);(p/'input.txt').write_text('2 3\n')
  expected=p/'output.txt';expected.write_bytes(b'5\n')
  assert 'PASS:' in cli('run',s)
  assert (p/'.build/results/main.py.actual').read_bytes()==b'5\n'
  expected.write_bytes(b'6\n')
  result=cli('run',s,expected=1);assert 'FAIL (output mismatch)' in result and '-6' in result and '+5' in result
  assert expected.read_bytes()==b'6\n'
  assert 'OK:' in cli('run',s,'--no-check')
  expected.write_bytes(b'5\r\n');assert 'PASS:' in cli('run',s)
  expected.write_bytes(b'5 \n');assert 'FAIL' in cli('run',s,expected=1)
  assert 'PASS:' in cli('run',s,'--compare','tokens')
  expected.write_bytes(b'5');assert 'No newline at end of file' in cli('run',s,expected=1)
  expected.write_bytes(b'');assert 'FAIL' in cli('run',s,expected=1)
  s.write_text('pass\n');assert 'PASS:' in cli('run',s)
  s.write_text('raise SystemExit(7)\n');result=cli('run',s,expected=1);assert 'RUNTIME ERROR' in result and 'PASS:' not in result
  s.write_text('while True: pass\n');result=cli('run',s,'--timeout','.1',expected=1);assert 'TIMEOUT' in result and 'PASS:' not in result
  s.write_text(sums['python']);expected.unlink();assert 'RUN ONLY (no output.txt)' in cli('run',s)
  assert 'not found' in cli('run',s,'--expected','missing.txt',expected=1)
  alternate=p/'alternate.out';alternate.write_bytes(b'5\n');assert 'PASS:' in cli('run',s,'--expected','alternate.out')
 print('PASS output.txt matching, mismatch diffs, pairing, empty files, failure statuses and expected-file preservation')

if __name__=='__main__':
 editor_checks()
 output_checks()
 with tempfile.TemporaryDirectory(prefix='cp acceptance Ω ; $ ') as d:
  d=Path(d)
  for lang in sums:
   tool={'rust':'rustc','go':'go','js':'node','ts':'tsc'}.get(lang)
   if tool and not shutil.which(tool):
    print('NOT_RUN optional language tool missing:',lang);continue
   s=fixture(d/lang,lang);cli('build',s);assert '5\n' in cli('run',s);assert 'PASS' in cli('test',s)
   print('PASS language:',lang)
  s=d/'cpp/main.cpp'
  for std in ('c++17','c++20','c++23','gnu++23'):cli('test',s,'--std',std)
  probe=fixture(d/'cxx23','cpp','#include <utility>\nconstexpr int f(int n){if consteval{return n+1;}else{return n+2;}}\nstatic_assert(f(1)==2);int main(){return std::to_underlying(static_cast<std::byte>(0));}\n')
  # if consteval is a genuine C++23 feature; avoid library prerequisites in normal templates.
  probe.write_text('#include <utility>\nconstexpr int f(int n){if consteval{return n+1;}else{return n+2;}}\nstatic_assert(f(1)==2);enum class X{zero};int main(){return std::to_underlying(X::zero);}\n')
  cli('build',probe)
  for lang in ('cpp','java'):
   s=d/lang/w.NAMES[lang];cli('run',s);s.write_text('broken compile !!!');out=cli('run',s,expected=1);assert 'CE:' in out and '\n5\n' not in out
   fixture(d/lang,lang)
  s=d/'cpp/main.cpp';(s.parent/'tests/sample01.out').write_text('6\n');assert 'MISMATCH' in cli('test',s,expected=1)
  (s.parent/'tests/sample01.out').unlink();assert 'RUN ONLY' in cli('test',s,expected=1)
  (s.parent/'tests/sample01.in').unlink();assert 'NO TESTS' in cli('test',s,expected=2)
  a=fixture(d/'first Ω ; $','cpp');b=fixture(d/'second Ω ; $','cpp');cli('test',a);cli('test',b)
  py=fixture(d/'timeout','python','import subprocess,sys,time\np=subprocess.Popen([sys.executable,"-c","import time;time.sleep(120)"])\nprint(p.pid,flush=True)\ntime.sleep(120)\n');out=cli('run',py,'--timeout','.2',expected=1);assert 'TIMEOUT' in out
  child=int(next(x for x in out.splitlines() if x.isdigit()));proc=Path('/proc')/str(child)/'stat';assert not proc.exists() or proc.read_text().split()[2]=='Z'
  py.write_text('import os\nwhile True:os.write(1,b"x"*65536)\n');cmd=w.build(py);res=w.capture(cmd,b'',1);assert res[0]=='OUTPUT LIMIT' and len(res[1])<=w.LIMIT
  py.write_text('import sys\nsys.exit(7)\n');assert 'RUNTIME ERROR' in cli('run',py,expected=1)
  san=fixture(d/'san','cpp','#include <cstdlib>\nint main(){volatile int *a = new int[1];a[3]=7;int result=a[3];delete[] a;return result;}\n');san_result=cli('run',san,'--mode','sanitize',expected=1);assert 'RUNTIME ERROR' in san_result and ('AddressSanitizer' in san_result or 'runtime error:' in san_result)
  assert w.equal(b'a\r\n',b'a\n') and not w.equal(b'a \n',b'a\n')
  assert w.equal(b'1  2\n',b'1\n2','tokens') and not w.equal(b'nan',b'nan','float')
  assert w.equal(b'inf',b'inf','float') and not w.equal(b'inf',b'-inf','float')
  assert w.equal(b'1.0000000001',b'1','float')
  # Compile all starters independently (including Java negative/EOF parser below).
  for lang,name in w.NAMES.items():
   tool={'rust':'rustc','go':'go','js':'node','ts':'tsc'}.get(lang)
   if tool and not shutil.which(tool):continue
   q=d/'templates'/lang;q.mkdir(parents=True);shutil.copy(R/'templates'/name,q/name);cli('build',q/name)
 print('PASS runner regression suite')
