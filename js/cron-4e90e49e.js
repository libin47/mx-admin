import{T as p}from"./index-428590c2.js";import{u as c}from"./use-table-cd58e49d.js";import{d as f,R as o,k as d,h as r,cV as h,a as y,N as C,n as g}from"./index-e5a974ac.js";import{t as T}from"./index-4b60ca16.js";import{N as k}from"./Popconfirm-c8847aa9.js";import"./DataTable-d869e7f7.js";import"./ChevronRight-1c9271e3.js";import"./Icon-1a17fecd.js";import"./Select-f739eb48.js";import"./Tag-a4a9fc2d.js";import"./Forward-8c728d71.js";import"./index-2607d3f6.js";import"./Tooltip-d2cdd65e.js";import"./transform-64362df2.js";import"./_arrayEach-2ff48152.js";var _=f({setup(){const{data:s,fetchDataFn:i,loading:n}=c(t=>async()=>{const a=await o.api.health.cron.get();t.value=Array.from(Object.values(a.data).map(e=>({...e,_name:e.name,name:T(e.name)})))});d(async()=>{await i()});const l=async(t,a)=>{await o.api.health.cron.run(t).post();let e=setTimeout(function m(){o.api.health.cron.task(t).get().then(u=>{u.status==="fulfill"?(message.success(`${a} \u6267\u884C\u5B8C\u6210`),e=clearTimeout(e)):u.status==="reject"?(message.error(`${a} \u6267\u884C\u5931\u8D25, `+u.message),e=clearTimeout(e)):e=setTimeout(m,1e3)})},1e3)};return()=>r(g,null,r(p,{noPagination:!0,data:s,loading:n.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"\u4EFB\u52A1",key:"name",ellipsis:{tooltip:!0},width:150},{title:"\u63CF\u8FF0",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"\u72B6\u6001",key:"status"},{title:"\u4E0B\u6B21\u6267\u884C",key:"",render(t){const a=t.nextDate;return a?h(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"\u64CD\u4F5C",key:"",render(t){return r(y,null,r(k,{onPositiveClick:()=>void l(t._name,t.name)},{trigger(){return r(C,{size:"tiny",text:!0,type:"success"},"\u6267\u884C")},default:()=>r("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u6267\u884C?")}))}}]}))}});export{_ as default};
