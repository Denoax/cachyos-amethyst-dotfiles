#!/usr/bin/env python3
"""Private, journalled user-file promotion after isolated chezmoi rendering."""
import argparse
import contextlib
import fcntl
import hashlib
import json
import os
from pathlib import Path
import shutil
import signal
import stat
import subprocess
import sys
import tempfile
import time
import tomllib
import uuid

ROOT = Path(__file__).resolve().parent.parent
COMPONENTS = {'dev-cp', 'flatpak', 'shell-patch'}

class Error(Exception):
    pass

def run(args, **kwargs):
    return subprocess.run(list(map(str, args)), check=True, **kwargs)

def digest(data):
    return hashlib.sha256(data).hexdigest()

def read_json(p):
    return json.loads(p.read_text())

def write_json(p, value):
    atomic(p, (json.dumps(value, indent=2)+'\n').encode(), 0o600)

def atomic(p, data, mode):
    p.parent.mkdir(parents=True, exist_ok=True)
    fd, name = tempfile.mkstemp(prefix='.amethyst-', dir=p.parent)
    try:
        with os.fdopen(fd, 'wb') as stream:
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
        os.chmod(name, mode)
        os.replace(name, p)
    finally:
        if os.path.exists(name):
            os.unlink(name)

def safe(home, rel, leaf=True):
    rel = Path(rel)
    if rel.is_absolute() or '..' in rel.parts or not rel.parts:
        raise Error(f'Unsafe owned path: {rel}')
    p = home/rel
    for parent in p.parents:
        if parent == home:
            break
        if parent.is_symlink():
            raise Error(f'Symlink parent rejected: {parent}')
    if leaf and p.is_symlink() and not p.resolve().is_relative_to(home):
        raise Error(f'Symlink escapes target home: {p}')
    if p.exists() and p.is_dir():
        raise Error(f'Directory/file collision: {p}')
    return p

def snapshot(p):
    if p.is_symlink():
        return {'kind':'symlink', 'target':os.readlink(p)}
    if p.is_file():
        return {'kind':'file', 'sha256':digest(p.read_bytes()), 'mode':stat.S_IMODE(p.stat().st_mode)}
    if p.exists():
        raise Error(f'Unsupported existing object: {p}')
    return {'kind':'absent'}

def target_name(rel):
    parts=[]
    for part in Path(rel).parts:
        for prefix in ('empty_', 'private_', 'readonly_', 'executable_', 'symlink_', 'exact_'):
            if part.startswith(prefix):
                part=part[len(prefix):]
        if part.startswith('dot_'):
            part='.'+part[4:]
        if part.endswith('.tmpl'):
            part=part[:-5]
        parts.append(part)
    return str(Path(*parts))

def source_files(withs):
    files={target_name(p.relative_to(ROOT/'home')):p for p in sorted((ROOT/'home').rglob('*')) if p.is_file()}
    if 'dev-cp' in withs:
        for p in sorted((ROOT/'vscode').rglob('*')):
            if p.is_file() and p.name not in ('SPEC.md', 'AGENTS.md') and '__pycache__' not in p.parts:
                files['.local/share/cachyos-amethyst/vscode/'+str(p.relative_to(ROOT/'vscode'))]=p
    if 'dev-cp' not in withs:
        files={k:v for k,v in files.items() if 'amethyst-code' not in k and 'amethyst-cp-init' not in k}
    if 'flatpak' not in withs:
        files={k:v for k,v in files.items() if 'amethyst-discover' not in k and k!='.local/share/applications/org.kde.discover.desktop'}
    return files

def overlay_files():
    lock=read_json(ROOT/'patches/caelestia-base.json')
    base=Path(lock['base_root'])
    for rel, expected in lock['files'].items():
        p=base/rel
        if not p.is_file() or p.is_symlink() or digest(p.read_bytes())!=expected:
            raise Error(f'Caelestia package base drift or missing file: {rel}. Rebase the reviewed patch; do not downgrade blindly.')
    if digest((ROOT/'patches/caelestia-2.5.0.patch').read_bytes())!=lock['patch_sha256']:
        raise Error('Patch hash differs from reviewed manifest')
    return {'.config/quickshell/caelestia/'+rel:base/rel for rel in lock['files']}

