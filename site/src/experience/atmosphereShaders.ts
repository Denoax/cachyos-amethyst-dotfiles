// Shared fullscreen pass vertex from the pinned portfolio. Unused ocean sky
// and ray helpers are deliberately omitted from this site.
export const screenVertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`
