import{f as s,k as d,v as f,n as i,R as c,g as k,a as t,x as m,N as p,I as T,W as g}from"./index-d12868e1.js";import{I as x}from"./iframe-preview-07b44317.js";import{N as L}from"./DataTable-5dd6fcfc.js";import{E as w}from"./ExternalLink-318ead10.js";const I=s({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:l}){const{viewport:n}=d(f),o=i(()=>n.value.widest||n.value.wider),a=i(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?g:void 0).toString()}catch{return null}}),u=`${c.endpoint}/markdown/render/${e.id}${e.withToken?`?token=${k()}`:""}`;return()=>t(m,{to:e.inPageTo,class:"inline-flex items-center space-x-2"},{default:()=>[t(L,{lineClamp:2,tooltip:{width:500}},{default:()=>[e.title]}),l.default?.(),a.value&&t(p,{text:!0,tag:"a",class:"cursor-[alias]",href:a.value,target:"_blank",type:"primary",onClick:r=>r.stopPropagation()},{default:()=>[t(T,null,{default:()=>[t(w,null,null)]})]}),e.id&&o.value&&t(x,{path:u},null)]})}});export{I as T};
