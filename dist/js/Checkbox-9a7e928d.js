import{$ as t,T as te,f as _,V as K,ai as j,H as F,n as B,aj as E,a8 as se,Z as N,al as ue,ac as c,a6 as h,a4 as r,a5 as y,ag as V,aT as be,aU as he,aV as fe,aN as ke,X as ve,ak as xe,a7 as H,am as me,Y as ge,aX as pe,aL as Ce,bp as ye,aY as Re,bq as we,ao as P}from"./index-d885f019.js";function Ae(e){return s=>{s?e.value=s.$el:e.value=null}}var ze=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Se=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const G=te("n-checkbox-group"),De={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>(ue("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead."),!0),default:void 0}};var Me=_({name:"CheckboxGroup",props:De,setup(e){const{mergedClsPrefixRef:s}=K(e),g=j(e),{mergedSizeRef:R,mergedDisabledRef:S}=g,u=F(e.defaultValue),w=B(()=>e.value),b=E(w,u),n=B(()=>{var f;return((f=b.value)===null||f===void 0?void 0:f.length)||0}),a=B(()=>Array.isArray(b.value)?new Set(b.value):new Set);function A(f,l){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:k,"onUpdate:value":v,onUpdateValue:x}=e;if(Array.isArray(b.value)){const d=Array.from(b.value),M=d.findIndex(I=>I===l);f?~M||(d.push(l),x&&c(x,d),v&&c(v,d),p(),C(),u.value=d,k&&c(k,d)):~M&&(d.splice(M,1),x&&c(x,d),v&&c(v,d),k&&c(k,d),u.value=d,p(),C())}else f?(x&&c(x,[l]),v&&c(v,[l]),k&&c(k,[l]),u.value=[l],p(),C()):(x&&c(x,[]),v&&c(v,[]),k&&c(k,[]),u.value=[],p(),C())}return se(G,{checkedCountRef:n,maxRef:N(e,"max"),minRef:N(e,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:A}),{mergedClsPrefix:s}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=h([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[h("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),h("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),V("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),V("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[h(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),V("indeterminate",[r("checkbox-box",[r("checkbox-icon",[h(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),h(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),V("checked, indeterminate",[h("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),V("disabled",{cursor:"not-allowed"},[V("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[h(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[h("&:empty",{display:"none"})])]),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const $e=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Be=_({name:"Checkbox",props:$e,setup(e){ke(()=>{e.onChange&&Re("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const s=F(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=K(e),u=j(e,{mergedSize(o){const{size:m}=e;if(m!==void 0)return m;if(n){const{value:i}=n.mergedSizeRef;if(i!==void 0)return i}if(o){const{mergedSize:i}=o;if(i!==void 0)return i.value}return"medium"},mergedDisabled(o){const{disabled:m}=e;if(m!==void 0)return m;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:i},checkedCountRef:z}=n;if(i!==void 0&&z.value>=i&&!l.value)return!0;const{minRef:{value:T}}=n;if(T!==void 0&&z.value<=T&&l.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:b}=u,n=ve(G,null),a=F(e.defaultChecked),A=N(e,"checked"),f=E(A,a),l=xe(()=>{if(n){const o=n.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return f.value===e.checkedValue}),p=H("Checkbox","-checkbox",Te,we,e,g);function C(o){if(n&&e.value!==void 0)n.toggleCheckbox(!l.value,e.value);else{const{onChange:m,"onUpdate:checked":i,onUpdateChecked:z}=e,{nTriggerFormInput:T,nTriggerFormChange:U}=u,$=l.value?e.uncheckedValue:e.checkedValue;i&&c(i,$,o),z&&c(z,$,o),m&&c(m,$,o),T(),U(),a.value=$}}function k(o){w.value||C(o)}function v(o){if(!w.value)switch(o.key){case" ":case"Enter":C(o)}}function x(o){switch(o.key){case" ":o.preventDefault()}}const d={focus:()=>{var o;(o=s.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=s.value)===null||o===void 0||o.blur()}},M=me("Checkbox",S,g),I=B(()=>{const{value:o}=b,{common:{cubicBezierEaseInOut:m},self:{borderRadius:i,color:z,colorChecked:T,colorDisabled:U,colorTableHeader:$,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:Y,checkMarkColorDisabled:X,border:q,borderFocus:Z,borderDisabled:J,borderChecked:Q,boxShadowFocus:W,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,[P("fontSize",o)]:de,[P("size",o)]:ie}}=p.value;return{"--n-label-line-height":le,"--n-size":ie,"--n-bezier":m,"--n-border-radius":i,"--n-border":q,"--n-border-checked":Q,"--n-border-focus":Z,"--n-border-disabled":J,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":W,"--n-color":z,"--n-color-checked":T,"--n-color-table":$,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":U,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":X,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),D=R?ge("checkbox",B(()=>b.value[0]),I,e):void 0;return Object.assign(u,d,{rtlEnabled:M,selfRef:s,mergedClsPrefix:g,mergedDisabled:w,renderedChecked:l,mergedTheme:p,labelId:pe(),handleClick:k,handleKeyUp:v,handleKeyDown:x,cssVars:R?void 0:I,themeClass:D?.themeClass,onRender:D?.onRender})},render(){var e;const{$slots:s,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:u,cssVars:w,labelId:b,label:n,mergedClsPrefix:a,focusable:A,handleKeyUp:f,handleKeyDown:l,handleClick:p}=this;return(e=this.onRender)===null||e===void 0||e.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,g&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,u&&`${a}-checkbox--inside-table`],tabindex:R||!A?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":b,style:w,onKeyup:f,onKeydown:l,onClick:p,onMousedown:()=>{ye("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${a}-checkbox-box`},t(Ce,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Se):t("div",{key:"check",class:`${a}-checkbox-icon`},ze)}),t("div",{class:`${a}-checkbox-box__border`}))),n!==null||s.default?t("span",{class:`${a}-checkbox__label`,id:b},s.default?s.default():n):null)}});export{Me as N,Be as a,Ae as c};
