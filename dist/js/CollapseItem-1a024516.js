import{f as P,$ as n,a4 as x,a6 as T,a5 as m,ag as I,cp as A,V as $,H as F,n as N,aj as L,a7 as _,a8 as U,am as D,Y as j,T as B,cq as H,ac as z,cr as V,Z as M,bd as q,cs as O,be as K,aX as X,ak as Z,X as W,c9 as Y,a1 as G}from"./index-e5bed378.js";import{C as J}from"./ChevronRight-dc5aeee4.js";var Q=P({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ee=x("collapse",{width:"100%"},[x("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[x("collapse-item","margin-left: 32px;"),T("&:first-child",{marginTop:0}),T("&:first-child >",[m("header",{paddingTop:0})]),I("left-arrow-placement",[m("header",[x("collapse-item-arrow",{marginRight:"4px"})])]),I("right-arrow-placement",[m("header",[x("collapse-item-arrow",{marginLeft:"4px"})])]),m("content-wrapper",[m("content-inner",{paddingTop:"16px"}),A({duration:"0.15s"})]),I("active",[m("header",[I("active",[x("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),T("&:not(:first-child)",{borderTop:"1px solid var(--n-divider-color)"}),m("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 `,[m("header-main",`
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),m("header-extra",`
 cursor: pointer;
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),x("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const ae=Object.assign(Object.assign({},_.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),k=B("n-collapse");var se=P({name:"Collapse",props:ae,setup(e,{slots:d}){const{mergedClsPrefixRef:t,inlineThemeDisabled:s,mergedRtlRef:o}=$(e),f=F(e.defaultExpandedNames),r=N(()=>e.expandedNames),u=L(r,f),h=_("Collapse","-collapse",ee,H,e,t);function i(c){const{"onUpdate:expandedNames":a,onUpdateExpandedNames:p,onExpandedNamesChange:w}=e;p&&z(p,c),a&&z(a,c),w&&z(w,c),f.value=c}function g(c){const{onItemHeaderClick:a}=e;a&&z(a,c)}function l(c,a,p){const{accordion:w}=e,{value:b}=u;if(w)c?(i([a]),g({name:a,expanded:!0,event:p})):(i([]),g({name:a,expanded:!1,event:p}));else if(!Array.isArray(b))i([a]),g({name:a,expanded:!0,event:p});else{const v=b.slice(),E=v.findIndex(S=>a===S);~E?(v.splice(E,1),i(v),g({name:a,expanded:!1,event:p})):(v.push(a),i(v),g({name:a,expanded:!0,event:p}))}}U(k,{props:e,mergedClsPrefixRef:t,expandedNamesRef:u,slots:d,toggleItem:l});const y=D("Collapse",o,t),R=N(()=>{const{common:{cubicBezierEaseInOut:c},self:{titleFontWeight:a,dividerColor:p,titleTextColor:w,textColor:b,arrowColor:v,fontSize:E,titleFontSize:S}}=h.value;return{"--n-font-size":E,"--n-bezier":c,"--n-text-color":b,"--n-divider-color":p,"--n-title-font-size":S,"--n-title-text-color":w,"--n-title-font-weight":a,"--n-arrow-color":v}}),C=s?j("collapse",void 0,R,e):void 0;return{rtlEnabled:y,mergedTheme:h,mergedClsPrefix:t,cssVars:s?void 0:R,themeClass:C?.themeClass,onRender:C?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),te=P({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:V(M(e,"show"))}},render(){return n(O,null,{default:()=>{const{show:e,displayDirective:d,onceTrue:t,clsPrefix:s}=this,o=d==="show"&&t,f=n("div",{class:`${s}-collapse-item__content-wrapper`},n("div",{class:`${s}-collapse-item__content-inner`},this.$slots));return o?q(f,[[K,e]]):e?f:null}})}});const re={title:String,name:[String,Number],displayDirective:String};var oe=P({name:"CollapseItem",props:re,setup(e){const{mergedRtlRef:d}=$(e),t=X(),s=Z(()=>{var l;return(l=e.name)!==null&&l!==void 0?l:t}),o=W(k);o||Y("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:f,props:r,mergedClsPrefixRef:u,slots:h}=o,i=N(()=>{const{value:l}=f;if(Array.isArray(l)){const{value:y}=s;return!~l.findIndex(R=>R===y)}else if(l){const{value:y}=s;return y!==l}return!0});return{rtlEnabled:D("Collapse",d,u),collapseSlots:h,randomName:t,mergedClsPrefix:u,collapsed:i,mergedDisplayDirective:N(()=>{const{displayDirective:l}=e;return l||r.displayDirective}),arrowPlacement:N(()=>r.arrowPlacement),handleClick(l){o&&o.toggleItem(i.value,s.value,l)}}},render(){var e;const{collapseSlots:d,$slots:t,arrowPlacement:s,collapsed:o,mergedDisplayDirective:f,mergedClsPrefix:r}=this,u=t.header?t.header():this.title,h=t["header-extra"]||d["header-extra"],i=t.arrow||d.arrow;return n("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${s}-arrow-placement`,!o&&`${r}-collapse-item--active`]},n("div",{class:[`${r}-collapse-item__header`,!o&&`${r}-collapse-item__header--active`]},n("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&u,n("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},i?i({collapsed:o}):n(G,{clsPrefix:r},{default:(e=d.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?n(Q,null):n(J,null)})),s==="left"&&u),h&&n("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},{default:h})),n(te,{clsPrefix:r,displayDirective:f,show:!o},t))}});export{se as N,oe as a};
