export interface Feature {
  id:string; title:string; description:string; poster:string;
  mp4:string; portraitMp4:string; video?:string; portraitVideo?:string;
  previewMotion?:boolean; binding?:string; scope:string;
}
export const features:Feature[] = [
  {id:'desktop',title:'Desktop',description:'The moving monochrome wallpaper and Caelestia rail.',scope:'Actual desktop footage. Audio is off.',binding:'',poster:'media/desktop.jpg',mp4:'media/desktop.mp4',portraitMp4:'media/desktop.mp4'},
  {id:'launcher',title:'Launcher',description:'Applications stay a keystroke away.',scope:'The real launcher opening and closing over the current wallpaper.',binding:'Super + Space',poster:'media/launcher.jpg',mp4:'media/launcher.mp4',portraitMp4:'media/launcher.mp4'},
  {id:'dashboard',title:'Dashboard',description:'Calendar, resources and current media.',scope:'Read-only shell view; no device or playback changes.',poster:'media/dashboard.jpg',mp4:'media/dashboard.mp4',portraitMp4:'media/dashboard.mp4'},
  {id:'audio',title:'Audio controls',description:'Speaker and microphone controls.',scope:'UI demonstration. Audible output and microphone recording are untested.',poster:'media/audio.jpg',mp4:'media/audio.mp4',portraitMp4:'media/audio.mp4'},
  {id:'shortcuts',title:'Shortcuts',description:'The shipped keybinding guide.',scope:'Generated from the shipped Lua bindings. Shown in the normal terminal.',binding:'Super + F1',poster:'media/shortcuts.jpg',mp4:'media/shortcuts.mp4',portraitMp4:'media/shortcuts.mp4'},
  {id:'gather',title:'Gather & restore',description:'Bring the visible demo windows together, then return them.',scope:'Three outputs; workspace and floating geometry restoration checked.',binding:'Super + D',poster:'media/gather.jpg',mp4:'media/gather.mp4',portraitMp4:'media/gather.mp4'},
  {id:'terminal-group',title:'Terminal group',description:'A single transition for resources, system info and the visualizer.',scope:'The real on-demand group. Actual live system values, no fabricated telemetry.',binding:'Super + Shift + D',poster:'media/terminal-group.jpg',mp4:'media/terminal-group.mp4',portraitMp4:'media/terminal-group.mp4'},
  {id:'clipboard',title:'Clipboard',description:'Search a small clipboard history.',scope:'An isolated demonstration database; the existing clipboard was restored.',binding:'',poster:'media/clipboard.jpg',mp4:'media/clipboard.mp4',portraitMp4:'media/clipboard.mp4'},
  {id:'notification',title:'Notifications',description:'A real local notification over the desktop.',scope:'Only the owned demonstration notification is shown.',binding:'',poster:'media/notification.jpg',mp4:'media/notification.mp4',portraitMp4:'media/notification.mp4'},
  {id:'dolphin',title:'Files',description:'Open Samples and return to the file workspace.',scope:'Dolphin at normal application opacity. Address bar and autocomplete blurred for local-path privacy.',binding:'Super + E',poster:'media/dolphin.jpg',mp4:'media/dolphin.mp4',portraitMp4:'media/dolphin.mp4'},
  {id:'discover',title:'Discover · unavailable',description:'The requested application is unavailable in this demo profile.',scope:'Real isolated-profile catalog state. No successful install, sandbox launch or portal flow is claimed.',binding:'',poster:'media/discover.jpg',mp4:'media/discover.mp4',portraitMp4:'media/discover.mp4'},
  {id:'editor',title:'Editor',description:'Monochromator Dark Amethyst in the actual editor.',scope:'One appearance scene at normal opacity, with harmless sample code.',binding:'',poster:'media/editor.jpg',mp4:'media/editor.mp4',portraitMp4:'media/editor.mp4'},
]
export const installCode = './install.sh doctor\n./install.sh plan --profile laptop\n./install.sh apply --profile laptop\n./install.sh verify'