def personal_managed(home):
    cfgdir=home/'.config/chezmoi'
    if ((cfgdir/'chezmoi.yaml').exists() or (cfgdir/'chezmoi.yml').exists()) and not (home/'.config/cachyos-amethyst/other-managed.json').is_file():
        raise Error('Personal chezmoi YAML detected; export its owned paths to .config/cachyos-amethyst/other-managed.json before migration (TOML/JSON detected automatically).')
    conf={}
    for p in [cfgdir/'chezmoi.toml',cfgdir/'chezmoi.json']:
        if p.exists():
            conf=tomllib.loads(p.read_text()) if p.suffix=='.toml' else read_json(p)
    src=Path(conf.get('sourceDir',home/'.local/share/chezmoi')).expanduser()
    owned=set()
    if src.is_dir():
        for p in src.rglob('*'):
            if '.git' not in p.relative_to(src).parts and (p.is_file() or p.is_symlink()) and not p.name.startswith('.chezmoi'):
                owned.add(target_name(p.relative_to(src)))
    extra=home/'.config/cachyos-amethyst/other-managed.json'
    if extra.exists():
        owned.update(read_json(extra))
    return owned

def state_root(home):
    return home/'.local/state/cachyos-amethyst'

def selected(a):
    withs=set(filter(None,a.with_components.split(',')))
    if withs-COMPONENTS:
        raise Error('Unknown components: '+','.join(sorted(withs-COMPONENTS)))
    return withs

def packages(withs):
    data=read_json(ROOT/'packages/dependencies.json')
    groups=['core']+sorted(withs & {'dev-cp','flatpak'})
    return [pkg for group in groups for pkg in data[group]]

def plan(a, home):
    withs=selected(a)
    files=source_files(withs)
    if 'shell-patch' in withs:
        files.update(overlay_files())
    if a.profile=='workstation':
        files['.config/hypr/amethyst/workstation.lua']=ROOT/'profiles/workstation.example.lua'
    migrated=set(a.migrate_ownership)
    managed=personal_managed(home)
    conflicts=[]
    for rel in files:
        p=safe(home,rel)
        if (rel in managed or p.is_symlink()) and rel not in migrated:
            conflicts.append(rel)
    print('Profile:',a.profile,'Components:',','.join(sorted(withs)) or 'core only')
    print('Target home:',home,'Configuration-only:',a.config_only)
    print('Packages (separate, explicit --install-packages full-upgrade transaction):')
    for pkg in packages(withs):
        print(' ',pkg['name'],f"[{pkg['origin']}]",pkg['reason'])
    print('Owned files:',len(files))
    for rel in files:
        print(' ',rel, '(backup existing)' if (home/rel).exists() else '(create)')
    print('Services: none now; amethyst-session.target starts on next Hyprland login. No masks or boot/driver changes.')
    if conflicts:
        print('Ownership conflicts:',*conflicts,sep='\n  ')
        raise Error('Explicitly migrate each owned path with --migrate-ownership RELATIVE_PATH; personal manager source/state remain untouched.')
    return files,withs

def cm_render(a, home, files, withs, txn):
    src=txn/'source';dst=txn/'rendered';src.mkdir();dst.mkdir()
    for rel,p in files.items():
        # Keep chezmoi attributes only on declarative home source.
        srel=str(p.relative_to(ROOT/'home')) if p.is_relative_to(ROOT/'home') else '/'.join('dot_'+x[1:] if x.startswith('.') else x for x in Path(rel).parts)
        q=src/srel
        if p.stat().st_size==0 and not q.name.startswith('empty_'):
            q=q.with_name('empty_'+q.name)
        q.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,q)
    if 'shell-patch' in withs:
        overlay=src/'dot_config/quickshell/caelestia'
        run(['patch','--batch','--fuzz=0','-p1','-i',ROOT/'patches/caelestia-2.5.0.patch'],cwd=overlay,stdout=subprocess.DEVNULL)
    if a.profile=='workstation':
        with (src/'dot_config/hypr/amethyst/portable.lua').open('a') as f:
            f.write('\nrequire("amethyst.workstation")\n')
    config=txn/'chezmoi.json'
    write_json(config,{'data':{'targetHome':str(home),'profile':a.profile,'preferredOutput':'DP-4' if a.profile=='workstation' else ''}})
    run([a.chezmoi,'--config',config,'--source',src,'--destination',dst,'--persistent-state',txn/'chezmoi-state.boltdb','--cache',txn/'cache','--refresh-externals=never','--no-tty','apply','--force'],stdout=subprocess.DEVNULL)
    actual={str(p.relative_to(dst)) for p in dst.rglob('*') if p.is_file() or p.is_symlink()}
    if actual!=set(files):
        raise Error('Rendered file set differs from allowlist: '+str(actual^set(files)))
    for rel in files:
        p=dst/rel
        if p.is_symlink():
            raise Error('Unexpected rendered symlink')
        if p.suffix=='.json':
            read_json(p)
        if rel.startswith('.local/bin/'):
            os.chmod(p,0o755)
    # Parse without importing, writing pyc, or executing the staged helpers.
    import ast
    for p in dst.rglob('*'):
        if p.is_file() and (p.suffix=='.py' or p.read_bytes()[:22].startswith(b'#!/usr/bin/env python3')):
            ast.parse(p.read_text(),str(p))
    return dst

