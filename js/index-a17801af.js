import{f,y as r,m as x,a as e,b_ as b,c1 as N,c5 as y,b as c,N as p,R as m,F as k,eo as T,K as C,e as v,j as L,n as S,x as M,C as R}from"./index-9c74e798.js";import{X as w}from"./index-6101f3c1.js";import{N as U,a as D}from"./ListItem-b39955e9.js";import{N as F}from"./Select-af5d9eac.js";import{u as V}from"./use-react-c24c6420.js";import{socket as i}from"./index-3af98b15.js";import{E as h}from"./types-4fa065e6.js";import{N as B,a as g}from"./Tabs-720eaeeb.js";import"./Tag-fc1d507c.js";import"./index-d0540b84.js";import"./Add-ba1c106b.js";import"./throttle-6de7725b.js";const E=f({setup(){const s=r([]),l=r(!1),o=async()=>{l.value=!0;const{data:t}=await m.api.health.log.list(a.value).get();s.value=t,l.value=!1};x(()=>{o()});const n=r(""),u=r(!1),a=r("native");return()=>e(k,null,[e(b,{transformOrigin:"center",show:u.value,onUpdateShow:t=>void(u.value=t)},{default:()=>[e(N,{title:"\u67E5\u770B\u65E5\u5FD7",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{u.value=!1}},{default:()=>[e(O,{data:n.value},null)]})]}),e(y,{show:l.value},{default:()=>[e(U,{class:"min-h-[300px] bg-transparent"},{header(){return e(F,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,o()},options:[{label:"PM2",value:"pm2"},{label:"\u7CFB\u7EDF\u8BB0\u5F55",value:"native"}]},null)},default(){return s.value.map(t=>e(D,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},[e("span",null,[t.filename]),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},[e("span",null,[t.size]),e("span",null,[c("\u7C7B\u578B\uFF1A"),t.type])])])},suffix(){return e("div",{class:"flex space-x-2"},[e(p,{ghost:!0,type:"success",onClick:()=>{m.api.health.log(a.value).get({params:{filename:t.filename}}).then(d=>{n.value=d,u.value=!0})}},{default:()=>[c("\u67E5\u770B")]}),e(p,{ghost:!0,type:"error",onClick:()=>{m.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(d=>d.filename===t.filename),1)})}},{default:()=>[c("\u5220\u9664")]})])}}))}})]})])}}),O=f({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return x(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},[l.value?e("div",{class:"w-full flex items-center justify-center h-full"},[e(y,{show:!0,strokeWidth:14},null)]):e(w,{class:"h-full w-full max-h-full",onReady:o=>{o.write(s.data)}},null)])}}),q=f({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l;const o=[],n=a=>{l?(o.length>0&&u(l),l.write(a)):o.push(a)},u=a=>{for(;o.length;){const t=o.shift();a.write(t)}};return T(()=>{s(),v.on(h.STDOUT,n)}),V(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),C(()=>{i.socket.emit("unlog"),v.off(h.STDOUT,n)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,u(l)}},null)}});var G=f({setup(){const s=L(),l=S(()=>s.query.tab?.toString()||"0"),o=M();return()=>e(R,null,{default:()=>[e(B,{size:"medium",value:l.value,onUpdateValue:n=>{o.replace({...s,query:{...s.query,tab:n}})}},{default:()=>[e(g,{tab:"\u65E5\u5FD7",name:"0"},{default:()=>[e(E,null,null)]}),e(g,{tab:"\u5B9E\u65F6",name:"1"},{default:()=>[e(q,null,null)]})]})]})}});export{G as default};
