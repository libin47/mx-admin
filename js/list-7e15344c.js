import{d as l,R as i,u as F,s as v,i as w,w as k,k as x,m as C,h as t,q as d,N as p,a as R,F as B,A as T,n as E}from"./index-34956879.js";import{D as N}from"./delete-confirm-42c61672.js";import{T as A}from"./index-5eaa6d28.js";import{R as S}from"./relative-time-5b42a3fb.js";import{u as L}from"./use-table-75be6b44.js";import{H as M}from"./rounded-button-555d6dc9.js";import{N as b}from"./Popconfirm-ca16f844.js";import"./DataTable-cb57cf6f.js";import"./Icon-aceea607.js";import"./Select-0d935067.js";import"./Tag-dc254c37.js";import"./Forward-8826202a.js";import"./index-a311d003.js";import"./ChevronRight-03c9f45a.js";import"./Tooltip-c0b771a8.js";const Z=l({name:"SayList",setup(q,K){const{checkedRowKeys:u,data:m,pager:o,loading:y,fetchDataFn:f}=L((a,e)=>async(h=n.query.page||1,D=30)=>{const c=await i.api.says.get({params:{page:h,size:D,select:"title text _id id created modified author source"}});a.value=c.data,e.value=c.pagination}),r=F();v();const n=w(),s=f;k(()=>n.query.page,async a=>{await s(a)}),x(async()=>{await s()});const g=l({setup(){const a=C([{type:"selection",options:["none","all"]},{title:"\u521B\u5EFA\u4E8E",key:"created",width:100,render(e){return t(d,{to:"/says/edit?id="+e.id},t(S,{time:e.created}))}},{title:"\u5185\u5BB9",key:"text"},{title:"\u4F5C\u8005",key:"author"},{title:"\u6765\u6E90",key:"source"},{title:"\u64CD\u4F5C",fixed:"right",key:"id",width:130,render(e){return t(R,{wrap:!1},t(d,{to:"/says/edit?id="+e.id},t(p,{text:!0,type:"primary",size:"tiny"},"\u7F16\u8F91")),t(b,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.says(e.id).delete(),r.success("\u5220\u9664\u6210\u529F"),await s(o.value.currentPage)}},{trigger:()=>t(p,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664\u201C",e.text,"\u201D ?")}))}}]);return()=>t(A,{loading:y.value,columns:a,data:m,onFetchData:s,pager:o,onUpdateCheckedRowKeys:e=>{u.value=e}})}});return()=>t(E,null,{actions:()=>t(B,null,t(N,{checkedRowKeys:u.value,onDelete:async()=>{const a=await Promise.allSettled(u.value.map(e=>i.api.says(e).delete()));for(const e of a)e.status==="rejected"&&r.success("\u5220\u9664\u5931\u8D25\uFF0C"+e.reason.message);u.value.length=0,s()}}),t(M,{to:"/says/edit",icon:t(T,null)})),default:()=>t(g,null)})}});export{Z as default};
