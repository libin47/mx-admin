import{f as c,R as i,u as h,j as v,w,m as B,p as x,a as t,C as D,F as N,A as P,d as R,N as b,b as n}from"./index-7367b2eb.js";import{T as O}from"./title-link-dfaf7c9b.js";import{D as C}from"./delete-confirm-d514f74e.js";import{T as F}from"./index-94298d51.js";import{R as p}from"./relative-time-9ccfac2c.js";import{u as L}from"./use-table-1d69dca2.js";import{H as A}from"./rounded-button-d48625b1.js";import{N as M}from"./Popconfirm-a5fe0e62.js";import"./iframe-preview-2e56ad51.js";import"./DataTable-e0129444.js";import"./ChevronRight-fddda33d.js";import"./Checkbox-29e21660.js";import"./index-1034f523.js";import"./Icon-54ef011a.js";import"./prop-0108836c.js";import"./Select-d394828c.js";import"./Tag-23362430.js";import"./Forward-339836ca.js";import"./Tooltip-b958537d.js";import"./ExternalLink-e865f79b.js";const te=c({name:"PageList",setup(){const{checkedRowKeys:o,data:m,pager:l,sortProps:r,fetchDataFn:g}=L((a,e)=>async(y=d.query.page||1,T=20)=>{const k=await i.api.pages.get({params:{page:y,size:T,select:"title subtitle _id id created modified slug",...r.sortBy?{sortBy:r.sortBy,sortOrder:r.sortOrder}:{}}});a.value=k.data}),u=h(),d=v(),s=g;w(()=>d.query.page,async a=>{await s(a)}),B(async()=>{await s()});const f=c({setup(){const a=x([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(O,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)}},{title:"\u526F\u6807\u9898",key:"subtitle"},{title:"\u8DEF\u5F84",key:"slug",render(e){return`/${e.slug}`}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(p,{time:e.created},null)}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(p,{time:e.modified},null)}},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(e){return t(R,null,{default:()=>[t(M,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),u.success("\u5220\u9664\u6210\u529F"),await s(l.value.currentPage)}},{trigger:()=>t(b,{text:!0,type:"error",size:"tiny"},{default:()=>[n("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[n("\u786E\u5B9A\u8981\u5220\u9664 "),e.title,n(" ?")])})]})}}]);return()=>t(F,{noPagination:!0,columns:a,data:m,onFetchData:s,pager:l,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{r.sortBy=e.sortBy,r.sortOrder=e.sortOrder}},null)}});return()=>t(D,null,{actions:()=>t(N,null,[t(C,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>i.api.pages(e).delete()));for(const e of a)e.status==="rejected"&&u.success(`\u5220\u9664\u5931\u8D25\uFF0C${e.reason.message}`);o.value.length=0,s()}},null),t(A,{to:"/pages/edit",icon:t(P,null,null)},null)]),default:()=>t(f,null,null)})}});export{te as ManagePageListView};
