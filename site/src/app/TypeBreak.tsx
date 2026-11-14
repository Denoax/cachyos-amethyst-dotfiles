import {useEffect,useRef} from 'react'
import type {SceneSignals} from '../core/sceneSignals'
const rows=['launch search focus','windows ∑ shortcuts','clipboard AMETHYST λ','files sound daily life'];const glyphs='∑λ+×=<>:{}[]01';
export function TypeBreak({signals}:{signals:SceneSignals}){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const node=root.current;if(!node)return;const chars=[...node.querySelectorAll<HTMLElement>('[data-char]')];let last=-1;const reset=()=>chars.forEach(el=>{el.textContent=el.dataset.char!;el.removeAttribute('data-disturbed')});const off=signals.observe(time=>{if(signals.reduced){reset();return}const step=Math.floor(time*12);if(step===last)return;last=step;const r=node.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=signals.pointer;for(let i=0;i<chars.length;i++){const el=chars[i],b=el.getBoundingClientRect(),d=Math.hypot(b.x+b.width/2-p.x,b.y+b.height/2-p.y);if(p.known&&d<78&&el.dataset.char!==' '){el.textContent=glyphs[(i+step)%glyphs.length];el.dataset.disturbed='true'}else{el.textContent=el.dataset.char!;el.removeAttribute('data-disturbed')}}});return()=>{off();reset()}},[signals]);
 return <section className="type-pause" aria-label="Launch, focus, windows, shortcuts, clipboard, files and sound"><div ref={root} aria-hidden="true">{rows.map(row=><div key={row}>{[...row].map((c,i)=><span data-char={c} className={row.includes('AMETHYST')?'type-accent':undefined} key={i}>{c}</span>)}</div>)}</div></section>
}
