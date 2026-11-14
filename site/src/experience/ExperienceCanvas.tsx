// Adapted from Denoax/portfolio 72a3c7a: renderer boundary, output and lifetime
// ownership retained; Hub-specific artwork/content replaced by AmethystScene.
import {Canvas,useFrame,useThree} from '@react-three/fiber'
import {Component,useCallback,useEffect,useLayoutEffect,useRef} from 'react'
import type {ReactNode} from 'react'
import * as THREE from 'three'
import type {QualityProfile} from '../core/quality'
import type {SceneSignals} from '../core/sceneSignals'
import {configureDisplayOutput} from './displayOutput'
import {retainCompilingMaterials} from './retainCompilingMaterials'
import {bindDefaultFramebuffer} from './defaultFramebuffer'
import {QualityController} from './QualityController'
import {GlassLayer} from './glass/GlassLayer'
import {paneFlights} from './glass/PaneFlights'
import {AmethystScene} from './AmethystScene'
class GraphicsBoundary extends Component<{children:ReactNode;onFailure:()=>void},{failed:boolean}>{
 state={failed:false};static getDerivedStateFromError(){return {failed:true}}
 componentDidCatch(){this.props.onFailure()}
 render(){return this.state.failed?null:this.props.children}
}
function DefaultFramebuffer(){const {gl}=useThree();const initialized=useRef(false);useFrame(()=>{if(!initialized.current){initialized.current=true;gl.resetState();gl.autoClear=true;gl.autoClearColor=true;gl.autoClearDepth=true;gl.autoClearStencil=true}bindDefaultFramebuffer(gl);gl.setScissorTest(false)},-3);return null}
function StaticFrames({signals,brightness}:{signals:SceneSignals;brightness:number}){const invalidate=useThree(s=>s.invalidate);useEffect(()=>{invalidate();if(!signals.reduced)return;const update=()=>invalidate();for(const name of ['scroll','resize','pointerup','wheel','keydown','input','change','play','pause','loadeddata','load'])window.addEventListener(name,update,true);return()=>{for(const name of ['scroll','resize','pointerup','wheel','keydown','input','change','play','pause','loadeddata','load'])window.removeEventListener(name,update,true)}},[signals,signals.reduced,brightness,invalidate]);useFrame(()=>{if(signals.reduced&&signals.stage.video&&!signals.stage.video.paused)invalidate()});return null}
export function ExperienceCanvas({signals,quality,visible,onFailure,onOverload,onReady}:{signals:SceneSignals;quality:QualityProfile;visible:boolean;onFailure:()=>void;onOverload:()=>void;onReady:()=>void}){
 const baseFrame=useRef(0),alive=useRef(true),detachContextListener=useRef<(()=>void)|null>(null);
 useLayoutEffect(()=>{alive.current=true;return()=>{alive.current=false;detachContextListener.current?.()}},[]);
 const reportFailure=useCallback(()=>{if(alive.current){paneFlights.available=false;paneFlights.finish();onFailure()}},[onFailure]);
 return <div className="experience-canvas experience-canvas--visible" aria-hidden="true"><GraphicsBoundary onFailure={reportFailure}>
  <Canvas dpr={quality.dpr} frameloop={visible?(signals.reduced?'demand':'always'):'never'} camera={{position:[0,0,6],fov:40,near:.1,far:50}}
   gl={defaults=>{try{const renderer=new THREE.WebGLRenderer({...defaults,antialias:quality.tier!=='low',alpha:false,powerPreference:'high-performance'});renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;return renderer}catch(error){reportFailure();throw error}}}
   onCreated={({gl})=>{if(!alive.current)return;configureDisplayOutput(gl);retainCompilingMaterials(gl);gl.setClearColor('#080808',1);const lost=(event:Event)=>{event.preventDefault();reportFailure()};detachContextListener.current?.();gl.domElement.addEventListener('webglcontextlost',lost);detachContextListener.current=()=>gl.domElement.removeEventListener('webglcontextlost',lost)}}>
    <DefaultFramebuffer/><StaticFrames signals={signals} brightness={signals.settings.displayBrightness}/>{!signals.reduced?<QualityController quality={quality} onOverload={onOverload}/>:null}
    <AmethystScene signals={signals} quality={quality} baseFrame={baseFrame} onReady={onReady}/>
    <GlassLayer world={false} baseFrame={baseFrame}/>
  </Canvas>
 </GraphicsBoundary></div>
}
