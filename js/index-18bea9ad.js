import{f,a as u,E as d,g as c,R as l}from"./index-6c3d0c7c.js";import{a as r}from"./Upload-15c51607.js";const m=f({props:{onFinish:{type:Function},onError:{type:Function},type:{type:String,required:!0}},setup(t,{slots:o}){return()=>{const{onFinish:n,onError:s,type:a,...p}=t;return u(r,d({headers:{authorization:c()||""},showFileList:!1,accept:"image/*",action:`${l.endpoint}/files/upload?type=${a}`,onError:s||(e=>(message.error("\u4E0A\u4F20\u5931\u8D25"),e.file)),onFinish:n},Object.fromEntries(Object.entries(p).filter(([e,i])=>typeof i<"u"))),{default:()=>[o.default?.()]})}}});m.props=[...Array.from(Object.keys(r.props)),"type"];export{m as U};
