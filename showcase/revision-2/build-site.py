#!/usr/bin/env python3
"""Build only the public gallery allowlist; verify release media before copying."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import urllib.request

ROOT=Path(__file__).resolve().parents[2]
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def build(output,fetch=False):
    output=output.resolve()
    if not output.is_relative_to(ROOT/'.build'):raise SystemExit('Site output must remain under the checkout .build directory')
    manifest=json.loads((ROOT/'showcase/revision-2/media.json').read_text())
    output.parent.mkdir(parents=True,exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='gallery-',dir=output.parent) as tmp:
        tmp=Path(tmp);(tmp/'assets').mkdir();(tmp/'media').mkdir();(tmp/'candidates').mkdir()
        for name in ['index.html','style.css','app.js']:shutil.copy2(ROOT/'site'/name,tmp/name)
        shutil.copy2(ROOT/'showcase/revision-2/CREDITS.md',tmp/'CREDITS.md')
        for asset in manifest['assets']:
            relative=Path(asset['path'])
            if relative.is_absolute() or '..' in relative.parts or relative.parent!=Path('showcase/revision-2/assets'):raise SystemExit('Asset escapes the public allowlist')
            if not re.fullmatch(r'[a-z0-9][a-z0-9.-]+',relative.name):raise SystemExit('Unsafe asset name')
            source=ROOT/relative
            if source.is_symlink() or source.resolve().parent!=ROOT/'showcase/revision-2/assets':raise SystemExit('Symlink asset or ancestor refused')
            if not source.is_file():
                if not fetch:raise SystemExit('Missing optimized media; use --fetch-media after the release is published: '+relative.name)
                url=asset['download']
                if not url.startswith('https://github.com/Denoax/cachyos-amethyst-dotfiles/releases/download/'+manifest['release']+'/'):raise SystemExit('Unexpected media origin')
                cache=ROOT/'.build/media-cache';cache.mkdir(exist_ok=True);source=cache/relative.name
                if not source.exists() or digest(source)!=asset['sha256']:
                    req=urllib.request.Request(url,headers={'User-Agent':'Amethyst-Gallery-Build'})
                    with urllib.request.urlopen(req,timeout=90) as response,source.open('wb') as target:
                        while chunk:=response.read(65536):target.write(chunk)
            if source.stat().st_size!=asset['bytes'] or digest(source)!=asset['sha256']:raise SystemExit('Asset integrity failure: '+relative.name)
            subdir='media' if source.suffix=='.mp4' else 'assets';shutil.copy2(source,tmp/subdir/relative.name)
        (tmp/'media.json').write_text(json.dumps(manifest['site'],indent=2)+'\n')
        for letter in ['a','b','c']:
            page=(ROOT/f'showcase/revision-2/candidates/{letter}.html').read_text().replace('<base href="../../../site/">','<base href="../">')
            page=page.replace('Layout trial. Identical alpha.1 footage; no new V2 motion approval.','Retained layout alternative. The final V2 library is available in this review; continuous human motion review remains pending.')
            page=page.replace('media/cpp.mp4','media/cpp-debug.mp4').replace('The coding workspace · alpha.1 comparison','The coding workspace · revision 2')
            (tmp/'candidates'/f'{letter}.html').write_text(page)
        (tmp/'.nojekyll').touch()
        commit=subprocess.check_output(['git','-C',str(ROOT),'rev-parse','HEAD'],text=True).strip()
        payload=sum(p.stat().st_size for p in tmp.rglob('*') if p.is_file())
        if payload>450*1024*1024:raise SystemExit('Optimized gallery exceeds the reviewed 450 MiB payload budget')
        (tmp/'build.json').write_text(json.dumps({'source_commit':commit,'release':manifest['release'],'payload_bytes':payload,'media_manifest_sha256':digest(ROOT/'showcase/revision-2/media.json'),'raw_wallpaper_included':False},indent=2)+'\n')
        if output.exists():shutil.rmtree(output)
        shutil.copytree(tmp,output)
    print(f'Built public-only gallery: {payload:,} bytes; source {commit}')

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--output',type=Path,required=True);p.add_argument('--fetch-media',action='store_true');a=p.parse_args();build(a.output,a.fetch_media)
