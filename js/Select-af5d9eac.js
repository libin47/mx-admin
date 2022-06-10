import{m as Xe,aX as en,aY as sn,f as se,Z as a,a2 as x,a3 as z,a4 as Z,T as dn,a5 as ae,S as un,U as Je,aZ as An,n as R,V as Ne,$ as cn,a_ as Ln,am as te,a$ as Qe,ai as We,av as fn,aw as ye,ae as K,ad as Ze,aC as hn,X as V,b0 as Dn,y as O,w as Te,a6 as nn,b1 as Vn,_ as jn,aK as Kn,ar as Hn,aN as Wn,Y as Un,aq as qn,ax as Be,b2 as Gn,b3 as vn,ap as Zn,b4 as Ue,b5 as Yn,aL as Xn,b6 as Jn,b7 as tn,M as Qn,F as et,ah as on,b8 as nt,ag as tt,b9 as ot,ba as Ye,as as it,at as lt,au as rt,bb as at,bc as st,bd as ln,be as dt,aE as ut,aa as J}from"./index-9c74e798.js";import{F as ct,N as qe}from"./Tag-fc1d507c.js";function ft(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function bn(e,i){i&&(Xe(()=>{const{value:l}=e;l&&en.registerHandler(l,i)}),sn(()=>{const{value:l}=e;l&&en.unregisterHandler(l)}))}var ht=se({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vt=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),bt=x("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const gt=Object.assign(Object.assign({},ae.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var pt=se({name:"Empty",props:gt,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=dn(e),u=ae("Empty","-empty",bt,Ln,e,i),{localeRef:f}=un("Empty"),b=Je(An,null),g=R(()=>{var v,w,T;return(v=e.description)!==null&&v!==void 0?v:(T=(w=b?.mergedComponentPropsRef.value)===null||w===void 0?void 0:w.Empty)===null||T===void 0?void 0:T.description}),s=R(()=>{var v,w;return((w=(v=b?.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||w===void 0?void 0:w.renderIcon)||(()=>a(ht,null))}),P=R(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:w},self:{[te("iconSize",v)]:T,[te("fontSize",v)]:B,textColor:k,iconColor:_,extraTextColor:C}}=u.value;return{"--n-icon-size":T,"--n-font-size":B,"--n-bezier":w,"--n-text-color":k,"--n-icon-color":_,"--n-extra-text-color":C}}),S=l?Ne("empty",R(()=>{let v="";const{size:w}=e;return v+=w[0],v}),P,e):void 0;return{mergedClsPrefix:i,mergedRenderIcon:s,localizedDescription:R(()=>g.value||f.value.description),cssVars:l?void 0:P,themeClass:S?.themeClass,onRender:S?.onRender}},render(){const{$slots:e,mergedClsPrefix:i,onRender:l}=this;return l?.(),a("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${i}-empty__icon`},e.icon?e.icon():a(cn,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${i}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${i}-empty__extra`},e.extra()):null)}});const mt=a(ct);function wt(e,i){return a(fn,{name:"fade-in-scale-up-transition"},{default:()=>e?a(cn,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>mt}):null})}var rn=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:l,multipleRef:u,valueSetRef:f,renderLabelRef:b,renderOptionRef:g,labelFieldRef:s,valueFieldRef:P,showCheckmarkRef:S,handleOptionClick:v,handleOptionMouseEnter:w}=Je(Qe),T=We(()=>{const{value:C}=l;return C?e.tmNode.key===C.key:!1});function B(C){const{tmNode:y}=e;y.disabled||v(C,y)}function k(C){const{tmNode:y}=e;y.disabled||w(C,y)}function _(C){const{tmNode:y}=e,{value:N}=T;y.disabled||N||w(C,y)}return{multiple:u,isGrouped:We(()=>{const{tmNode:C}=e,{parent:y}=C;return y&&y.rawNode.type==="group"}),showCheckmark:S,isPending:T,isSelected:We(()=>{const{value:C}=i,{value:y}=u;if(C===null)return!1;const N=e.tmNode.rawNode[P.value];if(y){const{value:q}=f;return q.has(N)}else return C===N}),labelField:s,renderLabel:b,renderOption:g,handleMouseMove:_,handleMouseEnter:k,handleClick:B}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:l,isPending:u,isGrouped:f,showCheckmark:b,renderOption:g,renderLabel:s,handleClick:P,handleMouseEnter:S,handleMouseMove:v}=this,w=wt(l,e),T=s?[s(i,l),b&&w]:[ye(i[this.labelField],i,l),b&&w],B=a("div",{class:[`${e}-base-select-option`,i.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:l,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:u,[`${e}-base-select-option--show-checkmark`]:b}],style:i.style,onClick:P,onMouseenter:S,onMousemove:v},a("div",{class:`${e}-base-select-option__content`},T));return i.render?i.render({node:B,option:i,selected:l}):g?g({node:B,option:i,selected:l}):B}}),an=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:l}=Je(Qe);return{labelField:l,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:l,tmNode:{rawNode:u}}=this,f=i?i(u,!1):ye(u[this.labelField],u,!1),b=a("div",{class:`${e}-base-select-group-header`},f);return u.render?u.render({node:b,option:u}):l?l({node:b,option:u,selected:!1}):b}}),yt=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[K("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),K("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),K("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),K("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),K("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),K("disabled",`
 cursor: not-allowed;
 `,[Ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),K("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[hn({enterScale:"0.5"})])])]),xt=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ae.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=ae("InternalSelectMenu","-internal-select-menu",yt,Dn,e,V(e,"clsPrefix")),l=O(null),u=O(null),f=O(null),b=R(()=>e.treeMate.getFlattenedNodes()),g=R(()=>Gn(b.value)),s=O(null);function P(){const{treeMate:t}=e;let d=null;const{value:$}=e;$===null?d=t.getFirstAvailableNode():(e.multiple?d=t.getNode(($||[])[($||[]).length-1]):d=t.getNode($),(!d||d.disabled)&&(d=t.getFirstAvailableNode())),W(d||null)}function S(){const{value:t}=s;t&&!e.treeMate.getNode(t.key)&&(s.value=null)}let v;Te(()=>e.show,t=>{t?v=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?P():S(),vn(E)):S()},{immediate:!0}):v?.()},{immediate:!0}),sn(()=>{v?.()});const w=R(()=>Zn(i.value.self[te("optionHeight",e.size)])),T=R(()=>Ue(i.value.self[te("padding",e.size)])),B=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=R(()=>{const t=b.value;return t&&t.length===0});function _(t){const{onToggle:d}=e;d&&d(t)}function C(t){const{onScroll:d}=e;d&&d(t)}function y(t){var d;(d=f.value)===null||d===void 0||d.sync(),C(t)}function N(){var t;(t=f.value)===null||t===void 0||t.sync()}function q(){const{value:t}=s;return t||null}function Y(t,d){d.disabled||W(d,!1)}function H(t,d){d.disabled||_(d)}function A(t){var d;Be(t,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,t)}function D(t){var d;Be(t,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,t)}function X(t){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,t),!e.focusable&&t.preventDefault()}function de(){const{value:t}=s;t&&W(t.getNext({loop:!0}),!0)}function Q(){const{value:t}=s;t&&W(t.getPrev({loop:!0}),!0)}function W(t,d=!1){s.value=t,d&&E()}function E(){var t,d;const $=s.value;if(!$)return;const ne=g.value($.key);ne!==null&&(e.virtualScroll?(t=u.value)===null||t===void 0||t.scrollTo({index:ne}):(d=f.value)===null||d===void 0||d.scrollTo({index:ne,elSize:w.value}))}function ue(t){var d,$;!((d=l.value)===null||d===void 0)&&d.contains(t.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,t))}function ve(t){var d,$;!((d=l.value)===null||d===void 0)&&d.contains(t.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,t)}nn(Qe,{handleOptionMouseEnter:Y,handleOptionClick:H,valueSetRef:B,showCheckmarkRef:V(e,"showCheckmark"),multipleRef:V(e,"multiple"),valueRef:V(e,"value"),renderLabelRef:V(e,"renderLabel"),renderOptionRef:V(e,"renderOption"),pendingTmNodeRef:s,labelFieldRef:V(e,"labelField"),valueFieldRef:V(e,"valueField")}),nn(Vn,l),Xe(()=>{const{value:t}=f;t&&t.sync()});const ce=R(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:d},self:{height:$,borderRadius:ne,color:xe,groupHeaderTextColor:Ce,actionDividerColor:Fe,optionTextColorPressed:be,optionTextColor:ge,optionTextColorDisabled:ie,optionTextColorActive:j,optionOpacityDisabled:pe,optionCheckColor:le,actionTextColor:Se,optionColorPending:fe,optionColorActive:he,loadingColor:Oe,loadingSize:Re,optionColorActivePending:Me,[te("optionFontSize",t)]:me,[te("optionHeight",t)]:we,[te("optionPadding",t)]:U}}=i.value;return{"--n-height":$,"--n-action-divider-color":Fe,"--n-action-text-color":Se,"--n-bezier":d,"--n-border-radius":ne,"--n-color":xe,"--n-option-font-size":me,"--n-group-header-text-color":Ce,"--n-option-check-color":le,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":Me,"--n-option-height":we,"--n-option-opacity-disabled":pe,"--n-option-text-color":ge,"--n-option-text-color-active":j,"--n-option-text-color-disabled":ie,"--n-option-text-color-pressed":be,"--n-option-padding":U,"--n-option-padding-left":Ue(U,"left"),"--n-option-padding-right":Ue(U,"right"),"--n-loading-color":Oe,"--n-loading-size":Re}}),{inlineThemeDisabled:ee}=e,G=ee?Ne("internal-select-menu",R(()=>e.size[0]),ce,e):void 0,oe={selfRef:l,next:de,prev:Q,getPendingTmNode:q};return bn(l,e.onResize),Object.assign({mergedTheme:i,virtualListRef:u,scrollbarRef:f,itemSize:w,padding:T,flattenedNodes:b,empty:k,virtualListContainer(){const{value:t}=u;return t?.listElRef},virtualListContent(){const{value:t}=u;return t?.itemsElRef},doScroll:C,handleFocusin:ue,handleFocusout:ve,handleKeyUp:A,handleKeyDown:D,handleMouseDown:X,handleVirtualListResize:N,handleVirtualListScroll:y,cssVars:ee?void 0:ce,themeClass:G?.themeClass,onRender:G?.onRender},oe)},render(){const{$slots:e,virtualScroll:i,clsPrefix:l,mergedTheme:u,themeClass:f,onRender:b}=this;return b?.(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${l}-base-select-menu`,f,this.multiple&&`${l}-base-select-menu--multiple`],style:[{width:qn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?a("div",{class:`${l}-base-select-menu__loading`},a(Kn,{clsPrefix:l,strokeWidth:20})):this.empty?a("div",{class:`${l}-base-select-menu__empty`,"data-empty":!0},Un(e.empty,()=>[a(pt,{theme:u.peers.Empty,themeOverrides:u.peerOverrides.Empty})])):a(Hn,{ref:"scrollbarRef",theme:u.peers.Scrollbar,themeOverrides:u.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?a(Wn,{ref:"virtualListRef",class:`${l}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?a(an,{key:g.key,clsPrefix:l,tmNode:g}):g.ignored?null:a(rn,{clsPrefix:l,key:g.key,tmNode:g})}):a("div",{class:`${l}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?a(an,{key:g.key,clsPrefix:l,tmNode:g}):a(rn,{clsPrefix:l,key:g.key,tmNode:g})))}),jn(e.action,g=>g&&[a("div",{class:`${l}-base-select-menu__action`,"data-action":!0,key:"action"},g),a(vt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ct=Z([x("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),x("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[x("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),Ze("disabled",[Z("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),K("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),K("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),K("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>K(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),Ze("disabled",[Z("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),K("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),K("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ft=se({name:"InternalSelection",props:Object.assign(Object.assign({},ae.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const i=O(null),l=O(null),u=O(null),f=O(null),b=O(null),g=O(null),s=O(null),P=O(null),S=O(null),v=O(null),w=O(!1),T=O(!1),B=O(!1),k=ae("InternalSelection","-internal-selection",Ct,Yn,e,V(e,"clsPrefix")),_=R(()=>e.clearable&&!e.disabled&&(B.value||e.active)),C=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ye(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=R(()=>{const o=e.selectedOption;if(!!o)return o[e.labelField]}),N=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function q(){var o;const{value:c}=i;if(c){const{value:I}=l;I&&(I.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=S.value)===null||o===void 0||o.sync()))}}function Y(){const{value:o}=v;o&&(o.style.display="none")}function H(){const{value:o}=v;o&&(o.style.display="inline-block")}Te(V(e,"active"),o=>{o||Y()}),Te(V(e,"pattern"),()=>{e.multiple&&vn(q)});function A(o){const{onFocus:c}=e;c&&c(o)}function D(o){const{onBlur:c}=e;c&&c(o)}function X(o){const{onDeleteOption:c}=e;c&&c(o)}function de(o){const{onClear:c}=e;c&&c(o)}function Q(o){const{onPatternInput:c}=e;c&&c(o)}function W(o){var c;(!o.relatedTarget||!(!((c=u.value)===null||c===void 0)&&c.contains(o.relatedTarget)))&&A(o)}function E(o){var c;!((c=u.value)===null||c===void 0)&&c.contains(o.relatedTarget)||D(o)}function ue(o){de(o)}function ve(){B.value=!0}function ce(){B.value=!1}function ee(o){!e.active||!e.filterable||o.target!==l.value&&o.preventDefault()}function G(o){X(o)}function oe(o){if(o.key==="Backspace"&&!t.value&&!e.pattern.length){const{selectedOptions:c}=e;c?.length&&G(c[c.length-1])}}const t=O(!1);let d=null;function $(o){const{value:c}=i;if(c){const I=o.target.value;c.textContent=I,q()}t.value?d=o:Q(o)}function ne(){t.value=!0}function xe(){t.value=!1,Q(d),d=null}function Ce(o){var c;T.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,o)}function Fe(o){var c;T.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,o)}function be(){var o,c;if(e.filterable)T.value=!1,(o=g.value)===null||o===void 0||o.blur(),(c=l.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:I}=f;I?.blur()}else{const{value:I}=b;I?.blur()}}function ge(){var o,c,I;e.filterable?(T.value=!1,(o=g.value)===null||o===void 0||o.focus()):e.multiple?(c=f.value)===null||c===void 0||c.focus():(I=b.value)===null||I===void 0||I.focus()}function ie(){const{value:o}=l;o&&(H(),o.focus())}function j(){const{value:o}=l;o&&o.blur()}function pe(o){const{value:c}=s;c&&c.setTextContent(`+${o}`)}function le(){const{value:o}=P;return o}function Se(){return l.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function Oe(){e.disabled||e.active||(he(),fe=window.setTimeout(()=>{w.value=!0},100))}function Re(){he()}function Me(o){o||(he(),w.value=!1)}Xe(()=>{Xn(()=>{const o=g.value;!o||(o.tabIndex=e.disabled||T.value?-1:0)})}),bn(u,e.onResize);const{inlineThemeDisabled:me}=e,we=R(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:c},self:{borderRadius:I,color:ze,placeholderColor:Ee,textColor:Ae,paddingSingle:Le,paddingMultiple:De,caretColor:Pe,colorDisabled:ke,textColorDisabled:Ve,placeholderColorDisabled:je,colorActive:Ke,boxShadowFocus:_e,boxShadowActive:re,boxShadowHover:n,border:r,borderFocus:h,borderHover:F,borderActive:m,arrowColor:p,arrowColorDisabled:M,loadingColor:L,colorActiveWarning:Ie,boxShadowFocusWarning:He,boxShadowActiveWarning:pn,boxShadowHoverWarning:mn,borderWarning:wn,borderFocusWarning:yn,borderHoverWarning:xn,borderActiveWarning:Cn,colorActiveError:Fn,boxShadowFocusError:Sn,boxShadowActiveError:On,boxShadowHoverError:Rn,borderError:Mn,borderFocusError:Tn,borderHoverError:zn,borderActiveError:Pn,clearColor:kn,clearColorHover:_n,clearColorPressed:In,clearSize:Bn,arrowSize:$n,[te("height",o)]:Nn,[te("fontSize",o)]:En}}=k.value;return{"--n-bezier":c,"--n-border":r,"--n-border-active":m,"--n-border-focus":h,"--n-border-hover":F,"--n-border-radius":I,"--n-box-shadow-active":re,"--n-box-shadow-focus":_e,"--n-box-shadow-hover":n,"--n-caret-color":Pe,"--n-color":ze,"--n-color-active":Ke,"--n-color-disabled":ke,"--n-font-size":En,"--n-height":Nn,"--n-padding-single":Le,"--n-padding-multiple":De,"--n-placeholder-color":Ee,"--n-placeholder-color-disabled":je,"--n-text-color":Ae,"--n-text-color-disabled":Ve,"--n-arrow-color":p,"--n-arrow-color-disabled":M,"--n-loading-color":L,"--n-color-active-warning":Ie,"--n-box-shadow-focus-warning":He,"--n-box-shadow-active-warning":pn,"--n-box-shadow-hover-warning":mn,"--n-border-warning":wn,"--n-border-focus-warning":yn,"--n-border-hover-warning":xn,"--n-border-active-warning":Cn,"--n-color-active-error":Fn,"--n-box-shadow-focus-error":Sn,"--n-box-shadow-active-error":On,"--n-box-shadow-hover-error":Rn,"--n-border-error":Mn,"--n-border-focus-error":Tn,"--n-border-hover-error":zn,"--n-border-active-error":Pn,"--n-clear-size":Bn,"--n-clear-color":kn,"--n-clear-color-hover":_n,"--n-clear-color-pressed":In,"--n-arrow-size":$n}}),U=me?Ne("internal-selection",R(()=>e.size[0]),we,e):void 0;return{mergedTheme:k,mergedClearable:_,patternInputFocused:T,filterablePlaceholder:C,label:y,selected:N,showTagsPanel:w,isCompositing:t,counterRef:s,counterWrapperRef:P,patternInputMirrorRef:i,patternInputRef:l,selfRef:u,multipleElRef:f,singleElRef:b,patternInputWrapperRef:g,overflowRef:S,inputTagElRef:v,handleMouseDown:ee,handleFocusin:W,handleClear:ue,handleMouseEnter:ve,handleMouseLeave:ce,handleDeleteOption:G,handlePatternKeyDown:oe,handlePatternInputInput:$,handlePatternInputBlur:Fe,handlePatternInputFocus:Ce,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Re,handleFocusout:E,handleCompositionEnd:xe,handleCompositionStart:ne,onPopoverUpdateShow:Me,focus:ge,focusInput:ie,blur:be,blurInput:j,updateCounter:pe,getCounter:le,getTail:Se,renderLabel:e.renderLabel,cssVars:me?void 0:we,themeClass:U?.themeClass,onRender:U?.onRender}},render(){const{status:e,multiple:i,size:l,disabled:u,filterable:f,maxTagCount:b,bordered:g,clsPrefix:s,onRender:P,renderTag:S,renderLabel:v}=this;P?.();const w=b==="responsive",T=typeof b=="number",B=w||T,k=a(Jn,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var C,y;return(y=(C=this.$slots).arrow)===null||y===void 0?void 0:y.call(C)}});let _;if(i){const{labelField:C}=this,y=E=>a("div",{class:`${s}-base-selection-tag-wrapper`,key:E.value},S?S({option:E,handleClose:()=>this.handleDeleteOption(E)}):a(qe,{size:l,closable:!E.disabled,disabled:u,onClose:()=>this.handleDeleteOption(E),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>v?v(E,!0):ye(E[C],E,!0)})),N=(T?this.selectedOptions.slice(0,b):this.selectedOptions).map(y),q=f?a("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:u,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,Y=w?()=>a("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(qe,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:u})):void 0;let H;if(T){const E=this.selectedOptions.length-b;E>0&&(H=a("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},a(qe,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:u},{default:()=>`+${E}`})))}const A=w?f?a(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>N,counter:Y,tail:()=>q}):a(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>N,counter:Y}):T?N.concat(H):N,D=B?()=>a("div",{class:`${s}-base-selection-popover`},w?N:this.selectedOptions.map(y)):void 0,X=B?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?a("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},this.placeholder):null,W=f?a("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},A,w?null:q,k):a("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:u?void 0:0},A,k);_=a(et,null,B?a(Qn,Object.assign({},X,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>W,default:D}):W,Q)}else if(f){const C=this.pattern||this.isCompositing,y=this.active?!C:!this.selected,N=this.active?!1:this.selected;_=a("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:u,disabled:u,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),N?a("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},a("div",{class:`${s}-base-selection-overlay__wrapper`},S?S({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):null,y?a("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,k)}else _=a("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${s}-base-selection-input`,title:ft(this.label),key:"input"},a("div",{class:`${s}-base-selection-input__content`},S?S({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):a("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},this.placeholder),k);return a("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,g?a("div",{class:`${s}-base-selection__border`}):null,g?a("div",{class:`${s}-base-selection__state-border`}):null)}});function $e(e){return e.type==="group"}function gn(e){return e.type==="ignored"}function Ge(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function St(e,i){return{getIsGroup:$e,getIgnored:gn,getKey(u){return $e(u)?u.name||u.key||"key-required":u[e]},getChildren(u){return u[i]}}}function Ot(e,i,l,u){if(!i)return e;function f(b){if(!Array.isArray(b))return[];const g=[];for(const s of b)if($e(s)){const P=f(s[u]);P.length&&g.push(Object.assign({},s,{[u]:P}))}else{if(gn(s))continue;i(l,s)&&g.push(s)}return g}return f(e)}function Rt(e,i,l){const u=new Map;return e.forEach(f=>{$e(f)?f[l].forEach(b=>{u.set(b[i],b)}):u.set(f[i],f)}),u}var Mt=Z([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[hn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);const Tt=Object.assign(Object.assign({},ae.props),{to:Ye.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var kt=se({name:"Select",props:Tt,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:l,namespaceRef:u,inlineThemeDisabled:f}=dn(e),b=ae("Select","-select",Mt,dt,e,i),g=O(e.defaultValue),s=V(e,"value"),P=on(s,g),S=O(!1),v=O(""),w=R(()=>{const{valueField:n,childrenField:r}=e,h=St(n,r);return ut(E.value,h)}),T=R(()=>Rt(Q.value,e.valueField,e.childrenField)),B=O(!1),k=on(V(e,"show"),B),_=O(null),C=O(null),y=O(null),{localeRef:N}=un("Select"),q=R(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:N.value.placeholder}),Y=nt(e,["items","options"]),H=[],A=O([]),D=O([]),X=O(new Map),de=R(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:r,valueField:h}=e;return F=>({[r]:String(F),[h]:F})}return n===!1?!1:r=>Object.assign(n(r),{value:r})}),Q=R(()=>D.value.concat(A.value).concat(Y.value)),W=R(()=>{const{labelField:n,valueField:r}=e;return(h,F)=>{if(!F)return!1;const m=F[n];if(typeof m=="string")return Ge(h,m);const p=F[r];return typeof p=="string"?Ge(h,p):typeof p=="number"?Ge(h,String(p)):!1}}),E=R(()=>{if(e.remote)return Y.value;{const{value:n}=Q,{value:r}=v;return!r.length||!e.filterable?n:Ot(n,W.value,r,e.childrenField)}});function ue(n){const r=e.remote,{value:h}=X,{value:F}=T,{value:m}=de,p=[];return n.forEach(M=>{if(F.has(M))p.push(F.get(M));else if(r&&h.has(M))p.push(h.get(M));else if(m){const L=m(M);L&&p.push(L)}}),p}const ve=R(()=>{if(e.multiple){const{value:n}=P;return Array.isArray(n)?ue(n):[]}return null}),ce=R(()=>{const{value:n}=P;return!e.multiple&&!Array.isArray(n)?n===null?null:ue([n])[0]||null:null}),ee=tt(e),{mergedSizeRef:G,mergedDisabledRef:oe,mergedStatusRef:t}=ee;function d(n,r){const{onChange:h,"onUpdate:value":F,onUpdateValue:m}=e,{nTriggerFormChange:p,nTriggerFormInput:M}=ee;h&&J(h,n,r),m&&J(m,n,r),F&&J(F,n,r),g.value=n,p(),M()}function $(n){const{onBlur:r}=e,{nTriggerFormBlur:h}=ee;r&&J(r,n),h()}function ne(){const{onClear:n}=e;n&&J(n)}function xe(n){const{onFocus:r}=e,{nTriggerFormFocus:h}=ee;r&&J(r,n),h()}function Ce(n){const{onSearch:r}=e;r&&J(r,n)}function Fe(n){const{onScroll:r}=e;r&&J(r,n)}function be(){var n;const{remote:r,multiple:h}=e;if(r){const{value:F}=X;if(h){const{valueField:m}=e;(n=ve.value)===null||n===void 0||n.forEach(p=>{F.set(p[m],p)})}else{const m=ce.value;m&&F.set(m[e.valueField],m)}}}function ge(n){const{onUpdateShow:r,"onUpdate:show":h}=e;r&&J(r,n),h&&J(h,n),B.value=n}function ie(){oe.value||(ge(!0),B.value=!0,e.filterable&&Ve())}function j(){ge(!1)}function pe(){v.value="",D.value=H}const le=O(!1);function Se(){e.filterable&&(le.value=!0)}function fe(){e.filterable&&(le.value=!1,k.value||pe())}function he(){oe.value||(k.value?e.filterable||j():ie())}function Oe(n){var r,h;!((h=(r=y.value)===null||r===void 0?void 0:r.selfRef)===null||h===void 0)&&h.contains(n.relatedTarget)||(S.value=!1,$(n),j())}function Re(n){xe(n),S.value=!0}function Me(n){S.value=!0}function me(n){var r;!((r=_.value)===null||r===void 0)&&r.$el.contains(n.relatedTarget)||(S.value=!1,$(n),j())}function we(){var n;(n=_.value)===null||n===void 0||n.focus(),j()}function U(n){var r;k.value&&(!((r=_.value)===null||r===void 0)&&r.$el.contains(n.target)||j())}function o(n){if(!Array.isArray(n))return[];if(de.value)return Array.from(n);{const{remote:r}=e,{value:h}=T;if(r){const{value:F}=X;return n.filter(m=>h.has(m)||F.has(m))}else return n.filter(F=>h.has(F))}}function c(n){I(n.rawNode)}function I(n){if(oe.value)return;const{tag:r,remote:h,clearFilterAfterSelect:F,valueField:m}=e;if(r&&!h){const{value:p}=D,M=p[0]||null;M&&(A.value.push(M),D.value=H)}if(h&&X.value.set(n[m],n),e.multiple){const p=o(P.value),M=p.findIndex(L=>L===n[m]);if(~M){if(p.splice(M,1),r&&!h){const L=ze(n[m]);~L&&(A.value.splice(L,1),F&&(v.value=""))}}else p.push(n[m]),F&&(v.value="");d(p,ue(p))}else{if(r&&!h){const p=ze(n[m]);~p?A.value=[A.value[p]]:A.value=H}ke(),j(),d(n[m],n)}}function ze(n){return A.value.findIndex(h=>h[e.valueField]===n)}function Ee(n){k.value||ie();const{value:r}=n.target;v.value=r;const{tag:h,remote:F}=e;if(Ce(r),h&&!F){if(!r){D.value=H;return}const{onCreate:m}=e,p=m?m(r):{[e.labelField]:r,[e.valueField]:r},{valueField:M}=e;Y.value.some(L=>L[M]===p[M])||A.value.some(L=>L[M]===p[M])?D.value=H:D.value=[p]}}function Ae(n){n.stopPropagation();const{multiple:r}=e;!r&&e.filterable&&j(),ne(),r?d([],[]):d(null,null)}function Le(n){!Be(n,"action")&&!Be(n,"empty")&&n.preventDefault()}function De(n){Fe(n)}function Pe(n){var r,h,F,m,p;switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((r=_.value)===null||r===void 0)&&r.isCompositing)){if(k.value){const M=(h=y.value)===null||h===void 0?void 0:h.getPendingTmNode();M?c(M):e.filterable||(j(),ke())}else if(ie(),e.tag&&le.value){const M=D.value[0];if(M){const L=M[e.valueField],{value:Ie}=P;e.multiple&&Array.isArray(Ie)&&Ie.some(He=>He===L)||I(M)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;k.value&&((F=y.value)===null||F===void 0||F.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;k.value?(m=y.value)===null||m===void 0||m.next():ie();break;case"Escape":j(),(p=_.value)===null||p===void 0||p.focus();break}}function ke(){var n;(n=_.value)===null||n===void 0||n.focus()}function Ve(){var n;(n=_.value)===null||n===void 0||n.focusInput()}function je(){var n;!k.value||(n=C.value)===null||n===void 0||n.syncPosition()}be(),Te(V(e,"options"),be);const Ke={focus:()=>{var n;(n=_.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=_.value)===null||n===void 0||n.blur()}},_e=R(()=>{const{self:{menuBoxShadow:n}}=b.value;return{"--n-menu-box-shadow":n}}),re=f?Ne("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},Ke),{mergedStatus:t,mergedClsPrefix:i,mergedBordered:l,namespace:u,treeMate:w,isMounted:ot(),triggerRef:_,menuRef:y,pattern:v,uncontrolledShow:B,mergedShow:k,adjustedTo:Ye(e),uncontrolledValue:g,mergedValue:P,followerRef:C,localizedPlaceholder:q,selectedOption:ce,selectedOptions:ve,mergedSize:G,mergedDisabled:oe,focused:S,activeWithoutMenuOpen:le,inlineThemeDisabled:f,onTriggerInputFocus:Se,onTriggerInputBlur:fe,handleTriggerOrMenuResize:je,handleMenuFocus:Me,handleMenuBlur:me,handleMenuTabOut:we,handleTriggerClick:he,handleToggle:c,handleDeleteOption:I,handlePatternInput:Ee,handleClear:Ae,handleTriggerBlur:Oe,handleTriggerFocus:Re,handleKeydown:Pe,handleMenuAfterLeave:pe,handleMenuClickOutside:U,handleMenuScroll:De,handleMenuKeydown:Pe,handleMenuMousedown:Le,mergedTheme:b,cssVars:f?void 0:_e,themeClass:re?.themeClass,onRender:re?.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(it,null,{default:()=>[a(lt,null,{default:()=>a(Ft,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,i;return[(i=(e=this.$slots).arrow)===null||i===void 0?void 0:i.call(e)]}})}),a(rt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ye.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(fn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,i,l;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),at(a(xt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(i=this.menuProps)===null||i===void 0?void 0:i.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(l=this.menuProps)===null||l===void 0?void 0:l.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var u,f;return[(f=(u=this.$slots).empty)===null||f===void 0?void 0:f.call(u)]},action:()=>{var u,f;return[(f=(u=this.$slots).action)===null||f===void 0?void 0:f.call(u)]}}),this.displayDirective==="show"?[[st,this.mergedShow],[ln,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ln,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as F,kt as N,pt as a,xt as b,St as c,ft as g};
