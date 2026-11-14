import {createIntroTransport,type IntroTransport} from './introMotion'
import {createIntroRipples,type IntroRipples} from './introRipples'
export interface MenuPresentation {intro:{
    zoom: import('./introZoom').IntroZoom
    loopPeriod: number
    transport: IntroTransport
    zoomDelta: number
    zoomReset: boolean
    zoomVelocity: number
    resetActive: boolean
    resetDistance: number
    hint: HTMLElement | null
    active: boolean
    paused: boolean
    inputBlocked: boolean
    cueFontsReady: boolean
    cueEpoch: number | null
    elapsed: number
    completed: boolean
    exiting: boolean
    exitProgress: number
    holding: boolean
    ripples: IntroRipples
    finish: (() => void) | null
}}
export function createIntroPresentation():MenuPresentation{return {intro:{
      zoom: { octave: 0n, phase: 0 },
      loopPeriod: 10,
      transport: createIntroTransport(),
      zoomDelta: 0,
      zoomReset: false,
      zoomVelocity: 0,
      resetActive: false,
      resetDistance: 0,
      hint: null,
      active: false,
      paused: false,
      inputBlocked: false,
      cueFontsReady: false,
      cueEpoch: null,
      elapsed: 0,
      completed: false,
      exiting: false,
      exitProgress: 0,
      holding: false,
      ripples: createIntroRipples(),
      finish: null,
}}}
