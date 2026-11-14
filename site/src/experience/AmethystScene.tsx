import {useEffect,useMemo,useRef} from 'react'
import type {RefObject} from 'react'
import {useFrame,useThree} from '@react-three/fiber'
import * as THREE from 'three'
import {CursorTrail} from './cursor/CursorTrail'
import {worldsTrailOutputGLSL} from './cursor/WorldsTrailField'
import {deriveProjectPigment} from '../core/projectPigment'
import {boundedZoom} from '../core/introZoom'
import {stepIntroZoom} from '../core/introMotion'
import type {QualityProfile} from '../core/quality'
import type {SceneSignals} from '../core/sceneSignals'
import {bindDefaultFramebuffer} from './defaultFramebuffer'

const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`
const volume=`varying vec2 vUv;uniform float uTime,uZoom;uniform vec2 uResolution;
mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
float field(vec3 p){p.xz=rot(uTime*.19)*p.xz;p.xy=rot(sin(uTime*.12)*.7)*p.xy;
 float torus=length(vec2(length(p.xz)-1.18,p.y))-.38;
 float globe=length(p)-1.32;float morph=.5+.5*sin(uTime*.22);
 return mix(torus,globe,morph*.75)+sin(p.x*4.+uTime)*sin(p.y*3.-uTime*.4)*.055;}
void main(){vec2 p=(vUv-.5)*vec2(uResolution.x/uResolution.y,1.)*3.9*uZoom;vec3 origin=vec3(p,3.8);vec3 ray=normalize(vec3(p*.09,-1.));
 float t=0.,light=0.,edge=0.;for(int i=0;i<28;i++){vec3 q=origin+ray*t;float d=field(q);float density=exp(-abs(d)*13.);
 light+=density*.065;edge+=density*(.5+.5*sin(q.y*7.+uTime*.25))*.015;t+=max(.045,abs(d)*.58);if(t>7.)break;}
 gl_FragColor=vec4(clamp(light,0.,1.),clamp(edge,0.,1.),0.,1.);}`
const ascii=`varying vec2 vUv;uniform sampler2D uField,uAtlas,uTrail;uniform vec2 uResolution,uGrid,uHeadCss,uHeadPointer,uHeadPrevious;
uniform vec3 uAccent,uHeadColor;uniform float uTime,uStrength,uHeadEmit,uHeadMode,uHeadSize,uHeadMenu,uSelectionLight,uBrightness;
uniform vec4 uRings[8];uniform vec2 uPointer;
${worldsTrailOutputGLSL}
void main(){vec2 css=vec2(vUv.x,1.-vUv.y)*uResolution;vec2 warped=vUv;float wave=0.;
 for(int i=0;i<8;i++){float age=uTime-uRings[i].z;if(age>0.&&age<1.65){vec2 d=css-uRings[i].xy;float dist=length(d);float ring=sin(dist*.042-age*12.)*exp(-pow((dist-age*190.)/95.,2.))*exp(-age*1.6)*uRings[i].w;wave+=ring;warped+=normalize(d+vec2(.001))*vec2(1.,-1.)*ring*(22./uResolution);}}
 vec2 pd=css-uPointer;warped+=normalize(pd+vec2(.001))*vec2(1.,-1.)*exp(-dot(pd,pd)/11000.)*(12./uResolution)*sin(uTime*2.);vec2 cell=floor(warped*uGrid);vec2 center=(cell+.5)/uGrid;
 vec4 lum=texture2D(uField,center);float power=clamp(lum.r*1.5+wave*.19,0.,.999);float glyph=floor(power*11.);
 vec2 local=fract(warped*uGrid);float ink=texture2D(uAtlas,vec2((glyph+local.x)/12.,local.y)).a;
 float scan=.76+.24*sin(cell.y*.45-uTime*.55);vec3 tone=mix(vec3(.66),uAccent,clamp(lum.g*2.4+abs(wave)*.65,0.,.5));
 vec4 trail=worldsTrailOutput(vUv);vec3 color=vec3(.0025)+tone*ink*power*scan*uStrength;
 color+=uAccent*ink*max(0.,wave)*.055; color+=trail.rgb*trail.a*.24;gl_FragColor=vec4(color*uBrightness,1.);
 #include <colorspace_fragment>
}`
const pointsVertex=`attribute float aSeed;uniform float uTime,uDpr;uniform vec2 uResolution;uniform vec4 uRect;varying float vAlpha;
void main(){float rise=position.y;float boundary=.80+.12*sin(position.x*12.+uTime*.5)+.07*sin(position.x*29.-uTime*.3);
 float dissolve=step(fract(sin(aSeed*47.+floor(uTime*3.))*451.7),clamp((boundary-rise)*6.,0.,1.));
 vec2 p=uRect.xy+vec2(position.x*uRect.z,(1.-rise)*uRect.w);p.y+=sin(position.x*16.+uTime*.65)*10.*rise;
 gl_Position=vec4(p/uResolution*vec2(2.,-2.)+vec2(-1.,1.),0.,1.);gl_PointSize=(1.5+aSeed*1.3)*uDpr;
 vAlpha=dissolve*(.30+.5*(1.-rise));}
