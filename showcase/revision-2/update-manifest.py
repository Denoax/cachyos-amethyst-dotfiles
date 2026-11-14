#!/usr/bin/env python3
"""Rebuild the curated gallery manifest from verified public encode lineage."""
import hashlib,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
HERE=Path(__file__).resolve().parent

def main():
    library=json.loads((HERE/'library.json').read_text());assets={};lineage={}
    for path in sorted((HERE/'assets').glob('*.json')):
        meta=json.loads(path.read_text());lineage[path.stem]=meta
        for item in meta['published']:
            rel=Path(item['path'])
            if rel.is_absolute() or '..' in rel.parts or rel.parent!=Path('showcase/revision-2/assets'):raise SystemExit('Unsafe published asset')
            file=ROOT/rel
            if file.is_symlink() or file.resolve().parent!=HERE/'assets' or not file.is_file():raise SystemExit('Missing or symlink asset: '+str(rel))
            digest=hashlib.sha256(file.read_bytes()).hexdigest()
            if digest!=item['sha256'] or file.stat().st_size!=item['bytes']:raise SystemExit('Changed derivative: '+str(rel))
            if rel.name in assets:raise SystemExit('Duplicate delivery basename')
            assets[rel.name]={'path':str(rel),'bytes':item['bytes'],'sha256':digest,'download':'https://github.com/Denoax/cachyos-amethyst-dotfiles/releases/download/'+library['release']+'/'+rel.name}
    clips=[];stills=[]
    for entry in library['clips']:
        name=entry['file'];meta=lineage[name];video=next(p for p in meta['published'] if p['path'].endswith('.mp4'));duration=float(video['probe']['format']['duration'])
        clip={k:v for k,v in entry.items() if k!='file'}
        clip.update(video='media/'+name+'.mp4',poster='assets/'+name+'.jpg',still='assets/'+name+'.png',durationLabel=f'{duration:.0f}s',download=assets[name+'.mp4']['download'])
        clips.append(clip);stills.append({'src':clip['poster'],'full':clip['still'],'title':entry['title']})
    tour={'title':'Amethyst / the 89-second tour','video':'media/amethyst-tour.mp4','poster':'assets/desktop.jpg','still':'assets/desktop.png','download':assets['amethyst-tour.mp4']['download'],'loop':False}
    site={'version':library['release']+' · source-PC evidence · human motion review pending','tour':tour,'clips':clips,'stills':stills,'chapters':library['chapters']}
    manifest={'schema_version':2,'release':library['release'],'baseline':{'tag':'v0.1.0-alpha.1','sha':'a2f360a11550c6c578f6eb3576752fdc6a00fc64'},'source_policy':'Only final optimized derivatives listed here are public. Raw wallpaper, raw captures, application profiles, private runtime state and reference downloads are excluded.','motion_review':'MOTION_REVIEW_PENDING','assets':list(assets.values()),'lineage_files':['assets/'+p.name for p in sorted((HERE/'assets').glob('*.json'))],'film_edl':'film.json','site':site}
    (HERE/'media.json').write_text(json.dumps(manifest,indent=2)+'\n')
    print('Verified and cataloged',len(assets),'delivery files,',len(clips),'films and',len(stills),'stills')
if __name__=='__main__':main()
