import{a as f,u as b}from"./use-async-monaco-42a4a3f7.js";import{f as g,et as s,y,w as N,a,dQ as d,N as w,b as S,C as T,R as h}from"./index-9c74e798.js";import{T as C}from"./two-col-e654afd0.js";import{E as p}from"./types-4fa065e6.js";import{N as E}from"./Form-ad4f2a91.js";import{N as c}from"./FormItem-6a6aac9c.js";import{N as i}from"./Select-af5d9eac.js";import"./index-2deee66d.js";import"./editor.main-4db047be.js";import"./use-save-confirm-f3a5b2e9.js";import"./index-8c9bd54a.js";import"./Tag-fc1d507c.js";const M=t=>{switch(t){case"objectId":return((l=Math,o=Date,r=16,n=u=>l.floor(u).toString(r))=>n(o.now()/1e3)+" ".repeat(r).replace(/./g,()=>n(l.random()*r)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}};var U=g({setup(){const t=s("debug-event-name",p.POST_CREATE),l=s("debug-event",{}),o=s("debug-event-type","web"),r=f({value:l.value[t.value]??"const data = {}"}),n=y();N(()=>t.value,e=>{u.editor.setValue(l.value[e]||"")});const u=b(n,r,e=>{l.value={...l.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),m=async()=>{const e=l.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(V,x,v)=>M(v))??"";h.api.debug.events.post({params:{type:o.value,event:t.value},data:new Function(`return ${e.replace(/^const data = /,"")}`)()})};return()=>a(T,null,{default:()=>[a(C,null,{default:()=>[a(d,{span:"12"},{default:()=>[a(E,null,{default:()=>[a(c,{label:"Type"},{default:()=>[a(i,{tag:!0,filterable:!0,value:o.value,onUpdateValue:e=>void(o.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(c,{label:"Event"},{default:()=>[a(i,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(w,{type:"primary",onClick:m},{default:()=>[S("\u6D4B\u8BD5")]})])]}),a(d,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:n,class:"h-full"},null)])]})]})]})}});export{U as default};
