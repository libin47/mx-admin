var he=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ue=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],L=function(e){var t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));for(var i=he.exec(e||""),o={},a=14;a--;)o[ue[a]]=i[a]||"";return n!=-1&&r!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=fe(o,o.path),o.queryKey=le(o,o.query),o};function fe(s,e){var t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&n.splice(0,1),e.substr(e.length-1,1)=="/"&&n.splice(n.length-1,1),n}function le(s,e){var t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,r,i){r&&(t[r]=i)}),t}function pe(s,e="",t){let n=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),n=L(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(t&&t.port===n.port?"":":"+n.port),n}var P={exports:{}};try{P.exports=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{P.exports=!1}var de=P.exports,y=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function Q(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||de))return new XMLHttpRequest}catch{}if(!e)try{return new y[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function G(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const ye=setTimeout,me=clearTimeout;function O(s,e){e.useNativeTimers?(s.setTimeoutFn=ye.bind(y),s.clearTimeoutFn=me.bind(y)):(s.setTimeoutFn=setTimeout.bind(y),s.clearTimeoutFn=clearTimeout.bind(y))}var v=h;function h(s){if(s)return ge(s)}function ge(s){for(var e in h.prototype)s[e]=h.prototype[e];return s}h.prototype.on=h.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};h.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};h.prototype.off=h.prototype.removeListener=h.prototype.removeAllListeners=h.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,r=0;r<t.length;r++)if(n=t[r],n===e||n.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+s],this};h.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,r=t.length;n<r;++n)t[n].apply(this,e)}return this};h.prototype.emitReserved=h.prototype.emit;h.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};h.prototype.hasListeners=function(s){return!!this.listeners(s).length};const p=Object.create(null);p.open="0";p.close="1";p.ping="2";p.pong="3";p.message="4";p.upgrade="5";p.noop="6";const B=Object.create(null);Object.keys(p).forEach(s=>{B[p[s]]=s});const be={type:"error",data:"parser error"},ve=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",we=typeof ArrayBuffer=="function",ke=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Z=({type:s,data:e},t,n)=>ve&&e instanceof Blob?t?n(e):K(e,n):we&&(e instanceof ArrayBuffer||ke(e))?t?n(e):K(new Blob([e]),n):n(p[s]+(e||"")),K=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+n)},t.readAsDataURL(s)};var Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",R=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var C=0;C<Y.length;C++)R[Y.charCodeAt(C)]=C;var Ee=function(s){var e=s.length*.75,t=s.length,n,r=0,i,o,a,f;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);var k=new ArrayBuffer(e),g=new Uint8Array(k);for(n=0;n<t;n+=4)i=R[s.charCodeAt(n)],o=R[s.charCodeAt(n+1)],a=R[s.charCodeAt(n+2)],f=R[s.charCodeAt(n+3)],g[r++]=i<<2|o>>4,g[r++]=(o&15)<<4|a>>2,g[r++]=(a&3)<<6|f&63;return k};const Ae=typeof ArrayBuffer=="function",j=(s,e)=>{if(typeof s!="string")return{type:"message",data:ee(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:_e(s.substring(1),e)}:B[t]?s.length>1?{type:B[t],data:s.substring(1)}:{type:B[t]}:be},_e=(s,e)=>{if(Ae){const t=Ee(s);return ee(t,e)}else return{base64:!0,data:s}},ee=(s,e)=>{switch(e){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},te=String.fromCharCode(30),Re=(s,e)=>{const t=s.length,n=new Array(t);let r=0;s.forEach((i,o)=>{Z(i,!1,a=>{n[o]=a,++r===t&&e(n.join(te))})})},Te=(s,e)=>{const t=s.split(te),n=[];for(let r=0;r<t.length;r++){const i=j(t[r],e);if(n.push(i),i.type==="error")break}return n},se=4;class ne extends v{constructor(e){super();this.writable=!1,O(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t){const n=new Error(e);return n.type="TransportError",n.description=t,super.emit("error",n),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(e){const t=j(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emit("packet",e)}onClose(){this.readyState="closed",super.emit("close")}}var re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),S=64,ie={},z=0,m=0,W;function q(s){var e="";do e=re[s%S]+e,s=Math.floor(s/S);while(s>0);return e}function Ce(s){var e=0;for(m=0;m<s.length;m++)e=e*S+ie[s.charAt(m)];return e}function M(){var s=q(+new Date);return s!==W?(z=0,W=s):s+"."+q(z++)}for(;m<S;m++)ie[re[m]]=m;M.encode=q;M.decode=Ce;var oe=M,T={};T.encode=function(s){var e="";for(var t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e};T.decode=function(s){for(var e={},t=s.split("&"),n=0,r=t.length;n<r;n++){var i=t[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e};class Be extends ne{constructor(){super(...arguments);this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose(),!1;this.onPacket(n)};Te(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emit("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Re(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emit("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let n="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=oe()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port);const r=T.encode(e),i=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}}function Ne(){}const Se=function(){return new Q({xdomain:!1}).responseType!=null}();class Oe extends Be{constructor(e){super(e);if(typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==n}const t=e&&e.forceBase64;this.supportsBinary=Se&&!t}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new l(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",r=>{this.onError("xhr post error",r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",t=>{this.onError("xhr poll error",t)}),this.pollXhr=e}}class l extends v{constructor(e,t){super();O(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=G(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Q(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&t.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document<"u"&&(this.index=l.requestsCount++,l.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(e){this.emit("data",e),this.onSuccess()}onError(e){this.emit("error",e),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Ne,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete l.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&this.onData(e)}abort(){this.cleanup()}}l.requestsCount=0;l.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",X);else if(typeof addEventListener=="function"){const s="onpagehide"in y?"pagehide":"unload";addEventListener(s,X,!1)}}function X(){for(let s in l.requests)l.requests.hasOwnProperty(s)&&l.requests[s].abort()}const xe=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),A=y.WebSocket||y.MozWebSocket,$=!0,Le="arraybuffer",J=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class V extends ne{constructor(e){super(e);this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=J?{}:G(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=$&&!J?t?new A(e,t):new A(e):new A(e,t,n)}catch(r){return this.emit("error",r)}this.ws.binaryType=this.socket.binaryType||Le,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;Z(n,this.supportsBinary,i=>{const o={};try{$&&this.ws.send(i)}catch{}r&&xe(()=>{this.writable=!0,this.emit("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=oe()),this.supportsBinary||(e.b64=1);const r=T.encode(e),i=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}check(){return!!A&&!("__initialize"in A&&this.name===V.prototype.name)}}const Pe={websocket:V,polling:Oe};class d extends v{constructor(e,t={}){super();e&&typeof e=="object"&&(t=e,e=null),e?(e=L(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=L(t.host).host),O(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=T.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=qe(this.opts.query);t.EIO=se,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new Pe[e](n)}open(){let e;if(this.opts.rememberUpgrade&&d.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",()=>{this.onClose("transport close")})}probe(e){let t=this.createTransport(e),n=!1;d.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",b=>{if(!n)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;d.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(g(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const E=new Error("probe error");E.transport=t.name,this.emitReserved("upgradeError",E)}}))};function i(){n||(n=!0,g(),t.close(),t=null)}const o=b=>{const E=new Error("probe error: "+b);E.transport=t.name,i(),this.emitReserved("upgradeError",E)};function a(){o("transport closed")}function f(){o("socket closed")}function k(b){t&&b.name!==t.name&&i()}const g=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",f),this.off("upgrading",k)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",f),this.once("upgrading",k),t.open()}onOpen(){if(this.readyState="open",d.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,r){if(typeof t=="function"&&(r=t,t=void 0),typeof n=="function"&&(r=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){d.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}d.protocol=se;function qe(s){const e={};for(let t in s)s.hasOwnProperty(t)&&(e[t]=s[t]);return e}d.protocol;const De=typeof ArrayBuffer=="function",Ie=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,ce=Object.prototype.toString,Fe=typeof Blob=="function"||typeof Blob<"u"&&ce.call(Blob)==="[object BlobConstructor]",Me=typeof File=="function"||typeof File<"u"&&ce.call(File)==="[object FileConstructor]";function U(s){return De&&(s instanceof ArrayBuffer||Ie(s))||Fe&&s instanceof Blob||Me&&s instanceof File}function N(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(N(s[t]))return!0;return!1}if(U(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return N(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&N(s[t]))return!0;return!1}function Ve(s){const e=[],t=s.data,n=s;return n.data=D(t,e),n.attachments=e.length,{packet:n,buffers:e}}function D(s,e){if(!s)return s;if(U(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=D(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=D(s[n],e));return t}return s}function Ue(s,e){return s.data=I(s.data,e),s.attachments=void 0,s}function I(s,e){if(!s)return s;if(s&&s._placeholder)return e[s.num];if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=I(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=I(s[t],e));return s}const He=5;var c;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class Ke{encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&N(e)?(e.type=e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data)),t}encodeAsBinary(e){const t=Ve(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}class H extends v{constructor(){super()}add(e){let t;if(typeof e=="string")t=this.decodeString(e),t.type===c.BINARY_EVENT||t.type===c.BINARY_ACK?(this.reconstructor=new ze(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t);else if(U(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(c[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===c.BINARY_EVENT||n.type===c.BINARY_ACK){const i=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(i,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const i=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(i,t)}else n.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const i=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(i,t+1))}if(e.charAt(++t)){const i=Ye(e.substr(t));if(H.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}function Ye(s){try{return JSON.parse(s)}catch{return!1}}class ze{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Ue(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var We=Object.freeze(Object.defineProperty({__proto__:null,protocol:He,get PacketType(){return c},Encoder:Ke,Decoder:H},Symbol.toStringTag,{value:"Module"}));function u(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const Xe=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ae extends v{constructor(e,t,n){super();this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const e=this.io;this.subs=[u(e,"open",this.onopen.bind(this)),u(e,"packet",this.onpacket.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Xe.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');t.unshift(e);const n={type:c.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?this.packet(n):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){const n=this.flags.timeout;if(n===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let i=0;i<this.sendBuffer.length;i++)this.sendBuffer[i].id===e&&this.sendBuffer.splice(i,1);t.call(this,new Error("operation has timed out"))},n);this.acks[e]=(...i)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...i])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",e)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){const r=e.data.sid;this.onconnect(r)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:this.onevent(e);break;case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:this.onack(e);break;case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let n=!1;return function(...r){n||(n=!0,t.packet({type:c.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>this.packet(e)),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var $e=w;function w(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}w.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};w.prototype.reset=function(){this.attempts=0};w.prototype.setMin=function(s){this.ms=s};w.prototype.setMax=function(s){this.max=s};w.prototype.setJitter=function(s){this.jitter=s};class F extends v{constructor(e,t){var n;super();this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,O(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new $e({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||We;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new d(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=u(t,"open",function(){n.onopen(),e&&e()}),i=u(t,"error",o=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",o),e?e(o):n.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(u(e,"ping",this.onping.bind(this)),u(e,"data",this.ondata.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this)),u(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n||(n=new ae(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _={};function x(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=pe(s,e.path||"/socket.io"),n=t.source,r=t.id,i=t.path,o=_[r]&&i in _[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return a?f=new F(n,e):(_[r]||(_[r]=new F(n,e)),f=_[r]),t.query&&!e.query&&(e.query=t.queryKey),f.socket(t.path,e)}Object.assign(x,{Manager:F,Socket:ae,io:x,connect:x});export{x as l};
