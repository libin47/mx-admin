import{a2 as a,ad as d,a4 as e,ae as o,a3 as s,f,T as b,bu as p,a6 as g,cu as h,ak as m,Z as $}from"./index-9c74e798.js";const t="0!important",u="-1px!important";function i(r){return o(r+"-type",[e("& +",[a("button",{},[o(r+"-type",[s("border",{borderLeftWidth:t}),s("state-border",{left:u})])])])])}function n(r){return o(r+"-type",[e("& +",[a("button",[o(r+"-type",[s("border",{borderTopWidth:t}),s("state-border",{top:u})])])])])}var y=a("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[a("button",[e("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),e("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),e("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),o("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),o("vertical",{flexDirection:"column"},[a("button",[e("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),e("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),e("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),o("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]);const v={size:{type:String,default:void 0},vertical:Boolean};var R=f({name:"ButtonGroup",props:v,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:c}=b(r);return p("-button-group",y,l),g(h,r),{rtlEnabled:m("ButtonGroup",c,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return $("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{R as N};
