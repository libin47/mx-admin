import{f as S,p as h,a,bR as w,N as s,b as i}from"./index-23675994.js";import{N as U}from"./Form-803b561c.js";import{N as c}from"./FormItem-f55390e0.js";import{N as u}from"./Select-96fa6219.js";import{N}from"./Switch-ff645ce9.js";import"./index-c6a5c591.js";import"./Tag-cf0fa0d0.js";const m="mx-admin:setup-api:url",p="mx-admin:setup-api:gateway";var k=S({setup(){const t=h({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),n=()=>{const e=new URL(location.href),{apiUrl:l,gatewayUrl:r,persist:y}=t;l&&e.searchParams.set("__api",l),r&&e.searchParams.set("__gateway",r),y&&(l&&localStorage.setItem("__api",l),r&&localStorage.setItem("__gateway",r)),e.pathname="/",e.hash="",localStorage.setItem(m,JSON.stringify([...new Set(o.concat(l))])),localStorage.setItem(p,JSON.stringify([...new Set(o.concat(r))])),location.href=e.toString()},f=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"},d=()=>{t.apiUrl="http://localhost:2333",t.gatewayUrl="http://localhost:2333"},o=JSON.safeParse(localStorage.getItem(m)||"[]"),g=JSON.safeParse(localStorage.getItem(p)||"[]");return()=>a("div",{class:"relative h-screen w-full flex items-center justify-center"},[a(w,{title:"\u8BBE\u7F6E API",class:"modal-card sm m-auto form-card"},{default:()=>[a(U,{onSubmit:n},{default:()=>[a(c,{label:"API \u5730\u5740"},{default:()=>[a(u,{options:o.map(e=>({key:e,value:e,label:e})),filterable:!0,tag:!0,clearable:!0,value:t.apiUrl,onUpdateValue:e=>{t.apiUrl=e}},null)]}),a(c,{label:"Gateway \u5730\u5740"},{default:()=>[a(u,{tag:!0,options:g.map(e=>({key:e,value:e,label:e})),filterable:!0,clearable:!0,value:t.gatewayUrl,onUpdateValue:e=>{t.gatewayUrl=e}},null)]}),a(c,{label:"\u6301\u4E45\u5316",labelPlacement:"left"},{default:()=>[a(N,{value:t.persist,onUpdateValue:e=>{t.persist=e}},null)]}),a("div",{class:"text-center space-x-2"},[a(s,{onClick:d,round:!0},{default:()=>[i("\u672C\u5730\u8C03\u8BD5")]}),a(s,{onClick:f,round:!0},{default:()=>[i("\u91CD\u7F6E")]}),a(s,{onClick:n,round:!0,type:"primary"},{default:()=>[i("\u786E\u5B9A")]})])]})]})])}});export{k as default};
