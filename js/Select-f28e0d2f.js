import{m as Xe,aX as en,aY as un,f as ae,Z as i,a2 as x,a3 as P,a4 as Z,T as cn,a5 as re,S as fn,U as Je,aZ as Dn,n as R,am as ne,V as Ne,$ as hn,a_ as Vn,a$ as Qe,ai as We,av as vn,aw as ye,ae as K,ad as Ze,aC as bn,X as V,b0 as jn,y as O,b1 as Kn,w as Me,ap as Hn,b2 as Ue,a6 as nn,b3 as Wn,_ as Un,aK as qn,ar as Gn,aN as Zn,Y as Yn,aq as Xn,ax as Be,b4 as gn,b5 as Jn,aL as Qn,b6 as et,b7 as tn,L as on,F as ln,ah as rn,aD as nt,b8 as tt,ag as ot,b9 as it,ba as Ye,as as lt,at as rt,au as at,bb as st,bc as dt,bd as an,be as ut,ab as J}from"./index-cad930c7.js";import{F as ct,N as qe}from"./Tag-61996d1e.js";function ft(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function pn(e,l){l&&(Xe(()=>{const{value:r}=e;r&&en.registerHandler(r,l)}),un(()=>{const{value:r}=e;r&&en.unregisterHandler(r)}))}var ht=ae({name:"Empty",render(){return i("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),i("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vt=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),bt=x("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[P("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[P("description",`
 margin-top: 8px;
 `)])]),P("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const gt=Object.assign(Object.assign({},re.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var pt=ae({name:"Empty",props:gt,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:r}=cn(e),u=re("Empty","-empty",bt,Vn,e,l),{localeRef:f}=fn("Empty"),b=Je(Dn,null),g=R(()=>{var v,w,M;return(v=e.description)!==null&&v!==void 0?v:(M=(w=b?.mergedComponentPropsRef.value)===null||w===void 0?void 0:w.Empty)===null||M===void 0?void 0:M.description}),s=R(()=>{var v,w;return((w=(v=b?.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||w===void 0?void 0:w.renderIcon)||(()=>i(ht,null))}),k=R(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:w},self:{[ne("iconSize",v)]:M,[ne("fontSize",v)]:I,textColor:B,iconColor:_,extraTextColor:C}}=u.value;return{"--n-icon-size":M,"--n-font-size":I,"--n-bezier":w,"--n-text-color":B,"--n-icon-color":_,"--n-extra-text-color":C}}),S=r?Ne("empty",R(()=>{let v="";const{size:w}=e;return v+=w[0],v}),k,e):void 0;return{mergedClsPrefix:l,mergedRenderIcon:s,localizedDescription:R(()=>g.value||f.value.description),cssVars:r?void 0:k,themeClass:S?.themeClass,onRender:S?.onRender}},render(){const{$slots:e,mergedClsPrefix:l,onRender:r}=this;return r?.(),i("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i("div",{class:`${l}-empty__icon`},e.icon?e.icon():i(hn,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?i("div",{class:`${l}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i("div",{class:`${l}-empty__extra`},e.extra()):null)}});const mt=i(ct);function wt(e,l){return i(vn,{name:"fade-in-scale-up-transition"},{default:()=>e?i(hn,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>mt}):null})}var sn=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:r,multipleRef:u,valueSetRef:f,renderLabelRef:b,renderOptionRef:g,labelFieldRef:s,valueFieldRef:k,showCheckmarkRef:S,handleOptionClick:v,handleOptionMouseEnter:w}=Je(Qe),M=We(()=>{const{value:C}=r;return C?e.tmNode.key===C.key:!1});function I(C){const{tmNode:y}=e;y.disabled||v(C,y)}function B(C){const{tmNode:y}=e;y.disabled||w(C,y)}function _(C){const{tmNode:y}=e,{value:L}=M;y.disabled||L||w(C,y)}return{multiple:u,isGrouped:We(()=>{const{tmNode:C}=e,{parent:y}=C;return y&&y.rawNode.type==="group"}),showCheckmark:S,isPending:M,isSelected:We(()=>{const{value:C}=l,{value:y}=u;if(C===null)return!1;const L=e.tmNode.rawNode[k.value];if(y){const{value:U}=f;return U.has(L)}else return C===L}),labelField:s,renderLabel:b,renderOption:g,handleMouseMove:_,handleMouseEnter:B,handleClick:I}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:r,isPending:u,isGrouped:f,showCheckmark:b,renderOption:g,renderLabel:s,handleClick:k,handleMouseEnter:S,handleMouseMove:v}=this,w=wt(r,e),M=s?[s(l,r),b&&w]:[ye(l[this.labelField],l,r),b&&w],I=i("div",{class:[`${e}-base-select-option`,l.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:u,[`${e}-base-select-option--show-checkmark`]:b}],style:l.style,onClick:k,onMouseenter:S,onMousemove:v},i("div",{class:`${e}-base-select-option__content`},M));return l.render?l.render({node:I,option:l,selected:r}):g?g({node:I,option:l,selected:r}):I}}),dn=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:r}=Je(Qe);return{labelField:r,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:r,tmNode:{rawNode:u}}=this,f=l?l(u,!1):ye(u[this.labelField],u,!1),b=i("div",{class:`${e}-base-select-group-header`},f);return u.render?u.render({node:b,option:u}):r?r({node:b,option:u,selected:!1}):b}}),yt=x("base-select-menu",`
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
 `,[P("content",`
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
 `),P("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),P("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),P("action",`
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
 `)]),P("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[bn({enterScale:"0.5"})])])]),xt=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const l=re("InternalSelectMenu","-internal-select-menu",yt,jn,e,V(e,"clsPrefix")),r=O(null),u=O(null),f=O(null),b=R(()=>e.treeMate.getFlattenedNodes()),g=R(()=>Kn(b.value)),s=O(null);function k(){const{treeMate:t}=e;let d=null;const{value:N}=e;N===null?d=t.getFirstAvailableNode():(e.multiple?d=t.getNode((N||[])[(N||[]).length-1]):d=t.getNode(N),(!d||d.disabled)&&(d=t.getFirstAvailableNode())),z(d||null)}function S(){const{value:t}=s;t&&!e.treeMate.getNode(t.key)&&(s.value=null)}let v;Me(()=>e.show,t=>{t?v=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?k():S(),gn(he)):S()},{immediate:!0}):v?.()},{immediate:!0}),un(()=>{v?.()});const w=R(()=>Hn(l.value.self[ne("optionHeight",e.size)])),M=R(()=>Ue(l.value.self[ne("padding",e.size)])),I=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),B=R(()=>{const t=b.value;return t&&t.length===0});function _(t){const{onToggle:d}=e;d&&d(t)}function C(t){const{onScroll:d}=e;d&&d(t)}function y(t){var d;(d=f.value)===null||d===void 0||d.sync(),C(t)}function L(){var t;(t=f.value)===null||t===void 0||t.sync()}function U(){const{value:t}=s;return t||null}function Y(t,d){d.disabled||z(d,!1)}function H(t,d){d.disabled||_(d)}function A(t){var d;Be(t,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,t)}function E(t){var d;Be(t,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,t)}function q(t){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,t),!e.focusable&&t.preventDefault()}function se(){const{value:t}=s;t&&z(t.getNext({loop:!0}),!0)}function X(){const{value:t}=s;t&&z(t.getPrev({loop:!0}),!0)}function z(t,d=!1){s.value=t,d&&he()}function he(){var t,d;const N=s.value;if(!N)return;const ee=g.value(N.key);ee!==null&&(e.virtualScroll?(t=u.value)===null||t===void 0||t.scrollTo({index:ee}):(d=f.value)===null||d===void 0||d.scrollTo({index:ee,elSize:w.value}))}function de(t){var d,N;!((d=r.value)===null||d===void 0)&&d.contains(t.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,t))}function ve(t){var d,N;!((d=r.value)===null||d===void 0)&&d.contains(t.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,t)}nn(Qe,{handleOptionMouseEnter:Y,handleOptionClick:H,valueSetRef:I,showCheckmarkRef:V(e,"showCheckmark"),multipleRef:V(e,"multiple"),valueRef:V(e,"value"),renderLabelRef:V(e,"renderLabel"),renderOptionRef:V(e,"renderOption"),pendingTmNodeRef:s,labelFieldRef:V(e,"labelField"),valueFieldRef:V(e,"valueField")}),nn(Wn,r),Xe(()=>{const{value:t}=f;t&&t.sync()});const ue=R(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:d},self:{height:N,borderRadius:ee,color:xe,groupHeaderTextColor:Ce,actionDividerColor:Fe,optionTextColorPressed:be,optionTextColor:ge,optionTextColorDisabled:oe,optionTextColorActive:j,optionOpacityDisabled:pe,optionCheckColor:ie,actionTextColor:Se,optionColorPending:ce,optionColorActive:fe,loadingColor:Oe,loadingSize:Re,optionColorActivePending:Te,[ne("optionFontSize",t)]:me,[ne("optionHeight",t)]:we,[ne("optionPadding",t)]:W}}=l.value;return{"--n-height":N,"--n-action-divider-color":Fe,"--n-action-text-color":Se,"--n-bezier":d,"--n-border-radius":ee,"--n-color":xe,"--n-option-font-size":me,"--n-group-header-text-color":Ce,"--n-option-check-color":ie,"--n-option-color-pending":ce,"--n-option-color-active":fe,"--n-option-color-active-pending":Te,"--n-option-height":we,"--n-option-opacity-disabled":pe,"--n-option-text-color":ge,"--n-option-text-color-active":j,"--n-option-text-color-disabled":oe,"--n-option-text-color-pressed":be,"--n-option-padding":W,"--n-option-padding-left":Ue(W,"left"),"--n-option-padding-right":Ue(W,"right"),"--n-loading-color":Oe,"--n-loading-size":Re}}),{inlineThemeDisabled:Q}=e,G=Q?Ne("internal-select-menu",R(()=>e.size[0]),ue,e):void 0,te={selfRef:r,next:se,prev:X,getPendingTmNode:U};return pn(r,e.onResize),Object.assign({mergedTheme:l,virtualListRef:u,scrollbarRef:f,itemSize:w,padding:M,flattenedNodes:b,empty:B,virtualListContainer(){const{value:t}=u;return t?.listElRef},virtualListContent(){const{value:t}=u;return t?.itemsElRef},doScroll:C,handleFocusin:de,handleFocusout:ve,handleKeyUp:A,handleKeyDown:E,handleMouseDown:q,handleVirtualListResize:L,handleVirtualListScroll:y,cssVars:Q?void 0:ue,themeClass:G?.themeClass,onRender:G?.onRender},te)},render(){const{$slots:e,virtualScroll:l,clsPrefix:r,mergedTheme:u,themeClass:f,onRender:b}=this;return b?.(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,f,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:Xn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?i("div",{class:`${r}-base-select-menu__loading`},i(qn,{clsPrefix:r,strokeWidth:20})):this.empty?i("div",{class:`${r}-base-select-menu__empty`,"data-empty":!0},Yn(e.empty,()=>[i(pt,{theme:u.peers.Empty,themeOverrides:u.peerOverrides.Empty})])):i(Gn,{ref:"scrollbarRef",theme:u.peers.Scrollbar,themeOverrides:u.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?i(Zn,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?i(dn,{key:g.key,clsPrefix:r,tmNode:g}):g.ignored?null:i(sn,{clsPrefix:r,key:g.key,tmNode:g})}):i("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?i(dn,{key:g.key,clsPrefix:r,tmNode:g}):i(sn,{clsPrefix:r,key:g.key,tmNode:g})))}),Un(e.action,g=>g&&[i("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},g),i(vt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ct=Z([x("base-selection",`
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
 `),x("base-selection-tags","min-height: var(--n-height);"),P("border, state-border",`
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
 `),P("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[P("arrow",`
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
 `,[P("wrapper",`
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
 `,[P("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),P("render-label",`
 color: var(--n-text-color);
 `)]),Ze("disabled",[Z("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),K("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),K("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),K("disabled","cursor: not-allowed;",[P("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),P("render-label",`
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
 `,[P("input",`
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
 `),P("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>K(`${e}-status`,[P("state-border",`border: var(--n-border-${e});`),Ze("disabled",[Z("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),K("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),K("focus",[P("state-border",`
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
 `,[P("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ft=ae({name:"InternalSelection",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const l=O(null),r=O(null),u=O(null),f=O(null),b=O(null),g=O(null),s=O(null),k=O(null),S=O(null),v=O(null),w=O(!1),M=O(!1),I=O(!1),B=re("InternalSelection","-internal-selection",Ct,Jn,e,V(e,"clsPrefix")),_=R(()=>e.clearable&&!e.disabled&&(I.value||e.active)),C=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ye(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=R(()=>{const o=e.selectedOption;if(!!o)return o[e.labelField]}),L=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var o;const{value:c}=l;if(c){const{value:$}=r;$&&($.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=S.value)===null||o===void 0||o.sync()))}}function Y(){const{value:o}=v;o&&(o.style.display="none")}function H(){const{value:o}=v;o&&(o.style.display="inline-block")}Me(V(e,"active"),o=>{o||Y()}),Me(V(e,"pattern"),()=>{e.multiple&&gn(U)});function A(o){const{onFocus:c}=e;c&&c(o)}function E(o){const{onBlur:c}=e;c&&c(o)}function q(o){const{onDeleteOption:c}=e;c&&c(o)}function se(o){const{onClear:c}=e;c&&c(o)}function X(o){const{onPatternInput:c}=e;c&&c(o)}function z(o){var c;(!o.relatedTarget||!(!((c=u.value)===null||c===void 0)&&c.contains(o.relatedTarget)))&&A(o)}function he(o){var c;!((c=u.value)===null||c===void 0)&&c.contains(o.relatedTarget)||E(o)}function de(o){se(o)}function ve(){I.value=!0}function ue(){I.value=!1}function Q(o){!e.active||!e.filterable||o.target!==r.value&&o.preventDefault()}function G(o){q(o)}function te(o){if(o.key==="Backspace"&&!t.value&&!e.pattern.length){const{selectedOptions:c}=e;c?.length&&G(c[c.length-1])}}const t=O(!1);let d=null;function N(o){const{value:c}=l;if(c){const $=o.target.value;c.textContent=$,U()}t.value?d=o:X(o)}function ee(){t.value=!0}function xe(){t.value=!1,X(d),d=null}function Ce(o){var c;M.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,o)}function Fe(o){var c;M.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,o)}function be(){var o,c;if(e.filterable)M.value=!1,(o=g.value)===null||o===void 0||o.blur(),(c=r.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:$}=f;$?.blur()}else{const{value:$}=b;$?.blur()}}function ge(){var o,c,$;e.filterable?(M.value=!1,(o=g.value)===null||o===void 0||o.focus()):e.multiple?(c=f.value)===null||c===void 0||c.focus():($=b.value)===null||$===void 0||$.focus()}function oe(){const{value:o}=r;o&&(H(),o.focus())}function j(){const{value:o}=r;o&&o.blur()}function pe(o){const{value:c}=s;c&&c.setTextContent(`+${o}`)}function ie(){const{value:o}=k;return o}function Se(){return r.value}let ce=null;function fe(){ce!==null&&window.clearTimeout(ce)}function Oe(){e.disabled||e.active||(fe(),ce=window.setTimeout(()=>{w.value=!0},100))}function Re(){fe()}function Te(o){o||(fe(),w.value=!1)}Xe(()=>{Qn(()=>{const o=g.value;!o||(o.tabIndex=e.disabled||M.value?-1:0)})}),pn(u,e.onResize);const{inlineThemeDisabled:me}=e,we=R(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:c},self:{borderRadius:$,color:ze,placeholderColor:Le,textColor:Ae,paddingSingle:Ee,paddingMultiple:De,caretColor:Pe,colorDisabled:ke,textColorDisabled:Ve,placeholderColorDisabled:je,colorActive:Ke,boxShadowFocus:_e,boxShadowActive:le,boxShadowHover:n,border:a,borderFocus:h,borderHover:F,borderActive:m,arrowColor:p,arrowColorDisabled:T,loadingColor:D,colorActiveWarning:Ie,boxShadowFocusWarning:He,boxShadowActiveWarning:wn,boxShadowHoverWarning:yn,borderWarning:xn,borderFocusWarning:Cn,borderHoverWarning:Fn,borderActiveWarning:Sn,colorActiveError:On,boxShadowFocusError:Rn,boxShadowActiveError:Tn,boxShadowHoverError:Mn,borderError:zn,borderFocusError:Pn,borderHoverError:kn,borderActiveError:_n,clearColor:In,clearColorHover:Bn,clearColorPressed:$n,clearSize:Nn,arrowSize:Ln,[ne("height",o)]:An,[ne("fontSize",o)]:En}}=B.value;return{"--n-bezier":c,"--n-border":a,"--n-border-active":m,"--n-border-focus":h,"--n-border-hover":F,"--n-border-radius":$,"--n-box-shadow-active":le,"--n-box-shadow-focus":_e,"--n-box-shadow-hover":n,"--n-caret-color":Pe,"--n-color":ze,"--n-color-active":Ke,"--n-color-disabled":ke,"--n-font-size":En,"--n-height":An,"--n-padding-single":Ee,"--n-padding-multiple":De,"--n-placeholder-color":Le,"--n-placeholder-color-disabled":je,"--n-text-color":Ae,"--n-text-color-disabled":Ve,"--n-arrow-color":p,"--n-arrow-color-disabled":T,"--n-loading-color":D,"--n-color-active-warning":Ie,"--n-box-shadow-focus-warning":He,"--n-box-shadow-active-warning":wn,"--n-box-shadow-hover-warning":yn,"--n-border-warning":xn,"--n-border-focus-warning":Cn,"--n-border-hover-warning":Fn,"--n-border-active-warning":Sn,"--n-color-active-error":On,"--n-box-shadow-focus-error":Rn,"--n-box-shadow-active-error":Tn,"--n-box-shadow-hover-error":Mn,"--n-border-error":zn,"--n-border-focus-error":Pn,"--n-border-hover-error":kn,"--n-border-active-error":_n,"--n-clear-size":Nn,"--n-clear-color":In,"--n-clear-color-hover":Bn,"--n-clear-color-pressed":$n,"--n-arrow-size":Ln}}),W=me?Ne("internal-selection",R(()=>e.size[0]),we,e):void 0;return{mergedTheme:B,mergedClearable:_,patternInputFocused:M,filterablePlaceholder:C,label:y,selected:L,showTagsPanel:w,isCompositing:t,counterRef:s,counterWrapperRef:k,patternInputMirrorRef:l,patternInputRef:r,selfRef:u,multipleElRef:f,singleElRef:b,patternInputWrapperRef:g,overflowRef:S,inputTagElRef:v,handleMouseDown:Q,handleFocusin:z,handleClear:de,handleMouseEnter:ve,handleMouseLeave:ue,handleDeleteOption:G,handlePatternKeyDown:te,handlePatternInputInput:N,handlePatternInputBlur:Fe,handlePatternInputFocus:Ce,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Re,handleFocusout:he,handleCompositionEnd:xe,handleCompositionStart:ee,onPopoverUpdateShow:Te,focus:ge,focusInput:oe,blur:be,blurInput:j,updateCounter:pe,getCounter:ie,getTail:Se,renderLabel:e.renderLabel,cssVars:me?void 0:we,themeClass:W?.themeClass,onRender:W?.onRender}},render(){const{status:e,multiple:l,size:r,disabled:u,filterable:f,maxTagCount:b,bordered:g,clsPrefix:s,onRender:k,renderTag:S,renderLabel:v}=this;k?.();const w=b==="responsive",M=typeof b=="number",I=w||M,B=i(et,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var C,y;return(y=(C=this.$slots).arrow)===null||y===void 0?void 0:y.call(C)}});let _;if(l){const{labelField:C}=this,y=z=>i("div",{class:`${s}-base-selection-tag-wrapper`,key:z.value},S?S({option:z,handleClose:()=>this.handleDeleteOption(z)}):i(qe,{size:r,closable:!z.disabled,disabled:u,onClose:()=>this.handleDeleteOption(z),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>v?v(z,!0):ye(z[C],z,!0)})),L=(M?this.selectedOptions.slice(0,b):this.selectedOptions).map(y),U=f?i("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:u,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,Y=w?()=>i("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(qe,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:u})):void 0;let H;if(M){const z=this.selectedOptions.length-b;z>0&&(H=i("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},i(qe,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:u},{default:()=>`+${z}`})))}const A=w?f?i(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>L,counter:Y,tail:()=>U}):i(tn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>L,counter:Y}):M?L.concat(H):L,E=I?()=>i("div",{class:`${s}-base-selection-popover`},w?L:this.selectedOptions.map(y)):void 0,q=I?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,X=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?i("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},this.placeholder):null;if(f){const z=i("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},A,w?null:U,B);_=i(ln,null,I?i(on,Object.assign({},q,{scrollable:!0}),{trigger:()=>z,default:E}):z,X)}else{const z=i("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:u?void 0:0},A,B);_=i(ln,null,I?i(on,Object.assign({},q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>z,default:E}):z,X)}}else if(f){const C=this.pattern||this.isCompositing,y=this.active?!C:!this.selected,L=this.active?!1:this.selected;_=i("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:u,disabled:u,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),L?i("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},i("div",{class:`${s}-base-selection-overlay__wrapper`},S?S({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):null,y?i("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,B)}else _=i("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${s}-base-selection-input`,title:ft(this.label),key:"input"},i("div",{class:`${s}-base-selection-input__content`},S?S({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):i("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},this.placeholder),B);return i("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,g?i("div",{class:`${s}-base-selection__border`}):null,g?i("div",{class:`${s}-base-selection__state-border`}):null)}});function $e(e){return e.type==="group"}function mn(e){return e.type==="ignored"}function Ge(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function St(e,l){return{getIsGroup:$e,getIgnored:mn,getKey(u){return $e(u)?u.name||u.key||"key-required":u[e]},getChildren(u){return u[l]}}}function Ot(e,l,r,u){if(!l)return e;function f(b){if(!Array.isArray(b))return[];const g=[];for(const s of b)if($e(s)){const k=f(s[u]);k.length&&g.push(Object.assign({},s,{[u]:k}))}else{if(mn(s))continue;l(r,s)&&g.push(s)}return g}return f(e)}function Rt(e,l,r){const u=new Map;return e.forEach(f=>{$e(f)?f[r].forEach(b=>{u.set(b[l],b)}):u.set(f[l],f)}),u}var Tt=Z([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[bn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);const Mt=Object.assign(Object.assign({},re.props),{to:Ye.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var kt=ae({name:"Select",props:Mt,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:r,namespaceRef:u,inlineThemeDisabled:f}=cn(e),b=re("Select","-select",Tt,ut,e,l),g=O(e.defaultValue),s=V(e,"value"),k=rn(s,g),S=O(!1),v=O(""),w=R(()=>{const{valueField:n,childrenField:a}=e,h=St(n,a);return nt(he.value,h)}),M=R(()=>Rt(X.value,e.valueField,e.childrenField)),I=O(!1),B=rn(V(e,"show"),I),_=O(null),C=O(null),y=O(null),{localeRef:L}=fn("Select"),U=R(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:L.value.placeholder}),Y=tt(e,["items","options"]),H=[],A=O([]),E=O([]),q=O(new Map),se=R(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:a,valueField:h}=e;return F=>({[a]:String(F),[h]:F})}return n===!1?!1:a=>Object.assign(n(a),{value:a})}),X=R(()=>E.value.concat(A.value).concat(Y.value)),z=R(()=>{const{labelField:n,valueField:a}=e;return(h,F)=>{if(!F)return!1;const m=F[n];if(typeof m=="string")return Ge(h,m);const p=F[a];return typeof p=="string"?Ge(h,p):typeof p=="number"?Ge(h,String(p)):!1}}),he=R(()=>{if(e.remote)return Y.value;{const{value:n}=X,{value:a}=v;return!a.length||!e.filterable?n:Ot(n,z.value,a,e.childrenField)}});function de(n){const a=e.remote,{value:h}=q,{value:F}=M,{value:m}=se,p=[];return n.forEach(T=>{if(F.has(T))p.push(F.get(T));else if(a&&h.has(T))p.push(h.get(T));else if(m){const D=m(T);D&&p.push(D)}}),p}const ve=R(()=>{if(e.multiple){const{value:n}=k;return Array.isArray(n)?de(n):[]}return null}),ue=R(()=>{const{value:n}=k;return!e.multiple&&!Array.isArray(n)?n===null?null:de([n])[0]||null:null}),Q=ot(e),{mergedSizeRef:G,mergedDisabledRef:te,mergedStatusRef:t}=Q;function d(n,a){const{onChange:h,"onUpdate:value":F,onUpdateValue:m}=e,{nTriggerFormChange:p,nTriggerFormInput:T}=Q;h&&J(h,n,a),m&&J(m,n,a),F&&J(F,n,a),g.value=n,p(),T()}function N(n){const{onBlur:a}=e,{nTriggerFormBlur:h}=Q;a&&J(a,n),h()}function ee(){const{onClear:n}=e;n&&J(n)}function xe(n){const{onFocus:a}=e,{nTriggerFormFocus:h}=Q;a&&J(a,n),h()}function Ce(n){const{onSearch:a}=e;a&&J(a,n)}function Fe(n){const{onScroll:a}=e;a&&J(a,n)}function be(){var n;const{remote:a,multiple:h}=e;if(a){const{value:F}=q;if(h){const{valueField:m}=e;(n=ve.value)===null||n===void 0||n.forEach(p=>{F.set(p[m],p)})}else{const m=ue.value;m&&F.set(m[e.valueField],m)}}}function ge(n){const{onUpdateShow:a,"onUpdate:show":h}=e;a&&J(a,n),h&&J(h,n),I.value=n}function oe(){te.value||(ge(!0),I.value=!0,e.filterable&&Ve())}function j(){ge(!1)}function pe(){v.value="",E.value=H}const ie=O(!1);function Se(){e.filterable&&(ie.value=!0)}function ce(){e.filterable&&(ie.value=!1,B.value||pe())}function fe(){te.value||(B.value?e.filterable||j():oe())}function Oe(n){var a,h;!((h=(a=y.value)===null||a===void 0?void 0:a.selfRef)===null||h===void 0)&&h.contains(n.relatedTarget)||(S.value=!1,N(n),j())}function Re(n){xe(n),S.value=!0}function Te(n){S.value=!0}function me(n){var a;!((a=_.value)===null||a===void 0)&&a.$el.contains(n.relatedTarget)||(S.value=!1,N(n),j())}function we(){var n;(n=_.value)===null||n===void 0||n.focus(),j()}function W(n){var a;B.value&&(!((a=_.value)===null||a===void 0)&&a.$el.contains(n.target)||j())}function o(n){if(!Array.isArray(n))return[];if(se.value)return Array.from(n);{const{remote:a}=e,{value:h}=M;if(a){const{value:F}=q;return n.filter(m=>h.has(m)||F.has(m))}else return n.filter(F=>h.has(F))}}function c(n){$(n.rawNode)}function $(n){if(te.value)return;const{tag:a,remote:h,clearFilterAfterSelect:F,valueField:m}=e;if(a&&!h){const{value:p}=E,T=p[0]||null;T&&(A.value.push(T),E.value=H)}if(h&&q.value.set(n[m],n),e.multiple){const p=o(k.value),T=p.findIndex(D=>D===n[m]);if(~T){if(p.splice(T,1),a&&!h){const D=ze(n[m]);~D&&(A.value.splice(D,1),F&&(v.value=""))}}else p.push(n[m]),F&&(v.value="");d(p,de(p))}else{if(a&&!h){const p=ze(n[m]);~p?A.value=[A.value[p]]:A.value=H}ke(),j(),d(n[m],n)}}function ze(n){return A.value.findIndex(h=>h[e.valueField]===n)}function Le(n){B.value||oe();const{value:a}=n.target;v.value=a;const{tag:h,remote:F}=e;if(Ce(a),h&&!F){if(!a){E.value=H;return}const{onCreate:m}=e,p=m?m(a):{[e.labelField]:a,[e.valueField]:a},{valueField:T}=e;Y.value.some(D=>D[T]===p[T])||A.value.some(D=>D[T]===p[T])?E.value=H:E.value=[p]}}function Ae(n){n.stopPropagation();const{multiple:a}=e;!a&&e.filterable&&j(),ee(),a?d([],[]):d(null,null)}function Ee(n){!Be(n,"action")&&!Be(n,"empty")&&n.preventDefault()}function De(n){Fe(n)}function Pe(n){var a,h,F,m,p;switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((a=_.value)===null||a===void 0)&&a.isCompositing)){if(B.value){const T=(h=y.value)===null||h===void 0?void 0:h.getPendingTmNode();T?c(T):e.filterable||(j(),ke())}else if(oe(),e.tag&&ie.value){const T=E.value[0];if(T){const D=T[e.valueField],{value:Ie}=k;e.multiple&&Array.isArray(Ie)&&Ie.some(He=>He===D)||$(T)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;B.value&&((F=y.value)===null||F===void 0||F.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;B.value?(m=y.value)===null||m===void 0||m.next():oe();break;case"Escape":j(),(p=_.value)===null||p===void 0||p.focus();break}}function ke(){var n;(n=_.value)===null||n===void 0||n.focus()}function Ve(){var n;(n=_.value)===null||n===void 0||n.focusInput()}function je(){var n;!B.value||(n=C.value)===null||n===void 0||n.syncPosition()}be(),Me(V(e,"options"),be);const Ke={focus:()=>{var n;(n=_.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=_.value)===null||n===void 0||n.blur()}},_e=R(()=>{const{self:{menuBoxShadow:n}}=b.value;return{"--n-menu-box-shadow":n}}),le=f?Ne("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},Ke),{mergedStatus:t,mergedClsPrefix:l,mergedBordered:r,namespace:u,treeMate:w,isMounted:it(),triggerRef:_,menuRef:y,pattern:v,uncontrolledShow:I,mergedShow:B,adjustedTo:Ye(e),uncontrolledValue:g,mergedValue:k,followerRef:C,localizedPlaceholder:U,selectedOption:ue,selectedOptions:ve,mergedSize:G,mergedDisabled:te,focused:S,activeWithoutMenuOpen:ie,inlineThemeDisabled:f,onTriggerInputFocus:Se,onTriggerInputBlur:ce,handleTriggerOrMenuResize:je,handleMenuFocus:Te,handleMenuBlur:me,handleMenuTabOut:we,handleTriggerClick:fe,handleToggle:c,handleDeleteOption:$,handlePatternInput:Le,handleClear:Ae,handleTriggerBlur:Oe,handleTriggerFocus:Re,handleKeydown:Pe,handleMenuAfterLeave:pe,handleMenuClickOutside:W,handleMenuScroll:De,handleMenuKeydown:Pe,handleMenuMousedown:Ee,mergedTheme:b,cssVars:f?void 0:_e,themeClass:le?.themeClass,onRender:le?.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(lt,null,{default:()=>[i(rt,null,{default:()=>i(Ft,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),i(at,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ye.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(vn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,r;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),st(i(xt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(r=this.menuProps)===null||r===void 0?void 0:r.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var u,f;return[(f=(u=this.$slots).empty)===null||f===void 0?void 0:f.call(u)]},action:()=>{var u,f;return[(f=(u=this.$slots).action)===null||f===void 0?void 0:f.call(u)]}}),this.displayDirective==="show"?[[dt,this.mergedShow],[an,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[an,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as F,kt as N,pt as a,xt as b,St as c,ft as g};
