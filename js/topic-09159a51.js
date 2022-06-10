import{H as _}from"./rounded-button-358f7de0.js";import{f as C,y as m,a as e,N as h,I as T,b as x,b_ as F,c1 as S,d1 as P,R as g,d2 as w,b3 as k,g as H,P as q,F as N,d3 as L,m as O,A as E,cx as J,p as W,w as U,H as y,d4 as G,x as Q,j as K,C as X}from"./index-9c74e798.js";import{u as Y}from"./use-table-460800ea.js";import{I as Z}from"./iframe-preview-33771a0b.js";import{U as j}from"./index-9e251fc0.js";import{S as ee}from"./Search24Regular-30d7616a.js";import{N as te}from"./Upload-ec98a24f.js";import{N as D}from"./Avatar-d0e39f4e.js";import{a as ae,N as le}from"./Select-af5d9eac.js";import{N as A,a as B}from"./ListItem-b39955e9.js";import{T as M}from"./Trash-345d3905.js";import{a as V,N as ne}from"./Icon-f0c05555.js";import{N as $}from"./Popconfirm-1e8a0c82.js";import{N as re}from"./Form-ad4f2a91.js";import{N as b}from"./FormItem-6a6aac9c.js";import{N as ue}from"./ButtonGroup-0e0a6d3e.js";import"./Add-ba1c106b.js";import"./Tooltip-87d34610.js";import"./Tag-fc1d507c.js";import"./Forward-4d98b12f.js";import"./prop-0f12dfb2.js";import"./index-8c9bd54a.js";const R=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t};function se(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}const oe=C({props:{id:{type:String,required:!0}},setup(a){const t=m(!1),l=m(null),i=m([]),c=m(),p=m(!0),f=async()=>{t.value=!0;const s=await g.api.topics(a.id).get();l.value=s,await n(s.id)},n=async(s,r=1,u=5)=>{p.value=!0;const{data:o,pagination:v}=await g.api.notes.topics(s).get({params:{page:r,size:u}});return p.value=!1,i.value=o,c.value=v,{data:o,pagination:v}},d=async s=>{await g.api.notes(s).patch({data:{topicId:null}}),message.success("\u5DF2\u79FB\u9664\u6587\u7AE0\u7684\u4E13\u680F\u5F15\u7528");const r=i.value.findIndex(u=>u.id===s);-~r&&i.value.splice(r,1)};return()=>{let s;return e(N,null,[e(h,{size:"small",secondary:!0,onClick:f},{default:()=>[e(T,{class:"mr-1"},{default:()=>[e(ee,null,null)]}),x("\u8BE6\u60C5")]}),e(F,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:r=>{t.value=r}},{default:()=>[l.value?e(S,{closable:!0,role:"dialog",class:"modal-card md",title:`\u4E13\u680F - ${l.value.name}`},{default:()=>[e(P,null,{avatar(){return e(j,{class:"p0",type:"icon",onFinish:r=>{const u=JSON.parse((r.event?.target).responseText);return r.file.url=u.url,l.value&&g.api.topics(l.value.id).patch({data:{icon:u.url}}).then(()=>{l.value&&(l.value.icon=u.url)}),r.file},onError:r=>{try{const u=JSON.parse((r.event?.target).responseText);message.warning(u.message)}catch{}return r.file}},{default:()=>[e(te,null,{default:()=>[e(D,{size:60,class:"rounded-xl",src:l.value?.icon||void 0},{default:()=>[l.value?.icon?void 0:R(l.value?.name)]})]})]})},header(){return e("b",null,[l.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[l.value?.slug])},description(){return e("p",{class:"opacity-90 clamp-2 break-all"},[l.value?.introduce])},default(){return e("p",null,[l.value?.description])}}),p.value&&i.value.length==0?e(w,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex justify-between items-center"},[e("strong",null,[x("\u5305\u542B\u7684\u6587\u7AE0\uFF1A")]),e(ce,{topicId:l.value.id,onSuccess:()=>{k(()=>f())}},null)]),i.value.length===0&&e("div",{class:"h-[300px] flex items-center justify-center"},[e(ae,{description:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9"},null)]),e(A,{bordered:!0,class:"mt-2"},se(s=i.value.map(r=>e(B,{key:r.id},{default(){return e("p",{class:"space-x-2 flex items-center"},[e("span",null,[r.title]),e(Z,{path:(()=>`${g.endpoint}/markdown/render/${r.id}${`?token=${H()}`}`)()},null)])},suffix(){return e($,{onPositiveClick:()=>d(r.id)},{trigger(){return e(h,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(M,null,null)]})]})},default(){return`\u662F\u5426\u79FB\u9664\u6B64\u8BDD\u9898\u300C${l.value?.name}\u300D\uFF1F`}})}})))?s:{default:()=>[s]}),e("div",{class:"flex justify-end"},[c.value&&e(V,{class:"mt-4",onUpdatePage:r=>{n(a.id,r)},page:c.value.currentPage,pageCount:c.value.totalPage},null)])])]}):e(S,{class:"modal-card md",role:"dialog",title:"\u4E13\u680F\u4FE1\u606F\u83B7\u53D6\u4E2D"},{default:()=>[e("div",{class:"flex relative gap-2 "},[e(w,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(w,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(w,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),ie=L(()=>{const a=m([]);let t=0,l=!1;const i=m(!0),c=async(p=1)=>{i.value=!0;const{data:f,pagination:n}=await g.api.notes.get({params:{page:p,size:20,select:"nid title _id id"}});a.value.push(...f),i.value=!1,t=n.currentPage,n.hasNextPage||(l=!0)};return{loading:i,notes:a,fetchNext:()=>{l||c(t+1)},refresh:()=>{t=1,l=!1,a.value=[],c(t)}}}),ce=C({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=m(!1),l=async()=>{const s=J(n);await Promise.all(s.map(r=>g.api.notes(r).patch({data:{topicId:a.topicId}}))),message.success("\u6DFB\u52A0\u6210\u529F"),t.value=!1,a.onSuccess?.(s)},{refresh:i,fetchNext:c,notes:p,loading:f}=ie(),n=m([]),d=s=>{const r=s.currentTarget;r.scrollTop+r.offsetHeight+10>=r.scrollHeight&&c()};return O(()=>{p.value.length===0&&c()}),()=>e(N,null,[e(h,{secondary:!0,type:"success",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(T,null,{default:()=>[e(E,null,null)]})]}),e(F,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:s=>{t.value=s}},{default:()=>[e(S,{title:"\u54EA\u4E9B\u6587\u7AE0\u9700\u8981\u6DFB\u52A0\u5230\u4E13\u680F\uFF1F",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(h,{round:!0,type:"success",onClick:()=>l()},{default:()=>[x("\u6DFB\u52A0\uFF01")]})])},default(){return e(le,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{i()},value:n.value,onUpdateValue:s=>{n.value=s},resetMenuOnOptionsChange:!1,options:p.value.map(s=>({label:s.title,value:s.id,key:s.id})),onScroll:d},null)}})]})])}}),de=C({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=W({}),l=m(!1),i=()=>{Object.keys(t).forEach(n=>{delete t[n]})};U(()=>a.id,n=>{n?(l.value=!0,g.api.topics(n).get().then(d=>{Object.assign(t,d),l.value=!1})):i()});const c=()=>{a.onClose()},p=()=>{f?.value?.validate(async d=>{d?.length||await n()});async function n(){let d;a.id?(d=await g.api.topics(a.id).put({data:t}),message.success("\u4FEE\u6539\u6210\u529F")):(d=await g.api.topics.post({data:t}),message.success("\u6DFB\u52A0\u6210\u529F")),a.onSubmit?.(d),k(()=>{i()})}},f=m();return()=>e(N,null,[e(F,{show:a.show,onUpdateShow:c,closable:!0,onClose:c,transformOrigin:"center"},{default:()=>[e(S,{role:"dialog",title:"\u65B0\u5EFA\u8BDD\u9898",closable:!0,onClose:c,class:"modal-card sm"},{default:()=>[e(re,{labelPlacement:"top",ref:f,model:t,disabled:l.value},{default:()=>[e(b,{label:"\u540D\u5B57",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(y,{value:t.name,onUpdateValue:n=>{t.name=n}},null)]}),e(b,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(y,{value:t.slug,onUpdateValue:n=>{t.slug=n}},null)]}),e(b,{label:"\u7B80\u4ECB",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(y,{value:t.introduce,onUpdateValue:n=>{t.introduce=n}},null)]}),e(b,{label:"\u56FE\u6807"},{default:()=>[e(y,{value:t.icon,onUpdateValue:n=>{t.icon=n}},{suffix(){return e(j,{class:"flex items-center",type:"icon",onFinish:n=>{const d=JSON.parse((n.event?.target).responseText);return n.file.url=d.url,t.icon=n.file.url,n.file}},{default:()=>[e(h,{text:!0},{default:()=>[e(ne,null,{default:()=>[e(G,null,null)]})]})]})}})]}),e(b,{label:"\u957F\u63CF\u8FF0",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(y,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:n=>{t.description=n}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(h,{round:!0,type:"primary",onClick:p},{default:()=>[x("\u63D0\u4EA4")]})])]})]})]})])}});function pe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}var De=C({setup(){const a=Q(),t=K();U(()=>t.query.page,u=>{l(u?+u:0)});const{fetchDataFn:l,data:i,pager:c}=Y((u,o)=>async(v=parseInt(t.query.page)||1,z=20)=>{const I=await g.api.topics.get({page:v,size:z});return o.value=I.pagination,u.value=I.data,I});O(()=>l());const p=m(""),f=m(!1),n=()=>{f.value=!0,p.value=""},d=()=>{f.value=!1,p.value=""};return{pagination:c,topics:i,fetchTopic:l,handleAddTopic:n,editTopicId:p,showTopicModal:f,handleCloseModal:d,handleSubmit(u){d();const o=i.value.findIndex(v=>v.id===u.id);-~o?i.value[o]=u:i.value.push(u)},handleDelete:async u=>{await g.api.topics(u).delete(),l()},handleEdit:u=>{p.value=u,f.value=!0},route:t,router:a}},render(){const{pagination:a,topics:t,router:l,route:i,editTopicId:c,showTopicModal:p,handleAddTopic:f,handleCloseModal:n,handleSubmit:d,handleEdit:s,handleDelete:r}=this;return e(X,null,{actions(){return e(N,null,[e(_,{icon:e(E,null,null),onClick:f,variant:"success"},null)])},default(){let u;return e(N,null,[e(A,{bordered:!0,class:"mb-4"},pe(u=t.map(o=>e(B,{key:o.id},{prefix(){return e(D,{"data-src":o.icon,class:`mt-2 ${o.icon&&"!bg-transparent"}`,circle:!0,size:50,src:o.icon||void 0},{default:()=>[o.icon?void 0:R(o.name)]})},suffix(){return e(ue,null,{default:()=>[e(h,{round:!0,onClick:()=>s(o.id)},{default:()=>[x("\u7F16\u8F91")]}),e($,{onPositiveClick:()=>r(o.id)},{default(){return`\u786E\u5B9A\u5220\u9664\u300C${o.name}\u300D\uFF1F`},trigger(){return e(h,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(M,null,null)]})]})}})]})},default(){return e(P,{title:o.name,description:o.introduce,titleExtra:o.slug},{default(){return o.description},footer(){return e(oe,{id:o.id},null)}})}})))?u:{default:()=>[u]}),a&&e("div",{class:"flex justify-end"},[e(V,{page:a.currentPage,onUpdatePage:o=>{l.replace({query:{...i.query,page:o},params:{...i.params}})},pageCount:a.totalPage,pageSize:a.size,showQuickJumper:!0},null)]),e(de,{onClose:n,show:Boolean(p||c),id:c,onSubmit:d},null)])}})}});export{De as default};
