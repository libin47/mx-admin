import{d as c,m as p,h as e,bV as d,z as i,N as m}from"./index-34956879.js";import{N as g}from"./Form-47c347d0.js";import{N as o}from"./FormItem-57ed67c1.js";import{N as f}from"./Switch-a75934f4.js";import"./index-a311d003.js";var v=c({setup(){const t=p({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),s=()=>{const a=new URL(location.href),{apiUrl:r,gatewayUrl:l,persist:u}=t;r&&a.searchParams.set("__api",r),l&&a.searchParams.set("__gateway",l),u&&(r&&localStorage.setItem("__api",r),l&&localStorage.setItem("__gateway",l)),a.pathname="/",a.hash="",location.href=a.toString()},n=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"};return()=>e("div",{class:"relative h-screen w-full flex items-center justify-center"},e(d,{title:"\u8BBE\u7F6E API",class:"modal-card sm m-auto form-card"},e(g,{onSubmit:s},e(o,{label:"API \u5730\u5740"},e(i,{value:t.apiUrl,onUpdateValue:a=>{t.apiUrl=a}})),e(o,{label:"Gateway \u5730\u5740"},e(i,{value:t.gatewayUrl,onUpdateValue:a=>{t.gatewayUrl=a}})),e(o,{label:"\u6301\u4E45\u5316",labelPlacement:"left"},e(f,{value:t.persist,onUpdateValue:a=>{t.persist=a}})),e("div",{class:"text-center space-x-2"},e(m,{onClick:n,round:!0},"\u91CD\u7F6E"),e(m,{onClick:s,round:!0,type:"primary"},"\u786E\u5B9A")))))}});export{v as default};