def restore(txn, home, journal, failure=False):
    conflicts=[]
    # Preflight the entire set: avoid a half rollback if a later file was edited.
    for row in journal['files']:
        if not row.get('started'):
            continue
        p=safe(home,row['path'])
        if snapshot(p) not in [row['post'],row['pre']]:
            conflicts.append(row['path'])
    if conflicts:
        raise Error('Rollback preserved newer edits; resolve these conflicts first: '+', '.join(conflicts))
    for row in reversed(journal['files']):
        if not row.get('started'):
            continue
        p=safe(home,row['path']);pre=row['pre']
        if snapshot(p)==pre:
            continue
        if pre['kind']=='file':
            atomic(p,(txn/row['backup']).read_bytes(),pre['mode'])
        elif pre['kind']=='symlink':
            p.unlink(missing_ok=True);p.symlink_to(pre['target'])
        else:
            p.unlink(missing_ok=True)
    journal['status']='recovered' if failure else 'rolled_back'
    write_json(txn/'journal.json',journal)
    if journal.get('previous_manifest') is None:
        (state_root(home)/'current.json').unlink(missing_ok=True)
    else:
        write_json(state_root(home)/'current.json',journal['previous_manifest'])
    print('Restored transaction',txn.name,'; packages and user application state are retained.')

def install_packages(withs):
    entries=packages(withs)
    aur=[p['name'] for p in entries if p['origin']=='AUR' and subprocess.run(['pacman','-Q',p['name']],capture_output=True).returncode]
    if aur:
        raise Error('Build the reviewed AUR dependencies as an ordinary user first; see packages/README.md: '+', '.join(aur))
    native=[p['name'] for p in entries if p['origin']=='official']
    run(['sudo','pacman','-Syu','--needed',*native])

def apply(a,home):
    files,withs=plan(a,home)
    if not shutil.which(a.chezmoi):
        raise Error('chezmoi is missing; bootstrap with sudo pacman -Syu --needed git chezmoi python')
    if a.install_packages:
        install_packages(withs)
    if not a.config_only:
        missing=[p['name'] for p in packages(withs) if subprocess.run(['pacman','-Q',p['name']],capture_output=True).returncode]
        if missing:
            raise Error('Missing packages (use the documented package steps): '+', '.join(missing))
    state=state_root(home);safe(home,str(state.relative_to(home)/'lock'))
    state.mkdir(parents=True,mode=0o700,exist_ok=True);os.chmod(state,0o700)
    with (state/'lock').open('a') as lock:
        fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
        current=read_json(state/'current.json') if (state/'current.json').exists() else None
        pending=[p for p in (state/'transactions').glob('*/journal.json') if read_json(p)['status'] in ('applying','prepared')]
        if pending:
            raise Error('Recover unfinished transaction before applying: '+pending[0].parent.name)
        ident=time.strftime('%Y%m%dT%H%M%SZ',time.gmtime())+'-'+uuid.uuid4().hex[:8]
        txn=state/'transactions'/ident;txn.mkdir(parents=True,mode=0o700)
        rendered=cm_render(a,home,files,withs,txn)
        rows=[]
        for n,rel in enumerate(files):
            p=safe(home,rel);pre=snapshot(p);post=snapshot(rendered/rel)
            if pre==post:
                continue
            row={'path':rel,'pre':pre,'post':post,'started':False,'backup':f'backups/{n}'}
            if pre['kind']=='file':
                atomic(txn/row['backup'],p.read_bytes(),0o600)
            rows.append(row)
        journal={'schema_version':1,'id':ident,'home':str(home),'status':'prepared','profile':a.profile,'components':sorted(withs),'files':rows,'previous_manifest':current,'package_transaction_requested':a.install_packages,'service_changes':[]}
        write_json(txn/'journal.json',journal)
        if not rows:
            journal['status']='no_changes';write_json(txn/'journal.json',journal)
            print('No changes; no service or process restarted.');return
        oldhandler=signal.signal(signal.SIGTERM,lambda *_: (_ for _ in ()).throw(InterruptedError('SIGTERM')))
        try:
            journal['status']='applying';write_json(txn/'journal.json',journal)
            for row in rows:
                p=safe(home,row['path'])
                if snapshot(p)!=row['pre']:
                    raise Error('Concurrent edit detected before write: '+row['path'])
                row['started']=True;write_json(txn/'journal.json',journal)
                q=rendered/row['path'];atomic(p,q.read_bytes(),row['post']['mode'])
            write_json(state/'current.json',{'transaction':ident,'profile':a.profile,'components':sorted(withs),'files':{rel:snapshot(home/rel) for rel in files}})
            journal['status']='applied';write_json(txn/'journal.json',journal)
        except BaseException:
            restore(txn,home,journal,failure=True)
            raise
        finally:
            signal.signal(signal.SIGTERM,oldhandler)
        print('Applied transaction:',ident)
        print('Rollback: ./install.sh rollback --transaction',ident)
        print('Session files are staged for next login; no live shell was restarted.')

