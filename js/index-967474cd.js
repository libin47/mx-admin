import{f as d,es as f,u as m,y as l,a as e,C as p,F as v,dP as u,R as g,bZ as h}from"./index-cad930c7.js";import{H as _}from"./rounded-button-ef84e6ea.js";import{d as y,F as S}from"./index-bf944362.js";import{T}from"./two-col-88beebf2.js";import{_ as b}from"./CheckCircleOutlined-64ddab9f.js";import"./use-async-monaco-8074a164.js";import"./index-8cebd1f9.js";import"./editor.main-a7164188.js";import"./use-save-confirm-c2b016cb.js";var x=d({setup(){const n=f("debug-serverless",y),i=m(),t=l(),o=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:n.value},errorHandler:a=>{o.value=`Error: ${a.data.message}`,i.error(a.data.message)}});h(()=>import("./editor.main-a7164188.js").then(function(a){return a.e}),["js/editor.main-a7164188.js","assets/editor.main.339eee99.css","js/index-cad930c7.js","assets/index.80811719.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(p,{actionsElement:e(v,null,[e(_,{icon:e(b,null,null),onClick:s},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(S,{value:n,onSave:s},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[o.value])]})]})]})}});export{x as default};
