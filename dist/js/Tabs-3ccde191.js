import{T as at,f as J,aN as q,X as ue,ca as nt,$ as o,aY as D,n as H,K as rt,F as ot,a1 as it,ay as st,bn as lt,aa as dt,a4 as s,ag as g,a6 as y,a5 as A,af as ct,V as bt,a7 as ve,H as S,bb as se,ap as M,aj as ft,w as U,b5 as X,a8 as ut,Z as L,dk as vt,Y as pt,a0 as le,aO as de,dl as ht,dm as gt,ac as O,ao as B,be as mt,cC as xt,dn as yt,bf as wt}from"./index-d885f019.js";import{A as Ct}from"./Add-cf9d4bc6.js";import{t as K}from"./throttle-6fa55e62.js";const Z=at("n-tabs"),pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var _t=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:pe,setup(e){q(()=>{e.label!==void 0&&D("tab-pane","`label` is deprecated, please use `tab` instead.")});const n=ue(Z,null);return n||nt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Rt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},dt(pe,["displayDirective"]));var Y=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Rt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:b,closableRef:w,tabStyleRef:m,tabChangeIdRef:f,onBeforeLeaveRef:p,triggerRef:C,handleAdd:x,activateTab:u,handleClose:v}=ue(Z);return{trigger:C,mergedClosable:H(()=>{if(e.internalAddable)return!1;const{closable:d}=e;return d===void 0?w.value:d}),style:m,clsPrefix:n,value:c,type:b,handleClose(d){d.stopPropagation(),!e.disabled&&v(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:d}=e,h=++f.id;if(d!==c.value){const{value:R}=p;R?Promise.resolve(R(e.name,c.value)).then(z=>{z&&f.id===h&&u(d)}):u(d)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:b,label:w,tab:m,value:f,mergedClosable:p,style:C,trigger:x,$slots:{default:u}}=this,v=w??m;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:c,"data-name":c,"data-disabled":b?!0:void 0},rt({class:[`${n}-tabs-tab`,f===c&&`${n}-tabs-tab--active`,b&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:C},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(ot,null,o("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),o(it,{clsPrefix:n},{default:()=>o(Ct,null)})):u?u():typeof v=="object"?v:st(v??c)),p&&this.type==="card"?o(lt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),zt=s("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[g("segment-type",[s("tabs-rail",[y("&.transition-disabled","color: red;",[s("tabs-tab",`
 transition: none;
 `)])])]),s("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[s("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),y("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),g("flex",[s("tabs-nav",{width:"100%"},[s("tabs-wrapper",{width:"100%"},[s("tabs-tab",{marginRight:0})])])]),s("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),s("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[g("shadow-before",[y("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-after",[y("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),y("&::before",`
 left: 0;
 `),y("&::after",`
 right: 0;
 `)]),s("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),s("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),s("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),s("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),s("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("&.transition-disabled",`
 transition: none;
 `),g("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),s("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),s("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[y("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),y("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),y("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),y("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),y("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),s("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),g("line-type, bar-type",[s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[y("&:hover",{color:"var(--n-tab-text-color-hover)"}),g("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),g("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),s("tabs-nav",[g("line-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),g("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[g("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ct("disabled",[y("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 6px;"),g("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")]),s("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const St=Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var At=J({name:"Tabs",props:St,setup(e,{slots:n}){var c,b,w,m;q(()=>{e.labelSize!==void 0&&D("tabs","`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&D("tabs","`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&D("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:f,inlineThemeDisabled:p}=bt(e),C=ve("Tabs","-tabs",zt,gt,e,f),x=S(null),u=S(null),v=S(null),d=S(null),h=S(null),R=S(!0),z=S(!0),l=se(e,["labelSize","size"]),T=se(e,["activeName","value"]),P=S((b=(c=T.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&b!==void 0?b:n.default?(m=(w=M(n.default())[0])===null||w===void 0?void 0:w.props)===null||m===void 0?void 0:m.name:null),$=ft(T,P),Q={id:0},he=H(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});U($,()=>{Q.id=0,k()});function ee(){var t;const{value:a}=$;return a===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function ge(t){if(e.type==="card")return;const{value:a}=u;if(!!a&&t){const r=`${f.value}-tabs-bar--disabled`,{barWidth:i}=e;if(t.dataset.disabled==="true"?a.classList.add(r):a.classList.remove(r),i&&t.offsetWidth>=i){const j=Math.floor((t.offsetWidth-i)/2)+t.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${i}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function k(){if(e.type==="card")return;const t=ee();t&&ge(t)}const E=S(null);let N=0,_=null;function me(t){const a=E.value;if(a){N=t.getBoundingClientRect().height;const r=`${N}px`,i=()=>{a.style.height=r,a.style.maxHeight=r};_?(i(),_(),_=null):_=i}}function xe(t){const a=E.value;if(a){const r=t.getBoundingClientRect().height,i=()=>{document.body.offsetHeight,a.style.maxHeight=`${r}px`,a.style.height=`${Math.max(N,r)}px`};_?(_(),_=null,i()):_=i}}function ye(){const t=E.value;t&&(t.style.maxHeight="",t.style.height="")}const te={value:[]},ae=S("next");function we(t){const a=$.value;let r="next";for(const i of te.value){if(i===a)break;if(i===t){r="prev";break}}ae.value=r,Ce(t)}function Ce(t){const{onActiveNameChange:a,onUpdateValue:r,"onUpdate:value":i}=e;a&&O(a,t),r&&O(r,t),i&&O(i,t),P.value=t}function Re(t){const{onClose:a}=e;a&&O(a,t)}function ne(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),k(),t.classList.remove(a)}let re=0;function ze(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||re===t.contentRect.width)return;re=t.contentRect.width;const{type:r}=e;(r==="line"||r==="bar")&&ne(),r!=="segment"&&V((a=h.value)===null||a===void 0?void 0:a.$el)}const Se=K(ze,64);U([()=>e.justifyContent,()=>e.size],()=>{X(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ne()})});const F=S(!1);function Pe(t){var a;const{target:r,contentRect:{width:i}}=t,j=r.parentElement.offsetWidth;if(!F.value)j<i&&(F.value=!0);else{const{value:I}=d;if(!I)return;j-i>I.$el.offsetWidth&&(F.value=!1)}V((a=h.value)===null||a===void 0?void 0:a.$el)}const $e=K(Pe,64);function Te(){const{onAdd:t}=e;t&&t(),X(()=>{const a=ee(),{value:r}=h;!a||!r||r.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function V(t){if(!t)return;const{scrollLeft:a,scrollWidth:r,offsetWidth:i}=t;R.value=a<=0,z.value=a+i>=r}const _e=K(t=>{V(t.target)},64);ut(Z,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:$,tabChangeIdRef:Q,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:we,handleClose:Re,handleAdd:Te}),vt(()=>{k()}),q(()=>{const{value:t}=v;if(!t)return;const{value:a}=f,r=`${a}-tabs-nav-scroll-wrapper--shadow-before`,i=`${a}-tabs-nav-scroll-wrapper--shadow-after`;R.value?t.classList.remove(r):t.classList.add(r),z.value?t.classList.remove(i):t.classList.add(i)});const oe=S(null);U($,()=>{if(e.type==="segment"){const t=oe.value;t&&X(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ae={syncBarPosition:()=>{k()}},ie=H(()=>{const{value:t}=l,{type:a}=e,r={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${r}`,{self:{barColor:j,closeIconColor:I,closeIconColorHover:Be,closeIconColorPressed:Le,tabColor:We,tabBorderColor:je,paneTextColor:ke,tabFontWeight:Ee,tabBorderRadius:Fe,tabFontWeightActive:Ie,colorSegment:Oe,fontWeightStrong:De,tabColorSegment:He,closeSize:Ne,closeIconSize:Ve,closeColorHover:Me,closeColorPressed:Ue,closeBorderRadius:Xe,[B("panePadding",t)]:Ke,[B("tabPadding",i)]:Ge,[B("tabGap",i)]:qe,[B("tabTextColor",a)]:Ye,[B("tabTextColorActive",a)]:Je,[B("tabTextColorHover",a)]:Ze,[B("tabTextColorDisabled",a)]:Qe,[B("tabFontSize",t)]:et},common:{cubicBezierEaseInOut:tt}}=C.value;return{"--n-bezier":tt,"--n-color-segment":Oe,"--n-bar-color":j,"--n-tab-font-size":et,"--n-tab-text-color":Ye,"--n-tab-text-color-active":Je,"--n-tab-text-color-disabled":Qe,"--n-tab-text-color-hover":Ze,"--n-pane-text-color":ke,"--n-tab-border-color":je,"--n-tab-border-radius":Fe,"--n-close-size":Ne,"--n-close-icon-size":Ve,"--n-close-color-hover":Me,"--n-close-color-pressed":Ue,"--n-close-border-radius":Xe,"--n-close-icon-color":I,"--n-close-icon-color-hover":Be,"--n-close-icon-color-pressed":Le,"--n-tab-color":We,"--n-tab-font-weight":Ee,"--n-tab-font-weight-active":Ie,"--n-tab-padding":Ge,"--n-tab-gap":qe,"--n-pane-padding":Ke,"--n-font-weight-strong":De,"--n-tab-color-segment":He}}),W=p?pt("tabs",H(()=>`${l.value[0]}${e.type[0]}`),ie,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:$,renderedNames:new Set,tabsRailElRef:oe,tabsPaneWrapperRef:E,tabsElRef:x,barElRef:u,addTabInstRef:d,xScrollInstRef:h,scrollWrapperElRef:v,addTabFixed:F,tabWrapperStyle:he,handleNavResize:Se,mergedSize:l,handleScroll:_e,handleTabsResize:$e,cssVars:p?void 0:ie,themeClass:W?.themeClass,animationDirection:ae,renderNameListRef:te,onAnimationBeforeLeave:me,onAnimationEnter:xe,onAnimationAfterEnter:ye,onRender:W?.onRender},Ae)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:b,mergedSize:w,renderNameListRef:m,onRender:f,$slots:{default:p,prefix:C,suffix:x}}=this;f?.();const u=p?M(p()).filter(l=>l.type.__TAB_PANE__===!0):[],v=p?M(p()).filter(l=>l.type.__TAB__===!0):[],d=!v.length,h=n==="card",R=n==="segment",z=!h&&!R&&this.justifyContent;return m.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${w}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},le(C,l=>l&&o("div",{class:`${e}-tabs-nav__prefix`},l)),R?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},d?u.map((l,T)=>(m.value.push(l.props.name),o(Y,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),l.children?{default:l.children.tab}:void 0))):v.map((l,T)=>(m.value.push(l.props.name),T===0?l:fe(l)))):o(de,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(ht,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),d?u.map((P,$)=>(m.value.push(P.props.name),G(o(Y,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!z||z==="center"||z==="start"||z==="end")}),P.children?{default:P.children.tab}:void 0)))):v.map((P,$)=>(m.value.push(P.props.name),G($!==0&&!z?fe(P):P))),!c&&b&&h?be(b,(d?u.length:v.length)!==0):null,z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=l;return h&&b&&(T=o(de,{onResize:this.handleTabsResize},{default:()=>l})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,h?o("div",{class:`${e}-tabs-pad`}):null,h?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&b&&h?be(b,!0):null,le(x,l=>l&&o("div",{class:`${e}-tabs-nav__suffix`},l))),d&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ce(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ce(u,this.mergedValue,this.renderedNames)))}});function ce(e,n,c,b,w,m,f){const p=[];return e.forEach(C=>{const{name:x,displayDirective:u,"display-directive":v}=C.props,d=R=>u===R||v===R,h=n===x;if(C.key!==void 0&&(C.key=x),h||d("show")||d("show:lazy")&&c.has(x)){c.has(x)||c.add(x);const R=!d("if");p.push(R?mt(C,[[wt,h]]):C)}}),f?o(xt,{name:`${f}-transition`,onBeforeLeave:b,onEnter:w,onAfterEnter:m},{default:()=>p}):p}function be(e,n){return o(Y,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function fe(e){const n=yt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function G(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{At as N,_t as a};
