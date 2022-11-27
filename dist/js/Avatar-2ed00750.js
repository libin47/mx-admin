import{T as I,a4 as F,aU as M,a6 as x,aV as O,a5 as H,f as W,V as A,H as R,X as $,n as u,a7 as w,w as K,Y as N,$ as v,a0 as G,aO as X,d7 as Y,ao as _,bo as D}from"./index-d885f019.js";import{a as U}from"./Tag-b4c59312.js";const q=I("n-avatar-group");var J=F("avatar",`
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
`,[M(x("&","--n-merged-color: var(--n-color-modal);")),O(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
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
 `),H("text","line-height: 1.25")]);const Q=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var re=W({name:"Avatar",props:Q,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=A(t),a=R(!1);let s=null;const d=R(null),y=R(null),B=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,z=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${z})`}}},h=$(q,null),j=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),C=w("Avatar","-avatar",J,Y,t,l),E=$(U,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:E?E.roundRef.value:!1}),T=u(()=>h?!0:t.bordered||!1),L=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};K(()=>t.src,()=>a.value=!1);const S=u(()=>{const e=j.value,r=g.value,f=T.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:z,colorModal:P,colorPopover:V},common:{cubicBezierEaseInOut:k}}=C.value;let p;return typeof e=="number"?p=`${e}px`:p=C.value.self[_("height",e)],{"--n-font-size":b,"--n-border":f?z:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||P,"--n-color-popover":n||V,"--n-bezier":k,"--n-merged-size":`var(--n-avatar-size-override, ${p})`}}),i=c?N("avatar",u(()=>{const e=j.value,r=g.value,f=T.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=D(n)),o}),S,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:B,cssVars:c?void 0:S,themeClass:i?.themeClass,onRender:i?.onRender,hasLoadError:a,handleError:L}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a?.();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=G(t.default,d=>{if(d)return v(X,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{re as N};
