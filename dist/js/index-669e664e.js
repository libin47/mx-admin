import{f as d,eu as f,u as m,H as l,a as e,F as p,C as v,R as g,bP as h,dS as u}from"./index-d885f019.js";import{H as _}from"./rounded-button-6475331c.js";import{d as S,F as y}from"./index-bd4ccf3d.js";import{T}from"./two-col-e2cc9386.js";import{_ as b}from"./CheckCircleOutlined-5d888a89.js";import"./use-async-monaco-6f514289.js";import"./index-e0e88b54.js";import"./editor.main-2c1c7cbd.js";import"./use-save-confirm-0ccf4a04.js";var x=d({setup(){const n=f("debug-serverless",S),i=m(),t=l(),o=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:n.value},errorHandler:a=>{o.value=`Error: ${a.data.message}`,i.error(a.data.message)}});h(()=>import("./editor.main-2c1c7cbd.js").then(function(a){return a.e}),["js/editor.main-2c1c7cbd.js","assets/editor.main.ee7faf0c.css","js/index-d885f019.js","assets/index.4da12079.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(v,{actionsElement:e(p,null,[e(_,{icon:e(b,null,null),onClick:s},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(y,{value:n,onSave:s},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[o.value])]})]})]})}});export{x as default};