`
const pointsFragment=`uniform vec3 uAccent;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(mix(uAccent,vec3(.84,.70,.97),.32),vAlpha*(1.-smoothstep(.25,.5,d)));
#include <colorspace_fragment>
}`
const mediaVertex=`varying vec2 vUv;uniform vec4 uRect;uniform vec2 uResolution;void main(){vUv=uv;vec2 p=uRect.xy+vec2(uv.x,1.-uv.y)*uRect.zw;gl_Position=vec4(p/uResolution*vec2(2.,-2.)+vec2(-1.,1.),0.,1.);}`
const mediaFragment=`varying vec2 vUv;uniform sampler2D uMedia;uniform vec2 uSize;uniform bool uVideo;void main(){vec2 q=abs(vUv-.5)*uSize-(uSize*.5-vec2(10.));float d=length(max(q,0.))+min(max(q.x,q.y),0.)-10.;if(d>0.)discard;gl_FragColor=texture2D(uMedia,vUv);if(uVideo)gl_FragColor=sRGBTransferEOTF(gl_FragColor);
#include <colorspace_fragment>
}`
const sprayVertex=`attribute vec2 aOrigin,aVelocity,aTiming;attribute float aSize;uniform float uTime,uDpr;uniform vec2 uResolution;varying float vAge;varying vec2 vUv;
void main(){float age=uTime-aTiming.x;float life=max(.001,aTiming.y);vAge=age/life;vUv=uv;
 vec2 p=aOrigin+aVelocity*age+vec2(0.,110.*age*age);vec2 dir=normalize(aVelocity+vec2(.001));vec2 side=vec2(-dir.y,dir.x);p+=(dir*position.x*5.+side*position.y*1.6)*aSize;
 gl_Position=vec4(p/uResolution*vec2(2.,-2.)+vec2(-1.,1.),0.,1.);if(age<0.||age>life)gl_Position.xy=vec2(5.);}`
const sprayFragment=`varying float vAge;varying vec2 vUv;uniform vec3 uAccent;void main(){float a=(1.-vAge)*smoothstep(0.,.12,vAge)*smoothstep(.0,.12,vUv.y)*(1.-smoothstep(.88,1.,vUv.y));gl_FragColor=vec4(mix(uAccent,vec3(1.),(1.-vAge)*.3),a);
#include <colorspace_fragment>
}`

function glyphAtlas(){
 const c=document.createElement('canvas');c.width=12*32;c.height=40;const ctx=c.getContext('2d')!;
 ctx.fillStyle='white';ctx.font='26px "IBM Plex Mono",monospace';ctx.textAlign='center';ctx.textBaseline='middle';
 [...' .,:;+=*#%@&'].forEach((g,i)=>ctx.fillText(g,i*32+16,20));
 const atlas=new THREE.CanvasTexture(c);atlas.minFilter=THREE.LinearFilter;atlas.magFilter=THREE.LinearFilter;atlas.generateMipmaps=false;return atlas
}
class Field {
 root=new THREE.Group(); trail:CursorTrail; target:THREE.WebGLRenderTarget;
 fieldScene=new THREE.Scene();fieldCamera=new THREE.Camera();fieldMaterial:THREE.ShaderMaterial;
 geometry=new THREE.PlaneGeometry(2,2);atlas=glyphAtlas();material:THREE.ShaderMaterial;
 leaves:THREE.InstancedMesh;leafGeometry=new THREE.BoxGeometry(1,1,.14);leafMaterial:THREE.MeshBasicMaterial;
 footer:THREE.Points;footerGeometry=new THREE.BufferGeometry();footerMaterial:THREE.ShaderMaterial;
 sprayGeometry=new THREE.InstancedBufferGeometry();sprayMaterial:THREE.ShaderMaterial;
 origins=new Float32Array(192*2);velocities=new Float32Array(192*2);timings=new Float32Array(192*2);sizes=new Float32Array(192);
 matrix=new THREE.Matrix4();dummy=new THREE.Object3D();accent=new THREE.Color('#d559ff');pigment=deriveProjectPigment('#d559ff');lastPaint=0;lastHead=0;disposed=false;
 samples:number[]=[];frames=0;compiled=false;
 mediaMaterial:THREE.ShaderMaterial;media:THREE.Mesh;mediaTexture:THREE.Texture|null=null;mediaSource:HTMLVideoElement|HTMLImageElement|null=null;
 constructor(private gl:THREE.WebGLRenderer,private signals:SceneSignals){
  this.trail=new CursorTrail(gl,true);this.target=new THREE.WebGLRenderTarget(160,96,{depthBuffer:false});
  this.fieldMaterial=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:volume,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{uTime:{value:0},uZoom:{value:1},uResolution:{value:new THREE.Vector2(1440,900)}}});
  this.fieldScene.add(new THREE.Mesh(this.geometry,this.fieldMaterial));
  this.material=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:ascii,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{...this.trail.outputUniforms,uField:{value:this.target.texture},uAtlas:{value:this.atlas},uTrail:{value:this.trail.texture},uTime:{value:0},uResolution:{value:new THREE.Vector2()},uGrid:{value:new THREE.Vector2()},uAccent:{value:this.accent},uStrength:{value:1},uSelectionLight:{value:0},uRings:{value:signals.rings},uPointer:{value:new THREE.Vector2(-10000,-10000)},uBrightness:{value:1}}});
  const plane=new THREE.Mesh(this.geometry,this.material);plane.frustumCulled=false;plane.renderOrder=-10;this.root.add(plane);
  this.mediaMaterial=new THREE.ShaderMaterial({vertexShader:mediaVertex,fragmentShader:mediaFragment,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{uMedia:{value:null},uVideo:{value:false},uRect:{value:new THREE.Vector4()},uResolution:{value:new THREE.Vector2()},uSize:{value:new THREE.Vector2()}}});this.media=new THREE.Mesh(this.geometry,this.mediaMaterial);this.media.frustumCulled=false;this.media.renderOrder=-5;this.media.visible=false;this.root.add(this.media);
  this.leafMaterial=new THREE.MeshBasicMaterial({color:this.accent,transparent:true,opacity:.64,depthTest:false});this.leaves=new THREE.InstancedMesh(this.leafGeometry,this.leafMaterial,96);this.leaves.frustumCulled=false;this.leaves.renderOrder=0;this.root.add(this.leaves);
  const positions=new Float32Array(180*70*3),seeds=new Float32Array(180*70);
  let dot=0;for(let parity=0;parity<2;parity++)for(let y=0;y<70;y++)for(let x=0;x<180;x++){if((x+y)%2!==parity)continue;const i=dot++;positions.set([x/179,y/69,0],i*3);seeds[i]=(Math.sin(i*71.7)*431.7)%1+.5}
  this.footerGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));this.footerGeometry.setAttribute('aSeed',new THREE.BufferAttribute(seeds,1));
  this.footerMaterial=new THREE.ShaderMaterial({vertexShader:pointsVertex,fragmentShader:pointsFragment,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{uTime:{value:0},uDpr:{value:1},uResolution:{value:new THREE.Vector2()},uRect:{value:new THREE.Vector4()},uAccent:{value:this.accent}}});
  this.footer=new THREE.Points(this.footerGeometry,this.footerMaterial);this.footer.frustumCulled=false;this.footer.renderOrder=1;this.root.add(this.footer);
  const quad=new THREE.PlaneGeometry(1,1);this.sprayGeometry.index=quad.index;this.sprayGeometry.attributes.position=quad.attributes.position;this.sprayGeometry.attributes.uv=quad.attributes.uv;
  this.sprayGeometry.setAttribute('aOrigin',new THREE.InstancedBufferAttribute(this.origins,2));this.sprayGeometry.setAttribute('aVelocity',new THREE.InstancedBufferAttribute(this.velocities,2));this.sprayGeometry.setAttribute('aTiming',new THREE.InstancedBufferAttribute(this.timings,2));this.sprayGeometry.setAttribute('aSize',new THREE.InstancedBufferAttribute(this.sizes,1));this.sprayGeometry.instanceCount=192;
  this.sprayMaterial=new THREE.ShaderMaterial({vertexShader:sprayVertex,fragmentShader:sprayFragment,transparent:true,side:THREE.DoubleSide,forceSinglePass:true,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{uTime:{value:0},uDpr:{value:1},uResolution:{value:new THREE.Vector2()},uAccent:{value:this.accent}}});const spray=new THREE.Mesh(this.sprayGeometry,this.sprayMaterial);spray.frustumCulled=false;spray.renderOrder=5;this.root.add(spray);
 }
 async prepare(camera:THREE.Camera,scene:THREE.Scene){await document.fonts.load('26px "IBM Plex Mono"');if(this.disposed)return;const previous=this.atlas;this.atlas=glyphAtlas();this.material.uniforms.uAtlas.value=this.atlas;previous.dispose();await Promise.all([this.gl.compileAsync(this.fieldScene,this.fieldCamera),this.trail.prepare(),this.gl.compileAsync(scene,camera)]);if(!this.disposed)this.compiled=true}
 update(dt:number,width:number,height:number,quality:QualityProfile){
  const s=this.signals;s.measure();const time=s.time;const gridW=quality.tier==='high'?170:quality.tier==='balanced'?140:105,gridH=Math.round(gridW*height/width);
  if(this.target.width!==gridW||this.target.height!==gridH)this.target.setSize(gridW,gridH);
  const field=this.fieldMaterial.uniforms;field.uTime.value=s.entered?time:s.intro.intro.transport.angularTime;field.uZoom.value=s.entered?1:1+.18*Math.sin(boundedZoom(s.intro.intro.zoom,10)*Math.PI/5);field.uResolution.value.set(width,height);
  this.gl.setScissorTest(false);this.gl.setRenderTarget(this.target);this.gl.autoClear=true;this.gl.render(this.fieldScene,this.fieldCamera);this.gl.setRenderTarget(null);
  this.trail.step(dt,width,height,quality.tier,100,false,{clock:time,color:this.accent,reduced:s.reduced,style:'worlds',pigment:this.pigment,projectId:'amethyst'});
  const u=this.material.uniforms;u.uPointer.value.set(s.pointer.known?s.pointer.x:-10000,s.pointer.known?s.pointer.y:-10000);u.uTrail.value=this.trail.texture;u.uTime.value=time;u.uResolution.value.set(width,height);u.uGrid.value.set(Math.round(width/(quality.tier==='low'?14:10)),Math.round(height/(quality.tier==='low'?17:13)));u.uStrength.value=s.entered?(width<700?.025:.055)*(1-THREE.MathUtils.smoothstep(height-s.footer.y,0,height*.5)):.92;u.uBrightness.value=s.settings.displayBrightness/100;
  const intro=s.intro.intro;
  const stage=s.stage,source=stage.video?.readyState&&stage.video.readyState>=2?stage.video:stage.image?.complete&&stage.image.naturalWidth?stage.image:null;
  this.media.visible=Boolean(s.entered&&source&&stage.node);
  if(this.media.visible&&source&&stage.node){
   if(source!==this.mediaSource){this.mediaTexture?.dispose();this.mediaSource=source;this.mediaTexture=source instanceof HTMLVideoElement?new THREE.VideoTexture(source):new THREE.Texture(source);this.mediaTexture.colorSpace=THREE.SRGBColorSpace;this.mediaTexture.needsUpdate=true;this.mediaMaterial.uniforms.uMedia.value=this.mediaTexture;this.mediaMaterial.uniforms.uVideo.value=source instanceof HTMLVideoElement}
   const r=stage.node.getBoundingClientRect();this.mediaMaterial.uniforms.uRect.value.set(r.x+1,r.y+1,r.width-2,r.height-2);this.mediaMaterial.uniforms.uResolution.value.set(width,height);this.mediaMaterial.uniforms.uSize.value.set(r.width,r.height);stage.node.dataset.stageGpu='true';
  }
  const reveal=intro.exitProgress;
  const spanY=2*Math.tan(THREE.MathUtils.degToRad(20))*6,spanX=spanY*width/height;
  this.leaves.visible=!s.entered&&!s.reduced;
  if(this.leaves.visible){for(let i=0;i<96;i++){const seed=(Math.sin(i*13.47)*413.7)%1,edge=i%2===0?-1:1;const x=edge*(.27+Math.abs(seed)*.23)*spanX;const y=((i*.137-time*(.023+(i%7)*.003))%1-.5)*spanY;this.dummy.position.set(x*(1-reveal*.8)+Math.sin(time*.7+i)*.1+s.pointer.vx*.00008,y*(1-reveal*.65),Math.sin(i)*.55);this.dummy.rotation.set(time*.25+i,time*.32+i*.4,time*.2+i);const size=.012+(i%6)*.003;this.dummy.scale.set(size*1.8,size,.08);this.dummy.updateMatrix();this.leaves.setMatrixAt(i,this.dummy.matrix)}this.leaves.instanceMatrix.needsUpdate=true;this.leafMaterial.opacity=(1-reveal)*.65}
  const f=s.footer;this.footer.visible=f.y<height&&f.y+f.height>0&&s.entered&&!s.reduced;
  if(this.footer.visible){const q=this.footerMaterial.uniforms;q.uTime.value=time;q.uDpr.value=this.gl.getPixelRatio();q.uResolution.value.set(width,height);q.uRect.value.set(f.x,f.y,f.width,f.height);this.footerGeometry.setDrawRange(0,quality.tier==='low'?6300:12600)}
  if(this.lastHead!==s.particleHead){this.lastHead=s.particleHead;for(let i=0;i<192;i++){const at=i*8;this.origins.set([s.particles[at],s.particles[at+1]],i*2);this.velocities.set([s.particles[at+2],s.particles[at+3]],i*2);this.timings.set([s.particles[at+4],s.particles[at+5]||.5],i*2);this.sizes[i]=s.particles[at+6]}for(const a of Object.values(this.sprayGeometry.attributes))a.needsUpdate=true}
  this.sprayMaterial.uniforms.uTime.value=time;this.sprayMaterial.uniforms.uResolution.value.set(width,height);
 }
 dispose(){this.disposed=true;this.signals.stage.node?.removeAttribute('data-stage-gpu');this.mediaTexture?.dispose();this.mediaMaterial.dispose();this.trail.dispose();this.target.dispose();this.geometry.dispose();this.atlas.dispose();this.material.dispose();this.fieldMaterial.dispose();this.leafGeometry.dispose();this.leafMaterial.dispose();this.footerGeometry.dispose();this.footerMaterial.dispose();this.sprayGeometry.dispose();this.sprayMaterial.dispose()}
}

export function AmethystScene({signals,quality,baseFrame,onReady}:{signals:SceneSignals;quality:QualityProfile;baseFrame:RefObject<number>;onReady:()=>void}){
 const {gl,scene,camera,size}=useThree();const field=useMemo(()=>new Field(gl,signals),[gl,signals]);const alive=useRef(false);const first=useRef(true);
 useEffect(()=>{alive.current=true;scene.add(field.root);const detach=field.trail.connect(()=>alive.current&&!signals.reduced,signals.move);void field.prepare(camera,scene).catch(e=>console.error('Amethyst shader preparation',e));return()=>{alive.current=false;detach();scene.remove(field.root);field.dispose()}},[field,scene,camera,signals]);
 useFrame((_,delta)=>{
  if(!alive.current||document.hidden)return;const dt=Math.min(.05,delta);if(!signals.paused&&!signals.reduced){signals.time+=dt;signals.intro.intro.elapsed+=dt;stepIntroZoom(signals.intro.intro,dt)}
  field.update(signals.reduced?0:dt,size.width,size.height,quality);bindDefaultFramebuffer(gl);gl.setScissorTest(false);gl.autoClear=true;gl.render(scene,camera);baseFrame.current++;
  for(const observer of signals.observers)observer(signals.time,dt);
  if(first.current){first.current=false;onReady()}
  if(import.meta.env.DEV){field.frames++;if(field.samples.length<1800)field.samples.push(delta*1000);(window as any).__amethyst={renderer:gl.getContext().getParameter(gl.getContext().RENDERER),tier:quality.tier,frameTimes:field.samples,frames:field.frames,drawCalls:gl.info.render.calls,triangles:gl.info.render.triangles,compiled:field.compiled,canvasCount:document.querySelectorAll('canvas[data-engine]').length,particles:192,rings:8,particleHead:signals.particleHead,ringHead:signals.ringHead,time:signals.time,memory:{...gl.info.memory},source:'actual renderer measurements'}}
 },1)
 return null
}
