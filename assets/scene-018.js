function Rh(i,e){let t=e>>>0;const r=()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296);let n=0;function a(l,u,p,h,d){const g=[l];let v=l,m=u;for(let f=0;f<p;f++){m+=(r()-.48)*d;const w=h*(.55+.8*r()),M=[v[0]+Math.cos(m)*w,v[1]+Math.sin(m)*w];i[n++].set(v[0],v[1],M[0],M[1]),g.push(M),v=M}return g}const s=r()*Math.PI*2,o=a([0,0],s,7,.2,1.13),c=a([0,0],s+Math.PI+(r()-.5)*1.4,6,.15,.94);for(const[l,u,p,h]of[[o,2,4,1],[o,4,3,-1],[c,2,4,-1]]){const d=l[u],g=l[u-1];a(d,Math.atan2(d[1]-g[1],d[0]-g[0])+h*(.35+r()*.85),p,.1,1.28)}}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const $n="180",Sl=0,Ws=1,bl=2,Xs=1,El=2,gr=3,Cr=0,Dt=1,vr=2,_r=0,li=1,yn=2,qs=3,Ys=4,wl=5,kr=100,Tl=101,Al=102,Rl=103,Cl=104,Ll=200,Pl=201,Ul=202,Dl=203,ea=204,ta=205,Il=206,Nl=207,Fl=208,Ol=209,Bl=210,zl=211,kl=212,Hl=213,Gl=214,ra=0,ia=1,na=2,ci=3,aa=4,sa=5,oa=6,la=7,js=0,Vl=1,Wl=2,Lr=0,Xl=1,ql=2,Yl=3,jl=4,Zl=5,Jl=6,Kl=7,Zs=300,ui=301,hi=302,ca=303,ua=304,Mn=306,Sn=1e3,Hr=1001,ha=1002,Vt=1003,Ql=1004,bn=1005,Pt=1006,da=1007,xr=1008,yr=1009,Js=1010,Ks=1011,Ii=1012,pa=1013,Gr=1014,lr=1015,di=1016,fa=1017,ma=1018,Ni=1020,Qs=35902,$s=35899,eo=1021,to=1022,$t=1023,Fi=1026,Oi=1027,ga=1028,va=1029,ro=1030,_a=1031,xa=1033,En=33776,wn=33777,Tn=33778,An=33779,ya=35840,Ma=35841,Sa=35842,ba=35843,Ea=36196,wa=37492,Ta=37496,Aa=37808,Ra=37809,Ca=37810,La=37811,Pa=37812,Ua=37813,Da=37814,Ia=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Ha=36492,Ga=36494,Va=36495,Wa=36283,Xa=36284,qa=36285,Ya=36286,$l=3200,ec=3201,tc=0,rc=1,Mr="",qt="srgb",pi="srgb-linear",Rn="linear",lt="srgb",fi=7680,io=519,ic=512,nc=513,ac=514,no=515,sc=516,oc=517,lc=518,cc=519,ao=35044,uc=35048,ja="300 es",cr=2e3,Cn=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const n=r[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const Ln=Math.PI/180,Pn=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function so(i,e){return(i%e+e)%e}function Ch(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Lh(i,e,t){return i!==e?(t-i)/(e-i):0}function Un(i,e,t){return(1-t)*i+t*e}function Ph(i,e,t,r){return Un(i,e,1-Math.exp(-t*r))}function Uh(i,e=1){return e-Math.abs(so(i,e*2)-e)}function Dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fh(i,e){return i+Math.random()*(e-i)}function Oh(i){return i*(.5-Math.random())}function Bh(i){i!==void 0&&(hc=i);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zh(i){return i*Ln}function kh(i){return i*Pn}function Hh(i){return(i&i-1)===0&&i!==0}function Gh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wh(i,e,t,r,n){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+r)/2),u=s((e+r)/2),p=a((e-r)/2),h=s((e-r)/2),d=a((r-e)/2),g=s((r-e)/2);switch(n){case"XYX":i.set(o*u,c*p,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Za={DEG2RAD:Ln,RAD2DEG:Pn,generateUUID:Bi,clamp:Qe,euclideanModulo:so,mapLinear:Ch,inverseLerp:Lh,lerp:Un,damp:Ph,pingpong:Uh,smoothstep:Dh,smootherstep:Ih,randInt:Nh,randFloat:Fh,randFloatSpread:Oh,seededRandom:Bh,degToRad:zh,radToDeg:kh,isPowerOfTwo:Hh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Wh,normalize:Ft,denormalize:zi};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let c=r[n+0],l=r[n+1],u=r[n+2],p=r[n+3];const h=a[s+0],d=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(p!==v||c!==h||l!==d||u!==g){let m=1-o;const f=c*h+l*d+u*g+p*v,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,f*w);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}const _=o*w;if(c=c*m+h*_,l=l*m+d*_,u=u*m+g*_,p=p*m+v*_,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=T,l*=T,u*=T,p*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],p=a[s],h=a[s+1],d=a[s+2],g=a[s+3];return e[t]=o*g+u*p+c*d-l*h,e[t+1]=c*g+u*h+l*p-o*d,e[t+2]=l*g+u*d+o*h-c*p,e[t+3]=u*g-o*p-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),p=o(a/2),h=c(r/2),d=c(n/2),g=c(a/2);switch(s){case"XYZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"YZX":this._x=h*u*p+l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p-h*d*g;break;case"XZY":this._x=h*u*p-l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],h=r+o+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(a-l)*d,this._z=(s-n)*d}else if(r>o&&r>p){const d=2*Math.sqrt(1+r-o-p);this._w=(u-c)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(a+l)/d}else if(o>p){const d=2*Math.sqrt(1+o-r-p);this._w=(a-l)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+p-r-o);this._w=(s-n)/d,this._x=(a+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*o+n*l-a*c,this._y=n*u+s*c+a*o-r*l,this._z=a*u+s*l+r*c-n*o,this._w=s*u-r*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),p=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=s*p+this._w*h,this._x=r*p+this._x*h,this._y=n*p+this._y*h,this._z=a*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,r=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*r),u=2*(o*t-a*n),p=2*(a*r-s*t);return this.x=t+c*l+s*p-o*u,this.y=r+c*u+o*l-a*p,this.z=n+c*p+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-r*c,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new N,dc=new ki;class Ze{constructor(e,t,r,n,a,s,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l)}set(e,t,r,n,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],u=r[4],p=r[7],h=r[2],d=r[5],g=r[8],v=n[0],m=n[3],f=n[6],w=n[1],M=n[4],_=n[7],T=n[2],R=n[5],P=n[8];return a[0]=s*v+o*w+c*T,a[3]=s*m+o*M+c*R,a[6]=s*f+o*_+c*P,a[1]=l*v+u*w+p*T,a[4]=l*m+u*M+p*R,a[7]=l*f+u*_+p*P,a[2]=h*v+d*w+g*T,a[5]=h*m+d*M+g*R,a[8]=h*f+d*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-r*a*u+r*o*c+n*a*l-n*s*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*s-o*l,h=o*c-u*a,d=l*a-s*c,g=t*p+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(n*l-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=h*v,e[4]=(u*t-n*c)*v,e[5]=(n*a-o*t)*v,e[6]=d*v,e[7]=(r*c-l*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(r*c,r*l,-r*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lo.makeScale(e,t)),this}rotate(e){return this.premultiply(lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Ze;function pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fc(){const i=Ja("canvas");return i.style.display="block",i}const mc={};function Dn(i){i in mc||(mc[i]=!0,console.warn(i))}function Xh(i,e,t){return new Promise(function(r,n){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const gc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===lt&&(n.r=Pr(n.r),n.g=Pr(n.g),n.b=Pr(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===lt&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mr?Rn:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return Dn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return Dn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:r,transfer:Rn,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:r,transfer:lt,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const it=qh();function Pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class _c{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gi===void 0&&(Gi=Ja("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=Gi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=Pr(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Pr(t[r]/255)*255):t[r]=Pr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yh=0;class Ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(co(n[s].image)):a.push(co(n[s]))}else a=co(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;const uo=new N;class Rt extends mi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,r=Hr,n=Hr,a=Pt,s=xr,o=$t,c=yr,l=Rt.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Bi(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=Zs,Rt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,r=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],c=s[4],l=s[8],u=s[1],p=s[5],h=s[9],d=s[2],g=s[6],v=s[10];if(Math.abs(c-u)<.01&&Math.abs(l-d)<.01&&Math.abs(h-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+d)<.1&&Math.abs(h+g)<.1&&Math.abs(o+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,w=(p+1)/2,M=(v+1)/2,_=(c+u)/4,T=(l+d)/4,R=(h+g)/4;return f>w&&f>M?f<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(f),n=_/r,a=T/r):w>M?w<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(w),r=_/n,a=R/n):M<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),r=T/a,n=R/a),this.set(r,n,a,t),this}let m=Math.sqrt((g-h)*(g-h)+(l-d)*(l-d)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(g-h)/m,this.y=(l-d)/m,this.z=(u-c)/m,this.w=Math.acos((o+p+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends mi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:r.depth},a=new Rt(n);this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ka(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends xc{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ho extends Rt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yc extends Rt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,hr):hr.fromBufferAttribute(a,s),hr.applyMatrix4(e.matrixWorld),this.expandByPoint(hr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(In),$a.subVectors(this.max,In),Vi.subVectors(e.a,In),Wi.subVectors(e.b,In),Xi.subVectors(e.c,In),Wr.subVectors(Wi,Vi),Xr.subVectors(Xi,Wi),gi.subVectors(Vi,Xi);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-gi.z,gi.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,gi.z,0,-gi.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-gi.y,gi.x,0];return!po(t,Vi,Wi,Xi,$a)||(t=[1,0,0,0,1,0,0,0,1],!po(t,Vi,Wi,Xi,$a))?!1:(es.crossVectors(Wr,Xr),t=[es.x,es.y,es.z],po(t,Vi,Wi,Xi,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ur=[new N,new N,new N,new N,new N,new N,new N,new N],hr=new N,Qa=new Vr,Vi=new N,Wi=new N,Xi=new N,Wr=new N,Xr=new N,gi=new N,In=new N,$a=new N,es=new N,vi=new N;function po(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){vi.fromArray(i,a);const o=n.x*Math.abs(vi.x)+n.y*Math.abs(vi.y)+n.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),u=r.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Zh=new Vr,Nn=new N,fo=new N;class _i{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Zh.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nn.subVectors(e,this.center);const t=Nn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Nn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nn.copy(e.center).add(fo)),this.expandByPoint(Nn.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dr=new N,mo=new N,ts=new N,qr=new N,go=new N,rs=new N,vo=new N;class is{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dr.copy(this.origin).addScaledVector(this.direction,t),Dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){mo.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(mo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ts),o=qr.dot(this.direction),c=-qr.dot(ts),l=qr.lengthSq(),u=Math.abs(1-s*s);let p,h,d,g;if(u>0)if(p=s*c-o,h=s*o-c,g=a*u,p>=0)if(h>=-g)if(h<=g){const v=1/u;p*=v,h*=v,d=p*(p+s*h+2*o)+h*(s*p+h+2*c)+l}else h=a,p=Math.max(0,-(s*h+o)),d=-p*p+h*(h+2*c)+l;else h=-a,p=Math.max(0,-(s*h+o)),d=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-s*a+o)),h=p>0?-a:Math.min(Math.max(-a,-c),a),d=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-a,-c),a),d=h*(h+2*c)+l):(p=Math.max(0,-(s*a+o)),h=p>0?a:Math.min(Math.max(-a,-c),a),d=-p*p+h*(h+2*c)+l);else h=s>0?-a:a,p=Math.max(0,-(s*h+o)),d=-p*p+h*(h+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(mo).addScaledVector(ts,h),d}intersectSphere(e,t){Dr.subVectors(e.center,this.origin);const r=Dr.dot(this.direction),n=Dr.dot(Dr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,n=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,n=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Dr)!==null}intersectTriangle(e,t,r,n,a){go.subVectors(t,e),rs.subVectors(r,e),vo.crossVectors(go,rs);let s=this.direction.dot(vo),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qr.subVectors(this.origin,e);const c=o*this.direction.dot(rs.crossVectors(qr,rs));if(c<0)return null;const l=o*this.direction.dot(go.cross(qr));if(l<0||c+l>s)return null;const u=-o*qr.dot(vo);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,r,n,a,s,o,c,l,u,p,h,d,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,c,l,u,p,h,d,g,v,m)}set(e,t,r,n,a,s,o,c,l,u,p,h,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=r,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/qi.setFromMatrixColumn(e,0).length(),a=1/qi.setFromMatrixColumn(e,1).length(),s=1/qi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const h=s*u,d=s*p,g=o*u,v=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+d*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h+v*o,t[4]=g*o-d,t[8]=s*l,t[1]=s*p,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h-v*o,t[4]=-s*p,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*u,d=s*p,g=o*u,v=o*p;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+v,t[1]=c*p,t[5]=v*l+h,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,d=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*p,t[8]=g*p+d,t[1]=p,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=s*c,d=s*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=h*p+v,t[5]=s*u,t[9]=d*p-g,t[2]=g*p-d,t[6]=o*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,Kh)}lookAt(e,t,r){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yr.crossVectors(r,Yt),Yr.lengthSq()===0&&(Math.abs(r.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yr.crossVectors(r,Yt)),Yr.normalize(),ns.crossVectors(Yt,Yr),n[0]=Yr.x,n[4]=ns.x,n[8]=Yt.x,n[1]=Yr.y,n[5]=ns.y,n[9]=Yt.y,n[2]=Yr.z,n[6]=ns.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],u=r[1],p=r[5],h=r[9],d=r[13],g=r[2],v=r[6],m=r[10],f=r[14],w=r[3],M=r[7],_=r[11],T=r[15],R=n[0],P=n[4],E=n[8],y=n[12],S=n[1],U=n[5],I=n[9],B=n[13],G=n[2],X=n[6],W=n[10],V=n[14],F=n[3],K=n[7],he=n[11],Le=n[15];return a[0]=s*R+o*S+c*G+l*F,a[4]=s*P+o*U+c*X+l*K,a[8]=s*E+o*I+c*W+l*he,a[12]=s*y+o*B+c*V+l*Le,a[1]=u*R+p*S+h*G+d*F,a[5]=u*P+p*U+h*X+d*K,a[9]=u*E+p*I+h*W+d*he,a[13]=u*y+p*B+h*V+d*Le,a[2]=g*R+v*S+m*G+f*F,a[6]=g*P+v*U+m*X+f*K,a[10]=g*E+v*I+m*W+f*he,a[14]=g*y+v*B+m*V+f*Le,a[3]=w*R+M*S+_*G+T*F,a[7]=w*P+M*U+_*X+T*K,a[11]=w*E+M*I+_*W+T*he,a[15]=w*y+M*B+_*V+T*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*c*p-n*l*p-a*o*h+r*l*h+n*o*d-r*c*d)+v*(+t*c*d-t*l*h+a*s*h-n*s*d+n*l*u-a*c*u)+m*(+t*l*p-t*o*d-a*s*p+r*s*d+a*o*u-r*l*u)+f*(-n*o*u-t*c*p+t*o*h+n*s*p-r*s*h+r*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=p*m*l-v*h*l+v*c*d-o*m*d-p*c*f+o*h*f,M=g*h*l-u*m*l-g*c*d+s*m*d+u*c*f-s*h*f,_=u*v*l-g*p*l+g*o*d-s*v*d-u*o*f+s*p*f,T=g*p*c-u*v*c-g*o*h+s*v*h+u*o*m-s*p*m,R=t*w+r*M+n*_+a*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=w*P,e[1]=(v*h*a-p*m*a-v*n*d+r*m*d+p*n*f-r*h*f)*P,e[2]=(o*m*a-v*c*a+v*n*l-r*m*l-o*n*f+r*c*f)*P,e[3]=(p*c*a-o*h*a-p*n*l+r*h*l+o*n*d-r*c*d)*P,e[4]=M*P,e[5]=(u*m*a-g*h*a+g*n*d-t*m*d-u*n*f+t*h*f)*P,e[6]=(g*c*a-s*m*a-g*n*l+t*m*l+s*n*f-t*c*f)*P,e[7]=(s*h*a-u*c*a+u*n*l-t*h*l-s*n*d+t*c*d)*P,e[8]=_*P,e[9]=(g*p*a-u*v*a-g*r*d+t*v*d+u*r*f-t*p*f)*P,e[10]=(s*v*a-g*o*a+g*r*l-t*v*l-s*r*f+t*o*f)*P,e[11]=(u*o*a-s*p*a-u*r*l+t*p*l+s*r*d-t*o*d)*P,e[12]=T*P,e[13]=(u*v*n-g*p*n+g*r*h-t*v*h-u*r*m+t*p*m)*P,e[14]=(g*o*n-s*v*n-g*r*c+t*v*c+s*r*m-t*o*m)*P,e[15]=(s*p*n-u*o*n+u*r*c-t*p*c-s*r*h+t*o*h)*P,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*s,0,l*c-n*o,u*c+n*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,p=o+o,h=a*l,d=a*u,g=a*p,v=s*u,m=s*p,f=o*p,w=c*l,M=c*u,_=c*p,T=r.x,R=r.y,P=r.z;return n[0]=(1-(v+f))*T,n[1]=(d+_)*T,n[2]=(g-M)*T,n[3]=0,n[4]=(d-_)*R,n[5]=(1-(h+f))*R,n[6]=(m+w)*R,n[7]=0,n[8]=(g+M)*P,n[9]=(m-w)*P,n[10]=(1-(h+v))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=qi.set(n[0],n[1],n[2]).length();const s=qi.set(n[4],n[5],n[6]).length(),o=qi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],dr.copy(this);const c=1/a,l=1/s,u=1/o;return dr.elements[0]*=c,dr.elements[1]*=c,dr.elements[2]*=c,dr.elements[4]*=l,dr.elements[5]*=l,dr.elements[6]*=l,dr.elements[8]*=u,dr.elements[9]*=u,dr.elements[10]*=u,t.setFromRotationMatrix(dr),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,n,a,s,o=cr,c=!1){const l=this.elements,u=2*a/(t-e),p=2*a/(r-n),h=(t+e)/(t-e),d=(r+n)/(r-n);let g,v;if(c)g=a/(s-a),v=s*a/(s-a);else if(o===cr)g=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Cn)g=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=cr,c=!1){const l=this.elements,u=2/(t-e),p=2/(r-n),h=-(t+e)/(t-e),d=-(r+n)/(r-n);let g,v;if(c)g=1/(s-a),v=s/(s-a);else if(o===cr)g=-2/(s-a),v=-(s+a)/(s-a);else if(o===Cn)g=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const qi=new N,dr=new ht,Jh=new N(0,0,0),Kh=new N(1,1,1),Yr=new N,ns=new N,Yt=new N,Mc=new ht,Sc=new ki;class Ar{constructor(e=0,t=0,r=0,n=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],u=n[9],p=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class as{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qh=0;const bc=new N,Yi=new ki,Ir=new ht,ss=new N,Fn=new N,$h=new N,ed=new ki,Ec=new N(1,0,0),wc=new N(0,1,0),Tc=new N(0,0,1),Ac={type:"added"},td={type:"removed"},ji={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ht extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new N,t=new Ar,r=new ki,n=new N(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ss.copy(e):ss.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Fn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Fn,ss,this.up):Ir.lookAt(ss,Fn,this.up),this.quaternion.setFromRotationMatrix(Ir),n&&(Ir.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Ir),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fn,e,$h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fn,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),p=s(e.shapes),h=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),p.length>0&&(r.shapes=p),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ht.DEFAULT_UP=new N(0,1,0),Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pr=new N,Nr=new N,xo=new N,Fr=new N,Zi=new N,Ji=new N,Rc=new N,yo=new N,Mo=new N,So=new N,bo=new at,Eo=new at,wo=new at;class nr{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),pr.subVectors(e,t),n.cross(pr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){pr.subVectors(n,t),Nr.subVectors(r,t),xo.subVectors(e,t);const s=pr.dot(pr),o=pr.dot(Nr),c=pr.dot(xo),l=Nr.dot(Nr),u=Nr.dot(xo),p=s*l-o*o;if(p===0)return a.set(0,0,0),null;const h=1/p,d=(l*c-o*u)*h,g=(s*u-o*c)*h;return a.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,r,n,a,s,o,c){return this.getBarycoord(e,t,r,n,Fr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Fr.x),c.addScaledVector(s,Fr.y),c.addScaledVector(o,Fr.z),c)}static getInterpolatedAttribute(e,t,r,n,a,s){return bo.setScalar(0),Eo.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,r),wo.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(bo,a.x),s.addScaledVector(Eo,a.y),s.addScaledVector(wo,a.z),s}static isFrontFacing(e,t,r,n){return pr.subVectors(r,t),Nr.subVectors(e,t),pr.cross(Nr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),pr.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return nr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;Zi.subVectors(n,r),Ji.subVectors(a,r),yo.subVectors(e,r);const c=Zi.dot(yo),l=Ji.dot(yo);if(c<=0&&l<=0)return t.copy(r);Mo.subVectors(e,n);const u=Zi.dot(Mo),p=Ji.dot(Mo);if(u>=0&&p<=u)return t.copy(n);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(Zi,s);So.subVectors(e,a);const d=Zi.dot(So),g=Ji.dot(So);if(g>=0&&d<=g)return t.copy(a);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(r).addScaledVector(Ji,o);const m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return Rc.subVectors(a,n),o=(p-u)/(p-u+(d-g)),t.copy(n).addScaledVector(Rc,o);const f=1/(m+v+h);return s=v*f,o=h*f,t.copy(r).addScaledVector(Zi,s).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},os={h:0,s:0,l:0};function To(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=r,it.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=it.workingColorSpace){if(e=so(e,1),t=Qe(t,0,1),r=Qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=To(s,a,e+1/3),this.g=To(s,a,e),this.b=To(s,a,e-1/3)}return it.colorSpaceToWorking(this,n),this}setStyle(e,t=qt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const r=Cc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(Qe(Nt.r*255,0,255))*65536+Math.round(Qe(Nt.g*255,0,255))*256+Math.round(Qe(Nt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const r=Nt.r,n=Nt.g,a=Nt.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const p=s-o;switch(l=u<=.5?p/(s+o):p/(2-s-o),s){case r:c=(n-a)/p+(n<a?6:0);break;case n:c=(a-r)/p+2;break;case a:c=(r-n)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,r=Nt.g,n=Nt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(os);const r=Un(jr.h,os.h,t),n=Un(jr.s,os.s,t),a=Un(jr.l,os.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ot;ot.NAMES=Cc;let rd=0;class Ki extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=li,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ea&&(r.blendSrc=this.blendSrc),this.blendDst!==ta&&(r.blendDst=this.blendDst),this.blendEquation!==kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==io&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ao extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new N,ls=new Ce;let id=0;class er{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ao,this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),n=Ft(n,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ao&&(e.usage=this.usage),e}}class Ro extends er{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Co extends er{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tt extends er{constructor(e,t,r){super(new Float32Array(e),t,r)}}let nd=0;const tr=new ht,Lo=new Ht,Qi=new N,jt=new Vr,On=new Vr,At=new N;class kt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Co:Ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ze().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tr.makeRotationFromQuaternion(e),this.applyMatrix4(tr),this}rotateX(e){return tr.makeRotationX(e),this.applyMatrix4(tr),this}rotateY(e){return tr.makeRotationY(e),this.applyMatrix4(tr),this}rotateZ(e){return tr.makeRotationZ(e),this.applyMatrix4(tr),this}translate(e,t,r){return tr.makeTranslation(e,t,r),this.applyMatrix4(tr),this}scale(e,t,r){return tr.makeScale(e,t,r),this.applyMatrix4(tr),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Tt(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];jt.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];On.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(jt.min,On.min),jt.expandByPoint(At),At.addVectors(jt.max,On.max),jt.expandByPoint(At)):(jt.expandByPoint(On.min),jt.expandByPoint(On.max))}jt.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(At));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)At.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),At.add(Qi)),n=Math.max(n,r.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new er(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<r.count;E++)o[E]=new N,c[E]=new N;const l=new N,u=new N,p=new N,h=new Ce,d=new Ce,g=new Ce,v=new N,m=new N;function f(E,y,S){l.fromBufferAttribute(r,E),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,S),h.fromBufferAttribute(a,E),d.fromBufferAttribute(a,y),g.fromBufferAttribute(a,S),u.sub(l),p.sub(l),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(U),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),o[E].add(v),o[y].add(v),o[S].add(v),c[E].add(m),c[y].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,y=w.length;E<y;++E){const S=w[E],U=S.start,I=S.count;for(let B=U,G=U+I;B<G;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new N,_=new N,T=new N,R=new N;function P(E){T.fromBufferAttribute(n,E),R.copy(T);const y=o[E];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(R,y);const S=_.dot(c[E])<0?-1:1;s.setXYZW(E,M.x,M.y,M.z,S)}for(let E=0,y=w.length;E<y;++E){const S=w[E],U=S.start,I=S.count;for(let B=U,G=U+I;B<G;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new er(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new N,a=new N,s=new N,o=new N,c=new N,l=new N,u=new N,p=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),p.subVectors(n,a),u.cross(p),o.fromBufferAttribute(r,g),c.fromBufferAttribute(r,v),l.fromBufferAttribute(r,m),o.add(u),c.add(u),l.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),p.subVectors(n,a),u.cross(p),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[d++]}return new er(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,p=l.length;u<p;u++){const h=l[u],d=e(h,r);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const d=l[p];u.push(d.toJSON(e.data))}u.length>0&&(n[c]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],p=a[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const p=s[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ht,xi=new is,cs=new _i,Pc=new N,us=new N,hs=new N,ds=new N,Po=new N,ps=new N,Uc=new N,fs=new N;class _t extends Ht{constructor(e=new kt,t=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){ps.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],p=a[c];u!==0&&(Po.fromBufferAttribute(p,e),s?ps.addScaledVector(Po,u):ps.addScaledVector(Po.sub(t),u))}t.add(ps)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cs.copy(r.boundingSphere),cs.applyMatrix4(a),xi.copy(e.ray).recast(e.near),!(cs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(cs,Pc)===null||xi.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Lc.copy(a).invert(),xi.copy(e.ray).applyMatrix4(Lc),!(r.boundingBox!==null&&xi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,p=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=s[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,T=M;_<T;_+=3){const R=o.getX(_),P=o.getX(_+1),E=o.getX(_+2);n=ms(this,f,e,r,l,u,p,R,P,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const w=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);n=ms(this,s,e,r,l,u,p,w,M,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=s[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=w,T=M;_<T;_+=3){const R=_,P=_+1,E=_+2;n=ms(this,f,e,r,l,u,p,R,P,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const w=m,M=m+1,_=m+2;n=ms(this,s,e,r,l,u,p,w,M,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ad(i,e,t,r,n,a,s,o){let c;if(e.side===Dt?c=r.intersectTriangle(s,a,n,!0,o):c=r.intersectTriangle(n,a,s,e.side===Cr,o),c===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:i}}function ms(i,e,t,r,n,a,s,o,c,l){i.getVertexPosition(o,us),i.getVertexPosition(c,hs),i.getVertexPosition(l,ds);const u=ad(i,e,t,r,us,hs,ds,Uc);if(u){const p=new N;nr.getBarycoord(Uc,us,hs,ds,p),n&&(u.uv=nr.getInterpolatedAttribute(n,o,c,l,p,new Ce)),a&&(u.uv1=nr.getInterpolatedAttribute(a,o,c,l,p,new Ce)),s&&(u.normal=nr.getInterpolatedAttribute(s,o,c,l,p,new N),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new N,materialIndex:0};nr.getNormal(us,hs,ds,h.normal),u.face=h,u.barycoord=p}return u}class si extends kt{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],p=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,s,a,0),g("z","y","x",1,-1,r,t,-e,s,a,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,a,4),g("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(p,2));function g(v,m,f,w,M,_,T,R,P,E,y){const S=_/P,U=T/E,I=_/2,B=T/2,G=R/2,X=P+1,W=E+1;let V=0,F=0;const K=new N;for(let he=0;he<W;he++){const Le=he*U-B;for(let Se=0;Se<X;Se++){const Ue=Se*S-I;K[v]=Ue*w,K[m]=Le*M,K[f]=G,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),p.push(Se/P),p.push(1-he/E),V+=1}}for(let he=0;he<E;he++)for(let Le=0;Le<P;Le++){const Se=h+Le+X*he,Ue=h+Le+X*(he+1),De=h+(Le+1)+X*(he+1),He=h+(Le+1)+X*he;c.push(Se,Ue,He),c.push(Ue,De,He),F+=6}o.addGroup(d,F,y),d+=F,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const r=$i(i[t]);for(const n in r)e[n]=r[n]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ic={clone:$i,merge:Ot};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class yi extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new N,Nc=new Ce,Fc=new Ce;class Wt extends yi{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ln*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pn*2*Math.atan(Math.tan(Ln*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Fc),t.subVectors(Fc,Nc)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ln*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*r/l,n*=s.width/c,r*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const en=-90,tn=1;class Oc extends Ht{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(en,tn,e,t);n.layers=this.layers,this.add(n);const a=new Wt(en,tn,e,t);a.layers=this.layers,this.add(a);const s=new Wt(en,tn,e,t);s.layers=this.layers,this.add(s);const o=new Wt(en,tn,e,t);o.layers=this.layers,this.add(o);const c=new Wt(en,tn,e,t);c.layers=this.layers,this.add(c);const l=new Wt(en,tn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===cr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cn)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,c),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(p,h,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Uo extends Rt{constructor(e=[],t=ui,r,n,a,s,o,c,l,u){super(e,t,r,n,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bc extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Uo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new si(5,5,5),a=new St({name:"CubemapFromEquirect",uniforms:$i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dt,blending:_r});a.uniforms.tEquirect.value=t;const s=new _t(n,a),o=t.minFilter;return t.minFilter===xr&&(t.minFilter=Pt),new Oc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}class Bn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cd={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cd)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Bn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Mi extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zc extends Rt{constructor(e=null,t=1,r=1,n,a,s,o,c,l=Vt,u=Vt,p,h){super(null,s,o,c,l,u,n,a,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr extends er{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rn=new ht,kc=new ht,vs=[],Hc=new Vr,ud=new ht,zn=new _t,kn=new _i;class Do extends _t{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,ud)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,rn),Hc.copy(e.boundingBox).applyMatrix4(rn),this.boundingBox.union(Hc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,rn),kn.copy(e.boundingSphere).applyMatrix4(rn),this.boundingSphere.union(kn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=r.length+1,s=e*a+1;for(let o=0;o<r.length;o++)r[o]=n[s+o]}raycast(e,t){const r=this.matrixWorld,n=this.count;if(zn.geometry=this.geometry,zn.material=this.material,zn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kn.copy(this.boundingSphere),kn.applyMatrix4(r),e.ray.intersectsSphere(kn)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,rn),kc.multiplyMatrices(r,rn),zn.matrixWorld=kc,zn.raycast(e,vs);for(let s=0,o=vs.length;s<o;s++){const c=vs[s];c.instanceId=a,c.object=this,t.push(c)}vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(n*this.count),n,this.count,ga,lr));const a=this.morphTexture.source.data.data;let s=0;for(let l=0;l<r.length;l++)s+=r[l];const o=this.geometry.morphTargetsRelative?1:1-s,c=n*e;a[c]=o,a.set(r,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Io=new N,hd=new N,dd=new Ze;class Jr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Io.subVectors(r,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Io),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||dd.getNormalMatrix(e),n=this.coplanarPoint(Io).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new _i,pd=new Ce(.5,.5),_s=new N;class No{constructor(e=new Jr,t=new Jr,r=new Jr,n=new Jr,a=new Jr,s=new Jr){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=cr,r=!1){const n=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],p=a[5],h=a[6],d=a[7],g=a[8],v=a[9],m=a[10],f=a[11],w=a[12],M=a[13],_=a[14],T=a[15];if(n[0].setComponents(l-s,d-u,f-g,T-w).normalize(),n[1].setComponents(l+s,d+u,f+g,T+w).normalize(),n[2].setComponents(l+o,d+p,f+v,T+M).normalize(),n[3].setComponents(l-o,d-p,f-v,T-M).normalize(),r)n[4].setComponents(c,h,m,_).normalize(),n[5].setComponents(l-c,d-h,f-m,T-_).normalize();else if(n[4].setComponents(l-c,d-h,f-m,T-_).normalize(),t===cr)n[5].setComponents(l+c,d+h,f+m,T+_).normalize();else if(t===Cn)n[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=pd.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(_s.x=n.normal.x>0?e.max.x:e.min.x,_s.y=n.normal.y>0?e.max.y:e.min.y,_s.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gc extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vc=new ht,Fo=new is,xs=new _i,ys=new N;class Wc extends Ht{constructor(e=new kt,t=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xs.copy(r.boundingSphere),xs.applyMatrix4(n),xs.radius+=a,e.ray.intersectsSphere(xs)===!1)return;Vc.copy(n).invert(),Fo.copy(e.ray).applyMatrix4(Vc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,u=r.attributes.position;if(l!==null){const p=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let d=p,g=h;d<g;d++){const v=l.getX(d);ys.fromBufferAttribute(u,v),Xc(ys,v,c,n,e,t,this)}}else{const p=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let d=p,g=h;d<g;d++)ys.fromBufferAttribute(u,d),Xc(ys,d,c,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Xc(i,e,t,r,n,a,s){const o=Fo.distanceSqToPoint(i);if(o<t){const c=new N;Fo.closestPointToPoint(i,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ms extends Rt{constructor(e,t,r,n,a,s,o,c,l){super(e,t,r,n,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oo extends Rt{constructor(e,t,r=Gr,n,a,s,o=Vt,c=Vt,l,u=Fi,p=1){if(u!==Fi&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,n,a,s,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bo extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)r=this.getPoint(s/e),a+=r.distanceTo(n),t.push(a),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let n=0;const a=r.length;let s;t?s=t:s=e*r[a-1];let o=0,c=a-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=r[n]-s,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,r[n]===s)return n/(a-1);const u=r[n],p=r[n+1]-u,h=(s-u)/p;return(n+h)/(a-1)}getTangent(e,t){let r=e-1e-4,n=e+1e-4;r<0&&(r=0),n>1&&(n=1);const a=this.getPoint(r),s=this.getPoint(n),o=t||(a.isVector2?new Ce:new N);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new N,n=[],a=[],s=[],o=new N,c=new ht;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new N)}a[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(n[0].x),p=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=l&&(l=u,r.set(1,0,0)),p<=l&&(l=p,r.set(0,1,0)),h<=l&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(n[d-1].dot(n[d]),-1,1));a[d].applyMatrix4(c.makeRotationAxis(o,g))}s[d].crossVectors(n[d],a[d])}if(t===!0){let d=Math.acos(Qe(a[0].dot(a[e]),-1,1));d/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(n[g],d*g)),s[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zo extends Sr{constructor(e=0,t=0,r=1,n=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ce){const r=t,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*p+this.aX,l=h*p+d*u+this.aY}return r.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qc extends zo{constructor(e,t,r,n,a,s){super(e,t,r,r,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function ko(){let i=0,e=0,t=0,r=0;function n(a,s,o,c){i=a,e=o,t=-3*a+3*s-2*o-c,r=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){n(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,u,p){let h=(s-a)/l-(o-a)/(l+u)+(o-s)/u,d=(o-s)/u-(c-s)/(u+p)+(c-o)/p;h*=u,d*=u,n(s,o,h,d)},calc:function(a){const s=a*a,o=s*a;return i+e*a+t*s+r*o}}}const Ss=new N,Ho=new ko,Go=new ko,Vo=new ko;class bs extends Sr{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new N){const r=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=n[(o-1)%a]:(Ss.subVectors(n[0],n[1]).add(n[0]),l=Ss);const p=n[o%a],h=n[(o+1)%a];if(this.closed||o+2<a?u=n[(o+2)%a]:(Ss.subVectors(n[a-1],n[a-2]).add(n[a-1]),u=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ho.initNonuniformCatmullRom(l.x,p.x,h.x,u.x,g,v,m),Go.initNonuniformCatmullRom(l.y,p.y,h.y,u.y,g,v,m),Vo.initNonuniformCatmullRom(l.z,p.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(l.x,p.x,h.x,u.x,this.tension),Go.initCatmullRom(l.y,p.y,h.y,u.y,this.tension),Vo.initCatmullRom(l.z,p.z,h.z,u.z,this.tension));return r.set(Ho.calc(c),Go.calc(c),Vo.calc(c)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new N().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yc(i,e,t,r,n){const a=(r-e)*.5,s=(n-t)*.5,o=i*i,c=i*o;return(2*t-2*r+a+s)*c+(-3*t+3*r-2*a-s)*o+a*i+t}function fd(i,e){const t=1-i;return t*t*e}function md(i,e){return 2*(1-i)*i*e}function gd(i,e){return i*i*e}function Hn(i,e,t,r){return fd(i,e)+md(i,t)+gd(i,r)}function vd(i,e){const t=1-i;return t*t*t*e}function _d(i,e){const t=1-i;return 3*t*t*i*e}function xd(i,e){return 3*(1-i)*i*i*e}function yd(i,e){return i*i*i*e}function Gn(i,e,t,r,n){return vd(i,e)+_d(i,t)+xd(i,r)+yd(i,n)}class jc extends Sr{constructor(e=new Ce,t=new Ce,r=new Ce,n=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new Ce){const r=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return r.set(Gn(e,n.x,a.x,s.x,o.x),Gn(e,n.y,a.y,s.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zc extends Sr{constructor(e=new N,t=new N,r=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new N){const r=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return r.set(Gn(e,n.x,a.x,s.x,o.x),Gn(e,n.y,a.y,s.y,o.y),Gn(e,n.z,a.z,s.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jc extends Sr{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kc extends Sr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends Sr{constructor(e=new Ce,t=new Ce,r=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ce){const r=t,n=this.v0,a=this.v1,s=this.v2;return r.set(Hn(e,n.x,a.x,s.x),Hn(e,n.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wo extends Sr{constructor(e=new N,t=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){const r=t,n=this.v0,a=this.v1,s=this.v2;return r.set(Hn(e,n.x,a.x,s.x),Hn(e,n.y,a.y,s.y),Hn(e,n.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $c extends Sr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const r=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,c=n[s===0?s:s-1],l=n[s],u=n[s>n.length-2?n.length-1:s+1],p=n[s>n.length-3?n.length-1:s+2];return r.set(Yc(o,c.x,l.x,u.x,p.x),Yc(o,c.y,l.y,u.y,p.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new Ce().fromArray(n))}return this}}var Md=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:bs,CubicBezierCurve:jc,CubicBezierCurve3:Zc,EllipseCurve:zo,LineCurve:Jc,LineCurve3:Kc,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:Wo,SplineCurve:$c});class ir extends kt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,p=e/o,h=t/c,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const w=f*h-s;for(let M=0;M<l;M++){const _=M*p-a;g.push(_,-w,0),v.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const M=w+l*f,_=w+l*(f+1),T=w+1+l*(f+1),R=w+1+l*f;d.push(M,_,R),d.push(_,T,R)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hs extends kt{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const c=Math.min(s+o,Math.PI);let l=0;const u=[],p=new N,h=new N,d=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){const w=[],M=f/r;let _=0;f===0&&s===0?_=.5/t:f===r&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const R=T/t;p.x=-e*Math.cos(n+R*a)*Math.sin(s+M*o),p.y=e*Math.cos(s+M*o),p.z=e*Math.sin(n+R*a)*Math.sin(s+M*o),g.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),m.push(R+_,1-M),w.push(l++)}u.push(w)}for(let f=0;f<r;f++)for(let w=0;w<t;w++){const M=u[f][w+1],_=u[f][w],T=u[f+1][w],R=u[f+1][w+1];(f!==0||s>0)&&d.push(M,_,R),(f!==r-1||c<Math.PI)&&d.push(_,T,R)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gs extends kt{constructor(e=new Wo(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,r=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:n,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new N,c=new N,l=new Ce;let u=new N;const p=[],h=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function v(){for(let M=0;M<t;M++)m(M);m(a===!1?t:0),w(),f()}function m(M){u=e.getPointAt(M/t,u);const _=s.normals[M],T=s.binormals[M];for(let R=0;R<=n;R++){const P=R/n*Math.PI*2,E=Math.sin(P),y=-Math.cos(P);c.x=y*_.x+E*T.x,c.y=y*_.y+E*T.y,c.z=y*_.z+E*T.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+r*c.x,o.y=u.y+r*c.y,o.z=u.z+r*c.z,p.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=t;M++)for(let _=1;_<=n;_++){const T=(n+1)*(M-1)+(_-1),R=(n+1)*M+(_-1),P=(n+1)*M+_,E=(n+1)*(M-1)+_;g.push(T,R,E),g.push(R,P,E)}}function w(){for(let M=0;M<=t;M++)for(let _=0;_<=n;_++)l.x=M/t,l.y=_/n,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gs(new Md[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class eu extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tu extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ru extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iu extends yi{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nu extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class au extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const su=new ht;class ou{constructor(e,t,r=0,n=1/0){this.ray=new is(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(su),this}intersectObject(e,t=!0,r=[]){return Xo(e,this,r,t),r.sort(lu),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)Xo(e[n],this,r,t);return r.sort(lu),r}}function lu(i,e){return i.distance-e.distance}function Xo(i,e,t,r){let n=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Xo(a[s],e,t,!0)}}function cu(i,e,t,r){const n=Sd(r);switch(t){case eo:return i*e;case ga:return i*e/n.components*n.byteLength;case va:return i*e/n.components*n.byteLength;case ro:return i*e*2/n.components*n.byteLength;case _a:return i*e*2/n.components*n.byteLength;case to:return i*e*3/n.components*n.byteLength;case $t:return i*e*4/n.components*n.byteLength;case xa:return i*e*4/n.components*n.byteLength;case En:case wn:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tn:case An:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(i,16)*Math.max(e,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Ga:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(i){switch(i){case yr:case Js:return{byteLength:1,components:1};case Ii:case Ks:case di:return{byteLength:2,components:1};case fa:case ma:return{byteLength:2,components:4};case Gr:case pa:case lr:return{byteLength:4,components:1};case Qs:case $s:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$n}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$n);function uu(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function bd(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){const g=p[h],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){const v=p[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Ed,alphahash_pars_fragment:wd,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Ld,aomap_pars_fragment:Pd,batching_pars_vertex:Ud,batching_vertex:Dd,begin_vertex:Id,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Kd,emissivemap_fragment:Qd,emissivemap_pars_fragment:$d,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:rp,envmap_common_pars_fragment:ip,envmap_pars_fragment:np,envmap_pars_vertex:ap,envmap_physical_pars_fragment:gp,envmap_vertex:sp,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:up,gradientmap_pars_fragment:hp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:fp,lights_pars_begin:mp,lights_toon_fragment:vp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:wp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Lp,map_pars_fragment:Pp,map_particle_fragment:Up,map_particle_pars_fragment:Dp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Np,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:kp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:Kp,packing:Qp,premultiplied_alpha_fragment:$p,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:rf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:of,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:uf,skinning_pars_vertex:hf,skinning_vertex:df,skinnormal_vertex:pf,specularmap_fragment:ff,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:vf,transmission_fragment:_f,transmission_pars_fragment:xf,uv_pars_fragment:yf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:bf,background_vert:Ef,background_frag:wf,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:Rf,cube_frag:Cf,depth_vert:Lf,depth_frag:Pf,distanceRGBA_vert:Uf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:Nf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:kf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:qf,meshphong_frag:Yf,meshphysical_vert:jf,meshphysical_frag:Zf,meshtoon_vert:Jf,meshtoon_frag:Kf,points_vert:Qf,points_frag:$f,shadow_vert:em,shadow_frag:tm,sprite_vert:rm,sprite_frag:im},fe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},mr={basic:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Ot([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Ot([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Ot([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Ot([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Ot([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Ot([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Ot([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Ot([fe.lights,fe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};mr.physical={uniforms:Ot([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Es={r:0,b:0,g:0},bi=new Ar,nm=new ht;function am(i,e,t,r,n,a,s){const o=new ot(0);let c=a===!0?0:1,l,u,p=null,h=0,d=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function v(M){let _=!1;const T=g(M);T===null?f(o,c):T&&T.isColor&&(f(T,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===Mn)?(u===void 0&&(u=new _t(new si(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:$i(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),bi.copy(_.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(bi)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==lt,(p!==T||h!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,h=T.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new _t(new ir(2,2),new St({name:"BackgroundMaterial",uniforms:$i(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=it.getTransfer(T.colorSpace)!==lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||h!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,p=T,h=T.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,_){M.getRGB(Es,Dc(i)),r.buffers.color.setClear(Es.r,Es.g,Es.b,_,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:v,addToRenderList:m,dispose:w}}function sm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=h(null);let a=n,s=!1;function o(S,U,I,B,G){let X=!1;const W=p(B,I,U);a!==W&&(a=W,l(a.object)),X=d(S,B,I,G),X&&g(S,B,I,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,_(S,U,I,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function p(S,U,I){const B=I.wireframe===!0;let G=r[S.id];G===void 0&&(G={},r[S.id]=G);let X=G[U.id];X===void 0&&(X={},G[U.id]=X);let W=X[B];return W===void 0&&(W=h(c()),X[B]=W),W}function h(S){const U=[],I=[],B=[];for(let G=0;G<t;G++)U[G]=0,I[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,U,I,B){const G=a.attributes,X=U.attributes;let W=0;const V=I.getAttributes();for(const F in V)if(V[F].location>=0){const K=G[F];let he=X[F];if(he===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),K===void 0||K.attribute!==he||he&&K.data!==he.data)return!0;W++}return a.attributesNum!==W||a.index!==B}function g(S,U,I,B){const G={},X=U.attributes;let W=0;const V=I.getAttributes();for(const F in V)if(V[F].location>=0){let K=X[F];K===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const he={};he.attribute=K,K&&K.data&&(he.data=K.data),G[F]=he,W++}a.attributes=G,a.attributesNum=W,a.index=B}function v(){const S=a.newAttributes;for(let U=0,I=S.length;U<I;U++)S[U]=0}function m(S){f(S,0)}function f(S,U){const I=a.newAttributes,B=a.enabledAttributes,G=a.attributeDivisors;I[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),G[S]!==U&&(i.vertexAttribDivisor(S,U),G[S]=U)}function w(){const S=a.newAttributes,U=a.enabledAttributes;for(let I=0,B=U.length;I<B;I++)U[I]!==S[I]&&(i.disableVertexAttribArray(I),U[I]=0)}function M(S,U,I,B,G,X,W){W===!0?i.vertexAttribIPointer(S,U,I,G,X):i.vertexAttribPointer(S,U,I,B,G,X)}function _(S,U,I,B){v();const G=B.attributes,X=I.getAttributes(),W=U.defaultAttributeValues;for(const V in X){const F=X[V];if(F.location>=0){let K=G[V];if(K===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const he=K.normalized,Le=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ue=Se.buffer,De=Se.type,He=Se.bytesPerElement,j=De===i.INT||De===i.UNSIGNED_INT||K.gpuType===pa;if(K.isInterleavedBufferAttribute){const Q=K.data,ce=Q.stride,be=K.offset;if(Q.isInstancedInterleavedBuffer){for(let me=0;me<F.locationSize;me++)f(F.location+me,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<F.locationSize;me++)m(F.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let me=0;me<F.locationSize;me++)M(F.location+me,Le/F.locationSize,De,he,ce*He,(be+Le/F.locationSize*me)*He,j)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<F.locationSize;Q++)f(F.location+Q,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Q=0;Q<F.locationSize;Q++)M(F.location+Q,Le/F.locationSize,De,he,Le*He,Le/F.locationSize*Q*He,j)}}else if(W!==void 0){const he=W[V];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(F.location,he);break;case 3:i.vertexAttrib3fv(F.location,he);break;case 4:i.vertexAttrib4fv(F.location,he);break;default:i.vertexAttrib1fv(F.location,he)}}}}w()}function T(){E();for(const S in r){const U=r[S];for(const I in U){const B=U[I];for(const G in B)u(B[G].object),delete B[G];delete U[I]}delete r[S]}}function R(S){if(r[S.id]===void 0)return;const U=r[S.id];for(const I in U){const B=U[I];for(const G in B)u(B[G].object),delete B[G];delete U[I]}delete r[S.id]}function P(S){for(const U in r){const I=r[U];if(I[S.id]===void 0)continue;const B=I[S.id];for(const G in B)u(B[G].object),delete B[G];delete I[S.id]}}function E(){y(),s=!0,a!==n&&(a=n,l(a.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function om(i,e,t){let r;function n(l){r=l}function a(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function s(l,u,p){p!==0&&(i.drawArraysInstanced(r,l,u,p),t.update(u,r,p))}function o(l,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,p);let h=0;for(let d=0;d<p;d++)h+=u[d];t.update(h,r,1)}function c(l,u,p,h){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)s(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(r,l,0,u,0,h,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v]*h[v];t.update(g,r,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lm(i,e,t,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){return!(P!==$t&&r.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const E=P===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==yr&&r.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==lr&&!E)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:R}}function cm(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new Jr,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||r!==0||n;return n=h,r=p.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,d){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!n||g===null||g.length===0||a&&!m)a?u(null):l();else{const w=a?0:r,M=w*4;let _=f.clippingState||null;c.value=_,_=u(g,h,M,d);for(let T=0;T!==M;++T)_[T]=t[T];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(p,h,d,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=d+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=d;M!==v;++M,_+=4)s.copy(p[M]).applyMatrix4(w,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function um(i){let e=new WeakMap;function t(s,o){return o===ca?s.mapping=ui:o===ua&&(s.mapping=hi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===ca||o===ua)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Bc(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",n),t(l.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const nn=4,hu=[.125,.215,.35,.446,.526,.582],Ei=20,qo=new iu,du=new ot;let Yo=null,jo=0,Zo=0,Jo=!1;const wi=(1+Math.sqrt(5))/2,an=1/wi,pu=[new N(-wi,an,0),new N(wi,an,0),new N(-an,0,wi),new N(an,0,wi),new N(0,wi,-an),new N(0,wi,an),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],hm=new N;class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100,a={}){const{size:s=256,position:o=hm}=a;Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,jo,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:di,format:$t,colorSpace:pi,depthBuffer:!1},n=fu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(a)),this._blurMaterial=pm(a,e,t)}return n}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,r,n,a){const s=new Wt(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,p=l.toneMapping;l.getClearColor(du),l.toneMapping=Lr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null));const h=new Ao({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),d=new _t(new si,h);let g=!1;const v=e.background;v?v.isColor&&(h.color.copy(v),e.background=null,g=!0):(h.color.copy(du),g=!0);for(let m=0;m<6;m++){const f=m%3;f===0?(s.up.set(0,o[m],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+c[m],a.y,a.z)):f===1?(s.up.set(0,0,o[m]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+c[m],a.z)):(s.up.set(0,o[m],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+c[m]));const w=this._cubeSize;ws(n,f*w,m>2?w:0,w,w),l.setRenderTarget(n),g&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=p,l.autoClear=u,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===ui||e.mapping===hi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new _t(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,qo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=pu[(n-a-1)%pu.length];this._blur(e,a-1,a,s,o)}t.autoClear=r}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new _t(this._lodPlanes[n],l),h=l.uniforms,d=this._sizeLods[r]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let w=0;for(let P=0;P<Ei;++P){const E=P/v,y=Math.exp(-E*E/2);f.push(y),P===0?w+=y:P<m&&(w+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-r;const _=this._sizeLods[n],T=3*_*(n>M-nn?n-M+nn:0),R=4*(this._cubeSize-_);ws(t,T,R,3*_,2*_),c.setRenderTarget(t),c.render(p,qo)}}function dm(i){const e=[],t=[],r=[];let n=i;const a=i-nn+1+hu.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let c=1/o;s>i-nn?c=hu[s-i+nn-1]:s===0&&(c=0),r.push(c);const l=1/(o-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*d),M=new Float32Array(m*g*d),_=new Float32Array(f*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,E=R>2?0:-1,y=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];w.set(y,v*g*R),M.set(h,m*g*R);const S=[R,R,R,R,R,R];_.set(S,f*g*R)}const T=new kt;T.setAttribute("position",new er(w,v)),T.setAttribute("uv",new er(M,m)),T.setAttribute("faceIndex",new er(_,f)),e.push(T),n>nn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function fu(i,e,t){const r=new ur(i,e,t);return r.texture.mapping=Mn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ws(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function pm(i,e,t){const r=new Float32Array(Ei),n=new N(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function mu(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function gu(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,l=c===ca||c===ua,u=c===ui||c===hi;if(l||u){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ko(i)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Ko(i)),p=l?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function mm(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Dn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function gm(i,e,t,r){const n={},a=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete n[h.id];const d=a.get(h);d&&(e.remove(d),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function l(p){const h=[],d=p.index,g=p.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let M=0,_=w.length;M<_;M+=3){const T=w[M+0],R=w[M+1],P=w[M+2];h.push(T,R,R,P,P,T)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,_=w.length/3-1;M<_;M+=3){const T=M+0,R=M+1,P=M+2;h.push(T,R,R,P,P,T)}}else return;const m=new(pc(h)?Co:Ro)(h,1);m.version=v;const f=a.get(p);f&&e.remove(f),a.set(p,m)}function u(p){const h=a.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return a.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function vm(i,e,t){let r;function n(h){r=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function c(h,d){i.drawElements(r,d,a,h*s),t.update(d,r,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(r,d,a,h*s,g),t.update(d,r,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,a,h,0,g);let v=0;for(let m=0;m<g;m++)v+=d[m];t.update(v,r,1)}function p(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/s,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,a,h,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w]*v[w];t.update(f,r,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function _m(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function xm(i,e,t){const r=new WeakMap,n=new at;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==p){let g=function(){y.dispose(),r.delete(o),o.removeEventListener("dispose",g)};var d=g;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,w=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),m===!0&&(T=2),f===!0&&(T=3);let R=o.attributes.position.count*T,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*P*4*p),y=new ho(E,R,P,p);y.type=lr,y.needsUpdate=!0;const S=T*4;for(let U=0;U<p;U++){const I=w[U],B=M[U],G=_[U],X=R*P*4*U;for(let W=0;W<I.count;W++){const V=W*S;v===!0&&(n.fromBufferAttribute(I,W),E[X+V+0]=n.x,E[X+V+1]=n.y,E[X+V+2]=n.z,E[X+V+3]=0),m===!0&&(n.fromBufferAttribute(B,W),E[X+V+4]=n.x,E[X+V+5]=n.y,E[X+V+6]=n.z,E[X+V+7]=0),f===!0&&(n.fromBufferAttribute(G,W),E[X+V+8]=n.x,E[X+V+9]=n.y,E[X+V+10]=n.z,E[X+V+11]=G.itemSize===4?n.w:1)}}h={count:p,texture:y,size:new Ce(R,P)},r.set(o,h),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function ym(i,e,t,r){let n=new WeakMap;function a(c){const l=r.render.frame,u=c.geometry,p=e.get(c,u);if(n.get(p)!==l&&(e.update(p),n.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;n.get(h)!==l&&(h.update(),n.set(h,l))}return p}function s(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const vu=new Rt,_u=new Oo(1,1),xu=new ho,yu=new yc,Mu=new Uo,Su=[],bu=[],Eu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function sn(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=Su[n];if(a===void 0&&(a=new Float32Array(n),Su[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ts(i,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function Mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function wm(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,r))return;Tu.set(r),i.uniformMatrix2fv(this.addr,!1,Tu),Et(t,r)}}function Tm(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,r))return;wu.set(r),i.uniformMatrix3fv(this.addr,!1,wu),Et(t,r)}}function Am(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,r))return;Eu.set(r),i.uniformMatrix4fv(this.addr,!1,Eu),Et(t,r)}}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Fm(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);let a;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=no,a=_u):a=vu,t.setTexture2D(e||a,n)}function Om(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||yu,n)}function Bm(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Mu,n)}function zm(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||xu,n)}function km(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Lm;case 35669:case 35673:return Pm;case 5125:return Um;case 36294:return Dm;case 36295:return Im;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,e){i.uniform1fv(this.addr,e)}function Gm(i,e){const t=sn(e,this.size,2);i.uniform2fv(this.addr,t)}function Vm(i,e){const t=sn(e,this.size,3);i.uniform3fv(this.addr,t)}function Wm(i,e){const t=sn(e,this.size,4);i.uniform4fv(this.addr,t)}function Xm(i,e){const t=sn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qm(i,e){const t=sn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ym(i,e){const t=sn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jm(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function Qm(i,e){i.uniform1uiv(this.addr,e)}function $m(i,e){i.uniform2uiv(this.addr,e)}function eg(i,e){i.uniform3uiv(this.addr,e)}function tg(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){const r=this.cache,n=e.length,a=Ts(t,n);bt(r,a)||(i.uniform1iv(this.addr,a),Et(r,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||vu,a[s])}function ig(i,e,t){const r=this.cache,n=e.length,a=Ts(t,n);bt(r,a)||(i.uniform1iv(this.addr,a),Et(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||yu,a[s])}function ng(i,e,t){const r=this.cache,n=e.length,a=Ts(t,n);bt(r,a)||(i.uniform1iv(this.addr,a),Et(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Mu,a[s])}function ag(i,e,t){const r=this.cache,n=e.length,a=Ts(t,n);bt(r,a)||(i.uniform1iv(this.addr,a),Et(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||xu,a[s])}function sg(i){switch(i){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return $m;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ag}}class og{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=km(t.type)}}class lg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}}class cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Au(i,e){i.seq.push(e),i.map[e.id]=e}function ug(i,e,t){const r=i.name,n=r.length;for($o.lastIndex=0;;){const a=$o.exec(r),s=$o.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){Au(t,l===void 0?new og(o,i,e):new lg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new cg(o),Au(t,u)),t=u}}}class As{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);ug(a,s,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Ru(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const hg=37297;let dg=0;function pg(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const Cu=new Ze;function fg(i){it._getMatrix(Cu,it.workingColorSpace,i);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Rn:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lu(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=(i.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+pg(i.getShaderSource(e),s)}else return n}function mg(i,e){const t=fg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case Yl:t="Cineon";break;case jl:t="ACESFilmic";break;case Jl:t="AgX";break;case Kl:t="Neutral";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new N;function vg(){it.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function xg(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function yg(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Vn(i){return i!==""}function Pu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Mg,bg)}const Sg=new Map;function bg(i,e){let t=Ke[e];if(t===void 0){const r=Sg.get(e);if(r!==void 0)t=Ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(Eg,wg)}function wg(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Iu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xs?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gr&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case Mn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hi&&(e="ENVMAP_MODE_REFRACTION"),e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case js:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function Lg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Pg(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Tg(t),l=Ag(t),u=Rg(t),p=Cg(t),h=Lg(t),d=_g(t),g=xg(a),v=n.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),f.length>0&&(f+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),f=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Lr?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vn).join(`
`)),s=el(s),s=Pu(s,t),s=Uu(s,t),o=el(o),o=Pu(o,t),o=Uu(o,t),s=Du(s),o=Du(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+m+s,_=w+f+o,T=Ru(n,n.VERTEX_SHADER,M),R=Ru(n,n.FRAGMENT_SHADER,_);n.attachShader(v,T),n.attachShader(v,R),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function P(U){if(i.debug.checkShaderErrors){const I=n.getProgramInfoLog(v)||"",B=n.getShaderInfoLog(T)||"",G=n.getShaderInfoLog(R)||"",X=I.trim(),W=B.trim(),V=G.trim();let F=!0,K=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,v,T,R);else{const he=Lu(n,T,"vertex"),Le=Lu(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+he+`
`+Le)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||V==="")&&(K=!1);K&&(U.diagnostics={runnable:F,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:f}})}n.deleteShader(T),n.deleteShader(R),E=new As(n,v),y=yg(n,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(v,hg)),S},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=R,this}let Ug=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Ig(e),t.set(e,r)),r}}class Ig{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Ng(i,e,t,r,n,a,s){const o=new as,c=new Dg,l=new Set,u=[],p=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,U,I,B){const G=I.fog,X=B.geometry,W=y.isMeshStandardMaterial?I.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),F=V&&V.mapping===Mn?V.image.height:null,K=g[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Le=he!==void 0?he.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Ue,De,He,j;if(K){const et=mr[K];Ue=et.vertexShader,De=et.fragmentShader}else Ue=y.vertexShader,De=y.fragmentShader,c.update(y),He=c.getVertexShaderID(y),j=c.getFragmentShaderID(y);const Q=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,me=B.isBatchedMesh===!0,ue=!!y.map,je=!!y.matcap,L=!!V,de=!!y.aoMap,Ie=!!y.lightMap,ke=!!y.bumpMap,_e=!!y.normalMap,Je=!!y.displacementMap,ge=!!y.emissiveMap,Ne=!!y.metalnessMap,ct=!!y.roughnessMap,nt=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,k=y.iridescence>0,Z=y.sheen>0,$=y.transmission>0,J=nt&&!!y.anisotropyMap,Re=A&&!!y.clearcoatMap,ne=A&&!!y.clearcoatNormalMap,Ee=A&&!!y.clearcoatRoughnessMap,ve=k&&!!y.iridescenceMap,ae=k&&!!y.iridescenceThicknessMap,pe=Z&&!!y.sheenColorMap,Ve=Z&&!!y.sheenRoughnessMap,we=!!y.specularMap,H=!!y.specularColorMap,le=!!y.specularIntensityMap,D=$&&!!y.transmissionMap,ee=$&&!!y.thicknessMap,oe=!!y.gradientMap,Me=!!y.alphaMap,se=y.alphaTest>0,te=!!y.alphaHash,Pe=!!y.extensions;let ze=Lr;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ut={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:De,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:me,batchingColor:me&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pi,alphaToCoverage:!!y.alphaToCoverage,map:ue,matcap:je,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:F,aoMap:de,lightMap:Ie,bumpMap:ke,normalMap:_e,displacementMap:h&&Je,emissiveMap:ge,normalMapObjectSpace:_e&&y.normalMapType===rc,normalMapTangentSpace:_e&&y.normalMapType===tc,metalnessMap:Ne,roughnessMap:ct,anisotropy:nt,anisotropyMap:J,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:ne,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:k,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:Ve,specularMap:we,specularColorMap:H,specularIntensityMap:le,transmission:$,transmissionMap:D,thicknessMap:ee,gradientMap:oe,opaque:y.transparent===!1&&y.blending===li&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:se,alphaHash:te,combine:y.combine,mapUv:ue&&v(y.map.channel),aoMapUv:de&&v(y.aoMap.channel),lightMapUv:Ie&&v(y.lightMap.channel),bumpMapUv:ke&&v(y.bumpMap.channel),normalMapUv:_e&&v(y.normalMap.channel),displacementMapUv:Je&&v(y.displacementMap.channel),emissiveMapUv:ge&&v(y.emissiveMap.channel),metalnessMapUv:Ne&&v(y.metalnessMap.channel),roughnessMapUv:ct&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:Re&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(y.sheenRoughnessMap.channel),specularMapUv:we&&v(y.specularMap.channel),specularColorMapUv:H&&v(y.specularColorMap.channel),specularIntensityMapUv:le&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:ee&&v(y.thicknessMap.channel),alphaMapUv:Me&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_e||nt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(ue||Me),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vr,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)S.push(U),S.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(w(S,y),M(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const S=g[y.type];let U;if(S){const I=mr[S];U=Ic.clone(I.uniforms)}else U=y.uniforms;return U}function T(y,S){let U;for(let I=0,B=u.length;I<B;I++){const G=u[I];if(G.cacheKey===S){U=G,++U.usedTimes;break}}return U===void 0&&(U=new Pg(i,S,y,a),u.push(U)),U}function R(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:E}}function Fg(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function n(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:a}}function Og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fu(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(p,h,d,g,v,m){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:d,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},i[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=d,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=v,f.group=m),e++,f}function o(p,h,d,g,v,m){const f=s(p,h,d,g,v,m);d.transmission>0?r.push(f):d.transparent===!0?n.push(f):t.push(f)}function c(p,h,d,g,v,m){const f=s(p,h,d,g,v,m);d.transmission>0?r.unshift(f):d.transparent===!0?n.unshift(f):t.unshift(f)}function l(p,h){t.length>1&&t.sort(p||Og),r.length>1&&r.sort(h||Nu),n.length>1&&n.sort(h||Nu)}function u(){for(let p=e,h=i.length;p<h;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:o,unshift:c,finish:u,sort:l}}function Bg(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new Fu,i.set(r,[s])):n>=a.length?(s=new Fu,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ot};break;case"SpotLight":t={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hg=0;function Gg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vg(i){const e=new zg,t=kg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new N);const n=new N,a=new ht,s=new ht;function o(l){let u=0,p=0,h=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,w=0,M=0,_=0,T=0,R=0,P=0;l.sort(Gg);for(let y=0,S=l.length;y<S;y++){const U=l[y],I=U.color,B=U.intensity,G=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=I.r*B,p+=I.g*B,h+=I.b*B;else if(U.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(U.sh.coefficients[W],B);P++}else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,F=t.get(U);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,r.directionalShadow[d]=F,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=U.shadow.matrix,w++}r.directional[d]=W,d++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(I).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,r.spot[v]=W;const V=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,V.updateMatrices(U),U.castShadow&&R++),r.spotLightMatrix[v]=V.matrix,U.castShadow){const F=t.get(U);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,r.spotShadow[v]=F,r.spotShadowMap[v]=X,_++}v++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(I).multiplyScalar(B),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),r.rectArea[m]=W,m++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const V=U.shadow,F=t.get(U);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,F.shadowCameraNear=V.camera.near,F.shadowCameraFar=V.camera.far,r.pointShadow[g]=F,r.pointShadowMap[g]=X,r.pointShadowMatrix[g]=U.shadow.matrix,M++}r.point[g]=W,g++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(B),W.groundColor.copy(U.groundColor).multiplyScalar(B),r.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=h;const E=r.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==f||E.numDirectionalShadows!==w||E.numPointShadows!==M||E.numSpotShadows!==_||E.numSpotMaps!==T||E.numLightProbes!==P)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=f,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=_+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=P,E.directionalLength=d,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=f,E.numDirectionalShadows=w,E.numPointShadows=M,E.numSpotShadows=_,E.numSpotMaps=T,E.numLightProbes=P,r.version=Hg++)}function c(l,u){let p=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const M=l[f];if(M.isDirectionalLight){const _=r.directional[p];_.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),p++}else if(M.isSpotLight){const _=r.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=r.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),s.identity(),a.copy(M.matrixWorld),a.premultiply(m),s.extractRotation(a),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const _=r.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const _=r.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:r}}function Ou(i){const e=new Vg(i),t=[],r=[];function n(u){l.camera=u,t.length=0,r.length=0}function a(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Wg(i){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Ou(i),e.set(n,[o])):a>=s.length?(o=new Ou(i),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(i,e,t){let r=new No;const n=new Ce,a=new Ce,s=new at,o=new tu({depthPacking:ec}),c=new ru,l={},u=t.maxTextureSize,p={[Cr]:Dt,[Dt]:Cr,[vr]:vr},h=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let f=this.type;this.render=function(R,P,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),I=i.state;I.setBlending(_r),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=f!==gr&&this.type===gr,G=f===gr&&this.type!==gr;for(let X=0,W=R.length;X<W;X++){const V=R[X],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);const K=F.getFrameExtents();if(n.multiply(K),a.copy(F.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/K.x),n.x=a.x*K.x,F.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/K.y),n.y=a.y*K.y,F.mapSize.y=a.y)),F.map===null||B===!0||G===!0){const Le=this.type!==gr?{minFilter:Vt,magFilter:Vt}:{};F.map!==null&&F.map.dispose(),F.map=new ur(n.x,n.y,Le),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const he=F.getViewportCount();for(let Le=0;Le<he;Le++){const Se=F.getViewport(Le);s.set(a.x*Se.x,a.y*Se.y,a.x*Se.z,a.y*Se.w),I.viewport(s),F.updateMatrices(V,Le),r=F.getFrustum(),_(P,E,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===gr&&w(F,E),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,U)};function w(R,P){const E=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ur(n.x,n.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,E,h,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,E,d,v,null)}function M(R,P,E,y){let S=null;const U=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)S=U;else if(S=E.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const I=S.uuid,B=P.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let X=G[B];X===void 0&&(X=S.clone(),G[B]=X,P.addEventListener("dispose",T)),S=X}if(S.visible=P.visible,S.wireframe=P.wireframe,y===gr?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:p[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=E}return S}function _(R,P,E,y,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===gr)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const I=e.update(R),B=R.material;if(Array.isArray(B)){const G=I.groups;for(let X=0,W=G.length;X<W;X++){const V=G[X],F=B[V.materialIndex];if(F&&F.visible){const K=M(R,F,y,S);R.onBeforeShadow(i,R,P,E,I,K,V),i.renderBufferDirect(E,null,I,K,R,V),R.onAfterShadow(i,R,P,E,I,K,V)}}}else if(B.visible){const G=M(R,B,y,S);R.onBeforeShadow(i,R,P,E,I,G,null),i.renderBufferDirect(E,null,I,G,R,null),R.onAfterShadow(i,R,P,E,I,G,null)}}const U=R.children;for(let I=0,B=U.length;I<B;I++)_(U[I],P,E,y,S)}function T(R){R.target.removeEventListener("dispose",T);for(const P in l){const E=l[P],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const jg={[ra]:ia,[na]:oa,[aa]:la,[ci]:sa,[ia]:ra,[oa]:na,[la]:aa,[sa]:ci};function Zg(i,e){function t(){let D=!1;const ee=new at;let oe=null;const Me=new at(0,0,0,0);return{setMask:function(se){oe!==se&&!D&&(i.colorMask(se,se,se,se),oe=se)},setLocked:function(se){D=se},setClear:function(se,te,Pe,ze,ut){ut===!0&&(se*=ze,te*=ze,Pe*=ze),ee.set(se,te,Pe,ze),Me.equals(ee)===!1&&(i.clearColor(se,te,Pe,ze),Me.copy(ee))},reset:function(){D=!1,oe=null,Me.set(-1,0,0,0)}}}function r(){let D=!1,ee=!1,oe=null,Me=null,se=null;return{setReversed:function(te){if(ee!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ee=te;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return ee},setTest:function(te){te?Q(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(te){oe!==te&&!D&&(i.depthMask(te),oe=te)},setFunc:function(te){if(ee&&(te=jg[te]),Me!==te){switch(te){case ra:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=te}},setLocked:function(te){D=te},setClear:function(te){se!==te&&(ee&&(te=1-te),i.clearDepth(te),se=te)},reset:function(){D=!1,oe=null,Me=null,se=null,ee=!1}}}function n(){let D=!1,ee=null,oe=null,Me=null,se=null,te=null,Pe=null,ze=null,ut=null;return{setTest:function(et){D||(et?Q(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(et){ee!==et&&!D&&(i.stencilMask(et),ee=et)},setFunc:function(et,wt,Gt){(oe!==et||Me!==wt||se!==Gt)&&(i.stencilFunc(et,wt,Gt),oe=et,Me=wt,se=Gt)},setOp:function(et,wt,Gt){(te!==et||Pe!==wt||ze!==Gt)&&(i.stencilOp(et,wt,Gt),te=et,Pe=wt,ze=Gt)},setLocked:function(et){D=et},setClear:function(et){ut!==et&&(i.clearStencil(et),ut=et)},reset:function(){D=!1,ee=null,oe=null,Me=null,se=null,te=null,Pe=null,ze=null,ut=null}}}const a=new t,s=new r,o=new n,c=new WeakMap,l=new WeakMap;let u={},p={},h=new WeakMap,d=[],g=null,v=!1,m=null,f=null,w=null,M=null,_=null,T=null,R=null,P=new ot(0,0,0),E=0,y=!1,S=null,U=null,I=null,B=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=V>=1):F.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=V>=2);let K=null,he={};const Le=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Ue=new at().fromArray(Le),De=new at().fromArray(Se);function He(D,ee,oe,Me){const se=new Uint8Array(4),te=i.createTexture();i.bindTexture(D,te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<oe;Pe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ee+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return te}const j={};j[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),s.setFunc(ci),ke(!1),_e(Ws),Q(i.CULL_FACE),de(_r);function Q(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ce(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function be(D,ee){return p[D]!==ee?(i.bindFramebuffer(D,ee),p[D]=ee,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ee),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function me(D,ee){let oe=d,Me=!1;if(D){oe=h.get(ee),oe===void 0&&(oe=[],h.set(ee,oe));const se=D.textures;if(oe.length!==se.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Pe=se.length;te<Pe;te++)oe[te]=i.COLOR_ATTACHMENT0+te;oe.length=se.length,Me=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Me=!0);Me&&i.drawBuffers(oe)}function ue(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const je={[kr]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};je[Rl]=i.MIN,je[Cl]=i.MAX;const L={[Ll]:i.ZERO,[Pl]:i.ONE,[Ul]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[Fl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[Ol]:i.ONE_MINUS_DST_COLOR,[Nl]:i.ONE_MINUS_DST_ALPHA,[zl]:i.CONSTANT_COLOR,[kl]:i.ONE_MINUS_CONSTANT_COLOR,[Hl]:i.CONSTANT_ALPHA,[Gl]:i.ONE_MINUS_CONSTANT_ALPHA};function de(D,ee,oe,Me,se,te,Pe,ze,ut,et){if(D===_r){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),D!==wl){if(D!==m||et!==y){if((f!==kr||_!==kr)&&(i.blendEquation(i.FUNC_ADD),f=kr,_=kr),et)switch(D){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case qs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ys:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qs:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ys:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,T=null,R=null,P.set(0,0,0),E=0,m=D,y=et}return}se=se||ee,te=te||oe,Pe=Pe||Me,(ee!==f||se!==_)&&(i.blendEquationSeparate(je[ee],je[se]),f=ee,_=se),(oe!==w||Me!==M||te!==T||Pe!==R)&&(i.blendFuncSeparate(L[oe],L[Me],L[te],L[Pe]),w=oe,M=Me,T=te,R=Pe),(ze.equals(P)===!1||ut!==E)&&(i.blendColor(ze.r,ze.g,ze.b,ut),P.copy(ze),E=ut),m=D,y=!1}function Ie(D,ee){D.side===vr?ce(i.CULL_FACE):Q(i.CULL_FACE);let oe=D.side===Dt;ee&&(oe=!oe),ke(oe),D.blending===li&&D.transparent===!1?de(_r):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const Me=D.stencilWrite;o.setTest(Me),Me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function _e(D){D!==Sl?(Q(i.CULL_FACE),D!==U&&(D===Ws?i.cullFace(i.BACK):D===bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),U=D}function Je(D){D!==I&&(W&&i.lineWidth(D),I=D)}function ge(D,ee,oe){D?(Q(i.POLYGON_OFFSET_FILL),(B!==ee||G!==oe)&&(i.polygonOffset(ee,oe),B=ee,G=oe)):ce(i.POLYGON_OFFSET_FILL)}function Ne(D){D?Q(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function ct(D){D===void 0&&(D=i.TEXTURE0+X-1),K!==D&&(i.activeTexture(D),K=D)}function nt(D,ee,oe){oe===void 0&&(K===null?oe=i.TEXTURE0+X-1:oe=K);let Me=he[oe];Me===void 0&&(Me={type:void 0,texture:void 0},he[oe]=Me),(Me.type!==D||Me.texture!==ee)&&(K!==oe&&(i.activeTexture(oe),K=oe),i.bindTexture(D,ee||j[D]),Me.type=D,Me.texture=ee)}function A(){const D=he[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){Ue.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function Ve(D){De.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),De.copy(D))}function we(D,ee){let oe=l.get(ee);oe===void 0&&(oe=new WeakMap,l.set(ee,oe));let Me=oe.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ee,D.name),oe.set(D,Me))}function H(D,ee){const oe=l.get(ee).get(D);c.get(ee)!==oe&&(i.uniformBlockBinding(ee,oe,D.__bindingPointIndex),c.set(ee,oe))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,he={},p={},h=new WeakMap,d=[],g=null,v=!1,m=null,f=null,w=null,M=null,_=null,T=null,R=null,P=new ot(0,0,0),E=0,y=!1,S=null,U=null,I=null,B=null,G=null,Ue.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Q,disable:ce,bindFramebuffer:be,drawBuffers:me,useProgram:ue,setBlending:de,setMaterial:Ie,setFlipSided:ke,setCullFace:_e,setLineWidth:Je,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:ct,bindTexture:nt,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:ve,texImage3D:ae,updateUBOMapping:we,uniformBlockBinding:H,texStorage2D:ne,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:J,compressedTexSubImage3D:Re,scissor:pe,viewport:Ve,reset:le}}function Jg(i,e,t,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,u=new WeakMap;let p;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):Ja("canvas")}function v(A,x,k){let Z=1;const $=nt(A);if(($.width>k||$.height>k)&&(Z=k/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*$.width),Re=Math.floor(Z*$.height);p===void 0&&(p=g(J,Re));const ne=x?g(J,Re):p;return ne.width=J,ne.height=Re,ne.getContext("2d").drawImage(A,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+Re+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,k,Z,$=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const Re=$?Rn:it.getTransfer(Z);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Re===lt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(A,x){let k;return A?x===null||x===Gr||x===Ni?k=i.DEPTH24_STENCIL8:x===lr?k=i.DEPTH32F_STENCIL8:x===Ii&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gr||x===Ni?k=i.DEPTH_COMPONENT24:x===lr?k=i.DEPTH_COMPONENT32F:x===Ii&&(k=i.DEPTH_COMPONENT16),k}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==Pt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),E(x),x.isVideoTexture&&u.delete(x)}function P(A){const x=A.target;x.removeEventListener("dispose",P),S(x)}function E(A){const x=r.get(A);if(x.__webglInit===void 0)return;const k=A.source,Z=h.get(k);if(Z){const $=Z[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(A),Object.keys(Z).length===0&&h.delete(k)}r.remove(A)}function y(A){const x=r.get(A);i.deleteTexture(x.__webglTexture);const k=A.source,Z=h.get(k);delete Z[x.__cacheKey],s.memory.textures--}function S(A){const x=r.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),r.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let $=0;$<x.__webglFramebuffer[Z].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[Z][$]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let Z=0,$=k.length;Z<$;Z++){const J=r.get(k[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),r.remove(k[Z])}r.remove(A)}let U=0;function I(){U=0}function B(){const A=U;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),U+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function X(A,x){const k=r.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function W(A,x){const k=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){j(k,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function V(A,x){const k=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){j(k,A,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function F(A,x){const k=r.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const K={[Sn]:i.REPEAT,[Hr]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},he={[Vt]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[bn]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},Le={[ic]:i.NEVER,[cc]:i.ALWAYS,[nc]:i.LESS,[no]:i.LEQUAL,[ac]:i.EQUAL,[lc]:i.GEQUAL,[sc]:i.GREATER,[oc]:i.NOTEQUAL};function Se(A,x){if(x.type===lr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Pt||x.magFilter===da||x.magFilter===bn||x.magFilter===xr||x.minFilter===Pt||x.minFilter===da||x.minFilter===bn||x.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==bn&&x.minFilter!==xr||x.type===lr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let $=h.get(Z);$===void 0&&($={},h.set(Z,$));const J=G(x);if(J!==A.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),$[J].usedTimes++;const Re=$[A.__cacheKey];Re!==void 0&&($[A.__cacheKey].usedTimes--,Re.usedTimes===0&&y(x)),A.__cacheKey=J,A.__webglTexture=$[J].texture}return k}function De(A,x,k){return Math.floor(Math.floor(A/k)/x)}function He(A,x,k,Z){const $=A.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,Z,x.data);else{$.sort((ve,ae)=>ve.start-ae.start);let J=0;for(let ve=1;ve<$.length;ve++){const ae=$[J],pe=$[ve],Ve=ae.start+ae.count,we=De(pe.start,x.width,4),H=De(ae.start,x.width,4);pe.start<=Ve+1&&we===H&&De(pe.start+pe.count-1,x.width,4)===we?ae.count=Math.max(ae.count,pe.start+pe.count-ae.start):(++J,$[J]=pe)}$.length=J+1;const Re=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ve=0,ae=$.length;ve<ae;ve++){const pe=$[ve],Ve=Math.floor(pe.start/4),we=Math.ceil(pe.count/4),H=Ve%x.width,le=Math.floor(Ve/x.width),D=we;i.pixelStorei(i.UNPACK_SKIP_PIXELS,H),i.pixelStorei(i.UNPACK_SKIP_ROWS,le),t.texSubImage2D(i.TEXTURE_2D,0,H,le,D,1,k,Z,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function j(A,x,k){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const $=Ue(A,x),J=x.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+k);const Re=r.get(J);if(J.version!==Re.__version||$===!0){t.activeTexture(i.TEXTURE0+k);const ne=it.getPrimaries(it.workingColorSpace),Ee=x.colorSpace===Mr?null:it.getPrimaries(x.colorSpace),ve=x.colorSpace===Mr||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ae=v(x.image,!1,n.maxTextureSize);ae=ct(x,ae);const pe=a.convert(x.format,x.colorSpace),Ve=a.convert(x.type);let we=M(x.internalFormat,pe,Ve,x.colorSpace,x.isVideoTexture);Se(Z,x);let H;const le=x.mipmaps,D=x.isVideoTexture!==!0,ee=Re.__version===void 0||$===!0,oe=J.dataReady,Me=T(x,ae);if(x.isDepthTexture)we=_(x.format===Oi,x.type),ee&&(D?t.texStorage2D(i.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,we,ae.width,ae.height,0,pe,Ve,null));else if(x.isDataTexture)if(le.length>0){D&&ee&&t.texStorage2D(i.TEXTURE_2D,Me,we,le[0].width,le[0].height);for(let se=0,te=le.length;se<te;se++)H=le[se],D?oe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,H.width,H.height,pe,Ve,H.data):t.texImage2D(i.TEXTURE_2D,se,we,H.width,H.height,0,pe,Ve,H.data);x.generateMipmaps=!1}else D?(ee&&t.texStorage2D(i.TEXTURE_2D,Me,we,ae.width,ae.height),oe&&He(x,ae,pe,Ve)):t.texImage2D(i.TEXTURE_2D,0,we,ae.width,ae.height,0,pe,Ve,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,le[0].width,le[0].height,ae.depth);for(let se=0,te=le.length;se<te;se++)if(H=le[se],x.format!==$t)if(pe!==null)if(D){if(oe)if(x.layerUpdates.size>0){const Pe=cu(H.width,H.height,x.format,x.type);for(const ze of x.layerUpdates){const ut=H.data.subarray(ze*Pe/H.data.BYTES_PER_ELEMENT,(ze+1)*Pe/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ze,H.width,H.height,1,pe,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,H.width,H.height,ae.depth,pe,H.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,we,H.width,H.height,ae.depth,0,H.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,H.width,H.height,ae.depth,pe,Ve,H.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,we,H.width,H.height,ae.depth,0,pe,Ve,H.data)}else{D&&ee&&t.texStorage2D(i.TEXTURE_2D,Me,we,le[0].width,le[0].height);for(let se=0,te=le.length;se<te;se++)H=le[se],x.format!==$t?pe!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,H.width,H.height,pe,H.data):t.compressedTexImage2D(i.TEXTURE_2D,se,we,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,H.width,H.height,pe,Ve,H.data):t.texImage2D(i.TEXTURE_2D,se,we,H.width,H.height,0,pe,Ve,H.data)}else if(x.isDataArrayTexture)if(D){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,ae.width,ae.height,ae.depth),oe)if(x.layerUpdates.size>0){const se=cu(ae.width,ae.height,x.format,x.type);for(const te of x.layerUpdates){const Pe=ae.data.subarray(te*se/ae.data.BYTES_PER_ELEMENT,(te+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,pe,Ve,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,Ve,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,pe,Ve,ae.data);else if(x.isData3DTexture)D?(ee&&t.texStorage3D(i.TEXTURE_3D,Me,we,ae.width,ae.height,ae.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,Ve,ae.data)):t.texImage3D(i.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,pe,Ve,ae.data);else if(x.isFramebufferTexture){if(ee)if(D)t.texStorage2D(i.TEXTURE_2D,Me,we,ae.width,ae.height);else{let se=ae.width,te=ae.height;for(let Pe=0;Pe<Me;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,we,se,te,0,pe,Ve,null),se>>=1,te>>=1}}else if(le.length>0){if(D&&ee){const se=nt(le[0]);t.texStorage2D(i.TEXTURE_2D,Me,we,se.width,se.height)}for(let se=0,te=le.length;se<te;se++)H=le[se],D?oe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe,Ve,H):t.texImage2D(i.TEXTURE_2D,se,we,pe,Ve,H);x.generateMipmaps=!1}else if(D){if(ee){const se=nt(ae);t.texStorage2D(i.TEXTURE_2D,Me,we,se.width,se.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ve,ae)}else t.texImage2D(i.TEXTURE_2D,0,we,pe,Ve,ae);m(x)&&f(Z),Re.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,k){if(x.image.length!==6)return;const Z=Ue(A,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const J=r.get($);if($.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);const Re=it.getPrimaries(it.workingColorSpace),ne=x.colorSpace===Mr?null:it.getPrimaries(x.colorSpace),Ee=x.colorSpace===Mr||Re===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!ve&&!ae?pe[te]=v(x.image[te],!0,n.maxCubemapSize):pe[te]=ae?x.image[te].image:x.image[te],pe[te]=ct(x,pe[te]);const Ve=pe[0],we=a.convert(x.format,x.colorSpace),H=a.convert(x.type),le=M(x.internalFormat,we,H,x.colorSpace),D=x.isVideoTexture!==!0,ee=J.__version===void 0||Z===!0,oe=$.dataReady;let Me=T(x,Ve);Se(i.TEXTURE_CUBE_MAP,x);let se;if(ve){D&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,le,Ve.width,Ve.height);for(let te=0;te<6;te++){se=pe[te].mipmaps;for(let Pe=0;Pe<se.length;Pe++){const ze=se[Pe];x.format!==$t?we!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,ze.width,ze.height,we,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,le,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,ze.width,ze.height,we,H,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,le,ze.width,ze.height,0,we,H,ze.data)}}}else{if(se=x.mipmaps,D&&ee){se.length>0&&Me++;const te=nt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,le,te.width,te.height)}for(let te=0;te<6;te++)if(ae){D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,we,H,pe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,le,pe[te].width,pe[te].height,0,we,H,pe[te].data);for(let Pe=0;Pe<se.length;Pe++){const ze=se[Pe].image[te].image;D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,ze.width,ze.height,we,H,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,le,ze.width,ze.height,0,we,H,ze.data)}}else{D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,H,pe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,le,we,H,pe[te]);for(let Pe=0;Pe<se.length;Pe++){const ze=se[Pe];D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,we,H,ze.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,le,we,H,ze.image[te])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),J.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ce(A,x,k,Z,$,J){const Re=a.convert(k.format,k.colorSpace),ne=a.convert(k.type),Ee=M(k.internalFormat,Re,ne,k.colorSpace),ve=r.get(x),ae=r.get(k);if(ae.__renderTarget=x,!ve.__hasExternalTextures){const pe=Math.max(1,x.width>>J),Ve=Math.max(1,x.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,J,Ee,pe,Ve,x.depth,0,Re,ne,null):t.texImage2D($,J,Ee,pe,Ve,0,Re,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,ae.__webglTexture,0,Je(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,ae.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,J=_(x.stencilBuffer,$),Re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Je(x);ge(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,A)}else{const Z=x.textures;for(let $=0;$<Z.length;$++){const J=Z[$],Re=a.convert(J.format,J.colorSpace),ne=a.convert(J.type),Ee=M(J.internalFormat,Re,ne,J.colorSpace),ve=Je(x);k&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Ee,x.width,x.height):ge(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=r.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Z=k.__webglTexture,$=Je(x);if(x.depthTexture.format===Fi)ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Oi)ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ue(A){const x=r.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?me(x.__webglFramebuffer[0],A):me(x.__webglFramebuffer,A)}else if(k){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),be(x.__webglDepthbuffer[Z],A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),be(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(A,x,k){const Z=r.get(A);x!==void 0&&ce(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ue(A)}function L(A){const x=A.texture,k=r.get(A),Z=r.get(x);A.addEventListener("dispose",P);const $=A.textures,J=A.isWebGLCubeRenderTarget===!0,Re=$.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,s.memory.textures++),J){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)k.__webglFramebuffer[ne][Ee]=i.createFramebuffer()}else k.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[ne]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ne=0,Ee=$.length;ne<Ee;ne++){const ve=r.get($[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),s.memory.textures++)}if(A.samples>0&&ge(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const Ee=$[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);const ve=a.convert(Ee.format,Ee.colorSpace),ae=a.convert(Ee.type),pe=M(Ee.internalFormat,ve,ae,Ee.colorSpace,A.isXRRenderTarget===!0),Ve=Je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,pe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),be(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ce(k.__webglFramebuffer[ne][Ee],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee);else ce(k.__webglFramebuffer[ne],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ne=0,Ee=$.length;ne<Ee;ne++){const ve=$[ne],ae=r.get(ve);let pe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Se(pe,ve),ce(k.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+ne,pe,0),m(ve)&&f(pe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),Se(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)ce(k.__webglFramebuffer[Ee],A,x,i.COLOR_ATTACHMENT0,ne,Ee);else ce(k.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ne,0);m(x)&&f(ne),t.unbindTexture()}A.depthBuffer&&ue(A)}function de(A){const x=A.textures;for(let k=0,Z=x.length;k<Z;k++){const $=x[k];if(m($)){const J=w(A),Re=r.get($).__webglTexture;t.bindTexture(J,Re),f(J),t.unbindTexture()}}}const Ie=[],ke=[];function _e(A){if(A.samples>0){if(ge(A)===!1){const x=A.textures,k=A.width,Z=A.height;let $=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=r.get(A),ne=x.length>1;if(ne)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ee=A.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ve]);const ae=r.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,$,i.NEAREST),c===!0&&(Ie.length=0,ke.length=0,Ie.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ie.push(J),ke.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ve]);const ae=r.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Je(A){return Math.min(n.maxSamples,A.samples)}function ge(A){const x=r.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ne(A){const x=s.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ct(A,x){const k=A.colorSpace,Z=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==pi&&k!==Mr&&(it.getTransfer(k)===lt?(Z!==$t||$!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=F,this.rebindTextures=je,this.setupRenderTarget=L,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ge}function Bu(i,e){function t(r,n=Mr){let a;const s=it.getTransfer(n);if(r===yr)return i.UNSIGNED_BYTE;if(r===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qs)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===$s)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===Js)return i.BYTE;if(r===Ks)return i.SHORT;if(r===Ii)return i.UNSIGNED_SHORT;if(r===pa)return i.INT;if(r===Gr)return i.UNSIGNED_INT;if(r===lr)return i.FLOAT;if(r===di)return i.HALF_FLOAT;if(r===eo)return i.ALPHA;if(r===to)return i.RGB;if(r===$t)return i.RGBA;if(r===Fi)return i.DEPTH_COMPONENT;if(r===Oi)return i.DEPTH_STENCIL;if(r===ga)return i.RED;if(r===va)return i.RED_INTEGER;if(r===ro)return i.RG;if(r===_a)return i.RG_INTEGER;if(r===xa)return i.RGBA_INTEGER;if(r===En||r===wn||r===Tn||r===An)if(s===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===En)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===An)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===En)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===An)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ya||r===Ma||r===Sa||r===ba)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ma)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ba)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ea||r===wa||r===Ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ea||r===wa)return s===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ta)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Aa||r===Ra||r===Ca||r===La||r===Pa||r===Ua||r===Da||r===Ia||r===Na||r===Fa||r===Oa||r===Ba||r===za||r===ka)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Aa)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ra)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ca)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===La)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pa)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ua)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Da)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ia)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Na)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fa)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oa)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ba)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===za)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ka)return s===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ha||r===Ga||r===Va)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ha)return s===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ga)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Va)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wa||r===Xa||r===qa||r===Ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new St({vertexShader:Kg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new ir(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ev extends mi{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new $g,f={},w=t.getContextAttributes();let M=null,_=null;const T=[],R=[],P=new Ce;let E=null;const y=new Wt;y.viewport=new at;const S=new Wt;S.viewport=new at;const U=[y,S],I=new au;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=T[j];return Q===void 0&&(Q=new gs,T[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=T[j];return Q===void 0&&(Q=new gs,T[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=T[j];return Q===void 0&&(Q=new gs,T[j]=Q),Q.getHandSpace()};function X(j){const Q=R.indexOf(j.inputSource);if(Q===-1)return;const ce=T[Q];ce!==void 0&&(ce.update(j.inputSource,j.frame,l||s),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",V);for(let j=0;j<T.length;j++){const Q=R[j];Q!==null&&(R[j]=null,T[j].disconnect(Q))}B=null,G=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(M),d=null,h=null,p=null,n=null,_=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(n,t)),p},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",W),n.addEventListener("inputsourceschange",V),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ce=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=w.stencil?Oi:Fi,ce=w.stencil?Ni:Gr);const me={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};p=this.getBinding(),h=p.createProjectionLayer(me),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ur(h.textureWidth,h.textureHeight,{format:$t,type:yr,depthTexture:new Oo(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Q={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(n,t,Q),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ur(d.framebufferWidth,d.framebufferHeight,{format:$t,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),He.setContext(n),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let Q=0;Q<j.removed.length;Q++){const ce=j.removed[Q],be=R.indexOf(ce);be>=0&&(R[be]=null,T[be].disconnect(ce))}for(let Q=0;Q<j.added.length;Q++){const ce=j.added[Q];let be=R.indexOf(ce);if(be===-1){for(let ue=0;ue<T.length;ue++)if(ue>=R.length){R.push(ce),be=ue;break}else if(R[ue]===null){R[ue]=ce,be=ue;break}if(be===-1)break}const me=T[be];me&&me.connect(ce)}}const F=new N,K=new N;function he(j,Q,ce){F.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ce.matrixWorld);const be=F.distanceTo(K),me=Q.projectionMatrix.elements,ue=ce.projectionMatrix.elements,je=me[14]/(me[10]-1),L=me[14]/(me[10]+1),de=(me[9]+1)/me[5],Ie=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],_e=(ue[8]+1)/ue[0],Je=je*ke,ge=je*_e,Ne=be/(-ke+_e),ct=Ne*-ke;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),me[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const nt=je+Ne,A=L+Ne,x=Je-ct,k=ge+(be-ct),Z=de*L/A*nt,$=Ie*L/A*nt;j.projectionMatrix.makePerspective(x,k,Z,$,nt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Le(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let Q=j.near,ce=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),I.near=S.near=y.near=Q,I.far=S.far=y.far=ce,(B!==I.near||G!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,G=I.far),I.layers.mask=j.layers.mask|6,y.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const be=j.parent,me=I.cameras;Le(I,be);for(let ue=0;ue<me.length;ue++)Le(me[ue],be);me.length===2?he(I,y,S):I.projectionMatrix.copy(y.projectionMatrix),Se(j,I,be)};function Se(j,Q,ce){ce===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return f[j]};let Ue=null;function De(j,Q){if(u=Q.getViewerPose(l||s),g=Q,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let be=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,be=!0);for(let ue=0;ue<ce.length;ue++){const je=ce[ue];let L=null;if(d!==null)L=d.getViewport(je);else{const Ie=p.getViewSubImage(h,je);L=Ie.viewport,ue===0&&(e.setRenderTargetTextures(_,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(_))}let de=U[ue];de===void 0&&(de=new Wt,de.layers.enable(ue),de.viewport=new at,U[ue]=de),de.matrix.fromArray(je.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(je.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(L.x,L.y,L.width,L.height),ue===0&&(I.matrix.copy(de.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),be===!0&&I.cameras.push(de)}const me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){p=r.getBinding();const ue=p.getDepthInformation(ce[0]);ue&&ue.isValid&&ue.texture&&m.init(ue,n.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),p=r.getBinding();for(let ue=0;ue<ce.length;ue++){const je=ce[ue].camera;if(je){let L=f[je];L||(L=new Bo,f[je]=L);const de=p.getCameraImage(je);L.sourceTexture=de}}}}for(let ce=0;ce<T.length;ce++){const be=R[ce],me=T[ce];be!==null&&me!==void 0&&me.update(be,Q,l||s)}Ue&&Ue(j,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),g=null}const He=new uu;He.setAnimationLoop(De),this.setAnimationLoop=function(j){Ue=j},this.dispose=function(){}}}const Ti=new Ar,tv=new ht;function rv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Dc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,w,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),p(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,w,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),M=w.envMap,_=w.envMapRotation;M&&(m.envMap.value=M,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function iv(i,e,t,r){let n={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const _=M.program;r.uniformBlockBinding(w,_)}function l(w,M){let _=n[w.id];_===void 0&&(g(w),_=u(w),n[w.id]=_,w.addEventListener("dispose",m));const T=M.program;r.updateUBOMapping(w,T);const R=e.render.frame;a[w.id]!==R&&(h(w),a[w.id]=R)}function u(w){const M=p();w.__bindingPointIndex=M;const _=i.createBuffer(),T=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function p(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=n[w.id],_=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=_.length;R<P;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,S=E.length;y<S;y++){const U=E[y];if(d(U,R,y,T)===!0){const I=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let X=0;X<B.length;X++){const W=B[X],V=v(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,I+G,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,G),G+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,M,_,T){const R=w.value,P=M+"_"+_;if(T[P]===void 0)return typeof R=="number"||typeof R=="boolean"?T[P]=R:T[P]=R.clone(),!0;{const E=T[P];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return T[P]=R,!0}else if(E.equals(R)===!1)return E.copy(R),!0}return!1}function g(w){const M=w.uniforms;let _=0;const T=16;for(let P=0,E=M.length;P<E;P++){const y=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,U=y.length;S<U;S++){const I=y[S],B=Array.isArray(I.value)?I.value:[I.value];for(let G=0,X=B.length;G<X;G++){const W=B[G],V=v(W),F=_%T,K=F%V.boundary,he=F+K;_+=K,he!==0&&T-he<V.storage&&(_+=T-he),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=V.storage}}}const R=_%T;return R>0&&(_+=T-R),w.__size=_,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const _=s.indexOf(M.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function f(){for(const w in n)i.deleteBuffer(n[w]);s=[],n={},a={}}return{bind:c,update:l,dispose:f}}class on{constructor(e={}){const{canvas:t=fc(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=qt;let R=0,P=0,E=null,y=-1,S=null;const U=new at,I=new at;let B=null;const G=new ot(0);let X=0,W=t.width,V=t.height,F=1,K=null,he=null;const Le=new at(0,0,W,V),Se=new at(0,0,W,V);let Ue=!1;const De=new No;let He=!1,j=!1;const Q=new ht,ce=new N,be=new at,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function je(){return E===null?F:1}let L=r;function de(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$n}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const O="webgl2";if(L=de(O,b),L===null)throw de(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ie,ke,_e,Je,ge,Ne,ct,nt,A,x,k,Z,$,J,Re,ne,Ee,ve,ae,pe,Ve,we,H,le;function D(){Ie=new mm(L),Ie.init(),we=new Bu(L,Ie),ke=new lm(L,Ie,e,we),_e=new Zg(L,Ie),ke.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),Je=new _m(L),ge=new Fg,Ne=new Jg(L,Ie,_e,ge,ke,we,Je),ct=new um(_),nt=new fm(_),A=new bd(L),H=new sm(L,A),x=new gm(L,A,Je,H),k=new ym(L,x,A,Je),ae=new xm(L,ke,Ne),ne=new cm(ge),Z=new Ng(_,ct,nt,Ie,ke,H,ne),$=new rv(_,ge),J=new Bg,Re=new Wg(Ie),ve=new am(_,ct,nt,_e,k,d,c),Ee=new Yg(_,k,ke),le=new iv(L,Je,ke,_e),pe=new om(L,Ie,Je),Ve=new vm(L,Ie,Je),Je.programs=Z.programs,_.capabilities=ke,_.extensions=Ie,_.properties=ge,_.renderLists=J,_.shadowMap=Ee,_.state=_e,_.info=Je}D();const ee=new ev(_,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(W,V,!1))},this.getSize=function(b){return b.set(W,V)},this.setSize=function(b,O,q=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,V=O,t.width=Math.floor(b*F),t.height=Math.floor(O*F),q===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*F,V*F).floor()},this.setDrawingBufferSize=function(b,O,q){W=b,V=O,F=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Le)},this.setViewport=function(b,O,q,Y){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,q,Y),_e.viewport(U.copy(Le).multiplyScalar(F).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,O,q,Y){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,O,q,Y),_e.scissor(I.copy(Se).multiplyScalar(F).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){_e.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,q=!0){let Y=0;if(b){let z=!1;if(E!==null){const ie=E.texture.format;z=ie===xa||ie===_a||ie===va}if(z){const ie=E.texture.type,ye=ie===yr||ie===Gr||ie===Ii||ie===Ni||ie===fa||ie===ma,Te=ve.getClearColor(),Ae=ve.getClearAlpha(),Ge=Te.r,Ye=Te.g,We=Te.b;ye?(g[0]=Ge,g[1]=Ye,g[2]=We,g[3]=Ae,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ge,v[1]=Ye,v[2]=We,v[3]=Ae,L.clearBufferiv(L.COLOR,0,v))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ve.dispose(),J.dispose(),Re.dispose(),ge.dispose(),ct.dispose(),nt.dispose(),k.dispose(),H.dispose(),le.dispose(),Z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Gt),ee.removeEventListener("sessionend",Pi),ar.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Je.autoReset,O=Ee.enabled,q=Ee.autoUpdate,Y=Ee.needsUpdate,z=Ee.type;D(),Je.autoReset=b,Ee.enabled=O,Ee.autoUpdate=q,Ee.needsUpdate=Y,Ee.type=z}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const O=b.target;O.removeEventListener("dispose",te),Pe(O)}function Pe(b){ze(b),ge.remove(b)}function ze(b){const O=ge.get(b).programs;O!==void 0&&(O.forEach(function(q){Z.releaseProgram(q)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,Y,z,ie){O===null&&(O=me);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Te=qe(b,O,q,Y,z);_e.setMaterial(Y,ye);let Ae=q.index,Ge=1;if(Y.wireframe===!0){if(Ae=x.getWireframeAttribute(q),Ae===void 0)return;Ge=2}const Ye=q.drawRange,We=q.attributes.position;let rt=Ye.start*Ge,dt=(Ye.start+Ye.count)*Ge;ie!==null&&(rt=Math.max(rt,ie.start*Ge),dt=Math.min(dt,(ie.start+ie.count)*Ge)),Ae!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Ae.count)):We!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,We.count));const ft=dt-rt;if(ft<0||ft===1/0)return;H.setup(z,Y,Te,q,Ae);let gt,pt=pe;if(Ae!==null&&(gt=A.get(Ae),pt=Ve,pt.setIndex(gt)),z.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*je()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(z.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),_e.setLineWidth(Fe*je()),z.isLineSegments?pt.setMode(L.LINES):z.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else z.isPoints?pt.setMode(L.POINTS):z.isSprite&&pt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Dn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,Ct=z._multiDrawCounts,Rr=z._multiDrawCount,sr=Ae?A.get(Ae).bytesPerElement:1,Di=ge.get(Y).currentProgram.getUniforms();for(let Xt=0;Xt<Rr;Xt++)Di.setValue(L,"_gl_DrawID",Xt),pt.render(Fe[Xt]/sr,Ct[Xt])}else if(z.isInstancedMesh)pt.renderInstances(rt,ft,z.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,Fe);pt.renderInstances(rt,ft,Ct)}else pt.render(rt,ft)};function ut(b,O,q){b.transparent===!0&&b.side===vr&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,xe(b,O,q),b.side=Cr,b.needsUpdate=!0,xe(b,O,q),b.side=vr):xe(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),f=Re.get(q),f.init(O),M.push(f),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),b!==q&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const Y=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ie=z.material;if(ie)if(Array.isArray(ie))for(let ye=0;ye<ie.length;ye++){const Te=ie[ye];ut(Te,q,z),Y.add(Te)}else ut(ie,q,z),Y.add(ie)}),f=M.pop(),Y},this.compileAsync=function(b,O,q=null){const Y=this.compile(b,O,q);return new Promise(z=>{function ie(){if(Y.forEach(function(ye){ge.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){z(b);return}setTimeout(ie,10)}Ie.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let et=null;function wt(b){et&&et(b)}function Gt(){ar.stop()}function Pi(){ar.start()}const ar=new uu;ar.setAnimationLoop(wt),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(b){et=b,ee.setAnimationLoop(b),b===null?ar.stop():ar.start()},ee.addEventListener("sessionstart",Gt),ee.addEventListener("sessionend",Pi),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,E),f=Re.get(b,M.length),f.init(O),M.push(f),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(Q,cr,O.reversedDepth),j=this.localClippingEnabled,He=ne.init(this.clippingPlanes,j),m=J.get(b,w.length),m.init(),w.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&Ui(ie,O,-1/0,_.sortObjects)}Ui(b,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,he),ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ue&&ve.addToRenderList(m,b),this.info.render.frame++,He===!0&&ne.beginShadows();const q=f.state.shadowsArray;Ee.render(q,b,O),He===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ie=O.cameras;if(z.length>0)for(let ye=0,Te=ie.length;ye<Te;ye++){const Ae=ie[ye];_n(Y,z,b,Ae)}ue&&ve.render(b);for(let ye=0,Te=ie.length;ye<Te;ye++){const Ae=ie[ye];vn(m,b,Ae,Ae.viewport)}}else z.length>0&&_n(Y,z,b,O),ue&&ve.render(b),vn(m,b,O);E!==null&&P===0&&(Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(_,b,O),H.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],He===!0&&ne.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ui(b,O,q,Y){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||De.intersectsSprite(b)){Y&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const ie=k.update(b),ye=b.material;ye.visible&&m.push(b,ie,ye,q,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||De.intersectsObject(b))){const ie=k.update(b),ye=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),be.copy(ie.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(ye)){const Te=ie.groups;for(let Ae=0,Ge=Te.length;Ae<Ge;Ae++){const Ye=Te[Ae],We=ye[Ye.materialIndex];We&&We.visible&&m.push(b,ie,We,q,be.z,Ye)}}else ye.visible&&m.push(b,ie,ye,q,be.z,null)}}const z=b.children;for(let ie=0,ye=z.length;ie<ye;ie++)Ui(z[ie],O,q,Y)}function vn(b,O,q,Y){const z=b.opaque,ie=b.transmissive,ye=b.transparent;f.setupLightsView(q),He===!0&&ne.setGlobalState(_.clippingPlanes,q),Y&&_e.viewport(U.copy(Y)),z.length>0&&C(z,O,q),ie.length>0&&C(ie,O,q),ye.length>0&&C(ye,O,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function _n(b,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new ur(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?di:yr,minFilter:xr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const z=f.state.transmissionRenderTarget[Y.id],ie=Y.viewport||U;z.setSize(ie.z*_.transmissionResolutionScale,ie.w*_.transmissionResolutionScale);const ye=_.getRenderTarget(),Te=_.getActiveCubeFace(),Ae=_.getActiveMipmapLevel();_.setRenderTarget(z),_.getClearColor(G),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),ue&&ve.render(q);const Ge=_.toneMapping;_.toneMapping=Lr;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),He===!0&&ne.setGlobalState(_.clippingPlanes,Y),C(b,q,Y),Ne.updateMultisampleRenderTarget(z),Ne.updateRenderTargetMipmap(z),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let rt=0,dt=O.length;rt<dt;rt++){const ft=O[rt],gt=ft.object,pt=ft.geometry,Fe=ft.material,Ct=ft.group;if(Fe.side===vr&&gt.layers.test(Y.layers)){const Rr=Fe.side;Fe.side=Dt,Fe.needsUpdate=!0,re(gt,q,Y,pt,Fe,Ct),Fe.side=Rr,Fe.needsUpdate=!0,We=!0}}We===!0&&(Ne.updateMultisampleRenderTarget(z),Ne.updateRenderTargetMipmap(z))}_.setRenderTarget(ye,Te,Ae),_.setClearColor(G,X),Ye!==void 0&&(Y.viewport=Ye),_.toneMapping=Ge}function C(b,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ie=b.length;z<ie;z++){const ye=b[z],Te=ye.object,Ae=ye.geometry,Ge=ye.group;let Ye=ye.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),Te.layers.test(q.layers)&&re(Te,O,q,Ae,Ye,Ge)}}function re(b,O,q,Y,z,ie){b.onBeforeRender(_,O,q,Y,z,ie),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,O,q,Y,b,ie),z.transparent===!0&&z.side===vr&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,_.renderBufferDirect(q,O,Y,z,b,ie),z.side=Cr,z.needsUpdate=!0,_.renderBufferDirect(q,O,Y,z,b,ie),z.side=vr):_.renderBufferDirect(q,O,Y,z,b,ie),b.onAfterRender(_,O,q,Y,z,ie)}function xe(b,O,q){O.isScene!==!0&&(O=me);const Y=ge.get(b),z=f.state.lights,ie=f.state.shadowsArray,ye=z.state.version,Te=Z.getParameters(b,z.state,ie,O,q),Ae=Z.getProgramCacheKey(Te);let Ge=Y.programs;Y.environment=b.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(b.isMeshStandardMaterial?nt:ct).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",te),Ge=new Map,Y.programs=Ge);let Ye=Ge.get(Ae);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===ye)return Oe(b,Te),Ye}else Te.uniforms=Z.getUniforms(b),b.onBeforeCompile(Te,_),Ye=Z.acquireProgram(Te,Ae),Ge.set(Ae,Ye),Y.uniforms=Te.uniforms;const We=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=ne.uniform),Oe(b,Te),Y.needsLights=st(b),Y.lightsStateVersion=ye,Y.needsLights&&(We.ambientLightColor.value=z.state.ambient,We.lightProbe.value=z.state.probe,We.directionalLights.value=z.state.directional,We.directionalLightShadows.value=z.state.directionalShadow,We.spotLights.value=z.state.spot,We.spotLightShadows.value=z.state.spotShadow,We.rectAreaLights.value=z.state.rectArea,We.ltc_1.value=z.state.rectAreaLTC1,We.ltc_2.value=z.state.rectAreaLTC2,We.pointLights.value=z.state.point,We.pointLightShadows.value=z.state.pointShadow,We.hemisphereLights.value=z.state.hemi,We.directionalShadowMap.value=z.state.directionalShadowMap,We.directionalShadowMatrix.value=z.state.directionalShadowMatrix,We.spotShadowMap.value=z.state.spotShadowMap,We.spotLightMatrix.value=z.state.spotLightMatrix,We.spotLightMap.value=z.state.spotLightMap,We.pointShadowMap.value=z.state.pointShadowMap,We.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function Xe(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Oe(b,O){const q=ge.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function qe(b,O,q,Y,z){O.isScene!==!0&&(O=me),Ne.resetTextureUnits();const ie=O.fog,ye=Y.isMeshStandardMaterial?O.environment:null,Te=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:pi,Ae=(Y.isMeshStandardMaterial?nt:ct).get(Y.envMap||ye),Ge=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),We=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let ft=Lr;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ft=_.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=gt!==void 0?gt.length:0,Fe=ge.get(Y),Ct=f.state.lights;if(He===!0&&(j===!0||b!==S)){const Lt=b===S&&Y.id===y;ne.setState(Y,b,Lt)}let Rr=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ct.state.version||Fe.outputColorSpace!==Te||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Ae||Y.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ne.numPlanes||Fe.numIntersection!==ne.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==Ye||Fe.morphTargets!==We||Fe.morphNormals!==rt||Fe.morphColors!==dt||Fe.toneMapping!==ft||Fe.morphTargetsCount!==pt)&&(Rr=!0):(Rr=!0,Fe.__version=Y.version);let sr=Fe.currentProgram;Rr===!0&&(sr=xe(Y,O,z));let Di=!1,Xt=!1,xn=!1;const vt=sr.getUniforms(),Kt=Fe.uniforms;if(_e.useProgram(sr.program)&&(Di=!0,Xt=!0,xn=!0),Y.id!==y&&(y=Y.id,Xt=!0),Di||S!==b){_e.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",b.projectionMatrix),vt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Lt=vt.map.cameraPosition;Lt!==void 0&&Lt.setValue(L,ce.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Xt=!0,xn=!0)}if(z.isSkinnedMesh){vt.setOptional(L,z,"bindMatrix"),vt.setOptional(L,z,"bindMatrixInverse");const Lt=z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),vt.setValue(L,"boneTexture",Lt.boneTexture,Ne))}z.isBatchedMesh&&(vt.setOptional(L,z,"batchingTexture"),vt.setValue(L,"batchingTexture",z._matricesTexture,Ne),vt.setOptional(L,z,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",z._indirectTexture,Ne),vt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",z._colorsTexture,Ne));const Qt=q.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ae.update(z,q,sr),(Xt||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,vt.setValue(L,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Kt.envMapIntensity.value=O.environmentIntensity),Xt&&(vt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&mt(Kt,xn),ie&&Y.fog===!0&&$.refreshFogUniforms(Kt,ie),$.refreshMaterialUniforms(Kt,Y,F,V,f.state.transmissionRenderTarget[b.id]),As.upload(L,Xe(Fe),Kt,Ne)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(L,Xe(Fe),Kt,Ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(L,"center",z.center),vt.setValue(L,"modelViewMatrix",z.modelViewMatrix),vt.setValue(L,"normalMatrix",z.normalMatrix),vt.setValue(L,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Lt=Y.uniformsGroups;for(let or=0,Vs=Lt.length;or<Vs;or++){const oi=Lt[or];le.update(oi,sr),le.bind(oi,sr)}}return sr}function mt(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function st(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,O,q){const Y=ge.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ge.get(b.texture).__webglTexture=O,ge.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const q=ge.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Be=L.createFramebuffer();this.setRenderTarget=function(b,O=0,q=0){E=b,R=O,P=q;let Y=!0,z=null,ie=!1,ye=!1;if(b){const Te=ge.get(b);if(Te.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Te.__webglFramebuffer===void 0)Ne.setupRenderTarget(b);else if(Te.__hasExternalTextures)Ne.rebindTextures(b,ge.get(b.texture).__webglTexture,ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(Te.__boundDepthTexture!==Ye){if(Ye!==null&&ge.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const Ge=ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?z=Ge[O][q]:z=Ge[O],ie=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?z=ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[q]:z=Ge,U.copy(b.viewport),I.copy(b.scissor),B=b.scissorTest}else U.copy(Le).multiplyScalar(F).floor(),I.copy(Se).multiplyScalar(F).floor(),B=Ue;if(q!==0&&(z=Be),_e.bindFramebuffer(L.FRAMEBUFFER,z)&&Y&&_e.drawBuffers(b,z),_e.viewport(U),_e.scissor(I),_e.setScissorTest(B),ie){const Te=ge.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,q)}else if(ye){const Te=O;for(let Ae=0;Ae<b.textures.length;Ae++){const Ge=ge.get(b.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Ge.__webglTexture,q,Te)}}else if(b!==null&&q!==0){const Te=ge.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(b,O,q,Y,z,ie,ye,Te=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){_e.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Ge=b.textures[Te],Ye=Ge.format,We=Ge.type;if(!ke.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Y&&q>=0&&q<=b.height-z&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(O,q,Y,z,we.convert(Ye),we.convert(We),ie))}finally{const Ge=E!==null?ge.get(E).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,Y,z,ie,ye,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(O>=0&&O<=b.width-Y&&q>=0&&q<=b.height-z){_e.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ge=b.textures[Te],Ye=Ge.format,We=Ge.type;if(!ke.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(O,q,Y,z,we.convert(Ye),we.convert(We),0);const dt=E!==null?ge.get(E).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,dt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xh(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(rt),L.deleteSync(ft),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,q=0){const Y=Math.pow(2,-q),z=Math.floor(b.image.width*Y),ie=Math.floor(b.image.height*Y),ye=O!==null?O.x:0,Te=O!==null?O.y:0;Ne.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,ye,Te,z,ie),_e.unbindTexture()};const $e=L.createFramebuffer(),Jt=L.createFramebuffer();this.copyTextureToTexture=function(b,O,q=null,Y=null,z=0,ie=null){ie===null&&(z!==0?(Dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=z,z=0):ie=0);let ye,Te,Ae,Ge,Ye,We,rt,dt,ft;const gt=b.isCompressedTexture?b.mipmaps[ie]:b.image;if(q!==null)ye=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Ge=q.min.x,Ye=q.min.y,We=q.isBox3?q.min.z:0;else{const Qt=Math.pow(2,-z);ye=Math.floor(gt.width*Qt),Te=Math.floor(gt.height*Qt),b.isDataArrayTexture?Ae=gt.depth:b.isData3DTexture?Ae=Math.floor(gt.depth*Qt):Ae=1,Ge=0,Ye=0,We=0}Y!==null?(rt=Y.x,dt=Y.y,ft=Y.z):(rt=0,dt=0,ft=0);const pt=we.convert(O.format),Fe=we.convert(O.type);let Ct;O.isData3DTexture?(Ne.setTexture3D(O,0),Ct=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ne.setTexture2DArray(O,0),Ct=L.TEXTURE_2D_ARRAY):(Ne.setTexture2D(O,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Rr=L.getParameter(L.UNPACK_ROW_LENGTH),sr=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Di=L.getParameter(L.UNPACK_SKIP_PIXELS),Xt=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const vt=b.isDataArrayTexture||b.isData3DTexture,Kt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Qt=ge.get(b),Lt=ge.get(O),or=ge.get(Qt.__renderTarget),Vs=ge.get(Lt.__renderTarget);_e.bindFramebuffer(L.READ_FRAMEBUFFER,or.__webglFramebuffer),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let oi=0;oi<Ae;oi++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(b).__webglTexture,z,We+oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(O).__webglTexture,ie,ft+oi)),L.blitFramebuffer(Ge,Ye,ye,Te,rt,dt,ye,Te,L.DEPTH_BUFFER_BIT,L.NEAREST);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||ge.has(b)){const Qt=ge.get(b),Lt=ge.get(O);_e.bindFramebuffer(L.READ_FRAMEBUFFER,$e),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jt);for(let or=0;or<Ae;or++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,z,We+or):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,z),Kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,ie,ft+or):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,ie),z!==0?L.blitFramebuffer(Ge,Ye,ye,Te,rt,dt,ye,Te,L.COLOR_BUFFER_BIT,L.NEAREST):Kt?L.copyTexSubImage3D(Ct,ie,rt,dt,ft+or,Ge,Ye,ye,Te):L.copyTexSubImage2D(Ct,ie,rt,dt,Ge,Ye,ye,Te);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ct,ie,rt,dt,ft,ye,Te,Ae,pt,Fe,gt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,ie,rt,dt,ft,ye,Te,Ae,pt,gt.data):L.texSubImage3D(Ct,ie,rt,dt,ft,ye,Te,Ae,pt,Fe,gt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,rt,dt,ye,Te,pt,Fe,gt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,rt,dt,gt.width,gt.height,pt,gt.data):L.texSubImage2D(L.TEXTURE_2D,ie,rt,dt,ye,Te,pt,Fe,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rr),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sr),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Di),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),ie===0&&O.generateMipmaps&&L.generateMipmap(Ct),_e.unbindTexture()},this.initRenderTarget=function(b){ge.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){R=0,P=0,E=null,_e.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const nv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:jl,AddEquation:kr,AddOperation:Wl,AdditiveBlending:yn,AgXToneMapping:Jl,AlphaFormat:eo,AlwaysCompare:cc,AlwaysDepth:ia,AlwaysStencilFunc:io,ArcCurve:qc,ArrayCamera:au,BackSide:Dt,BasicDepthPacking:$l,Box3:Vr,BoxGeometry:si,BufferAttribute:er,BufferGeometry:kt,ByteType:Js,Camera:yi,CanvasTexture:Ms,CatmullRomCurve3:bs,CineonToneMapping:Yl,ClampToEdgeWrapping:Hr,Color:ot,ColorManagement:it,ConstantAlphaFactor:Hl,ConstantColorFactor:zl,CubeCamera:Oc,CubeReflectionMapping:ui,CubeRefractionMapping:hi,CubeTexture:Uo,CubeUVReflectionMapping:Mn,CubicBezierCurve:jc,CubicBezierCurve3:Zc,CullFaceBack:Ws,CullFaceFront:bl,CullFaceNone:Sl,Curve:Sr,CustomBlending:wl,CustomToneMapping:Zl,Data3DTexture:yc,DataArrayTexture:ho,DataTexture:zc,DepthFormat:Fi,DepthStencilFormat:Oi,DepthTexture:Oo,DoubleSide:vr,DstAlphaFactor:Il,DstColorFactor:Fl,DynamicDrawUsage:uc,EllipseCurve:zo,EqualCompare:ac,EqualDepth:aa,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ua,Euler:Ar,EventDispatcher:mi,ExternalTexture:Bo,Float32BufferAttribute:Tt,FloatType:lr,FrontSide:Cr,Frustum:No,GLSL3:ja,GreaterCompare:sc,GreaterDepth:oa,GreaterEqualCompare:lc,GreaterEqualDepth:sa,Group:Bn,HalfFloatType:di,ImageUtils:_c,InstancedBufferAttribute:fr,InstancedBufferGeometry:nu,InstancedMesh:Do,IntType:pa,KeepStencilOp:fi,Layers:as,LessCompare:nc,LessDepth:na,LessEqualCompare:no,LessEqualDepth:ci,LineCurve:Jc,LineCurve3:Kc,LinearFilter:Pt,LinearMipmapLinearFilter:xr,LinearMipmapNearestFilter:da,LinearSRGBColorSpace:pi,LinearToneMapping:Xl,LinearTransfer:Rn,Material:Ki,MathUtils:Za,Matrix3:Ze,Matrix4:ht,MaxEquation:Cl,Mesh:_t,MeshBasicMaterial:Ao,MeshDepthMaterial:tu,MeshDistanceMaterial:ru,MinEquation:Rl,MirroredRepeatWrapping:ha,MixOperation:Vl,MultiplyBlending:Ys,MultiplyOperation:js,NearestFilter:Vt,NearestMipmapLinearFilter:bn,NearestMipmapNearestFilter:Ql,NeutralToneMapping:Kl,NeverCompare:ic,NeverDepth:ra,NoBlending:_r,NoColorSpace:Mr,NoToneMapping:Lr,NormalBlending:li,NotEqualCompare:oc,NotEqualDepth:la,Object3D:Ht,ObjectSpaceNormalMap:rc,OneFactor:Pl,OneMinusConstantAlphaFactor:Gl,OneMinusConstantColorFactor:kl,OneMinusDstAlphaFactor:Nl,OneMinusDstColorFactor:Ol,OneMinusSrcAlphaFactor:ta,OneMinusSrcColorFactor:Dl,OrthographicCamera:iu,PCFShadowMap:Xs,PCFSoftShadowMap:El,PMREMGenerator:Ko,PerspectiveCamera:Wt,Plane:Jr,PlaneGeometry:ir,Points:Wc,PointsMaterial:Gc,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:Wo,Quaternion:ki,RED_GREEN_RGTC2_Format:qa,RED_RGTC1_Format:Wa,REVISION:$n,RGBADepthPacking:ec,RGBAFormat:$t,RGBAIntegerFormat:xa,RGBA_ASTC_10x10_Format:Ba,RGBA_ASTC_10x5_Format:Na,RGBA_ASTC_10x6_Format:Fa,RGBA_ASTC_10x8_Format:Oa,RGBA_ASTC_12x10_Format:za,RGBA_ASTC_12x12_Format:ka,RGBA_ASTC_4x4_Format:Aa,RGBA_ASTC_5x4_Format:Ra,RGBA_ASTC_5x5_Format:Ca,RGBA_ASTC_6x5_Format:La,RGBA_ASTC_6x6_Format:Pa,RGBA_ASTC_8x5_Format:Ua,RGBA_ASTC_8x6_Format:Da,RGBA_ASTC_8x8_Format:Ia,RGBA_BPTC_Format:Ha,RGBA_ETC2_EAC_Format:Ta,RGBA_PVRTC_2BPPV1_Format:ba,RGBA_PVRTC_4BPPV1_Format:Sa,RGBA_S3TC_DXT1_Format:wn,RGBA_S3TC_DXT3_Format:Tn,RGBA_S3TC_DXT5_Format:An,RGBFormat:to,RGB_BPTC_SIGNED_Format:Ga,RGB_BPTC_UNSIGNED_Format:Va,RGB_ETC1_Format:Ea,RGB_ETC2_Format:wa,RGB_PVRTC_2BPPV1_Format:Ma,RGB_PVRTC_4BPPV1_Format:ya,RGB_S3TC_DXT1_Format:En,RGFormat:ro,RGIntegerFormat:_a,RawShaderMaterial:eu,Ray:is,Raycaster:ou,RedFormat:ga,RedIntegerFormat:va,ReinhardToneMapping:ql,RenderTarget:xc,RepeatWrapping:Sn,ReverseSubtractEquation:Al,SIGNED_RED_GREEN_RGTC2_Format:Ya,SIGNED_RED_RGTC1_Format:Xa,SRGBColorSpace:qt,SRGBTransfer:lt,Scene:Mi,ShaderChunk:Ke,ShaderLib:mr,ShaderMaterial:St,ShortType:Ks,Source:Ka,Sphere:_i,SphereGeometry:Hs,SplineCurve:$c,SrcAlphaFactor:ea,SrcAlphaSaturateFactor:Bl,SrcColorFactor:Ul,StaticDrawUsage:ao,SubtractEquation:Tl,SubtractiveBlending:qs,TangentSpaceNormalMap:tc,Texture:Rt,Triangle:nr,TubeGeometry:Gs,UVMapping:Zs,Uint16BufferAttribute:Ro,Uint32BufferAttribute:Co,UniformsLib:fe,UniformsUtils:Ic,UnsignedByteType:yr,UnsignedInt101111Type:$s,UnsignedInt248Type:Ni,UnsignedInt5999Type:Qs,UnsignedIntType:Gr,UnsignedShort4444Type:fa,UnsignedShort5551Type:ma,UnsignedShortType:Ii,VSMShadowMap:gr,Vector2:Ce,Vector3:N,Vector4:at,WebGLCoordinateSystem:cr,WebGLCubeRenderTarget:Bc,WebGLRenderTarget:ur,WebGLRenderer:on,WebGLUtils:Bu,WebGPUCoordinateSystem:Cn,WebXRController:gs,ZeroFactor:Ll,createCanvasElement:fc},Symbol.toStringTag,{value:"Module"}));function av(i){return"#"+[1,3,5].map(e=>Math.round(parseInt(i.slice(e,e+2),16)*.61+[225,215,230][(e-1)/2]*.39)).map(e=>e.toString(16).padStart(2,"0")).join("")}const ln=[["amethyst","Amethyst","#d559ff","M7 31Q6 21 14 18Q11 8 17 9Q22 10 24 17Q34 15 38 24Q45 36 36 38Q31 40 26 37Q18 42 11 38Q7 37 7 31Z","tilt","M14 27q2 2 4 0",3.6],["glacier","Glacier","#63d4e8","M6 31Q5 24 13 20Q10 14 17 13Q23 9 28 14Q38 11 38 21Q44 27 39 33Q38 40 29 37Q19 42 15 37Q8 38 6 31Z","float","M23 14q1-6 7-6",4.3],["amber","Amber","#f1ae67","M7 30Q9 24 14 19Q18 8 24 9Q29 10 33 20Q41 27 39 34Q37 39 28 36Q22 41 15 37Q7 36 7 30Z","nod","M18 30q3 3 6 0",3.9],["crimson","Crimson","#ff626c","M6 27Q4 17 14 15Q20 13 24 19Q30 9 37 16Q46 24 35 32L26 39Q23 41 19 38Q8 34 6 27Z","beat","M16 18l3 1",3],["tangerine","Tangerine","#ff883d","M6 29Q5 23 13 21Q14 14 22 15Q28 11 32 18Q41 18 41 28Q41 38 33 37Q30 42 25 37Q20 41 16 37Q8 39 6 29Z","shuffle","M21 15q-2-6-7-5",3.2],["lemon","Lemon","#f5de68","M8 31Q8 24 14 21L17 12Q20 8 24 13L27 18L32 13Q38 10 36 20Q43 29 38 34Q31 40 25 36Q14 41 8 34Z","peek","M15 28q2 1 4 0",4.5],["leaf","Leaf","#81dc72","M7 33Q6 22 15 17Q22 15 30 9Q35 7 35 15Q42 23 38 32Q34 39 25 36Q15 41 9 36Z","lean","M26 16q3-4 6-4",3.8],["lagoon","Lagoon","#3ec8aa","M6 31Q6 24 13 21Q11 15 17 15Q22 15 24 21Q28 14 33 15Q38 15 37 22Q43 28 38 34Q36 39 29 37Q22 40 14 37Q8 38 6 31Z","wobble","M20 31q4 2 8-1",4.1],["cobalt","Cobalt","#789cff","M7 34Q4 27 11 22Q11 15 17 15Q24 9 30 15Q37 15 37 23L41 31Q43 38 35 37L29 35Q21 41 16 36Q10 40 7 34Z","hop","M16 18l5-1",3.5],["rose","Rose","#ff82b5","M7 26Q5 18 14 17Q15 9 22 12Q26 13 27 17Q36 11 39 19Q44 25 37 30Q39 37 32 38Q26 40 22 35Q13 42 10 35Q6 32 7 26Z","sway","M12 30l3 1",4],["pearl","Pearl","#f4f4f4","M7 32Q8 25 13 22Q13 11 23 11Q33 10 34 21Q40 24 40 33Q39 40 32 36Q28 40 23 37Q18 41 14 37Q9 39 7 32Z","breathe","M19 32q4 2 7-1",4.8]].map(([i,e,t,r,n,a,s])=>({id:i,label:e,color:t,accent:t,edge:i==="pearl"?"#dfdfdf":av(t),path:r,motion:n,mark:a,period:s})),sv={amethyst:'<path d="m13 20 3-6 2 5" fill="#8e438b"/><path d="m30 29 3-1m-3 3 3 1"/>',glacier:'<path d="m16 14 1-4 4 2m2 0 3-4 2 4" fill="#c7fcff" stroke="none"/><path d="m13 30 4 1"/>',amber:'<path d="m16 20 1-3m3 2 1-3m3 2 1-3" opacity=".45"/><path d="M20 28q2 3 4 0"/>',crimson:'<path d="m12 26 3 1m15-2 3-1" stroke="#ffb6b5"/><path d="M21 29q2 2 4-1"/>',tangerine:'<path d="M20 16q-7-7-12-3 5 5 12 3" fill="#788340" stroke="none"/><path d="M23 29h2"/>',lemon:'<path d="m17 17 2-3 2 4m10 1 2-3" stroke="#a0843d"/><path d="M21 29q2 2 4 0"/>',leaf:'<path d="M27 18q2-4 6-6m-5 5 4 0" stroke="#518441"/><path d="M20 29q2 2 4 0"/>',lagoon:'<path d="m13 29 3 1m13-1 3-2" stroke="#a8fff0"/><path d="M20 29q3 3 6-1"/>',cobalt:'<path d="M12 22q3-8 10-7l9-1 2 5q-12-2-21 3" fill="#384475" stroke="none"/><path d="M21 30l3-1"/>',rose:'<path d="M16 17q0-5 4-5l3 5q-3 2-7 0" fill="#ffe1ee" stroke="none"/><path d="m12 28 4 2m15-2 2-2" stroke="#f8bed2"/>',pearl:'<path d="M13 23q10-14 22 1" stroke="#a9a9a9"/><path d="m19 32 2-2 2 3 3-3"/>'};function ov(i,e="tone"){const t=i.color;return`<svg viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="${e}-${i.id}" cx="34%" cy="20%" r="80%"><stop stop-color="white" stop-opacity=".68"/><stop offset=".44" stop-color="${t}"/><stop offset=".76" stop-color="${t}"/><stop offset="1" stop-color="#151023" stop-opacity=".52"/></radialGradient></defs><g class="body"><path d="${i.path}" fill="${t}"/><path d="${i.path}" fill="url(#${e}-${i.id})"/><path d="M12 32q6 6 15 4" fill="none" stroke="white" stroke-opacity=".18" stroke-width="1.1"/><ellipse cx="15.7" cy="28" rx="2.1" ry="1.1" fill="#e89cb9" opacity=".38"/><ellipse cx="30" cy="27" rx="2" ry="1" fill="#e89cb9" opacity=".36"/><g fill="#201822"><ellipse cx="19" cy="25" rx="1.85" ry="2.5"/><ellipse cx="27" cy="24" rx="1.85" ry="2.45"/></g><g fill="#fff"><circle cx="18.6" cy="24.1" r=".61"/><circle cx="26.6" cy="23.1" r=".60"/></g><path d="M13 21q1.3-3.8 4.8-4.6" stroke="#fff" opacity=".42" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="${i.mark}" fill="none" stroke="#392639" stroke-opacity=".66" stroke-width="1.35" stroke-linecap="round"/><g fill="none" stroke="#4a3747" stroke-width="1.25" stroke-linecap="round">${sv[i.id]}</g></g></svg>`}function lv(i,e){let t=null,r=0,n=!1,a=-1/0,s=NaN,o=NaN,c=!1;const l=_=>_ instanceof Element&&!_.closest("[data-audio-silent]")?_.closest('button,a[href],summary,input[type="range"],[role="tab"]'):null,u=()=>{clearTimeout(r),r=0},p=()=>{if(!t||n||r||t.closest("[inert]")||t.matches(":disabled"))return;const _=t;r=window.setTimeout(()=>{r=0,!(t!==_||n||document.hidden||!_.isConnected||_.closest("[inert]")||_.matches(":disabled")||performance.now()-a<150)&&(n=!0,a=performance.now(),i())},45)},h=_=>{if(_.pointerType!=="mouse")return;const T=l(_.target);T!==t&&(u(),t=T,n=!1)},d=_=>{if(_.pointerType!=="mouse"||!_.isTrusted)return;c=!1;const T=Number.isNaN(s)||Math.hypot(s-_.clientX,o-_.clientY)>1;s=_.clientX,o=_.clientY,T&&l(_.target)===t&&p()},g=_=>{l(_.relatedTarget)!==t&&(u(),t=null,n=!1)},v=_=>{c=_.isTrusted&&["Tab","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(_.key)},m=_=>{c&&(c=!1,u(),t=l(_.target),n=!1,p())},f=()=>{u(),n=!0,e()},w=()=>{document.hidden&&f()},M=()=>{u(),n=!0};return document.addEventListener("pointerdown",f,!0),document.addEventListener("visibilitychange",w),document.addEventListener("pointerover",h),document.addEventListener("pointermove",d),document.addEventListener("pointerout",g),document.addEventListener("keydown",v,!0),document.addEventListener("focusin",m),document.addEventListener("scroll",M,!0),()=>{u(),document.removeEventListener("pointerdown",f,!0),document.removeEventListener("visibilitychange",w),document.removeEventListener("pointerover",h),document.removeEventListener("pointermove",d),document.removeEventListener("pointerout",g),document.removeEventListener("keydown",v,!0),document.removeEventListener("focusin",m),document.removeEventListener("scroll",M,!0)}}function cv(i,e){const t=new Audio;t.loop=!0,t.preload="none",t.volume=.17,t.src=new URL("audio/013/stillwater.ogg",document.baseURI).href;let r=!0,n=!1,a=!0,s=0,o=!1,c=!1;const l=()=>r&&n&&a&&!document.hidden;function u(d){i.dataset.status=d,e.hidden=d!=="unavailable"}function p(){o=!1,c=!0,u("unavailable")}function h(){if(!l()){s++,o=!1,t.pause(),u(c?"unavailable":n||!r?"paused":"idle");return}if(o||c||!t.paused)return;const d=++s;o=!0,u("loading"),t.play().then(()=>{d===s&&(o=!1,l()?u("playing"):t.pause())},()=>{d===s&&p()})}return t.addEventListener("error",()=>{s++,p()}),e.addEventListener("click",()=>{r&&(s++,o=c=!1,n=!0,t.load(),h())}),document.addEventListener("visibilitychange",h),addEventListener("pagehide",()=>{a=!1,h()}),addEventListener("pageshow",()=>{a=!0,h()}),{arm(){r&&(n=!0,h())},enable(d){r=d,h()}}}const uv=["intent","open","close","choose","step","play","pause","detail","back","retry","link","cube","water","sand","submerge","emerge","unmute"],zu=new Map,ku=new Set(["cube","water","sand","submerge","emerge"]),Hu=cv(document.querySelector("#music-player"),document.querySelector("#music-retry")),tl=new Map;let rr,Gu,br,Kr=!0,rl=0,Vu=-1/0,Wu=-1/0;const cn=new Map;function Xu(i){const e=tl.get(i);if(e)return e;Gu??=new OfflineAudioContext(1,1,48e3);const t=ku.has(i)?"017":"011",r=fetch(new URL(`audio/${t}/${i}.wav`,document.baseURI)).then(n=>{if(!n.ok)throw Error("Audio unavailable");return n.arrayBuffer()}).then(n=>Gu.decodeAudioData(n)).catch(n=>{throw tl.delete(i),n});return tl.set(i,r),r}function il(){rl++;for(const i of cn.keys())i.stop();cn.clear()}function qu(){for(const[i,e]of cn)e==="intent"&&i.stop()}function nl(){if("OfflineAudioContext"in window)for(const i of uv)Xu(i).catch(()=>{})}function hv(i){i!==Kr&&!i&&il(),Kr=i,br&&rr&&br.gain.setValueAtTime(i?.84:0,rr.currentTime),Hu.enable(i)}function Wn(){if(!(!Kr||document.hidden)){Hu.arm();try{if(rr??=new AudioContext({latencyHint:"interactive"}),!br){br=rr.createGain(),br.gain.value=.84,br.connect(rr.destination);for(const[i,e]of[["water",.83],["submerge",.55]]){const t=rr.createGain();t.gain.value=e,t.connect(br),zu.set(i,t)}}rr.state==="suspended"&&rr.resume().catch(()=>{}),nl()}catch{}}}const dv={context:()=>rr,master:()=>br,enabled:()=>Kr};async function Er(i){if(!Kr||document.hidden||!rr||!br)return;const e=performance.now();if(i==="intent"){if(e-Vu<170||e-Wu<110)return;Vu=e}else Wu=e,qu();const t=rl;try{const r=await Xu(i);if(t!==rl||!Kr||document.hidden||cn.size>=5||rr.state!=="running"||performance.now()-e>(ku.has(i)?460:220))return;const n=rr.createBufferSource();n.buffer=r,n.connect(zu.get(i)??br),cn.set(n,i),n.onended=()=>{cn.delete(n),n.disconnect()},n.start()}catch{}}lv(()=>{Er("intent")},qu),document.querySelector("#music-retry")?.addEventListener("click",()=>{Er("retry")}),document.addEventListener("visibilitychange",()=>{document.hidden&&il()}),addEventListener("pagehide",il),document.addEventListener("pointerup",i=>{i.isTrusted&&i.isPrimary&&!i.target?.closest?.("#sound-toggle")&&Wn()},!0),document.addEventListener("keydown",i=>{i.isTrusted&&!i.repeat&&!["Shift","Alt","Control","Meta"].includes(i.key)&&!i.target?.closest?.("#sound-toggle")&&Wn()},!0),document.addEventListener("click",i=>{i.isTrusted&&i.target?.closest?.("a[href]")&&Er("link")}),"requestIdleCallback"in window?requestIdleCallback(()=>{Kr&&nl()},{timeout:850}):setTimeout(()=>{Kr&&nl()},320);const Yu="amethyst.palette.v1",ju=i=>ln.find(e=>e.id===i)??ln[0],al=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255),Qr=i=>new URL("intro-media/"+i,document.baseURI).href;let tt=ln[0];try{tt=ju(localStorage.getItem(Yu))}catch{}function Zu(i){tt=ju(i);try{localStorage.setItem(Yu,tt.id)}catch{}const e=document.documentElement;e.dataset.palette=tt.id,document.title="CachyOS "+tt.label,document.querySelector("meta[name=description]").content="Explore CachyOS "+tt.label+" and its native desktop recordings.",document.querySelector("#edition-name").textContent=tt.label,e.style.setProperty("--accent",tt.accent),e.style.setProperty("--edge",tt.edge);for(const t of["lake","mobile"])e.style.setProperty("--"+t,`url("${Qr(tt.id+"-"+t+".webp")}")`);window.dispatchEvent(new Event("amethyst-palette"))}function pv(i){const e=document.createElement("div");e.className="palette-picker segment";const t=document.createElement("button");t.type="button",t.className="gooey-label",t.id="menu-trigger",t.textContent="Colors",t.setAttribute("aria-controls","palette-pets"),t.setAttribute("aria-expanded","false");const r=document.createElement("div");r.id="palette-pets",r.className="palette-pets",r.setAttribute("role","group"),r.setAttribute("aria-label","Desktop colorway"),e.append(t,r);const n=matchMedia("(prefers-reduced-motion: reduce)"),a=[[4,-1],[-3,-3],[2,-1],[-5,-1],[6,-1],[-2,-3],[5,-1],[-6,-1],[2,-4],[-3,-2],[1,-1]];function s(l=!1,u=!1){e.classList.contains("open")&&(e.classList.remove("open"),u&&Er("close"),t.setAttribute("aria-expanded","false"),l&&!e.hidden&&t.focus({preventScroll:!0}))}async function o(l,u){if(!n.matches&&document.body.dataset.reduced==="false"){const[p,h]=a[ln.indexOf(l)];u.querySelector("svg").animate([{transform:"scale(1)"},{transform:"scale(1.18,.79)"},{transform:`translateY(${h}px) rotate(${p}deg) scale(.94,1.11)`},{transform:"scale(1)"}],{duration:295+l.period*12,easing:"ease-out"})}await i(l.id),tt.id===l.id&&s(!0)}for(const[l,u]of ln.entries()){const p=document.createElement("button");p.type="button",p.className="pet",p.dataset.colorway=u.id,p.title=u.label,p.setAttribute("aria-label",u.label),p.style.setProperty("--pet-color",u.accent),p.style.setProperty("--period",u.period+"s"),p.style.setProperty("--delay",-l*.67+"s"),p.style.setProperty("--pet-tilt",a[l][0]+"deg"),p.dataset.idle=u.motion,p.innerHTML=ov(u)+"<span>"+u.label+"</span>",p.onclick=()=>{o(u,p)},r.append(p)}function c(){for(const l of r.children)l.setAttribute("aria-pressed",String(l.dataset.colorway===tt.id));t.setAttribute("aria-label","Colors, current theme "+tt.label)}return c(),addEventListener("amethyst-palette",c),t.onclick=()=>{if(e.classList.contains("open"))return s(!0,!0);e.classList.add("open"),Er("open"),t.setAttribute("aria-expanded","true"),r.querySelector("[aria-pressed=true]")?.focus({preventScroll:!0})},r.addEventListener("keydown",l=>{if(l.altKey||l.ctrlKey||l.metaKey)return;const u={ArrowLeft:-1,ArrowRight:1,ArrowUp:-2,ArrowDown:2,Home:0,End:0};if(!(l.key in u))return;l.preventDefault();const p=[...r.children],h=l.key==="Home"?0:l.key==="End"?p.length-1:(p.indexOf(l.target)+u[l.key]+p.length)%p.length;p[h].focus({preventScroll:!0}),p[h].scrollIntoView({block:"nearest",container:"nearest"})}),e.addEventListener("focusout",l=>{l.relatedTarget&&!e.contains(l.relatedTarget)&&s()}),document.addEventListener("click",l=>{e.contains(l.target)||s(!1,!0)}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("open")&&(l.preventDefault(),s(!0,!0))}),addEventListener("amethyst-panel",()=>s()),{picker:e,group:r,close:s}}const sl=1200,ol=641,ll=70,Ju=Object.freeze({left:-160,span:1520,base:567,rise:369,compactDrop:50}),Ku=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Cs(i,e){const t=Ku((i/e-.9)/.58),r=Math.min(i/1090,e/630),n=Math.min(i/704,e/672),a=n+(r-n)*t,s=787-170*t;return{left:i*.5-s*a,top:Math.max(0,e*.48-316*a)*t,scale:a,compact:1-t}}function fv(i,e){const{left:t,span:r,base:n,rise:a,compactDrop:s}=Ju,o=Math.max(0,Math.min(1,(i-t)/r));return{y:n-a*Ku(o)+s*e,spread:Math.hypot(1,a*6*o*(1-o)/r)}}function Qu(){const i=document.createElement("canvas"),e=i.getContext("2d"),t='500 132px "Portfolio Inter", sans-serif';let r="";const n=214;return{canvas:i,period:1,invalidate(){r=""},update(a,s,o=!0){if(r===a.id)return!1;r=a.id,e.font=t;const c=a.label.toUpperCase()+"  /  ",l="CACHYOS  /  ",u=e.measureText(c).width,p=Math.ceil(u+e.measureText(l).width)+36,h=Math.min(3,s/p);return i.width=Math.floor(p*h),i.height=Math.floor(n*h),e.setTransform(i.width/p,0,0,i.height/n,0,0),o&&(e.fillStyle="#000",e.fillRect(0,0,p,n)),e.font=t,e.fillStyle=o?"#f00":a.accent,e.fillText(c,18,153),e.fillStyle=o?"#0f0":"#f0f0f0",e.fillText(l,18+u,153),this.period=p*ll/n,!0}}}const mv=`// Registered coordinates refer to the 1200 x 641 crop. The offline and live
// renderers use these same displacement, matte, and highlight samples.
uniform sampler2D portraitArt;
uniform sampler2D portraitMasks;
uniform vec3 portraitAccent;
uniform float portraitTime;
const vec2 plateSize = vec2(1200., 641.);
const vec3 darkField = vec3(0.);

vec2 strand(vec2 p, vec2 root, vec2 tip, float width, vec2 movement) {
  vec2 line = tip - root;
  float projection = dot(p-root, line) / dot(line,line);
  float along = clamp(projection, 0., 1.);
  vec2 offAxis = (p-root-line*along) / width;
  float spread = exp(-1.7*dot(offAxis,offAxis));
  // The root follows the head only. The lock bends between root and tip.
  return movement * smoothstep(.02,.97,along) * spread;
}

vec2 portraitUV(vec2 p) {
  float a = portraitTime * 6.28318530718 / 8.;
  float border = smoothstep(0.,18.,p.y)*(1.-smoothstep(605.,641.,p.y));
  float head = smoothstep(415.,558.,p.x)*(1.-smoothstep(376.,568.,p.y));
  vec2 neck = p-vec2(879.,516.);
  float angle = .011*sin(a) + .0025*sin(2.*a);
  vec2 movement = head * (angle*vec2(-neck.y,neck.x) + vec2(.8*sin(a-.19),2.4*sin(a-.45)));
  float shoulder = smoothstep(808.,958.,p.x)*smoothstep(429.,556.,p.y)*(1.-smoothstep(562.,640.,p.y));
  movement.y += 1.15*shoulder*sin(a-.91);
  movement += strand(p,vec2(655.,119.),vec2(549.,231.),52.,vec2(-5.3*sin(a-.68),3.2*sin(2.*a-.34)));
  movement += strand(p,vec2(683.,218.),vec2(686.,370.),41.,vec2(2.5*sin(2.*a+.5),2.8*sin(a-.81)));
  movement += strand(p,vec2(740.,64.),vec2(1002.,137.),38.,vec2(6.1*sin(a-1.08),4.2*sin(2.*a-1.42)));
  movement += strand(p,vec2(835.,26.),vec2(1072.,65.),37.,vec2(4.3*sin(2.*a-.53),2.7*sin(a-.89)));
  movement += strand(p,vec2(760.,343.),vec2(879.,470.),53.,vec2(4.9*sin(a-.95),3.2*sin(2.*a-.77)));
  movement += strand(p,vec2(1049.,191.),vec2(1078.,325.),40.,vec2(-2.4*sin(a-.57),2.4*sin(a-.19)));
  return (p - movement*border) / plateSize;
}

float plateCoverage(vec2 uv) {
  return step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);
}

vec3 portraitSample(vec2 uv) {
  vec2 q = clamp(uv,0.,1.);
  vec3 rgb = texture2D(portraitArt,q).rgb;
  float tint = texture2D(portraitMasks,q).g;
  return mix(darkField, mix(rgb,portraitAccent,tint*.72),plateCoverage(uv));
}

float foregroundCoverage(vec2 uv) {
  return texture2D(portraitMasks,clamp(uv,0.,1.)).r*plateCoverage(uv);
}
`,cl=document.querySelector("#download-repo"),gv=matchMedia("(prefers-reduced-motion: reduce)"),$u=()=>gv.matches||document.body.dataset.reduced==="true";let Ls=-1/0,$r=0,un=0,ul=0;function eh(){dispatchEvent(new Event("amethyst-mirror-frame")),ul=performance.now()-Ls<620?requestAnimationFrame(eh):0}function th(){if(!$r&&!un)return 0;const i=Math.max(0,Math.min(1,(performance.now()-Ls)/620));return i*i*(3-2*i)}function ei(){clearTimeout($r),clearTimeout(un),cancelAnimationFrame(ul),$r=un=0,Ls=-1/0,delete document.body.dataset.mirror,dispatchEvent(new Event("amethyst-mirror-frame"))}cl&&(cl.addEventListener("click",i=>{i.defaultPrevented||i.button!==0||i.ctrlKey||i.metaKey||i.shiftKey||i.altKey||$u()||(i.preventDefault(),!($r||un)&&(Ls=performance.now(),document.body.dataset.mirror="active",ul=requestAnimationFrame(eh),$r=setTimeout(()=>{$r=0,un=setTimeout(ei,750),window.location.assign(cl.href)},740)))}),addEventListener("pageshow",ei),addEventListener("pagehide",ei),addEventListener("popstate",ei),addEventListener("hashchange",ei),addEventListener("amethyst-preferences",()=>{$u()&&$r&&ei()}),addEventListener("keydown",i=>{i.key==="Escape"&&ei()}));function vv(i,e){const t=i.querySelector(".closing"),r="amethyst.closing.016";let n=!1,a,s;try{n=sessionStorage.getItem(r)==="seen"}catch{}return o=>{const c=location.hash==="#download"?0:Math.min(180,innerHeight*.18),l=o&&(n||scrollY+innerHeight>=i.offsetTop+c);if(e()&&s?.cancel(),a!==l){if(a=l,i.classList.toggle("in-chapter",a),t.inert=!a,!a){s?.cancel(),($r||un)&&ei();return}if(!n){n=!0;try{sessionStorage.setItem(r,"seen")}catch{}e()||(s=t.animate([{opacity:0},{opacity:1}],{duration:410,easing:"cubic-bezier(.2,.75,.25,1)"}))}}}}const rh=matchMedia("(max-width: 1050px)"),Xn=i=>(rh.matches?"compact/":"")+i,ih=i=>rh.addEventListener("change",i);function _v(i,e,t,r){let n=0,a=i;async function s(){const o=++n,c=Xn("portrait-plate.webp");if(a===c)return;const l=await Promise.allSettled([e(c,!0),e(Xn("portrait-masks.webp"),!1)]);if(o!==n||l.some(d=>d.status!=="fulfilled")){l.forEach(d=>{d.status==="fulfilled"&&d.value.dispose()});return}const[u,p]=l.map(d=>d.value),h=[t.portraitArt.value,t.portraitMasks.value];t.portraitArt.value=u,t.portraitMasks.value=p,a=c,r(),h.forEach(d=>d.dispose())}ih(s),s()}function Ps(i,e,t){const r=Math.max(0,Math.min(1,(t-i)/(e-i)));return r*r*(3-2*r)}function hl(i,e){const t=new Image;return t.src=Qr(i),t.decode().then(()=>{const r=new Rt(t);return r.flipY=!1,r.generateMipmaps=e,r.minFilter=e?xr:Pt,r.magFilter=Pt,r.needsUpdate=!0,r})}function xv(i,e){const t=document.createElement("canvas");t.className="poster-ribbon",t.setAttribute("aria-hidden","true"),i.insertBefore(t,i.querySelector("#lens"));const r=t.getContext("2d"),n=Qu();let a,s,o;const c=()=>{const l=e.currentSrc;if(!l||!e.complete||!e.naturalWidth){a&&(t.width=0,a=null);return}const u=new URL("portrait-alpha.webp",l).href;if(u!==o&&(o=u,a=null,t.width=0,s=new Image,s.onload=c,s.src=u),!s.complete||!s.naturalWidth)return;const p=i.clientWidth,h=i.clientHeight;if(!p||!h)return;const d=th(),g=[p,h,devicePixelRatio,tt.id,d].join("/");if(g===a)return;a=g,n.update(tt,4096,!1);const v=Math.min(devicePixelRatio,2,3840/p,2160/h),m=Math.round(p*v),f=Math.round(h*v);t.width!==m&&(t.width=m),t.height!==f&&(t.height=f),r.clearRect(0,0,m,f);const w=Cs(p,h),M=1+.16*d,_=n.canvas.width*M/(w.scale*v*n.period);r.imageSmoothingQuality="high";for(let T=0;T<m;T++){const R=T/m,P=780+((T/v-w.left)/w.scale-780)*M,{y:E,spread:y}=fv(P,w.compact),S=(w.top+(382+(E+62*d-382)/M)*w.scale)*v,U=ll*y*w.scale*v/M,I=1-S/f,B=(1-Ps(.36,.64,R))*Ps(.14,.27,I)*(1-Ps(.66,.77,I));r.globalAlpha=(1-Ps(.846,.982,R))*(1-.94*B*Math.min(1,d/.6));const G=((P/n.period+.11)%1+1)%1*n.canvas.width;r.drawImage(n.canvas,G,0,Math.min(_,n.canvas.width-G),n.canvas.height,T,S-U*.5,1,U)}r.globalAlpha=1,r.globalCompositeOperation="destination-out",r.drawImage(s,w.left*v,w.top*v,sl*w.scale*v,ol*w.scale*v),r.globalCompositeOperation="source-over"};return e.addEventListener("load",c),ih(()=>requestAnimationFrame(c)),c(),addEventListener("amethyst-mirror-frame",()=>{i.classList.contains("ready")||c()}),addEventListener("amethyst-palette",c),new ResizeObserver(c).observe(i),document.fonts.load('500 132px "Portfolio Inter"').catch(()=>{}).then(()=>{a=null,n.invalidate(),c()}),t}async function yv(i,e,t,r){const n=Xn("portrait-plate.webp"),a=Xn("portrait-masks.webp"),[s,o]=await Promise.all([hl(n,!0),hl(a,!1),document.fonts.load('500 132px "Portfolio Inter"')]),c=new on({alpha:!1,antialias:!1,depth:!1,powerPreference:"high-performance"}),l=c.domElement;l.className="portrait-live",l.setAttribute("aria-hidden","true"),i.insertBefore(l,i.querySelector("#lens"));const u=Qu();let p;function h(){p?.dispose(),p=new Ms(u.canvas),p.wrapS=Sn,p.minFilter=xr,p.anisotropy=Math.min(8,c.capabilities.getMaxAnisotropy()),d.ink.value=p}const d={depthMirror:{value:0},portraitArt:{value:s},portraitMasks:{value:o},portraitAccent:{value:new N},portraitTime:{value:0},phase:{value:.11},ink:{value:null},period:{value:1},view:{value:new at},motionBuffer:{value:new Ce(1,1)},compact:{value:0},lensCenter:{value:new Ce},lensRadius:{value:0}},{left:g,span:v,base:m,rise:f,compactDrop:w}=Ju,M=V=>V.toFixed(1),_=new St({depthTest:!1,depthWrite:!1,uniforms:d,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:mv+`
      varying vec2 vUv;
      uniform sampler2D ink;
      uniform vec4 view;
      uniform vec2 lensCenter,motionBuffer;
      uniform float period,phase,lensRadius,compact,depthMirror;
      void main(){
        vec2 p=view.xy+vec2(vUv.x,1.-vUv.y)*view.zw;
        vec2 uv=portraitUV(p);
        vec2 anchor=vec2(780.,382.);
        p=anchor+(p-anchor)*(1.+.16*depthMirror);
        p.y-=62.*depthMirror;
        vec3 art=portraitSample(uv);
        float t=clamp((p.x-(${M(g)}))/${M(v)},0.,1.);
        float curve=${M(m)}-${M(f)}*t*t*(3.-2.*t)+${M(w)}*compact;
        float slope=-${M(f)}*6.*t*(1.-t)/${M(v)};
        float band=.5-(p.y-curve)/(sqrt(1.+slope*slope)*${M(ll)});
        vec2 letters=texture2D(ink,vec2(p.x/period+phase,clamp(band,0.,1.))).rg;
        float amount=clamp(letters.x+letters.y,0.,1.)*step(0.,band)*step(band,1.)*(1.-foregroundCoverage(uv));
        float clearTitle=(1.-smoothstep(.36,.64,vUv.x))*smoothstep(.14,.27,vUv.y)*(1.-smoothstep(.66,.77,vUv.y));
        amount*=(1.-smoothstep(.846,.982,vUv.x))*(1.-.94*clearTitle*min(1.,depthMirror/.60));
        float accent=letters.x/max(.001,letters.x+letters.y);
        float distanceFromLens=distance(vUv*motionBuffer,lensCenter);
        float lens=step(1.,lensRadius)*(1.-smoothstep(lensRadius-.8,lensRadius+.8,distanceFromLens));
        vec3 inkColor=mix(vec3(.94),portraitAccent,accent);
        vec3 insideInk=mix(vec3(.025),portraitAccent*.64,accent);
        gl_FragColor=vec4(mix(mix(art,1.-art,lens),mix(inkColor,insideInk,lens),amount),1.);
      }
    `}),T=new Mi,R=new yi;T.add(new _t(new ir(2,2),_));let P=0,E=0,y=!1,S=!0;function U(){return!y&&S&&!document.hidden&&e().portraitActive}function I(){u.update(tt,c.capabilities.maxTextureSize)&&(h(),d.period.value=u.period,d.portraitAccent.value.set(...al(tt.accent)))}function B(V=!1){if(!V&&!U())return;I(),d.depthMirror.value=th();const{x:F,y:K,radius:he}=r;d.lensCenter.value.set(F,K),d.lensRadius.value=he,c.render(T,R),V||i.classList.add("ready")}function G(V){if(P=0,!U()){E=0;return}const F=E?Math.max(0,Math.min(.05,(V-E)/1e3)):0;E=V,e().motion&&(d.portraitTime.value=(d.portraitTime.value+F)%8,d.phase.value=(1+d.phase.value-F*e().pxSpeed/u.period)%1),B(),e().motion?P=requestAnimationFrame(G):E=0}function X(){U()?P||(P=requestAnimationFrame(G)):(cancelAnimationFrame(P),P=E=0)}function W(){const{width:V,height:F}=i.getBoundingClientRect();if(!V||!F||y)return;const K=Cs(V,F);d.view.value.set(-K.left/K.scale,-K.top/K.scale,V/K.scale,F/K.scale),d.motionBuffer.value.set(V,F),d.compact.value=K.compact,c.setPixelRatio(Math.min(devicePixelRatio,2,3840/V,2160/F)),c.setSize(V,F,!1),t(),X()}if(addEventListener("amethyst-mirror-frame",X),addEventListener("pagehide",()=>{S=!1,X()}),addEventListener("pageshow",()=>{S=!0,X()}),document.addEventListener("visibilitychange",X),addEventListener("resize",W),l.addEventListener("webglcontextlost",V=>{V.preventDefault(),y=!0,i.classList.remove("ready"),i.dispatchEvent(new Event("portrait-unavailable")),X()}),l.addEventListener("webglcontextrestored",()=>{y=!1,d.portraitArt.value.needsUpdate=!0,d.portraitMasks.value.needsUpdate=!0,p.needsUpdate=!0,W(),i.dispatchEvent(new Event("portrait-restored"))}),W(),I(),!U())try{await c.compileAsync(T,R),c.initTexture(s),c.initTexture(o),c.initTexture(p),!y&&!document.hidden&&B(!0)}catch{}return _v(n,hl,d,X),{redraw:X,syncPreferences:X,retry:X,snapshot(V){U()&&i.classList.contains("ready")&&(B(),V(l))}}}function Mv(i,e=2.65){const t=e/2,r=.072,n=t-r,a=[-t,-n-r*.5,-n,n,n+r*.5,t],s=new i(e,e,e,5,5,5),{position:o,normal:c,uv:l}=s.attributes;function u(h){return a[Math.round((h/e+.5)*5)]}const p=h=>Math.max(-n,Math.min(n,h));for(let h=0;h<o.count;++h){const d=u(o.getX(h)),g=u(o.getY(h)),v=u(o.getZ(h)),m=d-p(d),f=g-p(g),w=v-p(v),M=Math.hypot(m,f,w);c.setXYZ(h,m/M,f/M,w/M),o.setXYZ(h,p(d)+r*m/M,p(g)+r*f/M,p(v)+r*w/M),l.setXY(h,u((l.getX(h)-.5)*e)/e+.5,u((l.getY(h)-.5)*e)/e+.5)}return s}function Sv(i){const e=new i(2,2,104,128),t=e.attributes.position,r=(n,a,s)=>Math.sign(n)*(a*Math.abs(n)+(s-a)*Math.abs(n)**3);for(let n=0;n<t.count;n++){const a=t.getX(n),s=-t.getY(n);t.setXYZ(n,r(a,8,95),-(r(s,9,s<0?151:69)+41),0)}return e.computeBoundingSphere(),e}function bv(i){let e;return(t,r=!1)=>{if(e===void 0||r){e=t>=.312;return}!e&&t>=.329?(e=!0,i("submerge")):e&&t<=.295&&(e=!1,i("emerge"))}}const nh=`
uniform vec2 crossing; // elapsed seconds, signed strength
float wakeHeight(vec2 at) {
  if (crossing.x>=2.3 || crossing.y==0.) return 0.;
  float r=length(at), age=crossing.x;
  float front=r-1.25-age*3.45;
  float packet=exp(-front*front*1.35)*exp(-age*1.50);
  return crossing.y*.18*packet*cos(front*5.3)*smoothstep(0.,.09,age)*(1.-smoothstep(1.8,2.3,age));
}`,Ev=`// Local tangent frame holds the fracture still while the crystal turns.
uniform float fractureAge, fractureStrength, reducedScene;
uniform vec3 strikeNormal;
varying vec3 coreRay;

uniform vec4 faultLines[24];
float fractureDistance(vec2 p,float reach) {
  float best=9.;
  for(int i=0;i<24;++i){
    vec4 edge=faultLines[i];
    vec2 d=edge.zw-edge.xy;
    float extent=length(edge.xy);
    float growth=clamp((reach*1.85-extent)/max(length(d),.001),0.,1.);
    if(growth<=0.)continue;
    float u=clamp(dot(p-edge.xy,d)/dot(d,d),0.,growth);
    float width=(i<13?1.:1.9)*(1.+.67*extent);
    best=min(best,length(p-edge.xy-u*d)*width);
  }
  return best;
}

`,wv=`  vec3 beam=normalize(coreRay);
  float axis=length(local-beam*dot(local,beam));
  float opening=smoothstep(.0,.26,fractureAge)*(1.-smoothstep(.47,1.33,fractureAge));
  vec3 lightColor=mix(accentLight(vec3(.78,.28,1.)),vec3(1.),.19);
  float breath=mix(.5,.5+.5*sin(t*1.17),1.-reducedScene);
  float travel=fract(t*.23-.21*local.y+.13*local.x+.08*sin(local.z*3.));
  float front=pow(max(0.,sin(travel*3.141593)),9.)*(1.-reducedScene);
  vec3 second=mix(lightColor,lightColor.brg,.31);
  vec3 flux=mix(lightColor,second,front);
  col+=flux*exp(-2.35*axis*axis)*(.14+.12*breath+.21*charge+.27*opening+.33*front);
  col+=flux*front*(.19*hairline+.16*inclusion+.045*shaft);

  if(opening>.001){
    vec3 diff=local-cubeHit;
    vec3 side=normalize(cross(strikeNormal,abs(strikeNormal.y)>.85?vec3(1.,0.,0.):vec3(0.,1.,0.)));
    vec2 q=vec2(dot(diff,side),dot(diff,cross(strikeNormal,side)));
    float dist=fractureDistance(q,opening);
    float aa=max(.002,.7*length(fwidth(q)));
    float width=.002+.006*opening;
    float seam=1.-smoothstep(width,width+aa,dist);
    float transmission=exp(-abs(dot(diff,strikeNormal))*6.);
    float split=1.-smoothstep(width+.003,width+.015+aa,dist);
    col*=1.-.53*split*opening*transmission;
    col+=(mix(lightColor,vec3(.99,.96,1.),.46)*seam*.61+
           lightColor*exp(-dist*46.)*.23)*opening*fractureStrength*transmission*(1.-.63*reducedScene);
  }
`,ah=`
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
float grain(vec2 p){return noise2(p)*.53+noise2(p*2.11+17.)*.27+noise2(p*4.31-11.)*.13+noise2(p*8.73)*.07;}
`,Us="varying vec3 world,local,norm;varying vec2 tex;",Tv=Us+"void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;gl_Position=projectionMatrix*viewMatrix*w;}",ti=`
uniform vec3 paletteAccent;
uniform float recolor, pearl;
vec3 neutralPearl(vec3 color) { return mix(color,vec3(dot(color,vec3(.2126,.7152,.0722))),pearl); }
vec3 accentLight(vec3 violet) {
  float energy = max(violet.r, max(violet.g, violet.b));
  float character = (min(violet.r,min(violet.g,violet.b)) / max(energy,.001));
  return mix(violet, energy*mix(paletteAccent,vec3(1.),character*.76),recolor);
}
`;function Ds(i,e,t={}){return new St({uniforms:i,vertexShader:Tv,fragmentShader:Us+ah+ti+e,...t})}function Av(i){return Ds(i,`uniform vec3 lightAt;uniform float t;
 void main(){
  vec3 dir=normalize(world-cameraPosition),beacon=normalize(lightAt-cameraPosition);
  float horizon=exp(-abs(dir.y+.015)*7.),halo=pow(max(dot(dir,beacon),0.),56.);
  float mist=grain(dir.xz*4.7+dir.y*2.+vec2(t*.007,0));
  vec3 col=mix(vec3(.016,.014,.027),vec3(.130,.126,.157),horizon);
  col+=accentLight(vec3(.32,.105,.44))*(halo*.91+pow(halo,3.)*.65)*(.58+.48*mist);
  col+=vec3(.029,.021,.041)*mist*(1.-smoothstep(.05,.85,abs(dir.y)));
  col+=(hash(gl_FragCoord.xy)-.5)*.007;
  gl_FragColor=vec4(neutralPearl(col),1.);
 }`,{side:Dt,depthWrite:!1})}const sh=`uniform vec3 lightAt;
 vec3 bankAlbedo(vec3 world,vec3 norm){
  vec3 n=normalize(norm),L=lightAt-world;float distanceL=length(L);
  float face=max(0.,dot(n,normalize(L))),top=max(n.y,0.);
  vec2 stone=world.xz+vec2(world.y*.5,-world.y*.8);
  float strata=grain(stone*1.15),chips=grain(stone*8.3);
  float veins=pow(1.-abs(sin(world.y*7.0+strata*8.0+world.z*.31)),4.);
  vec3 basalt=mix(vec3(.035,.031,.049),vec3(.175,.159,.186),strata*.54+chips*.23);
  vec3 col=basalt*(.30+top*.5)+accentLight(vec3(.72,.21,1.))*face*(24./(7.+distanceL*distanceL))*(.6+strata*1.7);
  float bounce=exp(-distanceL*.11)*exp(-abs(world.y-1.1)*.38)*(.28+.72*face);
  col+=accentLight(vec3(.23,.092,.37))*bounce*(.55+strata);
  col+=vec3(.17,.12,.22)*veins*top*.19;
  return col;
 }
 float bankFog(vec3 point){return 1.-exp(-length(point-cameraPosition)*.015);}
`,Rv=ah+ti+sh;function Cv(i){return Ds(i,sh+`uniform vec4 sandHits[4];uniform float reducedScene;
 void main(){
  vec3 col=bankAlbedo(world,norm);
  float distanceFog=bankFog(world);
  float grit=0.,dent=0.;
  for(int j=0;j<4;j++){
    vec4 hit=sandHits[j];
    float age=max(0.,hit.z);
    float radius=.25+.26*(1.-exp(-age*6.));
    float dist=length((world.xz-hit.xy)*vec2(.82,1.17));
    float envelope=hit.w*(1.-smoothstep(.26,1.4,age));
    float lip=exp(-pow((dist-radius)/.078,2.));
    dent+=envelope*exp(-dist*dist/(radius*radius*.58));
    grit+=envelope*lip*(.32+.68*noise2(world.xz*47.));
  }
  gl_FragColor=vec4(neutralPearl(mix(col*(1.-.27*min(1.,dent)),vec3(.12,.10,.17),distanceFog*.63)+mix(vec3(.14,.12,.13),accentLight(vec3(.20,.13,.24)),.28)*grit),1.);
 }`)}function Lv(i){return Ds(i,`uniform float t,cubePulse,contact,charge;uniform vec3 cubeHit;
 ${Ev}
 void main(){
  if(world.y<0.)discard;
  vec3 ray=normalize(world-cameraPosition);vec3 n=normalize(norm);
  float fres=pow(1.-abs(dot(n,-ray)),3.);
  vec2 uv=tex,uvn=uv*2.-1.;float border=max(abs(uvn.x),abs(uvn.y));
  // Intersect shallow, oblique sheets inside each face to suggest depth and refraction.
  float pane=0.,seams=0.;
  for(int i=1;i<=4;i++){
    float k=float(i);
    vec2 q=uv+vec2(.053,-.046)*k+ray.xy*(.035*k);
    float cut=q.x*(.80+k*.25)+q.y*(.33*k-.61)+.095*grain(q*4.1+k);
    float ph=cut+k*.347;
    float line=abs(fract(ph+.5)-.5);
    float aa=max(.001,fwidth(ph));
    seams+=(1.-smoothstep(.002,.004+aa,line))*.19;
    pane+=smoothstep(-.11-aa,.13+aa,sin(6.283*ph))*.16;
  }
  float up=smoothstep(-1.32,1.32,local.y);
  float key=max(0.,dot(n,normalize(vec3(-.47,.81,.36))));
  float shaft=grain(uv*vec2(3.3,5.6)+ray.xy*.24);
  vec3 col=mix(accentLight(vec3(.14,.022,.28)),accentLight(vec3(.79,.30,.97)),clamp(.08+.25*up+.25*key+.52*pane+.12*shaft,0.,1.));
  // Internal cleavage planes catch the key light at grazing angles.
  vec2 crystalUV=uv+ray.xy*.038;
  float cutA=dot(crystalUV,vec2(2.65,1.04))+.16*grain(crystalUV*4.);
  float cutB=dot(crystalUV,vec2(-1.92,1.28))+.12*grain(crystalUV*3.+9.);
  float cleftA=abs(fract(cutA+.5)-.5),cleftB=abs(fract(cutB+.5)-.5);
  float hairline=1.-smoothstep(.002,.004+fwidth(cutA),cleftA);
  float inclusion=(1.-smoothstep(.003,.011+fwidth(cutB),cleftB))*smoothstep(.56,.75,shaft);
  float glint=smoothstep(.40,.83,grain(crystalUV*3.1+ray.yx*.47));
  col*=.76+.30*shaft+.10*key;
  col+=mix(accentLight(vec3(.56,.22,.75)),vec3(.93,.85,.98),.34)*(hairline*(.055+.27*glint)+.29*inclusion);
  float edgeWidth=max(.002,fwidth(border));
  float rim=smoothstep(.97-edgeWidth,.997+edgeWidth,border);
  vec3 H=normalize(normalize(-ray)+normalize(vec3(-.30,.83,.43)));
  float facet=pow(max(dot(n,H),0.),34.);
  col+=accentLight(vec3(.18,.10,.24))*(seams+shaft*.33);
  col+=mix(accentLight(vec3(.64,.32,.85)),vec3(.95),.46)*(.16*rim+.32*fres+.67*facet);
  float impulse=cubePulse*exp(-distance(local,cubeHit)*2.6)*mix(1.,.37,reducedScene);
  col+=accentLight(vec3(.64,.28,.89))*(.28*impulse+.18*charge*(.25+rim+seams));
  col+=accentLight(vec3(.73,.43,.95))*(impulse*(.12+pane*.7+seams)+contact*.09);
  ${wv}
  gl_FragColor=vec4(neutralPearl(col),1.);
 }`,{vertexShader:Us+`varying vec3 coreRay;
 void main(){
  vec4 w=modelMatrix*vec4(position,1.);
  vec3 eyePoint=(viewMatrix*w).xyz;
  coreRay=vec3(dot(modelViewMatrix[0].xyz,eyePoint),dot(modelViewMatrix[1].xyz,eyePoint),
               dot(modelViewMatrix[2].xyz,eyePoint));
  world=w.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;
  gl_Position=projectionMatrix*vec4(eyePoint,1.);
 }`})}function Pv(i){return Ds(i,nh+`uniform float t;uniform sampler2D mirror;uniform mat4 reflector;uniform vec3 lightAt;
 uniform vec4 waterHits[6];uniform float contact,contactPhase,reducedScene;
 float ridge(vec2 p){return sin(p.x*.7+p.y*4.5+noise2(p*.6)*5.+t*.42)*.50+sin(p.y*10.5+p.x*.8+noise2(p*1.4)*4.-t*.56)*.28+sin(p.y*24.4+p.x*2.+t*.64)*.12;}
 void main(){
  vec2 p=world.xz;float wave=ridge(p),w2=ridge(p*.67+vec2(.38,1.1));float dist=length(cameraPosition-world);
  vec4 reflection=reflector*vec4(world,1.);vec2 st=reflection.xy/reflection.w*.5+.5;
  float rough=smoothstep(2.,36.,dist);
  float ripple=0.;
  for(int j=0;j<6;j++){
    vec4 hit=waterHits[j];
    vec2 from=p-hit.xy;
    float ring=length(from)-hit.z*2.45*(1.-reducedScene);
    float crest=exp(-ring*ring*9.)*cos(ring*18.)*exp(-hit.z*2.4)*hit.w;
    ripple+=crest;
    st+=normalize(from+vec2(.0001))*crest*.019;
  }
  float impact=wakeHeight(p)*4.;
  float waterline=smoothstep(.6,2.4,length(p));
  st+=vec2(w2*.021,wave*.038)*(.66+.45*rough)*mix(waterline,1.,1.-contact);
  st+=normalize(p+vec2(.0001))*impact*.027;
  vec3 reflectionColor=texture2D(mirror,clamp(st,.002,.998)).rgb;
  vec3 V=normalize(cameraPosition-world);float fr=pow(1.-max(0.,V.y),2.);
  float crest=smoothstep(-.23,.54,wave+noise2(p*1.6)*.33);
  float saturation=max(reflectionColor.r,max(reflectionColor.g,reflectionColor.b))-min(reflectionColor.r,min(reflectionColor.g,reflectionColor.b));
  float violet=smoothstep(.09,.38,mix(reflectionColor.b-reflectionColor.g,saturation,recolor));
  reflectionColor*=mix(1.,.17+crest*.96,violet);
  vec3 water=mix(vec3(.019,.018,.027),reflectionColor,.40+.47*fr);
  float glitter=pow(max(0.,wave+.18),7.)*smoothstep(.22,.87,grain(p*2.1));
  vec2 gap=world.xz-lightAt.xz;
  water+=accentLight(vec3(.54,.21,.72))*(exp(-abs(gap.x)*.67)*exp(-abs(gap.y)*.06))*(.043+glitter*.62);
  water+=accentLight(vec3(.32,.25,.38))*pow(max(0.,w2+.26),8.)*.40*fr;
  float dust=pow(max(0.,ridge(p*1.8)+.08),9.)*smoothstep(.43,.76,noise2(vec2(p.x*1.7,p.y*3.1)));
  water+=accentLight(vec3(.35,.24,.42))*dust*fr;
  water+=accentLight(vec3(.96,.54,1.))*(max(0.,impact)*.43+abs(ripple)*.21);
  gl_FragColor=vec4(neutralPearl(water),1.);
 }`,{vertexShader:Us+nh+`void main(){
  vec4 pos=modelMatrix*vec4(position,1.);
  pos.y+=wakeHeight(pos.xz);
  world=pos.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;
  gl_Position=projectionMatrix*viewMatrix*pos;
 }`})}function Uv({cube:i,camera:e,canvas:t,eligible:r,pick:n,impact:a,wake:s,reduced:o,chargeUniform:c,Vector3:l,movement:u,armAudio:p}){const h=i.quaternion.clone().identity(),d=h.clone(),g=h.clone(),v=h.clone(),m=h.clone(),f=new l(0,1,0),w=new l,M=new l,_=new l,T=new l,R=new l;let P=null,E,y=0,S=0,U=0,I=0,B=0,G=!1,X=0,W=1,V=0,F=0;const K=document.createElement("button");K.type="button",K.className="crystal-control",K.setAttribute("aria-label","Spin crystal. Hold and drag, or use arrow keys."),K.hidden=!0,document.body.append(K);function he(L,de,Ie){const ke=(L-V)/W,_e=(F-de)/W,Je=ke*ke+_e*_e;return Ie.set(ke,_e,Je<.5?Math.sqrt(1-Je):.5/Math.sqrt(Je)).normalize().applyQuaternion(e.quaternion)}function Le(L,de={}){t.dispatchEvent(new CustomEvent("amethyst-crystal",{detail:{type:L,...de}}))}function Se(){const L=P;P=null,X=0,G=!1,L!==null&&K.hasPointerCapture(L)&&K.releasePointerCapture(L)}function Ue(){B=0,Se()}function De(L){if(L.button!==0||!L.isPrimary||P!==null||!r())return;const de=n(L);!de||de.object!==i||(p(),T.copy(de.point),i.worldToLocal(T),E=de.face.normal.clone(),P=L.pointerId,y=L.clientX,S=L.clientY,U=I=performance.now(),B=0,X=0,G=!1,he(y,S,w),K.setPointerCapture(P),Le("hold"),s())}function He(L){if(L.pointerId!==P||!G&&Math.hypot(L.clientX-y,L.clientY-S)<5)return;G=!0;const de=performance.now(),Ie=Math.max(.005,Math.min(.08,(de-I)/1e3));he(L.clientX,L.clientY,M),d.setFromUnitVectors(w,M);const ke=2*Math.acos(Math.min(1,Math.max(-1,d.w)));ke>1e-4&&(f.set(d.x,d.y,d.z).normalize(),B=Math.min(.72,.24*ke/Ie),h.premultiply(d.setFromAxisAngle(f,.24*ke)).normalize()),w.copy(M),I=de,s()}function j(L){L.pointerId===P&&(X=Math.min(1,Math.max(0,(performance.now()-U-130)/670)),G?(B=performance.now()-I<110&&!o()?B*(.72+.28*X):0,Le("flick",{speed:B,axis:f.toArray()})):(R.copy(T),i.localToWorld(R),a(R,E,X),Le("tap",{charge:X,local:T.toArray()})),Se(),s())}K.addEventListener("pointerdown",De),K.addEventListener("pointermove",He),K.addEventListener("pointerup",j);for(const L of["pointercancel","lostpointercapture"])K.addEventListener(L,de=>{de.pointerId===P&&(Ue(),s())});K.addEventListener("keydown",L=>{if(!r())return;if(L.key==="Escape"){Ue();return}const de={ArrowLeft:[0,-1,0],ArrowRight:[0,1,0],ArrowUp:[-1,0,0],ArrowDown:[1,0,0]};if(de[L.key]&&(L.preventDefault(),f.set(...de[L.key]).applyQuaternion(e.quaternion),h.premultiply(d.setFromAxisAngle(f,.065)),B=o()?0:.22,s()),(L.key===" "||L.key==="Enter")&&!L.repeat){L.preventDefault();const Ie=n({clientX:V,clientY:F});Ie?.object===i&&a(Ie.point,Ie.face.normal,.65),s()}});function Q(){(P!==null||B)&&(Ue(),s())}addEventListener("blur",Q),addEventListener("pagehide",Q);for(const L of["wheel","scroll"])addEventListener(L,Q,{passive:!0});t.addEventListener("webglcontextlost",()=>{Ue(),K.hidden=!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&Ue()});let ce=performance.now(),be="",me=0;const ue=new l;function je(L,de,Ie=!0){const ke=performance.now();if(!Ie){i.quaternion.premultiply(v);return}const _e=Math.min(.18,Math.max(0,(ke-ce)/1e3));ce=ke;const Je=L&&de<.045&&i.visible;if(K.hidden===Je&&(K.hidden=!Je),m.copy(v),Je&&P!==null?X=Math.min(1,Math.max(0,(ke-U-130)/670)):(!Je&&P!==null&&Ue(),o()?B=0:(B>.002&&(h.premultiply(d.setFromAxisAngle(f,B*_e)),B*=Math.exp(-2.65*_e)),h.slerp(g,-Math.expm1(-.83*_e)),h.angleTo(g)<18e-5&&B<.002&&h.identity())),o()?v.copy(h):v.slerp(h,-Math.expm1(-_e*(P!==null?13:8))),c.value=X,i.quaternion.premultiply(v),Je&&!o()&&_e>1e-4?u.set(m.angleTo(v)/_e):u.stop(),Je&&(ke>=me||!be)){let Ne=function($){const J=[];for(const Re of $){for(;J.length>=2;){const ne=J.at(-2),Ee=J.at(-1);if((Ee[0]-ne[0])*(Re[1]-ne[1])-(Ee[1]-ne[1])*(Re[0]-ne[0])>0)break;J.pop()}J.push(Re)}return J.slice(0,-1)};var ge=Ne;me=ke+30,_.copy(i.position).project(e);const ct=t.clientWidth,nt=t.clientHeight;V=(_.x+1)*ct*.5,F=(1-_.y)*nt*.5,W=nt*1.48/(2*Math.tan(e.fov*Math.PI/360)*e.position.distanceTo(i.position));const A=Math.ceil(W*3.13),x=[Math.round(V-A/2),Math.round(F-A/2),A].join("/");x!==be&&(be=x,K.style.cssText="left:"+Math.round(V-A/2)+"px;top:"+Math.round(F-A/2)+"px;width:"+A+"px;height:"+A+"px"),i.updateMatrixWorld();const k=[];for(const $ of[-1.325,1.325])for(const J of[-1.325,1.325])for(const Re of[-1.325,1.325])ue.set($,J,Re).applyMatrix4(i.matrixWorld).project(e),k.push([(ue.x+1)*ct/2-Math.round(V-A/2),(1-ue.y)*nt/2-Math.round(F-A/2)]);k.sort(($,J)=>$[0]-J[0]||$[1]-J[1]);const Z=[...Ne(k),...Ne(k.reverse())];K.style.clipPath="polygon("+Z.map($=>$.map(J=>Math.round(J)+"px").join(" ")).join(",")+")"}}return je.active=()=>P!==null||v.angleTo(g)>25e-5||B>.002,je.hide=()=>{Ue(),h.identity(),v.identity(),u.stop(),c.value=0,K.hidden=!0},je}function Dv(i,e){const t=[],r=[[-.53,-.28],[-.18,-.48],[.49,-.25],[.39,.19],[.08,.46],[-.46,.29]],n=r.map(([c,l])=>[c,.22+.17*c-.13*l,l]),a=r.map(([c,l])=>[c*.77+.045,-.23+.19*l,l*.79-.05]),s=(c,l,u)=>t.push(...c,...l,...u);for(let c=0;c<r.length;c++){const l=(c+1)%r.length;s([-.1,.38,.03],n[l],n[c]),s([.02,-.27,0],a[c],a[l]),s(a[c],n[c],n[l]),s(a[c],n[l],a[l])}const o=new i;return o.setAttribute("position",new e(t,3)),o.computeVertexNormals(),o}function Iv(i,{context:e,master:t,enabled:r}){let n=0,a=0,s=0;const o=new Set;function c(){n=0,a=0;for(const u of o){const p=u.context.currentTime;u.gain.gain.cancelScheduledValues(p),u.gain.gain.setTargetAtTime(0,p,.007),u.osc.stop(p+.04)}o.clear()}function l(u){const p=e(),h=t();if(!r()||document.hidden||!document.hasFocus()||p?.state!=="running"||!h){(n||o.size)&&c();return}const d=p.currentTime,g=n?Math.min(.08,d-n):0;if(n=d,u<.04){a=0;return}if(a+=u*g,a<.095||o.size>=6)return;a%=.095;const v=[2280,2545,2140,2690][s++%4];for(const[m,f,w]of[[1,.014,.074],[2.58,.0024,.023]]){const M=p.createOscillator(),_=p.createGain(),T={osc:M,gain:_,context:p};M.frequency.value=v*m,_.gain.setValueAtTime(1e-5,d),_.gain.exponentialRampToValueAtTime(f*(.45+.55*Math.min(1,u)),d+.004),_.gain.exponentialRampToValueAtTime(1e-5,d+w*4),M.connect(_),_.connect(h),o.add(T),M.onended=()=>{M.disconnect(),_.disconnect(),o.delete(T)},M.start(d),M.stop(d+w*4+.01)}}for(const u of["pagehide","blur"])addEventListener(u,c);return document.addEventListener("visibilitychange",()=>{document.hidden&&c()}),i.addEventListener("webglcontextlost",c),addEventListener("amethyst-preferences",()=>{r()||c()}),{set:l,stop:c}}function Nv({BoxGeometry:i,ShaderMaterial:e,InstancedMesh:t,InstancedBufferAttribute:r,Object3D:n,Vector3:a},s,o,c,l){const u=(Se=>()=>(Se=Math.imul(Se,1664525)+1013904223>>>0,Se/4294967296))(79),p=Rv+`attribute vec3 bankPoint,bankNormal;
  varying vec3 bankTint;varying float grainFace;
  void main(){
   vec4 p=modelMatrix*instanceMatrix*vec4(position,1.);
   bankTint=neutralPearl(mix(bankAlbedo(bankPoint,bankNormal),vec3(.12,.10,.17),bankFog(bankPoint)*.63));
   vec3 facet=normalize(mat3(instanceMatrix)*normal);
   grainFace=.86+.24*max(0.,dot(facet,normalize(vec3(-.45,.72,.5))));
   gl_Position=projectionMatrix*viewMatrix*p;
  }`,h=`varying vec3 facet,eye;varying float height;
  void main(){
   mat4 m=modelMatrix*instanceMatrix;
   vec4 p=m*vec4(position,1.);
   height=p.y;eye=cameraPosition-p.xyz;
   vec3 c0=m[0].xyz,c1=m[1].xyz,c2=m[2].xyz;
   facet=cross(c1,c2)*normal.x+cross(c2,c0)*normal.y+cross(c0,c1)*normal.z;
   gl_Position=projectionMatrix*viewMatrix*p;
  }`;function d(Se,Ue){const De=Ue?"varying vec3 bankTint;varying float grainFace;void main(){gl_FragColor=vec4(bankTint*grainFace,1.);}":ti+`varying vec3 facet,eye;varying float height;
      void main(){
       if(height<0.)discard;
       vec3 n=normalize(facet),v=normalize(eye),r=reflect(-v,n);
       float fres=pow(1.-abs(dot(n,v)),3.),sky=smoothstep(-.36,.73,r.y);
       float glint=pow(max(0.,dot(r,normalize(vec3(-.57,.68,.45)))),24.);
       float seam=exp(-abs(r.y+.12)*17.);
       vec3 c=mix(paletteAccent*.17,mix(paletteAccent,vec3(.82,.82,.88),.43),sky*.65+fres*.27);
       vec3 glow=mix(paletteAccent,vec3(1.),.38)*(.19+.32*pow(abs(dot(n,v)),3.));
       gl_FragColor=vec4(neutralPearl(c+(.07*seam+.68*glint)*vec3(.94,.95,1.)+glow),1.);
      }`,He=new t(Ue?new i(1,1,1):l,new e({uniforms:c,vertexShader:Ue?p:h,fragmentShader:De}),Se);return He.frustumCulled=!1,He.visible=!1,He}const g=d(9,!1),v=d(96,!0),m=new n,f=new r(new Float32Array(v.count*3),3),w=new r(new Float32Array(v.count*3),3);v.geometry.setAttribute("bankPoint",f),v.geometry.setAttribute("bankNormal",w),o.add(g),s.add(v);const M=Array.from({length:9},(Se,Ue)=>({delay:u()*.09,angle:Ue*2.39996+(u()-.5)*.72,len:.09+.14*u(),width:.09+.15*u(),height:.08+.16*u(),twist:1.35*(u()-.5)})),_=Array.from({length:96},()=>({phi:u()*2*Math.PI,range:.09+.41*u(),rise:.036+.17*u(),size:.009+.016*u(),delay:u()*.09,turn:u()*2})),T=new a,R=new a,P=new a,E=new a,y=new a,S=Array.from({length:3},()=>({p:new a,n:new a,u:new a,v:new a,age:2})),U=new a,I=new a,B=new a,G=new a(0,1,0);let X=2,W=0,V=1;const F=Se=>Se*Se*(3-2*Se);function K(Se,Ue,De){T.copy(Se),R.copy(Ue),P.set(Math.abs(R.y)>.8?1:0,Math.abs(R.y)>.8?0:1,0),E.crossVectors(R,P).normalize(),y.crossVectors(R,E),X=0,V=De}function he(Se,Ue){const De=S[W++%3];De.p.copy(Se),De.n.copy(Ue),De.n.y<0&&De.n.multiplyScalar(-1),De.u.crossVectors(De.n,P.set(Math.abs(De.n.y)>.8?1:0,Math.abs(De.n.y)>.8?0:1,0)).normalize(),De.v.crossVectors(De.n,De.u),De.age=0}function Le(Se,Ue){X=Math.min(2,X+Se);const De=Math.min(1,X/1.33),He=De<.28?F(De/.28):1-F((De-.28)/.72);o.scale.setScalar(1+(Ue?.001:.008)*He),g.visible=!Ue&&De<1&&o.visible,g.visible&&(M.forEach((Q,ce)=>{const be=Math.cos(Q.angle),me=Math.sin(Q.angle),ue=.035+Q.len*.79,je=Math.min(1,Math.max(0,(De-Q.delay)/(1-Q.delay))),L=Math.sin(Math.PI*je)**1.12,de=Math.min(1,je*14,(1-je)*9);U.copy(T).addScaledVector(E,be*ue*.64).addScaledVector(y,me*ue*.64),I.copy(U).clampScalar(-1.253,1.253),B.subVectors(U,I),B.lengthSq()<1e-8&&B.copy(R),B.normalize(),U.copy(I).addScaledVector(B,-.065),m.position.copy(U).addScaledVector(B,L*V*(.23+1.17*Q.len)),m.quaternion.setFromUnitVectors(G,B),m.rotateY(Q.angle+L*Q.twist),m.rotateX(L*Q.twist*.77),m.scale.set(Q.width*.88*de,(.028+Q.height*.43)*de,Q.len*.75*de),m.updateMatrix(),g.setMatrixAt(ce,m.matrix)}),g.instanceMatrix.needsUpdate=!0);let j=0;for(let Q=0;Q<3;Q++){const ce=S[Q];if(ce.age=Math.min(2,ce.age+Se),!(Ue||ce.age>.64))for(let be=Q*32;be<(Q+1)*32;be++){const me=_[be],ue=(ce.age-me.delay)/.55;if(ue<=0||ue>=1)continue;const je=1-(1-ue)*(1-ue),L=Math.cos(me.phi),de=Math.sin(me.phi);m.position.copy(ce.p).addScaledVector(ce.n,.01+4*ue*(1-ue)*me.rise).addScaledVector(ce.u,L*je*me.range).addScaledVector(ce.v,de*je*me.range);const Ie=me.size*Math.min(1,ue*20,(1-ue)*6);m.scale.set(Ie,Ie*.59,Ie*1.19),m.rotation.set(ue*4,me.turn,ue*3),m.updateMatrix(),f.setXYZ(j,ce.p.x,ce.p.y,ce.p.z),w.setXYZ(j,ce.n.x,ce.n.y,ce.n.z),v.setMatrixAt(j++,m.matrix)}}v.count=j,v.visible=j>0,j&&(f.needsUpdate=w.needsUpdate=v.instanceMatrix.needsUpdate=!0)}return{fracture:K,scatter:he,update:Le}}const ri=2.6,hn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Bt=i=>{const e=hn(i);return e*e*(3-2*e)},qn=4.21,Is=qn+7.55,oh=.865;function Fv(i){return Bt((i-.34)/.515)*(1-Bt((i-.886)/.113))}function dl(i,e=!1){const t=qn,r=Is,n=t+(r-t)*oh,a=hn((i-t)/(r-t)),s=Bt((i-1.55)/1.05)*(1-Bt((i-3.35)/.86)),o=i>=ri&&i<=t,c=e?Bt((a-.81)/.18):+(a>=oh);return{depart:3.35,river:t,reveal:n,end:r,pinned:o,route:a,gate:c,galleryAlpha:e?+(s>=.5):s,opening:1-Bt((i-.4)/1.1),portrait:c>0,cloud:e?0:a,cover:e?0:Fv(a),immersion:Bt((i-.36)/1.21),camera:i<ri?.19*Bt(i/ri):.19+.72*Bt(a/.93)}}function lh(i){let e=i;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}function Ns(i,e){const t=(o,c)=>{const l=Math.sin(o*127.1+c*311.7)*43758.545;return l-Math.floor(l)},r=Math.floor(i),n=Math.floor(e);let a=i-r,s=e-n;return a=a*a*(3-2*a),s=s*s*(3-2*s),Za.lerp(Za.lerp(t(r,n),t(r+1,n),a),Za.lerp(t(r,n+1),t(r+1,n+1),a),s)}function Yn(i){return 1.65*Math.sin(i*.105)+.62*Math.sin(i*.27)}function Ov(i,e){return Yn(e)+i*(5.1+1.05*Math.sin(e*.24+i)+.65*Math.sin(e*.56-i))}function Bv(i){const e=[],t=[];for(let n=0;n<=176;n++){const a=27-n*133/176,s=Ov(i,a);for(let o=0;o<=66;o++){const c=27*o/66,l=s+i*c,u=.51*Ns(l*.32,a*.32)+.28*Ns(l*.76,a*.76)+.14*Ns(l*1.4,a*1.4)+.07*Ns(l*3.4,a*3.4),p=.48+.19*Math.sin(a*.22+i*1.7)+.22*Math.cos(a*.086-i)+.5*u,h=-.21+Math.pow(c,.85)*p*.62+(u-.48)*Math.min(2.8,c*.98);if(e.push(l,h,a),o<66&&n<176){const d=n*67+o;t.push(d,d+1,d+66+1,d+1,d+66+2,d+66+1)}}}i<0&&t.reverse();const r=new kt;return r.setAttribute("position",new Tt(e,3)),r.setIndex(t),r.computeVertexNormals(),r}function zv(){const i=lh(712),e=[],t=[];for(let n=0;n<1420;n++){const a=23-i()*121,s=Yn(a)+(i()-.5)*18;e.push(s,.03+Math.pow(i(),4)*3.1,a),t.push(.32+i()*.84)}const r=new kt;return r.setAttribute("position",new Tt(e,3)),r.setAttribute("size",new Tt(t,1)),r}function kv(i,e,t,r,n){const a=new on({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"}),s=new Mi,o=new Wt(43,1,.08,215),c=new Wt,l=new ur(420,250,{depthBuffer:!0,generateMipmaps:!1}),u=H=>Array.from({length:H},()=>new at(0,0,9,0)),p=u(6),h=u(4),d={paletteAccent:{value:new N},recolor:{value:0},pearl:{value:0},t:{value:0},lightAt:{value:new N(0,2.8,0)},mirror:{value:l.texture},reflector:{value:new ht},charge:{value:0},cubePulse:{value:0},cubeHit:{value:new N},strikeNormal:{value:new N(0,0,1)},faultLines:{value:Array.from({length:24},()=>new at)},fractureAge:{value:10},fractureStrength:{value:1},waterHits:{value:p},sandHits:{value:h},contact:{value:0},contactPhase:{value:0},crossing:{value:new Ce(10,0)},reducedScene:{value:0}},g=new _t(new Hs(154,26,14),Av(d));g.renderOrder=-3,s.add(g);const v=Cv(d),m=[-1,1].map(H=>new _t(Bv(H),v));s.add(...m);const f=new _t(Mv(si),Lv(d));s.add(f);const w=Nv(nv,s,f,d,Dv(kt,Tt)),M=new _t(Sv(ir),Pv(d));M.rotation.x=-Math.PI/2,M.position.z=-41,s.add(M);const _=new _t(new ir(138,26),new St({uniforms:d,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 st;void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:ti+`varying vec2 st;uniform float t;
  float hash(vec2 p){return fract(sin(dot(p,vec2(131.9,61.5)))*43758.541);}
  float value(vec2 p){vec2 f=fract(p),i=floor(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
  void main(){
   vec2 p=st*vec2(13.,6.)+vec2(t*.011,0.);
   float n=value(p)*.63+value(p*2.12+13.)*.27+value(p*4.21)*.10;
   float rim=.37+.18*n;
   float alpha=(1.-smoothstep(rim-.12,rim+.065,st.y))*smoothstep(0.,.18,st.y);
   alpha*=smoothstep(0.,.11,st.x)*(1.-smoothstep(.89,1.,st.x));
   vec3 color=mix(vec3(.12,.112,.15),accentLight(vec3(.51,.38,.61)),smoothstep(.21,.85,n));
   gl_FragColor=vec4(neutralPearl(color),alpha*.92);
  }`}));_.position.set(0,5,-91),s.add(_);const T=new Wc(zv(),new St({uniforms:d,transparent:!0,depthWrite:!1,blending:yn,vertexShader:"attribute float size;uniform float t;varying float a;void main(){vec3 p=position;p.y+=.095*sin(t*.53+p.z*3.+p.x);vec4 q=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*q;gl_PointSize=clamp(size*29./-q.z,.65,3.);a=.22+.5*(.5+.5*sin(p.z*3.+p.x*.8+t*.68));}",fragmentShader:ti+"varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(accentLight(vec3(.78,.46,.96)),(1.-smoothstep(.13,1.,d))*a);}"}));s.add(T);for(let H=0;H<7;H++){const le=[];for(let oe=0;oe<430;oe++){const Me=28-oe*.32;le.push(new N(Yn(Me)+(H-3)*.095+Math.sin(Me*.38+H*.1)*.43,.07+H*.012,Me))}const D=new St({uniforms:{...d,offset:{value:H*.091}},transparent:!0,depthWrite:!1,vertexShader:"varying float along;void main(){along=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:ti+"uniform float t,offset;varying float along;void main(){float wave=.5+.5*cos(6.283*(along*3.-t*.32+offset));float crest=pow(wave,10.);gl_FragColor=vec4(accentLight(mix(vec3(.38,.14,.54),vec3(.93,.64,1.),crest)),.28+.64*crest);}"}),ee=new _t(new Gs(new bs(le),260,H===3?.031:.012,4,!1),D);s.add(ee)}const R=316,P=new si(.104,.104,.104),E=new Float32Array(R*4),y=new Float32Array(R*2),S=lh(943);for(let H=0;H<R;H++){const le=23-S()*116;y.set([Yn(le)+(S()-.5)*7.1,le],H*2),E.set([S(),S(),S(),S()],H*4)}P.setAttribute("seed",new fr(E,4)),P.setAttribute("origin",new fr(y,2));const U=`
  uniform float t;
  attribute vec4 seed;
  attribute vec2 origin;
  float lifeAt(float age){return smoothstep(.04,.27,age)*(1.-smoothstep(.66,.98,age));}
  float particleAge(){return fract(seed.w+t*(.062+.064*seed.y));}
  vec3 particleCenter(float age,float life){
   return vec3(origin.x+.14*sin(t*.45+seed.x*15.),-.10+life*(.27+.47*seed.x),origin.y-age*(.45+seed.y));
  }`,I=new St({uniforms:d,transparent:!0,depthWrite:!1,vertexShader:U+`varying float light,opacity;
  void main(){
   float age=particleAge(),life=lifeAt(age);
   vec3 cell=position*life*(.28+.82*seed.x);
   float turn=seed.z*8.+t*.28;
   cell.xz=mat2(cos(turn),sin(turn),-sin(turn),cos(turn))*cell.xz;
   cell+=particleCenter(age,life);
   vec4 point=modelViewMatrix*vec4(cell,1.);
   gl_Position=projectionMatrix*point;
   vec3 n=normal;
   n.xz=mat2(cos(turn),sin(turn),-sin(turn),cos(turn))*n.xz;
   light=.21+.49*max(0.,dot(n,normalize(vec3(-.41,.75,.52))))+.39*pow(max(0.,dot(n,normalize(vec3(-.25,.45,.86)))),12.);
   opacity=life*(1.-smoothstep(40.,90.,-point.z))*.94;
  }`,fragmentShader:ti+"varying float light,opacity;void main(){gl_FragColor=vec4(mix(accentLight(vec3(.39,.22,.56)),vec3(.95),smoothstep(.64,1.,light))*(.46+.54*light),opacity*.85);}"}),B=new Do(P,I,R);B.frustumCulled=!1,s.add(B);const G=new ir(1,1);G.setAttribute("seed",P.getAttribute("seed")),G.setAttribute("origin",P.getAttribute("origin"));const X=new St({uniforms:d,transparent:!0,depthTest:!0,depthWrite:!1,blending:yn,vertexShader:U+`varying vec2 disc;varying float strength;
  void main(){
   float age=particleAge(),life=lifeAt(age);
   vec3 center=particleCenter(age,life);
   vec4 point=modelViewMatrix*vec4(center,1.);
   point.xy+=position.xy*.29*life*(.28+.82*seed.x);
   disc=uv*2.-1.;
   strength=life*smoothstep(-.01,.12,center.y)*(1.-smoothstep(35.,84.,-point.z));
   gl_Position=projectionMatrix*point;
  }`,fragmentShader:ti+`varying vec2 disc;varying float strength;
  void main(){
   float falloff=max(0.,exp(-3.8*dot(disc,disc))-.023);
   gl_FragColor=vec4(accentLight(vec3(.55,.39,.66)),falloff*.16*strength);
  }`}),W=new Do(G,X,R);W.frustumCulled=!1,s.add(W);const V=new bs([[0,1.33,15.8],[.035,1.41,11],[.075,1.55,3],[.095,1.81,-12],[.045,2.1,-28],[-.025,2.52,-47],[-.025,3.1,-67],[0,3.78,-83]].map(H=>new N(...H)));V.arcLengthDivisions=420;const F=new N,K=new N,he=new Ce,Le=new Ce,Se=new Ce,Ue=new ou,De=[f,M,...m];let He=0,j=0,Q=0,ce=!1,be=!1,me,ue=10,je=0,L=0,de,Ie=-1/0;const ke=new N,_e=new N,Je=new N(0,0,1);let ge=0,Ne=0;function ct(H,le,D,ee){Rh(d.faultLines.value,Math.random()*4294967296>>>0),d.cubeHit.value.copy(H),d.strikeNormal.value.copy(le).normalize(),d.fractureStrength.value=D,w.fracture(H,d.strikeNormal.value,ee),ue=ge=0}function nt(H,le,D=0){f.worldToLocal(ke.copy(H)),ct(ke,le,1,.7+.75*D),r("cube",H),ve()}const A=Uv({cube:f,camera:o,canvas:i,eligible:()=>e().interactive,pick:Ve,impact:nt,wake:ve,reduced:()=>e().reduced,chargeUniform:d.charge,Vector3:N,movement:Iv(i,dv),armAudio:Wn});function x(H,le){if(!le.interactive||le.immersion>.025||le.reduced||le.paused||document.hidden||A.active()){ge=0;return}ge+=H,!(ge<7.8||ue<1.33)&&(_e.set(.43*Math.sin(1.7+Ne*2.4),.31*Math.cos(.9+Ne*2.7),1.325),Ne++,ct(_e,Je,.42,.4525))}let k=-1/0,Z=!0;const $=bv(H=>{k=performance.now(),d.crossing.value.set(0,H==="submerge"?1:-.66),r(H,f.position)});function J(){k=-1/0,Z=!0,d.crossing.value.set(10,0)}i.addEventListener("amethyst-reset-water",()=>{ge=0,J()});function Re(H){if(H!==me){me=H,d.paletteAccent.value.set(...al(H.accent)),d.recolor.value=+(H.id!=="amethyst"),d.pearl.value=+(H.id==="pearl"),ue=10,ge=0;for(const le of[...p,...h])le.set(0,0,9,0);Ie=-1/0}}function ne(H=e(),le=performance.now(),D=!1){if(ce||!D&&H.covered)return;Re(H.palette),V.getPointAt(H.progress,o.position),o.position.x+=he.x*.045,F.set(o.position.x*.7+he.x*.065,o.position.y+.54-.52*Bt(H.route)+he.y*.023,o.position.z-16.8),o.lookAt(F),o.updateMatrixWorld(),n(o.position);const ee=H.immersion;f.position.set(0,2.63+.06*Math.sin(He*.68)*(1-ee)-4.18*ee,0),f.rotation.set(0,-.34-.13*Math.sin(He*.3),.045*(1-ee)*Math.sin(He*.77)),f.visible=ee<.99,A(H.interactive,ee,!D),D||((H.reduced||document.hidden||H.paused)&&J(),$(ee,Z||!be||H.progress>.24),Z=!1),d.crossing.value.x=Math.max(0,Math.min(10,(le-k)/1e3)),d.contactPhase.value=Bt((ee-.23)/.73),d.contact.value=Math.sin(Math.PI*d.contactPhase.value),d.fractureAge.value=ue,d.cubePulse.value=d.fractureStrength.value*Math.exp(-ue*3.8)*(.7+.3*Math.cos(ue*22)),d.reducedScene.value=Number(H.reduced),d.t.value=He,d.lightAt.value.set(Yn(F.z)*Bt(H.route),Math.max(.27,f.position.y),-64*Bt(H.route)),g.position.copy(o.position),(D||!H.pinned||le-Ie>13)&&(Ie=le,c.copy(o),c.position.y*=-1,K.copy(F),K.y*=-1,c.up.set(0,-1,0),c.lookAt(K),c.updateMatrixWorld(),d.reflector.value.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),M.visible=!1,T.visible=!1,B.visible=W.visible=!1,a.setRenderTarget(l),a.render(s,c),M.visible=!0,T.visible=!0,B.visible=W.visible=!0),a.setRenderTarget(null),a.render(s,o),be||(be=!0,t())}function Ee(H){Q=0;const le=e();if(le.covered){A.hide(),j=ge=0;return}const D=j?Math.max(0,Math.min(.05,(H-j)/1e3)):0;j=H,le.animate&&!le.paused&&(He+=D),ue=Math.min(10,ue+D);for(const ee of[p,h])for(const oe of ee)oe.z=Math.min(9,oe.z+D);x(D,le),w.update(D,le.reduced),le.reduced?he.copy(Le):he.lerp(le.pinned?Le:le.pointer,-Math.expm1(-D*3.3)),ne(le,H),!document.hidden&&!ce&&!le.paused&&(le.animate||A.active()||H-k<2300||ue<1.4||p.some(ee=>ee.z<1.6)||h.some(ee=>ee.z<1.4))?Q=requestAnimationFrame(Ee):j=0}function ve(){if(e().covered){A.hide();return}!Q&&!ce&&!document.hidden&&(Q=requestAnimationFrame(Ee))}function ae(){const H=i.clientWidth,le=i.clientHeight;if(!H||!le||ce)return;o.aspect=H/le,o.fov=H/le<.8?60:43,o.updateProjectionMatrix(),a.setPixelRatio(Math.min(devicePixelRatio,1.65,2560/H,Math.sqrt(44e5/(H*le)))),a.setSize(H,le,!1);const D=Math.min(864,Math.round(H*.5),Math.round(Math.sqrt(42e4*H/le)));l.setSize(D,Math.max(1,Math.round(D*le/H))),Ie=-1/0,ve()}function pe(H){return be&&!ce&&e().interactive&&H.target instanceof Element&&!H.target.closest("a,button,input,select,textarea,.controls,.gallery,#banner,#palette-switch")}function Ve(H){const le=i.getBoundingClientRect();return Se.set(2*(H.clientX-le.x)/le.width-1,1-2*(H.clientY-le.y)/le.height),Ue.setFromCamera(Se,o),Ue.intersectObjects(De,!1).find(({object:D,point:ee})=>D!==f||f.visible&&ee.y>=0)}function we(H){const le=Ve(H);if(!le)return;const{object:D,point:ee}=le,oe=D===f?"cube":D===M?"water":"sand";if(oe==="cube")return nt(ee,le.face.normal);oe==="sand"&&w.scatter(ee,le.normal??le.face.normal),(oe==="water"?p[je++%p.length]:h[L++%h.length]).set(ee.x,ee.z,0,1),r(oe,ee),ve()}return document.addEventListener("pointerdown",H=>{de=H.isPrimary&&H.button===0&&pe(H)?[H.pointerId,H.clientX,H.clientY]:null},{passive:!0}),document.addEventListener("pointermove",H=>{de&&Math.hypot(H.clientX-de[1],H.clientY-de[2])>7&&(de=null)},{passive:!0}),document.addEventListener("pointercancel",()=>{de=null},{passive:!0}),document.addEventListener("pointerup",H=>{de&&H.pointerId===de[0]&&pe(H)&&Math.hypot(H.clientX-de[1],H.clientY-de[2])<7&&we(H),de=null},{passive:!0}),addEventListener("scroll",()=>{de=null},{passive:!0}),new ResizeObserver(ae).observe(i),i.addEventListener("webglcontextlost",H=>{H.preventDefault(),ce=!0,i.classList.remove("lit"),cancelAnimationFrame(Q),Q=0,j=0}),i.addEventListener("webglcontextrestored",()=>{ce=!1,be=!1,J(),ae()}),document.addEventListener("visibilitychange",()=>{j=0,J(),ve()}),window.addEventListener("amethyst-world-snapshot",H=>{!ce&&be&&(ne(e(),performance.now(),!0),H.detail?.())}),ae(),ve}var wr=512,ch=5,Hv=240,Gv=class{samples=new Float32Array(wr*5);times=new Float64Array(wr);read=0;count=0;previous=new Float32Array(5);initialized=!1;lastX=NaN;lastY=NaN;evidence={admitted:0,coalesced:0,dropped:0,discontinuities:0,queued:0,segments:0,capacity:wr};clear(){this.read=this.count=0,this.initialized=!1,this.lastX=this.lastY=NaN,this.evidence.queued=0}admit(i,e,t,r){if(!Number.isFinite(i+e+t)||i===this.lastX&&e===this.lastY)return;this.lastX=i,this.lastY=e,this.count===wr&&(this.read=(this.read+1)%wr,this.count--,this.initialized=!1,this.evidence.dropped++);const n=(this.read+this.count)%wr,a=n*5;this.samples[a]=i,this.samples[a+1]=e,this.samples[a+2]=r[0],this.samples[a+3]=r[1],this.samples[a+4]=r[2],this.times[n]=t,this.count++,this.evidence.admitted++,this.evidence.queued=this.count}consume(i,e,t,r){let n=0;const a=t.length;for(;this.count&&n<a;){const s=this.read*5,o=this.samples[s],c=this.samples[s+1],l=o-this.previous[0],u=c-this.previous[1],p=Math.hypot(l,u);if(r-this.times[this.read]>250){this.initialized=!1,this.evidence.discontinuities++,this.read=(this.read+1)%wr,this.count--;continue}if(!this.initialized||p>Hv){this.initialized&&this.evidence.discontinuities++;for(let v=0;v<5;v++)this.previous[v]=this.samples[s+v];this.initialized=!0,this.read=(this.read+1)%wr,this.count--;continue}if(p<.001){this.read=(this.read+1)%wr,this.count--;continue}const h=Math.min(1,ch/p),d=this.previous[0]+l*h,g=this.previous[1]+u*h;i[n*4]=this.previous[0],i[n*4+1]=this.previous[1],i[n*4+2]=d,i[n*4+3]=g;for(let v=0;v<3;v++){const m=this.previous[v+2],f=this.samples[s+v+2];e[n*3+v]=m+(f-m)*h*.5,this.previous[v+2]=m+(f-m)*h}t[n]=Math.min(ch,p),this.previous[0]=d,this.previous[1]=g,h===1&&(this.read=(this.read+1)%wr,this.count--),n++}return this.evidence.segments+=n,this.evidence.queued=this.count,n}};function Vv([i,e,t]){const r=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),n=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),a=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*r+.793617785*n-.0040720468*a,1.9779984951*r-2.428592205*n+.4505937099*a,.0259040371*r+.7827717662*n-.808675766*a]}function pl(i,e,t,r){const n=(i+.3963377774*e+.2158037573*t)**3,a=(i-.1055613458*e-.0638541728*t)**3,s=(i-.0894841775*e-1.291485548*t)**3;return r[0]=4.0767416621*n-3.3077115913*a+.2309699292*s,r[1]=-1.2684380046*n+2.6097574011*a-.3413193965*s,r[2]=-.0041960863*n-.7034186147*a+1.707614701*s,r}var uh=i=>i[0]>=0&&i[0]<=1&&i[1]>=0&&i[1]<=1&&i[2]>=0&&i[2]<=1;function hh(i,e,t,r){const n=r??{lightness:i,chroma:e,hue:t,rgb:[0,0,0]};let a=0,s=e;const o=pl(i,e*Math.cos(t),e*Math.sin(t),n.rgb);if(!uh(o)){for(let c=0;c<18;c++){const l=(a+s)/2;uh(pl(i,l*Math.cos(t),l*Math.sin(t),o))?a=l:s=l}e=a,pl(i,e*Math.cos(t),e*Math.sin(t),o)}return n.lightness=i,n.chroma=e,n.hue=t,n}function dh(i,e=!1){if(!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Invalid project accent");const t=[1,3,5].map(c=>parseInt(i.slice(c,c+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);if(e){const c=t[0];return{lightness:Math.cbrt(c),chroma:0,hue:0,rgb:[c,c,c]}}const[r,n,a]=Vv(t),s=Math.hypot(n,a),o=Math.atan2(a,n);return hh(Math.max(.72,Math.min(.88,r)),Math.max(.14,s),o)}function Wv(i,e,t,r){const n=Math.max(0,Math.min(1,t)),a=Math.atan2(Math.sin(e.hue-i.hue),Math.cos(e.hue-i.hue));return hh(i.lightness+(e.lightness-i.lightness)*n,i.chroma+(e.chroma-i.chroma)*n,i.hue+a*n,r)}var Xv=class{current={lightness:0,chroma:0,hue:0,rgb:[0,0,0]};initialized=!1;reset(){this.initialized=!1}step(i,e){if(this.initialized)(i.chroma!==0||this.current.chroma!==0)&&Wv(this.current,i,-Math.expm1(-Math.max(0,Math.min(.05,e))/.28),this.current);else{this.current.lightness=i.lightness,this.current.chroma=i.chroma,this.current.hue=i.hue;for(let t=0;t<3;t++)this.current.rgb[t]=i.rgb[t];this.initialized=!0}return this.current}},ph="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Fs=32,qv=1.15,fl=.4;function fh(i){const e=Math.max(0,Math.min(1,(i-.08)/.16));return e*e*(3-2*e)}var Yv=`
vec4 worldsTrailOutput(vec2 uv){
 vec4 field=texture2D(uTrail,uv);float density=field.a;
 vec2 p=vec2(uv.x*uHeadCss.x,(1.-uv.y)*uHeadCss.y),a=vec2(uHeadPrevious.x*uHeadCss.x,(1.-uHeadPrevious.y)*uHeadCss.y),b=vec2(uHeadPointer.x*uHeadCss.x,(1.-uHeadPointer.y)*uHeadCss.y),ab=b-a;
 float t=clamp(dot(p-a,ab)/max(.01,dot(ab,ab)),0.,1.),distance=length(p-a-ab*t);
 float radius=16.*uHeadSize,head=exp(-distance*distance/(radius*radius))*uHeadEmit;
 float added=max(0.,head*1.35-density);density+=added;vec3 mass=field.rgb+uHeadColor*added;
 vec3 pigment=density>.0001?mass/density:vec3(0.);
 float alpha=1.-exp(-density*mix(2.1,2.8,uSelectionLight));
 return vec4(pigment,alpha);
}`,jv=class{scene=new Mi;material;path=new Gv;color=new N;evidence={presentation:"worlds",bodyRadius:14,headRadius:16,outerEnvelope:56,feedbackTargets:2,inputCapacity:512,segmentCapacity:Fs,passes:0,coalescedAvailable:!1,selectedId:"",pigment:[0,0,0],pointerKnown:!1,idleStrength:0,idleDensityInput:0,idleSeconds:0,quiet:!1,headStrength:0};segments=new Float32Array(Fs*4);pigments=new Float32Array(Fs*3);weights=new Float32Array(Fs);pigment=new Xv;initialized=!1;x=0;y=0;oldX=0;oldY=0;quiet=!1;lastMove=-1/0;constructor(i){this.material=new St({depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:ph,uniforms:{uHistory:{value:null},uCss:{value:new Ce(1,1)},uGrid:{value:new Ce(1,1)},uTime:{value:0},uDt:{value:0},uSize:{value:1},uCount:{value:0},uSegments:{value:this.segments},uPigments:{value:this.pigments},uWeights:{value:this.weights},uStrength:{value:1},uIdle:{value:new at},uIdleColor:{value:this.color}},fragmentShader:`varying vec2 vUv;uniform sampler2D uHistory;uniform vec2 uCss,uGrid;uniform float uTime,uDt,uSize,uStrength;uniform int uCount;uniform vec4 uSegments[32],uIdle;uniform vec3 uPigments[32],uIdleColor;uniform float uWeights[32];
      vec2 flow(vec2 p){
       // Curl of two independently authored smooth stream functions. Coarse
       // advection dominates; the smaller field folds edges without sine bands.
       float a=p.x*.014+uTime*.22,b=p.y*.018-uTime*.17,c=p.x*.048-uTime*.16,d=p.y*.043+uTime*.19;
       return vec2(sin(a)*cos(b)*43.2,-cos(a)*sin(b)*33.6)+vec2(cos(c)*cos(d)*16.3,sin(c)*sin(d)*18.2)+vec2(1.,-7.);
      }
      void main(){vec2 css=vec2(vUv.x*uCss.x,(1.-vUv.y)*uCss.y),drift=flow(css),advect=vec2(drift.x,-drift.y)*uDt/uCss;
       vec2 uv=vUv-advect,blur=vec2(.85*sqrt(max(.001,uDt)*60.))/uGrid;
       vec4 old=(texture2D(uHistory,uv)*.52+(texture2D(uHistory,uv+vec2(blur.x,0.))+texture2D(uHistory,uv-vec2(blur.x,0.))+texture2D(uHistory,uv+vec2(0.,blur.y))+texture2D(uHistory,uv-vec2(0.,blur.y)))*.12)*exp(-uDt/${fl});
       vec3 mass=old.rgb;float density=old.a;float radius=14.*uSize;
       for(int i=0;i<32;i++){if(i>=uCount)break;vec4 seg=uSegments[i];float envelope=28.*uSize;
        if(any(lessThan(css,min(seg.xy,seg.zw)-envelope))||any(greaterThan(css,max(seg.xy,seg.zw)+envelope)))continue;
        vec2 ab=seg.zw-seg.xy;float t=clamp(dot(css-seg.xy,ab)/max(.01,dot(ab,ab)),0.,1.),distance=length(css-seg.xy-ab*t);
        float body=exp(-distance*distance/(radius*radius)),wisp=exp(-distance*distance/(radius*radius*2.8))*.085;
        float deposit=(body+wisp)*uWeights[i]/(radius*1.77245)*1.3*uStrength;
        mass+=uPigments[i]*deposit;density+=deposit;
       }
       // A time-integrated source feeds the same advection/decay as real paths.
       // No duplicate pointer samples or second draw/target are involved.
       vec2 offset=css-uIdle.xy;
       float idle=exp(-dot(offset,offset)/max(.01,uIdle.w*uIdle.w))*uIdle.z;
       mass+=uIdleColor*idle;density+=idle;
       if(density>2.8){mass*=2.8/density;density=2.8;}
       float edge=smoothstep(0.,.008,min(min(vUv.x,1.-vUv.x),min(vUv.y,1.-vUv.y)));
       gl_FragColor=vec4(mass,density)*edge;
      }`}),this.scene.add(new _t(i,this.material))}setPigment(i,e,t){const r=this.pigment.step(e,t);this.evidence.selectedId=i,this.color.fromArray(r.rgb);for(let n=0;n<3;n++)this.evidence.pigment[n]=r.rgb[n]}seedPointer(i,e,t){this.initialized||!Number.isFinite(i+e+t)||(this.x=this.oldX=i,this.y=this.oldY=e,this.lastMove=t,this.initialized=this.evidence.pointerKnown=!0)}setQuiet(i){this.quiet=this.evidence.quiet=i}admit(i){if(!this.pigment.initialized)return;const e=performance.now();e-this.lastMove>250&&(this.initialized=!1,this.path.clear()),this.lastMove=e;const t=i.getCoalescedEvents?.()??[];if(this.evidence.coalescedAvailable=typeof i.getCoalescedEvents=="function",t.length&&(this.path.evidence.coalesced+=t.length),t.length)for(const r of t)this.admitSample(r);else this.admitSample(i);this.initialized?(this.oldX=this.x,this.oldY=this.y):(this.oldX=i.clientX,this.oldY=i.clientY),this.x=i.clientX,this.y=i.clientY,this.initialized=this.evidence.pointerKnown=!0,this.quiet=i.target instanceof Element&&!!i.target.closest("a:not(.menu-media-action),button,input,textarea,select,dialog,.portfolio-nav-shell,[contenteditable=true]")}admitSample(i){const e=i.timeStamp>1e12?i.timeStamp-performance.timeOrigin:i.timeStamp;this.path.admit(i.clientX,i.clientY,e,this.pigment.current.rgb)}clear(){this.path.clear(),this.initialized=!1,this.pigment.reset(),this.evidence.pointerKnown=!1,this.evidence.idleStrength=this.evidence.idleDensityInput=this.evidence.headStrength=0,this.lastMove=-1/0}update(i,e,t,r,n,a,s,o){const c=this.material.uniforms;c.uHistory.value=i,c.uCss.value.set(e,t),c.uGrid.value.set(r,n),c.uDt.value=a,c.uTime.value=s,c.uSize.value=o/100,c.uStrength.value=this.quiet?.12:1;const l=this.initialized?fh((performance.now()-this.lastMove)/1e3):0,u=qv*fl*-Math.expm1(-a/fl)*l*c.uStrength.value;c.uIdle.value.set(this.x,this.y,u,11*o/100),this.evidence.idleStrength=l*c.uStrength.value,this.evidence.idleDensityInput=u,this.evidence.idleSeconds+=a*l,c.uCount.value=this.path.consume(this.segments,this.pigments,this.weights,performance.now()),this.evidence.bodyRadius=14*o/100,this.evidence.headRadius=16*o/100,this.evidence.passes++}head(i,e,t,r,n){i.uHeadPointer.value.set(this.x/e,1-this.y/t);const a=Math.hypot(this.x-this.oldX,this.y-this.oldY)>240,s=fh(n),o=a?this.x:this.oldX+(this.x-this.oldX)*s,c=a?this.y:this.oldY+(this.y-this.oldY)*s;i.uHeadPrevious.value.set(o/e,1-c/t),i.uHeadCss.value.set(e,t),i.uHeadColor.value.copy(this.color),i.uHeadSize.value=r/100,i.uHeadEmit.value=this.initialized?this.quiet?.12:1:0,this.evidence.headStrength=i.uHeadEmit.value}prepare(i,e){return i.compileAsync(this.scene,e)}dispose(){this.material.dispose()}};function Zv({isReduced:i=()=>!1,getAccent:e=()=>"#d559ff",isNeutral:t=()=>!1}={}){const r=matchMedia("(pointer: fine) and (hover: hover)"),n=matchMedia("(prefers-reduced-motion: reduce)");let a=e(),s=dh(a,t());const o=document.createElement("canvas");o.dataset.portfolioCursor="",o.setAttribute("aria-hidden","true"),o.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:8;display:none";let c,l,u,p,h,d,g,v=!1,m=!1,f=!0,w=0,M=0,_=0,T=0,R=0;const P=new yi,E=new AbortController,y=(W,V,F)=>W.addEventListener(V,F,{signal:E.signal,passive:!0});function S(){return!v&&!m&&!n.matches&&!i()&&r.matches&&!document.hidden}function U(){if(c)return!0;const W=o.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});if(!W||!W.getExtension("EXT_color_buffer_float"))return v=!0,W?.getExtension("WEBGL_lose_context")?.loseContext(),!1;c=new on({canvas:o,context:W,alpha:!0,premultipliedAlpha:!1}),c.setClearColor(0,0),l=new ir(2,2),u=new jv(l);const V={type:di,depthBuffer:!1,stencilBuffer:!1,minFilter:Pt,magFilter:Pt};d=new ur(1,1,V),g=new ur(1,1,V);const F=()=>({value:new Ce});return p=new St({vertexShader:ph,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uTrail:{value:d.texture},uSelectionLight:{value:0},uHeadCss:F(),uHeadPrevious:F(),uHeadPointer:F(),uHeadColor:{value:new N},uHeadSize:{value:1},uHeadEmit:{value:0}},fragmentShader:`varying vec2 vUv;
        uniform sampler2D uTrail; uniform vec2 uHeadCss,uHeadPrevious,uHeadPointer;
        uniform vec3 uHeadColor; uniform float uHeadSize,uHeadEmit,uSelectionLight;
        ${Yv}
        void main() {
          gl_FragColor=worldsTrailOutput(vUv);
          #include <colorspace_fragment>
        }`}),h=new Mi,h.add(new _t(l,p)),document.body.append(o),!0}function I(){T=window.innerWidth,R=window.innerHeight;const W=Math.min(.6,1100/Math.max(T,R),960/T),V=Math.max(1,Math.round(T*W)),F=Math.max(1,Math.round(V*R/T));c.setSize(T,R,!1),d.setSize(V,F),g.setSize(V,F),f=!0}function B(){cancelAnimationFrame(w),w=0,M=_=0,o.style.display="none",u?.clear(),f=!0}function G(W){if(w=0,!S()){B();return}const V=M?Math.min(.05,Math.max(0,(W-M)/1e3)):0;if((T!==window.innerWidth||R!==window.innerHeight)&&I(),o.style.display="block",f){for(const K of[d,g])c.setRenderTarget(K),c.clear();f=!1}const F=V>0?Math.max(1,Math.min(3,Math.floor((V+.001)*60))):0;for(let K=0;K<F;K++)u.update(d.texture,T,R,d.width,d.height,V/F,W/1e3,100),c.setRenderTarget(g),c.render(u.scene,P),[d,g]=[g,d];u.head(p.uniforms,T,R,100,(W-_)/1e3),p.uniforms.uTrail.value=d.texture,c.setRenderTarget(null),c.render(h,P),M=W,W-_<1750&&(w=requestAnimationFrame(G))}function X(W){if(W.pointerType!=="mouse"||!S()||!U())return;const V=performance.now();V-_>1750&&(M=0),_=V,u.setPigment("amethyst",s,0),u.seedPointer(W.clientX,W.clientY,_),u.admit(W),w||(w=requestAnimationFrame(G))}return y(window,"pointermove",X),y(window,"amethyst-clear-trail",B),y(window,"amethyst-palette",()=>{a=e(),s=dh(a,t()),B()}),y(window,"amethyst-chapter",()=>{S()||B()}),y(window,"amethyst-preferences",()=>{S()||B()}),y(window,"pointerout",W=>{W.relatedTarget||B()}),y(window,"blur",B),y(window,"keydown",B),y(window,"touchstart",B),y(document,"visibilitychange",B),y(r,"change",B),y(n,"change",B),o.addEventListener("webglcontextlost",W=>{W.preventDefault(),m=!0,B()},{signal:E.signal}),y(o,"webglcontextrestored",()=>{m=!1,f=!0}),function(){E.abort(),B(),u?.dispose(),l?.dispose(),p?.dispose(),d?.dispose(),g?.dispose(),c?.dispose(),c?.forceContextLoss(),o.remove()}}function Jv(i,e){const t=6.666666666666667,r=hn(e,0,.05),n=i.value-i.target,a=i.velocity+t*n,s=Math.exp(-t*r);return i.value=i.target+(n+a*r)*s,i.velocity=(i.velocity-t*a*r)*s,Math.abs(i.value-i.target)<.001&&Math.abs(i.velocity)<.009}const mh=1550,Kv=["ArrowDown","ArrowUp","PageDown","PageUp"," ","Home","End"],Qv=["ArrowDown","PageDown"," "],$v="input,textarea,select,a,button,summary,[role=dialog],.palette-picker,[contenteditable=true]";function e0(i,e,t){const r=document.documentElement;let n="ready",a=!1,s=0,o=0,c=0,l=-1/0,u="",p=null,h=!1;const d=()=>n==="sinking"||n==="rising",g=()=>!e()&&!document.hidden&&i.classList.contains("lit");function v(E){n=E,r.toggleAttribute("data-sinking",n==="sinking"),r.toggleAttribute("data-rising",n==="rising")}function m(){d()&&(clearTimeout(o),v(n==="sinking"?"underwater":"ready"),t(n))}function f(E){scrollY!==0&&scrollTo(0,0),s=performance.now(),v(E),o=setTimeout(m,mh),t(n)}function w(){clearTimeout(o),a=!1,c=0,u="",p=null,h=!1,v("bypassed")}(location.hash||performance.getEntriesByType("navigation")[0]?.type==="back_forward")&&w();function M(){if(d()){scrollY!==0&&scrollTo(0,0);return}scrollY>=(globalThis.innerHeight||1)*2&&(a=!0),scrollY>=2&&n==="ready"&&v("bypassed"),!(scrollY>=2||!a)&&(a=!1,g()?f("rising"):v("ready"))}function _(E){E.cancelable&&E.preventDefault()}function T(E,y){if(!E.isTrusted||E.metaKey||E.ctrlKey||E.altKey)return!1;const S=E.target.closest?.($v);return S&&!(E.type==="wheel"&&S.classList?.contains("crystal-control"))?!1:d()?(_(E),!0):!y||n!=="ready"||scrollY>=2||!g()||document.querySelector?.("#about-trigger[aria-expanded=true]")?!1:(_(E),f("sinking"),!0)}addEventListener("wheel",E=>{if(E.ctrlKey||Math.abs(E.deltaY)<Math.abs(E.deltaX)||!E.deltaY)return;const y=performance.now(),S=Math.sign(E.deltaY);if(d()||S===c&&y-l<95){c=S,l=y,_(E);return}c=T(E,S>0)?S:0,l=y},{capture:!0,passive:!1}),addEventListener("keydown",E=>{if(Kv.includes(E.key)){if(u===E.key&&E.repeat){_(E);return}T(E,!E.repeat&&!E.shiftKey&&Qv.includes(E.key))&&(u=E.key)}},!0),addEventListener("keyup",E=>{E.key===u&&(u="")},!0),addEventListener("touchstart",E=>{p=E.touches.length===1?E.touches[0]:null,h=!1},{passive:!0}),addEventListener("touchmove",E=>{if(h||d()){_(E),h=!0;return}if(!p||E.touches.length!==1||E.touches[0].identifier!==p.identifier)return;const y=E.touches[0],S=p.clientY-y.clientY;Math.abs(S)>5&&Math.abs(S)>=Math.abs(y.clientX-p.clientX)&&(h=T(E,S>0))},{capture:!0,passive:!1});for(const E of["touchend","touchcancel"])addEventListener(E,()=>{p=null,h=!1},{passive:!0});addEventListener("scroll",M,{passive:!0}),addEventListener("pagehide",w),i.addEventListener("webglcontextlost",w),document.addEventListener("visibilitychange",()=>{document.hidden&&m()});function R(){if(!e())return;const E=scrollY<2&&!location.hash;w(),E?v("ready"):scrollY>=(globalThis.innerHeight||1)*2&&(a=!0),t(n)}addEventListener("amethyst-preferences",R),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",R);function P(E){if(e())return E;if(d()){const y=Math.min(1,(performance.now()-s)/mh),S=y*y*y*(10+y*(6*y-15));return n==="rising"?1-S:S}return n==="underwater"||a?1:n==="ready"?0:E}return{render:P,skip:w,moving:d}}function t0(i){let e=null,t=0,r=0,n=0;function a(){cancelAnimationFrame(n),e=null,t=0,r=0,n=0}function s(o,c,l=performance.now()){if(e===null||c||document.hidden)return a(),e=o,r=l,e;const u=Math.max(0,Math.min(.045,(l-r)/1e3));r=l;const p=o-e;if(Math.abs(p)<8e-5&&Math.abs(t)<.0012)return e=o,t=0,e;const h=7.1,d=.68,g=-d*Math.tanh(p/d),v=e-g,m=t+h*g,f=Math.exp(-h*u),w=v+(g+m*u)*f,M=1.15*u;let _=w;return w>e&&e<Is&&w>qn&&(_=Math.min(w,Math.max(e,qn)+M)),w<e&&e>qn&&w<Is&&(_=Math.max(w,Math.min(e,Is)-M)),t=_!==w&&u?(_-e)/u:(t-h*m*u)*f,e=_,n||(n=requestAnimationFrame(()=>{n=0,i()})),e}return s.reset=a,s}const r0=`uniform float route,coverage,seconds,pearl;
uniform vec2 view,drift;
uniform vec3 tint;
varying vec2 vUv;
float hash(vec2 p){
 vec3 q=fract(vec3(p.xyx)*.1031);
 q+=dot(q,q.yzx+33.33);
 return fract((q.x+q.y)*q.z);
}
float noise(vec2 p){
 vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
}
float mass(vec2 p){
 return .62*noise(p)+.28*noise(p*2.09+5.3)+.10*noise(p*4.07-7.1);
}
void main(){
 float reach=smoothstep(.23,.86,route);
 float clearing=smoothstep(.886,.999,route);
 vec2 xy=(vUv-.5)*vec2(view.x/view.y,1.);
 float density=0.,lighting=0.;
 for(int j=0;j<3;j++){
  float slab=float(j);
  float zoom=1.+reach*(1.4+slab*.71);
  vec2 canvas=vec2(xy.x,xy.y-.044)/zoom;
  vec2 p=canvas*vec2(5.2,9.1)+vec2(13.7*slab+seconds*.008,4.3*slab);
  p+=drift*vec2(.17,.008)*(1.+.7*slab);
  float fold=mass(p*.62+4.);
  float body=mass(p+vec2(.68*fold,.73*fold));
  float crest=.01+.143*fold+.053*body;
  float shelf=(1.-smoothstep(crest-.035,crest+.037,canvas.y))*smoothstep(-.11-.06*body,-.027,canvas.y);
  float lobe=shelf*(.28+.69*body);
  density+=lobe*(.41+slab*.14);
  lighting+=lobe*(.34+body*.47+.59*(body-noise(p+vec2(.20,-.13))));
 }
 float alpha=min(.92,density)*smoothstep(.035,.81,route)*(1.-clearing);
 alpha=mix(alpha,1.,coverage);
 float lit=clamp(lighting*.55+mass(xy*3.+reach)*.23+.12,0.,1.);
 vec3 smoke=mix(vec3(.135,.128,.174),vec3(.71,.69,.74),lit);
 smoke=mix(smoke,smoke*(.74+.27*tint),.41);
 smoke=mix(smoke,vec3(dot(smoke,vec3(.2126,.7152,.0722))),pearl);
 gl_FragColor=vec4(smoke*alpha,alpha);
}
`;function i0(i,e,t){let r,n,a,s=!1,o=0,c=0,l=0;const u=new yi,p=new Ce(0,-13),h=i.querySelector("div"),d=()=>!i.hidden&&!document.hidden;function g(){r=new on({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,powerPreference:"high-performance"}),r.setClearColor(0,0);const T=r.domElement;i.append(T),n=new Mi,a={route:{value:0},coverage:{value:0},seconds:{value:0},view:{value:new Ce(1,1)},drift:{value:p},tint:{value:new N},pearl:{value:0}},n.add(new _t(new ir(2,2),new St({uniforms:a,fragmentShader:r0,blending:_r,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}"}))),T.addEventListener("webglcontextlost",R=>{R.preventDefault(),s=!0,h.hidden=!1,T.hidden=!0}),T.addEventListener("webglcontextrestored",()=>{s=!1,v(),M()}),v(),r.compileAsync(n,u).catch(()=>{})}function v(){if(!r||s)return;const{width:T,height:R}=i.getBoundingClientRect();!T||!R||(r.setPixelRatio(Math.min(.58*devicePixelRatio,.72,1e3/T)),r.setSize(T,R,!1),a.view.value.set(T,R))}function m(T=e()){if(!r||s||!d())return!1;const R=t();return a.route.value=T.cloud,a.coverage.value=T.cover,a.seconds.value=c,a.tint.value.fromArray([1,3,5].map(P=>parseInt(R.accent.slice(P,P+2),16)/255)),a.pearl.value=+(R.id==="pearl"),r.render(n,u),h.hidden=!0,r.domElement.hidden=!1,!0}function f(T){if(o=0,!d()){l=0;return}const R=l?Math.min(.05,(T-l)/1e3):0;l=T,c+=R,m(),!s&&r&&(o=requestAnimationFrame(f))}function w(T){const R=Bt((T.cloud-.035)/.775)*(1-Bt((T.cloud-.886)/.113))*.61;return T.cover+(1-T.cover)*R}function M(){const T=e();if(i.hidden=T.cloud<=.025||T.cloud>=.9999,h.style.opacity=String(w(T)),!r&&T.cloud>=.018&&!s)try{g()}catch{s=!0}d()&&!o&&r&&!s?(v(),m(T),o=requestAnimationFrame(f)):d()||(cancelAnimationFrame(o),o=l=0)}function _(T,R,P){if(i.hidden)return;if(m()){T.drawImage(r.domElement,0,0,R,P);return}const E=T.createLinearGradient(0,0,R*.24,P);E.addColorStop(0,"#676474"),E.addColorStop(.54,"#aaa5ad"),E.addColorStop(1,"#504c60"),T.save(),T.globalAlpha=w(e()),T.fillStyle=E,T.fillRect(0,0,R,P),T.restore()}return addEventListener("amethyst-cloud-snapshot",({detail:T})=>{m()&&T(r.domElement)}),addEventListener("resize",()=>{v(),M()}),addEventListener("amethyst-palette",()=>{m()}),document.addEventListener("visibilitychange",M),{sync:M,snapshot:_,setPose(T){p.set(T.x,T.z)}}}const xt=i=>document.querySelector(i);function n0({dismissPanels:i,allowMotion:e}){const t=xt(".gallery"),r=xt(".stage"),n=xt(".opening"),a=xt(".finale"),s=xt("#amethyst"),o=xt("#recordings"),c=xt("#desktop"),l=xt("#download"),u=xt("#about-trigger"),p=xt("#clip-label"),h=xt("#retry-clip"),d=xt("#world"),g=matchMedia("(prefers-reduced-motion: reduce)"),v=matchMedia("(max-width: 650px)"),m=()=>g.matches||!e(),f=()=>u.ariaExpanded==="true",w=new Ce,M=new Map,_=new Map,T={value:0,target:0,velocity:0};let R=0,P=0,E=!1,y=!1,S=[],U=0,I=0,B=0,G=dl(0);const X=xt("#reel-progress"),W=xt("#reel-announcement"),V=new Map;let F=!1,K=null,he=!0,Le=()=>{};const Se=xt("#take-status"),Ue=xt("#palette-switch"),De=xt("#detail-clips"),He=document.createElement("button");He.type="button",De.append(He),He.addEventListener("click",()=>{const C=M.get(S[U]?.id);!C||!F||f()||(C.pref.detail=!C.pref.detail,Ee(C,ne(C,tt.id)),Ne())});let j=null;const{picker:Q,group:ce}=pv(le);Ue.append(Q),Zu(tt.id);let be=0,me=!1,ue=null,je=!1;const L=C=>(C+S.length)%S.length;function de(C){Er(C)}function Ie(C){const re=e()&&C.slot==="center";return C.pref.mode==="play"||C.pref.mode!=="pause"&&re}function ke(C){return C.variant&&F&&!f()&&he&&!document.hidden&&C.el.isConnected&&C.rank<=1&&Ie(C)&&!C.failed&&(!E||C.pref.mode==="play")}function _e(C){if(C.pending||!C.video.paused||!ke(C))return;const re=C.video;re.hasAttribute("src")||(re.src=C.variant.src),C.pending=!0,re.play().catch(()=>{C.video===re&&ke(C)&&!C.interrupted&&(C.failed=!0)}).finally(()=>{if(C.video!==re)return;C.pending=!1;const xe=C.interrupted;C.interrupted=!1,ke(C)?xe&&C.video.paused&&_e(C):C.video.pause(),Je()})}function Je(){const C=M.get(S[U]?.id);for(const xe of M.values()){const Xe=xe.failed?"Retry":Ie(xe)?"Pause":"Play";xe.play.textContent=Xe==="Pause"?"\u2161":"\u25B7",xe.play.setAttribute("aria-label",Xe+" "+xe.clip.label),xe.play.disabled=!xe.variant,xe.pick.disabled=xe.slot==="center"&&!xe.variant,xe.slot==="center"&&xe.pick.setAttribute("aria-label",Xe+" "+xe.clip.label)}h.hidden=S.length>0&&!C?.failed;const re=C?.clip.details?.[tt.id];De.hidden=!re&&!C?.pref.detail,He.textContent=C?.pref.detail?"Back to recording":re?.label??"",He.setAttribute("aria-pressed",String(!!C?.pref.detail)),Se.hidden=!C||!!C.variant,C&&!C.variant&&(Se.textContent="Recording unavailable in "+tt.label)}function ge(C,re=!1){C.pending&&(C.interrupted=!0),C.video.paused||C.video.pause(),re&&C.video.hasAttribute("src")&&(C.variant&&C.video.duration>0&&V.set(C.variant.src,ae(C.video)),C.video.removeAttribute("src"),C.video.classList.remove("decoded"),C.video.load())}function Ne(){for(const C of M.values())ke(C)?_e(C):ge(C,!F||C.rank>1||C.slot!=="center"&&C.pref.mode!=="play");Je()}function ct(C){!C||C.rank>1||!F||f()||C.variant&&(C.failed?(de("retry"),C.failed=!1,C.video.removeAttribute("src"),C.video.load(),C.pref.mode="play"):(C.pref.mode=Ie(C)?"pause":"play",de(C.pref.mode)),Ne())}function nt(){for(const[C,re]of[...X.children].entries()){const xe=C===U;xe?re.setAttribute("aria-current","step"):re.removeAttribute("aria-current"),re.toggleAttribute("data-past",C<U),re.tabIndex=xe?0:-1}}function A(C){return`${C+1} of ${S.length}: ${S[C].label}. ${S.length-C-1} remaining.`}function x(){cancelAnimationFrame(R),R=P=0,T.value=T.target,T.velocity=0,E=!1,D(),Ne(),y&&S[U]&&(W.textContent=A(U),de("step")),y=!1}function k(C){R=0;const re=P?(C-P)/1e3:0;if(P=C,!F||f()||m()||Jv(T,re))return x();D(),R=requestAnimationFrame(k)}function Z(C,re=!1,xe=!1){if(!S.length)return;const Xe=hn(C,0,S.length-1);if(re&&Xe!==T.target&&(y=!0),T.target=Xe,xe||m())return x();!F||f()||(E=!0,R||(Ne(),P=performance.now(),R=requestAnimationFrame(k)))}function $(C){F&&!f()&&Z(Math.round(T.target)+C,!0)}function J(){X.replaceChildren(...S.map((C,re)=>{const xe=document.createElement("button");return xe.type="button",xe.setAttribute("aria-label",A(re)),xe.addEventListener("click",()=>Z(re,!0)),xe})),nt()}X.addEventListener("keydown",C=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(C.key))return;C.preventDefault();const re=[...X.children].indexOf(C.target),xe=hn(C.key==="Home"?0:C.key==="End"?S.length-1:re+(C.key==="ArrowLeft"?-1:1),0,S.length-1);X.children[xe]?.focus({preventScroll:!0}),Z(xe,!0)});function Re(C){const re=document.createElement("video");return re.defaultMuted=re.muted=re.loop=re.playsInline=!0,re.preload="none",re.dataset.clip=C.id,re.setAttribute("aria-hidden","true"),re}function ne(C,re){return C?.pref.detail?C.clip.details?.[re]:C?.clip.variants[re]}function Ee(C,re,xe,Xe=0){C.video&&(ge(C,!0),C.video.remove());const Oe=xe??Re(C.clip);C.heldPhase=Xe,C.video=Oe,C.variant=re,C.pending=C.interrupted=C.failed=!1,C.el.prepend(Oe),C.el.dataset.variant=re?tt.id:"unavailable",C.el.style.backgroundImage=re?`url("${new URL(re.poster,document.baseURI).href}")`:"none",C.still=new Image,re&&(Oe.poster=re.poster,C.still.src=re.poster),Oe.readyState>=2&&Oe.classList.add("decoded"),Oe.addEventListener("loadedmetadata",()=>{const qe=V.get(re?.src);qe>0&&Oe.duration>0&&(V.delete(re.src),Oe.currentTime=qe*Oe.duration)}),re&&!xe&&Xe&&V.set(re.src,Xe),Oe.addEventListener("play",()=>{ke(C)||Oe.pause()}),Oe.addEventListener("loadeddata",()=>{Oe.classList.add("decoded")}),Oe.addEventListener("emptied",()=>{Oe.classList.remove("decoded")}),Oe.addEventListener("error",()=>{C.video!==Oe||!C.el.isConnected||!Oe.hasAttribute("src")||(C.failed=!0,Oe.classList.remove("decoded"),Je())})}function ve(C){const re=document.createElement("div"),xe=document.createElement("button"),Xe=document.createElement("button");re.className="frame",re.dataset.clip=C.id,xe.className="frame-pick",Xe.className="wing-play",xe.type=Xe.type="button",re.append(xe,Xe);let Oe=_.get(C.id);Oe||_.set(C.id,Oe={mode:null});const qe={el:re,pick:xe,play:Xe,clip:C,pref:Oe};return Ee(qe,ne(qe,tt.id)),xe.addEventListener("click",()=>{qe.slot==="center"?ct(qe):Z(S.indexOf(C),!0)}),Xe.addEventListener("click",()=>ct(qe)),r.append(re),qe}function ae(C){return C.duration>0?C.currentTime/C.duration%1:0}function pe(C){return C.video.duration>0?ae(C.video):V.get(C.variant?.src)??C.heldPhase}function Ve(C){C&&(C.removeAttribute("src"),C.load())}function we(){j&&(j.abort.abort(),Ve(j.video),j=null,ce.removeAttribute("aria-busy"))}function H(C,re,xe){return new Promise(Xe=>{const Oe=setTimeout(()=>mt(!1),450),qe=new AbortController;function mt(Be){clearTimeout(Oe),qe.abort(),xe.removeEventListener("abort",st),Xe(Be)}const st=()=>mt(!1);xe.addEventListener("abort",st,{once:!0}),C.addEventListener(re,()=>mt(!0),{once:!0,signal:qe.signal}),C.addEventListener("error",st,{once:!0,signal:qe.signal})})}async function le(C){if(we(),C===tt.id)return;const re={abort:new AbortController,center:M.get(S[U]?.id)};j=re;const{signal:xe}=re.abort;ce.setAttribute("aria-busy","true");const Xe=(F?[...M.values()].filter(Be=>Be.rank<=1):[]).map(Be=>ne(Be,C)?.poster).filter(Boolean);G.portrait&&Xe.push(Qr(Xn(C+"-poster.webp")));const Oe=Promise.allSettled(Xe.map(Be=>{const $e=new Image;return $e.src=Be,$e.decode()})),qe=re.center,mt=ne(qe,C);if(F&&mt&&(ke(qe)||qe.video.readyState>=2)&&!document.hidden){const Be=re.video=Re(qe.clip);Be.preload="auto";const $e=H(Be,"loadeddata",xe);if(Be.src=mt.src,await $e&&Be.duration>0&&!xe.aborted){const Jt=pe(qe);if(Jt>.003){const b=H(Be,"seeked",xe);Be.currentTime=Jt*Be.duration,await b}}}if(await Promise.race([Oe,new Promise(Be=>setTimeout(Be,450))]),xe.aborted||j!==re)return;if(re.video?.error){we(),Se.textContent="Could not load the "+ln.find(Be=>Be.id===C).label+" recording",Se.hidden=!1;return}j=null,ce.removeAttribute("aria-busy");const st=document.activeElement;Zu(C),de("choose");for(const Be of M.values()){const $e=Be===qe&&Be.slot==="center"&&F&&re.video?.readyState>=2?re.video:null;Ee(Be,ne(Be,C),$e,pe(Be)),$e&&(re.video=null)}Ve(re.video),Ne(),Le(),st?.isConnected&&!st.disabled&&document.activeElement!==st&&st.focus({preventScroll:!0})}function D(){if(!S.length||!G.galleryAlpha)return;const C=hn(T.value,0,S.length-1),re=Math.round(C);if(K===C)return;K=C;const xe=Math.sin(Math.PI*(C%1)),Xe=v.matches?1-.37*xe*xe:1,Oe=document.activeElement?.closest(".frame"),qe=new Set;let mt=!1;for(const Be of[0,-1,1,-2,2]){const $e=S[L(re+Be)],Jt=re+Be-C,b=Math.abs(Jt);if(b>=1.995||qe.has($e.id))continue;qe.add($e.id),M.has($e.id)||M.set($e.id,ve($e));const O=M.get($e.id),q=Math.abs(Be),Y=q>1?"depth":Be===0?"center":Be<0?"left":"right";O.slot!==Y&&(mt=!0,O.slot=O.el.dataset.slot=Y,O.rank=q,O.el.inert=q>1,O.el.style.pointerEvents=q>1?"none":"auto",Y!=="center"&&O.pick.setAttribute("aria-label","Show "+$e.label),q>1&&O.video.hasAttribute("src")&&ge(O,!0));const z=Math.min(1,b),ie=Math.max(0,b-1),ye=Math.sign(Jt),Te=ye*((v.matches?103:97)*z+12*ie)*Xe,Ae=ye*(43*z+30*ie),Ge=(1-.16*z-.32*ie)*Xe;O.el.style.transform=`translate(-50%, -50%) translateX(${Te}%) rotateY(${Ae}deg) scale(${Ge})`,O.el.style.opacity=String(1-ie),O.el.style.zIndex=String(100-Math.round(b*40)),O.el.style.filter=`brightness(${1-.2*z-.28*ie})`}for(const[Be,$e]of M)qe.has(Be)||($e.el.remove(),ge($e,!0),M.delete(Be));U!==re&&(U=re,nt());const st=S[U].label;p.textContent!==st&&(p.textContent=st),F&&Oe&&(!Oe.isConnected||Oe.inert||!document.activeElement?.offsetWidth)&&M.get(S[U].id)?.pick.focus({preventScroll:!0}),mt&&Ne()}h.onclick=()=>{S.length?ct(M.get(S[U]?.id)):(de("retry"),_n())};let ee=0;t.addEventListener("wheel",C=>{if(!F||f()||C.ctrlKey||C.metaKey)return;const re=Math.abs(C.deltaX)>Math.abs(C.deltaY);if(!re&&!C.shiftKey)return;C.preventDefault();const xe=C.deltaMode===1?16:C.deltaMode===2?r.clientWidth:1,Xe=(re?C.deltaX:C.deltaY)*xe/Math.max(90,r.clientWidth*.44);Z(T.target+Xe),clearTimeout(ee),ee=setTimeout(()=>Z(Math.round(T.target)),100)},{passive:!1}),r.addEventListener("pointerdown",C=>{!F||f()||!C.isPrimary||C.button!==0||(ue={id:C.pointerId,x:C.clientX,y:C.clientY,from:T.value,axis:null},je=!1)}),r.addEventListener("pointermove",C=>{if(!ue||ue.id!==C.pointerId)return;const re=C.clientX-ue.x,xe=C.clientY-ue.y;!ue.axis&&Math.max(Math.abs(re),Math.abs(xe))>8&&(ue.axis=Math.abs(re)>Math.abs(xe)?"x":"y",ue.axis==="x"&&r.setPointerCapture(C.pointerId)),ue.axis==="x"&&(je=!0,Z(ue.from-re/Math.max(68,r.clientWidth*.43)))});function oe(){ue&&(ue.axis==="x"&&Z(Math.round(T.target)),ue=null,je&&setTimeout(()=>{je=!1},120))}addEventListener("pointerup",oe),r.addEventListener("pointercancel",oe),r.addEventListener("click",C=>{je&&(C.preventDefault(),C.stopPropagation(),je=!1)},!0),document.addEventListener("keydown",C=>{C.defaultPrevented||!F||f()||C.altKey||C.metaKey||C.ctrlKey||C.target.matches("select,input,textarea")||C.target.closest(".palette-picker, #reel-progress")||(C.key==="ArrowLeft"||C.key==="ArrowRight")&&(C.preventDefault(),$(C.key==="ArrowRight"?1:-1))});function Me(){Ne(),Le(),window.dispatchEvent(new Event("amethyst-chapter"))}function se(C,re=!1){ze.skip(),ut.reset(),d.dispatchEvent(new Event("amethyst-reset-water"));const xe=C.slice(1),Xe=S.findIndex(mt=>mt.id===xe),Oe=xe==="download"?l:xe==="desktop"?c:["recordings","launcher","dashboard","editor","dotfiles"].includes(xe)||Xe>=0?o:s;i(),Oe===o&&Z(Math.max(0,Xe),!1,!0);const qe=Oe===o?ri*I:Oe.offsetTop;scrollTo(0,qe),re&&Oe.focus({preventScroll:!0}),wt()}history.scrollRestoration="manual",document.addEventListener("click",C=>{const re=C.target.closest('a[href^="#"]');!re||C.defaultPrevented||C.button||C.metaKey||C.ctrlKey||C.altKey||C.shiftKey||(C.preventDefault(),location.hash!==re.hash&&(history.replaceState({position:B,recording:T.target},""),history.pushState(null,"",re.hash)),se(re.hash,!0))});function te(){if(ze.skip(),ut.reset(),d.dispatchEvent(new Event("amethyst-reset-water")),!Number.isFinite(history.state?.position))return se(location.hash);i(),Z(history.state.recording??0,!1,!0),scrollTo(0,history.state.position*I),wt()}addEventListener("popstate",te),addEventListener("hashchange",te);const Pe=vv(l,m),ze=e0(d,m,C=>{C==="rising"?(ut.reset(),d.dispatchEvent(new Event("amethyst-reset-water")),wt()):Le()}),ut=t0(wt),et=i0(xt("#cloud-passage"),()=>G,()=>tt);function wt(){const C=G,re=F;B=scrollY/I;const xe=ut(B,m());G=dl(xe,m()),F=G.galleryAlpha>.55,!F&&re&&(we(),x()),Ue.hidden=!1;const Xe=G.portrait!==C.portrait,Oe=B>=ri-.15;if(document.body.dataset.phase=G.portrait?"portrait":xe>=G.river?"river":G.galleryAlpha>0?"gallery":"opening",Xe&&window.dispatchEvent(new Event("amethyst-clear-trail")),Oe!==me&&(me=Oe,window.dispatchEvent(new CustomEvent("amethyst-prepare-portrait",{detail:Oe}))),!F&&re&&t.contains(document.activeElement)&&(B>ri?c:s).focus({preventScroll:!0}),n.style.opacity=String(G.opening),n.style.visibility=G.opening>0?"visible":"hidden",t.style.opacity=String(G.galleryAlpha),t.style.visibility=G.galleryAlpha>0?"visible":"hidden",t.inert=!F,G.galleryAlpha)D();else if(C.galleryAlpha||K!==null){for(const mt of M.values())ge(mt,!0);K=null}const{gate:qe}=G;qe<=.5&&a.contains(document.activeElement)&&o.focus({preventScroll:!0}),a.inert=qe<=.5,a.style.visibility=qe>0?"visible":"hidden",a.style.pointerEvents=qe>.5?"auto":"none",a.style.opacity=String(qe),Pe(qe>.5),et.sync(),qe!==C.gate&&window.dispatchEvent(new CustomEvent("amethyst-gate",{detail:qe})),Le(),(F!==re||Xe||qe===1!=(C.gate===1))&&Me()}function Gt(){d.dispatchEvent(new Event("amethyst-reset-water"));const C=B;ut.reset(),I=innerHeight,s.style.height=ri*I+"px",o.style.height=(dl(0).end-ri)*I+"px",c.style.height=I+"px",K=null,scrollTo(0,C*I),wt()}addEventListener("scroll",()=>{be||(be=requestAnimationFrame(()=>{be=0,wt()}))},{passive:!0}),addEventListener("resize",Gt),addEventListener("amethyst-panel",Me);function Pi(){K=null,wt(),Me()}addEventListener("amethyst-preferences",Pi),g.addEventListener("change",Pi),v.addEventListener("change",Pi),navigator.connection?.addEventListener("change",Ne),document.addEventListener("visibilitychange",()=>{document.hidden&&(d.dispatchEvent(new Event("amethyst-reset-water")),we(),x()),Me()}),addEventListener("pagehide",()=>{ut.reset(),we(),he=!1,Me()}),addEventListener("pageshow",C=>{he=!0,C.persisted&&(ut.reset(),wt()),Me()}),addEventListener("pointermove",C=>{C.pointerType==="mouse"&&w.set(C.clientX/innerWidth*2-1,1-C.clientY*2/innerHeight)},{passive:!0}),Gt(),location.hash&&se(location.hash);try{Le=kv(d,()=>({progress:G.camera,palette:tt,pointer:w,pinned:G.pinned,reduced:m(),animate:!m(),covered:G.gate===1||G.cover===1,route:G.route,immersion:ze.render(G.immersion),interactive:he&&!ze.moving()&&!f()&&G.galleryAlpha<.35&&!G.portrait&&G.cover<.5,paused:!he}),()=>d.classList.add("lit"),(C,re)=>{de(C),d.dispatchEvent(new CustomEvent("amethyst-surface",{detail:{surface:C,point:re.toArray()}}))},et.setPose)}catch{d.classList.remove("lit")}Zv({getAccent:()=>tt.accent,isNeutral:()=>tt.id==="pearl",isReduced:()=>m()||f()||G.portrait});const ar=[new Image,new Image];function Ui(){ar[0].src=Qr(tt.id+"-lake.webp"),ar[1].src=Qr(tt.id+"-mobile.webp")}Ui(),addEventListener("amethyst-palette",Ui);function vn(C,re,xe,Xe,Oe,qe){const mt=re.videoWidth||re.naturalWidth||re.width,st=re.videoHeight||re.naturalHeight||re.height;if(!mt||!st)return;const Be=Math.max(Oe/mt,qe/st);C.save(),C.beginPath(),C.rect(xe,Xe,Oe,qe),C.clip(),C.drawImage(re,xe+(Oe-mt*Be)/2,Xe+(qe-st*Be)/2,mt*Be,st*Be),C.restore()}addEventListener("amethyst-capture-stage",({detail:{ctx:C,paintPane:re,handled:xe}})=>{xe();const Xe=innerWidth,Oe=innerHeight;C.fillStyle="#15111c",C.fillRect(0,0,Xe,Oe),vn(C,ar[Number(v.matches)],0,0,Xe,Oe);const{gate:qe,galleryAlpha:mt}=G;if(qe<1&&G.cover<1&&window.dispatchEvent(new CustomEvent("amethyst-world-snapshot",{detail:()=>C.drawImage(d,0,0,Xe,Oe)})),mt>0)for(const st of[...M.values()].sort((Be,$e)=>Number(Be.el.style.zIndex)-Number($e.el.style.zIndex))){const Be=st.el.getBoundingClientRect();C.save(),C.globalAlpha=mt*Number(st.el.style.opacity)*(st.slot==="center"?1:.73),vn(C,st.video.readyState>=2?st.video:st.still,Be.x,Be.y,Be.width,Be.height),C.restore()}if(qe>0){C.save(),C.globalAlpha=qe;const st=$e=>{if($e instanceof HTMLImageElement){C.save();const Jt=Cs(Xe,Oe);C.fillStyle="#050505",C.fillRect(0,0,Xe,Oe),C.drawImage($e,Jt.left,Jt.top,sl*Jt.scale,ol*Jt.scale),C.restore()}else C.drawImage($e,0,0,Xe,Oe)};let Be=!1;window.dispatchEvent(new CustomEvent("amethyst-paint-banner",{detail:$e=>{st($e),Be=!0}})),Be||st(xt("#banner img")),C.restore()}et.snapshot(C,Xe,Oe);for(const st of[".opening",".segment",".legend"]){const Be=xt(st),$e=Be.getBoundingClientRect();$e.width&&$e.height&&getComputedStyle(Be).visibility!=="hidden"&&C.drawImage(re(Be,$e.width,$e.height),$e.x,$e.y,$e.width,$e.height)}});async function _n(){try{const C=await fetch(Qr("catalog.json"));if(!C.ok)throw Error("Catalog unavailable");const re=await C.json();if(!Array.isArray(re)||re.length<3)throw Error("Catalog incomplete");S=re,J(),Gt(),location.hash&&se(location.hash)}catch{S=[],xt("#clip-label").textContent="Recordings unavailable",h.hidden=!1}}_n()}function dn(i,e,t,r,n){const a=r??document.createElement("canvas");a.width=Math.ceil(e),a.height=Math.ceil(t);const s=a.getContext("2d"),o=i.getBoundingClientRect(),c=h=>h,l=h=>{const d=getComputedStyle(h);return d.display!=="none"&&d.visibility!=="hidden"&&!h.closest("[hidden],[data-glass-copy],.pane-close")};for(const h of i.querySelectorAll("button,a,input,img")){if(!l(h))continue;const d=h.getBoundingClientRect(),g=getComputedStyle(h),v=d.left-o.left,m=d.top-o.top;if(h instanceof HTMLImageElement){h.complete&&h.naturalWidth&&(h.currentSrc.startsWith(location.origin)||h.currentSrc.startsWith("data:image/"))&&(s.save(),s.beginPath(),s.roundRect(v,m,d.width,d.height,parseFloat(g.borderRadius)||0),s.clip(),s.drawImage(h,v,m,d.width,d.height),s.restore());continue}if(h instanceof HTMLInputElement&&h.type==="range")continue;s.fillStyle=c(g.backgroundColor),s.beginPath(),s.roundRect(v,m,d.width,d.height,Math.min(d.height/2,parseFloat(g.borderRadius)||0)),s.fill();const f=parseFloat(g.borderTopWidth);f>0&&g.borderTopStyle!=="none"&&(s.strokeStyle=c(g.borderTopColor),s.lineWidth=f,s.stroke()),h instanceof HTMLInputElement&&h.type==="checkbox"&&(s.fillStyle=c(g.color),s.beginPath(),s.arc(v+(h.checked?d.width-10:10),m+d.height/2,6,0,Math.PI*2),s.fill())}const u=i.querySelectorAll("svg");for(const h of u){if(!l(h)||h.closest("[data-glass-copy]"))continue;const d=h.getBoundingClientRect(),g=h.viewBox.baseVal;if(!d.width||!d.height)continue;s.save(),s.translate(d.left-o.left,d.top-o.top),s.scale(d.width/(g.width||d.width),d.height/(g.height||d.height)),s.translate(-g.x,-g.y);const v=m=>{const f=getComputedStyle(m);if(s.save(),m instanceof SVGGraphicsElement){const _=m.transform.baseVal.consolidate()?.matrix;_&&s.transform(_.a,_.b,_.c,_.d,_.e,_.f)}let w=null;const M=_=>Number(m.getAttribute(_)||0);m instanceof SVGPathElement?w=new Path2D(m.getAttribute("d")||""):m instanceof SVGCircleElement?(w=new Path2D,w.arc(M("cx"),M("cy"),M("r"),0,Math.PI*2)):m instanceof SVGEllipseElement?(w=new Path2D,w.ellipse(M("cx"),M("cy"),M("rx"),M("ry"),0,0,Math.PI*2)):m instanceof SVGLineElement?(w=new Path2D,w.moveTo(M("x1"),M("y1")),w.lineTo(M("x2"),M("y2"))):m instanceof SVGRectElement&&(w=new Path2D,w.roundRect(M("x"),M("y"),M("width"),M("height"),M("rx"))),w&&(f.fill!=="none"&&(s.fillStyle=c(f.fill),s.fill(w)),f.stroke!=="none"&&(s.strokeStyle=c(f.stroke),s.lineWidth=parseFloat(f.strokeWidth)||1,s.lineCap=f.strokeLinecap,s.lineJoin=f.strokeLinejoin,s.stroke(w)));for(const _ of m.children)_ instanceof SVGElement&&v(_);s.restore()};for(const m of h.children)m instanceof SVGElement&&v(m);s.restore()}const p=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(;p.nextNode();){const h=p.currentNode,d=h.parentElement;if(!d||d.closest("svg,[data-glass-copy],.pane-close")||!l(d)||!h.data.trim())continue;const g=getComputedStyle(d);s.font=`${g.fontStyle} ${g.fontWeight} ${g.fontSize} ${g.fontFamily}`,s.fillStyle=c(g.color),s.textBaseline="alphabetic",s.letterSpacing=g.letterSpacing==="normal"?"0px":g.letterSpacing;const v=[...h.data.matchAll(/\S+\s*/g)];for(const m of v){const f=document.createRange();f.setStart(h,m.index),f.setEnd(h,m.index+m[0].length);const w=f.getBoundingClientRect(),M=s.measureText(m[0]),_=M.fontBoundingBoxAscent??parseFloat(g.fontSize)*.8,T=M.fontBoundingBoxDescent??parseFloat(g.fontSize)*.2;s.fillText(m[0],w.left-o.left,w.top-o.top+(w.height-_-T)/2+_)}}return a}const jn=i=>Math.max(0,Math.min(1,i)),ml=i=>{const e=jn(i);return e*e*(3-2*e)},gh=.84,vh=.42,a0=.18;function s0(i){const e=t=>t-Math.floor(t);return{x:e(Math.sin((i+1)*127.1)*43758.5453),y:e(Math.sin((i+1)*311.7)*22578.1459)}}function o0(i,e,t=0){return i.opening&&(i.fresh!==!1||t<=0)?a0/i.duration*Math.cbrt(e.y):0}function l0(i,e,t,r=0){return i.opening?i.fresh===!1&&r>0?.7+e.y*.2+t.x*.03:.43+e.y*.26+t.x*.025:1}function _h(i,e,t,r,n,a=i.opening?0:1,s){const o=jn(i.progress),c=o0(i,t,a),l=l0(i,e,t,a),u=jn((o-c)/l),p=i.rect,h=i.opening?p.x+e.x*p.width:i.anchor.x,d=i.opening?p.y+e.y*p.height:i.anchor.y,g=u*u,v=g*u,m=i.duration*l,f=2*v-3*g+1,w=-2*v+3*g,M=Math.hypot(h-r.x,d-r.y),_=Math.hypot(n.x,n.y),T=Math.min(.045,Math.max(.005,M*.15/Math.max(1,_))),R=Math.exp(-u*m/T),P=i.opening?(v-2*g+u)*m:T*(1-R)*(1-u)*(1-u),E=16*g*(1-u)*(1-u),y=i.opening&&(i.fresh!==!1||a<=0),S=y?(e.x-.5)*Math.min(p.width*.58,260)*(1-e.y*.3)*.65:0,U=(r.x+h)/2,I=i.viewportWidth??1e6,B=i.opening?Math.max(2-U,Math.min(I-2-U,S*(8/3)))*(3/8):0,G=y?(24+(1-Math.abs(e.x-.5)*2)*(.3+e.y*.7)*Math.min(88,p.height*.16))*.65:0,X=w*w*(.15+.85*w),W=i.tileCount??Math.ceil(p.width/4)*Math.ceil(p.height/4),V=t.y<16/W?.1*ml((o-c)*i.duration/.02):0,F=y?1-(1-X)*(1-V):X,K=i.opening?a+(1-a)*F:a*(1-u)*(1-u)*f*f,he=s??{x:0,y:0,alpha:0,born:!1,settled:!1,vx:0,vy:0};he.x=r.x*f+h*w+n.x*P+B*E,he.y=r.y*f+d*w+n.y*P+G*E,he.alpha=o<c?0:K,he.born=o>=c&&(i.opening||a>0),he.settled=i.opening&&u===1;const Le=(6*g-6*u)/m,Se=-Le,Ue=i.opening?3*g-4*u+1:R*(1-u)*(1-u)-2*T*(1-R)*(1-u)/m,De=32*u*(1-u)*(1-2*u)/m;return he.vx=o<c||u===1?0:r.x*Le+h*Se+n.x*Ue+B*De,he.vy=o<c||u===1?0:r.y*Le+d*Se+n.y*Ue+G*De,he}function c0(i,e,t=0,r=!0){const n=r?.695:.74,a=r?.265:.235;return t+(1-t)*jn((i-n)/a)}function xh(i,e,t){return e?t+(1-t)*ml(i/.22):t*(1-jn(i))**2*(1-ml(i))**2}const u0=`
float birthPhase(bool opening,bool fresh,float duration,vec2 seed,float alpha){return opening&&(fresh||alpha<=0.)?(.18/duration)*pow(seed.y,1./3.):0.;}
float travelPhase(bool opening,bool fresh,vec2 uv,vec2 seed,float alpha){return opening?((fresh||alpha<=0.)?.43+uv.y*.26+seed.x*.025:.7+uv.y*.2+seed.x*.03):1.;}
vec3 tilePose(float t,bool opening,bool fresh,float duration,vec4 r,vec2 anchor,vec2 uv,vec2 seed,vec2 from,vec2 velocity,float alpha,float viewport,float count){
 float birth=birthPhase(opening,fresh,duration,seed,alpha),travel=travelPhase(opening,fresh,uv,seed,alpha),u=clamp((t-birth)/travel,0.,1.);
 vec2 target=opening?r.xy+uv*r.zw:anchor;
 float u2=u*u,u3=u2*u,span=duration*travel,start=2.*u3-3.*u2+1.,end=-2.*u3+3.*u2,brake=min(.045,max(.005,length(target-from)*.15/max(1.,length(velocity)))),decay=exp(-u*span/brake);
 float momentum=opening?(u3-2.*u2+u)*span:brake*(1.-decay)*(1.-u)*(1.-u),bend=16.*u2*(1.-u)*(1.-u);
 vec2 curve=opening&&(fresh||alpha<=0.)?vec2((uv.x-.5)*min(r.z*.58,260.)*(1.-uv.y*.3),24.+(1.-abs(uv.x-.5)*2.)*(.3+uv.y*.7)*min(88.,r.w*.16))*.65:vec2(0.);
 float coverage=end*end*(.15+.85*end),pilot=seed.y<16./count?.10*ease((t-birth)*duration/.02):0.;
 float reveal=fresh||alpha<=0.?1.-(1.-coverage)*(1.-pilot):coverage;
 float a=opening?mix(alpha,1.,reveal):alpha*(1.-u)*(1.-u)*start*start;
 float middleX=(from.x+target.x)*.5;curve.x=opening?clamp(curve.x*(8./3.),2.-middleX,viewport-2.-middleX)*(3./8.):0.;
 return vec3(from*start+target*end+velocity*momentum+curve*bend,t<birth?0.:a);
}`,yh=i=>[...i.children].filter(e=>!e.hasAttribute("data-glass-copy")).map(e=>e.textContent).join("|")+"|"+[...i.querySelectorAll("input")].map(e=>`${e.value}:${e.checked}`).join("|")+"|"+[...i.querySelectorAll("[role=tab]")].map(e=>e.getAttribute("aria-selected")).join("|")+"|"+[...i.querySelectorAll("img")].filter(e=>!e.closest("[data-glass-copy]")).map(e=>Number(e.complete)).join("|"),Os=i=>({x:i.left,y:i.top,width:i.width,height:i.height});class h0{constructor(){this.available=!1,this.fields=new Map,this.metrics={requests:0,paints:0,retargets:0,active:0,tiles:0,draws:0,textureUploads:0,paintMs:0,maxPaintMs:0,frameMs:0,maxFrameMs:0,degradedTileSize:4,reusedPaints:0,geometryBuilds:0,geometryUploads:0,layoutRebuilds:0},this.sequence=0,this.paintSequence=0,this.clickedOrigin=null,this.origins=new WeakMap,this.paints=new WeakMap}captureOrigin(e){if(!this.available||!(e.target instanceof Element))return;const t=e.target.closest("button");if(!t)return;const r=t.getBoundingClientRect();r.width&&r.height&&(this.clickedOrigin=t,this.origins.set(t,{rect:Os(r),at:performance.now()}))}recentOrigin(){const e=this.clickedOrigin;return e&&performance.now()-(this.origins.get(e)?.at??-1/0)<200?e:null}enabled(e){return this.available&&!document.hidden&&!matchMedia("(prefers-reduced-motion:reduce),(forced-colors:active),(prefers-reduced-transparency:reduce)").matches&&!document.querySelector('[data-reduced="true"]')&&(!e.matches(".portfolio-nav-shell")||matchMedia("(max-width:899px)").matches)}key(e){return e.id||e.getAttribute("aria-labelledby")||e.className}fieldFor(e){return this.fields.get(this.key(e.closest("[data-pane-flight]")??e))}request(e,t,r){const n=this.key(e),a=this.fields.get(n);if(!this.enabled(e)){a&&this.restore(a),this.fields.delete(n);return}if(!t&&!a)return;const s=e.getBoundingClientRect();if(s.width<1||s.height<1){a&&!t&&(this.restore(a),a.flight={...a.flight,opening:!1,progress:0},a.elapsed=0,a.flight.duration=vh,a.epoch=++this.sequence);return}const o=r?.getBoundingClientRect(),c=r?this.origins.get(r):null,l=o?.width?Os(o):c&&performance.now()-c.at<200?c.rect:null,u=l?{x:l.x+l.width/2,y:l.y+l.height}:a?.flight.anchor??{x:s.left+s.width/2,y:s.top},p=a?.flight.opening?a.front:0,h=a?xh(a.flight.progress,a.flight.opening,a.fromAlpha):t?0:1;a&&this.restore(a);const d=e.matches(".experience-settings,.portfolio-nav-shell"),g=d?"paired":document.documentElement.dataset.colorTheme??"",v=yh(e),m=`${document.fonts.status}:${document.fonts.size}`,f=this.paints.get(e),w=f&&f.fontState===m&&!e.querySelector('.angry-slider-gesture:not([data-slider-phase="idle"])')&&f.content===v&&f.theme===g&&Math.abs(f.width-s.width)<1&&Math.abs(f.height-s.height)<1,M=performance.now(),_=w?f.paint:dn(e,s.width,s.height,f?.paint),T=d?w?f.lightPaint:dn(e,s.width,s.height,f?.lightPaint):void 0,R=w?f.paintVersion:++this.paintSequence;if(w)this.metrics.reusedPaints++;else{const E=performance.now()-M;this.metrics.paints++,this.metrics.paintMs+=E,this.metrics.maxPaintMs=Math.max(this.metrics.maxPaintMs,E),this.paints.set(e,{paint:_,lightPaint:T,paintVersion:R,content:v,theme:g,width:s.width,height:s.height,fontState:m})}const P={key:n,node:e,trigger:r??a?.trigger??null,epoch:++this.sequence,elapsed:0,flight:{rect:Os(s),anchor:u,opening:t,progress:0,duration:t?gh:vh,apertureWidth:Math.min(48,(l?.width??80)*.6)*.65,fresh:t&&!a,viewportWidth:innerWidth},fromFront:t?p:0,fromAlpha:h,front:t?p:0,paint:_,lightPaint:T,pane:e.matches("dialog"),themed:d,groups:[],controls:new Map,radius:parseFloat(getComputedStyle(e).borderTopLeftRadius)||0,layoutDirty:!0,paintDirty:!1,cleanup:()=>{},theme:g,paintVersion:R,content:v,fontState:m};if(!a&&this.fields.size>=4){const E=[...this.fields.values()].find(y=>!y.flight.opening)??this.fields.values().next().value;this.restore(E),this.fields.delete(E.key)}a&&this.metrics.retargets++,this.metrics.requests++,this.fields.set(n,P),t&&this.prepare(P)}prepare(e){const t=e.node;t.dataset.paneFlight=e.key,t.dataset.paneFlightState="opening",t.dataset.paneFront=String(e.front);const r=t.matches(".portfolio-nav-shell")?":scope > *":".settings-heading h2,.settings-body,.info-body,.help-heading > :not(button),.help-body,.index-heading h2,.projects-index-rows";e.groups=[...t.querySelectorAll(r)].map(o=>{const c=o.getBoundingClientRect();return{element:o,top:c.top-e.flight.rect.y,height:c.height,clip:o.style.clipPath,mask:o.style.maskImage,pointer:o.style.pointerEvents}});for(const o of t.querySelectorAll("button,a,input,[tabindex],.angry-slider-gesture,.settings-motion"))!o.matches(".pane-close")&&!o.closest("[data-glass-copy]")&&e.controls.set(o,{inert:o.inert,bottom:o.getBoundingClientRect().bottom-e.flight.rect.y});this.metrics.layoutRebuilds++,e.layoutDirty=!1;const n=()=>{e.paintDirty=!0,e.layoutDirty=!0},a=new ResizeObserver(()=>{e.layoutDirty=!0});a.observe(t);const s=new MutationObserver(n);s.observe(t,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["src","aria-selected","value","checked"]}),t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("load",n,!0),document.fonts.addEventListener("loadingdone",n),e.cleanup=()=>{a.disconnect(),s.disconnect(),t.removeEventListener("input",n),t.removeEventListener("change",n),t.removeEventListener("load",n,!0),document.fonts.removeEventListener("loadingdone",n)},this.paintFront(e)}paintFront(e){const t=e.front*e.flight.rect.height,r=Math.min(10,e.flight.rect.height-t);e.node.dataset.paneFront=String(e.front),e.node.style.setProperty("--pane-front-px",`${t}px`),e.node.style.setProperty("--pane-solid-px",`${Math.max(0,t-r)}px`),e.node.style.setProperty("--pane-hidden-px",`${Math.max(0,e.flight.rect.height-t)}px`);for(const n of e.groups){const a=Math.max(0,n.height-Math.max(0,t-n.top));n.element.style.clipPath=`inset(0 0 ${a}px 0)`,n.element.style.maskImage=`linear-gradient(to bottom, black ${Math.max(0,t-r-n.top)}px, transparent ${Math.max(0,t-n.top)}px)`,n.element.style.pointerEvents=t>n.top?"auto":"none"}for(const[n,a]of e.controls)n.inert=a.inert||a.bottom>t+.5}restore(e){for(const t of e.groups)t.element.style.clipPath=t.clip,t.element.style.maskImage=t.mask,t.element.style.pointerEvents=t.pointer;e.cleanup();for(const[t,r]of e.controls)t.inert=r.inert;delete e.node.dataset.paneFlight,delete e.node.dataset.paneFlightState,delete e.node.dataset.paneFront,e.node.style.removeProperty("--pane-front-px"),e.node.style.removeProperty("--pane-solid-px"),e.node.style.removeProperty("--pane-hidden-px"),e.groups=[],e.controls.clear()}step(e){const t=performance.now();for(const[n,a]of this.fields){if(a.flight.progress===1&&a.flight.opening){(!a.node.isConnected||a.node instanceof HTMLDialogElement&&!a.node.open)&&(this.restore(a),this.fields.delete(n));continue}if(a.flight.opening&&a.node.isConnected){const s=a.node.getBoundingClientRect(),o=a.flight.rect,c=Math.abs(s.width-o.width)>1||Math.abs(s.height-o.height)>1,l=a.themed?"paired":document.documentElement.dataset.colorTheme??"",u=l!==a.theme;if(a.flight.viewportWidth=innerWidth,a.trigger?.isConnected&&a.trigger.getClientRects().length){const p=a.trigger.getBoundingClientRect();a.flight.anchor={x:p.left+p.width/2,y:p.bottom}}if(s.width>0&&s.height>0){if(c){const g=a.front;a.fromAlpha=xh(a.flight.progress,!0,a.fromAlpha),this.restore(a),a.fromFront=g,a.elapsed=0,a.flight={...a.flight,rect:Os(s),progress:0,duration:Math.max(.2,gh*(1-g)),fresh:!1,viewportWidth:innerWidth},a.epoch=++this.sequence,this.metrics.retargets++,this.prepare(a)}else a.flight.rect.x=s.left,a.flight.rect.y=s.top;const p=a.paintDirty?yh(a.node):a.content,h=`${document.fonts.status}:${document.fonts.size}`,d=a.paintDirty&&(p!==a.content||h!==a.fontState||!!a.node.querySelector('.angry-slider-gesture:not([data-slider-phase="idle"])'));if(c||u||d){const g=performance.now();a.paint=dn(a.node,s.width,s.height,a.paint,a.themed?"dark":void 0),a.themed&&(a.lightPaint=dn(a.node,s.width,s.height,a.lightPaint)),a.paintVersion=++this.paintSequence,a.theme=l,a.content=p,a.paintDirty=!1,a.fontState=h,this.paints.set(a.node,{paint:a.paint,lightPaint:a.lightPaint,paintVersion:a.paintVersion,content:p,theme:l,width:s.width,height:s.height,fontState:a.fontState}),this.metrics.paints++;const v=performance.now()-g;this.metrics.paintMs+=v,this.metrics.maxPaintMs=Math.max(this.metrics.maxPaintMs,v)}if(a.layoutDirty){for(const g of a.groups){const v=g.element.getBoundingClientRect();g.top=v.top-s.top,g.height=v.height}for(const[g,v]of a.controls)v.bottom=g.getBoundingClientRect().bottom-s.top;a.layoutDirty=!1,this.metrics.layoutRebuilds++}a.paintDirty=!1}}document.hidden||!this.enabled(a.node)?a.elapsed=a.flight.duration:a.elapsed+=Math.max(0,Math.min(.05,e)),a.flight.progress=Math.min(1,a.elapsed/a.flight.duration),a.flight.opening&&(a.front=c0(a.flight.progress,!0,a.fromFront,a.flight.fresh!==!1),this.paintFront(a)),a.flight.progress===1&&(this.restore(a),a.flight.opening||this.fields.delete(n))}this.metrics.active=[...this.fields.values()].filter(n=>n.flight.progress<1).length;const r=performance.now()-t;this.metrics.frameMs=r,this.metrics.maxFrameMs=Math.max(this.metrics.maxFrameMs,r)}finish(){for(const e of this.fields.values())this.restore(e);this.fields.clear(),this.clickedOrigin=null,this.origins=new WeakMap,this.metrics.active=0}}const zt=new h0,Or=32768,pn=1024,d0=2048,p0=()=>({x:0,y:0,alpha:0,born:!1,settled:!1,vx:0,vy:0});class f0{constructor(e){this.scene=new Mi,this.geometry=new nu,this.canvas=document.createElement("canvas"),this.fields=new Map,this.geometryKey="",this.compilation=null,this.pose=p0(),this.uv={x:0,y:0},this.seed={x:0,y:0},this.origin={x:0,y:0},this.speed={x:0,y:0},this.canvas.width=this.canvas.height=d0,this.texture=new Ms(this.canvas),this.texture.colorSpace=Mr,this.texture.generateMipmaps=!1,this.texture.minFilter=this.texture.magFilter=Pt;const t=new ir(1,1);this.geometry.index=t.index,this.geometry.setAttribute("position",t.attributes.position),this.geometry.setAttribute("uv",t.attributes.uv),this.attributes={aTarget:new fr(new Float32Array(Or*2),2),aSeed:new fr(new Float32Array(Or*2),2),aFrom:new fr(new Float32Array(Or*2),2),aVelocity:new fr(new Float32Array(Or*2),2),aAlpha:new fr(new Float32Array(Or),1),aField:new fr(new Float32Array(Or),1)};for(const[n,a]of Object.entries(this.attributes))this.geometry.setAttribute(n,a.setUsage(uc));this.geometry.instanceCount=0,this.uniforms={...e,uPaint:{value:this.texture},uThemeMix:{value:0},uRects:{value:Array.from({length:4},()=>new at)},uAnchors:{value:Array.from({length:4},()=>new Ce)},uStates:{value:Array.from({length:4},()=>new at)},uFresh:{value:[0,0,0,0]},uCells:{value:Array.from({length:4},()=>new Ce)},uPaintRects:{value:Array.from({length:4},()=>new at)},uLightPaintRects:{value:Array.from({length:4},()=>new at)},uFilm:{value:Array.from({length:4},()=>new at)},uRadius:{value:[0,0,0,0]}},this.material=new eu({uniforms:this.uniforms,glslVersion:ja,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`precision highp float;in vec3 position;in vec2 aTarget,aSeed,aFrom,aVelocity;in float aField,aAlpha;uniform vec2 uSize,uCells[4],uAnchors[4];uniform vec4 uRects[4],uStates[4];uniform float uFresh[4];out vec2 vTarget;flat out float vField;out float vAlpha;
      float ease(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
      ${u0}
      void main(){int i=int(aField);vec4 r=uRects[i],state=uStates[i];bool opening=state.y>.5;
       vec3 pose=tilePose(state.x,opening,uFresh[i]>.5,state.w,r,uAnchors[i],aTarget,aSeed,aFrom,aVelocity,aAlpha,uSize.x,(r.z/uCells[i].x)*(r.w/uCells[i].y));
       vec2 p=pose.xy+vec2(position.x,-position.y)*uCells[i];gl_Position=vec4(p.x/uSize.x*2.-1.,1.-p.y/uSize.y*2.,0.,1.);
       vTarget=aTarget+vec2(position.x,-position.y)*uCells[i]/r.zw;vField=aField;vAlpha=pose.z;}`,fragmentShader:`precision highp float;out vec4 outColor;uniform sampler2D uBase,uPaint;uniform vec2 uSize;uniform vec4 uRects[4],uStates[4],uPaintRects[4],uLightPaintRects[4],uFilm[4];uniform float uRadius[4],uThemeMix;in vec2 vTarget;flat in float vField;in float vAlpha;
      vec3 toLinear(vec3 c){return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));}
      vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(max(c,vec3(0.)),vec3(1./2.4))-.055,step(vec3(.0031308),c));}
      void main(){if(vAlpha<.001)discard;int i=int(vField);vec4 r=uRects[i],paintRect=uPaintRects[i];
       // Coverage is cut in final-cell coordinates only after every cell at the
       // native front has arrived. No center-based row discard leaves half cells.
       float seam=min(10.,(1.-uStates[i].z)*r.w);
       float takeover=uStates[i].y>.5?(seam>.001?smoothstep(0.,seam,(uStates[i].z-vTarget.y)*r.w):float(vTarget.y<uStates[i].z)):0.;
       if(takeover>.999)discard;
       vec2 local=(vTarget-.5)*r.zw,q=abs(local)-r.zw*.5+uRadius[i];float d=length(max(q,0.))+min(max(q.x,q.y),0.)-uRadius[i];if(d>0.)discard;
       vec2 samplePoint=r.xy+r.zw*.5+local/1.095;vec3 backdrop=texture(uBase,vec2(samplePoint.x/uSize.x,1.-samplePoint.y/uSize.y)).rgb;
       vec3 glass=mix(backdrop,uFilm[i].rgb,uFilm[i].a);vec2 paintUv=(paintRect.xy+vTarget*paintRect.zw)/2048.;vec4 foreground=texture(uPaint,vec2(paintUv.x,1.-paintUv.y));
       vec4 lightRect=uLightPaintRects[i];vec2 lightUv=(lightRect.xy+vTarget*lightRect.zw)/2048.;vec4 lightPaint=texture(uPaint,vec2(lightUv.x,1.-lightUv.y));
       foreground=vec4(toSRGB(mix(toLinear(foreground.rgb),toLinear(lightPaint.rgb),uThemeMix)),mix(foreground.a,lightPaint.a,uThemeMix));
       outColor=vec4(mix(glass,foreground.rgb,foreground.a),vAlpha*(1.-takeover));}`});const r=new _t(this.geometry,this.material);r.frustumCulled=!1,this.scene.add(r)}snapshot(e){return{...e.flight,rect:{...e.flight.rect},anchor:{...e.flight.anchor}}}sync(e){this.uniforms.uThemeMix.value=0;const t=[...zt.fields.values()].filter(c=>c.flight.progress<1).slice(-4);if(!t.length)return this.geometry.instanceCount=0,this.fields.clear(),this.geometryKey="",zt.metrics.tiles=0,0;const r=t.reduce((c,l)=>c+l.flight.rect.width*l.flight.rect.height,0),n=Math.max(4,Math.ceil(Math.sqrt(r/Or))),a=t.map(c=>`${c.key}:${c.epoch}`).join("|"),s=this.canvas.getContext("2d");let o=!1;if(a!==this.geometryKey){const c=new Map;let l=0;zt.metrics.geometryBuilds++,t.forEach((u,p)=>{const h=this.fields.get(u.key),d=u.flight.rect,g=t.slice(p+1).reduce((I,B)=>{const G=this.fields.get(B.key);return I+(G?G.cols*G.rows:0)},0),v=Math.max(1,Or-(4-t.length)-l-g);let m=n;if(!h)for(;Math.ceil(d.width/m)*Math.ceil(d.height/m)>v;)m++;const f=h?.cols??Math.ceil(d.width/m),w=h?.rows??Math.ceil(d.height/m),M=f*w;if(l+M>Or)throw new Error("Pane tile capacity invariant exceeded");const _=h&&h.epoch===u.epoch,T=_?h.from:h?.spareFrom??new Float32Array(M*2),R=_?h.velocity:h?.spareVelocity??new Float32Array(M*2),P=_?h.alpha:h?.spareAlpha??new Float32Array(M),E=_?h.spareFrom:h?.from??new Float32Array(M*2),y=_?h.spareVelocity:h?.velocity??new Float32Array(M*2),S=_?h.spareAlpha:h?.alpha??new Float32Array(M),U=h?.seeds??new Float32Array(M*2);for(let I=0;I<M;I++){if(this.uv.x=(I%f+.5)/f,this.uv.y=(Math.floor(I/f)+.5)/w,!h){const G=s0(I);U[I*2]=G.x,U[I*2+1]=G.y}if(this.seed.x=U[I*2],this.seed.y=U[I*2+1],!_){this.origin.x=u.flight.opening?u.flight.anchor.x+(this.seed.x-.5)*(u.flight.apertureWidth??36):d.x+this.uv.x*d.width,this.origin.y=u.flight.opening?u.flight.anchor.y+3:d.y+this.uv.y*d.height,this.speed.x=this.speed.y=0;let G=u.flight.opening?0:1;h&&(this.origin.x=h.from[I*2],this.origin.y=h.from[I*2+1],this.speed.x=h.velocity[I*2],this.speed.y=h.velocity[I*2+1],_h(h.flight,this.uv,this.seed,this.origin,this.speed,h.alpha[I],this.pose),this.origin.x=this.pose.x,this.origin.y=this.pose.y,this.speed.x=this.pose.vx,this.speed.y=this.pose.vy,G=h.flight.opening&&this.uv.y<h.nativeFront?1:this.pose.alpha),T[I*2]=this.origin.x,T[I*2+1]=this.origin.y,R[I*2]=this.speed.x,R[I*2+1]=this.speed.y,P[I]=G}const B=l+I;this.attributes.aTarget.setXY(B,this.uv.x,this.uv.y),this.attributes.aSeed.setXY(B,this.seed.x,this.seed.y),this.attributes.aFrom.setXY(B,T[I*2],T[I*2+1]),this.attributes.aVelocity.setXY(B,R[I*2],R[I*2+1]),this.attributes.aAlpha.setX(B,P[I]),this.attributes.aField.setX(B,p)}c.set(u.key,{epoch:u.epoch,cols:f,rows:w,from:T,velocity:R,alpha:P,spareFrom:E,spareVelocity:y,spareAlpha:S,seeds:U,flight:{...this.snapshot(u),tileCount:M},nativeFront:u.front,paintVersion:h?.paintVersion??-1,paint:h?.paint??u.paint,slot:h?.slot??-1}),l+=M}),this.fields=c,this.geometry.instanceCount=l;for(const u of Object.values(this.attributes))u.needsUpdate=!0;this.geometryKey=a,zt.metrics.geometryUploads++}return zt.metrics.degradedTileSize=n,t.forEach((c,l)=>{const u=c.flight.rect,p=this.fields.get(c.key);if(p.slot!==l||p.paintVersion!==c.paintVersion||p.paint!==c.paint){const d=l%2*pn,g=Math.floor(l/2)*pn;s.clearRect(d,g,pn,pn);const v=Math.min(1,pn/(c.paint.width*(c.lightPaint?2:1)),pn/c.paint.height),m=c.paint.width*v,f=c.paint.height*v;s.drawImage(c.paint,d,g,m,f),this.uniforms.uPaintRects.value[l].set(d,g,m,f),c.lightPaint&&s.drawImage(c.lightPaint,d+m,g,m,f),this.uniforms.uLightPaintRects.value[l].set(d+(c.lightPaint?m:0),g,m,f),p.slot=l,p.paintVersion=c.paintVersion,p.paint=c.paint,o=!0}this.uniforms.uRects.value[l].set(u.x,u.y,u.width,u.height),this.uniforms.uAnchors.value[l].set(c.flight.anchor.x,c.flight.anchor.y),this.uniforms.uStates.value[l].set(c.flight.progress,Number(c.flight.opening),c.front,c.flight.duration),this.uniforms.uCells.value[l].set(u.width/p.cols,u.height/p.rows),this.uniforms.uFresh.value[l]=+(c.flight.fresh!==!1);const h=al(tt.accent).map((d,g)=>d*[50,45,61][g]);this.uniforms.uFilm.value[l].set(h[0]/255,h[1]/255,h[2]/255,.47),this.uniforms.uRadius.value[l]=Math.min(c.radius,u.width/2,u.height/2),zt.metrics.degradedTileSize=Math.max(zt.metrics.degradedTileSize,u.width/p.cols,u.height/p.rows),p.flight={...this.snapshot(c),tileCount:p.cols*p.rows},p.nativeFront=c.front}),o&&(this.texture.needsUpdate=!0,zt.metrics.textureUploads++),zt.metrics.tiles=this.geometry.instanceCount,this.geometry.instanceCount}sample(e,t){const r=this.fields.get(e);return r?t.slice(0,256).filter(n=>n>=0&&n<r.alpha.length).map(n=>{const a={x:(n%r.cols+.5)/r.cols,y:(Math.floor(n/r.cols)+.5)/r.rows},s={x:r.seeds[n*2],y:r.seeds[n*2+1]},o={x:r.from[n*2],y:r.from[n*2+1]},c={x:r.velocity[n*2],y:r.velocity[n*2+1]};return{index:n,uv:a,seed:s,from:o,velocity:c,fromAlpha:r.alpha[n],native:a.y<r.nativeFront,pose:_h(r.flight,a,s,o,c,r.alpha[n])}}):[]}prepare(e,t){const r=this.compilation??e.compileAsync(this.scene,t).then(()=>{});return this.compilation=r,r}dispose(){const e=()=>{this.geometry.dispose(),this.material.dispose(),this.texture.dispose(),this.fields.clear()};this.compilation?this.compilation.then(e,e):e()}}let yt,Bs,ii,fn;const zs=new Ce,Mh=new yi;let mn=0,gl=0,Ai=!1,vl=!1;const _l=matchMedia("(prefers-reduced-motion:reduce),(forced-colors:active),(prefers-reduced-transparency:reduce),(prefers-contrast:more)"),Ri=()=>_l.matches||document.body.dataset.reduced==="true";function m0(){Ri()&&ni()}function ni(){cancelAnimationFrame(mn),mn=0,zt.finish(),yt&&(yt.domElement.hidden=!0)}function Sh(){yt||(yt=new on({alpha:!0,antialias:!1}),yt.domElement.setAttribute("aria-hidden","true"),yt.domElement.className="sheet-effects",yt.domElement.hidden=!0,document.body.append(yt.domElement),yt.setClearColor(0,0),yt.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),ni(),zt.available=!1,Ai=!0}),yt.domElement.addEventListener("webglcontextrestored",()=>{Ai=!1,zt.available=!0}),ii=document.createElement("canvas"),fn=new Ms(ii),fn.generateMipmaps=!1,fn.minFilter=Pt,Bs=new f0({uBase:{value:fn},uSize:{value:zs},uPixelRatio:{value:new Ce(1,1)}}),zt.available=!0)}function g0(){if(!(yt||Ai||document.hidden||Ri()))try{Sh(),yt&&Bs.prepare(yt,Mh).catch(()=>{})}catch{Ai=!0,ni()}}function v0(){if(vl||yt||Ai||Ri())return;vl=!0;const i=()=>{vl=!1,g0()};typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:1400}):setTimeout(i,250)}function _0(){const i=innerWidth,e=innerHeight;ii.width=Math.min(3840,Math.round(i*Math.min(devicePixelRatio,2))),ii.height=Math.max(1,Math.round(e*ii.width/i));const t=ii.getContext("2d");t.scale(ii.width/i,ii.height/e);let r=!1;if(window.dispatchEvent(new CustomEvent("amethyst-capture-stage",{detail:{ctx:t,paintPane:dn,handled:()=>{r=!0}}})),r){fn.needsUpdate=!0;return}const n=121*Math.PI/180,a=Math.sin(n),s=-Math.cos(n),o=document.body.offsetHeight,c=o/2-scrollY,l=(Math.abs(a)*i+Math.abs(s)*o)/2,u=t.createLinearGradient(i/2-a*l,c-s*l,i/2+a*l,c+s*l);for(const[v,m]of[[.05,"#131315"],[.42,"#252427"],[.65,"#181819"],[1,"#121213"]])u.addColorStop(v,m);t.fillStyle=u,t.fillRect(0,0,i,e);const p=document.querySelector("#banner"),h=p.getBoundingClientRect();let d=!1;const g=v=>{v instanceof HTMLImageElement&&(!v.complete||!v.naturalWidth)||(t.drawImage(v,h.x,h.y,h.width,h.height),d=!0)};if(window.dispatchEvent(new CustomEvent("amethyst-paint-banner",{detail:g})),!d){const v=p.querySelector("img");v&&g(v)}for(const v of document.querySelectorAll(".wordmark,.segment,.caption")){const m=v.getBoundingClientRect();m.width&&m.height&&t.drawImage(dn(v,m.width,m.height),m.x,m.y,m.width,m.height)}fn.needsUpdate=!0}function bh(i){if(mn=0,!yt||document.hidden||Ri()){ni();return}(zs.x!==innerWidth||zs.y!==innerHeight)&&(zs.set(innerWidth,innerHeight),yt.setPixelRatio(Math.min(devicePixelRatio,1.5)),yt.setSize(innerWidth,innerHeight,!1)),zt.step(Math.max(0,(i-gl)/1e3)),gl=i,Bs.sync(0)?(yt.domElement.hidden=!1,yt.render(Bs.scene,Mh),mn=requestAnimationFrame(bh)):yt.domElement.hidden=!0}function Eh(i,e,t){if(Ai||document.hidden||Ri())return ni(),!1;try{Sh(),_0();for(const r of i.querySelectorAll(".glass"))zt.request(r,e,t);return mn||(gl=performance.now(),mn=requestAnimationFrame(bh)),!0}catch(r){return Ai=!0,ni(),console.warn("Glass motion fallback",r),!1}}document.addEventListener("visibilitychange",()=>{document.hidden&&ni()}),_l.addEventListener("change",()=>{_l.matches&&ni()});const x0="http://www.w3.org/2000/svg";function ks(i,e){const t=document.createElementNS(x0,i);for(const[r,n]of Object.entries(e))t.setAttribute(r,n);return t}function y0(i,e,t){const r=document.createElement("canvas");r.width=i,r.height=e;const n=r.getContext("2d"),a=n.createImageData(i,e);for(let s=0;s<e;s++)for(let o=0;o<i;o++){const c=o+.5-i/2,l=s+.5-e/2,u=Math.abs(c)-i/2+t,p=Math.abs(l)-e/2+t,h=Math.max(u,0),d=Math.max(p,0),g=Math.hypot(h,d),v=t-g-Math.min(Math.max(u,p),0),m=Math.pow(Math.max(0,1-Math.max(v,0)/25),1.8),f=g?h/g:+(u>p),w=g?d/g:+(p>=u),M=4*(s*i+o);a.data[M]=128+Math.sign(c)*f*m*112,a.data[M+1]=128+Math.sign(l)*w*m*112,a.data[M+2]=128,a.data[M+3]=255}return n.putImageData(a,0,0),r.toDataURL()}function M0(i){if(!CSS.supports("backdrop-filter","url(#glass) blur(5px)"))return;let e=document.getElementById("amethyst-optics");e||(e=ks("svg",{id:"amethyst-optics",width:0,height:0,"aria-hidden":"true"}),e.style.position="absolute",document.body.append(e));for(const[t,r]of[...i.querySelectorAll(".glass")].entries()){const n=r.offsetWidth,a=r.offsetHeight;if(!n||!a||r.dataset.optics===n+"x"+a)continue;const s="amethyst-lens-"+(r.id||t),o=ks("filter",{id:s,x:0,y:0,width:"100%",height:"100%","color-interpolation-filters":"sRGB"}),c=Math.min(parseFloat(getComputedStyle(r).borderRadius),a/2);o.append(ks("feImage",{href:y0(n,a,c),width:"100%",height:"100%",preserveAspectRatio:"none",result:"normal"})),o.append(ks("feDisplacementMap",{in:"SourceGraphic",in2:"normal",scale:28,xChannelSelector:"R",yChannelSelector:"G"})),document.getElementById(s)?.remove(),e.append(o),r.style.backdropFilter="url(#"+s+") blur(9px) saturate(1.32)",r.dataset.optics=n+"x"+a}}const S0=[20,34,52],b0=[36,56,80];function E0(i,e){const t=matchMedia("(prefers-reduced-motion: reduce)"),r=matchMedia("(forced-colors:active),(prefers-reduced-transparency:reduce),(prefers-contrast:more)"),n=()=>({motion:!t.matches,lens:!0,speed:1,radius:1,sound:!0}),a="amethyst.display.v2";let s=n(),o=!1;try{const E=JSON.parse(localStorage.getItem(a));if(E){for(const y of["motion","lens","sound"])typeof E[y]=="boolean"&&(s[y]=E[y]);for(const y of["speed","radius"])[0,1,2].includes(E[y])&&(s[y]=E[y]);o=E.motionExplicit===!0,o||(s.motion=!t.matches)}}catch{}const c=document.querySelector("#info-panel"),l=document.querySelector("#about-trigger"),u=document.querySelector("#sound-toggle"),p=new Map([[c,l]]);let h=null,d,g=null;const v=E=>!E.closest(".controls, #sound-toggle");function m(){try{localStorage.setItem(a,JSON.stringify({...s,motionExplicit:o}))}catch{}}function f(){hv(s.sound),u.setAttribute("aria-pressed",String(!s.sound)),u.title=s.sound?"Mute sound and music":"Unmute sound and music",u.setAttribute("aria-label",u.title),document.body.dataset.reduced=String(!s.motion||t.matches),_(),v0(),i({...s,pxSpeed:S0[s.speed],pxRadius:b0[s.radius]})}function w(E){r.matches||M0(E)}function M(E,y){const S=y.getBoundingClientRect(),U=y.closest(".controls").getBoundingClientRect(),I=S.bottom+14;E.style.setProperty("--sheet-top",`${I-U.top}px`),E.style.setProperty("--sheet-right",`${U.right-S.right}px`);const B=(visualViewport?.offsetTop??0)+(visualViewport?.height??innerHeight);E.style.setProperty("--sheet-space",`${Math.max(32,B-I-8)}px`)}function _(){m0(),Ri()&&d?.cancel()}function T({focus:E=!0,cue:y=!0,animate:S=!0}={}){if(!h)return;const U=h,I=p.get(U);h=null,d?.cancel(),S&&Eh(U,!1,I),I.setAttribute("aria-expanded","false"),(E||U.contains(document.activeElement))&&I.focus({preventScroll:!0}),U.inert=!0,U.hidden=!0,y&&Er("close"),e(),window.dispatchEvent(new Event("amethyst-panel"))}function R(E,y){if(Wn(),h===E)return T();T({focus:!1,cue:!1}),h=E,E.hidden=!1,E.inert=!1,E.scrollTop=0,y.setAttribute("aria-expanded","true"),e(),window.dispatchEvent(new Event("amethyst-panel")),M(E,y),w(E),E.focus({preventScroll:!0}),!Eh(E,!0,y)&&!Ri()&&(d=E.animate([{opacity:0},{opacity:1}],{duration:230,easing:"ease-out"})),Er("open")}for(const[E,y]of p)y.disabled=!1,y.onclick=()=>R(E,y),new ResizeObserver(()=>{E.hidden||w(E)}).observe(E);c.querySelector(".close-bio").onclick=()=>T(),u.disabled=!1,u.onclick=()=>{s.sound=!s.sound,m(),f(),s.sound&&(Wn(),Er("unmute"))},document.addEventListener("keydown",E=>{E.key==="Escape"&&h&&(E.preventDefault(),T())}),document.addEventListener("click",E=>{h&&v(E.target)&&T({focus:!1})}),document.addEventListener("touchstart",E=>{g=h&&v(E.target)&&E.touches.length===1?E.touches[0]:null},{passive:!0}),document.addEventListener("touchmove",E=>{if(!g)return;const y=E.touches[0];Math.hypot(y.clientX-g.clientX,y.clientY-g.clientY)>8&&(g=null)},{passive:!0}),document.addEventListener("touchcancel",()=>{g=null},{passive:!0}),document.addEventListener("touchend",E=>{!g||!h||g.identifier!==E.changedTouches[0]?.identifier||(g=null,E.cancelable&&E.preventDefault(),T({focus:!1}))},{passive:!1}),document.addEventListener("focusin",E=>{h&&E.target.matches(":focus-visible")&&v(E.target)&&T({focus:!1})});const P=()=>{h&&M(h,p.get(h))};return addEventListener("resize",P),new ResizeObserver(P).observe(l),document.fonts.addEventListener("loadingdone",P),visualViewport?.addEventListener("resize",P),addEventListener("pagehide",()=>T({focus:!1,cue:!1,animate:!1})),t.addEventListener("change",()=>{o||(s.motion=!t.matches),f()}),r.addEventListener("change",()=>{_();for(const E of document.querySelectorAll(".glass"))E.style.backdropFilter="",delete E.dataset.optics;h&&w(h)}),f(),()=>T({focus:!1,cue:!1})}const Ut=document.querySelector("#banner"),w0=document.querySelector("#lens"),xl={x:0,y:0,radius:0},yl=matchMedia("(hover: hover) and (pointer: fine)");let Tr,Zn,Zt,ai=0;const T0=()=>document.querySelector("#about-trigger").ariaExpanded==="true";function gn(){const i=ai<.98||T0();function e(){xl.radius=0,Ut.classList.remove("hover"),Zt?.redraw()}if(Ut.classList.toggle("lens-suspended",i),!Zn||!Tr.lens||!yl.matches||i){e();return}const t=Ut.getBoundingClientRect(),r=Zn.x-t.left,n=Zn.y-t.top;if(r<0||n<0||r>t.width||n>t.height){e();return}w0.style.transform=`translate(${r-Tr.pxRadius}px,${n-Tr.pxRadius}px)`,Ut.classList.add("hover"),Object.assign(xl,{x:r,y:t.height-n,radius:Tr.pxRadius}),Zt?.redraw()}const Jn=Ut.querySelector("img"),A0=Ut.querySelector("source"),wh=xv(Ut,Jn);function Th(){const i=Cs(Ut.clientWidth,Ut.clientHeight);Object.assign(Jn.style,{top:i.top+"px",left:i.left+"px",width:sl*i.scale+"px",height:ol*i.scale+"px"})}new ResizeObserver(Th).observe(Ut),addEventListener("amethyst-palette",()=>{A0.srcset=Qr("compact/"+tt.id+"-poster.webp"),Jn.src=Qr(tt.id+"-poster.webp"),Jn.alt="A monochrome portrait with "+tt.label.toUpperCase()+" / CACHYOS lettering sweeping behind the figure.",Zt?.redraw()}),Th();function Br(){Zn=null,gn()}const R0=E0(i=>{Tr=i,Ut.style.setProperty("--r",`${i.pxRadius}px`),gn(),Zt?.syncPreferences(),window.dispatchEvent(new Event("amethyst-preferences"))},Br);Ut.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||!yl.matches)return Br();Zn={x:i.clientX,y:i.clientY},gn()}),Ut.addEventListener("pointerleave",Br),Ut.addEventListener("pointercancel",Br),addEventListener("blur",Br),addEventListener("pagehide",Br),addEventListener("scroll",gn,{passive:!0}),yl.addEventListener("change",Br),addEventListener("amethyst-before-pane-snapshot",()=>Zt?.redraw()),addEventListener("amethyst-paint-banner",i=>{let e=!1;Zt?.snapshot(t=>{e=!0,i.detail(t)}),e||(i.detail(Jn),wh.width>0&&i.detail(wh))});const Ah=()=>ai>0,Ci=document.querySelector(".portrait-retry");let Kn=!1,zr=!1,Qn=!1,Ml=!1;function Li(){Br(),Zt?.syncPreferences(),Ci.hidden=ai<.99||!zr&&Tr.motion,Ci.textContent=zr?"Retry portrait":Kn?"Pause portrait":"Play portrait",!(Zt||Qn||zr||!Ah()&&!(Ml&&Tr.motion))&&(Qn=!0,yv(Ut,()=>({...Tr,motion:Tr.motion||Kn,portraitActive:!!Ah(),gate:ai}),gn,xl).then(i=>{Zt=i,Qn=!1,Li()}).catch(i=>{Qn=!1,zr=!0,Ci.hidden=ai<.99,console.warn("Amethyst poster active:",i.message)}))}Ut.addEventListener("portrait-restored",()=>{zr=!1,Li()}),Ut.addEventListener("portrait-unavailable",()=>{zr=!0,Ci.textContent="Retry portrait",Ci.hidden=ai<.99}),Ci.addEventListener("click",()=>{Er(zr?"retry":Kn?"pause":"play"),Kn=!Kn||zr,zr=!1,Ci.textContent="Play portrait",Zt&&Zt.retry(),Li()}),addEventListener("amethyst-gate",i=>{ai=i.detail,gn(),Zt?.redraw(),!Zt&&!Qn&&ai>0&&Li()}),addEventListener("amethyst-prepare-portrait",i=>{Ml=i.detail,Ml&&Li()}),addEventListener("amethyst-clear-trail",Br),addEventListener("amethyst-chapter",Li),addEventListener("amethyst-panel",Li),n0({dismissPanels:R0,allowMotion:()=>Tr.motion});
