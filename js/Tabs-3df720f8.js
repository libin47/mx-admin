import{Q as et,f as q,U as be,bY as tt,Z as o,n as D,E as at,F as nt,$ as rt,aw as ot,bl as it,a8 as st,a2 as s,ae as g,a4 as y,a3 as A,ad as lt,T as dt,a5 as fe,y as S,b8 as oe,an as M,ah as ct,w as V,a6 as bt,X as L,dg as ft,aL as ut,V as vt,_ as ie,aM as se,dh as pt,di as ht,aa as O,b3 as U,am as B,bb as gt,cB as mt,dj as xt,bc as yt}from"./index-234d295e.js";import{A as wt}from"./Add-a1ac92d9.js";import{t as X}from"./throttle-6012207b.js";const J=et("n-tabs"),ue={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Tt=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ue,setup(e){const n=be(J,null);return n||tt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Rt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},st(ue,["displayDirective"]));var K=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Rt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:b,closableRef:w,tabStyleRef:m,tabChangeIdRef:f,onBeforeLeaveRef:p,triggerRef:R,handleAdd:x,activateTab:u,handleClose:v}=be(J);return{trigger:R,mergedClosable:D(()=>{if(e.internalAddable)return!1;const{closable:d}=e;return d===void 0?w.value:d}),style:m,clsPrefix:n,value:c,type:b,handleClose(d){d.stopPropagation(),!e.disabled&&v(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:d}=e,h=++f.id;if(d!==c.value){const{value:C}=p;C?Promise.resolve(C(e.name,c.value)).then(z=>{z&&f.id===h&&u(d)}):u(d)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:b,label:w,tab:m,value:f,mergedClosable:p,style:R,trigger:x,$slots:{default:u}}=this,v=w??m;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:c,"data-name":c,"data-disabled":b?!0:void 0},at({class:[`${n}-tabs-tab`,f===c&&`${n}-tabs-tab--active`,b&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:R},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(nt,null,o("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),o(rt,{clsPrefix:n},{default:()=>o(wt,null)})):u?u():typeof v=="object"?v:ot(v??c)),p&&this.type==="card"?o(it,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),Ct=s("tabs",`
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
 `),lt("disabled",[y("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 6px;"),g("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")]),s("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const zt=Object.assign(Object.assign({},fe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var _t=q({name:"Tabs",props:zt,setup(e,{slots:n}){var c,b,w,m;const{mergedClsPrefixRef:f,inlineThemeDisabled:p}=dt(e),R=fe("Tabs","-tabs",Ct,ht,e,f),x=S(null),u=S(null),v=S(null),d=S(null),h=S(null),C=S(!0),z=S(!0),l=oe(e,["labelSize","size"]),T=oe(e,["activeName","value"]),P=S((b=(c=T.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&b!==void 0?b:n.default?(m=(w=M(n.default())[0])===null||w===void 0?void 0:w.props)===null||m===void 0?void 0:m.name:null),$=ct(T,P),Q={id:0},ve=D(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});V($,()=>{Q.id=0,E()});function Y(){var t;const{value:a}=$;return a===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function pe(t){if(e.type==="card")return;const{value:a}=u;if(!!a&&t){const r=`${f.value}-tabs-bar--disabled`,{barWidth:i}=e;if(t.dataset.disabled==="true"?a.classList.add(r):a.classList.remove(r),i&&t.offsetWidth>=i){const j=Math.floor((t.offsetWidth-i)/2)+t.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${i}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function E(){if(e.type==="card")return;const t=Y();t&&pe(t)}const k=S(null);let H=0,_=null;function he(t){const a=k.value;if(a){H=t.getBoundingClientRect().height;const r=`${H}px`,i=()=>{a.style.height=r,a.style.maxHeight=r};_?(i(),_(),_=null):_=i}}function ge(t){const a=k.value;if(a){const r=t.getBoundingClientRect().height,i=()=>{document.body.offsetHeight,a.style.maxHeight=`${r}px`,a.style.height=`${Math.max(H,r)}px`};_?(_(),_=null,i()):_=i}}function me(){const t=k.value;t&&(t.style.maxHeight="",t.style.height="")}const Z={value:[]},ee=S("next");function xe(t){const a=$.value;let r="next";for(const i of Z.value){if(i===a)break;if(i===t){r="prev";break}}ee.value=r,ye(t)}function ye(t){const{onActiveNameChange:a,onUpdateValue:r,"onUpdate:value":i}=e;a&&O(a,t),r&&O(r,t),i&&O(i,t),P.value=t}function we(t){const{onClose:a}=e;a&&O(a,t)}function te(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),E(),t.classList.remove(a)}let ae=0;function Re(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ae===t.contentRect.width)return;ae=t.contentRect.width;const{type:r}=e;(r==="line"||r==="bar")&&te(),r!=="segment"&&N((a=h.value)===null||a===void 0?void 0:a.$el)}const Ce=X(Re,64);V([()=>e.justifyContent,()=>e.size],()=>{U(()=>{const{type:t}=e;(t==="line"||t==="bar")&&te()})});const F=S(!1);function ze(t){var a;const{target:r,contentRect:{width:i}}=t,j=r.parentElement.offsetWidth;if(!F.value)j<i&&(F.value=!0);else{const{value:I}=d;if(!I)return;j-i>I.$el.offsetWidth&&(F.value=!1)}N((a=h.value)===null||a===void 0?void 0:a.$el)}const Se=X(ze,64);function Pe(){const{onAdd:t}=e;t&&t(),U(()=>{const a=Y(),{value:r}=h;!a||!r||r.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function N(t){if(!t)return;const{scrollLeft:a,scrollWidth:r,offsetWidth:i}=t;C.value=a<=0,z.value=a+i>=r}const $e=X(t=>{N(t.target)},64);bt(J,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:$,tabChangeIdRef:Q,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:xe,handleClose:we,handleAdd:Pe}),ft(()=>{E()}),ut(()=>{const{value:t}=v;if(!t)return;const{value:a}=f,r=`${a}-tabs-nav-scroll-wrapper--shadow-before`,i=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(r):t.classList.add(r),z.value?t.classList.remove(i):t.classList.add(i)});const ne=S(null);V($,()=>{if(e.type==="segment"){const t=ne.value;t&&U(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Te={syncBarPosition:()=>{E()}},re=D(()=>{const{value:t}=l,{type:a}=e,r={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${r}`,{self:{barColor:j,closeIconColor:I,closeIconColorHover:_e,closeIconColorPressed:Ae,tabColor:Be,tabBorderColor:Le,paneTextColor:We,tabFontWeight:je,tabBorderRadius:Ee,tabFontWeightActive:ke,colorSegment:Fe,fontWeightStrong:Ie,tabColorSegment:Oe,closeSize:De,closeIconSize:He,closeColorHover:Ne,closeColorPressed:Me,closeBorderRadius:Ve,[B("panePadding",t)]:Ue,[B("tabPadding",i)]:Xe,[B("tabGap",i)]:Ge,[B("tabTextColor",a)]:Ke,[B("tabTextColorActive",a)]:qe,[B("tabTextColorHover",a)]:Je,[B("tabTextColorDisabled",a)]:Qe,[B("tabFontSize",t)]:Ye},common:{cubicBezierEaseInOut:Ze}}=R.value;return{"--n-bezier":Ze,"--n-color-segment":Fe,"--n-bar-color":j,"--n-tab-font-size":Ye,"--n-tab-text-color":Ke,"--n-tab-text-color-active":qe,"--n-tab-text-color-disabled":Qe,"--n-tab-text-color-hover":Je,"--n-pane-text-color":We,"--n-tab-border-color":Le,"--n-tab-border-radius":Ee,"--n-close-size":De,"--n-close-icon-size":He,"--n-close-color-hover":Ne,"--n-close-color-pressed":Me,"--n-close-border-radius":Ve,"--n-close-icon-color":I,"--n-close-icon-color-hover":_e,"--n-close-icon-color-pressed":Ae,"--n-tab-color":Be,"--n-tab-font-weight":je,"--n-tab-font-weight-active":ke,"--n-tab-padding":Xe,"--n-tab-gap":Ge,"--n-pane-padding":Ue,"--n-font-weight-strong":Ie,"--n-tab-color-segment":Oe}}),W=p?vt("tabs",D(()=>`${l.value[0]}${e.type[0]}`),re,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:$,renderedNames:new Set,tabsRailElRef:ne,tabsPaneWrapperRef:k,tabsElRef:x,barElRef:u,addTabInstRef:d,xScrollInstRef:h,scrollWrapperElRef:v,addTabFixed:F,tabWrapperStyle:ve,handleNavResize:Ce,mergedSize:l,handleScroll:$e,handleTabsResize:Se,cssVars:p?void 0:re,themeClass:W?.themeClass,animationDirection:ee,renderNameListRef:Z,onAnimationBeforeLeave:he,onAnimationEnter:ge,onAnimationAfterEnter:me,onRender:W?.onRender},Te)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:b,mergedSize:w,renderNameListRef:m,onRender:f,$slots:{default:p,prefix:R,suffix:x}}=this;f?.();const u=p?M(p()).filter(l=>l.type.__TAB_PANE__===!0):[],v=p?M(p()).filter(l=>l.type.__TAB__===!0):[],d=!v.length,h=n==="card",C=n==="segment",z=!h&&!C&&this.justifyContent;return m.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${w}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},ie(R,l=>l&&o("div",{class:`${e}-tabs-nav__prefix`},l)),C?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},d?u.map((l,T)=>(m.value.push(l.props.name),o(K,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),l.children?{default:l.children.tab}:void 0))):v.map((l,T)=>(m.value.push(l.props.name),T===0?l:ce(l)))):o(se,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(pt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),d?u.map((P,$)=>(m.value.push(P.props.name),G(o(K,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&(!z||z==="center"||z==="start"||z==="end")}),P.children?{default:P.children.tab}:void 0)))):v.map((P,$)=>(m.value.push(P.props.name),G($!==0&&!z?ce(P):P))),!c&&b&&h?de(b,(d?u.length:v.length)!==0):null,z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=l;return h&&b&&(T=o(se,{onResize:this.handleTabsResize},{default:()=>l})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,h?o("div",{class:`${e}-tabs-pad`}):null,h?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&b&&h?de(b,!0):null,ie(x,l=>l&&o("div",{class:`${e}-tabs-nav__suffix`},l))),d&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},le(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):le(u,this.mergedValue,this.renderedNames)))}});function le(e,n,c,b,w,m,f){const p=[];return e.forEach(R=>{const{name:x,displayDirective:u,"display-directive":v}=R.props,d=C=>u===C||v===C,h=n===x;if(R.key!==void 0&&(R.key=x),h||d("show")||d("show:lazy")&&c.has(x)){c.has(x)||c.add(x);const C=!d("if");p.push(C?gt(R,[[yt,h]]):R)}}),f?o(mt,{name:`${f}-transition`,onBeforeLeave:b,onEnter:w,onAfterEnter:m},{default:()=>p}):p}function de(e,n){return o(K,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function ce(e){const n=xt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function G(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{_t as N,Tt as a};
