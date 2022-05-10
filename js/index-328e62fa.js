import{d as g,x as F,h as e,a4 as _,dt as Z,du as N,dv as ee,c1 as ae,k as S,H as ue,dw as te,w as I,j as z,l as q,m as T,dx as U,z as n,a as P,bY as h,F as V,R as w,U as H,bk as le,cE as oe,J as se,N as A,I as ne,cx as ie,bU as re,bX as pe,dy as de,v as W,dz as me,bl as ce,u as ve,dA as be,cX as fe,cr as Ee,i as Fe,n as Be}from"./index-62e99b2b.js";import{R as X}from"./relative-time-89b7617b.js";import{H as L}from"./rounded-button-92024ad7.js";import{d as $}from"./index-0e9a8d87.js";import{a as ye,f as we,N as l}from"./FormItem-382dc1be.js";import{_ as G}from"./CheckCircleOutlined-65502d0a.js";import{i as k}from"./isEmpty-ca01511a.js";import{b as ge,o as Oe}from"./omit-28332d77.js";import{N as Y,a as b,b as Ae}from"./DynamicInput-3156cdca.js";import{N as v}from"./Form-1ff87b42.js";import{N as C}from"./DynamicTags-c8c771b1.js";import{N as E}from"./Switch-065eb892.js";import{N as Ie}from"./InputNumber-0c8da4e8.js";import{a as he}from"./DataTable-30fbd207.js";import{N as ke}from"./Popconfirm-5f4696a2.js";import{N as xe}from"./DatePicker-27ef0630.js";import{N as Ce}from"./Select-5a24a54a.js";import{N as De,a as D}from"./Tabs-29728639.js";import"./transform-c17dbe41.js";import"./_arrayEach-2ff48152.js";import"./index-17f9ebb1.js";import"./ChevronRight-9f5971e6.js";import"./Add-ff98d4f7.js";import"./ButtonGroup-b7bd8604.js";import"./Tag-ce864d2c.js";import"./Icon-aa605da4.js";import"./Forward-91b8e448.js";import"./Tooltip-b6bacdce.js";import"./throttle-cdd5b52c.js";var Ne=1,Se=4;function J(t){return ge(t,Ne|Se)}const Ue=Object.assign(Object.assign({},ee),ye);var y=g({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:Ue,setup(){const t=F(null);return{formItemInstRef:t,validate:(...d)=>{const{value:s}=t;if(s)return s.validate(...d)},restoreValidation:()=>{const{value:d}=t;if(d)return d.restoreValidation()}}},render(){return e(N,_(this.$.vnode.props||{},Z),{default:()=>{const t=_(this.$props,we);return e(l,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}});const Pe="mt-6",Te={class:Pe,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},c={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},Ve=g(()=>{const{setHeaderButtons:t}=ae();S(()=>{t(e(L,{disabled:!0,onClick:s,icon:e(G,null)}))}),ue(()=>{t(null)});let m={};const a=F(R({})),d=F({});I(()=>a.value,u=>{d.value=$(m,le(u))},{deep:!0}),I(()=>d.value,u=>{let B=!1;k(u)?B=!1:B=!0,t(e(L,{disabled:!B,icon:e(G,null),onClick:s}))});async function s(){if(k(d.value))return;const u=Object.entries(d.value);for await(const[B,O]of u){const Q=Object.fromEntries(Object.entries(O).map(([x,K])=>Array.isArray(K)?[x,a.value[B][x]]:[x,K]));await w.api.options(B).patch({data:Q})}await i(),message.success("\u4FEE\u6539\u6210\u529F")}const i=async()=>{let u=await w.api.options.get();u=R(Oe(u,["ok"])),m=J(u),a.value=u};S(()=>{i()});const o=F(["website"]),f=z(H),r=q(()=>f.viewport.value.mobile?1:2),p=T(Te);return I(()=>f.viewport.value.mobile,u=>{u?(p.labelPlacement="top",p.labelAlign="left"):(p.labelPlacement="left",p.labelAlign="right")},{immediate:!0}),()=>e(V,null,e("div",{class:"pt-4"}),e(Y,{accordion:!0,displayDirective:"if",expandedNames:o.value,onUpdateExpandedNames:u=>{o.value=u}},e(b,{title:"\u7F51\u7AD9\u8BBE\u7F6E",name:"website"},e(v,{...p},e(U,{cols:r.value,xGap:12},e(y,{span:1,label:"\u524D\u7AEF\u5730\u5740"},e(n,{value:a.value.url.webUrl,onInput:u=>void(a.value.url.webUrl=u)})),e(y,{span:1,label:"API \u5730\u5740"},e(n,{value:a.value.url.serverUrl,onInput:u=>void(a.value.url.serverUrl=u)})),e(y,{span:1,label:"\u540E\u53F0\u5730\u5740"},e(n,{value:a.value.url.adminUrl,onInput:u=>void(a.value.url.adminUrl=u)})),e(y,{span:1,label:"Gateway \u5730\u5740"},e(n,{value:a.value.url.wsUrl,onInput:u=>void(a.value.url.wsUrl=u)}))))),e(b,{title:"SEO \u4F18\u5316",name:"seo"},e(v,{...p},e(l,{label:"\u7F51\u7AD9\u6807\u9898"},e(n,{...c,value:a.value.seo.title,onInput:u=>void(a.value.seo.title=u)})),e(l,{label:"\u7F51\u7AD9\u63CF\u8FF0"},e(n,{...c,value:a.value.seo.description,onInput:u=>void(a.value.seo.description=u)})),e(l,{label:"\u5173\u952E\u5B57"},e(C,{round:!0,type:"primary",value:a.value.seo.keywords,onUpdateValue:u=>void(a.value.seo.keywords=u)})))),e(b,{title:"\u540E\u53F0\u9644\u52A0\u8BBE\u7F6E",name:"adminExtra"},e(v,{...p},e(l,{label:"\u5F00\u542F\u540E\u53F0\u7BA1\u7406\u53CD\u4EE3"},e(E,{value:a.value.adminExtra.enableAdminProxy,onUpdateValue:u=>void(a.value.adminExtra.enableAdminProxy=u)})),e(l,{label:"\u4E2D\u540E\u53F0\u6807\u9898"},e(n,{...c,value:a.value.adminExtra.title,onUpdateValue:u=>void(a.value.adminExtra.title=u)})),e(l,{label:"\u767B\u5F55\u9875\u9762\u80CC\u666F"},e(n,{...c,value:a.value.adminExtra.background,inputProps:{autocomplete:"off"},onUpdateValue:u=>void(a.value.adminExtra.background=u)})),e(l,{label:"\u9AD8\u5FB7\u67E5\u8BE2 API Key"},e(n,{...c,value:a.value.adminExtra.gaodemapKey,type:"password",showPasswordOn:"click",clearable:!0,inputProps:{autocomplete:"off"},onUpdateValue:u=>{a.value.adminExtra.gaodemapKey=u}})))),e(b,{title:"\u6587\u672C\u8BBE\u7F6E",name:"text"},e(v,{...p},e(l,{label:"\u6587\u672C\u5B8F\u66FF\u6362"},e(E,{value:a.value.textOptions.macros,onUpdateValue:u=>void(a.value.textOptions.macros=u)})))),e(b,{title:"\u8BC4\u8BBA\u8BBE\u7F6E",name:"comment"},e(v,{...p},e(l,{label:"\u53CD\u5783\u573E\u8BC4\u8BBA"},e(E,{value:a.value.commentOptions.antiSpam,onUpdateValue:u=>void(a.value.commentOptions.antiSpam=u)})),e(l,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D\u5173\u952E\u8BCD"},e(C,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.spamKeywords,onUpdateValue:u=>void(a.value.commentOptions.spamKeywords=u),type:"primary"})),e(l,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D IP"},e(C,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.blockIps,onUpdateValue:u=>void(a.value.commentOptions.blockIps=u),type:"primary"})),e(l,{label:"\u7981\u6B62\u975E\u4E2D\u6587\u8BC4\u8BBA"},e(E,{value:a.value.commentOptions.disableNoChinese,onUpdateValue:u=>void(a.value.commentOptions.disableNoChinese=u)})))),e(b,{title:"\u53CB\u94FE\u8BBE\u7F6E",name:"friendLink"},e(v,{...p},e(l,{label:"\u662F\u5426\u5141\u8BB8\u7533\u8BF7\u53CB\u94FE"},e(E,{value:a.value.friendLinkOptions.allowApply,onUpdateValue:u=>void(a.value.friendLinkOptions.allowApply=u)})))),e(b,{title:"\u90AE\u4EF6\u901A\u77E5\u8BBE\u7F6E",name:"mail"},e(v,{...p},e(l,{label:"\u5F00\u542F\u90AE\u7BB1\u63D0\u9192"},e(E,{value:a.value.mailOptions.enable,onUpdateValue:u=>void(a.value.mailOptions.enable=u)})),e(U,{cols:r.value,xGap:12},e(y,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1 host"},e(n,{value:a.value.mailOptions.options?.host||"",onInput:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.host=u}})),e(y,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u7AEF\u53E3"},e(Ie,{value:a.value.mailOptions.options?.port||465,onUpdateValue:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.port=u??465}})),e(y,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5730\u5740"},e(n,{value:a.value.mailOptions.user,onInput:u=>void(a.value.mailOptions.user=u)})),e(y,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5BC6\u7801"},e(n,{type:"password",showPasswordOn:"click",inputProps:{name:"email-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},value:a.value.mailOptions.pass,onInput:u=>void(a.value.mailOptions.pass=u)}))))),e(b,{name:"backup",title:"\u5907\u4EFD"},e(v,{...p},e(l,{label:"\u5F00\u542F\u81EA\u52A8\u5907\u4EFD"},e(P,{vertical:!0},e(E,{value:a.value.backupOptions.enable,onUpdateValue:u=>void(a.value.backupOptions.enable=u)}),e(h,{class:"text-xs",depth:3},"\u586B\u5199\u4EE5\u4E0B COS \u4FE1\u606F, \u5C06\u540C\u65F6\u4E0A\u4F20\u5907\u4EFD\u5230 COS"))),e(l,{label:"\u5730\u57DF Region"},e(n,{...c,value:a.value.backupOptions.region,onInput:u=>void(a.value.backupOptions.region=u)})),e(l,{label:"SecretId"},e(n,{...c,value:a.value.backupOptions.secretId,onInput:u=>void(a.value.backupOptions.secretId=u)})),e(l,{label:"SecretKey"},e(n,{...c,type:"password",inputProps:{name:"secret-key-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},showPasswordOn:"click",value:a.value.backupOptions.secretKey,onInput:u=>void(a.value.backupOptions.secretKey=u)})))),e(b,{name:"baidu_push",title:"\u767E\u5EA6\u63A8\u9001"},e(v,{...p},e(l,{label:"\u5F00\u542F\u63A8\u9001"},e(E,{value:a.value.baiduSearchOptions.enable,onUpdateValue:u=>void(a.value.baiduSearchOptions.enable=u)})),e(l,{label:"Token",path:"baidu_push"},e(n,{...c,showPasswordOn:"click",type:"password",inputProps:{name:"baidu-push-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},disabled:!a.value.baiduSearchOptions.enable,value:a.value.baiduSearchOptions.token,onUpdateValue:u=>void(a.value.baiduSearchOptions.token=u)})))),e(b,{name:"algolia",title:"Algolia Search"},e(v,{...p},e(l,{label:"\u5F00\u542F Algolia Search"},e(E,{value:a.value.algoliaSearchOptions.enable,onUpdateValue:u=>void(a.value.algoliaSearchOptions.enable=u)})),e(l,{label:"AppId"},e(n,{...c,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.appId,onInput:u=>void(a.value.algoliaSearchOptions.appId=u)})),e(l,{label:"apiKey"},e(n,{...c,type:"password",disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.apiKey,onInput:u=>void(a.value.algoliaSearchOptions.apiKey=u)})),e(l,{label:"indexName"},e(n,{...c,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.indexName,onInput:u=>void(a.value.algoliaSearchOptions.indexName=u)})))),e(b,{name:"terminal",title:"\u7EC8\u7AEF\u8BBE\u5B9A"},e(v,{...p},e(l,{label:"\u5F00\u542F WebShell"},e(E,{value:a.value.terminalOptions.enable,onUpdateValue:u=>void(a.value.terminalOptions.enable=u)})),e(l,{label:"\u8BBE\u5B9A\u5BC6\u7801"},e(n,{...c,value:a.value.terminalOptions.password,showPasswordOn:"click",type:"password",inputProps:{name:"xterm-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},onUpdateValue:u=>void(a.value.terminalOptions.password=u)}),e(h,{class:"ml-4 text-xs",depth:3},"\u5BC6\u7801\u4E3A\u7A7A\u5219\u4E0D\u542F\u7528\u5BC6\u7801\u9A8C\u8BC1")),e(l,{label:"\u9884\u5148\u6267\u884C\u547D\u4EE4"},e(n,{type:"textarea",autosize:{minRows:4},value:a.value.terminalOptions.script,onUpdateValue:u=>void(a.value.terminalOptions.script=u)}))))),e(h,{class:"ml-4 mt-8 text-xs inline-block",depth:3},"* \u654F\u611F\u5B57\u6BB5\u4E0D\u663E\u793A\uFF0C\u540E\u7AEF\u9ED8\u8BA4\u4E0D\u8FD4\u56DE\u654F\u611F\u5B57\u6BB5\uFF0C\u663E\u793A\u4E3A\u7A7A"))});function R(t){return te({seo:{title:"",description:"",keywords:[]},url:{wsUrl:"",adminUrl:"",serverUrl:"",webUrl:""},mailOptions:{user:"",pass:"",options:{host:"",port:465},enable:!1},commentOptions:{antiSpam:!1,spamKeywords:[],blockIps:[],disableNoChinese:!1},backupOptions:{enable:!1,secretId:"",secretKey:"",bucket:"",region:""},baiduSearchOptions:{enable:!1,token:""},algoliaSearchOptions:{enable:!1},adminExtra:{enableAdminProxy:!1,background:"",gaodemapKey:"",title:"\u9759\u304B\u306A\u68EE"},terminalOptions:{enable:!1,script:""},friendLinkOptions:{allowApply:!0},textOptions:{macros:!1}},t)}const Ke=g(()=>()=>e(V,null,e("div",{class:"pt-4"}),e(Y,{defaultExpandedNames:["reset"],displayDirective:"if"},e(b,{name:"reset",title:"\u4FEE\u6539\u5BC6\u7801"},e(Le,null)),e(b,{name:"token",title:"API Token"},e(_e,null))))),_e=g(()=>{const t=F([]),m=()=>({name:"",expired:!1,expiredTime:new Date}),a=T(m()),d=async()=>{const{data:r}=await w.api.auth.token.get();t.value=r};oe(()=>{d()});const s=F(!1),i=async()=>{const r={name:a.name,expired:a.expired?a.expiredTime.toISOString():void 0},p=await w.api.auth.token.post({data:r});await navigator.clipboard.writeText(p.token),s.value=!1;const u=m();for(const O in u)a[O]=u[O];message.success("\u751F\u6210\u6210\u529F, Token \u5DF2\u590D\u5236, "+p.token),await d();const B=t.value.findIndex(O=>O.name===r.name);B!==-1&&(t.value[B].token=p.token)},o=async r=>{await w.api.auth.token.delete({params:{id:r}}),message.success("\u5220\u9664\u6210\u529F");const p=t.value.findIndex(u=>u.id===r);p!=-1&&t.value.splice(p,1)},f=z(H);return()=>e(de,{class:"!overflow-visible"},e(re,{transformOrigin:"center",show:s.value,onUpdateShow:r=>void(s.value=r)},e(pe,{bordered:!1,title:"\u521B\u5EFA Token",class:"max-w-full w-[500px]"},e(v,null,e(l,{label:"\u540D\u79F0",required:!0},e(n,{value:a.name,onInput:r=>void(a.name=r)})),e(l,{label:"\u662F\u5426\u8FC7\u671F"},e(E,{value:a.expired,onUpdateValue:r=>void(a.expired=r)})),e(l,{label:"\u8FC7\u671F\u65F6\u95F4"},e(xe,{disabled:!a.expired,value:a.expiredTime,type:"datetime",onUpdateValue:r=>void(a.expiredTime=new Date(r))}))),e(P,null,e(A,{round:!0,onClick:()=>void(s.value=!1)},"\u53D6\u6D88"),e(A,{round:!0,type:"primary",onClick:i},"\u786E\u5B9A")))),e(A,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{s.value=!0}},e(ne,null,e(ie,null)),e("span",{class:"ml-2"},"\u65B0\u589E")),e(he,{scrollX:Math.max(800,f.contentWidth.value-f.contentInsetWidth.value),remote:!0,bordered:!1,data:t.value,columns:[{key:"name",title:"\u540D\u79F0"},{key:"token",title:"Token",render({token:r}){return r??"*".repeat(40)}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created",render({created:r}){return e(X,{time:r})}},{title:"\u8FC7\u671F\u65F6\u95F4",key:"expired",render({expired:r}){return se(r,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}},{title:"\u64CD\u4F5C",key:"id",render({id:r,name:p}){return e(P,null,e(ke,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{o(r)}},{trigger:()=>e(A,{text:!0,type:"error"},"\u5220\u9664"),default:()=>e("span",{class:"max-w-48"},'\u786E\u5B9A\u8981\u5220\u9664 Token "',p,'"?')}))}}]}))}),Le=g(()=>{const t=T({password:"",reenteredPassword:""}),m=F(),a=W(),d=async()=>{!m.value||m.value.validate(async i=>{i?console.log(i):(await w.api.master.patch({data:{password:t.password}}),message.success("\u66F4\u6539\u6210\u529F"),me(),a.push({name:ce.Login}))})};function s(i,o){return console.log(i),o===t.password}return()=>e(v,{class:"max-w-[300px]",ref:m,model:t,rules:{password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:s,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]}},e(l,{label:"\u65B0\u5BC6\u7801",required:!0,path:"password"},e(n,{...c,value:t.password,onInput:i=>void(t.password=i),type:"password"})),e(l,{label:"\u91CD\u590D\u5BC6\u7801",required:!0,path:"reenteredPassword"},e(n,{...c,value:t.reenteredPassword,onInput:i=>void(t.reenteredPassword=i),type:"password"})),e("div",{class:"w-full text-right"},e(A,{onClick:d,type:"primary",round:!0},"\u4FDD\u5B58")))}),Ge=g({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1}},setup(t){let m=k(t.value)?null:t.value;const a=I(()=>t.value,s=>{if(!m&&s){const i=Object.entries(s).map(([o,f])=>({key:o,value:f.toString()}));d.value=i,a()}}),d=F([]);return I(()=>d.value,s=>{const i=s.reduce((o,f)=>(f.key===""&&f.value===""||(o[f.key]=f.value.toString()),o),{});t.onChange(i)},{deep:!0}),()=>e(Ae,{value:d.value,onUpdateValue:s=>{d.value=(()=>{const i=s.findIndex(o=>o===null);return i!==-1&&s.splice(i,1,{key:"",value:""}),s})()}},{default(s){return e("div",{class:"flex items-center w-full"},e(Ce,{class:"mr-4",filterable:!0,tag:!0,placeholder:"\u8BF7\u9009\u62E9",value:s.value.key,onUpdateValue:i=>{s.value.key=i},options:t.options}),e(n,{value:s.value.value.toString(),onUpdateValue:i=>{s.value.value=i}}))}})}}),j={GitHub:"github",Weibo:"weibo",\u7F51\u6613\u4E91:"netease",\u54D4\u54E9\u54D4\u54E9:"bilibili"},Re="_avatar_7rrjr_3";var M={"tab-user":"_tab-user_7rrjr_1",avatar:Re};const je=g(()=>{const t=F({});let m;async function a(){const o=await w.api.master.get();t.value=o,m={...o}}S(async()=>{await a()});const d=ve(),s=q(()=>$(m,t.value)),i=async()=>{const o=J(Ee(s));o.socialIds&&(o.socialIds=t.value.socialIds),await w.api.master.patch({data:o}),d.success("\u4FDD\u5B58\u6210\u529F~"),await a()};return()=>e(V,null,e(U,{cols:"1 400:1 600:2",class:M["tab-user"],xGap:20,yGap:20},e(N,null,e(v,{class:"flex flex-col justify-center items-center "},e(l,null,e("div",{class:M.avatar},e(be,{src:t.value.avatar,size:200}))),e(l,{label:"\u4E0A\u6B21\u767B\u9646\u65F6\u95F4",class:"!mt-4"},e("div",{class:"text-center w-full"},e(h,null,t.value.lastLoginTime?e(X,{time:t.value.lastLoginTime}):"N/A"))),e(l,{label:"\u4E0A\u6B21\u767B\u9646\u5730\u5740"},e("div",{class:"text-center w-full"},t.value.lastLoginIp?e(fe,{trigger:"hover",ip:t.value.lastLoginIp,triggerEl:e(h,{class:"cursor-pointer"},t.value.lastLoginIp)}):"N/A")),e(l,null,e(A,{round:!0,class:"-mt-14",type:"primary",onClick:i,disabled:k(s.value)},"\u4FDD\u5B58")))),e(N,null,e(v,null,e(l,{label:"\u4E3B\u4EBA\u540D (username)"},e(n,{value:t.value.username,onInput:o=>{t.value.username=o?.trim()||""}})),e(l,{label:"\u4E3B\u4EBA\u6635\u79F0 (name)"},e(n,{value:t.value.name,onInput:o=>{t.value.name=o?.trim()||""}})),e(l,{label:"\u4E3B\u4EBA\u90AE\u7BB1 (mail)"},e(n,{value:t.value.mail,onInput:o=>{t.value.mail=o}})),e(l,{label:"\u4E2A\u4EBA\u9996\u9875"},e(n,{value:t.value.url,onInput:o=>{t.value.url=o}})),e(l,{label:"\u5934\u50CF"},e(n,{value:t.value.avatar,onInput:o=>{t.value.avatar=o}})),e(l,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(n,{type:"textarea",resizable:!1,value:t.value.introduce,onInput:o=>{t.value.introduce=o}})),e(l,{label:"\u793E\u4EA4\u5E73\u53F0 ID \u5F55\u5165"},e(Ge,{options:Object.keys(j).map(o=>({label:o,value:j[o]})),onChange:o=>{t.value.socialIds=o},value:t.value.socialIds||{}}))))))});var Fa=g({setup(){const t=Fe(),m=W(),a=F(t.params.type);I(()=>t.params.type,s=>{!s||(a.value=s)});const d=F(null);return()=>e(Be,{actionsElement:d.value},e(De,{value:a.value,onUpdateValue:s=>{m.replace({...t,params:{...t.params,type:s}})}},e(D,{tab:"\u7528\u6237",name:"user"},e(je,null)),e(D,{tab:"\u7CFB\u7EDF",name:"system"},e(Ve,null)),e(D,{tab:"\u5B89\u5168",name:"security"},e(Ke,null))))}});export{Fa as default};
