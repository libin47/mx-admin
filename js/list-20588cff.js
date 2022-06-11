import{f as d,o as g,h as k,i as w,R as u,u as M,j as b,w as D,m as L,p as O,a as t,F as _,I as h,b as f,B as $,N as E,d as F,A as R,C as I}from"./index-234d295e.js";import{T as S}from"./title-link-b41161a7.js";import{D as V}from"./delete-confirm-95570fb1.js";import{T as z}from"./index-3423ebcf.js";import{E as B}from"./edit-column-f3a03cc9.js";import{R as T}from"./relative-time-0f7140f4.js";import{u as P}from"./use-table-13a70c98.js";import{H as A}from"./rounded-button-a4c5d0dc.js";import{N as H}from"./DataTable-58fc6752.js";import{N as K}from"./Popconfirm-5f5f197b.js";import"./iframe-preview-8afc7dc0.js";import"./ExternalLink-65bb30e6.js";import"./Select-6f927681.js";import"./Tag-38ffd993.js";import"./ChevronRight-083599c4.js";import"./Checkbox-1689e370.js";import"./index-0002da5a.js";import"./Icon-66515755.js";import"./Forward-32b5338c.js";import"./prop-0f12dfb2.js";import"./Tooltip-be4535db.js";const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},j=w("path",{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400L0 512z",fill:"currentColor"},null,-1),q=[j];var G=d({name:"Bookmark",render:function(o,r){return g(),k("svg",U,q)}});const J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Q=w("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"currentColor"},null,-1),W=[Q];var X=d({name:"Heart",render:function(o,r){return g(),k("svg",J,W)}});const Y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Z=w("g",{fill:"none"},[w("path",{d:"M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15zm7.27 5.857l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363zM7.53 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z",fill:"currentColor"})],-1),ee=[Z];var te=d({name:"EyeOff20Filled",render:function(o,r){return g(),k("svg",Y,ee)}});const Be=d({name:"NoteList",setup(){const{loading:c,checkedRowKeys:o,data:r,pager:v,sortProps:s,fetchDataFn:C}=P((i,e)=>async(n=x.query.page||1,a=20,y)=>{const p=await u.api.notes.get({params:{db_query:y,page:n,size:a,select:"title _id nid id created modified mood weather hide secret hasMemory coordinates location count",...s.sortBy?{sortBy:s.sortBy,sortOrder:s.sortOrder}:{}}});i.value=p.data,e.value=p.pagination}),m=M(),x=b(),l=C;D(()=>x.query.page,async i=>{await l(i)}),L(async()=>{await l()});const N=d({setup(){const i=O([{type:"selection",options:["none","all"]},{title:"\u5E8F\u53F7",width:64,key:"nid"},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:280,filter:!0,filterOptions:[{label:"\u56DE\u5FC6\u9879",value:"hasMemory"},{label:"\u9690\u85CF\u9879",value:"hide"}],render(e){const n=e.secret&&+new Date(e.secret)-+new Date>0;return t(S,{inPageTo:`/notes/edit?id=${e.id}`,title:e.title,externalLinkTo:`/notes/${e.nid}`,id:e.id,withToken:e.hide||n},{default(){return t(_,null,[e.hide||n?t(h,{color:"#34495e"},{default:()=>[t(te,null,null)]}):null,e.hasMemory?t(h,{color:"#e74c3c"},{default:()=>[t(G,null,null)]}):null])}})}},{title:"\u5FC3\u60C5",key:"mood",width:100,render(e,n){return t(B,{initialValue:r.value[n].mood??"",onSubmit:async a=>{await u.api.notes(e.id).put({data:{mood:a}}),m.success("\u4FEE\u6539\u6210\u529F"),r.value[n].mood=a},placeholder:"\u5FC3\u60C5"},null)}},{title:"\u5929\u6C14",key:"weather",width:100,render(e,n){return t(B,{initialValue:r.value[n].weather??"",onSubmit:async a=>{await u.api.notes(e.id).put({data:{weather:a}}),m.success("\u4FEE\u6539\u6210\u529F"),r.value[n].weather=a},placeholder:"\u5929\u6C14"},null)}},{title:"\u5730\u70B9",key:"location",width:200,render(e){const{coordinates:n,location:a}=e;return a?t(H,{class:"truncate max-w-[200px]"},{tooltip(){return t("div",{class:""},[t("p",null,[a]),t("p",null,[n?.longitude,f(", "),n?.latitude])])},default(){return a}}):null}},{title:()=>t(h,null,{default:()=>[t($,null,null)]}),key:"count.read",ellipsis:!0,render(e){return e.count?.read||0}},{title:()=>t(h,null,{default:()=>[t(X,null,null)]}),ellipsis:!0,key:"count.like",render(e){return e.count?.like||0}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",width:200,render(e){return t(T,{time:e.created},null)}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,width:200,render(e){return t(T,{time:e.modified},null)}},{title:"\u64CD\u4F5C",key:"id",width:100,fixed:"right",render(e){return t(F,null,{default:()=>[t(K,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await u.api.notes(e.id).delete(),m.success("\u5220\u9664\u6210\u529F"),await l(v.value.currentPage)}},{trigger:()=>t(E,{text:!0,type:"error",size:"tiny"},{default:()=>[f("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[f("\u786E\u5B9A\u8981\u5220\u9664 "),e.title,f(" ?")])})]})}}]);return()=>t(z,{nTableProps:{async onUpdateFilters(e,n){const{title:a}=e;if(!a||a.length===0){await l();return}await l(1,void 0,a.reduce((y,p)=>({...y,[p]:!0}),{}))}},loading:c.value,columns:i,data:r,onFetchData:l,pager:v,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{s.sortBy=e.sortBy,s.sortOrder=e.sortOrder}},null)}});return()=>t(I,null,{actions:()=>t(_,null,[t(V,{checkedRowKeys:o.value,onDelete:async()=>{const i=await Promise.allSettled(o.value.map(e=>u.api.notes(e).delete()));for(const e of i)e.status==="rejected"&&m.success(`\u5220\u9664\u5931\u8D25\uFF0C${e.reason.message}`);o.value.length=0,l()}},null),t(A,{to:"/notes/edit",icon:t(R,null,null)},null)]),default:()=>t(N,null,null)})}});export{Be as ManageNoteListView};
