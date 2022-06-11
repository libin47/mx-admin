import{H as w}from"./rounded-button-a4c5d0dc.js";import{f as p,y as f,u as S,t as P,g as x,G as M,e as u,K as v,w as A,a as t,F as D,ep as H,eq as I,C as F,m as L,R,dL as V,H as Y,N as b,b as m,L as g,df as j,P as B,c1 as O}from"./index-234d295e.js";import{X as U}from"./index-c77a5f0d.js";import{u as T}from"./use-react-ee5539fc.js";import{l as _}from"./index-d0540b84.js";import{E as d}from"./types-4fa065e6.js";import{N as $}from"./Form-d7b36f72.js";import{N as q,a as G}from"./ListItem-b346ef76.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}var se=p({name:"PtyView",setup(){let e;const s=f(!1);let o;const r=a=>{e.write(a),e.focus()},c=S(),y=P(),n=_(`${M}/pty`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:x().replace(/^bearer\s/,"")}});n.on("message",({code:a,data:l,type:i})=>{u.emit(i,l,a)}),T(()=>{const a=()=>{e.writeln("PTY connection closed"),c.warning("\u8FDE\u63A5\u5DF2\u65AD\u5F00",{closable:!0})};return n.on("disconnect",a),()=>{n.off("disconnect",a)}}),v(()=>{n.offAny(),n.disconnect()}),T(()=>{const a=u.on(d.PTY_MESSAGE,(l,i)=>{if(i===1e4||i===10001){const k=y.create({title:"\u9A8C\u8BC1\u5BC6\u7801",closable:!0,content:()=>t(K,{onConfirm:E=>{n.emit("pty",V(e?{cols:e.cols,rows:e.rows}:void 0,{password:E})),requestAnimationFrame(()=>{k.destroy()})}},null)})}c.info(l)});return()=>{a()}});const C=A(()=>s.value,a=>{a&&(C(),n.emit("pty",{cols:e.cols,rows:e.rows}),o=e.onData(l=>{n.emit("pty-input",l)}),u.on(d.PTY,r))});v(()=>{n.emit("pty-exit"),o?.dispose(),u.off(d.PTY,r)});const N=()=>{if(e&&e.reset(),n.connected===!1){n.io.connect(),setTimeout(()=>{n.connected?n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):c.error("\u91CD\u8FDE Socket \u5931\u8D25")},1500);return}n.emit("pty-exit"),setTimeout(()=>{n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},h=()=>{y.create({title:"\u8FDE\u63A5\u72B6\u6001",content:()=>t(W,null,null)})};return()=>t(F,{actionsElement:t(D,null,[t(w,{variant:"info",icon:t(H,null,null),name:"\u8FDE\u63A5\u72B6\u6001",onClick:h},null),t(w,{icon:t(I,null,null),name:"\u91CD\u65B0\u8FDE\u63A5",onClick:N},null)])},{default:()=>[t(U,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:a=>{s.value=!0,e=a}},null)]})}});const K=p({props:{onConfirm:Function},setup(e){const s=f(""),o=r=>{r.preventDefault(),e.onConfirm?.(s.value)};return()=>t($,{onSubmit:o,class:"space-y-6 mt-6"},{default:()=>[t(Y,{showPasswordOn:"mousedown",type:"password",value:s.value,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onUpdateValue:r=>{s.value=r}},null),t("div",{class:"flex justify-center"},[t(b,{round:!0,type:"primary",onClick:o},{default:()=>[m("\u786E\u8BA4")]})])]})}}),W=p(()=>{const e=f([]);return L(async()=>{const s=await R.api.pty.record.get();e.value=s.data}),()=>{let s;return t(O,{bordered:!1,class:"max-h-[70vh] overflow-auto"},{default:()=>[t(q,{bordered:!1,class:"bg-transparent"},X(s=e.value.map(o=>t(G,{key:o.startTime},{default:()=>[t("div",null,[m("\u5F00\u59CB\u4E8E "),g(o.startTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")]),t("div",null,[m("IP:")," ",t(j,{trigger:"hover",ip:o.ip,triggerEl:t(b,{text:!0},{default:()=>[o.ip]})},null)]),t("div",null,[o.endTime?`\u7ED3\u675F\u4E8E ${g(o.endTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}`:"\u6CA1\u6709\u7ED3\u675F"]),t("div",null,[o.endTime&&`\u65F6\u957F\uFF1A${Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0}\u79D2`])]})))?s:{default:()=>[s]})]})}});export{se as default};
