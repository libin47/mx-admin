import{Q as I,a2 as F,aS as V,a4 as x,aT as W,a3 as H,f as A,T as K,y as R,U as w,n as u,a5 as $,w as N,V as O,Z as v,_ as G,aM as _,d6 as D,am as Q,bm as U}from"./index-9c74e798.js";import{a as X}from"./Tag-fc1d507c.js";const Y=I("n-avatar-group");var Z=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(x("&","--n-merged-color: var(--n-color-modal);")),W(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]);const q=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var re=A({name:"Avatar",props:q,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=K(t),a=R(!1);let s=null;const d=R(null),y=R(null),B=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,z=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${z})`}}},h=w(Y,null),T=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),j=$("Avatar","-avatar",Z,D,t,l),C=w(X,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:C?C.roundRef.value:!1}),E=u(()=>h?!0:t.bordered||!1),L=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};N(()=>t.src,()=>a.value=!1);const S=u(()=>{const e=T.value,r=g.value,f=E.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:z,colorModal:M,colorPopover:P},common:{cubicBezierEaseInOut:k}}=j.value;let p;return typeof e=="number"?p=`${e}px`:p=j.value.self[Q("height",e)],{"--n-font-size":b,"--n-border":f?z:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||M,"--n-color-popover":n||P,"--n-bezier":k,"--n-merged-size":`var(--n-avatar-size-override, ${p})`}}),i=c?O("avatar",u(()=>{const e=T.value,r=g.value,f=E.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=U(n)),o}),S,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:B,cssVars:c?void 0:S,themeClass:i?.themeClass,onRender:i?.onRender,hasLoadError:a,handleError:L}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a?.();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=G(t.default,d=>{if(d)return v(_,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{re as N};
