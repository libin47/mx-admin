import{dH as le,dI as ne,dJ as ue,dK as re,f as b,H as p,aN as z,n as S,a8 as se,k as j,v as V,p as I,w as N,a as e,S as oe,d as D,bS as O,F as x,X as ie,aK as F,dL as de,L as y,bX as ce,m as q,O as me,cJ as J,R as g,dM as pe,dN as W,bs as fe,E as X,bP as ve,bR as ye,N as w,b as h,I as be,A as ge,t as he,dO as we,K as L,dP as Ne,bt as xe,u as Se,dQ as ke,dR as M,dS as Ie,di as Ce,cx as Te,j as De,C as Oe}from"./index-23675994.js";import{R as Q}from"./relative-time-d95aa895.js";import{H as R}from"./rounded-button-7c59c61c.js";import{N as Y,a as E}from"./CollapseItem-2f9f4c71.js";import{N as C}from"./Form-803b561c.js";import{N as c}from"./FormItem-f55390e0.js";import{N as Pe}from"./InputNumber-4cc9bfb6.js";import{N as Z}from"./Switch-ff645ce9.js";import{N as je}from"./DynamicTags-17b29ece.js";import{_}from"./CheckCircleOutlined-8b02a6d2.js";import{i as P}from"./isEmpty-10842f88.js";import{b as Ve}from"./_baseClone-b061ecc4.js";import{N as Ae}from"./DatePicker-70735ea5.js";import{a as Fe}from"./DataTable-3e4b58c6.js";import{N as Ue}from"./Popconfirm-99c542b2.js";import{N as Ee}from"./DynamicInput-dd054825.js";import{N as qe}from"./Select-96fa6219.js";import{U as Ke}from"./index-8ecd61eb.js";import{N as Le}from"./Upload-6e9d366d.js";import{N as Me,a as U}from"./Tabs-69d54e13.js";import"./ChevronRight-39fd66c6.js";import"./index-c6a5c591.js";import"./Add-17a04330.js";import"./Tag-cf0fa0d0.js";import"./prop-0f12dfb2.js";import"./Forward-4d60d441.js";import"./ArrowDown-cc3d70f2.js";import"./Checkbox-54c2c25e.js";import"./Tooltip-fa6ed610.js";import"./Pagination-d0fd04b8.js";import"./ButtonGroup-c2307137.js";import"./Image-ee018841.js";import"./throttle-d4ef57ab.js";function Re(a){return le(ne(a).toLowerCase())}var _e=ue(function(a,r,l){return r=r.toLowerCase(),a+(l?Re(r):r)}),Be=_e,$e=1,He=4;function ee(a){return Ve(a,$e|He)}function B(a,r,l){return a==null?a:re(a,r,l)}function T(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!oe(a)}const Ge="mt-6",ze={class:Ge,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"do-not-autofill"},ae=Symbol("JSONSchemaFormInject"),Je=b({props:{schema:{type:Object,required:!0},onValueChange:{type:Function,required:!1},initialValue:{type:Object,required:!0},getKey:{type:Function,required:!1,default:a=>a}},setup(a){const r=p(a.initialValue);z(()=>{a.onValueChange?.(r.value)},{flush:"post"});const l=S(()=>a.schema.definitions),o=S(()=>new Map(Object.entries(a.schema.definitions)));se(ae,{schema:a.schema,definitions:o,getKey:a.getKey});const u=S(()=>Object.keys(l.value)),s=p([u.value[0]]),t=j(V),d=I(ze);return N(()=>t.viewport.value.mobile,n=>{n?(d.labelPlacement="top",d.labelAlign="left"):(d.labelPlacement="left",d.labelAlign="right")},{immediate:!0}),()=>{let n,i;const{schema:m}=a;return e(x,null,[e(Y,{accordion:!0,defaultExpandedNames:s.value,displayDirective:"if"},T(n=u.value.map(f=>{const v=l.value[f];return v.title?e(E,{title:v.title,"data-schema":JSON.stringify(v)},{default:()=>[e(C,d,{default:()=>[e(te,{dataKey:a.getKey(f),formData:r,schema:v},null)]})]}):null}))?n:{default:()=>[n]}),m.ps.length?e(D,{vertical:!0},T(i=m.ps.map(f=>e(O,{class:"ml-4 mt-8 text-xs inline-block",depth:3},T(f)?f:{default:()=>[f]})))?i:{default:()=>[i]}):null])}}}),te=b({props:{schema:{type:Object,required:!0},formData:{type:Object,required:!0},dataKey:{type:String,required:!0}},setup(a){const{definitions:r,getKey:l}=ie(ae,{});return()=>{const{schema:o,formData:u,dataKey:s}=a;return o?e(x,null,[Object.keys(o.properties).map(t=>{const d=o.properties[t];if(d.$ref){const n=r.value.get(d.$ref.split("/").at(-1));return e(te,{dataKey:`${l(s)}.${t}`,formData:u,schema:n},null)}return e(We,{value:F(u.value,`${l(s)}.${t}`,void 0),onUpdateValue:n=>{F(u.value,l(s))?B(u.value,`${l(s)}.${t}`,n):B(u.value,l(s),{...F(u.value,l(s),{}),[t]:n})},title:d.title,type:d.type,options:d?.["ui:options"],description:d.description},null)})]):null}}}),We=b({props:{type:{type:String,required:!0},title:{type:String,required:!0},description:{type:String},options:{type:Object,default:()=>({})},value:{type:Object,required:!0},onUpdateValue:{type:Function,required:!0}},setup(a){const r=p(a.value);z(()=>{a.onUpdateValue(r.value)});const l=()=>{const{options:s}=a;switch(a.type){case"url":case"string":{const{type:t}=s;return e(y,{inputProps:{id:de()},value:r.value,onUpdateValue:d=>{r.value=d},type:t||"text",showPasswordToggle:!0,autosize:t=="textarea"?{maxRows:5,minRows:3}:void 0,clearable:!0},null)}case"array":return e(je,{value:r.value,onUpdateValue:t=>{r.value=t}},null);case"boolean":return e(Z,{value:r.value,onUpdateValue:t=>{r.value=t}},null);case"integer":return e(Pe,{value:r.value,onUpdateValue:t=>{r.value=t}},null);default:return null}},o=j(V),u=S(()=>o.viewport.value.mobile?1:2);return()=>{const{title:s,options:t,description:d}=a,n=e(x,null,[e(c,{label:s},{default:()=>[d?e(D,{vertical:!0},{default:()=>[l(),e(O,{class:"text-xs",depth:3},T(d)?d:{default:()=>[d]})]}):l()]})]);return t.halfGrid&&u.value===2?e("div",{class:"w-1/2 inline-block"},[n]):n}}}),Xe="mt-6",Qe={class:Xe,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},$={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},Ye=b(()=>{const{setHeaderButtons:a}=ce();q(()=>{a(e(R,{disabled:!0,onClick:s,icon:e(_,null,null)},null))}),me(()=>{a(null)});const r=p();J(async()=>{r.value=await g.api.config.jsonschema.get({transform:!1}),await t()});let l={};const o=I({}),u=p({});N(()=>o,i=>{u.value=W(l,fe(i))},{deep:!0}),N(()=>u.value,i=>{let m=!1;P(i)?m=!1:m=!0,a(e(R,{disabled:!m,icon:e(_,null,null),onClick:s},null))});async function s(){if(P(u.value))return;const i=Object.entries(u.value);for await(const[m,f]of i){const v=Object.fromEntries(Object.entries(f).map(([A,K])=>Array.isArray(K)?[A,o[m][A]]:[A,K]));await g.api.options(m).patch({data:v})}await t(),message.success("\u4FEE\u6539\u6210\u529F")}const t=async()=>{let i=await g.api.options.get();i=pe(r.value.default,i),l=ee(i),Object.assign(o,i)},d=j(V),n=I(Qe);return N(()=>d.viewport.value.mobile,i=>{i?(n.labelPlacement="top",n.labelAlign="left"):(n.labelPlacement="left",n.labelAlign="right")},{immediate:!0}),()=>e(x,null,[e("div",{class:"pt-4"},null),r.value&&e(Je,{initialValue:o,getKey:i=>i.split(".").map(m=>Be(m)).join(".").replace("Dto",""),schema:r.value},null)])}),Ze=b(()=>()=>e(x,null,[e("div",{class:"pt-4"},null),e(Y,{defaultExpandedNames:["reset"],displayDirective:"show"},{default:()=>[e(E,{name:"reset",title:"\u4FEE\u6539\u5BC6\u7801"},{default:()=>[e(aa,null,null)]}),e(E,{name:"token",title:"API Token"},{default:()=>[e(ea,null,null)]})]})])),ea=b(()=>{const a=p([]),r=()=>({name:"",expired:!1,expiredTime:new Date}),l=I(r()),o=async()=>{const{data:n}=await g.api.auth.token.get();a.value=n};J(()=>{o()});const u=p(!1),s=async()=>{const n={name:l.name,expired:l.expired?l.expiredTime.toISOString():void 0},i=await g.api.auth.token.post({data:n});await navigator.clipboard.writeText(i.token),u.value=!1;const m=r();for(const v in m)l[v]=m[v];message.success(`\u751F\u6210\u6210\u529F, Token \u5DF2\u590D\u5236, ${i.token}`),await o();const f=a.value.findIndex(v=>v.name===n.name);f!==-1&&(a.value[f].token=i.token)},t=async n=>{await g.api.auth.token.delete({params:{id:n}}),message.success("\u5220\u9664\u6210\u529F");const i=a.value.findIndex(m=>m.id===n);i!=-1&&a.value.splice(i,1)},d=j(V);return()=>e(we,{class:"!overflow-visible"},{default:()=>[e(ve,{transformOrigin:"center",show:u.value,onUpdateShow:n=>void(u.value=n)},{default:()=>[e(ye,{bordered:!1,title:"\u521B\u5EFA Token",class:"max-w-full w-[500px]"},{default:()=>[e(C,null,{default:()=>[e(c,{label:"\u540D\u79F0",required:!0},{default:()=>[e(y,{value:l.name,onInput:n=>void(l.name=n)},null)]}),e(c,{label:"\u662F\u5426\u8FC7\u671F"},{default:()=>[e(Z,{value:l.expired,onUpdateValue:n=>void(l.expired=n)},null)]}),e(c,{label:"\u8FC7\u671F\u65F6\u95F4"},{default:()=>[e(Ae,{disabled:!l.expired,value:l.expiredTime,type:"datetime",onUpdateValue:n=>void(l.expiredTime=new Date(n))},null)]})]}),e(D,null,{default:()=>[e(w,{round:!0,onClick:()=>void(u.value=!1)},{default:()=>[h("\u53D6\u6D88")]}),e(w,{round:!0,type:"primary",onClick:s},{default:()=>[h("\u786E\u5B9A")]})]})]})]}),e(w,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{u.value=!0}},{default:()=>[e(be,null,{default:()=>[e(ge,null,null)]}),e("span",{class:"ml-2"},[h("\u65B0\u589E")])]}),e(Fe,{scrollX:Math.max(800,d.contentWidth.value-d.contentInsetWidth.value),remote:!0,bordered:!1,data:a.value,columns:[{key:"name",title:"\u540D\u79F0"},{key:"token",title:"Token",render({token:n}){return n??"*".repeat(40)}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created",render({created:n}){return e(Q,{time:n},null)}},{title:"\u8FC7\u671F\u65F6\u95F4",key:"expired",render({expired:n}){return he(n,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}},{title:"\u64CD\u4F5C",key:"id",render({id:n,name:i}){return e(D,null,{default:()=>[e(Ue,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{t(n)}},{trigger:()=>e(w,{text:!0,type:"error"},{default:()=>[h("\u5220\u9664")]}),default:()=>e("span",{class:"max-w-48"},[h('\u786E\u5B9A\u8981\u5220\u9664 Token "'),i,h('"?')])})]})}}]},null)]})}),aa=b(()=>{const a=I({password:"",reenteredPassword:""}),r=p(),l=X(),o=async()=>{!r.value||r.value.validate(async s=>{s?console.log(s):(await g.api.master.patch({data:{password:a.password}}),message.success("\u66F4\u6539\u6210\u529F"),Ne(),l.push({name:xe.Login}))})};function u(s,t){return console.log(s),t===a.password}return()=>e(C,{class:"max-w-[300px]",ref:r,model:a,rules:{password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:u,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]}},{default:()=>[e(c,{label:"\u65B0\u5BC6\u7801",required:!0,path:"password"},{default:()=>[e(y,L($,{value:a.password,onInput:s=>void(a.password=s),type:"password"}),null)]}),e(c,{label:"\u91CD\u590D\u5BC6\u7801",required:!0,path:"reenteredPassword"},{default:()=>[e(y,L($,{value:a.reenteredPassword,onInput:s=>void(a.reenteredPassword=s),type:"password"}),null)]}),e("div",{class:"w-full text-right"},[e(w,{onClick:o,type:"primary",round:!0},{default:()=>[h("\u4FDD\u5B58")]})])]})}),ta=b({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1}},setup(a){const r=P(a.value)?null:a.value,l=p([]);return q(()=>{if(r&&a.value){const o=Object.entries(a.value).map(([u,s])=>({key:u,value:s.toString()}));l.value=o}}),N(()=>l.value,o=>{const u=o.reduce((s,t)=>(t.key===""&&t.value===""||(s[t.key]=t.value.toString()),s),{});a.onChange(u)},{deep:!0}),()=>e(Ee,{value:l.value,onUpdateValue:o=>{l.value=(()=>{const u=o.findIndex(s=>s===null);return u!==-1&&o.splice(u,1,{key:"",value:""}),o})()}},{default(o){return e("div",{class:"flex items-center w-full"},[e(qe,{class:"mr-4",filterable:!0,tag:!0,placeholder:"\u8BF7\u9009\u62E9",value:o.value.key,onUpdateValue:u=>{o.value.key=u},options:a.options},null),e(y,{value:o.value.value.toString(),onUpdateValue:u=>{o.value.value=u}},null)])}})}}),H={GitHub:"github",Weibo:"weibo",\u7F51\u6613\u4E91:"netease",\u54D4\u54E9\u54D4\u54E9:"bilibili"},la="_avatar_7rrjr_3";var G={"tab-user":"_tab-user_7rrjr_1",avatar:la};const na=b(()=>{const a=p({});let r;async function l(){const t=await g.api.master.get();a.value=t,r={...t}}q(async()=>{await l()});const o=Se(),u=S(()=>W(r,a.value)),s=async()=>{const t=ee(Te(u));t.socialIds&&(t.socialIds=a.value.socialIds),await g.api.master.patch({data:t}),o.success("\u4FDD\u5B58\u6210\u529F~"),await l()};return()=>e(x,null,[e(ke,{cols:"1 400:1 600:2",class:G["tab-user"],xGap:20,yGap:20},{default:()=>[e(M,null,{default:()=>[e(C,{class:"flex flex-col justify-center items-center "},{default:()=>[e(c,null,{default:()=>[e("div",{class:G.avatar},[e(Ke,{type:"avatar",onFinish:t=>{const{file:d,event:n}=t;try{const i=JSON.parse((n?.target).responseText);a.value.avatar=i.url}catch{}return d}},{default:()=>[e(Le,{class:"border-0 bg-transparent hover:border-0"},{default:()=>[e(Ie,{class:"flex",src:a.value.avatar,size:200},null)]})]})])]}),e(c,{label:"\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4",class:"!mt-4"},{default:()=>[e("div",{class:"text-center w-full"},[e(O,null,{default:()=>[a.value.lastLoginTime?e(Q,{time:a.value.lastLoginTime},null):"N/A"]})])]}),e(c,{label:"\u4E0A\u6B21\u767B\u5F55\u5730\u5740"},{default:()=>[e("div",{class:"text-center w-full"},[a.value.lastLoginIp?e(Ce,{trigger:"hover",ip:a.value.lastLoginIp,triggerEl:e(O,{class:"cursor-pointer"},{default:()=>[a.value.lastLoginIp]})},null):"N/A"])]}),e(c,null,{default:()=>[e(w,{round:!0,class:"-mt-14",type:"primary",onClick:s,disabled:P(u.value)},{default:()=>[h("\u4FDD\u5B58")]})]})]})]}),e(M,null,{default:()=>[e(C,null,{default:()=>[e(c,{label:"\u4E3B\u4EBA\u540D (username)"},{default:()=>[e(y,{value:a.value.username,onInput:t=>{a.value.username=t?.trim()||""}},null)]}),e(c,{label:"\u4E3B\u4EBA\u6635\u79F0 (name)"},{default:()=>[e(y,{value:a.value.name,onInput:t=>{a.value.name=t?.trim()||""}},null)]}),e(c,{label:"\u4E3B\u4EBA\u90AE\u7BB1 (mail)"},{default:()=>[e(y,{value:a.value.mail,onInput:t=>{a.value.mail=t}},null)]}),e(c,{label:"\u4E2A\u4EBA\u9996\u9875"},{default:()=>[e(y,{value:a.value.url,onInput:t=>{a.value.url=t}},null)]}),e(c,{label:"\u5934\u50CF"},{default:()=>[e(y,{value:a.value.avatar,onInput:t=>{a.value.avatar=t}},null)]}),e(c,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},{default:()=>[e(y,{type:"textarea",resizable:!1,value:a.value.introduce,onInput:t=>{a.value.introduce=t}},null)]}),e(c,{label:"\u793E\u4EA4\u5E73\u53F0 ID \u5F55\u5165"},{default:()=>[a.value.socialIds?e(ta,{options:Object.keys(H).map(t=>({label:t,value:H[t]})),onChange:t=>{a.value.socialIds=t},value:a.value.socialIds||{}},null):null]})]})]})]})])});var k;(function(a){a.User="user",a.System="system",a.Security="security"})(k||(k={}));var Ka=b({setup(){const a=De(),r=X(),l=p(a.params.type);N(()=>a.params.type,u=>{!u||(l.value=u)});const o=p(null);return()=>e(Oe,{actionsElement:o.value},{default:()=>[e(Me,{value:l.value,onUpdateValue:u=>{r.replace({...a,params:{...a.params,type:u}})}},{default:()=>[e(U,{tab:"\u7528\u6237",name:k.User},{default:()=>[e(na,null,null)]}),e(U,{tab:"\u7CFB\u7EDF",name:k.System},{default:()=>[e(Ye,null,null)]}),e(U,{tab:"\u5B89\u5168",name:k.Security},{default:()=>[e(Ze,null,null)]})]})]})}});export{Ka as default};
