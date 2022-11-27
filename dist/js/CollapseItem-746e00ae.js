import{f as P,$ as l,a4 as v,a6 as T,a5 as m,ag as I,cq as A,V as $,H as F,n as N,aj as L,a7 as _,a8 as U,am as D,Y as j,al as B,T as H,cr as V,ac as z,cs as M,Z as q,be as O,ct as K,bf as X,aX as Z,ak as W,X as Y,ca as G,a1 as J}from"./index-d885f019.js";import{C as Q}from"./ChevronRight-ab7b1b96.js";var ee=P({name:"ChevronLeft",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ae=v("collapse",{width:"100%"},[v("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[v("collapse-item","margin-left: 32px;"),T("&:first-child",{marginTop:0}),T("&:first-child >",[m("header",{paddingTop:0})]),I("left-arrow-placement",[m("header",[v("collapse-item-arrow",{marginRight:"4px"})])]),I("right-arrow-placement",[m("header",[v("collapse-item-arrow",{marginLeft:"4px"})])]),m("content-wrapper",[m("content-inner",{paddingTop:"16px"}),A({duration:"0.15s"})]),I("active",[m("header",[I("active",[v("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),T("&:not(:first-child)",{borderTop:"1px solid var(--n-divider-color)"}),m("header",`
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
 `),v("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const te=Object.assign(Object.assign({},_.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>(B("collapse","`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."),!0),default:void 0}}),k=H("n-collapse");var oe=P({name:"Collapse",props:te,setup(e,{slots:d}){const{mergedClsPrefixRef:t,inlineThemeDisabled:s,mergedRtlRef:o}=$(e),f=F(e.defaultExpandedNames),r=N(()=>e.expandedNames),u=L(r,f),h=_("Collapse","-collapse",ae,V,e,t);function i(c){const{"onUpdate:expandedNames":a,onUpdateExpandedNames:p,onExpandedNamesChange:w}=e;p&&z(p,c),a&&z(a,c),w&&z(w,c),f.value=c}function g(c){const{onItemHeaderClick:a}=e;a&&z(a,c)}function n(c,a,p){const{accordion:w}=e,{value:b}=u;if(w)c?(i([a]),g({name:a,expanded:!0,event:p})):(i([]),g({name:a,expanded:!1,event:p}));else if(!Array.isArray(b))i([a]),g({name:a,expanded:!0,event:p});else{const x=b.slice(),E=x.findIndex(S=>a===S);~E?(x.splice(E,1),i(x),g({name:a,expanded:!1,event:p})):(x.push(a),i(x),g({name:a,expanded:!0,event:p}))}}U(k,{props:e,mergedClsPrefixRef:t,expandedNamesRef:u,slots:d,toggleItem:n});const y=D("Collapse",o,t),R=N(()=>{const{common:{cubicBezierEaseInOut:c},self:{titleFontWeight:a,dividerColor:p,titleTextColor:w,textColor:b,arrowColor:x,fontSize:E,titleFontSize:S}}=h.value;return{"--n-font-size":E,"--n-bezier":c,"--n-text-color":b,"--n-divider-color":p,"--n-title-font-size":S,"--n-title-text-color":w,"--n-title-font-weight":a,"--n-arrow-color":x}}),C=s?j("collapse",void 0,R,e):void 0;return{rtlEnabled:y,mergedTheme:h,mergedClsPrefix:t,cssVars:s?void 0:R,themeClass:C?.themeClass,onRender:C?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),re=P({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:M(q(e,"show"))}},render(){return l(K,null,{default:()=>{const{show:e,displayDirective:d,onceTrue:t,clsPrefix:s}=this,o=d==="show"&&t,f=l("div",{class:`${s}-collapse-item__content-wrapper`},l("div",{class:`${s}-collapse-item__content-inner`},this.$slots));return o?O(f,[[X,e]]):e?f:null}})}});const ne={title:String,name:[String,Number],displayDirective:String};var ie=P({name:"CollapseItem",props:ne,setup(e){const{mergedRtlRef:d}=$(e),t=Z(),s=W(()=>{var n;return(n=e.name)!==null&&n!==void 0?n:t}),o=Y(k);o||G("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:f,props:r,mergedClsPrefixRef:u,slots:h}=o,i=N(()=>{const{value:n}=f;if(Array.isArray(n)){const{value:y}=s;return!~n.findIndex(R=>R===y)}else if(n){const{value:y}=s;return y!==n}return!0});return{rtlEnabled:D("Collapse",d,u),collapseSlots:h,randomName:t,mergedClsPrefix:u,collapsed:i,mergedDisplayDirective:N(()=>{const{displayDirective:n}=e;return n||r.displayDirective}),arrowPlacement:N(()=>r.arrowPlacement),handleClick(n){o&&o.toggleItem(i.value,s.value,n)}}},render(){var e;const{collapseSlots:d,$slots:t,arrowPlacement:s,collapsed:o,mergedDisplayDirective:f,mergedClsPrefix:r}=this,u=t.header?t.header():this.title,h=t["header-extra"]||d["header-extra"],i=t.arrow||d.arrow;return l("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${s}-arrow-placement`,!o&&`${r}-collapse-item--active`]},l("div",{class:[`${r}-collapse-item__header`,!o&&`${r}-collapse-item__header--active`]},l("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&u,l("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},i?i({collapsed:o}):l(J,{clsPrefix:r},{default:(e=d.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?l(ee,null):l(Q,null)})),s==="left"&&u),h&&l("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},{default:h})),l(re,{clsPrefix:r,displayDirective:f,show:!o},t))}});export{oe as N,ie as a};
