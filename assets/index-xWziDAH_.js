(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const wa="180",kc=0,Co=1,Hc=2,qo=1,Vc=2,xn=3,zn=0,Ft=1,yn=2,bn=0,vi=1,Gr=2,Po=3,Lo=4,Gc=5,Zn=100,Wc=101,Xc=102,qc=103,Yc=104,$c=200,Kc=201,Zc=202,Jc=203,Us=204,Ns=205,Qc=206,jc=207,eu=208,tu=209,nu=210,iu=211,ru=212,su=213,au=214,Fs=0,Os=1,Bs=2,xi=3,zs=4,ks=5,Hs=6,Vs=7,Yo=0,ou=1,lu=2,On=0,cu=1,uu=2,hu=3,du=4,fu=5,pu=6,mu=7,$o=300,yi=301,Mi=302,Gs=303,Ws=304,Qr=306,Wr=1e3,Qn=1001,Xs=1002,Yt=1003,gu=1004,Tr=1005,Dt=1006,Rs=1007,Sn=1008,Tn=1009,Ko=1010,Zo=1011,ir=1012,Ta=1013,ni=1014,mn=1015,Ti=1016,Aa=1017,Ra=1018,rr=1020,Jo=35902,Qo=35899,jo=1021,el=1022,sn=1023,sr=1026,ar=1027,Ca=1028,Pa=1029,tl=1030,La=1031,Da=1033,Pr=33776,Lr=33777,Dr=33778,Ir=33779,qs=35840,Ys=35841,$s=35842,Ks=35843,Zs=36196,Js=37492,Qs=37496,js=37808,ea=37809,ta=37810,na=37811,ia=37812,ra=37813,sa=37814,aa=37815,oa=37816,la=37817,ca=37818,ua=37819,ha=37820,da=37821,fa=36492,pa=36494,ma=36495,ga=36283,va=36284,_a=36285,xa=36286,vu=3200,_u=3201,xu=0,yu=1,Mn="",Qt="srgb",Si="srgb-linear",Xr="linear",ut="srgb",fi=7680,Do=519,Mu=512,Su=513,Eu=514,nl=515,bu=516,wu=517,Tu=518,Au=519,Io=35044,Ru=35048,ya="300 es",gn=2e3,qr=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const Ur=Math.PI/180,Yr=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function il(i,e){return(i%e+e)%e}function Ah(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Rh(i,e,t){return i!==e?(t-i)/(e-i):0}function Nr(i,e,t){return(1-t)*i+t*e}function Ch(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))}function Ph(i,e=1){return e-Math.abs(il(i,e*2)-e)}function Lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ih(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uh(i,e){return i+Math.random()*(e-i)}function Nh(i){return i*(.5-Math.random())}function Fh(i){i!==void 0&&(El=i);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Oh(i){return i*Ur}function Bh(i){return i*Yr}function zh(i){return(i&i-1)===0&&i!==0}function kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cs={DEG2RAD:Ur,RAD2DEG:Yr,generateUUID:hr,clamp:Je,euclideanModulo:il,mapLinear:Ah,inverseLerp:Rh,lerp:Nr,damp:Ch,pingpong:Ph,smoothstep:Lh,smootherstep:Dh,randInt:Ih,randFloat:Uh,randFloatSpread:Nh,seededRandom:Fh,degToRad:Oh,radToDeg:Bh,isPowerOfTwo:zh,ceilPowerOfTwo:kh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Vh,normalize:Bt,denormalize:Zi};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*v,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,f*T);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const _=o*T;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new O,bl=new dr;class qe{constructor(e,t,n,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],T=r[1],y=r[4],_=r[7],E=r[2],A=r[5],R=r[8];return s[0]=a*v+o*T+l*E,s[3]=a*m+o*y+l*A,s[6]=a*f+o*_+l*R,s[1]=c*v+u*T+h*E,s[4]=c*m+u*y+h*A,s[7]=c*f+u*_+h*R,s[2]=d*v+p*T+g*E,s[5]=d*m+p*y+g*A,s[8]=d*f+p*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new qe;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=Ma("canvas");return i.style.display="block",i}const wl={};function $r(i){i in wl||(wl[i]=!0,console.warn(i))}function Gh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Tl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wh(){const i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mn?Xr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const it=Wh();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Ma("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xh=0;class Ia{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ya(r[a].image)):s.push(Ya(r[a]))}else s=Ya(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;const $a=new O;class Ct extends Ai{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Qn,r=Qn,s=Dt,a=Sn,o=sn,l=Tn,c=Ct.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=hr(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$o)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=$o;Ct.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(p+1)/2,E=(f+1)/2,A=(u+d)/4,R=(h+v)/4,w=(g+m)/4;return y>_&&y>E?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=R/n):_>E?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=A/r,s=w/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=w/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ct(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rl extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iu extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),es.subVectors(this.max,yr),Fi.subVectors(e.a,yr),Oi.subVectors(e.b,yr),Bi.subVectors(e.c,yr),Hn.subVectors(Oi,Fi),Vn.subVectors(Bi,Oi),oi.subVectors(Fi,Bi);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-oi.z,oi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,oi.z,0,-oi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-oi.y,oi.x,0];return!Ka(t,Fi,Oi,Bi,es)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Fi,Oi,Bi,es))?!1:(ts.crossVectors(Hn,Vn),t=[ts.x,ts.y,ts.z],Ka(t,Fi,Oi,Bi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new O,new O,new O,new O,new O,new O,new O,new O],cn=new O,jr=new si,Fi=new O,Oi=new O,Bi=new O,Hn=new O,Vn=new O,oi=new O,yr=new O,es=new O,ts=new O,li=new O;function Ka(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){li.fromArray(i,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yh=new si,Mr=new O,Za=new O;class Ri{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Za)),this.expandByPoint(Mr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new O,Ja=new O,ns=new O,Gn=new O,Qa=new O,is=new O,ja=new O;class Ua{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ja.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=Gn.dot(this.direction),l=-Gn.dot(ns),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ja).addScaledVector(ns,d),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,r,s){Qa.subVectors(t,e),is.subVectors(n,e),ja.crossVectors(Qa,is);let a=this.direction.dot(ja),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(Gn,is));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(ja);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Kh)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Wn.crossVectors(n,Zt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Wn.crossVectors(n,Zt)),Wn.normalize(),rs.crossVectors(Zt,Wn),r[0]=Wn.x,r[4]=rs.x,r[8]=Zt.x,r[1]=Wn.y,r[5]=rs.y,r[9]=Zt.y,r[2]=Wn.z,r[6]=rs.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],y=n[7],_=n[11],E=n[15],A=r[0],R=r[4],w=r[8],S=r[12],x=r[1],L=r[5],I=r[9],B=r[13],k=r[2],X=r[6],V=r[10],W=r[14],z=r[3],ee=r[7],ie=r[11],ue=r[15];return s[0]=a*A+o*x+l*k+c*z,s[4]=a*R+o*L+l*X+c*ee,s[8]=a*w+o*I+l*V+c*ie,s[12]=a*S+o*B+l*W+c*ue,s[1]=u*A+h*x+d*k+p*z,s[5]=u*R+h*L+d*X+p*ee,s[9]=u*w+h*I+d*V+p*ie,s[13]=u*S+h*B+d*W+p*ue,s[2]=g*A+v*x+m*k+f*z,s[6]=g*R+v*L+m*X+f*ee,s[10]=g*w+v*I+m*V+f*ie,s[14]=g*S+v*B+m*W+f*ue,s[3]=T*A+y*x+_*k+E*z,s[7]=T*R+y*L+_*X+E*ee,s[11]=T*w+y*I+_*V+E*ie,s[15]=T*S+y*B+_*W+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*p-n*l*p)+v*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,y=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,E=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,A=t*T+n*y+r*_+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=T*R,e[1]=(v*d*s-h*m*s-v*r*p+n*m*p+h*r*f-n*d*f)*R,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*f+n*l*f)*R,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=y*R,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=_*R,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*f-t*h*f)*R,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*f+t*o*f)*R,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=E*R,e[13]=(u*v*r-g*h*r+g*n*d-t*v*d-u*n*m+t*h*m)*R,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,m=a*h,f=o*h,T=l*c,y=l*u,_=l*h,E=n.x,A=n.y,R=n.z;return r[0]=(1-(v+f))*E,r[1]=(p+_)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(p-_)*A,r[5]=(1-(d+f))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+y)*R,r[9]=(m-T)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=gn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===gn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=gn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===gn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new O,un=new mt,$h=new O(0,0,0),Kh=new O(1,1,1),Wn=new O,rs=new O,Zt=new O,Rl=new mt,Cl=new dr;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Pl=new O,ki=new dr,Ln=new mt,ss=new O,Sr=new O,Jh=new O,Qh=new dr,Ll=new O(1,0,0),Dl=new O(0,1,0),Il=new O(0,0,1),Ul={type:"added"},jh={type:"removed"},Hi={type:"childadded",child:null},eo={type:"childremoved",child:null};class Vt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new O,t=new An,n=new dr,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Sr,ss,this.up):Ln.lookAt(ss,Sr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new O,Dn=new O,to=new O,In=new O,Vi=new O,Gi=new O,Nl=new O,no=new O,io=new O,ro=new O,so=new at,ao=new at,oo=new at;class rn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hn.subVectors(r,t),Dn.subVectors(n,t),to.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Dn),l=hn.dot(to),c=Dn.dot(Dn),u=Dn.dot(to),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return so.setScalar(0),ao.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,n),oo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(so,s.x),a.addScaledVector(ao,s.y),a.addScaledVector(oo,s.z),a}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Vi.subVectors(r,n),Gi.subVectors(s,n),no.subVectors(e,n);const l=Vi.dot(no),c=Gi.dot(no);if(l<=0&&c<=0)return t.copy(n);io.subVectors(e,r);const u=Vi.dot(io),h=Gi.dot(io);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Vi,a);ro.subVectors(e,s);const p=Vi.dot(ro),g=Gi.dot(ro);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Nl.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Nl,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},as={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=il(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lo(a,s,e+1/3),this.g=lo(a,s,e),this.b=lo(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(Je(Nt.r*255,0,255))*65536+Math.round(Je(Nt.g*255,0,255))*256+Math.round(Je(Nt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Qt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(as);const n=Nr(Xn.h,as.h,t),r=Nr(Xn.s,as.s,t),s=Nr(Xn.l,as.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ct;ct.NAMES=Uu;let ed=0;class fr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=vi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Us,this.blendDst=Ns,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Us&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sl extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,os=new we;let td=0;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class al extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ol extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nd=0;const nn=new mt,co=new Vt,Wi=new O,Jt=new si,Er=new si,Rt=new O;class Gt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?ol:al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Jt.min,Er.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,Er.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(Er.min),Jt.expandByPoint(Er.max))}Jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),Rt.add(Wi)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new O,l[w]=new O;const c=new O,u=new O,h=new O,d=new we,p=new we,g=new we,v=new O,m=new O;function f(w,S,x){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[w].add(v),o[S].add(v),o[x].add(v),l[w].add(m),l[S].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,S=T.length;w<S;++w){const x=T[w],L=x.start,I=x.count;for(let B=L,k=L+I;B<k;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new O,_=new O,E=new O,A=new O;function R(w){E.fromBufferAttribute(r,w),A.copy(E);const S=o[w];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(A,S);const L=_.dot(l[w])<0?-1:1;a.setXYZW(w,y.x,y.y,y.z,L)}for(let w=0,S=T.length;w<S;++w){const x=T[w],L=x.start,I=x.count;for(let B=L,k=L+I;B<k;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new an(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new mt,ci=new Ua,ls=new Ri,Ol=new O,cs=new O,us=new O,hs=new O,uo=new O,ds=new O,Bl=new O,fs=new O;class xt extends Vt{constructor(e=new Gt,t=new sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(uo.fromBufferAttribute(h,e),a?ds.addScaledVector(uo,u):ds.addScaledVector(uo.sub(t),u))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(ls.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ls,Ol)===null||ci.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,E=y;_<E;_+=3){const A=o.getX(_),R=o.getX(_+1),w=o.getX(_+2);r=ps(this,f,e,n,c,u,h,A,R,w),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);r=ps(this,a,e,n,c,u,h,T,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,E=y;_<E;_+=3){const A=_,R=_+1,w=_+2;r=ps(this,f,e,n,c,u,h,A,R,w),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,y=m+1,_=m+2;r=ps(this,a,e,n,c,u,h,T,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function id(i,e,t,n,r,s,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===zn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:i}}function ps(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,cs),i.getVertexPosition(l,us),i.getVertexPosition(c,hs);const u=id(i,e,t,n,cs,us,hs,Bl);if(u){const h=new O;rn.getBarycoord(Bl,cs,us,hs,h),r&&(u.uv=rn.getInterpolatedAttribute(r,o,l,c,h,new we)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,l,c,h,new we)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};rn.getNormal(cs,us,hs,d.normal),u.face=d,u.barycoord=h}return u}class ii extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function g(v,m,f,T,y,_,E,A,R,w,S){const x=_/R,L=E/w,I=_/2,B=E/2,k=A/2,X=R+1,V=w+1;let W=0,z=0;const ee=new O;for(let ie=0;ie<V;ie++){const ue=ie*L-B;for(let Ae=0;Ae<X;Ae++){const Ve=Ae*x-I;ee[v]=Ve*T,ee[m]=ue*y,ee[f]=k,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Ae/R),h.push(1-ie/w),W+=1}}for(let ie=0;ie<w;ie++)for(let ue=0;ue<R;ue++){const Ae=d+ue+X*ie,Ve=d+ue+X*(ie+1),fe=d+(ue+1)+X*(ie+1),Pe=d+(ue+1)+X*ie;l.push(Ae,Ve,Pe),l.push(Ve,fe,Pe),z+=6}o.addGroup(p,z,S),p+=z,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const r in n)e[r]=n[r]}return e}function rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Fu={clone:or,merge:zt};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ci extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new O,zl=new we,kl=new we;class qt extends Ci{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,zl,kl),t.subVectors(kl,zl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class Ou extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(Xi,qi,e,t);r.layers=this.layers,this.add(r);const s=new qt(Xi,qi,e,t);s.layers=this.layers,this.add(s);const a=new qt(Xi,qi,e,t);a.layers=this.layers,this.add(a);const o=new qt(Xi,qi,e,t);o.layers=this.layers,this.add(o);const l=new qt(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new qt(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ll extends Ct{constructor(e=[],t=yi,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bu extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ll(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ii(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:bn});s.uniforms.tEquirect.value=t;const a=new xt(r,s),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Dt),new Ou(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ar extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class Ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(od)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pi extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zu extends Ct{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Yt,u=Yt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn extends an{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new mt,Hl=new mt,ms=[],Vl=new si,ld=new mt,br=new xt,wr=new Ri;class Uo extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ld)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Vl.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),wr.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yi),Hl.multiplyMatrices(n,Yi),br.matrixWorld=Hl,br.raycast(e,ms);for(let a=0,o=ms.length;a<o;a++){const l=ms[a];l.instanceId=s,l.object=this,t.push(l)}ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zu(new Float32Array(r*this.count),r,this.count,Ca,mn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ho=new O,cd=new O,ud=new qe;class $n{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ho.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),r=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Ri,hd=new we(.5,.5),gs=new O;class cl{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],T=s[12],y=s[13],_=s[14],E=s[15];if(r[0].setComponents(c-a,p-u,f-g,E-T).normalize(),r[1].setComponents(c+a,p+u,f+g,E+T).normalize(),r[2].setComponents(c+o,p+h,f+v,E+y).normalize(),r[3].setComponents(c-o,p-h,f-v,E-y).normalize(),n)r[4].setComponents(l,d,m,_).normalize(),r[5].setComponents(c-l,p-d,f-m,E-_).normalize();else if(r[4].setComponents(c-l,p-d,f-m,E-_).normalize(),t===gn)r[5].setComponents(c+l,p+d,f+m,E+_).normalize();else if(t===qr)r[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=hd.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ku extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gl=new mt,No=new Ua,vs=new Ri,_s=new O;class Hu extends Vt{constructor(e=new Gt,t=new ku){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Gl.copy(r).invert(),No.copy(e.ray).applyMatrix4(Gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);_s.fromBufferAttribute(h,m),Wl(_s,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)_s.fromBufferAttribute(h,g),Wl(_s,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wl(i,e,t,n,r,s,a){const o=No.distanceSqToPoint(i);if(o<t){const l=new O;No.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fa extends Ct{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ul extends Ct{constructor(e,t,n=ni,r,s,a,o=Yt,l=Yt,c,u=sr,h=1){if(u!==sr&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new we:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],s=[],a=[],o=new O,l=new mt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dl extends Rn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vu extends dl{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const xs=new O,fo=new fl,po=new fl,mo=new fl;class Sa extends Rn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(xs.subVectors(r[0],r[1]).add(r[0]),c=xs);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(xs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),po.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),mo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),po.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),mo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(fo.calc(l),po.calc(l),mo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function dd(i,e){const t=1-i;return t*t*e}function fd(i,e){return 2*(1-i)*i*e}function pd(i,e){return i*i*e}function Fr(i,e,t,n){return dd(i,e)+fd(i,t)+pd(i,n)}function md(i,e){const t=1-i;return t*t*t*e}function gd(i,e){const t=1-i;return 3*t*t*i*e}function vd(i,e){return 3*(1-i)*i*i*e}function _d(i,e){return i*i*i*e}function Or(i,e,t,n,r){return md(i,e)+gd(i,t)+vd(i,n)+_d(i,r)}class Gu extends Rn{constructor(e=new we,t=new we,n=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wu extends Rn{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y),Or(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xu extends Rn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qu extends Rn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yu extends Rn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,r.x,s.x,a.x),Fr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pl extends Rn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,r.x,s.x,a.x),Fr(e,r.y,s.y,a.y),Fr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Xl(o,l.x,c.x,u.x,h.x),Xl(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var xd=Object.freeze({__proto__:null,ArcCurve:Vu,CatmullRomCurve3:Sa,CubicBezierCurve:Gu,CubicBezierCurve3:Wu,EllipseCurve:dl,LineCurve:Xu,LineCurve3:qu,QuadraticBezierCurve:Yu,QuadraticBezierCurve3:pl,SplineCurve:$u});class on extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const T=f*d-a;for(let y=0;y<c;y++){const _=y*h-s;g.push(_,-T,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const y=T+c*f,_=T+c*(f+1),E=T+1+c*(f+1),A=T+1+c*f;p.push(y,_,A),p.push(_,E,A)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oa extends Gt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const T=[],y=f/n;let _=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const A=E/t;h.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(A+_,1-y),T.push(c++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const y=u[f][T+1],_=u[f][T],E=u[f+1][T],A=u[f+1][T+1];(f!==0||a>0)&&p.push(y,_,A),(f!==n-1||l<Math.PI)&&p.push(_,E,A)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ba extends Gt{constructor(e=new pl(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new O,l=new O,c=new we;let u=new O;const h=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(p,2));function v(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),T(),f()}function m(y){u=e.getPointAt(y/t,u);const _=a.normals[y],E=a.binormals[y];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,w=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+w*E.x,l.y=S*_.y+w*E.y,l.z=S*_.z+w*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){const E=(r+1)*(y-1)+(_-1),A=(r+1)*y+(_-1),R=(r+1)*y+_,w=(r+1)*(y-1)+_;g.push(E,A,w),g.push(A,R,w)}}function T(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)c.x=y/t,c.y=_/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ba(new xd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ku extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zu extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ju extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qu extends Ci{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ju extends Gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class eh extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ql=new mt;class th{constructor(e,t,n=0,r=1/0){this.ray=new Ua(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(Yl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fo(e[r],this,n,t);return n.sort(Yl),n}}function Yl(i,e){return i.distance-e.distance}function Fo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Fo(s[a],e,t,!0)}}function $l(i,e,t,n){const r=yd(n);switch(t){case jo:return i*e;case Ca:return i*e/r.components*r.byteLength;case Pa:return i*e/r.components*r.byteLength;case tl:return i*e*2/r.components*r.byteLength;case La:return i*e*2/r.components*r.byteLength;case el:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case Da:return i*e*4/r.components*r.byteLength;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:case Ks:return Math.max(i,16)*Math.max(e,8)/4;case qs:case $s:return Math.max(i,8)*Math.max(e,8)/2;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fa:case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ga:case va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _a:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case Tn:case Ko:return{byteLength:1,components:1};case ir:case Zo:case Ti:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case ni:case Ta:case mn:return{byteLength:4,components:1};case Jo:case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);function nh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Md(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
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
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,Mf=`struct PhysicalMaterial {
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
}`,Sf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,op=`float getShadowMask() {
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
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
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
}`,Cp=`#if DEPTH_PACKING == 3200
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#define LAMBERT
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
}`,zp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Hp=`#define MATCAP
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
}`,Vp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
}`,Wp=`#define PHONG
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
}`,Xp=`#define PHONG
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
}`,qp=`#define STANDARD
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
}`,Yp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Kp=`#define TOON
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
}`,Zp=`uniform float size;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,jp=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Sd,alphahash_pars_fragment:Ed,alphamap_fragment:bd,alphamap_pars_fragment:wd,alphatest_fragment:Td,alphatest_pars_fragment:Ad,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Pd,batching_vertex:Ld,begin_vertex:Dd,beginnormal_vertex:Id,bsdfs:Ud,iridescence_fragment:Nd,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Vd,color_pars_vertex:Gd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Jd,colorspace_fragment:Qd,colorspace_pars_fragment:jd,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:nf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:mf,envmap_vertex:sf,fog_vertex:af,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:hf,lights_lambert_fragment:df,lights_lambert_pars_fragment:ff,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:vf,lights_phong_fragment:_f,lights_phong_pars_fragment:xf,lights_physical_fragment:yf,lights_physical_pars_fragment:Mf,lights_fragment_begin:Sf,lights_fragment_maps:Ef,lights_fragment_end:bf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Rf,map_fragment:Cf,map_pars_fragment:Pf,map_particle_fragment:Lf,map_particle_pars_fragment:Df,metalnessmap_fragment:If,metalnessmap_pars_fragment:Uf,morphinstance_vertex:Nf,morphcolor_vertex:Ff,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:kf,normal_fragment_maps:Hf,normal_pars_fragment:Vf,normal_pars_vertex:Gf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Kf,opaque_fragment:Zf,packing:Jf,premultiplied_alpha_fragment:Qf,project_vertex:jf,dithering_fragment:ep,dithering_pars_fragment:tp,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:sp,shadowmap_vertex:ap,shadowmask_pars_fragment:op,skinbase_vertex:lp,skinning_pars_vertex:cp,skinning_vertex:up,skinnormal_vertex:hp,specularmap_fragment:dp,specularmap_pars_fragment:fp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:gp,transmission_pars_fragment:vp,uv_pars_fragment:_p,uv_pars_vertex:xp,uv_vertex:yp,worldpos_vertex:Mp,background_vert:Sp,background_frag:Ep,backgroundCube_vert:bp,backgroundCube_frag:wp,cube_vert:Tp,cube_frag:Ap,depth_vert:Rp,depth_frag:Cp,distanceRGBA_vert:Pp,distanceRGBA_frag:Lp,equirect_vert:Dp,equirect_frag:Ip,linedashed_vert:Up,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:Bp,meshlambert_frag:zp,meshmatcap_vert:kp,meshmatcap_frag:Hp,meshnormal_vert:Vp,meshnormal_frag:Gp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:qp,meshphysical_frag:Yp,meshtoon_vert:$p,meshtoon_frag:Kp,points_vert:Zp,points_frag:Jp,shadow_vert:Qp,shadow_frag:jp,sprite_vert:em,sprite_frag:tm},de={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fn={basic:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ct(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ct(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:zt([de.points,de.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:zt([de.common,de.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:zt([de.sprite,de.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:zt([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:zt([de.lights,de.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fn.physical={uniforms:zt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ys={r:0,b:0,g:0},hi=new An,nm=new mt;function im(i,e,t,n,r,s,a){const o=new ct(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const E=g(y);E===null?f(o,l):E&&E.isColor&&(f(E,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===Qr)?(u===void 0&&(u=new xt(new ii(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:or(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(_.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(hi)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==ut,(h!==E||d!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xt(new on(2,2),new bt({name:"BackgroundMaterial",uniforms:or(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(ys,Nu(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,_,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:v,addToRenderList:m,dispose:T}}function rm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,L,I,B,k){let X=!1;const V=h(B,I,L);s!==V&&(s=V,c(s.object)),X=p(x,B,I,k),X&&g(x,B,I,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(x,L,I,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,L,I){const B=I.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let X=k[L.id];X===void 0&&(X={},k[L.id]=X);let V=X[B];return V===void 0&&(V=d(l()),X[B]=V),V}function d(x){const L=[],I=[],B=[];for(let k=0;k<t;k++)L[k]=0,I[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,L,I,B){const k=s.attributes,X=L.attributes;let V=0;const W=I.getAttributes();for(const z in W)if(W[z].location>=0){const ie=k[z];let ue=X[z];if(ue===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(x,L,I,B){const k={},X=L.attributes;let V=0;const W=I.getAttributes();for(const z in W)if(W[z].location>=0){let ie=X[z];ie===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),k[z]=ue,V++}s.attributes=k,s.attributesNum=V,s.index=B}function v(){const x=s.newAttributes;for(let L=0,I=x.length;L<I;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const I=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;I[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),k[x]!==L&&(i.vertexAttribDivisor(x,L),k[x]=L)}function T(){const x=s.newAttributes,L=s.enabledAttributes;for(let I=0,B=L.length;I<B;I++)L[I]!==x[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function y(x,L,I,B,k,X,V){V===!0?i.vertexAttribIPointer(x,L,I,k,X):i.vertexAttribPointer(x,L,I,B,k,X)}function _(x,L,I,B){v();const k=B.attributes,X=I.getAttributes(),V=L.defaultAttributeValues;for(const W in X){const z=X[W];if(z.location>=0){let ee=k[W];if(ee===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const ie=ee.normalized,ue=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const Ve=Ae.buffer,fe=Ae.type,Pe=Ae.bytesPerElement,Z=fe===i.INT||fe===i.UNSIGNED_INT||ee.gpuType===Ta;if(ee.isInterleavedBufferAttribute){const J=ee.data,ce=J.stride,Re=ee.offset;if(J.isInstancedInterleavedBuffer){for(let Ce=0;Ce<z.locationSize;Ce++)f(z.location+Ce,J.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)m(z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<z.locationSize;Ce++)y(z.location+Ce,ue/z.locationSize,fe,ie,ce*Pe,(Re+ue/z.locationSize*Ce)*Pe,Z)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)f(z.location+J,ee.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let J=0;J<z.locationSize;J++)y(z.location+J,ue/z.locationSize,fe,ie,ue*Pe,ue/z.locationSize*J*Pe,Z)}}else if(V!==void 0){const ie=V[W];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(z.location,ie);break;case 3:i.vertexAttrib3fv(z.location,ie);break;case 4:i.vertexAttrib4fv(z.location,ie);break;default:i.vertexAttrib1fv(z.location,ie)}}}}T()}function E(){w();for(const x in n){const L=n[x];for(const I in L){const B=L[I];for(const k in B)u(B[k].object),delete B[k];delete L[I]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const I in L){const B=L[I];for(const k in B)u(B[k].object),delete B[k];delete L[I]}delete n[x.id]}function R(x){for(const L in n){const I=n[L];if(I[x.id]===void 0)continue;const B=I[x.id];for(const k in B)u(B[k].object),delete B[k];delete I[x.id]}}function w(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function sm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function am(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const w=R===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!w)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function om(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,y=T*4;let _=f.clippingState||null;l.value=_,_=u(g,d,y,p);for(let E=0;E!==y;++E)_[E]=t[E];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==v;++y,_+=4)a.copy(h[y]).applyMatrix4(T,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function lm(i){let e=new WeakMap;function t(a,o){return o===Gs?a.mapping=yi:o===Ws&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gs||o===Ws)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ji=4,Kl=[.125,.215,.35,.446,.526,.582],mi=20,go=new Qu,Zl=new ct;let vo=null,_o=0,xo=0,yo=!1;const pi=(1+Math.sqrt(5))/2,$i=1/pi,Jl=[new O(-pi,$i,0),new O(pi,$i,0),new O(-$i,0,pi),new O($i,0,pi),new O(0,pi,-$i),new O(0,pi,$i),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],cm=new O;class Oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=cm}=s;vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,_o,xo),this._renderer.xr.enabled=yo,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ti,format:sn,colorSpace:Si,depthBuffer:!1},r=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(s)),this._blurMaterial=hm(s,e,t)}return r}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,r,s){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Zl),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new sl({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new xt(new ii,v);let f=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,f=!0):(v.color.copy(Zl),f=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const E=this._cubeSize;Ms(r,_*E,y>2?E:0,E,E),h.setRenderTarget(r),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yi||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jl[(r-s-1)%Jl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const f=[];let T=0;for(let R=0;R<mi;++R){const w=R/v,S=Math.exp(-w*w/2);f.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[r],E=3*_*(r>y-Ji?r-y+Ji:0),A=4*(this._cubeSize-_);Ms(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(h,go)}}function um(i){const e=[],t=[],n=[];let r=i;const s=i-Ji+1+Kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ji?l=Kl[a-i+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,w=A>2?0:-1,S=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];T.set(S,v*g*A),y.set(d,m*g*A);const x=[A,A,A,A,A,A];_.set(x,f*g*A)}const E=new Gt;E.setAttribute("position",new an(T,v)),E.setAttribute("uv",new an(y,m)),E.setAttribute("faceIndex",new an(_,f)),e.push(E),r>Ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hm(i,e,t){const n=new Float32Array(mi),r=new O(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ml(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function jl(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ec(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function dm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gs||l===Ws,u=l===yi||l===Mi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Oo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Oo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pm(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let y=0,_=T.length;y<_;y+=3){const E=T[y+0],A=T[y+1],R=T[y+2];d.push(E,A,A,R,R,E)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,_=T.length/3-1;y<_;y+=3){const E=y+0,A=y+1,R=y+2;d.push(E,A,A,R,R,E)}}else return;const m=new(Cu(d)?ol:al)(d,1);m.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function mm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vm(i,e,t){const n=new WeakMap,r=new at;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let x=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let E=o.attributes.position.count*_,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*h),w=new rl(R,E,A,h);w.type=mn,w.needsUpdate=!0;const S=_*4;for(let L=0;L<h;L++){const I=f[L],B=T[L],k=y[L],X=E*A*4*L;for(let V=0;V<I.count;V++){const W=V*S;g===!0&&(r.fromBufferAttribute(I,V),R[X+W+0]=r.x,R[X+W+1]=r.y,R[X+W+2]=r.z,R[X+W+3]=0),v===!0&&(r.fromBufferAttribute(B,V),R[X+W+4]=r.x,R[X+W+5]=r.y,R[X+W+6]=r.z,R[X+W+7]=0),m===!0&&(r.fromBufferAttribute(k,V),R[X+W+8]=r.x,R[X+W+9]=r.y,R[X+W+10]=r.z,R[X+W+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new we(E,A)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function _m(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ih=new Ct,tc=new ul(1,1),rh=new rl,sh=new Iu,ah=new ll,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function pr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Tt(t,n)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Tt(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),Tt(t,n)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=nl,s=tc):s=ih,t.setTexture2D(e||s,r)}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sh,r)}function Fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ah,r)}function Om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||rh,r)}function Bm(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return Em;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function zm(i,e){i.uniform1fv(this.addr,e)}function km(i,e){const t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Hm(i,e){const t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vm(i,e){const t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Gm(i,e){const t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wm(i,e){const t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xm(i,e){const t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qm(i,e){i.uniform1iv(this.addr,e)}function Ym(i,e){i.uniform2iv(this.addr,e)}function $m(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function Zm(i,e){i.uniform1uiv(this.addr,e)}function Jm(i,e){i.uniform2uiv(this.addr,e)}function Qm(i,e){i.uniform3uiv(this.addr,e)}function jm(i,e){i.uniform4uiv(this.addr,e)}function eg(i,e,t){const n=this.cache,r=e.length,s=za(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ih,s[a])}function tg(i,e,t){const n=this.cache,r=e.length,s=za(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||sh,s[a])}function ng(i,e,t){const n=this.cache,r=e.length,s=za(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ah,s[a])}function ig(i,e,t){const n=this.cache,r=e.length,s=za(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||rh,s[a])}function rg(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Hm;case 35666:return Vm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bm(t.type)}}class ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rg(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function lg(i,e,t){const n=i.name,r=n.length;for(Mo.lastIndex=0;;){const s=Mo.exec(n),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new sg(o,i,e):new ag(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new og(o),oc(t,h)),t=h}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cg=37297;let ug=0;function hg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cc=new qe;function dg(i){it._getMatrix(cc,it.workingColorSpace,i);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(e),o)}else return s}function fg(i,e){const t=dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,e){let t;switch(e){case cu:t="Linear";break;case uu:t="Reinhard";break;case hu:t="Cineon";break;case du:t="ACESFilmic";break;case pu:t="AgX";break;case mu:t="Neutral";break;case fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new O;function mg(){it.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _g(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Rr(i){return i!==""}function hc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(xg,Mg)}const yg=new Map;function Mg(i,e){let t=$e[e];if(t===void 0){const n=yg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Sg,Eg)}function Eg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function bg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mi&&(e="ENVMAP_MODE_REFRACTION"),e}function Ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bg(t),c=wg(t),u=Tg(t),h=Ag(t),d=Rg(t),p=gg(t),g=vg(s),v=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?$e.tonemapping_pars_fragment:"",t.toneMapping!==On?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,fg("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Bo(a),a=hc(a,t),a=dc(a,t),o=Bo(o),o=hc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+a,_=T+f+o,E=lc(r,r.VERTEX_SHADER,y),A=lc(r,r.FRAGMENT_SHADER,_);r.attachShader(v,E),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(E)||"",k=r.getShaderInfoLog(A)||"",X=I.trim(),V=B.trim(),W=k.trim();let z=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,E,A);else{const ie=uc(r,E,"vertex"),ue=uc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ie+`
`+ue)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||W==="")&&(ee=!1);ee&&(L.diagnostics={runnable:z,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(E),r.deleteShader(A),w=new Ls(r,v),S=_g(r,v)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,cg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ug++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let Pg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dg(e),t.set(e,n)),n}}class Dg{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}}function Ig(i,e,t,n,r,s,a){const o=new Na,l=new Lg,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,L,I,B){const k=I.fog,X=B.geometry,V=S.isMeshStandardMaterial?I.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),z=W&&W.mapping===Qr?W.image.height:null,ee=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=ie!==void 0?ie.length:0;let Ae=0;X.morphAttributes.position!==void 0&&(Ae=1),X.morphAttributes.normal!==void 0&&(Ae=2),X.morphAttributes.color!==void 0&&(Ae=3);let Ve,fe,Pe,Z;if(ee){const tt=fn[ee];Ve=tt.vertexShader,fe=tt.fragmentShader}else Ve=S.vertexShader,fe=S.fragmentShader,l.update(S),Pe=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const J=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,Le=!!S.map,st=!!S.matcap,D=!!W,Ke=!!S.aoMap,Ne=!!S.lightMap,Se=!!S.bumpMap,xe=!!S.normalMap,Ze=!!S.displacementMap,oe=!!S.emissiveMap,Ie=!!S.metalnessMap,ot=!!S.roughnessMap,lt=S.anisotropy>0,C=S.clearcoat>0,M=S.dispersion>0,G=S.iridescence>0,U=S.sheen>0,$=S.transmission>0,Y=lt&&!!S.anisotropyMap,ge=C&&!!S.clearcoatMap,re=C&&!!S.clearcoatNormalMap,Me=C&&!!S.clearcoatRoughnessMap,De=G&&!!S.iridescenceMap,se=G&&!!S.iridescenceThicknessMap,me=U&&!!S.sheenColorMap,Be=U&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,he=!!S.specularColorMap,Xe=!!S.specularIntensityMap,N=$&&!!S.transmissionMap,ae=$&&!!S.thicknessMap,le=!!S.gradientMap,_e=!!S.alphaMap,te=S.alphaTest>0,Q=!!S.alphaHash,Te=!!S.extensions;let He=On;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=i.toneMapping);const et={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Ve,fragmentShader:fe,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Si,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:st,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:z,aoMap:Ke,lightMap:Ne,bumpMap:Se,normalMap:xe,displacementMap:d&&Ze,emissiveMap:oe,normalMapObjectSpace:xe&&S.normalMapType===yu,normalMapTangentSpace:xe&&S.normalMapType===xu,metalnessMap:Ie,roughnessMap:ot,anisotropy:lt,anisotropyMap:Y,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:Me,dispersion:M,iridescence:G,iridescenceMap:De,iridescenceThicknessMap:se,sheen:U,sheenColorMap:me,sheenRoughnessMap:Be,specularMap:Ee,specularColorMap:he,specularIntensityMap:Xe,transmission:$,transmissionMap:N,thicknessMap:ae,gradientMap:le,opaque:S.transparent===!1&&S.blending===vi&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:Q,combine:S.combine,mapUv:Le&&v(S.map.channel),aoMapUv:Ke&&v(S.aoMap.channel),lightMapUv:Ne&&v(S.lightMap.channel),bumpMapUv:Se&&v(S.bumpMap.channel),normalMapUv:xe&&v(S.normalMap.channel),displacementMapUv:Ze&&v(S.displacementMap.channel),emissiveMapUv:oe&&v(S.emissiveMap.channel),metalnessMapUv:Ie&&v(S.metalnessMap.channel),roughnessMapUv:ot&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(S.sheenRoughnessMap.channel),specularMapUv:Ee&&v(S.specularMap.channel),specularColorMapUv:he&&v(S.specularColorMap.channel),specularIntensityMapUv:Xe&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ae&&v(S.thicknessMap.channel),alphaMapUv:_e&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Le||_e),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)x.push(L),x.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(x,S),y(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function T(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const x=g[S.type];let L;if(x){const I=fn[x];L=Fu.clone(I.uniforms)}else L=S.uniforms;return L}function E(S,x){let L;for(let I=0,B=u.length;I<B;I++){const k=u[I];if(k.cacheKey===x){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Cg(i,x,S,s),u.push(L)),L}function A(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:w}}function Ug(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=a(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Ng),n.length>1&&n.sort(d||mc),r.length>1&&r.sort(d||mc)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Fg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gc,i.set(n,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ct};break;case"SpotLight":t={position:new O,direction:new O,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Bg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zg=0;function kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hg(i){const e=new Og,t=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new mt,a=new mt;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,y=0,_=0,E=0,A=0,R=0;c.sort(kg);for(let S=0,x=c.length;S<x;S++){const L=c[S],I=L.color,B=L.intensity,k=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*B,h+=I.g*B,d+=I.b*B;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],B);R++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,z=t.get(L);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(I).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[v]=V;const W=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,W.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=W.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=X,_++}v++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(I).multiplyScalar(B),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const W=L.shadow,z=t.get(L);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(B),V.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==T||w.numPointShadows!==y||w.numSpotShadows!==_||w.numSpotMaps!==E||w.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,w.directionalLength=p,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=T,w.numPointShadows=y,w.numSpotShadows=_,w.numSpotMaps=E,w.numLightProbes=R,n.version=zg++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const y=c[f];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function vc(i){const e=new Hg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vc(i),e.set(r,[o])):s>=a.length?(o=new vc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
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
}`;function Xg(i,e,t){let n=new cl;const r=new we,s=new we,a=new at,o=new Zu({depthPacking:_u}),l=new Ju,c={},u=t.maxTextureSize,h={[zn]:Ft,[Ft]:zn,[yn]:yn},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Gg,fragmentShader:Wg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let f=this.type;this.render=function(A,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(bn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=f!==xn&&this.type===xn,k=f===xn&&this.type!==xn;for(let X=0,V=A.length;X<V;X++){const W=A[X],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ee=z.getFrameExtents();if(r.multiply(ee),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,z.mapSize.y=s.y)),z.map===null||B===!0||k===!0){const ue=this.type!==xn?{minFilter:Yt,magFilter:Yt}:{};z.map!==null&&z.map.dispose(),z.map=new vn(r.x,r.y,ue),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ie=z.getViewportCount();for(let ue=0;ue<ie;ue++){const Ae=z.getViewport(ue);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(a),z.updateMatrices(W,ue),n=z.getFrustum(),_(R,w,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===xn&&T(z,w),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,L)};function T(A,R){const w=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,w,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,w,p,v,null)}function y(A,R,w,S){let x=null;const L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)x=L;else if(x=w.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=x.uuid,B=R.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let X=k[B];X===void 0&&(X=x.clone(),k[B]=X,R.addEventListener("dispose",E)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,S===xn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=w}return x}function _(A,R,w,S,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const B=e.update(A),k=A.material;if(Array.isArray(k)){const X=B.groups;for(let V=0,W=X.length;V<W;V++){const z=X[V],ee=k[z.materialIndex];if(ee&&ee.visible){const ie=y(A,ee,S,x);A.onBeforeShadow(i,A,R,w,B,ie,z),i.renderBufferDirect(w,null,B,ie,A,z),A.onAfterShadow(i,A,R,w,B,ie,z)}}}else if(k.visible){const X=y(A,k,S,x);A.onBeforeShadow(i,A,R,w,B,X,null),i.renderBufferDirect(w,null,B,X,A,null),A.onAfterShadow(i,A,R,w,B,X,null)}}const I=A.children;for(let B=0,k=I.length;B<k;B++)_(I[B],R,w,S,x)}function E(A){A.target.removeEventListener("dispose",E);for(const w in c){const S=c[w],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const qg={[Fs]:Os,[Bs]:Hs,[zs]:Vs,[xi]:ks,[Os]:Fs,[Hs]:Bs,[Vs]:zs,[ks]:xi};function Yg(i,e){function t(){let N=!1;const ae=new at;let le=null;const _e=new at(0,0,0,0);return{setMask:function(te){le!==te&&!N&&(i.colorMask(te,te,te,te),le=te)},setLocked:function(te){N=te},setClear:function(te,Q,Te,He,et){et===!0&&(te*=He,Q*=He,Te*=He),ae.set(te,Q,Te,He),_e.equals(ae)===!1&&(i.clearColor(te,Q,Te,He),_e.copy(ae))},reset:function(){N=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,le=null,_e=null,te=null;return{setReversed:function(Q){if(ae!==Q){const Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;const He=te;te=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(Q){Q?J(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Q){le!==Q&&!N&&(i.depthMask(Q),le=Q)},setFunc:function(Q){if(ae&&(Q=qg[Q]),_e!==Q){switch(Q){case Fs:i.depthFunc(i.NEVER);break;case Os:i.depthFunc(i.ALWAYS);break;case Bs:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case zs:i.depthFunc(i.EQUAL);break;case ks:i.depthFunc(i.GEQUAL);break;case Hs:i.depthFunc(i.GREATER);break;case Vs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Q}},setLocked:function(Q){N=Q},setClear:function(Q){te!==Q&&(ae&&(Q=1-Q),i.clearDepth(Q),te=Q)},reset:function(){N=!1,le=null,_e=null,te=null,ae=!1}}}function r(){let N=!1,ae=null,le=null,_e=null,te=null,Q=null,Te=null,He=null,et=null;return{setTest:function(tt){N||(tt?J(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!N&&(i.stencilMask(tt),ae=tt)},setFunc:function(tt,At,Wt){(le!==tt||_e!==At||te!==Wt)&&(i.stencilFunc(tt,At,Wt),le=tt,_e=At,te=Wt)},setOp:function(tt,At,Wt){(Q!==tt||Te!==At||He!==Wt)&&(i.stencilOp(tt,At,Wt),Q=tt,Te=At,He=Wt)},setLocked:function(tt){N=tt},setClear:function(tt){et!==tt&&(i.clearStencil(tt),et=tt)},reset:function(){N=!1,ae=null,le=null,_e=null,te=null,Q=null,Te=null,He=null,et=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,_=null,E=null,A=null,R=new ct(0,0,0),w=0,S=!1,x=null,L=null,I=null,B=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=W>=2);let ee=null,ie={};const ue=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Ve=new at().fromArray(ue),fe=new at().fromArray(Ae);function Pe(N,ae,le,_e){const te=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<le;Te++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ae+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Q}const Z={};Z[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(xi),Se(!1),xe(Co),J(i.CULL_FACE),Ke(bn);function J(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ce(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Re(N,ae){return h[N]!==ae?(i.bindFramebuffer(N,ae),h[N]=ae,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(N,ae){let le=p,_e=!1;if(N){le=d.get(ae),le===void 0&&(le=[],d.set(ae,le));const te=N.textures;if(le.length!==te.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=te.length;Q<Te;Q++)le[Q]=i.COLOR_ATTACHMENT0+Q;le.length=te.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function Le(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const st={[Zn]:i.FUNC_ADD,[Wc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};st[qc]=i.MIN,st[Yc]=i.MAX;const D={[$c]:i.ZERO,[Kc]:i.ONE,[Zc]:i.SRC_COLOR,[Us]:i.SRC_ALPHA,[nu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[Qc]:i.DST_ALPHA,[Jc]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[iu]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[au]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(N,ae,le,_e,te,Q,Te,He,et,tt){if(N===bn){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),N!==Gc){if(N!==m||tt!==S){if((f!==Zn||_!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,_=Zn),tt)switch(N){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Po:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,y=null,E=null,A=null,R.set(0,0,0),w=0,m=N,S=tt}return}te=te||ae,Q=Q||le,Te=Te||_e,(ae!==f||te!==_)&&(i.blendEquationSeparate(st[ae],st[te]),f=ae,_=te),(le!==T||_e!==y||Q!==E||Te!==A)&&(i.blendFuncSeparate(D[le],D[_e],D[Q],D[Te]),T=le,y=_e,E=Q,A=Te),(He.equals(R)===!1||et!==w)&&(i.blendColor(He.r,He.g,He.b,et),R.copy(He),w=et),m=N,S=!1}function Ne(N,ae){N.side===yn?ce(i.CULL_FACE):J(i.CULL_FACE);let le=N.side===Ft;ae&&(le=!le),Se(le),N.blending===vi&&N.transparent===!1?Ke(bn):Ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function xe(N){N!==kc?(J(i.CULL_FACE),N!==L&&(N===Co?i.cullFace(i.BACK):N===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),L=N}function Ze(N){N!==I&&(V&&i.lineWidth(N),I=N)}function oe(N,ae,le){N?(J(i.POLYGON_OFFSET_FILL),(B!==ae||k!==le)&&(i.polygonOffset(ae,le),B=ae,k=le)):ce(i.POLYGON_OFFSET_FILL)}function Ie(N){N?J(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+X-1),ee!==N&&(i.activeTexture(N),ee=N)}function lt(N,ae,le){le===void 0&&(ee===null?le=i.TEXTURE0+X-1:le=ee);let _e=ie[le];_e===void 0&&(_e={type:void 0,texture:void 0},ie[le]=_e),(_e.type!==N||_e.texture!==ae)&&(ee!==le&&(i.activeTexture(le),ee=le),i.bindTexture(N,ae||Z[N]),_e.type=N,_e.texture=ae)}function C(){const N=ie[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){Ve.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function Be(N){fe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function Ee(N,ae){let le=c.get(ae);le===void 0&&(le=new WeakMap,c.set(ae,le));let _e=le.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(ae,N.name),le.set(N,_e))}function he(N,ae){const _e=c.get(ae).get(N);l.get(ae)!==_e&&(i.uniformBlockBinding(ae,_e,N.__bindingPointIndex),l.set(ae,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,ie={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,y=null,_=null,E=null,A=null,R=new ct(0,0,0),w=0,S=!1,x=null,L=null,I=null,B=null,k=null,Ve.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ce,bindFramebuffer:Re,drawBuffers:Ce,useProgram:Le,setBlending:Ke,setMaterial:Ne,setFlipSided:Se,setCullFace:xe,setLineWidth:Ze,setPolygonOffset:oe,setScissorTest:Ie,activeTexture:ot,bindTexture:lt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:De,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Me,texSubImage2D:U,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:ge,scissor:me,viewport:Be,reset:Xe}}function $g(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Ma("canvas")}function v(C,M,G){let U=1;const $=lt(C);if(($.width>G||$.height>G)&&(U=G/Math.max($.width,$.height)),U<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(U*$.width),ge=Math.floor(U*$.height);h===void 0&&(h=g(Y,ge));const re=M?g(Y,ge):h;return re.width=Y,re.height=ge,re.getContext("2d").drawImage(C,0,0,Y,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+ge+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,M,G,U,$=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),M===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),M===i.RGBA){const ge=$?Xr:it.getTransfer(U);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=ge===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(C,M){let G;return C?M===null||M===ni||M===rr?G=i.DEPTH24_STENCIL8:M===mn?G=i.DEPTH32F_STENCIL8:M===ir&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===rr?G=i.DEPTH_COMPONENT24:M===mn?G=i.DEPTH_COMPONENT32F:M===ir&&(G=i.DEPTH_COMPONENT16),G}function E(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&u.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),x(M)}function w(C){const M=n.get(C);if(M.__webglInit===void 0)return;const G=C.source,U=d.get(G);if(U){const $=U[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(C),Object.keys(U).length===0&&d.delete(G)}n.remove(C)}function S(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const G=C.source,U=d.get(G);delete U[M.__cacheKey],a.memory.textures--}function x(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(M.__webglFramebuffer[U]))for(let $=0;$<M.__webglFramebuffer[U].length;$++)i.deleteFramebuffer(M.__webglFramebuffer[U][$]);else i.deleteFramebuffer(M.__webglFramebuffer[U]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[U])}else{if(Array.isArray(M.__webglFramebuffer))for(let U=0;U<M.__webglFramebuffer.length;U++)i.deleteFramebuffer(M.__webglFramebuffer[U]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let U=0;U<M.__webglColorRenderbuffer.length;U++)M.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[U]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let U=0,$=G.length;U<$;U++){const Y=n.get(G[U]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(G[U])}n.remove(C)}let L=0;function I(){L=0}function B(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){const G=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const U=C.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function V(C,M){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Z(G,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function W(C,M){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Z(G,C,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function z(C,M){const G=n.get(C);if(C.version>0&&G.__version!==C.version){J(G,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const ee={[Wr]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},ie={[Yt]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},ue={[Mu]:i.NEVER,[Au]:i.ALWAYS,[Su]:i.LESS,[nl]:i.LEQUAL,[Eu]:i.EQUAL,[Tu]:i.GEQUAL,[bu]:i.GREATER,[wu]:i.NOTEQUAL};function Ae(C,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dt||M.magFilter===Rs||M.magFilter===Tr||M.magFilter===Sn||M.minFilter===Dt||M.minFilter===Rs||M.minFilter===Tr||M.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ie[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==Tr&&M.minFilter!==Sn||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const U=M.source;let $=d.get(U);$===void 0&&($={},d.set(U,$));const Y=k(M);if(Y!==C.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[Y].usedTimes++;const ge=$[C.__cacheKey];ge!==void 0&&($[C.__cacheKey].usedTimes--,ge.usedTimes===0&&S(M)),C.__cacheKey=Y,C.__webglTexture=$[Y].texture}return G}function fe(C,M,G){return Math.floor(Math.floor(C/G)/M)}function Pe(C,M,G,U){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,U,M.data);else{Y.sort((se,me)=>se.start-me.start);let ge=0;for(let se=1;se<Y.length;se++){const me=Y[ge],Be=Y[se],Ee=me.start+me.count,he=fe(Be.start,M.width,4),Xe=fe(me.start,M.width,4);Be.start<=Ee+1&&he===Xe&&fe(Be.start+Be.count-1,M.width,4)===he?me.count=Math.max(me.count,Be.start+Be.count-me.start):(++ge,Y[ge]=Be)}Y.length=ge+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let se=0,me=Y.length;se<me;se++){const Be=Y[se],Ee=Math.floor(Be.start/4),he=Math.ceil(Be.count/4),Xe=Ee%M.width,N=Math.floor(Ee/M.width),ae=he,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Xe,N,ae,le,G,U,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function Z(C,M,G){let U=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(U=i.TEXTURE_3D);const $=Ve(C,M),Y=M.source;t.bindTexture(U,C.__webglTexture,i.TEXTURE0+G);const ge=n.get(Y);if(Y.version!==ge.__version||$===!0){t.activeTexture(i.TEXTURE0+G);const re=it.getPrimaries(it.workingColorSpace),Me=M.colorSpace===Mn?null:it.getPrimaries(M.colorSpace),De=M.colorSpace===Mn||re===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let se=v(M.image,!1,r.maxTextureSize);se=ot(M,se);const me=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let Ee=y(M.internalFormat,me,Be,M.colorSpace,M.isVideoTexture);Ae(U,M);let he;const Xe=M.mipmaps,N=M.isVideoTexture!==!0,ae=ge.__version===void 0||$===!0,le=Y.dataReady,_e=E(M,se);if(M.isDepthTexture)Ee=_(M.format===ar,M.type),ae&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ee,se.width,se.height,0,me,Be,null));else if(M.isDataTexture)if(Xe.length>0){N&&ae&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,Xe[0].width,Xe[0].height);for(let te=0,Q=Xe.length;te<Q;te++)he=Xe[te],N?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,me,Be,he.data):t.texImage2D(i.TEXTURE_2D,te,Ee,he.width,he.height,0,me,Be,he.data);M.generateMipmaps=!1}else N?(ae&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,se.width,se.height),le&&Pe(M,se,me,Be)):t.texImage2D(i.TEXTURE_2D,0,Ee,se.width,se.height,0,me,Be,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ee,Xe[0].width,Xe[0].height,se.depth);for(let te=0,Q=Xe.length;te<Q;te++)if(he=Xe[te],M.format!==sn)if(me!==null)if(N){if(le)if(M.layerUpdates.size>0){const Te=$l(he.width,he.height,M.format,M.type);for(const He of M.layerUpdates){const et=he.data.subarray(He*Te/he.data.BYTES_PER_ELEMENT,(He+1)*Te/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,He,he.width,he.height,1,me,et)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,me,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ee,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,me,Be,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ee,he.width,he.height,se.depth,0,me,Be,he.data)}else{N&&ae&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,Xe[0].width,Xe[0].height);for(let te=0,Q=Xe.length;te<Q;te++)he=Xe[te],M.format!==sn?me!==null?N?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,me,Be,he.data):t.texImage2D(i.TEXTURE_2D,te,Ee,he.width,he.height,0,me,Be,he.data)}else if(M.isDataArrayTexture)if(N){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ee,se.width,se.height,se.depth),le)if(M.layerUpdates.size>0){const te=$l(se.width,se.height,M.format,M.type);for(const Q of M.layerUpdates){const Te=se.data.subarray(Q*te/se.data.BYTES_PER_ELEMENT,(Q+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,me,Be,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Be,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,me,Be,se.data);else if(M.isData3DTexture)N?(ae&&t.texStorage3D(i.TEXTURE_3D,_e,Ee,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Be,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,me,Be,se.data);else if(M.isFramebufferTexture){if(ae)if(N)t.texStorage2D(i.TEXTURE_2D,_e,Ee,se.width,se.height);else{let te=se.width,Q=se.height;for(let Te=0;Te<_e;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ee,te,Q,0,me,Be,null),te>>=1,Q>>=1}}else if(Xe.length>0){if(N&&ae){const te=lt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ee,te.width,te.height)}for(let te=0,Q=Xe.length;te<Q;te++)he=Xe[te],N?le&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,me,Be,he):t.texImage2D(i.TEXTURE_2D,te,Ee,me,Be,he);M.generateMipmaps=!1}else if(N){if(ae){const te=lt(se);t.texStorage2D(i.TEXTURE_2D,_e,Ee,te.width,te.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Be,se)}else t.texImage2D(i.TEXTURE_2D,0,Ee,me,Be,se);m(M)&&f(U),ge.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,G){if(M.image.length!==6)return;const U=Ve(C,M),$=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const Y=n.get($);if($.version!==Y.__version||U===!0){t.activeTexture(i.TEXTURE0+G);const ge=it.getPrimaries(it.workingColorSpace),re=M.colorSpace===Mn?null:it.getPrimaries(M.colorSpace),Me=M.colorSpace===Mn||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!De&&!se?me[Q]=v(M.image[Q],!0,r.maxCubemapSize):me[Q]=se?M.image[Q].image:M.image[Q],me[Q]=ot(M,me[Q]);const Be=me[0],Ee=s.convert(M.format,M.colorSpace),he=s.convert(M.type),Xe=y(M.internalFormat,Ee,he,M.colorSpace),N=M.isVideoTexture!==!0,ae=Y.__version===void 0||U===!0,le=$.dataReady;let _e=E(M,Be);Ae(i.TEXTURE_CUBE_MAP,M);let te;if(De){N&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Be.width,Be.height);for(let Q=0;Q<6;Q++){te=me[Q].mipmaps;for(let Te=0;Te<te.length;Te++){const He=te[Te];M.format!==sn?Ee!==null?N?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,He.width,He.height,Ee,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,He.width,He.height,Ee,he,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Xe,He.width,He.height,0,Ee,he,He.data)}}}else{if(te=M.mipmaps,N&&ae){te.length>0&&_e++;const Q=lt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ee,he,me[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,me[Q].width,me[Q].height,0,Ee,he,me[Q].data);for(let Te=0;Te<te.length;Te++){const et=te[Te].image[Q].image;N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,et.width,et.height,Ee,he,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Xe,et.width,et.height,0,Ee,he,et.data)}}else{N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee,he,me[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Ee,he,me[Q]);for(let Te=0;Te<te.length;Te++){const He=te[Te];N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ee,he,He.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Xe,Ee,he,He.image[Q])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),Y.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,G,U,$,Y){const ge=s.convert(G.format,G.colorSpace),re=s.convert(G.type),Me=y(G.internalFormat,ge,re,G.colorSpace),De=n.get(M),se=n.get(G);if(se.__renderTarget=M,!De.__hasExternalTextures){const me=Math.max(1,M.width>>Y),Be=Math.max(1,M.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,Me,me,Be,M.depth,0,ge,re,null):t.texImage2D($,Y,Me,me,Be,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,$,se.__webglTexture,0,Ze(M)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,$,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(C,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const U=M.depthTexture,$=U&&U.isDepthTexture?U.type:null,Y=_(M.stencilBuffer,$),ge=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Ze(M);oe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Y,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,C)}else{const U=M.textures;for(let $=0;$<U.length;$++){const Y=U[$],ge=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),Me=y(Y.internalFormat,ge,re,Y.colorSpace),De=Ze(M);G&&oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Me,M.width,M.height):oe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=n.get(M.depthTexture);U.__renderTarget=M,(!U.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const $=U.__webglTexture,Y=Ze(M);if(M.depthTexture.format===sr)oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===ar)oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Le(C){const M=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const U=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),U){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,U.removeEventListener("dispose",$)};U.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=U}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const U=C.texture.mipmaps;U&&U.length>0?Ce(M.__webglFramebuffer[0],C):Ce(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[U]),M.__webglDepthbuffer[U]===void 0)M.__webglDepthbuffer[U]=i.createRenderbuffer(),Re(M.__webglDepthbuffer[U],C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else{const U=C.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Re(M.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,M,G){const U=n.get(C);M!==void 0&&ce(U.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Le(C)}function D(C){const M=C.texture,G=n.get(C),U=n.get(M);C.addEventListener("dispose",R);const $=C.textures,Y=C.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=M.version,a.memory.textures++),Y){G.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[re]=[];for(let Me=0;Me<M.mipmaps.length;Me++)G.__webglFramebuffer[re][Me]=i.createFramebuffer()}else G.__webglFramebuffer[re]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)G.__webglFramebuffer[re]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,Me=$.length;re<Me;re++){const De=n.get($[re]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&oe(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const Me=$[re];G.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[re]);const De=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),me=y(Me.internalFormat,De,se,Me.colorSpace,C.isXRRenderTarget===!0),Be=Ze(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,G.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ce(G.__webglFramebuffer[re][Me],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me);else ce(G.__webglFramebuffer[re],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,Me=$.length;re<Me;re++){const De=$[re],se=n.get(De);let me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Ae(me,De),ce(G.__webglFramebuffer,C,De,i.COLOR_ATTACHMENT0+re,me,0),m(De)&&f(me)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,U.__webglTexture),Ae(re,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ce(G.__webglFramebuffer[Me],C,M,i.COLOR_ATTACHMENT0,re,Me);else ce(G.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,re,0);m(M)&&f(re),t.unbindTexture()}C.depthBuffer&&Le(C)}function Ke(C){const M=C.textures;for(let G=0,U=M.length;G<U;G++){const $=M[G];if(m($)){const Y=T(C),ge=n.get($).__webglTexture;t.bindTexture(Y,ge),f(Y),t.unbindTexture()}}}const Ne=[],Se=[];function xe(C){if(C.samples>0){if(oe(C)===!1){const M=C.textures,G=C.width,U=C.height;let $=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(C),re=M.length>1;if(re)for(let De=0;De<M.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<M.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const se=n.get(M[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,G,U,0,0,G,U,$,i.NEAREST),l===!0&&(Ne.length=0,Se.length=0,Ne.push(i.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ne.push(Y),Se.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<M.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const se=n.get(M[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ze(C){return Math.min(r.maxSamples,C.samples)}function oe(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ot(C,M){const G=C.colorSpace,U=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Si&&G!==Mn&&(it.getTransfer(G)===ut?(U!==sn||$!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=st,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=oe}function oh(i,e){function t(n,r=Mn){let s;const a=it.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ko)return i.BYTE;if(n===Zo)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===jo)return i.ALPHA;if(n===el)return i.RGB;if(n===sn)return i.RGBA;if(n===sr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Ca)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===tl)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Pr||n===Lr||n===Dr||n===Ir)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qs||n===Ys||n===$s||n===Ks)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===Js||n===Qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===Js)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qs)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===ha||n===da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===js)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===pa||n===ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fa)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===va||n===_a||n===xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ga)return s.COMPRESSED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qg extends Ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Jg,f={},T=t.getContextAttributes();let y=null,_=null;const E=[],A=[],R=new we;let w=null;const S=new qt;S.viewport=new at;const x=new qt;x.viewport=new at;const L=[S,x],I=new eh;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=E[Z];return J===void 0&&(J=new Ps,E[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=E[Z];return J===void 0&&(J=new Ps,E[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=E[Z];return J===void 0&&(J=new Ps,E[Z]=J),J.getHandSpace()};function X(Z){const J=A.indexOf(Z.inputSource);if(J===-1)return;const ce=E[J];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||a),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){const J=A[Z];J!==null&&(A[Z]=null,E[Z].disconnect(J))}B=null,k=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(y),p=null,d=null,h=null,r=null,_=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Re=null,Ce=null;T.depth&&(Ce=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=T.stencil?ar:sr,Re=T.stencil?rr:ni);const Le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new vn(d.textureWidth,d.textureHeight,{format:sn,type:Tn,depthTexture:new ul(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new vn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let J=0;J<Z.removed.length;J++){const ce=Z.removed[J],Re=A.indexOf(ce);Re>=0&&(A[Re]=null,E[Re].disconnect(ce))}for(let J=0;J<Z.added.length;J++){const ce=Z.added[J];let Re=A.indexOf(ce);if(Re===-1){for(let Le=0;Le<E.length;Le++)if(Le>=A.length){A.push(ce),Re=Le;break}else if(A[Le]===null){A[Le]=ce,Re=Le;break}if(Re===-1)break}const Ce=E[Re];Ce&&Ce.connect(ce)}}const z=new O,ee=new O;function ie(Z,J,ce){z.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const Re=z.distanceTo(ee),Ce=J.projectionMatrix.elements,Le=ce.projectionMatrix.elements,st=Ce[14]/(Ce[10]-1),D=Ce[14]/(Ce[10]+1),Ke=(Ce[9]+1)/Ce[5],Ne=(Ce[9]-1)/Ce[5],Se=(Ce[8]-1)/Ce[0],xe=(Le[8]+1)/Le[0],Ze=st*Se,oe=st*xe,Ie=Re/(-Se+xe),ot=Ie*-Se;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ot),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const lt=st+Ie,C=D+Ie,M=Ze-ot,G=oe+(Re-ot),U=Ke*D/C*lt,$=Ne*D/C*lt;Z.projectionMatrix.makePerspective(M,G,U,$,lt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let J=Z.near,ce=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),I.near=x.near=S.near=J,I.far=x.far=S.far=ce,(B!==I.near||k!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,k=I.far),I.layers.mask=Z.layers.mask|6,S.layers.mask=I.layers.mask&3,x.layers.mask=I.layers.mask&5;const Re=Z.parent,Ce=I.cameras;ue(I,Re);for(let Le=0;Le<Ce.length;Le++)ue(Ce[Le],Re);Ce.length===2?ie(I,S,x):I.projectionMatrix.copy(S.projectionMatrix),Ae(Z,I,Re)};function Ae(Z,J,ce){ce===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return f[Z]};let Ve=null;function fe(Z,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Re=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,Re=!0);for(let D=0;D<ce.length;D++){const Ke=ce[D];let Ne=null;if(p!==null)Ne=p.getViewport(Ke);else{const xe=h.getViewSubImage(d,Ke);Ne=xe.viewport,D===0&&(e.setRenderTargetTextures(_,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(_))}let Se=L[D];Se===void 0&&(Se=new qt,Se.layers.enable(D),Se.viewport=new at,L[D]=Se),Se.matrix.fromArray(Ke.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ke.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),D===0&&(I.matrix.copy(Se.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Re===!0&&I.cameras.push(Se)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const D=h.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ce.length;D++){const Ke=ce[D].camera;if(Ke){let Ne=f[Ke];Ne||(Ne=new hl,f[Ke]=Ne);const Se=h.getCameraImage(Ke);Ne.sourceTexture=Se}}}}for(let ce=0;ce<E.length;ce++){const Re=A[ce],Ce=E[ce];Re!==null&&Ce!==void 0&&Ce.update(Re,J,c||a)}Ve&&Ve(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Pe=new nh;Pe.setAnimationLoop(fe),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}}const di=new An,jg=new mt;function ev(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ft&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ft&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),y=T.envMap,_=T.envMapRotation;y&&(m.envMap.value=y,di.copy(_),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tv(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const _=y.program;n.uniformBlockBinding(T,_)}function c(T,y){let _=r[T.id];_===void 0&&(g(T),_=u(T),r[T.id]=_,T.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(T,E);const A=e.render.frame;s[T.id]!==A&&(d(T),s[T.id]=A)}function u(T){const y=h();T.__bindingPointIndex=y;const _=i.createBuffer(),E=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],_=T.uniforms,E=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=_.length;A<R;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,x=w.length;S<x;S++){const L=w[S];if(p(L,A,S,E)===!0){const I=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let X=0;X<B.length;X++){const V=B[X],W=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,I+k,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,_,E){const A=T.value,R=y+"_"+_;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const w=E[R];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return E[R]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function g(T){const y=T.uniforms;let _=0;const E=16;for(let R=0,w=y.length;R<w;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,L=S.length;x<L;x++){const I=S[x],B=Array.isArray(I.value)?I.value:[I.value];for(let k=0,X=B.length;k<X;k++){const V=B[k],W=v(V),z=_%E,ee=z%W.boundary,ie=z+ee;_+=ee,ie!==0&&E-ie<W.storage&&(_+=E-ie),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=W.storage}}}const A=_%E;return A>0&&(_+=E-A),T.__size=_,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class mr{constructor(e={}){const{canvas:t=Pu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=Qt;let A=0,R=0,w=null,S=-1,x=null;const L=new at,I=new at;let B=null;const k=new ct(0);let X=0,V=t.width,W=t.height,z=1,ee=null,ie=null;const ue=new at(0,0,V,W),Ae=new at(0,0,V,W);let Ve=!1;const fe=new cl;let Pe=!1,Z=!1;const J=new mt,ce=new O,Re=new at,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function st(){return w===null?z:1}let D=n;function Ke(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),D===null){const F="webgl2";if(D=Ke(F,b),D===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,Se,xe,Ze,oe,Ie,ot,lt,C,M,G,U,$,Y,ge,re,Me,De,se,me,Be,Ee,he,Xe;function N(){Ne=new fm(D),Ne.init(),Ee=new oh(D,Ne),Se=new am(D,Ne,e,Ee),xe=new Yg(D,Ne),Se.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Ze=new gm(D),oe=new Ug,Ie=new $g(D,Ne,xe,oe,Se,Ee,Ze),ot=new lm(_),lt=new dm(_),C=new Md(D),he=new rm(D,C),M=new pm(D,C,Ze,he),G=new _m(D,M,C,Ze),se=new vm(D,Se,Ie),re=new om(oe),U=new Ig(_,ot,lt,Ne,Se,he,re),$=new ev(_,oe),Y=new Fg,ge=new Vg(Ne),De=new im(_,ot,lt,xe,G,p,l),Me=new Xg(_,G,Se),Xe=new tv(D,Ze,Se,xe),me=new sm(D,Ne,Ze),Be=new mm(D,Ne,Ze),Ze.programs=U.programs,_.capabilities=Se,_.extensions=Ne,_.properties=oe,_.renderLists=Y,_.shadowMap=Me,_.state=xe,_.info=Ze}N();const ae=new Qg(_,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(V,W,!1))},this.getSize=function(b){return b.set(V,W)},this.setSize=function(b,F,q=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,W=F,t.width=Math.floor(b*z),t.height=Math.floor(F*z),q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(b,F,q){V=b,W=F,z=q,t.width=Math.floor(b*q),t.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,F,q,K){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,F,q,K),xe.viewport(L.copy(ue).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,F,q,K){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,F,q,K),xe.scissor(I.copy(Ae).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){xe.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,q=!0){let K=0;if(b){let H=!1;if(w!==null){const ne=w.texture.format;H=ne===Da||ne===La||ne===Pa}if(H){const ne=w.texture.type,pe=ne===Tn||ne===ni||ne===ir||ne===rr||ne===Aa||ne===Ra,be=De.getClearColor(),ye=De.getClearAlpha(),ze=be.r,Ge=be.g,Oe=be.b;pe?(g[0]=ze,g[1]=Ge,g[2]=Oe,g[3]=ye,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=ze,v[1]=Ge,v[2]=Oe,v[3]=ye,D.clearBufferiv(D.COLOR,0,v))}else K|=D.COLOR_BUFFER_BIT}F&&(K|=D.DEPTH_BUFFER_BIT),q&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),De.dispose(),Y.dispose(),ge.dispose(),oe.dispose(),ot.dispose(),lt.dispose(),G.dispose(),he.dispose(),Xe.dispose(),U.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Wt),ae.removeEventListener("sessionend",Di),ln.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Ze.autoReset,F=Me.enabled,q=Me.autoUpdate,K=Me.needsUpdate,H=Me.type;N(),Ze.autoReset=b,Me.enabled=F,Me.autoUpdate=q,Me.needsUpdate=K,Me.type=H}function te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const F=b.target;F.removeEventListener("dispose",Q),Te(F)}function Te(b){He(b),oe.remove(b)}function He(b){const F=oe.get(b).programs;F!==void 0&&(F.forEach(function(q){U.releaseProgram(q)}),b.isShaderMaterial&&U.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,K,H,ne){F===null&&(F=Ce);const pe=H.isMesh&&H.matrixWorld.determinant()<0,be=Ye(b,F,q,K,H);xe.setMaterial(K,pe);let ye=q.index,ze=1;if(K.wireframe===!0){if(ye=M.getWireframeAttribute(q),ye===void 0)return;ze=2}const Ge=q.drawRange,Oe=q.attributes.position;let je=Ge.start*ze,dt=(Ge.start+Ge.count)*ze;ne!==null&&(je=Math.max(je,ne.start*ze),dt=Math.min(dt,(ne.start+ne.count)*ze)),ye!==null?(je=Math.max(je,0),dt=Math.min(dt,ye.count)):Oe!=null&&(je=Math.max(je,0),dt=Math.min(dt,Oe.count));const yt=dt-je;if(yt<0||yt===1/0)return;he.setup(H,K,be,q,ye);let gt,pt=me;if(ye!==null&&(gt=C.get(ye),pt=Be,pt.setIndex(gt)),H.isMesh)K.wireframe===!0?(xe.setLineWidth(K.wireframeLinewidth*st()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(H.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),xe.setLineWidth(ke*st()),H.isLineSegments?pt.setMode(D.LINES):H.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else H.isPoints?pt.setMode(D.POINTS):H.isSprite&&pt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ke=H._multiDrawStarts,vt=H._multiDrawCounts,rt=H._multiDrawCount,$t=ye?C.get(ye).bytesPerElement:1,Ui=oe.get(K).currentProgram.getUniforms();for(let Kt=0;Kt<rt;Kt++)Ui.setValue(D,"_gl_DrawID",Kt),pt.render(ke[Kt]/$t,vt[Kt])}else if(H.isInstancedMesh)pt.renderInstances(je,yt,H.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vt=Math.min(q.instanceCount,ke);pt.renderInstances(je,yt,vt)}else pt.render(je,yt)};function et(b,F,q){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,ve(b,F,q),b.side=zn,b.needsUpdate=!0,ve(b,F,q),b.side=yn):ve(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),f=ge.get(q),f.init(F),y.push(f),q.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),b!==q&&b.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const K=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ne=H.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){const be=ne[pe];et(be,q,H),K.add(be)}else et(ne,q,H),K.add(ne)}),f=y.pop(),K},this.compileAsync=function(b,F,q=null){const K=this.compile(b,F,q);return new Promise(H=>{function ne(){if(K.forEach(function(pe){oe.get(pe).currentProgram.isReady()&&K.delete(pe)}),K.size===0){H(b);return}setTimeout(ne,10)}Ne.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tt=null;function At(b){tt&&tt(b)}function Wt(){ln.stop()}function Di(){ln.start()}const ln=new nh;ln.setAnimationLoop(At),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(b){tt=b,ae.setAnimationLoop(b),b===null?ln.stop():ln.start()},ae.addEventListener("sessionstart",Wt),ae.addEventListener("sessionend",Di),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,w),f=ge.get(b,y.length),f.init(F),y.push(f),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),fe.setFromProjectionMatrix(J,gn,F.reversedDepth),Z=this.localClippingEnabled,Pe=re.init(this.clippingPlanes,Z),m=Y.get(b,T.length),m.init(),T.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&Ii(ne,F,-1/0,_.sortObjects)}Ii(b,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ee,ie),Le=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Le&&De.addToRenderList(m,b),this.info.render.frame++,Pe===!0&&re.beginShadows();const q=f.state.shadowsArray;Me.render(q,b,F),Pe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ne=F.cameras;if(H.length>0)for(let pe=0,be=ne.length;pe<be;pe++){const ye=ne[pe];_r(K,H,b,ye)}Le&&De.render(b);for(let pe=0,be=ne.length;pe<be;pe++){const ye=ne[pe];vr(m,b,ye,ye.viewport)}}else H.length>0&&_r(K,H,b,F),Le&&De.render(b),vr(m,b,F);w!==null&&R===0&&(Ie.updateMultisampleRenderTarget(w),Ie.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(_,b,F),he.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],Pe===!0&&re.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ii(b,F,q,K){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||fe.intersectsSprite(b)){K&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const pe=G.update(b),be=b.material;be.visible&&m.push(b,pe,be,q,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||fe.intersectsObject(b))){const pe=G.update(b),be=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Re.copy(pe.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(be)){const ye=pe.groups;for(let ze=0,Ge=ye.length;ze<Ge;ze++){const Oe=ye[ze],je=be[Oe.materialIndex];je&&je.visible&&m.push(b,pe,je,q,Re.z,Oe)}}else be.visible&&m.push(b,pe,be,q,Re.z,null)}}const ne=b.children;for(let pe=0,be=ne.length;pe<be;pe++)Ii(ne[pe],F,q,K)}function vr(b,F,q,K){const H=b.opaque,ne=b.transmissive,pe=b.transparent;f.setupLightsView(q),Pe===!0&&re.setGlobalState(_.clippingPlanes,q),K&&xe.viewport(L.copy(K)),H.length>0&&P(H,F,q),ne.length>0&&P(ne,F,q),pe.length>0&&P(pe,F,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _r(b,F,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new vn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Ti:Tn,minFilter:Sn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ne=f.state.transmissionRenderTarget[K.id],pe=K.viewport||L;ne.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);const be=_.getRenderTarget(),ye=_.getActiveCubeFace(),ze=_.getActiveMipmapLevel();_.setRenderTarget(ne),_.getClearColor(k),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Le&&De.render(q);const Ge=_.toneMapping;_.toneMapping=On;const Oe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),Pe===!0&&re.setGlobalState(_.clippingPlanes,K),P(b,q,K),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let dt=0,yt=F.length;dt<yt;dt++){const gt=F[dt],pt=gt.object,ke=gt.geometry,vt=gt.material,rt=gt.group;if(vt.side===yn&&pt.layers.test(K.layers)){const $t=vt.side;vt.side=Ft,vt.needsUpdate=!0,j(pt,q,K,ke,vt,rt),vt.side=$t,vt.needsUpdate=!0,je=!0}}je===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne))}_.setRenderTarget(be,ye,ze),_.setClearColor(k,X),Oe!==void 0&&(K.viewport=Oe),_.toneMapping=Ge}function P(b,F,q){const K=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ne=b.length;H<ne;H++){const pe=b[H],be=pe.object,ye=pe.geometry,ze=pe.group;let Ge=pe.material;Ge.allowOverride===!0&&K!==null&&(Ge=K),be.layers.test(q.layers)&&j(be,F,q,ye,Ge,ze)}}function j(b,F,q,K,H,ne){b.onBeforeRender(_,F,q,K,H,ne),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(_,F,q,K,b,ne),H.transparent===!0&&H.side===yn&&H.forceSinglePass===!1?(H.side=Ft,H.needsUpdate=!0,_.renderBufferDirect(q,F,K,H,b,ne),H.side=zn,H.needsUpdate=!0,_.renderBufferDirect(q,F,K,H,b,ne),H.side=yn):_.renderBufferDirect(q,F,K,H,b,ne),b.onAfterRender(_,F,q,K,H,ne)}function ve(b,F,q){F.isScene!==!0&&(F=Ce);const K=oe.get(b),H=f.state.lights,ne=f.state.shadowsArray,pe=H.state.version,be=U.getParameters(b,H.state,ne,F,q),ye=U.getProgramCacheKey(be);let ze=K.programs;K.environment=b.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(b.isMeshStandardMaterial?lt:ot).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Q),ze=new Map,K.programs=ze);let Ge=ze.get(ye);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===pe)return Ue(b,be),Ge}else be.uniforms=U.getUniforms(b),b.onBeforeCompile(be,_),Ge=U.acquireProgram(be,ye),ze.set(ye,Ge),K.uniforms=be.uniforms;const Oe=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=re.uniform),Ue(b,be),K.needsLights=ht(b),K.lightsStateVersion=pe,K.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function We(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ue(b,F){const q=oe.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Ye(b,F,q,K,H){F.isScene!==!0&&(F=Ce),Ie.resetTextureUnits();const ne=F.fog,pe=K.isMeshStandardMaterial?F.environment:null,be=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Si,ye=(K.isMeshStandardMaterial?lt:ot).get(K.envMap||pe),ze=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let yt=On;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=_.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=gt!==void 0?gt.length:0,ke=oe.get(K),vt=f.state.lights;if(Pe===!0&&(Z===!0||b!==x)){const Ot=b===x&&K.id===S;re.setState(K,b,Ot)}let rt=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==vt.state.version||ke.outputColorSpace!==be||H.isBatchedMesh&&ke.batching===!1||!H.isBatchedMesh&&ke.batching===!0||H.isBatchedMesh&&ke.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ke.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ke.instancing===!1||!H.isInstancedMesh&&ke.instancing===!0||H.isSkinnedMesh&&ke.skinning===!1||!H.isSkinnedMesh&&ke.skinning===!0||H.isInstancedMesh&&ke.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ke.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ke.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ke.instancingMorph===!1&&H.morphTexture!==null||ke.envMap!==ye||K.fog===!0&&ke.fog!==ne||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Ge||ke.morphTargets!==Oe||ke.morphNormals!==je||ke.morphColors!==dt||ke.toneMapping!==yt||ke.morphTargetsCount!==pt)&&(rt=!0):(rt=!0,ke.__version=K.version);let $t=ke.currentProgram;rt===!0&&($t=ve(K,F,H));let Ui=!1,Kt=!1,xr=!1;const _t=$t.getUniforms(),en=ke.uniforms;if(xe.useProgram($t.program)&&(Ui=!0,Kt=!0,xr=!0),K.id!==S&&(S=K.id,Kt=!0),Ui||x!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",b.projectionMatrix),_t.setValue(D,"viewMatrix",b.matrixWorldInverse);const Xt=_t.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,ce.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_t.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Kt=!0,xr=!0)}if(H.isSkinnedMesh){_t.setOptional(D,H,"bindMatrix"),_t.setOptional(D,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),_t.setValue(D,"boneTexture",Ot.boneTexture,Ie))}H.isBatchedMesh&&(_t.setOptional(D,H,"batchingTexture"),_t.setValue(D,"batchingTexture",H._matricesTexture,Ie),_t.setOptional(D,H,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",H._indirectTexture,Ie),_t.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",H._colorsTexture,Ie));const tn=q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&se.update(H,q,$t),(Kt||ke.receiveShadow!==H.receiveShadow)&&(ke.receiveShadow=H.receiveShadow,_t.setValue(D,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(en.envMap.value=ye,en.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),Kt&&(_t.setValue(D,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&ft(en,xr),ne&&K.fog===!0&&$.refreshFogUniforms(en,ne),$.refreshMaterialUniforms(en,K,z,W,f.state.transmissionRenderTarget[b.id]),Ls.upload(D,We(ke),en,Ie)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ls.upload(D,We(ke),en,Ie),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_t.setValue(D,"center",H.center),_t.setValue(D,"modelViewMatrix",H.modelViewMatrix),_t.setValue(D,"normalMatrix",H.normalMatrix),_t.setValue(D,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ot=K.uniformsGroups;for(let Xt=0,Wa=Ot.length;Xt<Wa;Xt++){const ai=Ot[Xt];Xe.update(ai,$t),Xe.bind(ai,$t)}}return $t}function ft(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ht(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,F,q){const K=oe.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),oe.get(b.texture).__webglTexture=F,oe.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const q=oe.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Qe=D.createFramebuffer();this.setRenderTarget=function(b,F=0,q=0){w=b,A=F,R=q;let K=!0,H=null,ne=!1,pe=!1;if(b){const ye=oe.get(b);if(ye.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(ye.__webglFramebuffer===void 0)Ie.setupRenderTarget(b);else if(ye.__hasExternalTextures)Ie.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(ye.__boundDepthTexture!==Oe){if(Oe!==null&&oe.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(pe=!0);const Ge=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?H=Ge[F][q]:H=Ge[F],ne=!0):b.samples>0&&Ie.useMultisampledRTT(b)===!1?H=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[q]:H=Ge,L.copy(b.viewport),I.copy(b.scissor),B=b.scissorTest}else L.copy(ue).multiplyScalar(z).floor(),I.copy(Ae).multiplyScalar(z).floor(),B=Ve;if(q!==0&&(H=Qe),xe.bindFramebuffer(D.FRAMEBUFFER,H)&&K&&xe.drawBuffers(b,H),xe.viewport(L),xe.scissor(I),xe.setScissorTest(B),ne){const ye=oe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,q)}else if(pe){const ye=F;for(let ze=0;ze<b.textures.length;ze++){const Ge=oe.get(b.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,q,ye)}}else if(b!==null&&q!==0){const ye=oe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(b,F,q,K,H,ne,pe,be=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){xe.bindFramebuffer(D.FRAMEBUFFER,ye);try{const ze=b.textures[be],Ge=ze.format,Oe=ze.type;if(!Se.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-K&&q>=0&&q<=b.height-H&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),D.readPixels(F,q,K,H,Ee.convert(Ge),Ee.convert(Oe),ne))}finally{const ze=w!==null?oe.get(w).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,K,H,ne,pe,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye)if(F>=0&&F<=b.width-K&&q>=0&&q<=b.height-H){xe.bindFramebuffer(D.FRAMEBUFFER,ye);const ze=b.textures[be],Ge=ze.format,Oe=ze.type;if(!Se.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),D.readPixels(F,q,K,H,Ee.convert(Ge),Ee.convert(Oe),0);const dt=w!==null?oe.get(w).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,dt);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gh(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(je),D.deleteSync(yt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,q=0){const K=Math.pow(2,-q),H=Math.floor(b.image.width*K),ne=Math.floor(b.image.height*K),pe=F!==null?F.x:0,be=F!==null?F.y:0;Ie.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,pe,be,H,ne),xe.unbindTexture()};const Fe=D.createFramebuffer(),Lt=D.createFramebuffer();this.copyTextureToTexture=function(b,F,q=null,K=null,H=0,ne=null){ne===null&&(H!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=H,H=0):ne=0);let pe,be,ye,ze,Ge,Oe,je,dt,yt;const gt=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(q!==null)pe=q.max.x-q.min.x,be=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Ge=q.min.y,Oe=q.isBox3?q.min.z:0;else{const tn=Math.pow(2,-H);pe=Math.floor(gt.width*tn),be=Math.floor(gt.height*tn),b.isDataArrayTexture?ye=gt.depth:b.isData3DTexture?ye=Math.floor(gt.depth*tn):ye=1,ze=0,Ge=0,Oe=0}K!==null?(je=K.x,dt=K.y,yt=K.z):(je=0,dt=0,yt=0);const pt=Ee.convert(F.format),ke=Ee.convert(F.type);let vt;F.isData3DTexture?(Ie.setTexture3D(F,0),vt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ie.setTexture2DArray(F,0),vt=D.TEXTURE_2D_ARRAY):(Ie.setTexture2D(F,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ui=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),xr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const _t=b.isDataArrayTexture||b.isData3DTexture,en=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const tn=oe.get(b),Ot=oe.get(F),Xt=oe.get(tn.__renderTarget),Wa=oe.get(Ot.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let ai=0;ai<ye;ai++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,H,Oe+ai),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,ne,yt+ai)),D.blitFramebuffer(ze,Ge,pe,be,je,dt,pe,be,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||oe.has(b)){const tn=oe.get(b),Ot=oe.get(F);xe.bindFramebuffer(D.READ_FRAMEBUFFER,Fe),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lt);for(let Xt=0;Xt<ye;Xt++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,H,Oe+Xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,H),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,yt+Xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,ne),H!==0?D.blitFramebuffer(ze,Ge,pe,be,je,dt,pe,be,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(vt,ne,je,dt,yt+Xt,ze,Ge,pe,be):D.copyTexSubImage2D(vt,ne,je,dt,ze,Ge,pe,be);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(vt,ne,je,dt,yt,pe,be,ye,pt,ke,gt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,ne,je,dt,yt,pe,be,ye,pt,gt.data):D.texSubImage3D(vt,ne,je,dt,yt,pe,be,ye,pt,ke,gt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,je,dt,pe,be,pt,ke,gt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,je,dt,gt.width,gt.height,pt,gt.data):D.texSubImage2D(D.TEXTURE_2D,ne,je,dt,pe,be,pt,ke,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ui),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xr),ne===0&&F.generateMipmaps&&D.generateMipmap(vt),xe.unbindTexture()},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&Ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){A=0,R=0,w=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const nv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:du,AddEquation:Zn,AddOperation:lu,AdditiveBlending:Gr,AgXToneMapping:pu,AlphaFormat:jo,AlwaysCompare:Au,AlwaysDepth:Os,AlwaysStencilFunc:Do,ArcCurve:Vu,ArrayCamera:eh,BackSide:Ft,BasicDepthPacking:vu,Box3:si,BoxGeometry:ii,BufferAttribute:an,BufferGeometry:Gt,ByteType:Ko,Camera:Ci,CanvasTexture:Fa,CatmullRomCurve3:Sa,CineonToneMapping:hu,ClampToEdgeWrapping:Qn,Color:ct,ColorManagement:it,ConstantAlphaFactor:su,ConstantColorFactor:iu,CubeCamera:Ou,CubeReflectionMapping:yi,CubeRefractionMapping:Mi,CubeTexture:ll,CubeUVReflectionMapping:Qr,CubicBezierCurve:Gu,CubicBezierCurve3:Wu,CullFaceBack:Co,CullFaceFront:Hc,CullFaceNone:kc,Curve:Rn,CustomBlending:Gc,CustomToneMapping:fu,Data3DTexture:Iu,DataArrayTexture:rl,DataTexture:zu,DepthFormat:sr,DepthStencilFormat:ar,DepthTexture:ul,DoubleSide:yn,DstAlphaFactor:Qc,DstColorFactor:eu,DynamicDrawUsage:Ru,EllipseCurve:dl,EqualCompare:Eu,EqualDepth:zs,EquirectangularReflectionMapping:Gs,EquirectangularRefractionMapping:Ws,Euler:An,EventDispatcher:Ai,ExternalTexture:hl,Float32BufferAttribute:Pt,FloatType:mn,FrontSide:zn,Frustum:cl,GLSL3:ya,GreaterCompare:bu,GreaterDepth:Hs,GreaterEqualCompare:Tu,GreaterEqualDepth:ks,Group:Ar,HalfFloatType:Ti,ImageUtils:Lu,InstancedBufferAttribute:dn,InstancedBufferGeometry:ju,InstancedMesh:Uo,IntType:Ta,KeepStencilOp:fi,Layers:Na,LessCompare:Su,LessDepth:Bs,LessEqualCompare:nl,LessEqualDepth:xi,LineCurve:Xu,LineCurve3:qu,LinearFilter:Dt,LinearMipmapLinearFilter:Sn,LinearMipmapNearestFilter:Rs,LinearSRGBColorSpace:Si,LinearToneMapping:cu,LinearTransfer:Xr,Material:fr,MathUtils:Cs,Matrix3:qe,Matrix4:mt,MaxEquation:Yc,Mesh:xt,MeshBasicMaterial:sl,MeshDepthMaterial:Zu,MeshDistanceMaterial:Ju,MinEquation:qc,MirroredRepeatWrapping:Xs,MixOperation:ou,MultiplyBlending:Lo,MultiplyOperation:Yo,NearestFilter:Yt,NearestMipmapLinearFilter:Tr,NearestMipmapNearestFilter:gu,NeutralToneMapping:mu,NeverCompare:Mu,NeverDepth:Fs,NoBlending:bn,NoColorSpace:Mn,NoToneMapping:On,NormalBlending:vi,NotEqualCompare:wu,NotEqualDepth:Vs,Object3D:Vt,ObjectSpaceNormalMap:yu,OneFactor:Kc,OneMinusConstantAlphaFactor:au,OneMinusConstantColorFactor:ru,OneMinusDstAlphaFactor:jc,OneMinusDstColorFactor:tu,OneMinusSrcAlphaFactor:Ns,OneMinusSrcColorFactor:Jc,OrthographicCamera:Qu,PCFShadowMap:qo,PCFSoftShadowMap:Vc,PMREMGenerator:Oo,PerspectiveCamera:qt,Plane:$n,PlaneGeometry:on,Points:Hu,PointsMaterial:ku,QuadraticBezierCurve:Yu,QuadraticBezierCurve3:pl,Quaternion:dr,RED_GREEN_RGTC2_Format:_a,RED_RGTC1_Format:ga,REVISION:wa,RGBADepthPacking:_u,RGBAFormat:sn,RGBAIntegerFormat:Da,RGBA_ASTC_10x10_Format:ua,RGBA_ASTC_10x5_Format:oa,RGBA_ASTC_10x6_Format:la,RGBA_ASTC_10x8_Format:ca,RGBA_ASTC_12x10_Format:ha,RGBA_ASTC_12x12_Format:da,RGBA_ASTC_4x4_Format:js,RGBA_ASTC_5x4_Format:ea,RGBA_ASTC_5x5_Format:ta,RGBA_ASTC_6x5_Format:na,RGBA_ASTC_6x6_Format:ia,RGBA_ASTC_8x5_Format:ra,RGBA_ASTC_8x6_Format:sa,RGBA_ASTC_8x8_Format:aa,RGBA_BPTC_Format:fa,RGBA_ETC2_EAC_Format:Qs,RGBA_PVRTC_2BPPV1_Format:Ks,RGBA_PVRTC_4BPPV1_Format:$s,RGBA_S3TC_DXT1_Format:Lr,RGBA_S3TC_DXT3_Format:Dr,RGBA_S3TC_DXT5_Format:Ir,RGBFormat:el,RGB_BPTC_SIGNED_Format:pa,RGB_BPTC_UNSIGNED_Format:ma,RGB_ETC1_Format:Zs,RGB_ETC2_Format:Js,RGB_PVRTC_2BPPV1_Format:Ys,RGB_PVRTC_4BPPV1_Format:qs,RGB_S3TC_DXT1_Format:Pr,RGFormat:tl,RGIntegerFormat:La,RawShaderMaterial:Ku,Ray:Ua,Raycaster:th,RedFormat:Ca,RedIntegerFormat:Pa,ReinhardToneMapping:uu,RenderTarget:Du,RepeatWrapping:Wr,ReverseSubtractEquation:Xc,SIGNED_RED_GREEN_RGTC2_Format:xa,SIGNED_RED_RGTC1_Format:va,SRGBColorSpace:Qt,SRGBTransfer:ut,Scene:Pi,ShaderChunk:$e,ShaderLib:fn,ShaderMaterial:bt,ShortType:Zo,Source:Ia,Sphere:Ri,SphereGeometry:Oa,SplineCurve:$u,SrcAlphaFactor:Us,SrcAlphaSaturateFactor:nu,SrcColorFactor:Zc,StaticDrawUsage:Io,SubtractEquation:Wc,SubtractiveBlending:Po,TangentSpaceNormalMap:xu,Texture:Ct,Triangle:rn,TubeGeometry:Ba,UVMapping:$o,Uint16BufferAttribute:al,Uint32BufferAttribute:ol,UniformsLib:de,UniformsUtils:Fu,UnsignedByteType:Tn,UnsignedInt101111Type:Qo,UnsignedInt248Type:rr,UnsignedInt5999Type:Jo,UnsignedIntType:ni,UnsignedShort4444Type:Aa,UnsignedShort5551Type:Ra,UnsignedShortType:ir,VSMShadowMap:xn,Vector2:we,Vector3:O,Vector4:at,WebGLCoordinateSystem:gn,WebGLCubeRenderTarget:Bu,WebGLRenderTarget:vn,WebGLRenderer:mr,WebGLUtils:oh,WebGPUCoordinateSystem:qr,WebXRController:Ps,ZeroFactor:$c,createCanvasElement:Pu},Symbol.toStringTag,{value:"Module"}));function iv(i){return"#"+[1,3,5].map(t=>Math.round(parseInt(i.slice(t,t+2),16)*.61+[225,215,230][(t-1)/2]*.39)).map(t=>t.toString(16).padStart(2,"0")).join("")}const lr=[["amethyst","Amethyst","#d559ff","M7 31Q6 21 14 18Q11 8 17 9Q22 10 24 17Q34 15 38 24Q45 36 36 38Q31 40 26 37Q18 42 11 38Q7 37 7 31Z","tilt","M14 27q2 2 4 0",3.6],["glacier","Glacier","#63d4e8","M6 31Q5 24 13 20Q10 14 17 13Q23 9 28 14Q38 11 38 21Q44 27 39 33Q38 40 29 37Q19 42 15 37Q8 38 6 31Z","float","M23 14q1-6 7-6",4.3],["amber","Amber","#f1ae67","M7 30Q9 24 14 19Q18 8 24 9Q29 10 33 20Q41 27 39 34Q37 39 28 36Q22 41 15 37Q7 36 7 30Z","nod","M18 30q3 3 6 0",3.9],["crimson","Crimson","#ff626c","M6 27Q4 17 14 15Q20 13 24 19Q30 9 37 16Q46 24 35 32L26 39Q23 41 19 38Q8 34 6 27Z","beat","M16 18l3 1",3],["tangerine","Tangerine","#ff883d","M6 29Q5 23 13 21Q14 14 22 15Q28 11 32 18Q41 18 41 28Q41 38 33 37Q30 42 25 37Q20 41 16 37Q8 39 6 29Z","shuffle","M21 15q-2-6-7-5",3.2],["lemon","Lemon","#f5de68","M8 31Q8 24 14 21L17 12Q20 8 24 13L27 18L32 13Q38 10 36 20Q43 29 38 34Q31 40 25 36Q14 41 8 34Z","peek","M15 28q2 1 4 0",4.5],["leaf","Leaf","#81dc72","M7 33Q6 22 15 17Q22 15 30 9Q35 7 35 15Q42 23 38 32Q34 39 25 36Q15 41 9 36Z","lean","M26 16q3-4 6-4",3.8],["lagoon","Lagoon","#3ec8aa","M6 31Q6 24 13 21Q11 15 17 15Q22 15 24 21Q28 14 33 15Q38 15 37 22Q43 28 38 34Q36 39 29 37Q22 40 14 37Q8 38 6 31Z","wobble","M20 31q4 2 8-1",4.1],["cobalt","Cobalt","#789cff","M7 34Q4 27 11 22Q11 15 17 15Q24 9 30 15Q37 15 37 23L41 31Q43 38 35 37L29 35Q21 41 16 36Q10 40 7 34Z","hop","M16 18l5-1",3.5],["rose","Rose","#ff82b5","M7 26Q5 18 14 17Q15 9 22 12Q26 13 27 17Q36 11 39 19Q44 25 37 30Q39 37 32 38Q26 40 22 35Q13 42 10 35Q6 32 7 26Z","sway","M12 30l3 1",4],["pearl","Pearl","#f4f4f4","M7 32Q8 25 13 22Q13 11 23 11Q33 10 34 21Q40 24 40 33Q39 40 32 36Q28 40 23 37Q18 41 14 37Q9 39 7 32Z","breathe","M19 32q4 2 7-1",4.8]].map(([i,e,t,n,r,s,a])=>({id:i,label:e,color:t,accent:t,edge:i==="pearl"?"#dfdfdf":iv(t),path:n,motion:r,mark:s,period:a})),rv={amethyst:'<path d="m13 20 3-6 2 5" fill="#8e438b"/><path d="m30 29 3-1m-3 3 3 1"/>',glacier:'<path d="m16 14 1-4 4 2m2 0 3-4 2 4" fill="#c7fcff" stroke="none"/><path d="m13 30 4 1"/>',amber:'<path d="m16 20 1-3m3 2 1-3m3 2 1-3" opacity=".45"/><path d="M20 28q2 3 4 0"/>',crimson:'<path d="m12 26 3 1m15-2 3-1" stroke="#ffb6b5"/><path d="M21 29q2 2 4-1"/>',tangerine:'<path d="M20 16q-7-7-12-3 5 5 12 3" fill="#788340" stroke="none"/><path d="M23 29h2"/>',lemon:'<path d="m17 17 2-3 2 4m10 1 2-3" stroke="#a0843d"/><path d="M21 29q2 2 4 0"/>',leaf:'<path d="M27 18q2-4 6-6m-5 5 4 0" stroke="#518441"/><path d="M20 29q2 2 4 0"/>',lagoon:'<path d="m13 29 3 1m13-1 3-2" stroke="#a8fff0"/><path d="M20 29q3 3 6-1"/>',cobalt:'<path d="M12 22q3-8 10-7l9-1 2 5q-12-2-21 3" fill="#384475" stroke="none"/><path d="M21 30l3-1"/>',rose:'<path d="M16 17q0-5 4-5l3 5q-3 2-7 0" fill="#ffe1ee" stroke="none"/><path d="m12 28 4 2m15-2 2-2" stroke="#f8bed2"/>',pearl:'<path d="M13 23q10-14 22 1" stroke="#a9a9a9"/><path d="m19 32 2-2 2 3 3-3"/>'};function sv(i,e="tone"){const t=i.color;return`<svg viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="${e}-${i.id}" cx="34%" cy="20%" r="80%"><stop stop-color="white" stop-opacity=".68"/><stop offset=".44" stop-color="${t}"/><stop offset=".76" stop-color="${t}"/><stop offset="1" stop-color="#151023" stop-opacity=".52"/></radialGradient></defs><g class="body"><path d="${i.path}" fill="${t}"/><path d="${i.path}" fill="url(#${e}-${i.id})"/><path d="M12 32q6 6 15 4" fill="none" stroke="white" stroke-opacity=".18" stroke-width="1.1"/><ellipse cx="15.7" cy="28" rx="2.1" ry="1.1" fill="#e89cb9" opacity=".38"/><ellipse cx="30" cy="27" rx="2" ry="1" fill="#e89cb9" opacity=".36"/><g fill="#201822"><ellipse cx="19" cy="25" rx="1.85" ry="2.5"/><ellipse cx="27" cy="24" rx="1.85" ry="2.45"/></g><g fill="#fff"><circle cx="18.6" cy="24.1" r=".61"/><circle cx="26.6" cy="23.1" r=".60"/></g><path d="M13 21q1.3-3.8 4.8-4.6" stroke="#fff" opacity=".42" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="${i.mark}" fill="none" stroke="#392639" stroke-opacity=".66" stroke-width="1.35" stroke-linecap="round"/><g fill="none" stroke="#4a3747" stroke-width="1.25" stroke-linecap="round">${rv[i.id]}</g></g></svg>`}function av(i,e){let t=null,n=0,r=!1,s=-1/0,a=NaN,o=NaN,l=!1;const c=_=>_ instanceof Element&&!_.closest("[data-audio-silent]")?_.closest('button,a[href],summary,input[type="range"],[role="tab"]'):null,u=()=>{clearTimeout(n),n=0},h=()=>{if(!t||r||n||t.closest("[inert]")||t.matches(":disabled"))return;const _=t;n=window.setTimeout(()=>{n=0,!(t!==_||r||document.hidden||!_.isConnected||_.closest("[inert]")||_.matches(":disabled")||performance.now()-s<150)&&(r=!0,s=performance.now(),i())},45)},d=_=>{if(_.pointerType!=="mouse")return;const E=c(_.target);E!==t&&(u(),t=E,r=!1)},p=_=>{if(_.pointerType!=="mouse"||!_.isTrusted)return;l=!1;const E=Number.isNaN(a)||Math.hypot(a-_.clientX,o-_.clientY)>1;a=_.clientX,o=_.clientY,E&&c(_.target)===t&&h()},g=_=>{c(_.relatedTarget)!==t&&(u(),t=null,r=!1)},v=_=>{l=_.isTrusted&&["Tab","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(_.key)},m=_=>{l&&(l=!1,u(),t=c(_.target),r=!1,h())},f=()=>{u(),r=!0,e()},T=()=>{document.hidden&&f()},y=()=>{u(),r=!0};return document.addEventListener("pointerdown",f,!0),document.addEventListener("visibilitychange",T),document.addEventListener("pointerover",d),document.addEventListener("pointermove",p),document.addEventListener("pointerout",g),document.addEventListener("keydown",v,!0),document.addEventListener("focusin",m),document.addEventListener("scroll",y,!0),()=>{u(),document.removeEventListener("pointerdown",f,!0),document.removeEventListener("visibilitychange",T),document.removeEventListener("pointerover",d),document.removeEventListener("pointermove",p),document.removeEventListener("pointerout",g),document.removeEventListener("keydown",v,!0),document.removeEventListener("focusin",m),document.removeEventListener("scroll",y,!0)}}const ov="https://soundcloud.com/lumen-chan/yume-nikki-rooftop",lv=174624083,_c="https://w.soundcloud.com/player/",cv=16;function uv(i,e){const t=document.querySelector("#music-status");let n=!0,r=!1,s=!0,a=!1,o=!1,l=!1,c="idle",u=0,h=0,d,p,g;const v=()=>n&&r&&s&&!document.hidden;function m(R){c=R,i.dataset.status=R,t.hidden=e.hidden=R!=="unavailable"}function f(){clearTimeout(h),h=0}function T(R){R.setVolume(0),R.pause()}function y(R){R===u&&(u++,f(),p&&T(p),a=o=l=!1,d?.remove(),g?.remove(),d=g=p=void 0,m("unavailable"))}function _(){if(!a||!p)return;if(!v()){f(),o=!1,T(p),m("paused");return}if(o)return;o=!0,p.setVolume(cv),l&&(l=!1,p.seekTo(0)),m("loading");const R=u;h=window.setTimeout(()=>y(R),8500),p.play()}function E(){if(!v()||d||c==="unavailable")return;const R=++u;m("loading");const w=document.createElement("iframe");d=w,w.title="Yume Nikki - Rooftop by Lana on SoundCloud",w.allow="autoplay; encrypted-media",w.inert=!0;const S=new URLSearchParams({url:ov,auto_play:"false",visual:"false",show_artwork:"false"});w.src=_c+"?"+S,w.addEventListener("error",()=>y(R),{once:!0});function x(B){if(R===u)try{const k=B(w);p=k;const X=(V,W)=>k.bind(B.Events[V],()=>{R===u&&W()});X("READY",()=>{a||(k.setVolume(0),k.getCurrentSound(V=>{if(!(R!==u||a)){if(!V||Number(V.id)!==lv){y(R);return}f(),a=!0,w.inert=!1,_()}}))}),X("PLAY",()=>{if(!a||!v()){T(k);return}f(),o=!0,m("playing")}),X("PAUSE",()=>{c==="playing"&&(o=!1,m("paused"))}),X("FINISH",()=>{f(),o=!1,l=!0,_()}),X("ERROR",()=>y(R))}catch{y(R)}}i.append(w),h=window.setTimeout(()=>y(R),16e3);const L=window.SC?.Widget;if(L){x(L);return}const I=document.createElement("script");g=I,I.src=_c+"api.js",I.onload=()=>{const B=window.SC?.Widget;B?x(B):y(R)},I.onerror=()=>y(R),document.head.append(I)}function A(){E(),_()}return e.addEventListener("click",()=>{n&&(r=!0,m("idle"),A())}),document.addEventListener("visibilitychange",A),addEventListener("pagehide",()=>{s=!1,_()}),addEventListener("pageshow",()=>{s=!0,A()}),{arm(){n&&(r=!0,A())},enable(R){n=R,d&&(d.hidden=!n),A()}}}const hv=["intent","open","close","choose","step","play","pause","detail","back","retry","link","submerge","emerge","unmute"],dv=new Set(["submerge","emerge"]),lh=uv(document.querySelector("#music-player"),document.querySelector("#music-retry")),So=new Map;let pn,xc,Nn,Br,Ei=!0,zo=0,yc=-1/0,Mc=-1/0;const tr=new Map;function ch(i){const e=So.get(i);if(e)return e;xc??=new OfflineAudioContext(1,1,48e3);const t=i==="emerge"?"019":i==="submerge"?"017":"011",n=fetch(new URL(`audio/${t}/${i}.wav`,document.baseURI)).then(r=>{if(!r.ok)throw Error("Audio unavailable");return r.arrayBuffer()}).then(r=>xc.decodeAudioData(r)).catch(r=>{throw So.delete(i),r});return So.set(i,n),n}function gl(){zo++;for(const i of tr.keys())i.stop();tr.clear()}function uh(){for(const[i,e]of tr)e==="intent"&&i.stop()}function ko(){if("OfflineAudioContext"in window)for(const i of hv)ch(i).catch(()=>{})}function fv(i){i!==Ei&&!i&&gl(),Ei=i,Nn&&pn&&Nn.gain.setValueAtTime(i?.84:0,pn.currentTime),lh.enable(i)}function Ea(){if(!(!Ei||document.hidden)){lh.arm();try{pn??=new AudioContext({latencyHint:"interactive"}),Nn||(Nn=pn.createGain(),Nn.gain.value=.84,Nn.connect(pn.destination),Br=pn.createGain(),Br.gain.value=.55,Br.connect(Nn)),pn.state==="suspended"&&pn.resume().catch(()=>{}),ko()}catch{}}}async function wn(i){if(!Ei||document.hidden||!pn||!Nn)return;const e=performance.now();if(i==="intent"){if(e-yc<170||e-Mc<110)return;yc=e}else Mc=e,uh();const t=zo;try{const n=await ch(i);if(t!==zo||!Ei||document.hidden||tr.size>=5||pn.state!=="running"||performance.now()-e>(dv.has(i)?460:220))return;const r=pn.createBufferSource();r.buffer=n,r.connect(i==="submerge"&&Br?Br:Nn),tr.set(r,i),r.onended=()=>{tr.delete(r),r.disconnect()},r.start()}catch{}}av(()=>{wn("intent")},uh);document.querySelector("#music-retry")?.addEventListener("click",()=>{wn("retry")});document.addEventListener("visibilitychange",()=>{document.hidden&&gl()});addEventListener("pagehide",gl);document.addEventListener("pointerup",i=>{i.isTrusted&&i.isPrimary&&!i.target?.closest?.("#sound-toggle")&&Ea()},!0);document.addEventListener("keydown",i=>{i.isTrusted&&!i.repeat&&!["Shift","Alt","Control","Meta"].includes(i.key)&&!i.target?.closest?.("#sound-toggle")&&Ea()},!0);document.addEventListener("click",i=>{i.isTrusted&&i.target?.closest?.("a[href]")&&wn("link")});"requestIdleCallback"in window?requestIdleCallback(()=>{Ei&&ko()},{timeout:850}):setTimeout(()=>{Ei&&ko()},320);const hh="amethyst.palette.v1",dh=i=>lr.find(e=>e.id===i)??lr[0],vl=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)/255),jn=i=>new URL("intro-media/"+i,document.baseURI).href;let nt=lr[0];try{nt=dh(localStorage.getItem(hh))}catch{}function Sc(i){nt=dh(i);try{localStorage.setItem(hh,nt.id)}catch{}const e=document.documentElement;e.dataset.palette=nt.id,document.title="CachyOS "+nt.label,document.querySelector("meta[name=description]").content="Explore CachyOS "+nt.label+" and its native desktop recordings.",document.querySelector("#edition-name").textContent=nt.label,e.style.setProperty("--accent",nt.accent),e.style.setProperty("--edge",nt.edge);for(const t of["lake","mobile"])e.style.setProperty("--"+t,`url("${jn(nt.id+"-"+t+".webp")}")`);window.dispatchEvent(new Event("amethyst-palette"))}function pv(i){const e=document.createElement("div");e.className="palette-picker segment";const t=document.createElement("button");t.type="button",t.className="gooey-label",t.id="menu-trigger",t.textContent="Colors",t.setAttribute("aria-controls","palette-pets"),t.setAttribute("aria-expanded","false");const n=document.createElement("div");n.id="palette-pets",n.className="palette-pets",n.setAttribute("role","group"),n.setAttribute("aria-label","Desktop colorway"),e.append(t,n);const r=matchMedia("(prefers-reduced-motion: reduce)"),s=[[4,-1],[-3,-3],[2,-1],[-5,-1],[6,-1],[-2,-3],[5,-1],[-6,-1],[2,-4],[-3,-2],[1,-1]];function a(c=!1,u=!1){e.classList.contains("open")&&(e.classList.remove("open"),u&&wn("close"),t.setAttribute("aria-expanded","false"),c&&!e.hidden&&t.focus({preventScroll:!0}))}async function o(c,u){if(!r.matches&&document.body.dataset.reduced==="false"){const[h,d]=s[lr.indexOf(c)];u.querySelector("svg").animate([{transform:"scale(1)"},{transform:"scale(1.18,.79)"},{transform:`translateY(${d}px) rotate(${h}deg) scale(.94,1.11)`},{transform:"scale(1)"}],{duration:295+c.period*12,easing:"ease-out"})}await i(c.id),nt.id===c.id&&a(!0)}for(const[c,u]of lr.entries()){const h=document.createElement("button");h.type="button",h.className="pet",h.dataset.colorway=u.id,h.title=u.label,h.setAttribute("aria-label",u.label),h.style.setProperty("--pet-color",u.accent),h.style.setProperty("--period",u.period+"s"),h.style.setProperty("--delay",-c*.67+"s"),h.style.setProperty("--pet-tilt",s[c][0]+"deg"),h.dataset.idle=u.motion,h.innerHTML=sv(u)+"<span>"+u.label+"</span>",h.onclick=()=>{o(u,h)},n.append(h)}function l(){for(const c of n.children)c.setAttribute("aria-pressed",String(c.dataset.colorway===nt.id));t.setAttribute("aria-label","Colors, current theme "+nt.label)}return l(),addEventListener("amethyst-palette",l),t.onclick=()=>{if(e.classList.contains("open"))return a(!0,!0);e.classList.add("open"),wn("open"),t.setAttribute("aria-expanded","true"),n.querySelector("[aria-pressed=true]")?.focus({preventScroll:!0})},n.addEventListener("keydown",c=>{if(c.altKey||c.ctrlKey||c.metaKey)return;const u={ArrowLeft:-1,ArrowRight:1,ArrowUp:-2,ArrowDown:2,Home:0,End:0};if(!(c.key in u))return;c.preventDefault();const h=[...n.children],d=c.key==="Home"?0:c.key==="End"?h.length-1:(h.indexOf(c.target)+u[c.key]+h.length)%h.length;h[d].focus({preventScroll:!0}),h[d].scrollIntoView({block:"nearest",container:"nearest"})}),e.addEventListener("focusout",c=>{c.relatedTarget&&!e.contains(c.relatedTarget)&&a()}),document.addEventListener("click",c=>{e.contains(c.target)||a(!1,!0)}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.classList.contains("open")&&(c.preventDefault(),a(!0,!0))}),addEventListener("amethyst-panel",()=>a()),{picker:e,group:n,close:a}}const _l=1200,xl=641,yl=70,fh=Object.freeze({left:-160,span:1520,base:567,rise:369,compactDrop:50}),ph=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function ka(i,e){const t=ph((i/e-.9)/.58),n=Math.min(i/1090,e/630),r=Math.min(i/704,e/672),s=r+(n-r)*t,a=787-170*t;return{left:i*.5-a*s,top:Math.max(0,e*.48-316*s)*t,scale:s,compact:1-t}}function mv(i,e){const{left:t,span:n,base:r,rise:s,compactDrop:a}=fh,o=Math.max(0,Math.min(1,(i-t)/n));return{y:r-s*ph(o)+a*e,spread:Math.hypot(1,s*6*o*(1-o)/n)}}function mh(){const i=document.createElement("canvas"),e=i.getContext("2d"),t='500 132px "Portfolio Inter", sans-serif';let n="";const r=214;return{canvas:i,period:1,invalidate(){n=""},update(s,a,o=!0){if(n===s.id)return!1;n=s.id,e.font=t;const l=s.label.toUpperCase()+"  /  ",c="CACHYOS  /  ",u=e.measureText(l).width,h=Math.ceil(u+e.measureText(c).width)+36,d=Math.min(3,a/h);return i.width=Math.floor(h*d),i.height=Math.floor(r*d),e.setTransform(i.width/h,0,0,i.height/r,0,0),o&&(e.fillStyle="#000",e.fillRect(0,0,h,r)),e.font=t,e.fillStyle=o?"#f00":s.accent,e.fillText(l,18,153),e.fillStyle=o?"#0f0":"#f0f0f0",e.fillText(c,18+u,153),this.period=h*yl/r,!0}}}const gv=`// Registered coordinates refer to the 1200 x 641 crop. The offline and live
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
`,Eo=document.querySelector("#download-repo"),vv=matchMedia("(prefers-reduced-motion: reduce)"),Ec=()=>vv.matches||document.body.dataset.reduced==="true";let Ha=-1/0,ei=0,cr=0,Ml=0;function gh(){dispatchEvent(new Event("amethyst-mirror-frame")),Ml=performance.now()-Ha<620?requestAnimationFrame(gh):0}function vh(){if(!ei&&!cr)return 0;const i=Math.max(0,Math.min(1,(performance.now()-Ha)/620));return i*i*(3-2*i)}function Yn(){clearTimeout(ei),clearTimeout(cr),cancelAnimationFrame(Ml),ei=cr=0,Ha=-1/0,delete document.body.dataset.mirror,dispatchEvent(new Event("amethyst-mirror-frame"))}Eo&&(Eo.addEventListener("click",i=>{i.defaultPrevented||i.button!==0||i.ctrlKey||i.metaKey||i.shiftKey||i.altKey||Ec()||(i.preventDefault(),!(ei||cr)&&(Ha=performance.now(),document.body.dataset.mirror="active",Ml=requestAnimationFrame(gh),ei=setTimeout(()=>{ei=0,cr=setTimeout(Yn,750),window.location.assign(Eo.href)},740)))}),addEventListener("pageshow",Yn),addEventListener("pagehide",Yn),addEventListener("popstate",Yn),addEventListener("hashchange",Yn),addEventListener("amethyst-preferences",()=>{Ec()&&ei&&Yn()}),addEventListener("keydown",i=>{i.key==="Escape"&&Yn()}));function _v(i,e){const t=i.querySelector(".closing"),n="amethyst.closing.016";let r=!1,s,a;try{r=sessionStorage.getItem(n)==="seen"}catch{}return o=>{const l=location.hash==="#download"?0:Math.min(180,innerHeight*.18),c=o&&(r||scrollY+innerHeight>=i.offsetTop+l);if(e()&&a?.cancel(),s!==c){if(s=c,i.classList.toggle("in-chapter",s),t.inert=!s,!s){a?.cancel(),(ei||cr)&&Yn();return}if(!r){r=!0;try{sessionStorage.setItem(n,"seen")}catch{}e()||(a=t.animate([{opacity:0},{opacity:1}],{duration:410,easing:"cubic-bezier(.2,.75,.25,1)"}))}}}}const _h=matchMedia("(max-width: 1050px)"),Kr=i=>(_h.matches?"compact/":"")+i,xh=i=>_h.addEventListener("change",i);function xv(i,e,t,n){let r=0,s=i;async function a(){const o=++r,l=Kr("portrait-plate.webp");if(s===l)return;const c=await Promise.allSettled([e(l,!0),e(Kr("portrait-masks.webp"),!1)]);if(o!==r||c.some(p=>p.status!=="fulfilled")){c.forEach(p=>{p.status==="fulfilled"&&p.value.dispose()});return}const[u,h]=c.map(p=>p.value),d=[t.portraitArt.value,t.portraitMasks.value];t.portraitArt.value=u,t.portraitMasks.value=h,s=l,n(),d.forEach(p=>p.dispose())}xh(a),a()}function Es(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function bo(i,e){const t=new Image;return t.src=jn(i),t.decode().then(()=>{const n=new Ct(t);return n.flipY=!1,n.generateMipmaps=e,n.minFilter=e?Sn:Dt,n.magFilter=Dt,n.needsUpdate=!0,n})}function yv(i,e){const t=document.createElement("canvas");t.className="poster-ribbon",t.setAttribute("aria-hidden","true"),i.insertBefore(t,i.querySelector("#lens"));const n=t.getContext("2d"),r=mh();let s,a,o;const l=()=>{const c=e.currentSrc;if(!c||!e.complete||!e.naturalWidth){s&&(t.width=0,s=null);return}const u=new URL("portrait-alpha.webp",c).href;if(u!==o&&(o=u,s=null,t.width=0,a=new Image,a.onload=l,a.src=u),!a.complete||!a.naturalWidth)return;const h=i.clientWidth,d=i.clientHeight;if(!h||!d)return;const p=vh(),g=[h,d,devicePixelRatio,nt.id,p].join("/");if(g===s)return;s=g,r.update(nt,4096,!1);const v=Math.min(devicePixelRatio,2,3840/h,2160/d),m=Math.round(h*v),f=Math.round(d*v);t.width!==m&&(t.width=m),t.height!==f&&(t.height=f),n.clearRect(0,0,m,f);const T=ka(h,d),y=1+.16*p,_=r.canvas.width*y/(T.scale*v*r.period);n.imageSmoothingQuality="high";for(let E=0;E<m;E++){const A=E/m,R=780+((E/v-T.left)/T.scale-780)*y,{y:w,spread:S}=mv(R,T.compact),x=(T.top+(382+(w+62*p-382)/y)*T.scale)*v,L=yl*S*T.scale*v/y,I=1-x/f,B=(1-Es(.36,.64,A))*Es(.14,.27,I)*(1-Es(.66,.77,I));n.globalAlpha=(1-Es(.846,.982,A))*(1-.94*B*Math.min(1,p/.6));const X=((R/r.period+.11)%1+1)%1*r.canvas.width;n.drawImage(r.canvas,X,0,Math.min(_,r.canvas.width-X),r.canvas.height,E,x-L*.5,1,L)}n.globalAlpha=1,n.globalCompositeOperation="destination-out",n.drawImage(a,T.left*v,T.top*v,_l*T.scale*v,xl*T.scale*v),n.globalCompositeOperation="source-over"};return e.addEventListener("load",l),xh(()=>requestAnimationFrame(l)),l(),addEventListener("amethyst-mirror-frame",()=>{i.classList.contains("ready")||l()}),addEventListener("amethyst-palette",l),new ResizeObserver(l).observe(i),document.fonts.load('500 132px "Portfolio Inter"').catch(()=>{}).then(()=>{s=null,r.invalidate(),l()}),t}async function Mv(i,e,t,n){const r=Kr("portrait-plate.webp"),s=Kr("portrait-masks.webp"),[a,o]=await Promise.all([bo(r,!0),bo(s,!1),document.fonts.load('500 132px "Portfolio Inter"')]),l=new mr({alpha:!1,antialias:!1,depth:!1,powerPreference:"high-performance"}),c=l.domElement;c.className="portrait-live",c.setAttribute("aria-hidden","true"),i.insertBefore(c,i.querySelector("#lens"));const u=mh();let h;function d(){h?.dispose(),h=new Fa(u.canvas),h.wrapS=Wr,h.minFilter=Sn,h.anisotropy=Math.min(8,l.capabilities.getMaxAnisotropy()),p.ink.value=h}const p={depthMirror:{value:0},portraitArt:{value:a},portraitMasks:{value:o},portraitAccent:{value:new O},portraitTime:{value:0},phase:{value:.11},ink:{value:null},period:{value:1},view:{value:new at},motionBuffer:{value:new we(1,1)},compact:{value:0},lensCenter:{value:new we},lensRadius:{value:0}},{left:g,span:v,base:m,rise:f,compactDrop:T}=fh,y=W=>W.toFixed(1),_=new bt({depthTest:!1,depthWrite:!1,uniforms:p,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:gv+`
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
        float t=clamp((p.x-(${y(g)}))/${y(v)},0.,1.);
        float curve=${y(m)}-${y(f)}*t*t*(3.-2.*t)+${y(T)}*compact;
        float slope=-${y(f)}*6.*t*(1.-t)/${y(v)};
        float band=.5-(p.y-curve)/(sqrt(1.+slope*slope)*${y(yl)});
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
    `}),E=new Pi,A=new Ci;E.add(new xt(new on(2,2),_));let R=0,w=0,S=!1,x=!0;function L(){return!S&&x&&!document.hidden&&e().portraitActive}function I(){u.update(nt,l.capabilities.maxTextureSize)&&(d(),p.period.value=u.period,p.portraitAccent.value.set(...vl(nt.accent)))}function B(W=!1){if(!W&&!L())return;I(),p.depthMirror.value=vh();const{x:z,y:ee,radius:ie}=n;p.lensCenter.value.set(z,ee),p.lensRadius.value=ie,l.render(E,A),W||i.classList.add("ready")}function k(W){if(R=0,!L()){w=0;return}const z=w?Math.max(0,Math.min(.05,(W-w)/1e3)):0;w=W,e().motion&&(p.portraitTime.value=(p.portraitTime.value+z)%8,p.phase.value=(1+p.phase.value-z*e().pxSpeed/u.period)%1),B(),e().motion?R=requestAnimationFrame(k):w=0}function X(){L()?R||(R=requestAnimationFrame(k)):(cancelAnimationFrame(R),R=w=0)}function V(){const{width:W,height:z}=i.getBoundingClientRect();if(!W||!z||S)return;const ee=ka(W,z);p.view.value.set(-ee.left/ee.scale,-ee.top/ee.scale,W/ee.scale,z/ee.scale),p.motionBuffer.value.set(W,z),p.compact.value=ee.compact,l.setPixelRatio(Math.min(devicePixelRatio,2,3840/W,2160/z)),l.setSize(W,z,!1),t(),X()}if(addEventListener("amethyst-mirror-frame",X),addEventListener("pagehide",()=>{x=!1,X()}),addEventListener("pageshow",()=>{x=!0,X()}),document.addEventListener("visibilitychange",X),addEventListener("resize",V),c.addEventListener("webglcontextlost",W=>{W.preventDefault(),S=!0,i.classList.remove("ready"),i.dispatchEvent(new Event("portrait-unavailable")),X()}),c.addEventListener("webglcontextrestored",()=>{S=!1,p.portraitArt.value.needsUpdate=!0,p.portraitMasks.value.needsUpdate=!0,h.needsUpdate=!0,V(),i.dispatchEvent(new Event("portrait-restored"))}),V(),I(),!L())try{await l.compileAsync(E,A),l.initTexture(a),l.initTexture(o),l.initTexture(h),!S&&!document.hidden&&B(!0)}catch{}return xv(r,bo,p,X),{redraw:X,syncPreferences:X,retry:X,snapshot(W){L()&&i.classList.contains("ready")&&(B(),W(c))}}}function Sv(i,e=2.65){const t=e/2,n=.072,r=t-n,s=[-t,-r-n*.5,-r,r,r+n*.5,t],a=new i(e,e,e,5,5,5),{position:o,normal:l,uv:c}=a.attributes;function u(d){return s[Math.round((d/e+.5)*5)]}const h=d=>Math.max(-r,Math.min(r,d));for(let d=0;d<o.count;++d){const p=u(o.getX(d)),g=u(o.getY(d)),v=u(o.getZ(d)),m=p-h(p),f=g-h(g),T=v-h(v),y=Math.hypot(m,f,T);l.setXYZ(d,m/y,f/y,T/y),o.setXYZ(d,h(p)+n*m/y,h(g)+n*f/y,h(v)+n*T/y),c.setXY(d,u((c.getX(d)-.5)*e)/e+.5,u((c.getY(d)-.5)*e)/e+.5)}return a}function Ev(i){const e=new i(2,2,104,128),t=e.attributes.position,n=(r,s,a)=>Math.sign(r)*(s*Math.abs(r)+(a-s)*Math.abs(r)**3);for(let r=0;r<t.count;r++){const s=t.getX(r),a=-t.getY(r);t.setXYZ(r,n(s,8,95),-(n(a,9,a<0?151:69)+41),0)}return e.computeBoundingSphere(),e}function bv(i){let e;return(t,n=!1)=>{if(e===void 0||n){e=t>=.312;return}!e&&t>=.329?(e=!0,i("submerge")):e&&t<=.295&&(e=!1,i("emerge"))}}const bc=`
uniform vec2 crossing; // elapsed seconds, signed strength
float wakeHeight(vec2 at) {
  if (crossing.x>=2.3 || crossing.y==0.) return 0.;
  float r=length(at), age=crossing.x;
  float front=r-1.25-age*3.45;
  float packet=exp(-front*front*1.35)*exp(-age*1.50);
  return crossing.y*.18*packet*cos(front*5.3)*smoothstep(0.,.09,age)*(1.-smoothstep(1.8,2.3,age));
}`,wv=`// Endpoints and distances are expressed in the contact's local tangent frame.
uniform float fractureAge, fractureStrength, reducedScene;
uniform vec3 strikeNormal;
uniform vec4 faultLines[18], faultSpans[18];
varying vec3 coreRay;

vec4 faultSurface(vec2 point,float head,float closure) {
  vec4 closest=vec4(10.,0.,0.,0.);
  for(int i=0;i<18;i++){
    vec4 span=faultSpans[i];
    // Short offshoots lag behind the trunk and close earlier.
    float delay=i<12?0.:.045+.22*closure;
    float remaining=head-delay-span.x;
    if(remaining<=0.)continue;
    vec4 line=faultLines[i];
    vec2 segment=line.zw-line.xy;
    float advance=min(1.,remaining/max(span.y-span.x,.0001));
    float ahead=clamp(dot(point-line.xy,segment)/dot(segment,segment),0.,advance);
    vec2 delta=point-line.xy-ahead*segment;
    float distanceToSplit=length(delta);
    if(distanceToSplit>=closest.x)continue;
    float signedSide=(segment.x*delta.y-segment.y*delta.x)*inversesqrt(dot(segment,segment));
    float path=mix(span.x,span.y,ahead);
    float taper=smoothstep(0.,.10,head-delay-path);
    closest=vec4(distanceToSplit,signedSide,path,mix(span.z,span.w,ahead)*taper);
  }
  return closest;
}
`,Tv=`  vec3 beam=normalize(coreRay);
  float axis=length(local-beam*dot(local,beam));
  vec3 glow=mix(accentLight(vec3(.78,.28,1.)),vec3(.88),.13);
  vec3 innerHue=mix(glow,glow.brg,.18);
  float motion=1.-reducedScene;
  float breath=.5+.5*sin(t*.78);
  float pulse=pow(max(0.,sin(3.141593*fract(t*.114-.30*local.y+.16*local.x))),8.)*motion;
  col+=mix(glow,innerHue,pulse)*exp(-2.8*axis*axis)*(.12+.036*breath*motion+.10*pulse);
  col+=glow*pulse*(.090*hairline+.052*inclusion);

  float closure=smoothstep(.58,1.34,fractureAge);
  float opening=smoothstep(.025,.285,fractureAge)*(1.-closure);
  if(opening>.001){
    vec3 diff=local-cubeHit;
    vec3 side=normalize(cross(strikeNormal,abs(strikeNormal.y)>.85?vec3(1.,0.,0.):vec3(0.,1.,0.)));
    vec3 across=cross(strikeNormal,side);
    vec2 plane=vec2(dot(diff,side),dot(diff,across));
    float head=smoothstep(.01,.35,fractureAge)*(1.-smoothstep(.66,1.32,fractureAge));
    vec4 split=faultSurface(plane,head,closure);
    float aa=clamp(.53*length(fwidth(plane)),.0015,.035);
    float transmission=exp(-abs(dot(diff,strikeNormal))*7.2);
    float aperture=split.w*opening*mix(.62,1.,fractureStrength)*mix(.35,1.,motion);
    float viewSide=clamp(dot(beam,side)*.75+dot(beam,across)*.25,-.7,.7);
    float lip=1.-smoothstep(aperture,aperture+.95*aa,split.x);
    float wall=1.-smoothstep(aperture*.44,aperture*.96+aa,abs(split.y-aperture*(.30+.32*viewSide)));
    wall*=1.-smoothstep(aperture*.72,aperture+aa,split.x);
    float facet=1.-smoothstep(aperture*.37,aperture*.70+aa,abs(split.y+aperture*.26));
    facet*=1.-smoothstep(aperture*.53,aperture+aa,split.x);
    float front=.04+1.04*smoothstep(.04,.72,fractureAge);
    float wave=exp(-pow((split.z-front)*7.4,2.));
    float afterglow=exp(-3.8*max(0.,fractureAge-.32-.62*split.z));
    float strength=opening*fractureStrength*transmission*mix(.39,1.,motion);
    vec3 interior=mix(innerHue,glow,.31+.18*viewSide);
    col*=1.-.80*lip*strength;
    col+=interior*wall*strength*(.13+.72*wave+.26*afterglow);
    col+=mix(interior,vec3(.94),.32)*facet*strength*(.12+.43*wave);
    col+=glow*exp(-split.x*21.)*strength*(.04+.13*wave)*afterglow;
  }
`,Av=`
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
float grain(vec2 p){return noise2(p)*.53+noise2(p*2.11+17.)*.27+noise2(p*4.31-11.)*.13+noise2(p*8.73)*.07;}
`,Va="varying vec3 world,local,norm;varying vec2 tex;",Rv=Va+"void main(){vec4 w=modelMatrix*vec4(position,1.);world=w.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;gl_Position=projectionMatrix*viewMatrix*w;}",gi=`
uniform vec3 paletteAccent;
uniform float recolor, pearl;
vec3 neutralPearl(vec3 color) { return mix(color,vec3(dot(color,vec3(.2126,.7152,.0722))),pearl); }
vec3 accentLight(vec3 violet) {
  float energy = max(violet.r, max(violet.g, violet.b));
  float character = (min(violet.r,min(violet.g,violet.b)) / max(energy,.001));
  return mix(violet, energy*mix(paletteAccent,vec3(1.),character*.76),recolor);
}
`;function Ga(i,e,t={}){return new bt({uniforms:i,vertexShader:Rv,fragmentShader:Va+Av+gi+e,...t})}function Cv(i){return Ga(i,`uniform vec3 lightAt;uniform float t;
 void main(){
  vec3 dir=normalize(world-cameraPosition),beacon=normalize(lightAt-cameraPosition);
  float horizon=exp(-abs(dir.y+.015)*7.),halo=pow(max(dot(dir,beacon),0.),56.);
  float mist=grain(dir.xz*4.7+dir.y*2.+vec2(t*.007,0));
  vec3 col=mix(vec3(.016,.014,.027),vec3(.130,.126,.157),horizon);
  col+=accentLight(vec3(.32,.105,.44))*(halo*.91+pow(halo,3.)*.65)*(.58+.48*mist);
  col+=vec3(.029,.021,.041)*mist*(1.-smoothstep(.05,.85,abs(dir.y)));
  col+=(hash(gl_FragCoord.xy)-.5)*.007;
  gl_FragColor=vec4(neutralPearl(col),1.);
 }`,{side:Ft,depthWrite:!1})}const Pv=`uniform vec3 lightAt;
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
`;function Lv(i){return Ga(i,Pv+`
 void main(){
  vec3 col=bankAlbedo(world,norm);
  float distanceFog=bankFog(world);
  gl_FragColor=vec4(neutralPearl(mix(col,vec3(.12,.10,.17),distanceFog*.63)),1.);
 }`)}function Dv(i){return Ga(i,`uniform float t,cubePulse,contact;uniform vec3 cubeHit;
 ${wv}
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
  col+=accentLight(vec3(.64,.28,.89))*.16*impulse;
  col+=accentLight(vec3(.73,.43,.95))*(impulse*(.08+pane*.35+.52*seams)+contact*.09);
  ${Tv}
  gl_FragColor=vec4(neutralPearl(col),1.);
 }`,{vertexShader:Va+`varying vec3 coreRay;
 void main(){
  vec4 w=modelMatrix*vec4(position,1.);
  vec3 eyePoint=(viewMatrix*w).xyz;
  coreRay=vec3(dot(modelViewMatrix[0].xyz,eyePoint),dot(modelViewMatrix[1].xyz,eyePoint),
               dot(modelViewMatrix[2].xyz,eyePoint));
  world=w.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;
  gl_Position=projectionMatrix*vec4(eyePoint,1.);
 }`})}function Iv(i){return Ga(i,bc+`uniform float t;uniform sampler2D mirror;uniform mat4 reflector;uniform vec3 lightAt;
 uniform float contact;
 float ridge(vec2 p){return sin(p.x*.7+p.y*4.5+noise2(p*.6)*5.+t*.42)*.50+sin(p.y*10.5+p.x*.8+noise2(p*1.4)*4.-t*.56)*.28+sin(p.y*24.4+p.x*2.+t*.64)*.12;}
 void main(){
  vec2 p=world.xz;float wave=ridge(p),w2=ridge(p*.67+vec2(.38,1.1));float dist=length(cameraPosition-world);
  vec4 reflection=reflector*vec4(world,1.);vec2 st=reflection.xy/reflection.w*.5+.5;
  float rough=smoothstep(2.,36.,dist);
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
  water+=accentLight(vec3(.96,.54,1.))*max(0.,impact)*.43;
  gl_FragColor=vec4(neutralPearl(water),1.);
 }`,{vertexShader:Va+bc+`void main(){
  vec4 pos=modelMatrix*vec4(position,1.);
  pos.y+=wakeHeight(pos.xz);
  world=pos.xyz;local=position;norm=mat3(modelMatrix)*normal;tex=uv;
  gl_Position=projectionMatrix*viewMatrix*pos;
 }`})}function Uv({cube:i,camera:e,canvas:t,eligible:n,pick:r,wake:s,reduced:a,Vector3:o}){const l=i.quaternion.clone().identity(),c=l.clone(),u=l.clone(),h=l.clone(),d=new o(0,1,0),p=new o,g=new o,v=new o;let m=null,f=0,T=0,y=0,_=0,E=0,A=!1,R=1,w=0,S=0;const x=document.createElement("button");x.type="button",x.className="crystal-control",x.setAttribute("aria-label","Spin crystal. Hold and drag, or use arrow keys."),x.dataset.audioSilent="",x.hidden=!0,document.body.append(x);function L(fe,Pe,Z){const J=(fe-w)/R,ce=(S-Pe)/R,Re=J*J+ce*ce;return Z.set(J,ce,Re<.5?Math.sqrt(1-Re):.5/Math.sqrt(Re)).normalize().applyQuaternion(e.quaternion)}function I(fe,Pe={}){t.dispatchEvent(new CustomEvent("amethyst-crystal",{detail:{type:fe,...Pe}}))}function B(){const fe=m;m=null,A=!1,delete x.dataset.dragging,fe!==null&&x.hasPointerCapture(fe)&&x.releasePointerCapture(fe)}function k(){E=0,B()}function X(fe){fe.button!==0||!fe.isPrimary||m!==null||!n()||r(fe)&&(m=fe.pointerId,f=fe.clientX,T=fe.clientY,y=_=performance.now(),L(f,T,p),x.setPointerCapture(m))}function V(fe){if(fe.pointerId!==m||!A&&Math.hypot(fe.clientX-f,fe.clientY-T)<5)return;A||(A=!0,x.dataset.dragging="");const Pe=performance.now(),Z=Math.max(.005,Math.min(.08,(Pe-_)/1e3));L(fe.clientX,fe.clientY,g),c.setFromUnitVectors(p,g);const J=2*Math.acos(Math.min(1,Math.max(-1,c.w)));J>1e-4&&(d.set(c.x,c.y,c.z).normalize(),E=Math.min(.72,.24*J/Z),l.premultiply(c.setFromAxisAngle(d,.24*J)).normalize()),p.copy(g),_=Pe,s()}function W(fe){if(fe.pointerId===m){if(A){const Pe=performance.now(),Z=Math.min(1,Math.max(0,(Pe-y-130)/670));E=Pe-_<110&&!a()?E*(.72+.28*Z):0,I("flick",{speed:E,axis:d.toArray()}),s()}B()}}x.addEventListener("pointerdown",X),x.addEventListener("pointermove",V),x.addEventListener("pointerup",W);for(const fe of["pointercancel","lostpointercapture"])x.addEventListener(fe,Pe=>{Pe.pointerId===m&&(k(),s())});x.addEventListener("keydown",fe=>{if(!n())return;if(fe.key==="Escape"){k();return}const Pe={ArrowLeft:[0,-1,0],ArrowRight:[0,1,0],ArrowUp:[-1,0,0],ArrowDown:[1,0,0]};Pe[fe.key]&&(fe.preventDefault(),d.set(...Pe[fe.key]).applyQuaternion(e.quaternion),l.premultiply(c.setFromAxisAngle(d,.065)),E=a()?0:.22,s()),(fe.key===" "||fe.key==="Enter")&&fe.preventDefault()});function z(){(m!==null||E)&&(k(),s())}addEventListener("blur",z),addEventListener("pagehide",z);for(const fe of["wheel","scroll"])addEventListener(fe,z,{passive:!0});t.addEventListener("webglcontextlost",()=>{k(),x.hidden=!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&k()});let ee=performance.now(),ie="",ue=0;const Ae=new o;function Ve(fe,Pe,Z=!0){const J=performance.now();if(!Z){i.quaternion.premultiply(h);return}const ce=Math.min(.18,Math.max(0,(J-ee)/1e3));ee=J;const Re=fe&&Pe<.045&&i.visible;if(x.hidden===Re&&(x.hidden=!Re),!Re&&m!==null&&k(),A||(a()?E=0:(E>.002&&(l.premultiply(c.setFromAxisAngle(d,E*ce)),E*=Math.exp(-2.65*ce)),l.slerp(u,-Math.expm1(-.83*ce)),l.angleTo(u)<18e-5&&E<.002&&l.identity())),a()?h.copy(l):h.slerp(l,-Math.expm1(-ce*(A?13:8))),i.quaternion.premultiply(h),Re&&(J>=ue||!ie)){let Se=function(Ze){const oe=[];for(const Ie of Ze){for(;oe.length>=2;){const ot=oe.at(-2),lt=oe.at(-1);if((lt[0]-ot[0])*(Ie[1]-ot[1])-(lt[1]-ot[1])*(Ie[0]-ot[0])>0)break;oe.pop()}oe.push(Ie)}return oe.slice(0,-1)};var Ce=Se;ue=J+30,v.copy(i.position).project(e);const Le=t.clientWidth,st=t.clientHeight;w=(v.x+1)*Le*.5,S=(1-v.y)*st*.5,R=st*1.48/(2*Math.tan(e.fov*Math.PI/360)*e.position.distanceTo(i.position));const D=Math.ceil(R*3.13),Ke=[Math.round(w-D/2),Math.round(S-D/2),D].join("/");Ke!==ie&&(ie=Ke,x.style.cssText="left:"+Math.round(w-D/2)+"px;top:"+Math.round(S-D/2)+"px;width:"+D+"px;height:"+D+"px"),i.updateMatrixWorld();const Ne=[];for(const Ze of[-1.325,1.325])for(const oe of[-1.325,1.325])for(const Ie of[-1.325,1.325])Ae.set(Ze,oe,Ie).applyMatrix4(i.matrixWorld).project(e),Ne.push([(Ae.x+1)*Le/2-Math.round(w-D/2),(1-Ae.y)*st/2-Math.round(S-D/2)]);Ne.sort((Ze,oe)=>Ze[0]-oe[0]||Ze[1]-oe[1]);const xe=[...Se(Ne),...Se(Ne.reverse())];x.style.clipPath="polygon("+xe.map(Ze=>Ze.map(oe=>Math.round(oe)+"px").join(" ")).join(",")+")"}}return Ve.active=()=>A||h.angleTo(u)>25e-5||E>.002,Ve.hide=()=>{k(),l.identity(),h.identity(),x.hidden=!0},Ve}function Nv(i,e){const t=[],n=[[-.53,-.28],[-.18,-.48],[.49,-.25],[.39,.19],[.08,.46],[-.46,.29]],r=n.map(([l,c])=>[l,.22+.17*l-.13*c,c]),s=n.map(([l,c])=>[l*.77+.045,-.23+.19*c,c*.79-.05]),a=(l,c,u)=>t.push(...l,...c,...u);for(let l=0;l<n.length;l++){const c=(l+1)%n.length;a([-.1,.38,.03],r[c],r[l]),a([.02,-.27,0],s[l],s[c]),a(s[l],r[l],r[c]),a(s[l],r[c],s[c])}const o=new i;return o.setAttribute("position",new e(t,3)),o.computeVertexNormals(),o}function Fv({ShaderMaterial:i,InstancedMesh:e,Object3D:t,Vector3:n},r,s,a){const l=(I=>()=>(I=Math.imul(I,1664525)+1013904223>>>0,I/4294967296))(79),c=`varying vec3 facet,eye;varying float height;
  void main(){
   mat4 m=modelMatrix*instanceMatrix;
   vec4 p=m*vec4(position,1.);
   height=p.y;eye=cameraPosition-p.xyz;
   vec3 c0=m[0].xyz,c1=m[1].xyz,c2=m[2].xyz;
   facet=cross(c1,c2)*normal.x+cross(c2,c0)*normal.y+cross(c0,c1)*normal.z;
   gl_Position=projectionMatrix*viewMatrix*p;
  }`,u=gi+`varying vec3 facet,eye;varying float height;
      void main(){
       if(height<0.)discard;
       vec3 n=normalize(facet),v=normalize(eye),r=reflect(-v,n);
       float fres=pow(1.-abs(dot(n,v)),3.),sky=smoothstep(-.36,.73,r.y);
       float glint=pow(max(0.,dot(r,normalize(vec3(-.57,.68,.45)))),24.);
       float seam=exp(-abs(r.y+.12)*17.);
       vec3 c=mix(paletteAccent*.17,mix(paletteAccent,vec3(.82,.82,.88),.43),sky*.65+fres*.27);
       vec3 glow=mix(paletteAccent,vec3(1.),.38)*(.19+.32*pow(abs(dot(n,v)),3.));
       gl_FragColor=vec4(neutralPearl(c+(.07*seam+.68*glint)*vec3(.94,.95,1.)+glow),1.);
      }`,h=new e(a,new i({uniforms:s,vertexShader:c,fragmentShader:u}),9);h.frustumCulled=!1,h.visible=!1;const d=new t;r.add(h);const p=Array.from({length:9},(I,B)=>({delay:l()*.09,angle:B*2.39996+(l()-.5)*.72,len:.09+.14*l(),width:.09+.15*l(),height:.08+.16*l(),twist:1.35*(l()-.5)})),g=new n,v=new n,m=new n,f=new n,T=new n,y=new n,_=new n,E=new n,A=new n(0,1,0);let R=2,w=1;const S=I=>I*I*(3-2*I);function x(I,B,k){g.copy(I),v.copy(B),m.set(Math.abs(v.y)>.8?1:0,Math.abs(v.y)>.8?0:1,0),f.crossVectors(v,m).normalize(),T.crossVectors(v,f),R=0,w=k}function L(I,B){R=Math.min(2,R+I);const k=Math.min(1,R/1.33),X=k<.28?S(k/.28):1-S((k-.28)/.72);r.scale.setScalar(1+(B?.001:.008)*X),h.visible=!B&&k<1&&r.visible,h.visible&&(p.forEach((V,W)=>{const z=Math.cos(V.angle),ee=Math.sin(V.angle),ie=.035+V.len*.79,ue=Math.min(1,Math.max(0,(k-V.delay)/(1-V.delay))),Ae=Math.sin(Math.PI*ue)**1.12,Ve=Math.min(1,ue*14,(1-ue)*9);y.copy(g).addScaledVector(f,z*ie*.64).addScaledVector(T,ee*ie*.64),_.copy(y).clampScalar(-1.253,1.253),E.subVectors(y,_),E.lengthSq()<1e-8&&E.copy(v),E.normalize(),y.copy(_).addScaledVector(E,-.065),d.position.copy(y).addScaledVector(E,Ae*w*(.23+1.17*V.len)),d.quaternion.setFromUnitVectors(A,E),d.rotateY(V.angle+Ae*V.twist),d.rotateX(Ae*V.twist*.77),d.scale.set(V.width*.88*Ve,(.028+V.height*.43)*Ve,V.len*.75*Ve),d.updateMatrix(),h.setMatrixAt(W,d.matrix)}),h.instanceMatrix.needsUpdate=!0)}return{fracture:x,update:L}}const wc=18;function Ov(i,e,t){let n=t>>>0;const r=()=>(n=Math.imul(1664525,n)+1013904223>>>0,n/4294967296);let s=0;function a(h,d,p,g,v,m){const f=[h];let T=h,y=d;for(let _=0;_<p;_++){y+=(r()-.46)*v;const E=g*(.62+.69*r()),A={x:T.x+Math.cos(y)*E,y:T.y+Math.sin(y)*E,distance:T.distance+E},R=w=>m*(.085+.915*(1-w/p)**1.35);i[s].set(T.x,T.y,A.x,A.y),e[s++].set(T.distance,A.distance,R(_),R(_+1)),f.push(A),T=A}return f}const o={x:0,y:0,distance:0},l=r()*Math.PI*2,c=a(o,l,8,.176,.94,.058);a(o,l+Math.PI+(r()-.5)*1.13,4,.158,.89,.035);for(const[h,d,p]of[[2,1,.126],[5,-1,.103]]){const g=c[h],v=c[h-1],m=Math.atan2(g.y-v.y,g.x-v.x);a(g,m+d*(.53+r()*.56),3,p,1.1,.02)}const u=Math.max(...e.map(h=>h.y));for(const h of e)h.x/=u,h.y/=u}const Jn=2.6,nr=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Ht=i=>{const e=nr(i);return e*e*(3-2*e)},zr=4.21,Ds=zr+7.55,Tc=.865;function Bv(i){return Ht((i-.34)/.515)*(1-Ht((i-.886)/.113))}function wo(i,e=!1){const n=zr,r=Ds,s=n+(r-n)*Tc,a=nr((i-n)/(r-n)),o=Ht((i-1.55)/1.05)*(1-Ht((i-3.35)/.86)),l=i>=Jn&&i<=n,c=e?Ht((a-.81)/.18):+(a>=Tc);return{depart:3.35,river:n,reveal:s,end:r,pinned:l,route:a,gate:c,galleryAlpha:e?+(o>=.5):o,opening:1-Ht((i-.4)/1.1),portrait:c>0,cloud:e?0:a,cover:e?0:Bv(a),immersion:Ht((i-.36)/1.21),camera:i<Jn?.19*Ht(i/Jn):.19+.72*Ht(a/.93)}}function yh(i){let e=i;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}function bs(i,e){const t=(o,l)=>{const c=Math.sin(o*127.1+l*311.7)*43758.545;return c-Math.floor(c)},n=Math.floor(i),r=Math.floor(e);let s=i-n,a=e-r;return s=s*s*(3-2*s),a=a*a*(3-2*a),Cs.lerp(Cs.lerp(t(n,r),t(n+1,r),s),Cs.lerp(t(n,r+1),t(n+1,r+1),s),a)}function kr(i){return 1.65*Math.sin(i*.105)+.62*Math.sin(i*.27)}function zv(i,e){return kr(e)+i*(5.1+1.05*Math.sin(e*.24+i)+.65*Math.sin(e*.56-i))}function kv(i){const e=[],t=[];for(let a=0;a<=176;a++){const o=27-a*133/176,l=zv(i,o);for(let c=0;c<=66;c++){const u=27*c/66,h=l+i*u,d=.51*bs(h*.32,o*.32)+.28*bs(h*.76,o*.76)+.14*bs(h*1.4,o*1.4)+.07*bs(h*3.4,o*3.4),p=.48+.19*Math.sin(o*.22+i*1.7)+.22*Math.cos(o*.086-i)+.5*d,g=-.21+Math.pow(u,.85)*p*.62+(d-.48)*Math.min(2.8,u*.98);if(e.push(h,g,o),c<66&&a<176){const v=a*67+c;t.push(v,v+1,v+66+1,v+1,v+66+2,v+66+1)}}}i<0&&t.reverse();const s=new Gt;return s.setAttribute("position",new Pt(e,3)),s.setIndex(t),s.computeVertexNormals(),s}function Hv(){const i=yh(712),e=[],t=[];for(let r=0;r<1420;r++){const s=23-i()*121,a=kr(s)+(i()-.5)*18;e.push(a,.03+Math.pow(i(),4)*3.1,s),t.push(.32+i()*.84)}const n=new Gt;return n.setAttribute("position",new Pt(e,3)),n.setAttribute("size",new Pt(t,1)),n}function Vv(i,e,t,n,r){const s=new mr({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"}),a=new Pi,o=new qt(43,1,.08,215),l=new qt,c=new vn(420,250,{depthBuffer:!0,generateMipmaps:!1}),u={paletteAccent:{value:new O},recolor:{value:0},pearl:{value:0},t:{value:0},lightAt:{value:new O(0,2.8,0)},mirror:{value:c.texture},reflector:{value:new mt},cubePulse:{value:0},cubeHit:{value:new O},strikeNormal:{value:new O(0,0,1)},faultLines:{value:Array.from({length:wc},()=>new at)},faultSpans:{value:Array.from({length:wc},()=>new at)},fractureAge:{value:10},fractureStrength:{value:1},contact:{value:0},crossing:{value:new we(10,0)},reducedScene:{value:0}},h=new xt(new Oa(154,26,14),Cv(u));h.renderOrder=-3,a.add(h);const d=Lv(u),p=[-1,1].map(U=>new xt(kv(U),d));a.add(...p);const g=new xt(Sv(ii),Dv(u));a.add(g);const v=Fv(nv,g,u,Nv(Gt,Pt)),m=new xt(Ev(on),Iv(u));m.rotation.x=-Math.PI/2,m.position.z=-41,a.add(m);const f=new xt(new on(138,26),new bt({uniforms:u,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 st;void main(){st=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:gi+`varying vec2 st;uniform float t;
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
  }`}));f.position.set(0,5,-91),a.add(f);const T=new Hu(Hv(),new bt({uniforms:u,transparent:!0,depthWrite:!1,blending:Gr,vertexShader:"attribute float size;uniform float t;varying float a;void main(){vec3 p=position;p.y+=.095*sin(t*.53+p.z*3.+p.x);vec4 q=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*q;gl_PointSize=clamp(size*29./-q.z,.65,3.);a=.22+.5*(.5+.5*sin(p.z*3.+p.x*.8+t*.68));}",fragmentShader:gi+"varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(accentLight(vec3(.78,.46,.96)),(1.-smoothstep(.13,1.,d))*a);}"}));a.add(T);for(let U=0;U<7;U++){const $=[];for(let re=0;re<430;re++){const Me=28-re*.32;$.push(new O(kr(Me)+(U-3)*.095+Math.sin(Me*.38+U*.1)*.43,.07+U*.012,Me))}const Y=new bt({uniforms:{...u,offset:{value:U*.091}},transparent:!0,depthWrite:!1,vertexShader:"varying float along;void main(){along=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:gi+"uniform float t,offset;varying float along;void main(){float wave=.5+.5*cos(6.283*(along*3.-t*.32+offset));float crest=pow(wave,10.);gl_FragColor=vec4(accentLight(mix(vec3(.38,.14,.54),vec3(.93,.64,1.),crest)),.28+.64*crest);}"}),ge=new xt(new Ba(new Sa($),260,U===3?.031:.012,4,!1),Y);a.add(ge)}const y=316,_=new ii(.104,.104,.104),E=new Float32Array(y*4),A=new Float32Array(y*2),R=yh(943);for(let U=0;U<y;U++){const $=23-R()*116;A.set([kr($)+(R()-.5)*7.1,$],U*2),E.set([R(),R(),R(),R()],U*4)}_.setAttribute("seed",new dn(E,4)),_.setAttribute("origin",new dn(A,2));const w=`
  uniform float t;
  attribute vec4 seed;
  attribute vec2 origin;
  float lifeAt(float age){return smoothstep(.04,.27,age)*(1.-smoothstep(.66,.98,age));}
  float particleAge(){return fract(seed.w+t*(.062+.064*seed.y));}
  vec3 particleCenter(float age,float life){
   return vec3(origin.x+.14*sin(t*.45+seed.x*15.),-.10+life*(.27+.47*seed.x),origin.y-age*(.45+seed.y));
  }`,S=new bt({uniforms:u,transparent:!0,depthWrite:!1,vertexShader:w+`varying float light,opacity;
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
  }`,fragmentShader:gi+"varying float light,opacity;void main(){gl_FragColor=vec4(mix(accentLight(vec3(.39,.22,.56)),vec3(.95),smoothstep(.64,1.,light))*(.46+.54*light),opacity*.85);}"}),x=new Uo(_,S,y);x.frustumCulled=!1,a.add(x);const L=new on(1,1);L.setAttribute("seed",_.getAttribute("seed")),L.setAttribute("origin",_.getAttribute("origin"));const I=new bt({uniforms:u,transparent:!0,depthTest:!0,depthWrite:!1,blending:Gr,vertexShader:w+`varying vec2 disc;varying float strength;
  void main(){
   float age=particleAge(),life=lifeAt(age);
   vec3 center=particleCenter(age,life);
   vec4 point=modelViewMatrix*vec4(center,1.);
   point.xy+=position.xy*.29*life*(.28+.82*seed.x);
   disc=uv*2.-1.;
   strength=life*smoothstep(-.01,.12,center.y)*(1.-smoothstep(35.,84.,-point.z));
   gl_Position=projectionMatrix*point;
  }`,fragmentShader:gi+`varying vec2 disc;varying float strength;
  void main(){
   float falloff=max(0.,exp(-3.8*dot(disc,disc))-.023);
   gl_FragColor=vec4(accentLight(vec3(.55,.39,.66)),falloff*.16*strength);
  }`}),B=new Uo(L,I,y);B.frustumCulled=!1,a.add(B);const k=new Sa([[0,1.33,15.8],[.035,1.41,11],[.075,1.55,3],[.095,1.81,-12],[.045,2.1,-28],[-.025,2.52,-47],[-.025,3.1,-67],[0,3.78,-83]].map(U=>new O(...U)));k.arcLengthDivisions=420;const X=new O,V=new O,W=new we,z=new we,ee=new we,ie=new th;let ue=0,Ae=0,Ve=0,fe=!1,Pe=!1,Z,J=10,ce=-1/0;const Re=new O,Ce=new O(0,0,1);let Le=0,st=0;function D(U,$,Y,ge){Ov(u.faultLines.value,u.faultSpans.value,Math.random()*4294967296>>>0),u.cubeHit.value.copy(U),u.strikeNormal.value.copy($).normalize(),u.fractureStrength.value=Y,v.fracture(U,u.strikeNormal.value,ge),J=Le=0}const Ke=Uv({cube:g,camera:o,canvas:i,eligible:()=>e().interactive,pick:G,wake:C,reduced:()=>e().reduced,Vector3:O});function Ne(U,$){if(!$.interactive||$.immersion>.025||$.reduced||$.paused||document.hidden||Ke.active()){Le=0;return}Le+=U,!(Le<7.8||J<1.33)&&(Re.set(.43*Math.sin(1.7+st*2.4),.31*Math.cos(.9+st*2.7),1.325),st++,D(Re,Ce,.42,.28))}let Se=-1/0,xe=!0;const Ze=bv(U=>{Se=performance.now(),u.crossing.value.set(0,U==="submerge"?1:-.66),n(U,g.position)});function oe(){Se=-1/0,xe=!0,u.crossing.value.set(10,0)}i.addEventListener("amethyst-reset-water",()=>{Le=0,oe()});function Ie(U){U!==Z&&(Z=U,u.paletteAccent.value.set(...vl(U.accent)),u.recolor.value=+(U.id!=="amethyst"),u.pearl.value=+(U.id==="pearl"),J=10,Le=0,ce=-1/0)}function ot(U=e(),$=performance.now(),Y=!1){if(fe||!Y&&U.covered)return;Ie(U.palette),k.getPointAt(U.progress,o.position),o.position.x+=W.x*.045,X.set(o.position.x*.7+W.x*.065,o.position.y+.54-.52*Ht(U.route)+W.y*.023,o.position.z-16.8),o.lookAt(X),o.updateMatrixWorld(),r(o.position);const ge=U.immersion;g.position.set(0,2.63+.06*Math.sin(ue*.68)*(1-ge)-4.18*ge,0),g.rotation.set(0,-.34-.13*Math.sin(ue*.3),.045*(1-ge)*Math.sin(ue*.77)),g.visible=ge<.99,Ke(U.interactive,ge,!Y),Y||((U.reduced||document.hidden||U.paused)&&oe(),Ze(ge,xe||!Pe||U.progress>.24),xe=!1),u.crossing.value.x=Math.max(0,Math.min(10,($-Se)/1e3)),u.contact.value=Math.sin(Math.PI*Ht((ge-.23)/.73)),u.fractureAge.value=J,u.cubePulse.value=u.fractureStrength.value*Math.exp(-J*3.8)*(.7+.3*Math.cos(J*22)),u.reducedScene.value=Number(U.reduced),u.t.value=ue,u.lightAt.value.set(kr(X.z)*Ht(U.route),Math.max(.27,g.position.y),-64*Ht(U.route)),h.position.copy(o.position),(Y||!U.pinned||$-ce>13)&&(ce=$,l.copy(o),l.position.y*=-1,V.copy(X),V.y*=-1,l.up.set(0,-1,0),l.lookAt(V),l.updateMatrixWorld(),u.reflector.value.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),m.visible=!1,T.visible=!1,x.visible=B.visible=!1,s.setRenderTarget(c),s.render(a,l),m.visible=!0,T.visible=!0,x.visible=B.visible=!0),s.setRenderTarget(null),s.render(a,o),Pe||(Pe=!0,t())}function lt(U){Ve=0;const $=e();if($.covered){Ke.hide(),Ae=Le=0;return}const Y=Ae?Math.max(0,Math.min(.05,(U-Ae)/1e3)):0;Ae=U,$.animate&&!$.paused&&(ue+=Y),J=Math.min(10,J+Y),Ne(Y,$),v.update(Y,$.reduced),$.reduced?W.copy(z):W.lerp($.pinned?z:$.pointer,-Math.expm1(-Y*3.3)),ot($,U),!document.hidden&&!fe&&!$.paused&&($.animate||Ke.active()||U-Se<2300||J<1.4)?Ve=requestAnimationFrame(lt):Ae=0}function C(){if(e().covered){Ke.hide();return}!Ve&&!fe&&!document.hidden&&(Ve=requestAnimationFrame(lt))}function M(){const U=i.clientWidth,$=i.clientHeight;if(!U||!$||fe)return;o.aspect=U/$,o.fov=U/$<.8?60:43,o.updateProjectionMatrix(),s.setPixelRatio(Math.min(devicePixelRatio,1.65,2560/U,Math.sqrt(44e5/(U*$)))),s.setSize(U,$,!1);const Y=Math.min(864,Math.round(U*.5),Math.round(Math.sqrt(42e4*U/$)));c.setSize(Y,Math.max(1,Math.round(Y*$/U))),ce=-1/0,C()}function G(U){const $=i.getBoundingClientRect();return ee.set(2*(U.clientX-$.x)/$.width-1,1-2*(U.clientY-$.y)/$.height),ie.setFromCamera(ee,o),g.visible&&ie.intersectObject(g,!1).some(({point:Y})=>Y.y>=0)}return new ResizeObserver(M).observe(i),i.addEventListener("webglcontextlost",U=>{U.preventDefault(),fe=!0,i.classList.remove("lit"),cancelAnimationFrame(Ve),Ve=0,Ae=0}),i.addEventListener("webglcontextrestored",()=>{fe=!1,Pe=!1,oe(),M()}),document.addEventListener("visibilitychange",()=>{Ae=0,oe(),C()}),window.addEventListener("amethyst-world-snapshot",U=>{!fe&&Pe&&(ot(e(),performance.now(),!0),U.detail?.())}),M(),C}var _n=512,Ac=5,Gv=240,Wv=class{samples=new Float32Array(_n*5);times=new Float64Array(_n);read=0;count=0;previous=new Float32Array(5);initialized=!1;lastX=NaN;lastY=NaN;evidence={admitted:0,coalesced:0,dropped:0,discontinuities:0,queued:0,segments:0,capacity:_n};clear(){this.read=this.count=0,this.initialized=!1,this.lastX=this.lastY=NaN,this.evidence.queued=0}admit(i,e,t,n){if(!Number.isFinite(i+e+t)||i===this.lastX&&e===this.lastY)return;this.lastX=i,this.lastY=e,this.count===_n&&(this.read=(this.read+1)%_n,this.count--,this.initialized=!1,this.evidence.dropped++);const r=(this.read+this.count)%_n,s=r*5;this.samples[s]=i,this.samples[s+1]=e,this.samples[s+2]=n[0],this.samples[s+3]=n[1],this.samples[s+4]=n[2],this.times[r]=t,this.count++,this.evidence.admitted++,this.evidence.queued=this.count}consume(i,e,t,n){let r=0;const s=t.length;for(;this.count&&r<s;){const a=this.read*5,o=this.samples[a],l=this.samples[a+1],c=o-this.previous[0],u=l-this.previous[1],h=Math.hypot(c,u);if(n-this.times[this.read]>250){this.initialized=!1,this.evidence.discontinuities++,this.read=(this.read+1)%_n,this.count--;continue}if(!this.initialized||h>Gv){this.initialized&&this.evidence.discontinuities++;for(let v=0;v<5;v++)this.previous[v]=this.samples[a+v];this.initialized=!0,this.read=(this.read+1)%_n,this.count--;continue}if(h<.001){this.read=(this.read+1)%_n,this.count--;continue}const d=Math.min(1,Ac/h),p=this.previous[0]+c*d,g=this.previous[1]+u*d;i[r*4]=this.previous[0],i[r*4+1]=this.previous[1],i[r*4+2]=p,i[r*4+3]=g;for(let v=0;v<3;v++){const m=this.previous[v+2],f=this.samples[a+v+2];e[r*3+v]=m+(f-m)*d*.5,this.previous[v+2]=m+(f-m)*d}t[r]=Math.min(Ac,h),this.previous[0]=p,this.previous[1]=g,d===1&&(this.read=(this.read+1)%_n,this.count--),r++}return this.evidence.segments+=r,this.evidence.queued=this.count,r}};function Xv([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),s=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*r-.0040720468*s,1.9779984951*n-2.428592205*r+.4505937099*s,.0259040371*n+.7827717662*r-.808675766*s]}function To(i,e,t,n){const r=(i+.3963377774*e+.2158037573*t)**3,s=(i-.1055613458*e-.0638541728*t)**3,a=(i-.0894841775*e-1.291485548*t)**3;return n[0]=4.0767416621*r-3.3077115913*s+.2309699292*a,n[1]=-1.2684380046*r+2.6097574011*s-.3413193965*a,n[2]=-.0041960863*r-.7034186147*s+1.707614701*a,n}var Rc=i=>i[0]>=0&&i[0]<=1&&i[1]>=0&&i[1]<=1&&i[2]>=0&&i[2]<=1;function Mh(i,e,t,n){const r=n??{lightness:i,chroma:e,hue:t,rgb:[0,0,0]};let s=0,a=e;const o=To(i,e*Math.cos(t),e*Math.sin(t),r.rgb);if(!Rc(o)){for(let l=0;l<18;l++){const c=(s+a)/2;Rc(To(i,c*Math.cos(t),c*Math.sin(t),o))?s=c:a=c}e=s,To(i,e*Math.cos(t),e*Math.sin(t),o)}return r.lightness=i,r.chroma=e,r.hue=t,r}function Cc(i,e=!1){if(!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Invalid project accent");const n=[1,3,5].map(c=>parseInt(i.slice(c,c+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);if(e){const c=n[0];return{lightness:Math.cbrt(c),chroma:0,hue:0,rgb:[c,c,c]}}const[r,s,a]=Xv(n),o=Math.hypot(s,a),l=Math.atan2(a,s);return Mh(Math.max(.72,Math.min(.88,r)),Math.max(.14,o),l)}function qv(i,e,t,n){const r=Math.max(0,Math.min(1,t)),s=Math.atan2(Math.sin(e.hue-i.hue),Math.cos(e.hue-i.hue));return Mh(i.lightness+(e.lightness-i.lightness)*r,i.chroma+(e.chroma-i.chroma)*r,i.hue+s*r,n)}var Yv=class{current={lightness:0,chroma:0,hue:0,rgb:[0,0,0]};initialized=!1;reset(){this.initialized=!1}step(i,e){if(this.initialized)(i.chroma!==0||this.current.chroma!==0)&&qv(this.current,i,-Math.expm1(-Math.max(0,Math.min(.05,e))/.28),this.current);else{this.current.lightness=i.lightness,this.current.chroma=i.chroma,this.current.hue=i.hue;for(let t=0;t<3;t++)this.current.rgb[t]=i.rgb[t];this.initialized=!0}return this.current}},Sh="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ws=32,$v=1.15,Ao=.4;function Pc(i){const e=Math.max(0,Math.min(1,(i-.08)/.16));return e*e*(3-2*e)}var Kv=`
vec4 worldsTrailOutput(vec2 uv){
 vec4 field=texture2D(uTrail,uv);float density=field.a;
 vec2 p=vec2(uv.x*uHeadCss.x,(1.-uv.y)*uHeadCss.y),a=vec2(uHeadPrevious.x*uHeadCss.x,(1.-uHeadPrevious.y)*uHeadCss.y),b=vec2(uHeadPointer.x*uHeadCss.x,(1.-uHeadPointer.y)*uHeadCss.y),ab=b-a;
 float t=clamp(dot(p-a,ab)/max(.01,dot(ab,ab)),0.,1.),distance=length(p-a-ab*t);
 float radius=16.*uHeadSize,head=exp(-distance*distance/(radius*radius))*uHeadEmit;
 float added=max(0.,head*1.35-density);density+=added;vec3 mass=field.rgb+uHeadColor*added;
 vec3 pigment=density>.0001?mass/density:vec3(0.);
 float alpha=1.-exp(-density*mix(2.1,2.8,uSelectionLight));
 return vec4(pigment,alpha);
}`,Zv=class{scene=new Pi;material;path=new Wv;color=new O;evidence={presentation:"worlds",bodyRadius:14,headRadius:16,outerEnvelope:56,feedbackTargets:2,inputCapacity:512,segmentCapacity:ws,passes:0,coalescedAvailable:!1,selectedId:"",pigment:[0,0,0],pointerKnown:!1,idleStrength:0,idleDensityInput:0,idleSeconds:0,quiet:!1,headStrength:0};segments=new Float32Array(ws*4);pigments=new Float32Array(ws*3);weights=new Float32Array(ws);pigment=new Yv;initialized=!1;x=0;y=0;oldX=0;oldY=0;quiet=!1;lastMove=-1/0;constructor(i){this.material=new bt({depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:Sh,uniforms:{uHistory:{value:null},uCss:{value:new we(1,1)},uGrid:{value:new we(1,1)},uTime:{value:0},uDt:{value:0},uSize:{value:1},uCount:{value:0},uSegments:{value:this.segments},uPigments:{value:this.pigments},uWeights:{value:this.weights},uStrength:{value:1},uIdle:{value:new at},uIdleColor:{value:this.color}},fragmentShader:`varying vec2 vUv;uniform sampler2D uHistory;uniform vec2 uCss,uGrid;uniform float uTime,uDt,uSize,uStrength;uniform int uCount;uniform vec4 uSegments[32],uIdle;uniform vec3 uPigments[32],uIdleColor;uniform float uWeights[32];
      vec2 flow(vec2 p){
       // Curl of two independently authored smooth stream functions. Coarse
       // advection dominates; the smaller field folds edges without sine bands.
       float a=p.x*.014+uTime*.22,b=p.y*.018-uTime*.17,c=p.x*.048-uTime*.16,d=p.y*.043+uTime*.19;
       return vec2(sin(a)*cos(b)*43.2,-cos(a)*sin(b)*33.6)+vec2(cos(c)*cos(d)*16.3,sin(c)*sin(d)*18.2)+vec2(1.,-7.);
      }
      void main(){vec2 css=vec2(vUv.x*uCss.x,(1.-vUv.y)*uCss.y),drift=flow(css),advect=vec2(drift.x,-drift.y)*uDt/uCss;
       vec2 uv=vUv-advect,blur=vec2(.85*sqrt(max(.001,uDt)*60.))/uGrid;
       vec4 old=(texture2D(uHistory,uv)*.52+(texture2D(uHistory,uv+vec2(blur.x,0.))+texture2D(uHistory,uv-vec2(blur.x,0.))+texture2D(uHistory,uv+vec2(0.,blur.y))+texture2D(uHistory,uv-vec2(0.,blur.y)))*.12)*exp(-uDt/${Ao});
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
      }`}),this.scene.add(new xt(i,this.material))}setPigment(i,e,t){const n=this.pigment.step(e,t);this.evidence.selectedId=i,this.color.fromArray(n.rgb);for(let r=0;r<3;r++)this.evidence.pigment[r]=n.rgb[r]}seedPointer(i,e,t){this.initialized||!Number.isFinite(i+e+t)||(this.x=this.oldX=i,this.y=this.oldY=e,this.lastMove=t,this.initialized=this.evidence.pointerKnown=!0)}setQuiet(i){this.quiet=this.evidence.quiet=i}admit(i){if(!this.pigment.initialized)return;const e=performance.now();e-this.lastMove>250&&(this.initialized=!1,this.path.clear()),this.lastMove=e;const t=i.getCoalescedEvents?.()??[];if(this.evidence.coalescedAvailable=typeof i.getCoalescedEvents=="function",t.length&&(this.path.evidence.coalesced+=t.length),t.length)for(const n of t)this.admitSample(n);else this.admitSample(i);this.initialized?(this.oldX=this.x,this.oldY=this.y):(this.oldX=i.clientX,this.oldY=i.clientY),this.x=i.clientX,this.y=i.clientY,this.initialized=this.evidence.pointerKnown=!0,this.quiet=i.target instanceof Element&&!!i.target.closest("a:not(.menu-media-action),button,input,textarea,select,dialog,.portfolio-nav-shell,[contenteditable=true]")}admitSample(i){const e=i.timeStamp>1e12?i.timeStamp-performance.timeOrigin:i.timeStamp;this.path.admit(i.clientX,i.clientY,e,this.pigment.current.rgb)}clear(){this.path.clear(),this.initialized=!1,this.pigment.reset(),this.evidence.pointerKnown=!1,this.evidence.idleStrength=this.evidence.idleDensityInput=this.evidence.headStrength=0,this.lastMove=-1/0}update(i,e,t,n,r,s,a,o){const l=this.material.uniforms;l.uHistory.value=i,l.uCss.value.set(e,t),l.uGrid.value.set(n,r),l.uDt.value=s,l.uTime.value=a,l.uSize.value=o/100,l.uStrength.value=this.quiet?.12:1;const c=this.initialized?Pc((performance.now()-this.lastMove)/1e3):0,u=$v*Ao*-Math.expm1(-s/Ao)*c*l.uStrength.value;l.uIdle.value.set(this.x,this.y,u,11*o/100),this.evidence.idleStrength=c*l.uStrength.value,this.evidence.idleDensityInput=u,this.evidence.idleSeconds+=s*c,l.uCount.value=this.path.consume(this.segments,this.pigments,this.weights,performance.now()),this.evidence.bodyRadius=14*o/100,this.evidence.headRadius=16*o/100,this.evidence.passes++}head(i,e,t,n,r){i.uHeadPointer.value.set(this.x/e,1-this.y/t);const s=Math.hypot(this.x-this.oldX,this.y-this.oldY)>240,a=Pc(r),o=s?this.x:this.oldX+(this.x-this.oldX)*a,l=s?this.y:this.oldY+(this.y-this.oldY)*a;i.uHeadPrevious.value.set(o/e,1-l/t),i.uHeadCss.value.set(e,t),i.uHeadColor.value.copy(this.color),i.uHeadSize.value=n/100,i.uHeadEmit.value=this.initialized?this.quiet?.12:1:0,this.evidence.headStrength=i.uHeadEmit.value}prepare(i,e){return i.compileAsync(this.scene,e)}dispose(){this.material.dispose()}};function Jv({isReduced:i=()=>!1,getAccent:e=()=>"#d559ff",isNeutral:t=()=>!1}={}){const n=matchMedia("(pointer: fine) and (hover: hover)"),r=matchMedia("(prefers-reduced-motion: reduce)");let s=e(),a=Cc(s,t());const o=document.createElement("canvas");o.dataset.portfolioCursor="",o.setAttribute("aria-hidden","true"),o.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:8;display:none";let l,c,u,h,d,p,g,v=!1,m=!1,f=!0,T=0,y=0,_=0,E=0,A=0;const R=new Ci,w=new AbortController,S=(V,W,z)=>V.addEventListener(W,z,{signal:w.signal,passive:!0});function x(){return!v&&!m&&!r.matches&&!i()&&n.matches&&!document.hidden}function L(){if(l)return!0;const V=o.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});if(!V||!V.getExtension("EXT_color_buffer_float"))return v=!0,V?.getExtension("WEBGL_lose_context")?.loseContext(),!1;l=new mr({canvas:o,context:V,alpha:!0,premultipliedAlpha:!1}),l.setClearColor(0,0),c=new on(2,2),u=new Zv(c);const W={type:Ti,depthBuffer:!1,stencilBuffer:!1,minFilter:Dt,magFilter:Dt};p=new vn(1,1,W),g=new vn(1,1,W);const z=()=>({value:new we});return h=new bt({vertexShader:Sh,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uTrail:{value:p.texture},uSelectionLight:{value:0},uHeadCss:z(),uHeadPrevious:z(),uHeadPointer:z(),uHeadColor:{value:new O},uHeadSize:{value:1},uHeadEmit:{value:0}},fragmentShader:`varying vec2 vUv;
        uniform sampler2D uTrail; uniform vec2 uHeadCss,uHeadPrevious,uHeadPointer;
        uniform vec3 uHeadColor; uniform float uHeadSize,uHeadEmit,uSelectionLight;
        ${Kv}
        void main() {
          gl_FragColor=worldsTrailOutput(vUv);
          #include <colorspace_fragment>
        }`}),d=new Pi,d.add(new xt(c,h)),document.body.append(o),!0}function I(){E=window.innerWidth,A=window.innerHeight;const V=Math.min(.6,1100/Math.max(E,A),960/E),W=Math.max(1,Math.round(E*V)),z=Math.max(1,Math.round(W*A/E));l.setSize(E,A,!1),p.setSize(W,z),g.setSize(W,z),f=!0}function B(){cancelAnimationFrame(T),T=0,y=_=0,o.style.display="none",u?.clear(),f=!0}function k(V){if(T=0,!x()){B();return}const W=y?Math.min(.05,Math.max(0,(V-y)/1e3)):0;if((E!==window.innerWidth||A!==window.innerHeight)&&I(),o.style.display="block",f){for(const ee of[p,g])l.setRenderTarget(ee),l.clear();f=!1}const z=W>0?Math.max(1,Math.min(3,Math.floor((W+.001)*60))):0;for(let ee=0;ee<z;ee++)u.update(p.texture,E,A,p.width,p.height,W/z,V/1e3,100),l.setRenderTarget(g),l.render(u.scene,R),[p,g]=[g,p];u.head(h.uniforms,E,A,100,(V-_)/1e3),h.uniforms.uTrail.value=p.texture,l.setRenderTarget(null),l.render(d,R),y=V,V-_<1750&&(T=requestAnimationFrame(k))}function X(V){if(V.pointerType!=="mouse"||!x()||!L())return;const W=performance.now();W-_>1750&&(y=0),_=W,u.setPigment("amethyst",a,0),u.seedPointer(V.clientX,V.clientY,_),u.admit(V),T||(T=requestAnimationFrame(k))}return S(window,"pointermove",X),S(window,"amethyst-clear-trail",B),S(window,"amethyst-palette",()=>{s=e(),a=Cc(s,t()),B()}),S(window,"amethyst-chapter",()=>{x()||B()}),S(window,"amethyst-preferences",()=>{x()||B()}),S(window,"pointerout",V=>{V.relatedTarget||B()}),S(window,"blur",B),S(window,"keydown",B),S(window,"touchstart",B),S(document,"visibilitychange",B),S(n,"change",B),S(r,"change",B),o.addEventListener("webglcontextlost",V=>{V.preventDefault(),m=!0,B()},{signal:w.signal}),S(o,"webglcontextrestored",()=>{m=!1,f=!0}),function(){w.abort(),B(),u?.dispose(),c?.dispose(),h?.dispose(),p?.dispose(),g?.dispose(),l?.dispose(),l?.forceContextLoss(),o.remove()}}function Qv(i,e){const t=6.666666666666667,n=nr(e,0,.05),r=i.value-i.target,s=i.velocity+t*r,a=Math.exp(-t*n);return i.value=i.target+(r+s*n)*a,i.velocity=(i.velocity-t*s*n)*a,Math.abs(i.value-i.target)<.001&&Math.abs(i.velocity)<.009}const Lc=1550,jv=["ArrowDown","ArrowUp","PageDown","PageUp"," ","Home","End"],e0=["ArrowDown","PageDown"," "],t0="input,textarea,select,a,button,summary,[role=dialog],.palette-picker,[contenteditable=true]";function n0(i,e,t){const n=document.documentElement;let r="ready",s=!1,a=0,o=0,l=0,c=-1/0,u="",h=null,d=!1;const p=()=>r==="sinking"||r==="rising",g=()=>!e()&&!document.hidden&&i.classList.contains("lit");function v(w){r=w,n.toggleAttribute("data-sinking",r==="sinking"),n.toggleAttribute("data-rising",r==="rising")}function m(){p()&&(clearTimeout(o),v(r==="sinking"?"underwater":"ready"),t(r))}function f(w){scrollY!==0&&scrollTo(0,0),a=performance.now(),v(w),o=setTimeout(m,Lc),t(r)}function T(){clearTimeout(o),s=!1,l=0,u="",h=null,d=!1,v("bypassed")}(location.hash||performance.getEntriesByType("navigation")[0]?.type==="back_forward")&&T();function y(){if(p()){scrollY!==0&&scrollTo(0,0);return}scrollY>=(globalThis.innerHeight||1)*2&&(s=!0),scrollY>=2&&r==="ready"&&v("bypassed"),!(scrollY>=2||!s)&&(s=!1,g()?f("rising"):v("ready"))}function _(w){w.cancelable&&w.preventDefault()}function E(w,S){if(!w.isTrusted||w.metaKey||w.ctrlKey||w.altKey)return!1;const x=w.target.closest?.(t0);return x&&!(w.type==="wheel"&&x.classList?.contains("crystal-control"))?!1:p()?(_(w),!0):!S||r!=="ready"||scrollY>=2||!g()||document.querySelector?.("#about-trigger[aria-expanded=true]")?!1:(_(w),f("sinking"),!0)}addEventListener("wheel",w=>{if(w.ctrlKey||Math.abs(w.deltaY)<Math.abs(w.deltaX)||!w.deltaY)return;const S=performance.now(),x=Math.sign(w.deltaY);if(p()||x===l&&S-c<95){l=x,c=S,_(w);return}l=E(w,x>0)?x:0,c=S},{capture:!0,passive:!1}),addEventListener("keydown",w=>{if(jv.includes(w.key)){if(u===w.key&&w.repeat){_(w);return}E(w,!w.repeat&&!w.shiftKey&&e0.includes(w.key))&&(u=w.key)}},!0),addEventListener("keyup",w=>{w.key===u&&(u="")},!0),addEventListener("touchstart",w=>{h=w.touches.length===1?w.touches[0]:null,d=!1},{passive:!0}),addEventListener("touchmove",w=>{if(d||p()){_(w),d=!0;return}if(!h||w.touches.length!==1||w.touches[0].identifier!==h.identifier)return;const S=w.touches[0],x=h.clientY-S.clientY;Math.abs(x)>5&&Math.abs(x)>=Math.abs(S.clientX-h.clientX)&&(d=E(w,x>0))},{capture:!0,passive:!1});for(const w of["touchend","touchcancel"])addEventListener(w,()=>{h=null,d=!1},{passive:!0});addEventListener("scroll",y,{passive:!0}),addEventListener("pagehide",T),i.addEventListener("webglcontextlost",T),document.addEventListener("visibilitychange",()=>{document.hidden&&m()});function A(){if(!e())return;const w=scrollY<2&&!location.hash;T(),w?v("ready"):scrollY>=(globalThis.innerHeight||1)*2&&(s=!0),t(r)}addEventListener("amethyst-preferences",A),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",A);function R(w){if(e())return w;if(p()){const S=Math.min(1,(performance.now()-a)/Lc),x=S*S*S*(10+S*(6*S-15));return r==="rising"?1-x:x}return r==="underwater"||s?1:r==="ready"?0:w}return{render:R,skip:T,moving:p}}function i0(i){let e=null,t=0,n=0,r=0;function s(){cancelAnimationFrame(r),e=null,t=0,n=0,r=0}function a(o,l,c=performance.now()){if(e===null||l||document.hidden)return s(),e=o,n=c,e;const u=Math.max(0,Math.min(.045,(c-n)/1e3));n=c;const h=o-e;if(Math.abs(h)<8e-5&&Math.abs(t)<.0012)return e=o,t=0,e;const d=7.1,p=.68,g=-p*Math.tanh(h/p),v=e-g,m=t+d*g,f=Math.exp(-d*u),T=v+(g+m*u)*f,y=1.15*u;let _=T;return T>e&&e<Ds&&T>zr&&(_=Math.min(T,Math.max(e,zr)+y)),T<e&&e>zr&&T<Ds&&(_=Math.max(T,Math.min(e,Ds)-y)),t=_!==T&&u?(_-e)/u:(t-d*m*u)*f,e=_,r||(r=requestAnimationFrame(()=>{r=0,i()})),e}return a.reset=s,a}const r0=`uniform float route,coverage,seconds,pearl;
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
`;function s0(i,e,t){let n,r,s,a=!1,o=0,l=0,c=0;const u=new Ci,h=new we(0,-13),d=i.querySelector("div"),p=()=>!i.hidden&&!document.hidden;function g(){n=new mr({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,powerPreference:"high-performance"}),n.setClearColor(0,0);const E=n.domElement;i.append(E),r=new Pi,s={route:{value:0},coverage:{value:0},seconds:{value:0},view:{value:new we(1,1)},drift:{value:h},tint:{value:new O},pearl:{value:0}},r.add(new xt(new on(2,2),new bt({uniforms:s,fragmentShader:r0,blending:bn,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}"}))),E.addEventListener("webglcontextlost",A=>{A.preventDefault(),a=!0,d.hidden=!1,E.hidden=!0}),E.addEventListener("webglcontextrestored",()=>{a=!1,v(),y()}),v(),n.compileAsync(r,u).catch(()=>{})}function v(){if(!n||a)return;const{width:E,height:A}=i.getBoundingClientRect();!E||!A||(n.setPixelRatio(Math.min(.58*devicePixelRatio,.72,1e3/E)),n.setSize(E,A,!1),s.view.value.set(E,A))}function m(E=e()){if(!n||a||!p())return!1;const A=t();return s.route.value=E.cloud,s.coverage.value=E.cover,s.seconds.value=l,s.tint.value.fromArray([1,3,5].map(R=>parseInt(A.accent.slice(R,R+2),16)/255)),s.pearl.value=+(A.id==="pearl"),n.render(r,u),d.hidden=!0,n.domElement.hidden=!1,!0}function f(E){if(o=0,!p()){c=0;return}const A=c?Math.min(.05,(E-c)/1e3):0;c=E,l+=A,m(),!a&&n&&(o=requestAnimationFrame(f))}function T(E){const A=Ht((E.cloud-.035)/.775)*(1-Ht((E.cloud-.886)/.113))*.61;return E.cover+(1-E.cover)*A}function y(){const E=e();if(i.hidden=E.cloud<=.025||E.cloud>=.9999,d.style.opacity=String(T(E)),!n&&E.cloud>=.018&&!a)try{g()}catch{a=!0}p()&&!o&&n&&!a?(v(),m(E),o=requestAnimationFrame(f)):p()||(cancelAnimationFrame(o),o=c=0)}function _(E,A,R){if(i.hidden)return;if(m()){E.drawImage(n.domElement,0,0,A,R);return}const w=E.createLinearGradient(0,0,A*.24,R);w.addColorStop(0,"#676474"),w.addColorStop(.54,"#aaa5ad"),w.addColorStop(1,"#504c60"),E.save(),E.globalAlpha=T(e()),E.fillStyle=w,E.fillRect(0,0,A,R),E.restore()}return addEventListener("amethyst-cloud-snapshot",({detail:E})=>{m()&&E(n.domElement)}),addEventListener("resize",()=>{v(),y()}),addEventListener("amethyst-palette",()=>{m()}),document.addEventListener("visibilitychange",y),{sync:y,snapshot:_,setPose(E){h.set(E.x,E.z)}}}const Mt=i=>document.querySelector(i);function a0({dismissPanels:i,allowMotion:e}){const t=Mt(".gallery"),n=Mt(".stage"),r=Mt(".opening"),s=Mt(".finale"),a=Mt("#amethyst"),o=Mt("#recordings"),l=Mt("#desktop"),c=Mt("#download"),u=Mt("#about-trigger"),h=Mt("#clip-label"),d=Mt("#retry-clip"),p=Mt("#world"),g=matchMedia("(prefers-reduced-motion: reduce)"),v=matchMedia("(max-width: 650px)"),m=()=>g.matches||!e(),f=()=>u.ariaExpanded==="true",T=new we,y=new Map,_=new Map,E={value:0,target:0,velocity:0};let A=0,R=0,w=!1,S=!1,x=[],L=0,I=0,B=0,k=wo(0);const X=Mt("#reel-progress"),V=Mt("#reel-announcement"),W=new Map;let z=!1,ee=null,ie=!0,ue=()=>{};const Ae=Mt("#take-status"),Ve=Mt("#palette-switch"),fe=Mt("#detail-clips"),Pe=document.createElement("button");Pe.type="button",fe.append(Pe),Pe.addEventListener("click",()=>{const P=y.get(x[L]?.id);!P||!z||f()||(P.pref.detail=!P.pref.detail,Me(P,re(P,nt.id)),Ie())});let Z=null;const{picker:J,group:ce}=pv(Xe);Ve.append(J),Sc(nt.id);let Re=0,Ce=!1,Le=null,st=!1;const D=P=>(P+x.length)%x.length;function Ke(P){wn(P)}function Ne(P){const j=e()&&P.slot==="center";return P.pref.mode==="play"||P.pref.mode!=="pause"&&j}function Se(P){return P.variant&&z&&!f()&&ie&&!document.hidden&&P.el.isConnected&&P.rank<=1&&Ne(P)&&!P.failed&&(!w||P.pref.mode==="play")}function xe(P){if(P.pending||!P.video.paused||!Se(P))return;const j=P.video;j.hasAttribute("src")||(j.src=P.variant.src),P.pending=!0,j.play().catch(()=>{P.video===j&&Se(P)&&!P.interrupted&&(P.failed=!0)}).finally(()=>{if(P.video!==j)return;P.pending=!1;const ve=P.interrupted;P.interrupted=!1,Se(P)?ve&&P.video.paused&&xe(P):P.video.pause(),Ze()})}function Ze(){const P=y.get(x[L]?.id);for(const ve of y.values()){const We=ve.failed?"Retry":Ne(ve)?"Pause":"Play";ve.play.textContent=We==="Pause"?"Ⅱ":"▷",ve.play.setAttribute("aria-label",We+" "+ve.clip.label),ve.play.disabled=!ve.variant,ve.pick.disabled=ve.slot==="center"&&!ve.variant,ve.slot==="center"&&ve.pick.setAttribute("aria-label",We+" "+ve.clip.label)}d.hidden=x.length>0&&!P?.failed;const j=P?.clip.details?.[nt.id];fe.hidden=!j&&!P?.pref.detail,Pe.textContent=P?.pref.detail?"Back to recording":j?.label??"",Pe.setAttribute("aria-pressed",String(!!P?.pref.detail)),Ae.hidden=!P||!!P.variant,P&&!P.variant&&(Ae.textContent="Recording unavailable in "+nt.label)}function oe(P,j=!1){P.pending&&(P.interrupted=!0),P.video.paused||P.video.pause(),j&&P.video.hasAttribute("src")&&(P.variant&&P.video.duration>0&&W.set(P.variant.src,se(P.video)),P.video.removeAttribute("src"),P.video.classList.remove("decoded"),P.video.load())}function Ie(){for(const P of y.values())Se(P)?xe(P):oe(P,!z||P.rank>1||P.slot!=="center"&&P.pref.mode!=="play");Ze()}function ot(P){!P||P.rank>1||!z||f()||P.variant&&(P.failed?(Ke("retry"),P.failed=!1,P.video.removeAttribute("src"),P.video.load(),P.pref.mode="play"):(P.pref.mode=Ne(P)?"pause":"play",Ke(P.pref.mode)),Ie())}function lt(){for(const[P,j]of[...X.children].entries()){const ve=P===L;ve?j.setAttribute("aria-current","step"):j.removeAttribute("aria-current"),j.toggleAttribute("data-past",P<L),j.tabIndex=ve?0:-1}}function C(P){return`${P+1} of ${x.length}: ${x[P].label}. ${x.length-P-1} remaining.`}function M(){cancelAnimationFrame(A),A=R=0,E.value=E.target,E.velocity=0,w=!1,N(),Ie(),S&&x[L]&&(V.textContent=C(L),Ke("step")),S=!1}function G(P){A=0;const j=R?(P-R)/1e3:0;if(R=P,!z||f()||m()||Qv(E,j))return M();N(),A=requestAnimationFrame(G)}function U(P,j=!1,ve=!1){if(!x.length)return;const We=nr(P,0,x.length-1);if(j&&We!==E.target&&(S=!0),E.target=We,ve||m())return M();!z||f()||(w=!0,A||(Ie(),R=performance.now(),A=requestAnimationFrame(G)))}function $(P){z&&!f()&&U(Math.round(E.target)+P,!0)}function Y(){X.replaceChildren(...x.map((P,j)=>{const ve=document.createElement("button");return ve.type="button",ve.setAttribute("aria-label",C(j)),ve.addEventListener("click",()=>U(j,!0)),ve})),lt()}X.addEventListener("keydown",P=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(P.key))return;P.preventDefault();const j=[...X.children].indexOf(P.target),ve=nr(P.key==="Home"?0:P.key==="End"?x.length-1:j+(P.key==="ArrowLeft"?-1:1),0,x.length-1);X.children[ve]?.focus({preventScroll:!0}),U(ve,!0)});function ge(P){const j=document.createElement("video");return j.defaultMuted=j.muted=j.loop=j.playsInline=!0,j.preload="none",j.dataset.clip=P.id,j.setAttribute("aria-hidden","true"),j}function re(P,j){return P?.pref.detail?P.clip.details?.[j]:P?.clip.variants[j]}function Me(P,j,ve,We=0){P.video&&(oe(P,!0),P.video.remove());const Ue=ve??ge(P.clip);P.heldPhase=We,P.video=Ue,P.variant=j,P.pending=P.interrupted=P.failed=!1,P.el.prepend(Ue),P.el.dataset.variant=j?nt.id:"unavailable",P.el.style.backgroundImage=j?`url("${new URL(j.poster,document.baseURI).href}")`:"none",P.still=new Image,j&&(Ue.poster=j.poster,P.still.src=j.poster),Ue.readyState>=2&&Ue.classList.add("decoded"),Ue.addEventListener("loadedmetadata",()=>{const Ye=W.get(j?.src);Ye>0&&Ue.duration>0&&(W.delete(j.src),Ue.currentTime=Ye*Ue.duration)}),j&&!ve&&We&&W.set(j.src,We),Ue.addEventListener("play",()=>{Se(P)||Ue.pause()}),Ue.addEventListener("loadeddata",()=>{Ue.classList.add("decoded")}),Ue.addEventListener("emptied",()=>{Ue.classList.remove("decoded")}),Ue.addEventListener("error",()=>{P.video!==Ue||!P.el.isConnected||!Ue.hasAttribute("src")||(P.failed=!0,Ue.classList.remove("decoded"),Ze())})}function De(P){const j=document.createElement("div"),ve=document.createElement("button"),We=document.createElement("button");j.className="frame",j.dataset.clip=P.id,ve.className="frame-pick",We.className="wing-play",ve.type=We.type="button",j.append(ve,We);let Ue=_.get(P.id);Ue||_.set(P.id,Ue={mode:null});const Ye={el:j,pick:ve,play:We,clip:P,pref:Ue};return Me(Ye,re(Ye,nt.id)),ve.addEventListener("click",()=>{Ye.slot==="center"?ot(Ye):U(x.indexOf(P),!0)}),We.addEventListener("click",()=>ot(Ye)),n.append(j),Ye}function se(P){return P.duration>0?P.currentTime/P.duration%1:0}function me(P){return P.video.duration>0?se(P.video):W.get(P.variant?.src)??P.heldPhase}function Be(P){P&&(P.removeAttribute("src"),P.load())}function Ee(){Z&&(Z.abort.abort(),Be(Z.video),Z=null,ce.removeAttribute("aria-busy"))}function he(P,j,ve){return new Promise(We=>{const Ue=setTimeout(()=>ft(!1),450),Ye=new AbortController;function ft(Qe){clearTimeout(Ue),Ye.abort(),ve.removeEventListener("abort",ht),We(Qe)}const ht=()=>ft(!1);ve.addEventListener("abort",ht,{once:!0}),P.addEventListener(j,()=>ft(!0),{once:!0,signal:Ye.signal}),P.addEventListener("error",ht,{once:!0,signal:Ye.signal})})}async function Xe(P){if(Ee(),P===nt.id)return;const j={abort:new AbortController,center:y.get(x[L]?.id)};Z=j;const{signal:ve}=j.abort;ce.setAttribute("aria-busy","true");const Ue=(z?[...y.values()].filter(Fe=>Fe.rank<=1):[]).map(Fe=>re(Fe,P)?.poster).filter(Boolean);k.portrait&&Ue.push(jn(Kr(P+"-poster.webp")));const Ye=Promise.allSettled(Ue.map(Fe=>{const Lt=new Image;return Lt.src=Fe,Lt.decode()})),ft=j.center,ht=re(ft,P);if(z&&ht&&(Se(ft)||ft.video.readyState>=2)&&!document.hidden){const Fe=j.video=ge(ft.clip);Fe.preload="auto";const Lt=he(Fe,"loadeddata",ve);if(Fe.src=ht.src,await Lt&&Fe.duration>0&&!ve.aborted){const b=me(ft);if(b>.003){const F=he(Fe,"seeked",ve);Fe.currentTime=b*Fe.duration,await F}}}if(await Promise.race([Ye,new Promise(Fe=>setTimeout(Fe,450))]),ve.aborted||Z!==j)return;if(j.video?.error){Ee(),Ae.textContent="Could not load the "+lr.find(Fe=>Fe.id===P).label+" recording",Ae.hidden=!1;return}Z=null,ce.removeAttribute("aria-busy");const Qe=document.activeElement;Sc(P),Ke("choose");for(const Fe of y.values()){const Lt=Fe===ft&&Fe.slot==="center"&&z&&j.video?.readyState>=2?j.video:null;Me(Fe,re(Fe,P),Lt,me(Fe)),Lt&&(j.video=null)}Be(j.video),Ie(),ue(),Qe?.isConnected&&!Qe.disabled&&document.activeElement!==Qe&&Qe.focus({preventScroll:!0})}function N(){if(!x.length||!k.galleryAlpha)return;const P=nr(E.value,0,x.length-1),j=Math.round(P);if(ee===P)return;ee=P;const ve=Math.sin(Math.PI*(P%1)),We=v.matches?1-.37*ve*ve:1,Ue=document.activeElement?.closest(".frame"),Ye=new Set;let ft=!1;for(const Qe of[0,-1,1,-2,2]){const Fe=x[D(j+Qe)],Lt=j+Qe-P,b=Math.abs(Lt);if(b>=1.995||Ye.has(Fe.id))continue;Ye.add(Fe.id),y.has(Fe.id)||y.set(Fe.id,De(Fe));const F=y.get(Fe.id),q=Math.abs(Qe),K=q>1?"depth":Qe===0?"center":Qe<0?"left":"right";F.slot!==K&&(ft=!0,F.slot=F.el.dataset.slot=K,F.rank=q,F.el.inert=q>1,F.el.style.pointerEvents=q>1?"none":"auto",K!=="center"&&F.pick.setAttribute("aria-label","Show "+Fe.label),q>1&&F.video.hasAttribute("src")&&oe(F,!0));const H=Math.min(1,b),ne=Math.max(0,b-1),pe=Math.sign(Lt),be=pe*((v.matches?103:97)*H+12*ne)*We,ye=pe*(43*H+30*ne),ze=(1-.16*H-.32*ne)*We;F.el.style.transform=`translate(-50%, -50%) translateX(${be}%) rotateY(${ye}deg) scale(${ze})`,F.el.style.opacity=String(1-ne),F.el.style.zIndex=String(100-Math.round(b*40)),F.el.style.filter=`brightness(${1-.2*H-.28*ne})`}for(const[Qe,Fe]of y)Ye.has(Qe)||(Fe.el.remove(),oe(Fe,!0),y.delete(Qe));L!==j&&(L=j,lt());const ht=x[L].label;h.textContent!==ht&&(h.textContent=ht),z&&Ue&&(!Ue.isConnected||Ue.inert||!document.activeElement?.offsetWidth)&&y.get(x[L].id)?.pick.focus({preventScroll:!0}),ft&&Ie()}d.onclick=()=>{x.length?ot(y.get(x[L]?.id)):(Ke("retry"),_r())};let ae=0;t.addEventListener("wheel",P=>{if(!z||f()||P.ctrlKey||P.metaKey)return;const j=Math.abs(P.deltaX)>Math.abs(P.deltaY);if(!j&&!P.shiftKey)return;P.preventDefault();const ve=P.deltaMode===1?16:P.deltaMode===2?n.clientWidth:1,We=(j?P.deltaX:P.deltaY)*ve/Math.max(90,n.clientWidth*.44);U(E.target+We),clearTimeout(ae),ae=setTimeout(()=>U(Math.round(E.target)),100)},{passive:!1}),n.addEventListener("pointerdown",P=>{!z||f()||!P.isPrimary||P.button!==0||(Le={id:P.pointerId,x:P.clientX,y:P.clientY,from:E.value,axis:null},st=!1)}),n.addEventListener("pointermove",P=>{if(!Le||Le.id!==P.pointerId)return;const j=P.clientX-Le.x,ve=P.clientY-Le.y;!Le.axis&&Math.max(Math.abs(j),Math.abs(ve))>8&&(Le.axis=Math.abs(j)>Math.abs(ve)?"x":"y",Le.axis==="x"&&n.setPointerCapture(P.pointerId)),Le.axis==="x"&&(st=!0,U(Le.from-j/Math.max(68,n.clientWidth*.43)))});function le(){Le&&(Le.axis==="x"&&U(Math.round(E.target)),Le=null,st&&setTimeout(()=>{st=!1},120))}addEventListener("pointerup",le),n.addEventListener("pointercancel",le),n.addEventListener("click",P=>{st&&(P.preventDefault(),P.stopPropagation(),st=!1)},!0),document.addEventListener("keydown",P=>{P.defaultPrevented||!z||f()||P.altKey||P.metaKey||P.ctrlKey||P.target.matches("select,input,textarea")||P.target.closest(".palette-picker, #reel-progress")||(P.key==="ArrowLeft"||P.key==="ArrowRight")&&(P.preventDefault(),$(P.key==="ArrowRight"?1:-1))});function _e(){Ie(),ue(),window.dispatchEvent(new Event("amethyst-chapter"))}function te(P,j=!1){He.skip(),et.reset(),p.dispatchEvent(new Event("amethyst-reset-water"));const ve=P.slice(1),We=x.findIndex(ft=>ft.id===ve),Ue=ve==="download"?c:ve==="desktop"?l:["recordings","launcher","dashboard","editor","dotfiles"].includes(ve)||We>=0?o:a;i(),Ue===o&&U(Math.max(0,We),!1,!0);const Ye=Ue===o?Jn*I:Ue.offsetTop;scrollTo(0,Ye),j&&Ue.focus({preventScroll:!0}),At()}history.scrollRestoration="manual",document.addEventListener("click",P=>{const j=P.target.closest('a[href^="#"]');!j||P.defaultPrevented||P.button||P.metaKey||P.ctrlKey||P.altKey||P.shiftKey||(P.preventDefault(),location.hash!==j.hash&&(history.replaceState({position:B,recording:E.target},""),history.pushState(null,"",j.hash)),te(j.hash,!0))});function Q(){if(He.skip(),et.reset(),p.dispatchEvent(new Event("amethyst-reset-water")),!Number.isFinite(history.state?.position))return te(location.hash);i(),U(history.state.recording??0,!1,!0),scrollTo(0,history.state.position*I),At()}addEventListener("popstate",Q),addEventListener("hashchange",Q);const Te=_v(c,m),He=n0(p,m,P=>{P==="rising"?(et.reset(),p.dispatchEvent(new Event("amethyst-reset-water")),At()):ue()}),et=i0(At),tt=s0(Mt("#cloud-passage"),()=>k,()=>nt);function At(){const P=k,j=z;B=scrollY/I;const ve=et(B,m());k=wo(ve,m()),z=k.galleryAlpha>.55,!z&&j&&(Ee(),M()),Ve.hidden=!1;const We=k.portrait!==P.portrait,Ue=B>=Jn-.15;if(document.body.dataset.phase=k.portrait?"portrait":ve>=k.river?"river":k.galleryAlpha>0?"gallery":"opening",We&&window.dispatchEvent(new Event("amethyst-clear-trail")),Ue!==Ce&&(Ce=Ue,window.dispatchEvent(new CustomEvent("amethyst-prepare-portrait",{detail:Ue}))),!z&&j&&t.contains(document.activeElement)&&(B>Jn?l:a).focus({preventScroll:!0}),r.style.opacity=String(k.opening),r.style.visibility=k.opening>0?"visible":"hidden",t.style.opacity=String(k.galleryAlpha),t.style.visibility=k.galleryAlpha>0?"visible":"hidden",t.inert=!z,k.galleryAlpha)N();else if(P.galleryAlpha||ee!==null){for(const ft of y.values())oe(ft,!0);ee=null}const{gate:Ye}=k;Ye<=.5&&s.contains(document.activeElement)&&o.focus({preventScroll:!0}),s.inert=Ye<=.5,s.style.visibility=Ye>0?"visible":"hidden",s.style.pointerEvents=Ye>.5?"auto":"none",s.style.opacity=String(Ye),Te(Ye>.5),tt.sync(),Ye!==P.gate&&window.dispatchEvent(new CustomEvent("amethyst-gate",{detail:Ye})),ue(),(z!==j||We||Ye===1!=(P.gate===1))&&_e()}function Wt(){p.dispatchEvent(new Event("amethyst-reset-water"));const P=B;et.reset(),I=innerHeight,a.style.height=Jn*I+"px",o.style.height=(wo(0).end-Jn)*I+"px",l.style.height=I+"px",ee=null,scrollTo(0,P*I),At()}addEventListener("scroll",()=>{Re||(Re=requestAnimationFrame(()=>{Re=0,At()}))},{passive:!0}),addEventListener("resize",Wt),addEventListener("amethyst-panel",_e);function Di(){ee=null,At(),_e()}addEventListener("amethyst-preferences",Di),g.addEventListener("change",Di),v.addEventListener("change",Di),navigator.connection?.addEventListener("change",Ie),document.addEventListener("visibilitychange",()=>{document.hidden&&(p.dispatchEvent(new Event("amethyst-reset-water")),Ee(),M()),_e()}),addEventListener("pagehide",()=>{et.reset(),Ee(),ie=!1,_e()}),addEventListener("pageshow",P=>{ie=!0,P.persisted&&(et.reset(),At()),_e()}),addEventListener("pointermove",P=>{P.pointerType==="mouse"&&T.set(P.clientX/innerWidth*2-1,1-P.clientY*2/innerHeight)},{passive:!0}),Wt(),location.hash&&te(location.hash);try{ue=Vv(p,()=>({progress:k.camera,palette:nt,pointer:T,pinned:k.pinned,reduced:m(),animate:!m(),covered:k.gate===1||k.cover===1,route:k.route,immersion:He.render(k.immersion),interactive:ie&&!He.moving()&&!f()&&k.galleryAlpha<.35&&!k.portrait&&k.cover<.5,paused:!ie}),()=>p.classList.add("lit"),(P,j)=>{Ke(P),p.dispatchEvent(new CustomEvent("amethyst-surface",{detail:{surface:P,point:j.toArray()}}))},tt.setPose)}catch{p.classList.remove("lit")}Jv({getAccent:()=>nt.accent,isNeutral:()=>nt.id==="pearl",isReduced:()=>m()||f()||k.portrait});const ln=[new Image,new Image];function Ii(){ln[0].src=jn(nt.id+"-lake.webp"),ln[1].src=jn(nt.id+"-mobile.webp")}Ii(),addEventListener("amethyst-palette",Ii);function vr(P,j,ve,We,Ue,Ye){const ft=j.videoWidth||j.naturalWidth||j.width,ht=j.videoHeight||j.naturalHeight||j.height;if(!ft||!ht)return;const Qe=Math.max(Ue/ft,Ye/ht);P.save(),P.beginPath(),P.rect(ve,We,Ue,Ye),P.clip(),P.drawImage(j,ve+(Ue-ft*Qe)/2,We+(Ye-ht*Qe)/2,ft*Qe,ht*Qe),P.restore()}addEventListener("amethyst-capture-stage",({detail:{ctx:P,paintPane:j,handled:ve}})=>{ve();const We=innerWidth,Ue=innerHeight;P.fillStyle="#15111c",P.fillRect(0,0,We,Ue),vr(P,ln[Number(v.matches)],0,0,We,Ue);const{gate:Ye,galleryAlpha:ft}=k;if(Ye<1&&k.cover<1&&window.dispatchEvent(new CustomEvent("amethyst-world-snapshot",{detail:()=>P.drawImage(p,0,0,We,Ue)})),ft>0)for(const ht of[...y.values()].sort((Qe,Fe)=>Number(Qe.el.style.zIndex)-Number(Fe.el.style.zIndex))){const Qe=ht.el.getBoundingClientRect();P.save(),P.globalAlpha=ft*Number(ht.el.style.opacity)*(ht.slot==="center"?1:.73),vr(P,ht.video.readyState>=2?ht.video:ht.still,Qe.x,Qe.y,Qe.width,Qe.height),P.restore()}if(Ye>0){P.save(),P.globalAlpha=Ye;const ht=Fe=>{if(Fe instanceof HTMLImageElement){P.save();const Lt=ka(We,Ue);P.fillStyle="#050505",P.fillRect(0,0,We,Ue),P.drawImage(Fe,Lt.left,Lt.top,_l*Lt.scale,xl*Lt.scale),P.restore()}else P.drawImage(Fe,0,0,We,Ue)};let Qe=!1;window.dispatchEvent(new CustomEvent("amethyst-paint-banner",{detail:Fe=>{ht(Fe),Qe=!0}})),Qe||ht(Mt("#banner img")),P.restore()}tt.snapshot(P,We,Ue);for(const ht of[".opening",".segment",".legend"]){const Qe=Mt(ht),Fe=Qe.getBoundingClientRect();Fe.width&&Fe.height&&getComputedStyle(Qe).visibility!=="hidden"&&P.drawImage(j(Qe,Fe.width,Fe.height),Fe.x,Fe.y,Fe.width,Fe.height)}});async function _r(){try{const P=await fetch(jn("catalog.json"));if(!P.ok)throw Error("Catalog unavailable");const j=await P.json();if(!Array.isArray(j)||j.length<3)throw Error("Catalog incomplete");x=j,Y(),Wt(),location.hash&&te(location.hash)}catch{x=[],Mt("#clip-label").textContent="Recordings unavailable",d.hidden=!1}}_r()}function Qi(i,e,t,n,r){const s=n??document.createElement("canvas");s.width=Math.ceil(e),s.height=Math.ceil(t);const a=s.getContext("2d"),o=i.getBoundingClientRect(),l=d=>d,c=d=>{const p=getComputedStyle(d);return p.display!=="none"&&p.visibility!=="hidden"&&!d.closest("[hidden],[data-glass-copy],.pane-close")};for(const d of i.querySelectorAll("button,a,input,img")){if(!c(d))continue;const p=d.getBoundingClientRect(),g=getComputedStyle(d),v=p.left-o.left,m=p.top-o.top;if(d instanceof HTMLImageElement){d.complete&&d.naturalWidth&&(d.currentSrc.startsWith(location.origin)||d.currentSrc.startsWith("data:image/"))&&(a.save(),a.beginPath(),a.roundRect(v,m,p.width,p.height,parseFloat(g.borderRadius)||0),a.clip(),a.drawImage(d,v,m,p.width,p.height),a.restore());continue}if(d instanceof HTMLInputElement&&d.type==="range")continue;a.fillStyle=l(g.backgroundColor),a.beginPath(),a.roundRect(v,m,p.width,p.height,Math.min(p.height/2,parseFloat(g.borderRadius)||0)),a.fill();const f=parseFloat(g.borderTopWidth);f>0&&g.borderTopStyle!=="none"&&(a.strokeStyle=l(g.borderTopColor),a.lineWidth=f,a.stroke()),d instanceof HTMLInputElement&&d.type==="checkbox"&&(a.fillStyle=l(g.color),a.beginPath(),a.arc(v+(d.checked?p.width-10:10),m+p.height/2,6,0,Math.PI*2),a.fill())}const u=i.querySelectorAll("svg");for(const d of u){if(!c(d)||d.closest("[data-glass-copy]"))continue;const p=d.getBoundingClientRect(),g=d.viewBox.baseVal;if(!p.width||!p.height)continue;a.save(),a.translate(p.left-o.left,p.top-o.top),a.scale(p.width/(g.width||p.width),p.height/(g.height||p.height)),a.translate(-g.x,-g.y);const v=m=>{const f=getComputedStyle(m);if(a.save(),m instanceof SVGGraphicsElement){const _=m.transform.baseVal.consolidate()?.matrix;_&&a.transform(_.a,_.b,_.c,_.d,_.e,_.f)}let T=null;const y=_=>Number(m.getAttribute(_)||0);m instanceof SVGPathElement?T=new Path2D(m.getAttribute("d")||""):m instanceof SVGCircleElement?(T=new Path2D,T.arc(y("cx"),y("cy"),y("r"),0,Math.PI*2)):m instanceof SVGEllipseElement?(T=new Path2D,T.ellipse(y("cx"),y("cy"),y("rx"),y("ry"),0,0,Math.PI*2)):m instanceof SVGLineElement?(T=new Path2D,T.moveTo(y("x1"),y("y1")),T.lineTo(y("x2"),y("y2"))):m instanceof SVGRectElement&&(T=new Path2D,T.roundRect(y("x"),y("y"),y("width"),y("height"),y("rx"))),T&&(f.fill!=="none"&&(a.fillStyle=l(f.fill),a.fill(T)),f.stroke!=="none"&&(a.strokeStyle=l(f.stroke),a.lineWidth=parseFloat(f.strokeWidth)||1,a.lineCap=f.strokeLinecap,a.lineJoin=f.strokeLinejoin,a.stroke(T)));for(const _ of m.children)_ instanceof SVGElement&&v(_);a.restore()};for(const m of d.children)m instanceof SVGElement&&v(m);a.restore()}const h=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(;h.nextNode();){const d=h.currentNode,p=d.parentElement;if(!p||p.closest("svg,[data-glass-copy],.pane-close")||!c(p)||!d.data.trim())continue;const g=getComputedStyle(p);a.font=`${g.fontStyle} ${g.fontWeight} ${g.fontSize} ${g.fontFamily}`,a.fillStyle=l(g.color),a.textBaseline="alphabetic",a.letterSpacing=g.letterSpacing==="normal"?"0px":g.letterSpacing;const v=[...d.data.matchAll(/\S+\s*/g)];for(const m of v){const f=document.createRange();f.setStart(d,m.index),f.setEnd(d,m.index+m[0].length);const T=f.getBoundingClientRect(),y=a.measureText(m[0]),_=y.fontBoundingBoxAscent??parseFloat(g.fontSize)*.8,E=y.fontBoundingBoxDescent??parseFloat(g.fontSize)*.2;a.fillText(m[0],T.left-o.left,T.top-o.top+(T.height-_-E)/2+_)}}return s}const Zr=i=>Math.max(0,Math.min(1,i)),Ho=i=>{const e=Zr(i);return e*e*(3-2*e)},Dc=.84,Ic=.42,o0=.18;function l0(i){const e=t=>t-Math.floor(t);return{x:e(Math.sin((i+1)*127.1)*43758.5453),y:e(Math.sin((i+1)*311.7)*22578.1459)}}function c0(i,e,t=0){return i.opening&&(i.fresh!==!1||t<=0)?o0/i.duration*Math.cbrt(e.y):0}function u0(i,e,t,n=0){return i.opening?i.fresh===!1&&n>0?.7+e.y*.2+t.x*.03:.43+e.y*.26+t.x*.025:1}function Uc(i,e,t,n,r,s=i.opening?0:1,a){const o=Zr(i.progress),l=c0(i,t,s),c=u0(i,e,t,s),u=Zr((o-l)/c),h=i.rect,d=i.opening?h.x+e.x*h.width:i.anchor.x,p=i.opening?h.y+e.y*h.height:i.anchor.y,g=u*u,v=g*u,m=i.duration*c,f=2*v-3*g+1,T=-2*v+3*g,y=Math.hypot(d-n.x,p-n.y),_=Math.hypot(r.x,r.y),E=Math.min(.045,Math.max(.005,y*.15/Math.max(1,_))),A=Math.exp(-u*m/E),R=i.opening?(v-2*g+u)*m:E*(1-A)*(1-u)*(1-u),w=16*g*(1-u)*(1-u),S=i.opening&&(i.fresh!==!1||s<=0),x=S?(e.x-.5)*Math.min(h.width*.58,260)*(1-e.y*.3)*.65:0,L=(n.x+d)/2,I=i.viewportWidth??1e6,B=i.opening?Math.max(2-L,Math.min(I-2-L,x*(8/3)))*(3/8):0,k=S?(24+(1-Math.abs(e.x-.5)*2)*(.3+e.y*.7)*Math.min(88,h.height*.16))*.65:0,X=T*T*(.15+.85*T),V=i.tileCount??Math.ceil(h.width/4)*Math.ceil(h.height/4),W=t.y<16/V?.1*Ho((o-l)*i.duration/.02):0,z=S?1-(1-X)*(1-W):X,ee=i.opening?s+(1-s)*z:s*(1-u)*(1-u)*f*f,ie=a??{x:0,y:0,alpha:0,born:!1,settled:!1,vx:0,vy:0};ie.x=n.x*f+d*T+r.x*R+B*w,ie.y=n.y*f+p*T+r.y*R+k*w,ie.alpha=o<l?0:ee,ie.born=o>=l&&(i.opening||s>0),ie.settled=i.opening&&u===1;const ue=(6*g-6*u)/m,Ae=-ue,Ve=i.opening?3*g-4*u+1:A*(1-u)*(1-u)-2*E*(1-A)*(1-u)/m,fe=32*u*(1-u)*(1-2*u)/m;return ie.vx=o<l||u===1?0:n.x*ue+d*Ae+r.x*Ve+B*fe,ie.vy=o<l||u===1?0:n.y*ue+p*Ae+r.y*Ve+k*fe,ie}function h0(i,e,t=0,n=!0){const r=n?.695:.74,s=n?.265:.235;return t+(1-t)*Zr((i-r)/s)}function Nc(i,e,t){return e?t+(1-t)*Ho(i/.22):t*(1-Zr(i))**2*(1-Ho(i))**2}const d0=`
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
}`,Fc=i=>[...i.children].filter(e=>!e.hasAttribute("data-glass-copy")).map(e=>e.textContent).join("|")+"|"+[...i.querySelectorAll("input")].map(e=>`${e.value}:${e.checked}`).join("|")+"|"+[...i.querySelectorAll("[role=tab]")].map(e=>e.getAttribute("aria-selected")).join("|")+"|"+[...i.querySelectorAll("img")].filter(e=>!e.closest("[data-glass-copy]")).map(e=>Number(e.complete)).join("|"),Ts=i=>({x:i.left,y:i.top,width:i.width,height:i.height});class f0{constructor(){this.available=!1,this.fields=new Map,this.metrics={requests:0,paints:0,retargets:0,active:0,tiles:0,draws:0,textureUploads:0,paintMs:0,maxPaintMs:0,frameMs:0,maxFrameMs:0,degradedTileSize:4,reusedPaints:0,geometryBuilds:0,geometryUploads:0,layoutRebuilds:0},this.sequence=0,this.paintSequence=0,this.clickedOrigin=null,this.origins=new WeakMap,this.paints=new WeakMap}captureOrigin(e){if(!this.available||!(e.target instanceof Element))return;const t=e.target.closest("button");if(!t)return;const n=t.getBoundingClientRect();n.width&&n.height&&(this.clickedOrigin=t,this.origins.set(t,{rect:Ts(n),at:performance.now()}))}recentOrigin(){const e=this.clickedOrigin;return e&&performance.now()-(this.origins.get(e)?.at??-1/0)<200?e:null}enabled(e){return this.available&&!document.hidden&&!matchMedia("(prefers-reduced-motion:reduce),(forced-colors:active),(prefers-reduced-transparency:reduce)").matches&&!document.querySelector('[data-reduced="true"]')&&(!e.matches(".portfolio-nav-shell")||matchMedia("(max-width:899px)").matches)}key(e){return e.id||e.getAttribute("aria-labelledby")||e.className}fieldFor(e){return this.fields.get(this.key(e.closest("[data-pane-flight]")??e))}request(e,t,n){const r=this.key(e),s=this.fields.get(r);if(!this.enabled(e)){s&&this.restore(s),this.fields.delete(r);return}if(!t&&!s)return;const a=e.getBoundingClientRect();if(a.width<1||a.height<1){s&&!t&&(this.restore(s),s.flight={...s.flight,opening:!1,progress:0},s.elapsed=0,s.flight.duration=Ic,s.epoch=++this.sequence);return}const o=n?.getBoundingClientRect(),l=n?this.origins.get(n):null,c=o?.width?Ts(o):l&&performance.now()-l.at<200?l.rect:null,u=c?{x:c.x+c.width/2,y:c.y+c.height}:s?.flight.anchor??{x:a.left+a.width/2,y:a.top},h=s?.flight.opening?s.front:0,d=s?Nc(s.flight.progress,s.flight.opening,s.fromAlpha):t?0:1;s&&this.restore(s);const p=e.matches(".experience-settings,.portfolio-nav-shell"),g=p?"paired":document.documentElement.dataset.colorTheme??"",v=Fc(e),m=`${document.fonts.status}:${document.fonts.size}`,f=this.paints.get(e),T=f&&f.fontState===m&&!e.querySelector('.angry-slider-gesture:not([data-slider-phase="idle"])')&&f.content===v&&f.theme===g&&Math.abs(f.width-a.width)<1&&Math.abs(f.height-a.height)<1,y=performance.now(),_=T?f.paint:Qi(e,a.width,a.height,f?.paint),E=p?T?f.lightPaint:Qi(e,a.width,a.height,f?.lightPaint):void 0,A=T?f.paintVersion:++this.paintSequence;if(T)this.metrics.reusedPaints++;else{const w=performance.now()-y;this.metrics.paints++,this.metrics.paintMs+=w,this.metrics.maxPaintMs=Math.max(this.metrics.maxPaintMs,w),this.paints.set(e,{paint:_,lightPaint:E,paintVersion:A,content:v,theme:g,width:a.width,height:a.height,fontState:m})}const R={key:r,node:e,trigger:n??s?.trigger??null,epoch:++this.sequence,elapsed:0,flight:{rect:Ts(a),anchor:u,opening:t,progress:0,duration:t?Dc:Ic,apertureWidth:Math.min(48,(c?.width??80)*.6)*.65,fresh:t&&!s,viewportWidth:innerWidth},fromFront:t?h:0,fromAlpha:d,front:t?h:0,paint:_,lightPaint:E,pane:e.matches("dialog"),themed:p,groups:[],controls:new Map,radius:parseFloat(getComputedStyle(e).borderTopLeftRadius)||0,layoutDirty:!0,paintDirty:!1,cleanup:()=>{},theme:g,paintVersion:A,content:v,fontState:m};if(!s&&this.fields.size>=4){const w=[...this.fields.values()].find(S=>!S.flight.opening)??this.fields.values().next().value;this.restore(w),this.fields.delete(w.key)}s&&this.metrics.retargets++,this.metrics.requests++,this.fields.set(r,R),t&&this.prepare(R)}prepare(e){const t=e.node;t.dataset.paneFlight=e.key,t.dataset.paneFlightState="opening",t.dataset.paneFront=String(e.front);const n=t.matches(".portfolio-nav-shell")?":scope > *":".settings-heading h2,.settings-body,.info-body,.help-heading > :not(button),.help-body,.index-heading h2,.projects-index-rows";e.groups=[...t.querySelectorAll(n)].map(o=>{const l=o.getBoundingClientRect();return{element:o,top:l.top-e.flight.rect.y,height:l.height,clip:o.style.clipPath,mask:o.style.maskImage,pointer:o.style.pointerEvents}});for(const o of t.querySelectorAll("button,a,input,[tabindex],.angry-slider-gesture,.settings-motion"))!o.matches(".pane-close")&&!o.closest("[data-glass-copy]")&&e.controls.set(o,{inert:o.inert,bottom:o.getBoundingClientRect().bottom-e.flight.rect.y});this.metrics.layoutRebuilds++,e.layoutDirty=!1;const r=()=>{e.paintDirty=!0,e.layoutDirty=!0},s=new ResizeObserver(()=>{e.layoutDirty=!0});s.observe(t);const a=new MutationObserver(r);a.observe(t,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["src","aria-selected","value","checked"]}),t.addEventListener("input",r),t.addEventListener("change",r),t.addEventListener("load",r,!0),document.fonts.addEventListener("loadingdone",r),e.cleanup=()=>{s.disconnect(),a.disconnect(),t.removeEventListener("input",r),t.removeEventListener("change",r),t.removeEventListener("load",r,!0),document.fonts.removeEventListener("loadingdone",r)},this.paintFront(e)}paintFront(e){const t=e.front*e.flight.rect.height,n=Math.min(10,e.flight.rect.height-t);e.node.dataset.paneFront=String(e.front),e.node.style.setProperty("--pane-front-px",`${t}px`),e.node.style.setProperty("--pane-solid-px",`${Math.max(0,t-n)}px`),e.node.style.setProperty("--pane-hidden-px",`${Math.max(0,e.flight.rect.height-t)}px`);for(const r of e.groups){const s=Math.max(0,r.height-Math.max(0,t-r.top));r.element.style.clipPath=`inset(0 0 ${s}px 0)`,r.element.style.maskImage=`linear-gradient(to bottom, black ${Math.max(0,t-n-r.top)}px, transparent ${Math.max(0,t-r.top)}px)`,r.element.style.pointerEvents=t>r.top?"auto":"none"}for(const[r,s]of e.controls)r.inert=s.inert||s.bottom>t+.5}restore(e){for(const t of e.groups)t.element.style.clipPath=t.clip,t.element.style.maskImage=t.mask,t.element.style.pointerEvents=t.pointer;e.cleanup();for(const[t,n]of e.controls)t.inert=n.inert;delete e.node.dataset.paneFlight,delete e.node.dataset.paneFlightState,delete e.node.dataset.paneFront,e.node.style.removeProperty("--pane-front-px"),e.node.style.removeProperty("--pane-solid-px"),e.node.style.removeProperty("--pane-hidden-px"),e.groups=[],e.controls.clear()}step(e){const t=performance.now();for(const[r,s]of this.fields){if(s.flight.progress===1&&s.flight.opening){(!s.node.isConnected||s.node instanceof HTMLDialogElement&&!s.node.open)&&(this.restore(s),this.fields.delete(r));continue}if(s.flight.opening&&s.node.isConnected){const a=s.node.getBoundingClientRect(),o=s.flight.rect,l=Math.abs(a.width-o.width)>1||Math.abs(a.height-o.height)>1,c=s.themed?"paired":document.documentElement.dataset.colorTheme??"",u=c!==s.theme;if(s.flight.viewportWidth=innerWidth,s.trigger?.isConnected&&s.trigger.getClientRects().length){const h=s.trigger.getBoundingClientRect();s.flight.anchor={x:h.left+h.width/2,y:h.bottom}}if(a.width>0&&a.height>0){if(l){const g=s.front;s.fromAlpha=Nc(s.flight.progress,!0,s.fromAlpha),this.restore(s),s.fromFront=g,s.elapsed=0,s.flight={...s.flight,rect:Ts(a),progress:0,duration:Math.max(.2,Dc*(1-g)),fresh:!1,viewportWidth:innerWidth},s.epoch=++this.sequence,this.metrics.retargets++,this.prepare(s)}else s.flight.rect.x=a.left,s.flight.rect.y=a.top;const h=s.paintDirty?Fc(s.node):s.content,d=`${document.fonts.status}:${document.fonts.size}`,p=s.paintDirty&&(h!==s.content||d!==s.fontState||!!s.node.querySelector('.angry-slider-gesture:not([data-slider-phase="idle"])'));if(l||u||p){const g=performance.now();s.paint=Qi(s.node,a.width,a.height,s.paint,s.themed?"dark":void 0),s.themed&&(s.lightPaint=Qi(s.node,a.width,a.height,s.lightPaint)),s.paintVersion=++this.paintSequence,s.theme=c,s.content=h,s.paintDirty=!1,s.fontState=d,this.paints.set(s.node,{paint:s.paint,lightPaint:s.lightPaint,paintVersion:s.paintVersion,content:h,theme:c,width:a.width,height:a.height,fontState:s.fontState}),this.metrics.paints++;const v=performance.now()-g;this.metrics.paintMs+=v,this.metrics.maxPaintMs=Math.max(this.metrics.maxPaintMs,v)}if(s.layoutDirty){for(const g of s.groups){const v=g.element.getBoundingClientRect();g.top=v.top-a.top,g.height=v.height}for(const[g,v]of s.controls)v.bottom=g.getBoundingClientRect().bottom-a.top;s.layoutDirty=!1,this.metrics.layoutRebuilds++}s.paintDirty=!1}}document.hidden||!this.enabled(s.node)?s.elapsed=s.flight.duration:s.elapsed+=Math.max(0,Math.min(.05,e)),s.flight.progress=Math.min(1,s.elapsed/s.flight.duration),s.flight.opening&&(s.front=h0(s.flight.progress,!0,s.fromFront,s.flight.fresh!==!1),this.paintFront(s)),s.flight.progress===1&&(this.restore(s),s.flight.opening||this.fields.delete(r))}this.metrics.active=[...this.fields.values()].filter(r=>r.flight.progress<1).length;const n=performance.now()-t;this.metrics.frameMs=n,this.metrics.maxFrameMs=Math.max(this.metrics.maxFrameMs,n)}finish(){for(const e of this.fields.values())this.restore(e);this.fields.clear(),this.clickedOrigin=null,this.origins=new WeakMap,this.metrics.active=0}}const kt=new f0,Un=32768,Ki=1024,p0=2048,m0=()=>({x:0,y:0,alpha:0,born:!1,settled:!1,vx:0,vy:0});class g0{constructor(e){this.scene=new Pi,this.geometry=new ju,this.canvas=document.createElement("canvas"),this.fields=new Map,this.geometryKey="",this.compilation=null,this.pose=m0(),this.uv={x:0,y:0},this.seed={x:0,y:0},this.origin={x:0,y:0},this.speed={x:0,y:0},this.canvas.width=this.canvas.height=p0,this.texture=new Fa(this.canvas),this.texture.colorSpace=Mn,this.texture.generateMipmaps=!1,this.texture.minFilter=this.texture.magFilter=Dt;const t=new on(1,1);this.geometry.index=t.index,this.geometry.setAttribute("position",t.attributes.position),this.geometry.setAttribute("uv",t.attributes.uv),this.attributes={aTarget:new dn(new Float32Array(Un*2),2),aSeed:new dn(new Float32Array(Un*2),2),aFrom:new dn(new Float32Array(Un*2),2),aVelocity:new dn(new Float32Array(Un*2),2),aAlpha:new dn(new Float32Array(Un),1),aField:new dn(new Float32Array(Un),1)};for(const[r,s]of Object.entries(this.attributes))this.geometry.setAttribute(r,s.setUsage(Ru));this.geometry.instanceCount=0,this.uniforms={...e,uPaint:{value:this.texture},uThemeMix:{value:0},uRects:{value:Array.from({length:4},()=>new at)},uAnchors:{value:Array.from({length:4},()=>new we)},uStates:{value:Array.from({length:4},()=>new at)},uFresh:{value:[0,0,0,0]},uCells:{value:Array.from({length:4},()=>new we)},uPaintRects:{value:Array.from({length:4},()=>new at)},uLightPaintRects:{value:Array.from({length:4},()=>new at)},uFilm:{value:Array.from({length:4},()=>new at)},uRadius:{value:[0,0,0,0]}},this.material=new Ku({uniforms:this.uniforms,glslVersion:ya,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`precision highp float;in vec3 position;in vec2 aTarget,aSeed,aFrom,aVelocity;in float aField,aAlpha;uniform vec2 uSize,uCells[4],uAnchors[4];uniform vec4 uRects[4],uStates[4];uniform float uFresh[4];out vec2 vTarget;flat out float vField;out float vAlpha;
      float ease(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
      ${d0}
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
       outColor=vec4(mix(glass,foreground.rgb,foreground.a),vAlpha*(1.-takeover));}`});const n=new xt(this.geometry,this.material);n.frustumCulled=!1,this.scene.add(n)}snapshot(e){return{...e.flight,rect:{...e.flight.rect},anchor:{...e.flight.anchor}}}sync(e){this.uniforms.uThemeMix.value=0;const t=[...kt.fields.values()].filter(l=>l.flight.progress<1).slice(-4);if(!t.length)return this.geometry.instanceCount=0,this.fields.clear(),this.geometryKey="",kt.metrics.tiles=0,0;const n=t.reduce((l,c)=>l+c.flight.rect.width*c.flight.rect.height,0),r=Math.max(4,Math.ceil(Math.sqrt(n/Un))),s=t.map(l=>`${l.key}:${l.epoch}`).join("|"),a=this.canvas.getContext("2d");let o=!1;if(s!==this.geometryKey){const l=new Map;let c=0;kt.metrics.geometryBuilds++,t.forEach((u,h)=>{const d=this.fields.get(u.key),p=u.flight.rect,g=t.slice(h+1).reduce((I,B)=>{const k=this.fields.get(B.key);return I+(k?k.cols*k.rows:0)},0),v=Math.max(1,Un-(4-t.length)-c-g);let m=r;if(!d)for(;Math.ceil(p.width/m)*Math.ceil(p.height/m)>v;)m++;const f=d?.cols??Math.ceil(p.width/m),T=d?.rows??Math.ceil(p.height/m),y=f*T;if(c+y>Un)throw new Error("Pane tile capacity invariant exceeded");const _=d&&d.epoch===u.epoch,E=_?d.from:d?.spareFrom??new Float32Array(y*2),A=_?d.velocity:d?.spareVelocity??new Float32Array(y*2),R=_?d.alpha:d?.spareAlpha??new Float32Array(y),w=_?d.spareFrom:d?.from??new Float32Array(y*2),S=_?d.spareVelocity:d?.velocity??new Float32Array(y*2),x=_?d.spareAlpha:d?.alpha??new Float32Array(y),L=d?.seeds??new Float32Array(y*2);for(let I=0;I<y;I++){if(this.uv.x=(I%f+.5)/f,this.uv.y=(Math.floor(I/f)+.5)/T,!d){const k=l0(I);L[I*2]=k.x,L[I*2+1]=k.y}if(this.seed.x=L[I*2],this.seed.y=L[I*2+1],!_){this.origin.x=u.flight.opening?u.flight.anchor.x+(this.seed.x-.5)*(u.flight.apertureWidth??36):p.x+this.uv.x*p.width,this.origin.y=u.flight.opening?u.flight.anchor.y+3:p.y+this.uv.y*p.height,this.speed.x=this.speed.y=0;let k=u.flight.opening?0:1;d&&(this.origin.x=d.from[I*2],this.origin.y=d.from[I*2+1],this.speed.x=d.velocity[I*2],this.speed.y=d.velocity[I*2+1],Uc(d.flight,this.uv,this.seed,this.origin,this.speed,d.alpha[I],this.pose),this.origin.x=this.pose.x,this.origin.y=this.pose.y,this.speed.x=this.pose.vx,this.speed.y=this.pose.vy,k=d.flight.opening&&this.uv.y<d.nativeFront?1:this.pose.alpha),E[I*2]=this.origin.x,E[I*2+1]=this.origin.y,A[I*2]=this.speed.x,A[I*2+1]=this.speed.y,R[I]=k}const B=c+I;this.attributes.aTarget.setXY(B,this.uv.x,this.uv.y),this.attributes.aSeed.setXY(B,this.seed.x,this.seed.y),this.attributes.aFrom.setXY(B,E[I*2],E[I*2+1]),this.attributes.aVelocity.setXY(B,A[I*2],A[I*2+1]),this.attributes.aAlpha.setX(B,R[I]),this.attributes.aField.setX(B,h)}l.set(u.key,{epoch:u.epoch,cols:f,rows:T,from:E,velocity:A,alpha:R,spareFrom:w,spareVelocity:S,spareAlpha:x,seeds:L,flight:{...this.snapshot(u),tileCount:y},nativeFront:u.front,paintVersion:d?.paintVersion??-1,paint:d?.paint??u.paint,slot:d?.slot??-1}),c+=y}),this.fields=l,this.geometry.instanceCount=c;for(const u of Object.values(this.attributes))u.needsUpdate=!0;this.geometryKey=s,kt.metrics.geometryUploads++}return kt.metrics.degradedTileSize=r,t.forEach((l,c)=>{const u=l.flight.rect,h=this.fields.get(l.key);if(h.slot!==c||h.paintVersion!==l.paintVersion||h.paint!==l.paint){const p=c%2*Ki,g=Math.floor(c/2)*Ki;a.clearRect(p,g,Ki,Ki);const v=Math.min(1,Ki/(l.paint.width*(l.lightPaint?2:1)),Ki/l.paint.height),m=l.paint.width*v,f=l.paint.height*v;a.drawImage(l.paint,p,g,m,f),this.uniforms.uPaintRects.value[c].set(p,g,m,f),l.lightPaint&&a.drawImage(l.lightPaint,p+m,g,m,f),this.uniforms.uLightPaintRects.value[c].set(p+(l.lightPaint?m:0),g,m,f),h.slot=c,h.paintVersion=l.paintVersion,h.paint=l.paint,o=!0}this.uniforms.uRects.value[c].set(u.x,u.y,u.width,u.height),this.uniforms.uAnchors.value[c].set(l.flight.anchor.x,l.flight.anchor.y),this.uniforms.uStates.value[c].set(l.flight.progress,Number(l.flight.opening),l.front,l.flight.duration),this.uniforms.uCells.value[c].set(u.width/h.cols,u.height/h.rows),this.uniforms.uFresh.value[c]=+(l.flight.fresh!==!1);const d=vl(nt.accent).map((p,g)=>p*[50,45,61][g]);this.uniforms.uFilm.value[c].set(d[0]/255,d[1]/255,d[2]/255,.47),this.uniforms.uRadius.value[c]=Math.min(l.radius,u.width/2,u.height/2),kt.metrics.degradedTileSize=Math.max(kt.metrics.degradedTileSize,u.width/h.cols,u.height/h.rows),h.flight={...this.snapshot(l),tileCount:h.cols*h.rows},h.nativeFront=l.front}),o&&(this.texture.needsUpdate=!0,kt.metrics.textureUploads++),kt.metrics.tiles=this.geometry.instanceCount,this.geometry.instanceCount}sample(e,t){const n=this.fields.get(e);return n?t.slice(0,256).filter(r=>r>=0&&r<n.alpha.length).map(r=>{const s={x:(r%n.cols+.5)/n.cols,y:(Math.floor(r/n.cols)+.5)/n.rows},a={x:n.seeds[r*2],y:n.seeds[r*2+1]},o={x:n.from[r*2],y:n.from[r*2+1]},l={x:n.velocity[r*2],y:n.velocity[r*2+1]};return{index:r,uv:s,seed:a,from:o,velocity:l,fromAlpha:n.alpha[r],native:s.y<n.nativeFront,pose:Uc(n.flight,s,a,o,l,n.alpha[r])}}):[]}prepare(e,t){const n=this.compilation??e.compileAsync(this.scene,t).then(()=>{});return this.compilation=n,n}dispose(){const e=()=>{this.geometry.dispose(),this.material.dispose(),this.texture.dispose(),this.fields.clear()};this.compilation?this.compilation.then(e,e):e()}}let St,ba,Kn,ji;const Is=new we,Eh=new Ci;let ur=0,Vo=0,bi=!1,Ro=!1;const Go=matchMedia("(prefers-reduced-motion:reduce),(forced-colors:active),(prefers-reduced-transparency:reduce),(prefers-contrast:more)"),wi=()=>Go.matches||document.body.dataset.reduced==="true";function v0(){wi()&&ri()}function ri(){cancelAnimationFrame(ur),ur=0,kt.finish(),St&&(St.domElement.hidden=!0)}function bh(){St||(St=new mr({alpha:!0,antialias:!1}),St.domElement.setAttribute("aria-hidden","true"),St.domElement.className="sheet-effects",St.domElement.hidden=!0,document.body.append(St.domElement),St.setClearColor(0,0),St.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),ri(),kt.available=!1,bi=!0}),St.domElement.addEventListener("webglcontextrestored",()=>{bi=!1,kt.available=!0}),Kn=document.createElement("canvas"),ji=new Fa(Kn),ji.generateMipmaps=!1,ji.minFilter=Dt,ba=new g0({uBase:{value:ji},uSize:{value:Is},uPixelRatio:{value:new we(1,1)}}),kt.available=!0)}function _0(){if(!(St||bi||document.hidden||wi()))try{bh(),St&&ba.prepare(St,Eh).catch(()=>{})}catch{bi=!0,ri()}}function x0(){if(Ro||St||bi||wi())return;Ro=!0;const i=()=>{Ro=!1,_0()};typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:1400}):setTimeout(i,250)}function y0(){const i=innerWidth,e=innerHeight;Kn.width=Math.min(3840,Math.round(i*Math.min(devicePixelRatio,2))),Kn.height=Math.max(1,Math.round(e*Kn.width/i));const t=Kn.getContext("2d");t.scale(Kn.width/i,Kn.height/e);let n=!1;if(window.dispatchEvent(new CustomEvent("amethyst-capture-stage",{detail:{ctx:t,paintPane:Qi,handled:()=>{n=!0}}})),n){ji.needsUpdate=!0;return}const r=121*Math.PI/180,s=Math.sin(r),a=-Math.cos(r),o=document.body.offsetHeight,l=o/2-scrollY,c=(Math.abs(s)*i+Math.abs(a)*o)/2,u=t.createLinearGradient(i/2-s*c,l-a*c,i/2+s*c,l+a*c);for(const[v,m]of[[.05,"#131315"],[.42,"#252427"],[.65,"#181819"],[1,"#121213"]])u.addColorStop(v,m);t.fillStyle=u,t.fillRect(0,0,i,e);const h=document.querySelector("#banner"),d=h.getBoundingClientRect();let p=!1;const g=v=>{v instanceof HTMLImageElement&&(!v.complete||!v.naturalWidth)||(t.drawImage(v,d.x,d.y,d.width,d.height),p=!0)};if(window.dispatchEvent(new CustomEvent("amethyst-paint-banner",{detail:g})),!p){const v=h.querySelector("img");v&&g(v)}for(const v of document.querySelectorAll(".wordmark,.segment,.caption")){const m=v.getBoundingClientRect();m.width&&m.height&&t.drawImage(Qi(v,m.width,m.height),m.x,m.y,m.width,m.height)}ji.needsUpdate=!0}function wh(i){if(ur=0,!St||document.hidden||wi()){ri();return}(Is.x!==innerWidth||Is.y!==innerHeight)&&(Is.set(innerWidth,innerHeight),St.setPixelRatio(Math.min(devicePixelRatio,1.5)),St.setSize(innerWidth,innerHeight,!1)),kt.step(Math.max(0,(i-Vo)/1e3)),Vo=i,ba.sync(0)?(St.domElement.hidden=!1,St.render(ba.scene,Eh),ur=requestAnimationFrame(wh)):St.domElement.hidden=!0}function Oc(i,e,t){if(bi||document.hidden||wi())return ri(),!1;try{bh(),y0();for(const n of i.querySelectorAll(".glass"))kt.request(n,e,t);return ur||(Vo=performance.now(),ur=requestAnimationFrame(wh)),!0}catch(n){return bi=!0,ri(),console.warn("Glass motion fallback",n),!1}}document.addEventListener("visibilitychange",()=>{document.hidden&&ri()});Go.addEventListener("change",()=>{Go.matches&&ri()});const M0="http://www.w3.org/2000/svg";function As(i,e){const t=document.createElementNS(M0,i);for(const[n,r]of Object.entries(e))t.setAttribute(n,r);return t}function S0(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const r=n.getContext("2d"),s=r.createImageData(i,e);for(let a=0;a<e;a++)for(let o=0;o<i;o++){const l=o+.5-i/2,c=a+.5-e/2,u=Math.abs(l)-i/2+t,h=Math.abs(c)-e/2+t,d=Math.max(u,0),p=Math.max(h,0),g=Math.hypot(d,p),v=t-g-Math.min(Math.max(u,h),0),m=Math.pow(Math.max(0,1-Math.max(v,0)/25),1.8),f=g?d/g:+(u>h),T=g?p/g:+(h>=u),y=4*(a*i+o);s.data[y]=128+Math.sign(l)*f*m*112,s.data[y+1]=128+Math.sign(c)*T*m*112,s.data[y+2]=128,s.data[y+3]=255}return r.putImageData(s,0,0),n.toDataURL()}function E0(i){if(!CSS.supports("backdrop-filter","url(#glass) blur(5px)"))return;let e=document.getElementById("amethyst-optics");e||(e=As("svg",{id:"amethyst-optics",width:0,height:0,"aria-hidden":"true"}),e.style.position="absolute",document.body.append(e));for(const[t,n]of[...i.querySelectorAll(".glass")].entries()){const r=n.offsetWidth,s=n.offsetHeight;if(!r||!s||n.dataset.optics===r+"x"+s)continue;const a="amethyst-lens-"+(n.id||t),o=As("filter",{id:a,x:0,y:0,width:"100%",height:"100%","color-interpolation-filters":"sRGB"}),l=Math.min(parseFloat(getComputedStyle(n).borderRadius),s/2);o.append(As("feImage",{href:S0(r,s,l),width:"100%",height:"100%",preserveAspectRatio:"none",result:"normal"})),o.append(As("feDisplacementMap",{in:"SourceGraphic",in2:"normal",scale:28,xChannelSelector:"R",yChannelSelector:"G"})),document.getElementById(a)?.remove(),e.append(o),n.style.backdropFilter="url(#"+a+") blur(9px) saturate(1.32)",n.dataset.optics=r+"x"+s}}const b0=[20,34,52],w0=[36,56,80];function T0(i,e){const t=matchMedia("(prefers-reduced-motion: reduce)"),n=matchMedia("(forced-colors:active),(prefers-reduced-transparency:reduce),(prefers-contrast:more)"),r=()=>({motion:!t.matches,lens:!0,speed:1,radius:1,sound:!0}),s="amethyst.display.v2";let a=r(),o=!1;try{const w=JSON.parse(localStorage.getItem(s));if(w){for(const S of["motion","lens","sound"])typeof w[S]=="boolean"&&(a[S]=w[S]);for(const S of["speed","radius"])[0,1,2].includes(w[S])&&(a[S]=w[S]);o=w.motionExplicit===!0,o||(a.motion=!t.matches)}}catch{}const l=document.querySelector("#info-panel"),c=document.querySelector("#about-trigger"),u=document.querySelector("#sound-toggle"),h=new Map([[l,c]]);let d=null,p,g=null;const v=w=>!w.closest(".controls, #sound-toggle");function m(){try{localStorage.setItem(s,JSON.stringify({...a,motionExplicit:o}))}catch{}}function f(){fv(a.sound),u.setAttribute("aria-pressed",String(!a.sound)),u.title=a.sound?"Mute sound and music":"Unmute sound and music",u.setAttribute("aria-label",u.title),document.body.dataset.reduced=String(!a.motion||t.matches),_(),x0(),i({...a,pxSpeed:b0[a.speed],pxRadius:w0[a.radius]})}function T(w){n.matches||E0(w)}function y(w,S){const x=S.getBoundingClientRect(),L=S.closest(".controls").getBoundingClientRect(),I=x.bottom+14;w.style.setProperty("--sheet-top",`${I-L.top}px`),w.style.setProperty("--sheet-right",`${L.right-x.right}px`);const B=(visualViewport?.offsetTop??0)+(visualViewport?.height??innerHeight);w.style.setProperty("--sheet-space",`${Math.max(32,B-I-8)}px`)}function _(){v0(),wi()&&p?.cancel()}function E({focus:w=!0,cue:S=!0,animate:x=!0}={}){if(!d)return;const L=d,I=h.get(L);d=null,p?.cancel(),x&&Oc(L,!1,I),I.setAttribute("aria-expanded","false"),(w||L.contains(document.activeElement))&&I.focus({preventScroll:!0}),L.inert=!0,L.hidden=!0,S&&wn("close"),e(),window.dispatchEvent(new Event("amethyst-panel"))}function A(w,S){if(Ea(),d===w)return E();E({focus:!1,cue:!1}),d=w,w.hidden=!1,w.inert=!1,w.scrollTop=0,S.setAttribute("aria-expanded","true"),e(),window.dispatchEvent(new Event("amethyst-panel")),y(w,S),T(w),w.focus({preventScroll:!0}),!Oc(w,!0,S)&&!wi()&&(p=w.animate([{opacity:0},{opacity:1}],{duration:230,easing:"ease-out"})),wn("open")}for(const[w,S]of h)S.disabled=!1,S.onclick=()=>A(w,S),new ResizeObserver(()=>{w.hidden||T(w)}).observe(w);l.querySelector(".close-bio").onclick=()=>E(),u.disabled=!1,u.onclick=()=>{a.sound=!a.sound,m(),f(),a.sound&&(Ea(),wn("unmute"))},document.addEventListener("keydown",w=>{w.key==="Escape"&&d&&(w.preventDefault(),E())}),document.addEventListener("click",w=>{d&&v(w.target)&&E({focus:!1})}),document.addEventListener("touchstart",w=>{g=d&&v(w.target)&&w.touches.length===1?w.touches[0]:null},{passive:!0}),document.addEventListener("touchmove",w=>{if(!g)return;const S=w.touches[0];Math.hypot(S.clientX-g.clientX,S.clientY-g.clientY)>8&&(g=null)},{passive:!0}),document.addEventListener("touchcancel",()=>{g=null},{passive:!0}),document.addEventListener("touchend",w=>{!g||!d||g.identifier!==w.changedTouches[0]?.identifier||(g=null,w.cancelable&&w.preventDefault(),E({focus:!1}))},{passive:!1}),document.addEventListener("focusin",w=>{d&&w.target.matches(":focus-visible")&&v(w.target)&&E({focus:!1})});const R=()=>{d&&y(d,h.get(d))};return addEventListener("resize",R),new ResizeObserver(R).observe(c),document.fonts.addEventListener("loadingdone",R),visualViewport?.addEventListener("resize",R),addEventListener("pagehide",()=>E({focus:!1,cue:!1,animate:!1})),t.addEventListener("change",()=>{o||(a.motion=!t.matches),f()}),n.addEventListener("change",()=>{_();for(const w of document.querySelectorAll(".glass"))w.style.backdropFilter="",delete w.dataset.optics;d&&T(d)}),f(),()=>E({focus:!1,cue:!1})}const It=document.querySelector("#banner"),A0=document.querySelector("#lens"),Wo={x:0,y:0,radius:0},Sl=matchMedia("(hover: hover) and (pointer: fine)");let En,Hr,jt,ti=0;const R0=()=>document.querySelector("#about-trigger").ariaExpanded==="true";function gr(){const i=ti<.98||R0();function e(){Wo.radius=0,It.classList.remove("hover"),jt?.redraw()}if(It.classList.toggle("lens-suspended",i),!Hr||!En.lens||!Sl.matches||i){e();return}const t=It.getBoundingClientRect(),n=Hr.x-t.left,r=Hr.y-t.top;if(n<0||r<0||n>t.width||r>t.height){e();return}A0.style.transform=`translate(${n-En.pxRadius}px,${r-En.pxRadius}px)`,It.classList.add("hover"),Object.assign(Wo,{x:n,y:t.height-r,radius:En.pxRadius}),jt?.redraw()}const Jr=It.querySelector("img"),C0=It.querySelector("source"),Bc=yv(It,Jr);function Th(){const i=ka(It.clientWidth,It.clientHeight);Object.assign(Jr.style,{top:i.top+"px",left:i.left+"px",width:_l*i.scale+"px",height:xl*i.scale+"px"})}new ResizeObserver(Th).observe(It);addEventListener("amethyst-palette",()=>{C0.srcset=jn("compact/"+nt.id+"-poster.webp"),Jr.src=jn(nt.id+"-poster.webp"),Jr.alt="A monochrome portrait with "+nt.label.toUpperCase()+" / CACHYOS lettering sweeping behind the figure.",jt?.redraw()});Th();function kn(){Hr=null,gr()}const P0=T0(i=>{En=i,It.style.setProperty("--r",`${i.pxRadius}px`),gr(),jt?.syncPreferences(),window.dispatchEvent(new Event("amethyst-preferences"))},kn);It.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||!Sl.matches)return kn();Hr={x:i.clientX,y:i.clientY},gr()});It.addEventListener("pointerleave",kn);It.addEventListener("pointercancel",kn);addEventListener("blur",kn);addEventListener("pagehide",kn);addEventListener("scroll",gr,{passive:!0});Sl.addEventListener("change",kn);addEventListener("amethyst-before-pane-snapshot",()=>jt?.redraw());addEventListener("amethyst-paint-banner",i=>{let e=!1;jt?.snapshot(t=>{e=!0,i.detail(t)}),e||(i.detail(Jr),Bc.width>0&&i.detail(Bc))});const zc=()=>ti>0,_i=document.querySelector(".portrait-retry");let Vr=!1,Fn=!1,Cr=!1,Xo=!1;function Li(){kn(),jt?.syncPreferences(),_i.hidden=ti<.99||!Fn&&En.motion,_i.textContent=Fn?"Retry portrait":Vr?"Pause portrait":"Play portrait",!(jt||Cr||Fn||!zc()&&!(Xo&&En.motion))&&(Cr=!0,Mv(It,()=>({...En,motion:En.motion||Vr,portraitActive:!!zc(),gate:ti}),gr,Wo).then(i=>{jt=i,Cr=!1,Li()}).catch(i=>{Cr=!1,Fn=!0,_i.hidden=ti<.99,console.warn("Amethyst poster active:",i.message)}))}It.addEventListener("portrait-restored",()=>{Fn=!1,Li()});It.addEventListener("portrait-unavailable",()=>{Fn=!0,_i.textContent="Retry portrait",_i.hidden=ti<.99});_i.addEventListener("click",()=>{wn(Fn?"retry":Vr?"pause":"play"),Vr=!Vr||Fn,Fn=!1,_i.textContent="Play portrait",jt&&jt.retry(),Li()});addEventListener("amethyst-gate",i=>{ti=i.detail,gr(),jt?.redraw(),!jt&&!Cr&&ti>0&&Li()});addEventListener("amethyst-prepare-portrait",i=>{Xo=i.detail,Xo&&Li()});addEventListener("amethyst-clear-trail",kn);addEventListener("amethyst-chapter",Li);addEventListener("amethyst-panel",Li);a0({dismissPanels:P0,allowMotion:()=>En.motion});
