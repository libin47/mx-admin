import{f as se,$ as i,a4 as p,a6 as E,ag as y,af as qe,aN as G,V as Ye,a7 as de,U as Ge,H as R,aj as X,Z as ee,n as h,am as Xe,Y as et,_ as tt,L as nt,a1 as F,al as at,aY as te,bj as it,b5 as rt,ac as B,ao as d}from"./index-d885f019.js";import{N as ot}from"./Select-f7ce401c.js";import{B as ne,F as ae,a as ie,b as re}from"./Forward-8c76bb04.js";import{s as oe}from"./prop-0f12dfb2.js";var le=se({name:"More",render(){return i("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}});function lt(t,a,r=9){if(a===1)return[1];if(a===2)return[1,2];const u=1,o=a;let s=t,f=t;const x=(r-5)/2;f+=Math.ceil(x),f=Math.min(Math.max(f,u+r-3),o-2),s-=Math.floor(x),s=Math.max(Math.min(s,o-r+3),u+2);let S=!1,C=!1;s>u+2&&(S=!0),f<o-2&&(C=!0);const l=[];l.push(u),S?l.push(-2):o>=u+1&&l.push(u+1);for(let g=s;g<=f;++g)l.push(g);return C?l.push(-1):f===o-2&&l[l.length-1]!==o-1&&l.push(o-1),l[l.length-1]!==o&&l.push(o),l}function st(t,a){return t.map(r=>{switch(r){case-2:return{type:"fast-backward",active:!1};case-1:return{type:"fast-forward",active:!1};default:return r===a?{type:"page",label:r,active:!0}:{type:"page",label:r,active:!1}}})}function dt(t,a,r){const u=lt(t,a,r);return st(u,t)}var ut=p("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[p("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),p("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),E("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),p("select",`
 width: var(--n-select-width);
 `),E("&.transition-disabled",[p("pagination-item","transition: none!important;")]),p("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[p("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),p("pagination-item",`
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
 `,[p("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),qe("disabled",[E("&:hover",`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
 `,[y("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)]),E("&:active",`
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
 `,[E("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),y("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[y("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),y("disabled",`
 cursor: not-allowed;
 `,[p("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)])]);const ct=Object.assign(Object.assign({},de.props),{page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:{type:Number,default:10},pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},prev:Function,next:Function,prefix:Function,suffix:Function,label:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]});var bt=se({name:"Pagination",props:ct,setup(t){G(()=>{t.pageCount!==void 0&&t.itemCount!==void 0&&at("pagination","`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."),t.onPageSizeChange&&te("pagination","`on-page-size-change` is deprecated, please use `on-update:page-size` instead."),t.onChange&&te("pagination","`on-change` is deprecated, please use `on-update:page` instead.")});const{mergedComponentPropsRef:a,mergedClsPrefixRef:r,inlineThemeDisabled:u,mergedRtlRef:o}=Ye(t),s=de("Pagination","-pagination",ut,it,t,r),{localeRef:f}=Ge("Pagination"),x=R(null),S=R(null),C=R(""),l=R(t.defaultPage),g=R(t.defaultPageSize),c=X(ee(t,"page"),l),w=X(ee(t,"pageSize"),g),z=h(()=>{const{itemCount:e}=t;if(e!==void 0)return Math.max(1,Math.ceil(e/w.value));const{pageCount:n}=t;return n!==void 0?Math.max(n,1):1}),P=R(!1),N=R(!1),H=h(()=>{const e=f.value.selectionSuffix;return t.pageSizes.map(n=>typeof n=="number"?{label:`${n} / ${e}`,value:n}:n)}),V=h(()=>{var e,n;return((n=(e=a?.value)===null||e===void 0?void 0:e.Pagination)===null||n===void 0?void 0:n.inputSize)||oe(t.size)}),_=h(()=>{var e,n;return((n=(e=a?.value)===null||e===void 0?void 0:e.Pagination)===null||n===void 0?void 0:n.selectSize)||oe(t.size)}),L=h(()=>(c.value-1)*w.value),D=h(()=>{const e=c.value*w.value-1,{itemCount:n}=t;return n!==void 0&&e>n?n:e}),J=h(()=>{const{itemCount:e}=t;return e!==void 0?e:(t.pageCount||1)*w.value}),W=Xe("Pagination",o,r),j=()=>{rt(()=>{var e;const{value:n}=x;!n||(n.classList.add("transition-disabled"),(e=x.value)===null||e===void 0||e.offsetWidth,n.classList.remove("transition-disabled"))})};function k(e){if(e===c.value)return;const{"onUpdate:page":n,onUpdatePage:m,onChange:b}=t;n&&B(n,e),m&&B(m,e),b&&B(b,e),l.value=e}function K(e){if(e===w.value)return;const{"onUpdate:pageSize":n,onUpdatePageSize:m,onPageSizeChange:b}=t;n&&B(n,e),m&&B(m,e),b&&B(b,e),g.value=e,z.value<c.value&&k(z.value)}function Q(){if(t.disabled)return;const e=Math.min(c.value+1,z.value);k(e)}function Z(){if(t.disabled)return;const e=Math.max(c.value-1,1);k(e)}function q(){if(t.disabled)return;const e=Math.min(c.value+(t.pageSlot-4),z.value);k(e)}function Y(){if(t.disabled)return;const e=Math.max(c.value-(t.pageSlot-4),1);k(e)}function $(e){K(e)}function O(e){var n;if(e.key==="Enter"){const m=parseInt(C.value);Number.isNaN(m)||(k(Math.max(1,Math.min(m,z.value))),C.value="",(n=S.value)===null||n===void 0||n.blur())}}function A(e){if(!t.disabled)switch(e.type){case"page":k(e.label);break;case"fast-backward":Y();break;case"fast-forward":q();break}}function T(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!0;break;case"fast-forward":P.value=!0;break;default:return}j()}}function U(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!1;break;case"fast-forward":P.value=!1;break;default:return}j()}}function I(e){C.value=e.replace(/\D+/g,"")}G(()=>{c.value,w.value,j()});const v=h(()=>{const{size:e}=t,{self:{buttonBorder:n,buttonBorderHover:m,buttonBorderPressed:b,buttonIconColor:ue,buttonIconColorHover:ce,buttonIconColorPressed:me,itemTextColor:fe,itemTextColorHover:ge,itemTextColorPressed:ve,itemTextColorActive:be,itemTextColorDisabled:pe,itemColor:he,itemColorHover:xe,itemColorPressed:Ce,itemColorActive:we,itemColorActiveHover:ze,itemColorDisabled:Pe,itemBorder:ke,itemBorderHover:Se,itemBorderPressed:Ie,itemBorderActive:Me,itemBorderDisabled:ye,itemBorderRadius:Re,jumperTextColor:Fe,jumperTextColorDisabled:Be,buttonColor:Ne,buttonColorHover:je,buttonColorPressed:$e,[d("itemPadding",e)]:Te,[d("itemMargin",e)]:Ue,[d("inputWidth",e)]:Ee,[d("selectWidth",e)]:Oe,[d("inputMargin",e)]:Ae,[d("selectMargin",e)]:He,[d("jumperFontSize",e)]:Ve,[d("prefixMargin",e)]:_e,[d("suffixMargin",e)]:Le,[d("itemSize",e)]:De,[d("buttonIconSize",e)]:Je,[d("itemFontSize",e)]:We,[`${d("itemMargin",e)}Rtl`]:Ke,[`${d("inputMargin",e)}Rtl`]:Qe},common:{cubicBezierEaseInOut:Ze}}=s.value;return{"--n-prefix-margin":_e,"--n-suffix-margin":Le,"--n-item-font-size":We,"--n-select-width":Oe,"--n-select-margin":He,"--n-input-width":Ee,"--n-input-margin":Ae,"--n-input-margin-rtl":Qe,"--n-item-size":De,"--n-item-text-color":fe,"--n-item-text-color-disabled":pe,"--n-item-text-color-hover":ge,"--n-item-text-color-active":be,"--n-item-text-color-pressed":ve,"--n-item-color":he,"--n-item-color-hover":xe,"--n-item-color-disabled":Pe,"--n-item-color-active":we,"--n-item-color-active-hover":ze,"--n-item-color-pressed":Ce,"--n-item-border":ke,"--n-item-border-hover":Se,"--n-item-border-disabled":ye,"--n-item-border-active":Me,"--n-item-border-pressed":Ie,"--n-item-padding":Te,"--n-item-border-radius":Re,"--n-bezier":Ze,"--n-jumper-font-size":Ve,"--n-jumper-text-color":Fe,"--n-jumper-text-color-disabled":Be,"--n-item-margin":Ue,"--n-item-margin-rtl":Ke,"--n-button-icon-size":Je,"--n-button-icon-color":ue,"--n-button-icon-color-hover":ce,"--n-button-icon-color-pressed":me,"--n-button-color-hover":je,"--n-button-color":Ne,"--n-button-color-pressed":$e,"--n-button-border":n,"--n-button-border-hover":m,"--n-button-border-pressed":b}}),M=u?et("pagination",h(()=>{let e="";const{size:n}=t;return e+=n[0],e}),v,t):void 0;return{rtlEnabled:W,mergedClsPrefix:r,locale:f,selfRef:x,jumperRef:S,mergedPage:c,showFastBackward:N,showFastForward:P,pageItems:h(()=>dt(c.value,z.value,t.pageSlot)),mergedItemCount:J,jumperValue:C,pageSizeOptions:H,mergedPageSize:w,inputSize:V,selectSize:_,mergedTheme:s,mergedPageCount:z,startIndex:L,endIndex:D,handleJumperInput:I,handleBackwardClick:Z,handleForwardClick:Q,handlePageItemClick:A,handleSizePickerChange:$,handleQuickJumperKeyUp:O,handlePageItemMouseEnter:T,handlePageItemMouseLeave:U,cssVars:u?void 0:v,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:t,mergedClsPrefix:a,disabled:r,cssVars:u,mergedPage:o,mergedPageCount:s,pageItems:f,showFastBackward:x,showFastForward:S,showSizePicker:C,showQuickJumper:l,mergedTheme:g,locale:c,inputSize:w,selectSize:z,mergedPageSize:P,pageSizeOptions:N,jumperValue:H,prev:V,next:_,prefix:L,suffix:D,label:J,handleJumperInput:W,handleSizePickerChange:j,handleBackwardClick:k,handlePageItemClick:K,handlePageItemMouseEnter:Q,handlePageItemMouseLeave:Z,handleForwardClick:q,handleQuickJumperKeyUp:Y,onRender:$}=this;$?.();const O=t.prefix||L,A=t.suffix||D,T=V||t.prev,U=_||t.next,I=J||t.label;return i("div",{ref:"selfRef",class:[`${a}-pagination`,this.themeClass,this.rtlEnabled&&`${a}-pagination--rtl`,r&&`${a}-pagination--disabled`],style:u},O?i("div",{class:`${a}-pagination-prefix`},O({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,i("div",{class:[`${a}-pagination-item`,!T&&`${a}-pagination-item--button`,(o<=1||o>s||r)&&`${a}-pagination-item--disabled`],onClick:k},T?T({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):i(F,{clsPrefix:a},{default:()=>this.rtlEnabled?i(ae,null):i(ne,null)})),f.map((v,M)=>{let e;switch(v.type){case"page":const n=v.label;I?e=I({type:"page",node:n,active:v.active}):e=n;break;case"fast-forward":const m=S?i(F,{clsPrefix:a},{default:()=>this.rtlEnabled?i(re,null):i(ie,null)}):i(F,{clsPrefix:a},{default:()=>i(le,null)});I?e=I({type:"fast-forward",node:m,active:S}):e=m;break;case"fast-backward":const b=x?i(F,{clsPrefix:a},{default:()=>this.rtlEnabled?i(ie,null):i(re,null)}):i(F,{clsPrefix:a},{default:()=>i(le,null)});I?e=I({type:"fast-backward",node:b,active:x}):e=b;break}return i("div",{key:M,class:[`${a}-pagination-item`,{[`${a}-pagination-item--active`]:v.active,[`${a}-pagination-item--disabled`]:r}],onClick:()=>K(v),onMouseenter:()=>Q(v),onMouseleave:()=>Z(v)},e)}),i("div",{class:[`${a}-pagination-item`,!U&&`${a}-pagination-item--button`,{[`${a}-pagination-item--disabled`]:o<1||o>=s||r}],onClick:q},U?U({page:o,pageSize:P,pageCount:s,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):i(F,{clsPrefix:a},{default:()=>this.rtlEnabled?i(ne,null):i(ae,null)})),C?i(ot,{internalShowCheckmark:!1,size:z,placeholder:"",options:N,value:P,disabled:r,theme:g.peers.Select,themeOverrides:g.peerOverrides.Select,onUpdateValue:j}):null,l?i("div",{class:`${a}-pagination-quick-jumper`},tt(this.$slots.goto,()=>[c.goto]),i(nt,{ref:"jumperRef",value:H,onUpdateValue:W,size:w,placeholder:"",disabled:r,theme:g.peers.Input,themeOverrides:g.peerOverrides.Input,onKeyup:Y})):null,A?i("div",{class:`${a}-pagination-suffix`},A({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{bt as N};
