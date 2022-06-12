import{cd as L,bj as U,du as $,b2 as D,T as E,a4 as z,f as j,X as K,V as q,a7 as x,n as C,w as k,Z as H,Y as G,$ as M,a3 as X,aG as Y,az as Z,b5 as R,ac as w,H as J,a8 as Q,K as B,a9 as W,aa as F,q as ee,ab as _,R as N,p as te,u as ae,j as se,m as ne,a as e,F as oe,A as re,c5 as le,d1 as ie,N as b,c8 as ue,d as ce,b as y,t as de,r as pe,bt as fe,s as me,dv as he,S as ve,C as ge}from"./index-d12868e1.js";import{D as be}from"./delete-confirm-7d1aef80.js";import{R as ye}from"./relative-time-9a65b4e3.js";import{u as Pe}from"./use-table-37559345.js";import{H as we}from"./rounded-button-527354c9.js";import{c as Ne,a as Me}from"./Checkbox-ae25cf48.js";import{b as je,c as xe}from"./Select-07750eb4.js";import{N as Se,a as Te}from"./ListItem-f1f38d6e.js";import{N as Ce}from"./Pagination-10cdbb22.js";import{N as Re}from"./ButtonGroup-477d4ed3.js";import{N as O}from"./Avatar-477349f3.js";import"./Tag-ae5139ae.js";import"./Forward-afd84277.js";import"./prop-0f12dfb2.js";function _e(t){const{boxShadow2:s}=t;return{menuBoxShadow:s}}const Oe=L({name:"Popselect",common:U,peers:{Popover:$,InternalSelectMenu:D},self:_e});var V=Oe;const I=E("n-popselect");var Ae=z("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`);const S={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,onChange:[Function,Array]},A=X(S);var ke=j({name:"PopselectPanel",props:S,setup(t){const s=K(I),{mergedClsPrefixRef:o,inlineThemeDisabled:u}=q(t),m=x("Popselect","-pop-select",Ae,V,s.props,o),c=C(()=>Y(t.options,xe("value","children")));function l(n,p){const{onUpdateValue:d,"onUpdate:value":v,onChange:g}=t;d&&w(d,n,p),v&&w(v,n,p),g&&w(g,n,p)}function i(n){a(n.key)}function r(n){Z(n,"action")||n.preventDefault()}function a(n){const{value:{getNode:p}}=c;if(t.multiple)if(Array.isArray(t.value)){const d=[],v=[];let g=!0;t.value.forEach(T=>{if(T===n){g=!1;return}const P=p(T);P&&(d.push(P.key),v.push(P.rawNode))}),g&&(d.push(n),v.push(p(n).rawNode)),l(d,v)}else{const d=p(n);d&&l([n],[d.rawNode])}else if(t.value===n&&t.cancelable)l(null,null);else{const d=p(n);d&&l(n,d.rawNode),s.setShow(!1)}R(()=>{s.syncPosition()})}k(H(t,"options"),()=>{R(()=>{s.syncPosition()})});const f=C(()=>{const{self:{menuBoxShadow:n}}=m.value;return{"--n-menu-box-shadow":n}}),h=u?G("select",void 0,f,s.props):void 0;return{mergedTheme:s.mergedThemeRef,mergedClsPrefix:o,treeMate:c,handleToggle:i,handleMenuMousedown:r,cssVars:u?void 0:f,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var t;return(t=this.onRender)===null||t===void 0||t.call(this),M(je,{clsPrefix:this.mergedClsPrefix,focusable:!0,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:!1,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown},{action:()=>{var s,o;return((o=(s=this.$slots).action)===null||o===void 0?void 0:o.call(s))||[]},empty:()=>{var s,o;return((o=(s=this.$slots).empty)===null||o===void 0?void 0:o.call(s))||[]}})}});const Be=Object.assign(Object.assign(Object.assign(Object.assign({},x.props),F(_,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},_.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),S);var Fe=j({name:"Popselect",props:Be,__popover__:!0,setup(t){const s=x("Popselect","-popselect",void 0,V,t),o=J(null);function u(){var l;(l=o.value)===null||l===void 0||l.syncPosition()}function m(l){var i;(i=o.value)===null||i===void 0||i.setShow(l)}return Q(I,{props:t,mergedThemeRef:s,syncPosition:u,setShow:m}),Object.assign(Object.assign({},{syncPosition:u,setShow:m}),{popoverInstRef:o,mergedTheme:s})},render(){const{mergedTheme:t}=this,s={theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(o,u,m,c,l)=>M(ke,Object.assign({},B(this.$attrs,{class:o,style:m}),W(this.$props,A),{ref:Ne(u),onMouseenter:c,onMouseleave:l}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})};return M(ee,Object.assign({},F(this.$props,A),s),{trigger:()=>{var o,u;return(u=(o=this.$slots).default)===null||u===void 0?void 0:u.call(o)}})}});function Ve(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ve(t)}const Je=j({setup(){const{data:t,pager:s,sortProps:o,fetchDataFn:u,loading:m}=Pe((a,f)=>async(h=i.query.page||1,n=30)=>{const p=await N.api.projects.get({params:{page:h,size:n}});a.value=p.data,f.value=p.pagination}),c=te(new Set),l=ae(),i=se(),r=u;return k(()=>i.query.page,async a=>{await r(a)}),ne(async()=>{await r()}),()=>e(ge,null,{actions:()=>e(oe,null,[e(be,{checkedRowKeys:c,onDelete:async()=>{await Promise.all(Array.from(c.values()).map(a=>N.api.projects(a).delete())),c.clear(),r()}},null),e(we,{to:"/projects/edit",icon:e(re,null,null)},null)]),default:()=>e(le,{show:m.value},{default:()=>[e(Se,{bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(Ce,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:a=>{r(a)}},null)])},default(){return t.value.map(a=>e(Te,{key:a.id},{prefix(){return e(Me,{class:"mt-4",checked:c.has(a.id),onUpdateChecked:f=>{f?c.add(a.id):c.delete(a.id)}},null)},default(){return e(ie,{description:a.description},{header(){return e("div",null,[e(b,B({ghost:!0,type:"primary",text:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(ue,null,{default:()=>[e(ce,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},{default:()=>[e("span",null,[y("\u521B\u5EFA\u4E8E "),de(a.created)]),a.modified&&e("span",null,[y("\u66F4\u65B0\u4E8E")," ",e(ye,{time:a.modified},null)])]})]})},"header-extra":function(){return e(Re,null,{default:()=>[e(b,{onClick:()=>{pe.push({name:fe.EditProject,query:{id:a.id}})}},{default:()=>[y("\u7F16\u8F91")]}),e(Fe,{class:"!p-0",options:[{value:"del",label:"",render(){return e(b,{type:"error",bordered:!1,onClick:async()=>{await N.api.projects(a.id).delete(),l.success("\u5220\u9664\u6210\u529F"),await r(s.value.currentPage)}},{default:()=>[y("\u5220\u9664")]})}}]},{default:()=>[e(b,{class:"!px-2"},{default:()=>[e(me,null,{default:()=>[e(he,null,null)]})]})]})]})},avatar(){let f;return a.avatar?e(O,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(O,{circle:!0,size:"large",class:"align-center"},Ve(f=a.name[0].toUpperCase())?f:{default:()=>[f]})}})}}))}})]})})}});export{Je as default};
