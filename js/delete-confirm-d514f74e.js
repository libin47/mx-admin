import{H as g}from"./rounded-button-d48625b1.js";import{f as m,t as y,u as f,v as w,a as o,D as h}from"./index-7367b2eb.js";const v=m({props:{checkedRowKeys:{type:Object},onDelete:{type:Function,required:!0},message:{type:String},customIcon:{type:Object},showSuccessMessage:{type:Boolean,default:!0},customSuccessMessage:{type:String},customButtonTip:{type:String}},setup(n){const c=y(),a=f();return()=>{const{customIcon:i,checkedRowKeys:s,onDelete:u,message:r,customSuccessMessage:l,showSuccessMessage:p,customButtonTip:d}=n,e=w(s)?s.value:s,t=e?Array.isArray(e)?e.length:e.size:0;return o(g,{variant:"error",disabled:e?t===0:!1,name:d??"\u5220\u9664\u591A\u6761",onClick:()=>{c.warning({title:"\u8B66\u544A",content:r??`\u4F60\u786E\u5B9A\u8981\u5220\u9664${t>1?"\u591A\u6761":"\u8FD9\u6761"}\u6570\u636E\uFF1F`,positiveText:"\u306F\u3044",negativeText:"\u8FBE\u54A9",onPositiveClick:async()=>{await u(e),p&&a.success(l??"\u5220\u9664\u6210\u529F")}})},icon:i??o(h,null,null)},null)}}});export{v as D};
