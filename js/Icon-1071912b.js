import{f as G,Z as i,a2 as h,a4 as F,ae as y,ad as Qe,T as se,a5 as A,S as Xe,y as R,ah as ee,X as te,n as g,al as Ye,aL as Ge,am as m,V as de,Y as et,H as tt,$,bg as nt,b4 as at,ab as B,bh as it,aj as rt,E as ot,aq as lt}from"./index-cad930c7.js";import{s as ne}from"./prop-c23c9019.js";import{N as st}from"./Select-f28e0d2f.js";import{B as ae,F as ie,a as re,b as oe}from"./Forward-561c29a2.js";var le=G({name:"More",render(){return i("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}});function dt(t,n,r=9){if(n===1)return[1];if(n===2)return[1,2];const s=1,o=n;let l=t,c=t;const u=(r-5)/2;c+=Math.ceil(u),c=Math.min(Math.max(c,s+r-3),o-2),l-=Math.floor(u),l=Math.max(Math.min(l,o-r+3),s+2);let x=!1,b=!1;l>s+2&&(x=!0),c<o-2&&(b=!0);const d=[];d.push(s),x?d.push(-2):o>=s+1&&d.push(s+1);for(let p=l;p<=c;++p)d.push(p);return b?d.push(-1):c===o-2&&d[d.length-1]!==o-1&&d.push(o-1),d[d.length-1]!==o&&d.push(o),d}function ct(t,n){return t.map(r=>{switch(r){case-2:return{type:"fast-backward",active:!1};case-1:return{type:"fast-forward",active:!1};default:return r===n?{type:"page",label:r,active:!0}:{type:"page",label:r,active:!1}}})}function ut(t,n,r){const s=dt(t,n,r);return ct(s,t)}var mt=h("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[h("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),h("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),F("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),h("select",`
 width: var(--n-select-width);
 `),F("&.transition-disabled",[h("pagination-item","transition: none!important;")]),h("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[h("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),h("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[y("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[h("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),Qe("disabled",[F("&:hover",`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
 `,[y("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)]),F("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[y("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),y("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[F("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),y("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[y("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),y("disabled",`
 cursor: not-allowed;
 `,[h("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)])]);const ft=Object.assign(Object.assign({},A.props),{page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:{type:Number,default:10},pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},prev:Function,next:Function,prefix:Function,suffix:Function,label:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]});var Ct=G({name:"Pagination",props:ft,setup(t){const{mergedComponentPropsRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:s,mergedRtlRef:o}=se(t),l=A("Pagination","-pagination",mt,nt,t,r),{localeRef:c}=Xe("Pagination"),u=R(null),x=R(null),b=R(""),d=R(t.defaultPage),p=R(t.defaultPageSize),f=ee(te(t,"page"),d),w=ee(te(t,"pageSize"),p),P=g(()=>{const{itemCount:e}=t;if(e!==void 0)return Math.max(1,Math.ceil(e/w.value));const{pageCount:a}=t;return a!==void 0?Math.max(a,1):1}),k=R(!1),N=R(!1),V=g(()=>{const e=c.value.selectionSuffix;return t.pageSizes.map(a=>typeof a=="number"?{label:`${a} / ${e}`,value:a}:a)}),H=g(()=>{var e,a;return((a=(e=n?.value)===null||e===void 0?void 0:e.Pagination)===null||a===void 0?void 0:a.inputSize)||ne(t.size)}),L=g(()=>{var e,a;return((a=(e=n?.value)===null||e===void 0?void 0:e.Pagination)===null||a===void 0?void 0:a.selectSize)||ne(t.size)}),D=g(()=>(f.value-1)*w.value),J=g(()=>{const e=f.value*w.value-1,{itemCount:a}=t;return a!==void 0&&e>a?a:e}),W=g(()=>{const{itemCount:e}=t;return e!==void 0?e:(t.pageCount||1)*w.value}),Z=Ye("Pagination",o,r),j=()=>{at(()=>{var e;const{value:a}=u;!a||(a.classList.add("transition-disabled"),(e=u.value)===null||e===void 0||e.offsetWidth,a.classList.remove("transition-disabled"))})};function S(e){if(e===f.value)return;const{"onUpdate:page":a,onUpdatePage:v,onChange:z}=t;a&&B(a,e),v&&B(v,e),z&&B(z,e),d.value=e}function q(e){if(e===w.value)return;const{"onUpdate:pageSize":a,onUpdatePageSize:v,onPageSizeChange:z}=t;a&&B(a,e),v&&B(v,e),z&&B(z,e),p.value=e,P.value<f.value&&S(P.value)}function K(){if(t.disabled)return;const e=Math.min(f.value+1,P.value);S(e)}function Q(){if(t.disabled)return;const e=Math.max(f.value-1,1);S(e)}function X(){if(t.disabled)return;const e=Math.min(f.value+(t.pageSlot-4),P.value);S(e)}function Y(){if(t.disabled)return;const e=Math.max(f.value-(t.pageSlot-4),1);S(e)}function T(e){q(e)}function U(e){var a;if(e.key==="Enter"){const v=parseInt(b.value);Number.isNaN(v)||(S(Math.max(1,Math.min(v,P.value))),b.value="",(a=x.value)===null||a===void 0||a.blur())}}function O(e){if(!t.disabled)switch(e.type){case"page":S(e.label);break;case"fast-backward":Y();break;case"fast-forward":X();break}}function _(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!0;break;case"fast-forward":k.value=!0;break;default:return}j()}}function E(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!1;break;case"fast-forward":k.value=!1;break;default:return}j()}}function I(e){b.value=e.replace(/\D+/g,"")}Ge(()=>{f.value,w.value,j()});const C=g(()=>{const{size:e}=t,{self:{buttonBorder:a,buttonBorderHover:v,buttonBorderPressed:z,buttonIconColor:ce,buttonIconColorHover:ue,buttonIconColorPressed:me,itemTextColor:fe,itemTextColorHover:ve,itemTextColorPressed:ge,itemTextColorActive:be,itemTextColorDisabled:pe,itemColor:he,itemColorHover:xe,itemColorPressed:Ce,itemColorActive:ze,itemColorActiveHover:we,itemColorDisabled:Pe,itemBorder:ke,itemBorderHover:Se,itemBorderPressed:ye,itemBorderActive:Ie,itemBorderDisabled:Me,itemBorderRadius:Re,jumperTextColor:Fe,jumperTextColorDisabled:$e,buttonColor:Be,buttonColorHover:Ne,buttonColorPressed:je,[m("itemPadding",e)]:Te,[m("itemMargin",e)]:_e,[m("inputWidth",e)]:Ee,[m("selectWidth",e)]:Ue,[m("inputMargin",e)]:Oe,[m("selectMargin",e)]:Ae,[m("jumperFontSize",e)]:Ve,[m("prefixMargin",e)]:He,[m("suffixMargin",e)]:Le,[m("itemSize",e)]:De,[m("buttonIconSize",e)]:Je,[m("itemFontSize",e)]:We,[`${m("itemMargin",e)}Rtl`]:Ze,[`${m("inputMargin",e)}Rtl`]:qe},common:{cubicBezierEaseInOut:Ke}}=l.value;return{"--n-prefix-margin":He,"--n-suffix-margin":Le,"--n-item-font-size":We,"--n-select-width":Ue,"--n-select-margin":Ae,"--n-input-width":Ee,"--n-input-margin":Oe,"--n-input-margin-rtl":qe,"--n-item-size":De,"--n-item-text-color":fe,"--n-item-text-color-disabled":pe,"--n-item-text-color-hover":ve,"--n-item-text-color-active":be,"--n-item-text-color-pressed":ge,"--n-item-color":he,"--n-item-color-hover":xe,"--n-item-color-disabled":Pe,"--n-item-color-active":ze,"--n-item-color-active-hover":we,"--n-item-color-pressed":Ce,"--n-item-border":ke,"--n-item-border-hover":Se,"--n-item-border-disabled":Me,"--n-item-border-active":Ie,"--n-item-border-pressed":ye,"--n-item-padding":Te,"--n-item-border-radius":Re,"--n-bezier":Ke,"--n-jumper-font-size":Ve,"--n-jumper-text-color":Fe,"--n-jumper-text-color-disabled":$e,"--n-item-margin":_e,"--n-item-margin-rtl":Ze,"--n-button-icon-size":Je,"--n-button-icon-color":ce,"--n-button-icon-color-hover":ue,"--n-button-icon-color-pressed":me,"--n-button-color-hover":Ne,"--n-button-color":Be,"--n-button-color-pressed":je,"--n-button-border":a,"--n-button-border-hover":v,"--n-button-border-pressed":z}}),M=s?de("pagination",g(()=>{let e="";const{size:a}=t;return e+=a[0],e}),C,t):void 0;return{rtlEnabled:Z,mergedClsPrefix:r,locale:c,selfRef:u,jumperRef:x,mergedPage:f,showFastBackward:N,showFastForward:k,pageItems:g(()=>ut(f.value,P.value,t.pageSlot)),mergedItemCount:W,jumperValue:b,pageSizeOptions:V,mergedPageSize:w,inputSize:H,selectSize:L,mergedTheme:l,mergedPageCount:P,startIndex:D,endIndex:J,handleJumperInput:I,handleBackwardClick:Q,handleForwardClick:K,handlePageItemClick:O,handleSizePickerChange:T,handleQuickJumperKeyUp:U,handlePageItemMouseEnter:_,handlePageItemMouseLeave:E,cssVars:s?void 0:C,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:t,mergedClsPrefix:n,disabled:r,cssVars:s,mergedPage:o,mergedPageCount:l,pageItems:c,showFastBackward:u,showFastForward:x,showSizePicker:b,showQuickJumper:d,mergedTheme:p,locale:f,inputSize:w,selectSize:P,mergedPageSize:k,pageSizeOptions:N,jumperValue:V,prev:H,next:L,prefix:D,suffix:J,label:W,handleJumperInput:Z,handleSizePickerChange:j,handleBackwardClick:S,handlePageItemClick:q,handlePageItemMouseEnter:K,handlePageItemMouseLeave:Q,handleForwardClick:X,handleQuickJumperKeyUp:Y,onRender:T}=this;T?.();const U=t.prefix||D,O=t.suffix||J,_=H||t.prev,E=L||t.next,I=W||t.label;return i("div",{ref:"selfRef",class:[`${n}-pagination`,this.themeClass,this.rtlEnabled&&`${n}-pagination--rtl`,r&&`${n}-pagination--disabled`],style:s},U?i("div",{class:`${n}-pagination-prefix`},U({page:o,pageSize:k,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,i("div",{class:[`${n}-pagination-item`,!_&&`${n}-pagination-item--button`,(o<=1||o>l||r)&&`${n}-pagination-item--disabled`],onClick:S},_?_({page:o,pageSize:k,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):i($,{clsPrefix:n},{default:()=>this.rtlEnabled?i(ie,null):i(ae,null)})),c.map((C,M)=>{let e;switch(C.type){case"page":const a=C.label;I?e=I({type:"page",node:a,active:C.active}):e=a;break;case"fast-forward":const v=x?i($,{clsPrefix:n},{default:()=>this.rtlEnabled?i(oe,null):i(re,null)}):i($,{clsPrefix:n},{default:()=>i(le,null)});I?e=I({type:"fast-forward",node:v,active:x}):e=v;break;case"fast-backward":const z=u?i($,{clsPrefix:n},{default:()=>this.rtlEnabled?i(re,null):i(oe,null)}):i($,{clsPrefix:n},{default:()=>i(le,null)});I?e=I({type:"fast-backward",node:z,active:u}):e=z;break}return i("div",{key:M,class:[`${n}-pagination-item`,{[`${n}-pagination-item--active`]:C.active,[`${n}-pagination-item--disabled`]:r}],onClick:()=>q(C),onMouseenter:()=>K(C),onMouseleave:()=>Q(C)},e)}),i("div",{class:[`${n}-pagination-item`,!E&&`${n}-pagination-item--button`,{[`${n}-pagination-item--disabled`]:o<1||o>=l||r}],onClick:X},E?E({page:o,pageSize:k,pageCount:l,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):i($,{clsPrefix:n},{default:()=>this.rtlEnabled?i(ae,null):i(ie,null)})),b?i(st,{internalShowCheckmark:!1,size:P,placeholder:"",options:N,value:k,disabled:r,theme:p.peers.Select,themeOverrides:p.peerOverrides.Select,onUpdateValue:j}):null,d?i("div",{class:`${n}-pagination-quick-jumper`},et(this.$slots.goto,()=>[f.goto]),i(tt,{ref:"jumperRef",value:V,onUpdateValue:Z,size:w,placeholder:"",disabled:r,theme:p.peers.Input,themeOverrides:p.peerOverrides.Input,onKeyup:Y})):null,O?i("div",{class:`${n}-pagination-suffix`},O({page:o,pageSize:k,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}}),vt=h("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[y("color-transition",{transition:"color .3s var(--n-bezier)"}),y("depth",{color:"var(--n-color)"},[F("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),F("svg",{height:"1em",width:"1em"})]);const gt=Object.assign(Object.assign({},A.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),zt=G({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:gt,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=se(t),s=A("Icon","-icon",vt,it,t,n),o=g(()=>{const{depth:c}=t,{common:{cubicBezierEaseInOut:u},self:x}=s.value;if(c!==void 0){const{color:b,[`opacity${c}Depth`]:d}=x;return{"--n-bezier":u,"--n-color":b,"--n-opacity":d}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),l=r?de("icon",g(()=>`${t.depth||"d"}`),o,t):void 0;return{mergedClsPrefix:n,mergedStyle:g(()=>{const{size:c,color:u}=t;return{fontSize:lt(c),color:u}}),cssVars:r?void 0:o,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var t;const{$parent:n,depth:r,mergedClsPrefix:s,component:o,onRender:l,themeClass:c}=this;return!((t=n?.$options)===null||t===void 0)&&t._n_icon__&&rt("icon","don't wrap `n-icon` inside `n-icon`"),l?.(),i("i",ot(this.$attrs,{role:"img",class:[`${s}-icon`,c,{[`${s}-icon--depth`]:r,[`${s}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?i(o):this.$slots)}});export{zt as N,Ct as a};
