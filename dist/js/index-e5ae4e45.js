import{f,H as r,m as x,a as e,bP as b,bR as N,bV as y,b as m,N as c,R as p,F as k,ep as T,O as C,e as v,j as L,n as R,E as S,C as M}from"./index-23675994.js";import{X as w}from"./index-45d79016.js";import{N as U,a as V}from"./ListItem-184441c7.js";import{N as D}from"./Select-96fa6219.js";import{u as E}from"./use-react-b6888cd4.js";import{socket as i}from"./index-64ae9b0c.js";import{E as h}from"./types-4fa065e6.js";import{N as F,a as g}from"./Tabs-69d54e13.js";import"./Tag-cf0fa0d0.js";import"./index-d0540b84.js";import"./Add-17a04330.js";import"./throttle-d4ef57ab.js";const O=f({setup(){const s=r([]),l=r(!1),n=async()=>{l.value=!0;const{data:t}=await p.api.health.log.list(a.value).get();s.value=t,l.value=!1};x(()=>{n()});const o=r(""),u=r(!1),a=r("native");return()=>e(k,null,[e(b,{transformOrigin:"center",show:u.value,onUpdateShow:t=>void(u.value=t)},{default:()=>[e(N,{title:"\u67E5\u770B\u65E5\u5FD7",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{u.value=!1}},{default:()=>[e(B,{data:o.value},null)]})]}),e(y,{show:l.value},{default:()=>[e(U,{class:"min-h-[300px] bg-transparent"},{header(){return e(D,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,n()},options:[{label:"PM2",value:"pm2"},{label:"\u7CFB\u7EDF\u8BB0\u5F55",value:"native"}]},null)},default(){return s.value.map(t=>e(V,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},[e("span",null,[t.filename]),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},[e("span",null,[t.size]),e("span",null,[m("\u7C7B\u578B\uFF1A"),t.type])])])},suffix(){return e("div",{class:"flex space-x-2"},[e(c,{ghost:!0,type:"success",onClick:()=>{p.api.health.log(a.value).get({params:{filename:t.filename}}).then(d=>{o.value=d,u.value=!0})}},{default:()=>[m("\u67E5\u770B")]}),e(c,{ghost:!0,type:"error",onClick:()=>{p.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(d=>d.filename===t.filename),1)})}},{default:()=>[m("\u5220\u9664")]})])}}))}})]})])}}),B=f({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return x(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},[l.value?e("div",{class:"w-full flex items-center justify-center h-full"},[e(y,{show:!0,strokeWidth:14},null)]):e(w,{class:"h-full w-full max-h-full",onReady:n=>{n.write(s.data)}},null)])}}),P=f({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l;const n=[],o=a=>{l?(n.length>0&&u(l),l.write(a)):n.push(a)},u=a=>{for(;n.length;){const t=n.shift();a.write(t)}};return T(()=>{s(),v.on(h.STDOUT,o)}),E(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),C(()=>{i.socket.emit("unlog"),v.off(h.STDOUT,o)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,u(l)}},null)}});var K=f({setup(){const s=L(),l=R(()=>s.query.tab?.toString()||"0"),n=S();return()=>e(M,null,{default:()=>[e(F,{size:"medium",value:l.value,onUpdateValue:o=>{n.replace({...s,query:{...s.query,tab:o}})}},{default:()=>[e(g,{tab:"\u65E5\u5FD7",name:"0"},{default:()=>[e(O,null,null)]}),e(g,{tab:"\u5B9E\u65F6",name:"1"},{default:()=>[e(P,null,null)]})]})]})}});export{K as default};
