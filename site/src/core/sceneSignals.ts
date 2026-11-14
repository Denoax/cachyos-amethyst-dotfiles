import type {MenuPresentation} from './introState'
import type {ExperienceSettings} from './experienceSettings'
export type FrameObserver=(time:number,dt:number)=>void
export class SceneSignals {
  time=0; entered=false; reduced=false; hidden=document.hidden; paused=false;
  pointer={x:innerWidth/2,y:innerHeight/2,vx:0,vy:0,time:0,known:false};
  rings=new Float32Array(8*4); ringHead=0;
  particles=new Float32Array(192*8); particleHead=0;
  observers=new Set<FrameObserver>(); layoutDirty=true;
  footer={x:0,y:1e6,width:0,height:0};
  stage:{node:HTMLElement|null;image:HTMLImageElement|null;video:HTMLVideoElement|null}={node:null,image:null,video:null};
  constructor(public intro:MenuPresentation, public settings:ExperienceSettings){}
  move=(e:PointerEvent)=>{const now=performance.now()/1000,p=this.pointer,dt=Math.max(.004,now-p.time);p.vx=(e.clientX-p.x)/dt;p.vy=(e.clientY-p.y)/dt;p.x=e.clientX;p.y=e.clientY;p.time=now;p.known=true}
  ring(x:number,y:number,strength=1){if(this.reduced)return;const i=(this.ringHead++%8)*4;this.rings.set([x,y,this.time,strength],i)}
  spray(x:number,y:number,vx:number,vy:number,press=false){
    if(this.reduced||this.settings.soundVolume===0)return;const intensity=this.settings.soundVolume/100;const count=Math.max(1,Math.round(Math.min(14,press?10:3+Math.floor(Math.hypot(vx,vy)/180))*intensity));
    for(let n=0;n<count;n++){const i=(this.particleHead++%192)*8;const angle=Math.atan2(vy,vx)+(Math.random()-.5)*1.8;const speed=25+Math.random()*120;this.particles.set([x,y,Math.cos(angle)*speed+vx*.08,Math.sin(angle)*speed+vy*.08,this.time,.28+Math.random()*.48,Math.random()*1.6+.8,press?1:0],i)}
  }
  observe(fn:FrameObserver){this.observers.add(fn);return()=>{this.observers.delete(fn)}}
  measure(){if(!this.layoutDirty)return;this.layoutDirty=false;const el=document.querySelector('[data-dot-footer]');if(el){const r=el.getBoundingClientRect();this.footer={x:r.x,y:r.y,width:r.width,height:r.height}}}
}
