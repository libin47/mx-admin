import{c as l,g as m,G as g,a as u,N as h,b as w,d,r as f,e as E}from"./index-d885f019.js";import{l as N}from"./index-d0540b84.js";import{E as s}from"./types-4fa065e6.js";class A{constructor(){this.initNotice()}initNotice(){return new Promise((i,e)=>{if(!("Notification"in window))e(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u53D1\u9001\u901A\u77E5"));else if(Notification.permission!=="denied")Notification.requestPermission().then(t=>t==="granted"?i(!0):e(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5")));else{if(Notification.permission==="denied")return e(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5"));e(!0)}})}notice(i,e,t={}){return new Promise(n=>{this.initNotice().then(o=>{if(o&&!document.hasFocus()){const r=new Notification(i,{body:e,...t});n(r)}})})}}const a={get warning(){return window.notification.warning},get warn(){return window.notification.warning},get success(){return window.notification.success},get error(){return window.notification.error},get info(){return window.notification.info}};class T{get socket(){return this._socket}#e=l.title;#t=new A;isInit=!1;initIO(){if(this.isInit)return;this.destory();const i=m();!i||(this._socket=N(`${g}/admin`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:i.replace(/^bearer\s/,"")}}),this.socket.on("message",e=>{if(typeof e!="string")return this.handleEvent(e.type,e.data,e.code);const{data:t,type:n,code:o}=JSON.parse(e);this.handleEvent(n,t,o)}),this.socket.on("connect_error",()=>{window.message.error("Socket \u8FDE\u63A5\u5F02\u5E38")}),this.socket.io.on("error",()=>{window.message.error("Socket \u8FDE\u63A5\u5F02\u5E38")}),this.socket.io.on("reconnect",()=>{window.message.info("Socket \u91CD\u8FDE\u6210\u529F")}),this.socket.io.on("reconnect_attempt",()=>{window.message.info("Socket \u91CD\u8FDE\u4E2D")}),this.socket.io.on("reconnect_failed",()=>{window.message.info("Socket \u91CD\u8FDE\u5931\u8D25")}),this.socket.on("disconnect",()=>{let t=setInterval(()=>{this.socket.connected===!1?this.socket.io.connect():t=clearInterval(t)},2e3)}),this.isInit=!0)}handleEvent(i,e,t){switch(i){case s.GATEWAY_CONNECT:break;case s.GATEWAY_DISCONNECT:{a.warning(e);break}case s.AUTH_FAILED:{console.log("\u7B49\u5F85\u767B\u5F55\u4E2D..."),this.socket.close();break}case s.COMMENT_CREATE:{const n=`${e.author}: ${e.text}`,o=()=>{f.push({name:"comment"}),r.destroy()},r=a.success({title:"\u65B0\u7684\u8BC4\u8BBA",content:n,action(){return u(d,{justify:"end"},{default:()=>[u(h,{onClick:o,type:"primary",round:!0,ghost:!0},{default:()=>[w("\u67E5\u770B")]})]})}});this.#t.notice(`${this.#e} \u6536\u5230\u65B0\u7684\u8BC4\u8BBA`,n).then(c=>{!c||(c.onclick=()=>{document.hasFocus()?o():window.open(f.resolve({name:"comment"}).href)})});break}case s.ADMIN_NOTIFICATION:{const{type:n,message:o}=e;a[n]({content:o});break}case s.CONTENT_REFRESH:{a.warning({content:"\u6570\u636E\u5E93\u6709\u53D8\u52A8, \u5C06\u5728 1 \u79D2\u540E\u91CD\u8F7D\u9875\u9762"}),setTimeout(()=>{location.reload()},1e3);break}case s.LINK_APPLY:{const n=e.name,o=()=>{f.push({name:"friends"}),r.destroy()},r=a.success({title:"\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",content:n,action(){return u(d,{justify:"end"},{default:()=>[u(h,{onClick:o,type:"primary",round:!0,ghost:!0},{default:()=>[w("\u67E5\u770B")]})]})}});this.#t.notice(`${this.#e} \u6536\u5230\u65B0\u7684\u53CB\u94FE\u7533\u8BF7`,n).then(c=>{!c||(c.onclick=()=>{document.hasFocus()?o():window.open("/")})});break}default:console.log(i,e,t)}E.emit(i,e,t)}destory(){!this.socket||(this.socket.disconnect(),this.socket.off("message"),this.socket.offAny(),this._socket=null,this.isInit=!1)}}const D=new T;window.socket=D;export{D as socket};