def main(argv=None):
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command',choices=['doctor','plan','apply','verify','rollback'])
    parser.add_argument('--profile',choices=['laptop','workstation'],default='laptop')
    parser.add_argument('--with',dest='with_components',default='shell-patch',help='comma-separated dev-cp,flatpak,shell-patch; empty selects core only')
    parser.add_argument('--config-only',action='store_true',help='deploy declarative files without requiring/installing packages; no service actions')
    parser.add_argument('--install-packages',action='store_true',help='explicit pacman -Syu --needed; requires previously reviewed AUR prerequisites')
    parser.add_argument('--dry-run',action='store_true',help='read-only plan alias')
    parser.add_argument('--transaction')
    parser.add_argument('--migrate-ownership',action='append',default=[],metavar='PATH')
    parser.add_argument('--chezmoi',default='chezmoi')
    a=parser.parse_args(argv)
    if a.config_only and a.install_packages:
        raise Error('--config-only and --install-packages cannot be combined')
    if os.geteuid()==0:
        raise Error('Run as the ordinary target user, never sudo install.sh')
    home=Path.home()
    if not home.is_absolute() or home.is_symlink() or home.resolve()!=home or not home.is_dir():
        raise Error('Unsafe target home')
    for name,default in [('XDG_CONFIG_HOME',home/'.config'),('XDG_DATA_HOME',home/'.local/share'),('XDG_STATE_HOME',home/'.local/state')]:
        if os.environ.get(name) and Path(os.environ[name])!=default:
            raise Error(name+' must use the default path for this prerelease')
    if a.command=='plan' or a.dry_run:
        plan(a,home)
    elif a.command=='doctor':
        print('Read-only local preflight; no network lookup')
        for tool in [a.chezmoi,'Hyprland','hyprctl','qs','caelestia','patch','pacman']:
            print(tool,shutil.which(tool) or 'MISSING')
        print('XDG paths: default only. Package rollback: manual; file rollback: journalled.')
        print('VM/physical laptop validation must be read separately in docs/VERIFICATION.md')
    elif a.command=='apply':
        apply(a,home)
    elif a.command=='verify':
        state=state_root(home)/'current.json'
        if not state.exists():
            raise Error('No applied transaction in this home')
        manifest=read_json(state);bad=[]
        for rel,expected in manifest['files'].items():
            if snapshot(safe(home,rel))!=expected:
                bad.append(rel)
        if bad:
            raise Error('Changed/missing managed files: '+', '.join(bad))
        print('PASS managed file hashes/modes:',len(manifest['files']))
        print('Daily UI/hardware flows require the separate acceptance matrix; hashes are not UI proof.')
    else:
        if not a.transaction or Path(a.transaction).name!=a.transaction or a.transaction in ('.','..'):
            raise Error('Supply one valid --transaction ID')
        state=state_root(home);safe(home,str(state.relative_to(home)/'lock'))
        with (state/'lock').open('a') as lock:
            fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
            txn=state/'transactions'/a.transaction;journal=read_json(txn/'journal.json')
            if journal['home']!=str(home):
                raise Error('Transaction belongs to another home')
            current=read_json(state/'current.json') if (state/'current.json').exists() else None
            if journal['status']=='rolled_back':
                print('Already rolled back');return 0
            if journal['status'] not in ('applying','prepared') and current and current['transaction']!=a.transaction:
                raise Error('Rollback latest transaction first')
            restore(txn,home,journal)
    return 0

if __name__=='__main__':
    try:
        sys.exit(main())
    except (Error,OSError,ValueError,subprocess.CalledProcessError) as exc:
        print('ERROR:',exc,file=sys.stderr);sys.exit(1)
