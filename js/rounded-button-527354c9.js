import{f as l,a as e,S as r,N as i,x as u,q as c,I as d}from"./index-d12868e1.js";function f(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!r(t)}const a={variant:{type:String,default:"primary"},color:{type:String},onClick:{type:Function},disabled:{type:Boolean}},s=l({props:a,setup(t,{slots:n}){return()=>e(i,{type:t.variant,color:t.color,circle:!0,onClick:t.onClick,disabled:t.disabled},f(n)?n:{default:()=>[n]})}}),y=l({props:{...a,to:{type:[Object,String]},name:{type:String},icon:{type:Object,required:!0}},setup(t){const n=()=>e(s,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled,color:t.color},{default:()=>[e(d,{size:"16"},{default:()=>[t.icon]})]}),o=()=>t.name?e(c,{trigger:"hover",placement:"bottom"},{trigger(){return e(n,null,null)},default(){return t.name}}):e(n,null,null);return()=>t.to?e(u,{to:t.to},{default:()=>[e(o,null,null)]}):e(o,null,null)}});export{y as H};
