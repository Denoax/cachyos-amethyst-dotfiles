import {useCallback,useEffect,useLayoutEffect,useRef,useState,useSyncExternalStore} from 'react'
import {GooeyNav} from './GooeyNav'
import {ExperienceSettings} from './ExperienceSettings'
import {IdentityIntro} from './IdentityIntro'
import {TypeBreak} from './TypeBreak'
import {CodeScene} from './CodeScene'
import {ExperienceCanvas} from '../experience/ExperienceCanvas'
import {paneFlights} from '../experience/glass/PaneFlights'
import {useGlassDialogMotion} from '../hooks/useGlassDialogMotion'
import {createIntroPresentation} from '../core/introState'
import {SceneSignals} from '../core/sceneSignals'
import {loadSettings,saveSettings} from '../core/experienceSettings'
import {lowerQuality,selectQuality} from '../core/quality'
import {useSiteTheme} from '../core/theme'
import {PreviewPlayback} from '../core/previewPlayback'
import {features,type Feature} from '../content/features'

const repo='https://github.com/Denoax/cachyos-amethyst-dotfiles'
const docs=repo+'/blob/main/docs/'
function FeatureRow({feature,open,onSelect}:{feature:Feature;open:boolean;onSelect:()=>void}){
 const trigger=useRef<HTMLButtonElement>(null),pane=useRef<HTMLDivElement>(null)
 useGlassDialogMotion(pane,open,onSelect,trigger)
 return <div className="feature-row" data-open={open}>
  <button ref={trigger} type="button" className="feature-trigger" aria-expanded={open} aria-controls={'feature-'+feature.id} onClick={onSelect}>
   <span>{feature.title}</span><span aria-hidden="true">{open?'−':'+'}</span>
  </button>
  <div ref={pane} id={'feature-'+feature.id} className="feature-detail glass-window" data-glass-lens="window" hidden={!open}>
   <p>{feature.description}</p>{feature.binding?<kbd>{feature.binding}</kbd>:null}
   <p className="feature-scope">{feature.scope}</p>
  </div>
 </div>
}
function DesktopStage({feature,playback,entered,visible,signals,failed}:{feature:Feature;playback:PreviewPlayback;entered:boolean;visible:boolean;signals:SceneSignals;failed:boolean}){
 const snapshot=useSyncExternalStore(playback.subscribe,playback.getSnapshot),holder=useRef<HTMLDivElement>(null)
 const active=snapshot.projectId===feature.id
 useEffect(()=>{const video=playback.video;signals.stage={node:holder.current,image:holder.current?.querySelector('img')??null,video:active?video:null};if(failed)holder.current?.removeAttribute('data-stage-gpu');if(!video||!holder.current||!active)return;video.setAttribute('aria-hidden',String(!failed));video.setAttribute('aria-label',feature.title+' desktop recording');video.controls=failed;holder.current.append(video)},[active,feature,snapshot.generation,snapshot.state,playback,signals,failed])
 useEffect(()=>{playback.setPaused(!visible)},[visible,playback])
 useEffect(()=>{if(!holder.current)return;let resume=false;const observer=new IntersectionObserver(entries=>{const view=entries[0]?.isIntersecting;if(!view){resume=playback.getSnapshot().state==='playing';if(resume)playback.setPaused(true)}else if(resume){resume=false;playback.setPaused(false)}},{threshold:.1});observer.observe(holder.current);return()=>observer.disconnect()},[playback])
 useEffect(()=>()=>playback.stop(),[playback])
 const play=()=>{playback.setPaused(false);playback.start(feature,'explicit')}
 return <figure className="desktop-stage" id="desktop-stage">
  <div className="desktop-media" ref={holder}>
   <img src={feature.poster} alt={feature.title+' on the actual Amethyst desktop'} width="1280" height="720" fetchPriority="high" />
   {(!active||snapshot.state==='error'||snapshot.state==='poster'||snapshot.state==='gif')?<button type="button" className="stage-play ui-action" onClick={play} disabled={!entered} aria-label={'Play '+feature.title+' recording'}>Play {feature.title.toLowerCase()}</button>:null}
   {active&&snapshot.state==='preparing'?<span className="media-status" role="status">Loading recording…</span>:null}
  </div>
  <figcaption><span>{feature.title}</span><span>{active&&snapshot.state==='error'?'Video unavailable. Try again or open the recording.':'Actual desktop · muted'} {active&&['playing','paused'].includes(snapshot.state)?<button type="button" className="media-toggle" onClick={()=>playback.setPaused(snapshot.state==='playing')}>{snapshot.state==='playing'?'Pause':'Play'}</button>:null}<button type="button" className="media-toggle" onClick={()=>{playback.stop();play()}}>Replay</button><a href={feature.mp4}>Open clip</a></span></figcaption>
 </figure>
}
export function App(){
 const [settings,setSettings]=useState(loadSettings),[storageUnavailable,setStorageUnavailable]=useState(false)
 const [systemReduced,setSystemReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)
 const reduced=systemReduced||settings.motion==='less'
 const presentation=useRef(createIntroPresentation())
 const [signals]=useState(()=>new SceneSignals(presentation.current,settings))
 const [playback]=useState(()=>new PreviewPlayback())
 const [quality,setQuality]=useState(()=>selectQuality(settings.graphics))
 const [entered,setEntered]=useState(()=>Boolean(location.hash)),[exiting,setExiting]=useState(false),[entryRequest,setEntryRequest]=useState(0)
 const [hidden,setHidden]=useState(document.hidden),[failed,setFailed]=useState(false),[ready,setReady]=useState(false)
 const initialFeature=Math.max(0,features.findIndex(f=>f.id===location.hash.slice(1)))
 const [selected,setSelected]=useState(initialFeature),[expanded,setExpanded]=useState<number|null>(initialFeature),[settingsOpen,setSettingsOpen]=useState(false),[nav,setNav]=useState(0)
 const settingsTrigger=useRef<HTMLButtonElement>(null),navGroup=useRef<HTMLDivElement>(null),main=useRef<HTMLElement>(null)
 const motionReduced=reduced||failed
 useSiteTheme('dark',motionReduced)
 signals.settings=settings;signals.reduced=motionReduced;signals.entered=entered;signals.hidden=hidden
 presentation.current.intro.active=!entered
 const fail=useCallback(()=>setFailed(true),[]),overload=useCallback(()=>setQuality(q=>lowerQuality(q)),[]),markReady=useCallback(()=>setReady(true),[])
 const enter=useCallback(()=>{setEntered(true);setExiting(false);signals.entered=true;signals.layoutDirty=true;requestAnimationFrame(()=>{main.current?.focus({preventScroll:true});if(!location.hash)window.scrollTo(0,0)})},[signals])
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)'),change=()=>setSystemReduced(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change)},[])
 useEffect(()=>{setStorageUnavailable(!saveSettings(settings));if(reduced)paneFlights.finish()},[settings,reduced])
 useEffect(()=>{const visibility=()=>{setHidden(document.hidden);signals.hidden=document.hidden};const layout=()=>{signals.layoutDirty=true};document.addEventListener('visibilitychange',visibility);window.addEventListener('resize',layout);window.addEventListener('scroll',layout,{passive:true});const observer=new ResizeObserver(layout);if(main.current)observer.observe(main.current);const footer=document.querySelector('footer');if(footer)observer.observe(footer);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);window.removeEventListener('resize',layout);window.removeEventListener('scroll',layout)}},[signals])
 useEffect(()=>{const click=(e:PointerEvent)=>{if(e.button!==0)return;if(!(e.target instanceof Element&&e.target.closest('button,a,input,select,dialog')))signals.ring(e.clientX,e.clientY,2);if(e.target instanceof Element&&e.target.closest('button,input[type="checkbox"]'))signals.spray(e.clientX,e.clientY,0,-120,true)};window.addEventListener('pointerdown',click,{passive:true});return()=>window.removeEventListener('pointerdown',click)},[signals])
 useEffect(()=>{if(!entered)return;const timer=window.setTimeout(()=>{if(!reduced&&selected===0)playback.start(features[0],'hover')},120);return()=>clearTimeout(timer)},[entered,playback,reduced])
 useEffect(()=>{playback.setPolicy(true,!hidden)},[hidden,playback])
 useEffect(()=>{if(motionReduced){playback.stopHover();for(const observer of signals.observers)observer(signals.time,0)}},[motionReduced,playback,signals])
 useEffect(()=>()=>{playback.dispose();paneFlights.finish()},[playback])
 useEffect(()=>{signals.layoutDirty=true},[expanded,entered,settingsOpen,signals])
 useEffect(()=>{const route=()=>{const id=location.hash.slice(1),index=features.findIndex(f=>f.id===id);if(index>=0){setEntered(true);setSelected(index);setExpanded(index);playback.stop();requestAnimationFrame(()=>main.current?.scrollIntoView())}else if(id==='install'||id==='features'){setEntered(true);requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView())}};route();window.addEventListener('hashchange',route);return()=>window.removeEventListener('hashchange',route)},[playback])
 useLayoutEffect(()=>{document.querySelectorAll<HTMLElement>('.feature-trigger')[selected]?.scrollIntoView({block:'nearest',inline:'nearest'})},[selected,entered])
 const select=(index:number)=>{history.replaceState(null,'','#'+features[index].id);setSelected(index);setExpanded(current=>current===index?null:index);playback.setPaused(false);playback.start(features[index],'explicit');signals.layoutDirty=true}
 const navigate=(index:number)=>{setNav(index);if(index===3){setSettingsOpen(value=>!value);return}if(index===0){setSelected(0);setExpanded(0);playback.stop()}setSettingsOpen(false);if(!entered)enter();requestAnimationFrame(()=>document.getElementById(['desktop','features','install'][index])?.scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'}))}
 return <div className="amethyst-app" data-reduced={motionReduced} data-graphics={failed?'fallback':'webgl'}>
  {!failed?<ExperienceCanvas signals={signals} quality={quality} visible={!hidden} onFailure={fail} onOverload={overload} onReady={markReady}/>:null}
  <a className="skip-link" href="#desktop" onClick={enter}>Skip to desktop</a>
  <header className="site-header"><a className="wordmark" href="#desktop" onClick={enter}>Amethyst</a><div ref={navGroup}><GooeyNav size="sm" value={settingsOpen?3:nav} onChange={navigate} reduced={reduced} items={[
   {label:'Desktop'}, {label:'Features'}, {label:'Install'}, {label:'Settings',buttonRef:settingsTrigger,expanded:settingsOpen,controls:'experience-settings'}
  ]}/></div></header>
  {!entered?<section className="entry-stage" aria-label="Amethyst entrance">
   <IdentityIntro presentation={presentation} staticView={reduced||failed} paused={hidden||settingsOpen} entryRequest={entryRequest} exiting={exiting} ready={true} onDone={enter} onEntryCancel={()=>{}} onExitStateChange={setExiting} onActivate={()=>{}} onInteract={()=>{}} onSnap={()=>{}} onHold={holding=>{signals.paused=holding}}/>
   <div className="entry-actions"><p>A personal Linux desktop.</p><button className="ui-action entry-button" type="button" onClick={()=>setEntryRequest(n=>n+1)}>Enter desktop <span aria-hidden="true">↵</span></button><button className="entry-skip" type="button" onClick={enter}>Skip intro</button></div>
  </section>:null}
  <main ref={main} id="desktop" tabIndex={-1} hidden={!entered}>
   <section className="desktop-section" aria-labelledby="desktop-title">
    <div className="desktop-copy"><h1 id="desktop-title">Amethyst</h1><p className="collection">Desktop collection</p><p className="desktop-base">CachyOS · Hyprland · Caelestia</p>
     <div className="feature-stack" id="features" aria-label="Desktop features">{features.map((feature,i)=><FeatureRow key={feature.id} feature={feature} open={expanded===i} onSelect={()=>select(i)}/>)}</div>
    </div>
    <DesktopStage feature={features[selected]} playback={playback} entered={entered} visible={!hidden} signals={signals} failed={failed}/>
   </section>
   <div className="mid-band"><TypeBreak signals={signals}/><div id="install"><CodeScene signals={signals}/></div></div>
   <footer className="site-footer" data-dot-footer>
    <a className="install-strip" href={docs+'INSTALL.md'}><span>Install on a fresh CachyOS system</span><span>Requirements, file plan, recovery <span aria-hidden="true">↗</span></span></a>
    <div className="footer-plane"><div className="footer-identity"><h2>Amethyst</h2><p>A personal Linux desktop.</p><p className="alpha-note">Experimental alpha</p></div>
     <div><h3>Install</h3><a href={docs+'INSTALL.md'}>Requirements</a><a href={docs+'INSTALL.md#recover'}>Rollback</a><a href={docs+'COMPATIBILITY.md'}>Compatibility</a></div>
     <div><h3>Source</h3><a href={repo}>Repository</a><a href={repo+'/releases'}>Releases</a><a href={repo+'/issues'}>Issues</a></div>
     <div><h3>Credits</h3><a href={docs+'ASSETS.md'}>Components & artwork</a><a href="https://github.com/Denoax/portfolio">Portfolio foundation</a><a href="https://www.rareui.com/components/gooeynav">GooeyNav · Rare UI</a></div>
     <div className="faq"><details><summary>Can I install this on my laptop?</summary><p>The laptop profile is staged. Fresh installation, first login, suspend and physical GPU validation are pending. Read the compatibility notes first.</p></details><details><summary>What has been verified?</summary><p>The showcase records this desktop. Package checks do not establish fresh-system acceptance. Portal and Flatpak flows have known failures; lock and unlock are not demonstrated.</p></details></div>
    </div><div className="footer-bottom"><span>Amethyst</span><a href="#desktop">Back to desktop ↑</a></div>
   </footer>
  </main>
  <ExperienceSettings open={settingsOpen} onClose={()=>setSettingsOpen(false)} trigger={settingsTrigger} anchor={navGroup} settings={settings} onChange={setSettings} reduced={motionReduced} storageUnavailable={storageUnavailable} onSpray={signals.spray.bind(signals)}/>
  {failed?<div className="graphics-note" role="status">Graphics are unavailable. Desktop recordings, controls and links remain available.</div>:null}
 </div>
}
