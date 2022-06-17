import{f as P,o as nt,h as et,i as j,H as B,bs as Ct,w as rt,a as d,L as yt,bU as $,bO as J,bV as D,p as bt,N as Tt,I as Z,q as It,bW as Lt,b as Q,bT as St,F as Nt,bX as Pt,n as kt,bY as Vt,bZ as Ft,bP as Bt,bR as Dt,bS as jt,K as ct}from"./index-23675994.js";import{u as lt}from"./use-react-b6888cd4.js";import{u as zt}from"./use-save-confirm-6f0bbfea.js";import{t as mt}from"./throttle-d4ef57ab.js";import{N as G}from"./FormItem-f55390e0.js";import{N as Rt}from"./InputNumber-4cc9bfb6.js";import{N as Ut}from"./Form-803b561c.js";import{N as $t}from"./Select-96fa6219.js";const Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wt=j("path",{d:"M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208zm0 313a94 94 0 0 1 0-188h4.21l-14.11-14.1a14 14 0 0 1 19.8-19.8l40 40a14 14 0 0 1 0 19.8l-40 40a14 14 0 0 1-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1 0 66 66a14 14 0 0 1 28 0a94.11 94.11 0 0 1-94 94z",fill:"currentColor"},null,-1),Ht=[Wt];var qt=P({name:"RefreshCircle",render:function(t,n){return nt(),et("svg",Gt,Ht)}});const Jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Yt=j("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",fill:"currentColor"},null,-1),Kt=[Yt];var Xt=P({name:"FullscreenExitOutlined",render:function(t,n){return nt(),et("svg",Jt,Kt)}});const Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Qt=j("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[j("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"}),j("circle",{cx:"12",cy:"12",r:"3"})],-1),tn=[Qt];var nn=P({name:"Settings",render:function(t,n){return nt(),et("svg",Zt,tn)}});const xt={editor:"editor-pref",general:"editor-general"};var N=(r=>(r.monaco="monaco",r.codemirror="codemirror",r.vditor="vditor",r.plain="plain",r))(N||{});const en="_editor_19kch_1",rn="_loading_19kch_1";var W={editor:en,loading:rn};const it={text:{type:String,required:!0},onChange:{type:Function,required:!0},unSaveConfirm:{type:Boolean,default:!0}},pt=P({props:{...it,wrapperProps:{type:Object,required:!1}},setup(r){const t=B();let n=Ct(r.text);return rt(()=>r.text,e=>{!n&&e&&(n=e)}),zt(r.unSaveConfirm,()=>n===r.text),()=>d("div",r.wrapperProps,[d(yt,{ref:t,type:"textarea",onInput:e=>void r.onChange(e),value:r.text,class:"h-full"},null)])}}),k={[N.monaco]:null,[N.vditor]:null,[N.plain]:null,[N.codemirror]:null},U=r=>{if(k[r])return k[r];switch(r){case"monaco":{const t=$({loader:()=>J(()=>import("./monaco-c022faef.js"),["js/monaco-c022faef.js","js/index-23675994.js","assets/index.eb92906c.css","js/index-3f3ba5dd.js","js/use-save-confirm-6f0bbfea.js","js/use-react-b6888cd4.js","js/throttle-d4ef57ab.js","js/FormItem-f55390e0.js","js/Form-803b561c.js","js/index-c6a5c591.js","js/InputNumber-4cc9bfb6.js","js/Add-17a04330.js","js/Select-96fa6219.js","js/Tag-cf0fa0d0.js"]).then(n=>n.MonacoEditor),loadingComponent:d(D,{strokeWidth:14,show:!0,rotate:!0},null),suspensible:!0});return k[r]=t,t}case"vditor":{const t=$({loader:()=>J(()=>import("./vditor-02892465.js"),["js/vditor-02892465.js","assets/vditor.716c5c4e.css","js/index-23675994.js","assets/index.eb92906c.css","js/use-save-confirm-6f0bbfea.js","js/use-react-b6888cd4.js","js/throttle-d4ef57ab.js","js/FormItem-f55390e0.js","js/Form-803b561c.js","js/index-c6a5c591.js","js/InputNumber-4cc9bfb6.js","js/Add-17a04330.js","js/Select-96fa6219.js","js/Tag-cf0fa0d0.js"]).then(n=>n.VditorEditor),loadingComponent:d(D,{strokeWidth:14,show:!0,rotate:!0},null),suspensible:!0});return k[r]=t,t}case"plain":return k[r]=pt,pt;case"codemirror":{const t=$({loader:()=>J(()=>import("./codemirror-a49f0c96.js").then(function(n){return n.m}),["js/codemirror-a49f0c96.js","assets/codemirror.75ec60a4.css","js/use-save-confirm-6f0bbfea.js","js/index-23675994.js","assets/index.eb92906c.css"]).then(n=>n.CodemirrorEditor),loadingComponent:d(D,{strokeWidth:14,show:!0,rotate:!0},null),suspensible:!0});return k[r]=t,t}default:return null}};var g;(function(r){r[r.PLAIN_TO_CLASS=0]="PLAIN_TO_CLASS",r[r.CLASS_TO_PLAIN=1]="CLASS_TO_PLAIN",r[r.CLASS_TO_CLASS=2]="CLASS_TO_CLASS"})(g||(g={}));var on=function(){function r(){this._typeMetadatas=new Map,this._transformMetadatas=new Map,this._exposeMetadatas=new Map,this._excludeMetadatas=new Map,this._ancestorsMap=new Map}return r.prototype.addTypeMetadata=function(t){this._typeMetadatas.has(t.target)||this._typeMetadatas.set(t.target,new Map),this._typeMetadatas.get(t.target).set(t.propertyName,t)},r.prototype.addTransformMetadata=function(t){this._transformMetadatas.has(t.target)||this._transformMetadatas.set(t.target,new Map),this._transformMetadatas.get(t.target).has(t.propertyName)||this._transformMetadatas.get(t.target).set(t.propertyName,[]),this._transformMetadatas.get(t.target).get(t.propertyName).push(t)},r.prototype.addExposeMetadata=function(t){this._exposeMetadatas.has(t.target)||this._exposeMetadatas.set(t.target,new Map),this._exposeMetadatas.get(t.target).set(t.propertyName,t)},r.prototype.addExcludeMetadata=function(t){this._excludeMetadatas.has(t.target)||this._excludeMetadatas.set(t.target,new Map),this._excludeMetadatas.get(t.target).set(t.propertyName,t)},r.prototype.findTransformMetadatas=function(t,n,e){return this.findMetadatas(this._transformMetadatas,t,n).filter(function(o){return!o.options||o.options.toClassOnly===!0&&o.options.toPlainOnly===!0?!0:o.options.toClassOnly===!0?e===g.CLASS_TO_CLASS||e===g.PLAIN_TO_CLASS:o.options.toPlainOnly===!0?e===g.CLASS_TO_PLAIN:!0})},r.prototype.findExcludeMetadata=function(t,n){return this.findMetadata(this._excludeMetadatas,t,n)},r.prototype.findExposeMetadata=function(t,n){return this.findMetadata(this._exposeMetadatas,t,n)},r.prototype.findExposeMetadataByCustomName=function(t,n){return this.getExposedMetadatas(t).find(function(e){return e.options&&e.options.name===n})},r.prototype.findTypeMetadata=function(t,n){return this.findMetadata(this._typeMetadatas,t,n)},r.prototype.getStrategy=function(t){var n=this._excludeMetadatas.get(t),e=n&&n.get(void 0),o=this._exposeMetadatas.get(t),i=o&&o.get(void 0);return e&&i||!e&&!i?"none":e?"excludeAll":"exposeAll"},r.prototype.getExposedMetadatas=function(t){return this.getMetadata(this._exposeMetadatas,t)},r.prototype.getExcludedMetadatas=function(t){return this.getMetadata(this._excludeMetadatas,t)},r.prototype.getExposedProperties=function(t,n){return this.getExposedMetadatas(t).filter(function(e){return!e.options||e.options.toClassOnly===!0&&e.options.toPlainOnly===!0?!0:e.options.toClassOnly===!0?n===g.CLASS_TO_CLASS||n===g.PLAIN_TO_CLASS:e.options.toPlainOnly===!0?n===g.CLASS_TO_PLAIN:!0}).map(function(e){return e.propertyName})},r.prototype.getExcludedProperties=function(t,n){return this.getExcludedMetadatas(t).filter(function(e){return!e.options||e.options.toClassOnly===!0&&e.options.toPlainOnly===!0?!0:e.options.toClassOnly===!0?n===g.CLASS_TO_CLASS||n===g.PLAIN_TO_CLASS:e.options.toPlainOnly===!0?n===g.CLASS_TO_PLAIN:!0}).map(function(e){return e.propertyName})},r.prototype.clear=function(){this._typeMetadatas.clear(),this._exposeMetadatas.clear(),this._excludeMetadatas.clear(),this._ancestorsMap.clear()},r.prototype.getMetadata=function(t,n){var e=t.get(n),o;e&&(o=Array.from(e.values()).filter(function(l){return l.propertyName!==void 0}));for(var i=[],s=0,u=this.getAncestors(n);s<u.length;s++){var p=u[s],f=t.get(p);if(f){var c=Array.from(f.values()).filter(function(l){return l.propertyName!==void 0});i.push.apply(i,c)}}return i.concat(o||[])},r.prototype.findMetadata=function(t,n,e){var o=t.get(n);if(o){var i=o.get(e);if(i)return i}for(var s=0,u=this.getAncestors(n);s<u.length;s++){var p=u[s],f=t.get(p);if(f){var c=f.get(e);if(c)return c}}},r.prototype.findMetadatas=function(t,n,e){var o=t.get(n),i;o&&(i=o.get(e));for(var s=[],u=0,p=this.getAncestors(n);u<p.length;u++){var f=p[u],c=t.get(f);c&&c.has(e)&&s.push.apply(s,c.get(e))}return s.slice().reverse().concat((i||[]).slice().reverse())},r.prototype.getAncestors=function(t){if(!t)return[];if(!this._ancestorsMap.has(t)){for(var n=[],e=Object.getPrototypeOf(t.prototype.constructor);typeof e.prototype<"u";e=Object.getPrototypeOf(e.prototype.constructor))n.push(e);this._ancestorsMap.set(t,n)}return this._ancestorsMap.get(t)},r}(),_=new on;function sn(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof window<"u")return window;if(typeof self<"u")return self}function an(r){return r!==null&&typeof r=="object"&&typeof r.then=="function"}var dt=globalThis&&globalThis.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,o=t.length,i;e<o;e++)(i||!(e in t))&&(i||(i=Array.prototype.slice.call(t,0,e)),i[e]=t[e]);return r.concat(i||Array.prototype.slice.call(t))};function un(r){var t=new r;return!(t instanceof Set)&&!("push"in t)?[]:t}var V=function(){function r(t,n){this.transformationType=t,this.options=n,this.recursionStack=new Set}return r.prototype.transform=function(t,n,e,o,i,s){var u=this;if(s===void 0&&(s=0),Array.isArray(n)||n instanceof Set){var p=o&&this.transformationType===g.PLAIN_TO_CLASS?un(o):[];return n.forEach(function(v,A){var w=t?t[A]:void 0;if(!u.options.enableCircularCheck||!u.isCircular(v)){var x=void 0;if(typeof e!="function"&&e&&e.options&&e.options.discriminator&&e.options.discriminator.property&&e.options.discriminator.subTypes){if(u.transformationType===g.PLAIN_TO_CLASS){x=e.options.discriminator.subTypes.find(function(O){return O.name===v[e.options.discriminator.property]});var C={newObject:p,object:v,property:void 0},h=e.typeFunction(C);x===void 0?x=h:x=x.value,e.options.keepDiscriminatorProperty||delete v[e.options.discriminator.property]}u.transformationType===g.CLASS_TO_CLASS&&(x=v.constructor),u.transformationType===g.CLASS_TO_PLAIN&&(v[e.options.discriminator.property]=e.options.discriminator.subTypes.find(function(O){return O.value===v.constructor}).name)}else x=e;var S=u.transform(w,v,x,void 0,v instanceof Map,s+1);p instanceof Set?p.add(S):p.push(S)}else u.transformationType===g.CLASS_TO_CLASS&&(p instanceof Set?p.add(v):p.push(v))}),p}else{if(e===String&&!i)return n==null?n:String(n);if(e===Number&&!i)return n==null?n:Number(n);if(e===Boolean&&!i)return n==null?n:Boolean(n);if((e===Date||n instanceof Date)&&!i)return n instanceof Date?new Date(n.valueOf()):n==null?n:new Date(n);if(!!sn().Buffer&&(e===Buffer||n instanceof Buffer)&&!i)return n==null?n:Buffer.from(n);if(an(n)&&!i)return new Promise(function(v,A){n.then(function(w){return v(u.transform(void 0,w,e,void 0,void 0,s+1))},A)});if(!i&&n!==null&&typeof n=="object"&&typeof n.then=="function")return n;if(typeof n=="object"&&n!==null){!e&&n.constructor!==Object&&(!Array.isArray(n)&&n.constructor===Array||(e=n.constructor)),!e&&t&&(e=t.constructor),this.options.enableCircularCheck&&this.recursionStack.add(n);var f=this.getKeys(e,n,i),c=t||{};!t&&(this.transformationType===g.PLAIN_TO_CLASS||this.transformationType===g.CLASS_TO_CLASS)&&(i?c=new Map:e?c=new e:c={});for(var l=function(v){if(v==="__proto__"||v==="constructor")return"continue";var A=v,w=v,x=v;if(!a.options.ignoreDecorators&&e){if(a.transformationType===g.PLAIN_TO_CLASS){var C=_.findExposeMetadataByCustomName(e,v);C&&(x=C.propertyName,w=C.propertyName)}else if(a.transformationType===g.CLASS_TO_PLAIN||a.transformationType===g.CLASS_TO_CLASS){var C=_.findExposeMetadata(e,v);C&&C.options&&C.options.name&&(w=C.options.name)}}var h=void 0;a.transformationType===g.PLAIN_TO_CLASS?h=n[A]:n instanceof Map?h=n.get(A):n[A]instanceof Function?h=n[A]():h=n[A];var S=void 0,O=h instanceof Map;if(e&&i)S=e;else if(e){var y=_.findTypeMetadata(e,x);if(y){var q={newObject:c,object:n,property:x},z=y.typeFunction?y.typeFunction(q):y.reflectedType;y.options&&y.options.discriminator&&y.options.discriminator.property&&y.options.discriminator.subTypes?n[A]instanceof Array?S=y:(a.transformationType===g.PLAIN_TO_CLASS&&(S=y.options.discriminator.subTypes.find(function(L){if(h&&h instanceof Object&&y.options.discriminator.property in h)return L.name===h[y.options.discriminator.property]}),S===void 0?S=z:S=S.value,y.options.keepDiscriminatorProperty||h&&h instanceof Object&&y.options.discriminator.property in h&&delete h[y.options.discriminator.property]),a.transformationType===g.CLASS_TO_CLASS&&(S=h.constructor),a.transformationType===g.CLASS_TO_PLAIN&&h&&(h[y.options.discriminator.property]=y.options.discriminator.subTypes.find(function(L){return L.value===h.constructor}).name)):S=z,O=O||y.reflectedType===Map}else if(a.options.targetMaps)a.options.targetMaps.filter(function(L){return L.target===e&&!!L.properties[x]}).forEach(function(L){return S=L.properties[x]});else if(a.options.enableImplicitConversion&&a.transformationType===g.PLAIN_TO_CLASS){var st=Reflect.getMetadata("design:type",e.prototype,x);st&&(S=st)}}var at=Array.isArray(n[A])?a.getReflectedType(e,x):void 0,ut=t?t[A]:void 0;if(c.constructor.prototype){var ft=Object.getOwnPropertyDescriptor(c.constructor.prototype,w);if((a.transformationType===g.PLAIN_TO_CLASS||a.transformationType===g.CLASS_TO_CLASS)&&(ft&&!ft.set||c[w]instanceof Function))return"continue"}if(!a.options.enableCircularCheck||!a.isCircular(h)){var R=a.transformationType===g.PLAIN_TO_CLASS?w:v,m=void 0;a.transformationType===g.CLASS_TO_PLAIN?(m=n[R],m=a.applyCustomTransformations(m,e,R,n,a.transformationType),m=n[R]===m?h:m,m=a.transform(ut,m,S,at,O,s+1)):h===void 0&&a.options.exposeDefaultValues?m=c[w]:(m=a.transform(ut,h,S,at,O,s+1),m=a.applyCustomTransformations(m,e,R,n,a.transformationType)),(m!==void 0||a.options.exposeUnsetFields)&&(c instanceof Map?c.set(w,m):c[w]=m)}else if(a.transformationType===g.CLASS_TO_CLASS){var m=h;m=a.applyCustomTransformations(m,e,v,n,a.transformationType),(m!==void 0||a.options.exposeUnsetFields)&&(c instanceof Map?c.set(w,m):c[w]=m)}},a=this,M=0,T=f;M<T.length;M++){var I=T[M];l(I)}return this.options.enableCircularCheck&&this.recursionStack.delete(n),c}else return n}},r.prototype.applyCustomTransformations=function(t,n,e,o,i){var s=this,u=_.findTransformMetadatas(n,e,this.transformationType);return this.options.version!==void 0&&(u=u.filter(function(p){return p.options?s.checkVersion(p.options.since,p.options.until):!0})),this.options.groups&&this.options.groups.length?u=u.filter(function(p){return p.options?s.checkGroups(p.options.groups):!0}):u=u.filter(function(p){return!p.options||!p.options.groups||!p.options.groups.length}),u.forEach(function(p){t=p.transformFn({value:t,key:e,obj:o,type:i,options:s.options})}),t},r.prototype.isCircular=function(t){return this.recursionStack.has(t)},r.prototype.getReflectedType=function(t,n){if(!!t){var e=_.findTypeMetadata(t,n);return e?e.reflectedType:void 0}},r.prototype.getKeys=function(t,n,e){var o=this,i=_.getStrategy(t);i==="none"&&(i=this.options.strategy||"exposeAll");var s=[];if((i==="exposeAll"||e)&&(n instanceof Map?s=Array.from(n.keys()):s=Object.keys(n)),e)return s;if(this.options.ignoreDecorators&&this.options.excludeExtraneousValues&&t){var u=_.getExposedProperties(t,this.transformationType),p=_.getExcludedProperties(t,this.transformationType);s=dt(dt([],u,!0),p,!0)}if(!this.options.ignoreDecorators&&t){var u=_.getExposedProperties(t,this.transformationType);this.transformationType===g.PLAIN_TO_CLASS&&(u=u.map(function(l){var a=_.findExposeMetadata(t,l);return a&&a.options&&a.options.name?a.options.name:l})),this.options.excludeExtraneousValues?s=u:s=s.concat(u);var f=_.getExcludedProperties(t,this.transformationType);f.length>0&&(s=s.filter(function(l){return!f.includes(l)})),this.options.version!==void 0&&(s=s.filter(function(l){var a=_.findExposeMetadata(t,l);return!a||!a.options?!0:o.checkVersion(a.options.since,a.options.until)})),this.options.groups&&this.options.groups.length?s=s.filter(function(l){var a=_.findExposeMetadata(t,l);return!a||!a.options?!0:o.checkGroups(a.options.groups)}):s=s.filter(function(l){var a=_.findExposeMetadata(t,l);return!a||!a.options||!a.options.groups||!a.options.groups.length})}return this.options.excludePrefixes&&this.options.excludePrefixes.length&&(s=s.filter(function(c){return o.options.excludePrefixes.every(function(l){return c.substr(0,l.length)!==l})})),s=s.filter(function(c,l,a){return a.indexOf(c)===l}),s},r.prototype.checkVersion=function(t,n){var e=!0;return e&&t&&(e=this.options.version>=t),e&&n&&(e=this.options.version<n),e},r.prototype.checkGroups=function(t){return t?this.options.groups.some(function(n){return t.includes(n)}):!0},r}(),F={enableCircularCheck:!1,enableImplicitConversion:!1,excludeExtraneousValues:!1,excludePrefixes:void 0,exposeDefaultValues:!1,exposeUnsetFields:!0,groups:void 0,ignoreDecorators:!1,strategy:void 0,targetMaps:void 0,version:void 0},E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},E.apply(this,arguments)},fn=function(){function r(){}return r.prototype.instanceToPlain=function(t,n){var e=new V(g.CLASS_TO_PLAIN,E(E({},F),n));return e.transform(void 0,t,void 0,void 0,void 0,void 0)},r.prototype.classToPlainFromExist=function(t,n,e){var o=new V(g.CLASS_TO_PLAIN,E(E({},F),e));return o.transform(n,t,void 0,void 0,void 0,void 0)},r.prototype.plainToInstance=function(t,n,e){var o=new V(g.PLAIN_TO_CLASS,E(E({},F),e));return o.transform(void 0,n,t,void 0,void 0,void 0)},r.prototype.plainToClassFromExist=function(t,n,e){var o=new V(g.PLAIN_TO_CLASS,E(E({},F),e));return o.transform(t,n,void 0,void 0,void 0,void 0)},r.prototype.instanceToInstance=function(t,n){var e=new V(g.CLASS_TO_CLASS,E(E({},F),n));return e.transform(void 0,t,void 0,void 0,void 0,void 0)},r.prototype.classToClassFromExist=function(t,n,e){var o=new V(g.CLASS_TO_CLASS,E(E({},F),e));return o.transform(n,t,void 0,void 0,void 0,void 0)},r.prototype.serialize=function(t,n){return JSON.stringify(this.instanceToPlain(t,n))},r.prototype.deserialize=function(t,n,e){var o=JSON.parse(n);return this.plainToInstance(t,o,e)},r.prototype.deserializeArray=function(t,n,e){var o=JSON.parse(n);return this.plainToInstance(t,o,e)},r}(),wt=new fn;function ht(r,t){return wt.instanceToPlain(r,t)}function cn(r,t,n){return wt.plainToInstance(r,t,n)}var Ot=function(){function r(t){this.groups=[],this.each=!1,this.context=void 0,this.type=t.type,this.target=t.target,this.propertyName=t.propertyName,this.constraints=t.constraints,this.constraintCls=t.constraintCls,this.validationTypeOptions=t.validationTypeOptions,t.validationOptions&&(this.message=t.validationOptions.message,this.groups=t.validationOptions.groups,this.always=t.validationOptions.always,this.each=t.validationOptions.each,this.context=t.validationOptions.context)}return r}(),ln=function(){function r(){}return r.prototype.transform=function(t){var n=[];return Object.keys(t.properties).forEach(function(e){t.properties[e].forEach(function(o){var i={message:o.message,groups:o.groups,always:o.always,each:o.each},s={type:o.type,target:t.name,propertyName:e,constraints:o.constraints,validationTypeOptions:o.options,validationOptions:i};n.push(new Ot(s))})}),n},r}();function pn(r){return r instanceof Map?Array.from(r.values()):Array.isArray(r)?r:Array.from(r)}function dn(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof window<"u")return window;if(typeof self<"u")return self}function Y(r){return r!==null&&typeof r=="object"&&typeof r.then=="function"}var At=function(){function r(){this.validationMetadatas=[],this.constraintMetadatas=[]}return Object.defineProperty(r.prototype,"hasValidationMetaData",{get:function(){return!!this.validationMetadatas.length},enumerable:!1,configurable:!0}),r.prototype.addValidationSchema=function(t){var n=this,e=new ln().transform(t);e.forEach(function(o){return n.addValidationMetadata(o)})},r.prototype.addValidationMetadata=function(t){this.validationMetadatas.push(t)},r.prototype.addConstraintMetadata=function(t){this.constraintMetadatas.push(t)},r.prototype.groupByPropertyName=function(t){var n={};return t.forEach(function(e){n[e.propertyName]||(n[e.propertyName]=[]),n[e.propertyName].push(e)}),n},r.prototype.getTargetValidationMetadatas=function(t,n,e,o,i){var s=function(l){return typeof l.always<"u"?l.always:l.groups&&l.groups.length?!1:e},u=function(l){return!!(o&&(!i||!i.length)&&l.groups&&l.groups.length)},p=this.validationMetadatas.filter(function(l){return l.target!==t&&l.target!==n?!1:s(l)?!0:u(l)?!1:i&&i.length>0?l.groups&&!!l.groups.find(function(a){return i.indexOf(a)!==-1}):!0}),f=this.validationMetadatas.filter(function(l){return typeof l.target=="string"||l.target===t||l.target instanceof Function&&!(t.prototype instanceof l.target)?!1:s(l)?!0:u(l)?!1:i&&i.length>0?l.groups&&!!l.groups.find(function(a){return i.indexOf(a)!==-1}):!0}),c=f.filter(function(l){return!p.find(function(a){return a.propertyName===l.propertyName&&a.type===l.type})});return p.concat(c)},r.prototype.getTargetValidatorConstraints=function(t){return this.constraintMetadatas.filter(function(n){return n.target===t})},r}();function tt(){var r=dn();return r.classValidatorMetadataStorage||(r.classValidatorMetadataStorage=new At),r.classValidatorMetadataStorage}var K=function(){function r(){}return r.prototype.toString=function(t,n,e){var o=this;t===void 0&&(t=!1),n===void 0&&(n=!1),e===void 0&&(e="");var i=t?"\x1B[1m":"",s=t?"\x1B[22m":"",u=function(f){return" - property ".concat(i).concat(e).concat(f).concat(s," has failed the following constraints: ").concat(i).concat(Object.keys(o.constraints).join(", ")).concat(s,` 
`)};if(n){var p=Number.isInteger(+this.property)?"[".concat(this.property,"]"):"".concat(e?".":"").concat(this.property);return this.constraints?u(p):this.children?this.children.map(function(f){return f.toString(t,!0,"".concat(e).concat(p))}).join(""):""}else return"An instance of ".concat(i).concat(this.target?this.target.constructor.name:"an object").concat(s,` has failed the validation:
`)+(this.constraints?u(this.property):"")+(this.children?this.children.map(function(f){return f.toString(t,!0,o.property)}).join(""):"")},r}(),b=function(){function r(){}return r.isValid=function(t){var n=this;return t!=="isValid"&&t!=="getMessage"&&Object.keys(this).map(function(e){return n[e]}).indexOf(t)!==-1},r.CUSTOM_VALIDATION="customValidation",r.NESTED_VALIDATION="nestedValidation",r.PROMISE_VALIDATION="promiseValidation",r.CONDITIONAL_VALIDATION="conditionalValidation",r.WHITELIST="whitelistValidation",r.IS_DEFINED="isDefined",r}();function hn(r){return Array.isArray(r)?r.join(", "):"".concat(r)}var gn=function(){function r(){}return r.replaceMessageSpecialTokens=function(t,n){var e;return t instanceof Function?e=t(n):typeof t=="string"&&(e=t),e&&Array.isArray(n.constraints)&&n.constraints.forEach(function(o,i){e=e.replace(new RegExp("\\$constraint".concat(i+1),"g"),hn(o))}),e&&n.value!==void 0&&n.value!==null&&typeof n.value=="string"&&(e=e.replace(/\$value/g,n.value)),e&&(e=e.replace(/\$property/g,n.property)),e&&(e=e.replace(/\$target/g,n.targetName)),e},r}(),gt=function(){function r(t,n){this.validator=t,this.validatorOptions=n,this.awaitingPromises=[],this.ignoreAsyncValidations=!1,this.metadataStorage=tt()}return r.prototype.execute=function(t,n,e){var o=this,i;!this.metadataStorage.hasValidationMetaData&&((i=this.validatorOptions)===null||i===void 0?void 0:i.enableDebugMessages)===!0&&console.warn("No metadata found. There is more than once class-validator version installed probably. You need to flatten your dependencies.");var s=this.validatorOptions?this.validatorOptions.groups:void 0,u=this.validatorOptions&&this.validatorOptions.strictGroups||!1,p=this.validatorOptions&&this.validatorOptions.always||!1,f=this.metadataStorage.getTargetValidationMetadatas(t.constructor,n,p,u,s),c=this.metadataStorage.groupByPropertyName(f);if(this.validatorOptions&&this.validatorOptions.forbidUnknownValues&&!f.length){var l=new K;(!this.validatorOptions||!this.validatorOptions.validationError||this.validatorOptions.validationError.target===void 0||this.validatorOptions.validationError.target===!0)&&(l.target=t),l.value=void 0,l.property=void 0,l.children=[],l.constraints={unknownValue:"an unknown value was passed to the validate function"},e.push(l);return}this.validatorOptions&&this.validatorOptions.whitelist&&this.whitelist(t,c,e),Object.keys(c).forEach(function(a){var M=t[a],T=c[a].filter(function(v){return v.type===b.IS_DEFINED}),I=c[a].filter(function(v){return v.type!==b.IS_DEFINED&&v.type!==b.WHITELIST});M instanceof Promise&&I.find(function(v){return v.type===b.PROMISE_VALIDATION})?o.awaitingPromises.push(M.then(function(v){o.performValidations(t,v,a,T,I,e)})):o.performValidations(t,M,a,T,I,e)})},r.prototype.whitelist=function(t,n,e){var o=this,i=[];Object.keys(t).forEach(function(s){(!n[s]||n[s].length===0)&&i.push(s)}),i.length>0&&(this.validatorOptions&&this.validatorOptions.forbidNonWhitelisted?i.forEach(function(s){var u,p=o.generateValidationError(t,t[s],s);p.constraints=(u={},u[b.WHITELIST]="property ".concat(s," should not exist"),u),p.children=void 0,e.push(p)}):i.forEach(function(s){return delete t[s]}))},r.prototype.stripEmptyErrors=function(t){var n=this;return t.filter(function(e){if(e.children&&(e.children=n.stripEmptyErrors(e.children)),Object.keys(e.constraints).length===0){if(e.children.length===0)return!1;delete e.constraints}return!0})},r.prototype.performValidations=function(t,n,e,o,i,s){var u=i.filter(function(a){return a.type===b.CUSTOM_VALIDATION}),p=i.filter(function(a){return a.type===b.NESTED_VALIDATION}),f=i.filter(function(a){return a.type===b.CONDITIONAL_VALIDATION}),c=this.generateValidationError(t,n,e);s.push(c);var l=this.conditionalValidations(t,n,f);!l||(this.customValidations(t,n,o,c),this.mapContexts(t,n,o,c),!(n===void 0&&this.validatorOptions&&this.validatorOptions.skipUndefinedProperties===!0)&&(n===null&&this.validatorOptions&&this.validatorOptions.skipNullProperties===!0||n==null&&this.validatorOptions&&this.validatorOptions.skipMissingProperties===!0||(this.customValidations(t,n,u,c),this.nestedValidations(n,p,c.children),this.mapContexts(t,n,i,c),this.mapContexts(t,n,u,c))))},r.prototype.generateValidationError=function(t,n,e){var o=new K;return(!this.validatorOptions||!this.validatorOptions.validationError||this.validatorOptions.validationError.target===void 0||this.validatorOptions.validationError.target===!0)&&(o.target=t),(!this.validatorOptions||!this.validatorOptions.validationError||this.validatorOptions.validationError.value===void 0||this.validatorOptions.validationError.value===!0)&&(o.value=n),o.property=e,o.children=[],o.constraints={},o},r.prototype.conditionalValidations=function(t,n,e){return e.map(function(o){return o.constraints[0](t,n)}).reduce(function(o,i){return o&&i},!0)},r.prototype.customValidations=function(t,n,e,o){var i=this;e.forEach(function(s){i.metadataStorage.getTargetValidatorConstraints(s.constraintCls).forEach(function(u){if(!(u.async&&i.ignoreAsyncValidations)&&!(i.validatorOptions&&i.validatorOptions.stopAtFirstError&&Object.keys(o.constraints||{}).length>0)){var p={targetName:t.constructor?t.constructor.name:void 0,property:s.propertyName,object:t,value:n,constraints:s.constraints};if(!s.each||!(Array.isArray(n)||n instanceof Set||n instanceof Map)){var f=u.instance.validate(n,p);if(Y(f)){var c=f.then(function(h){if(!h){var S=i.createValidationError(t,n,s,u),O=S[0],y=S[1];o.constraints[O]=y,s.context&&(o.contexts||(o.contexts={}),o.contexts[O]=Object.assign(o.contexts[O]||{},s.context))}});i.awaitingPromises.push(c)}else if(!f){var l=i.createValidationError(t,n,s,u),a=l[0],M=l[1];o.constraints[a]=M}return}var T=pn(n),I=T.map(function(h){return u.instance.validate(h,p)}),v=I.some(function(h){return Y(h)});if(v){var A=I.map(function(h){return Y(h)?h:Promise.resolve(h)}),w=Promise.all(A).then(function(h){var S=h.every(function(z){return z});if(!S){var O=i.createValidationError(t,n,s,u),y=O[0],q=O[1];o.constraints[y]=q,s.context&&(o.contexts||(o.contexts={}),o.contexts[y]=Object.assign(o.contexts[y]||{},s.context))}});i.awaitingPromises.push(w);return}var x=I.every(function(h){return h});if(!x){var C=i.createValidationError(t,n,s,u),a=C[0],M=C[1];o.constraints[a]=M}}})})},r.prototype.nestedValidations=function(t,n,e){var o=this;t!==void 0&&n.forEach(function(i){var s;if(!(i.type!==b.NESTED_VALIDATION&&i.type!==b.PROMISE_VALIDATION))if(Array.isArray(t)||t instanceof Set||t instanceof Map){var u=t instanceof Set?Array.from(t):t;u.forEach(function(M,T){o.performValidations(t,M,T.toString(),[],n,e)})}else if(t instanceof Object){var p=typeof i.target=="string"?i.target:i.target.name;o.execute(t,p,e)}else{var f=new K;f.value=t,f.property=i.propertyName,f.target=i.target;var c=o.createValidationError(i.target,t,i),l=c[0],a=c[1];f.constraints=(s={},s[l]=a,s),e.push(f)}})},r.prototype.mapContexts=function(t,n,e,o){var i=this;return e.forEach(function(s){if(s.context){var u=void 0;if(s.type===b.CUSTOM_VALIDATION){var p=i.metadataStorage.getTargetValidatorConstraints(s.constraintCls);u=p[0]}var f=i.getConstraintType(s,u);o.constraints[f]&&(o.contexts||(o.contexts={}),o.contexts[f]=Object.assign(o.contexts[f]||{},s.context))}})},r.prototype.createValidationError=function(t,n,e,o){var i=t.constructor?t.constructor.name:void 0,s=this.getConstraintType(e,o),u={targetName:i,property:e.propertyName,object:t,value:n,constraints:e.constraints},p=e.message||"";!e.message&&(!this.validatorOptions||this.validatorOptions&&!this.validatorOptions.dismissDefaultMessages)&&o&&o.instance.defaultMessage instanceof Function&&(p=o.instance.defaultMessage(u));var f=gn.replaceMessageSpecialTokens(p,u);return[s,f]},r.prototype.getConstraintType=function(t,n){var e=n&&n.name?n.name:t.type;return e},r}(),vn=globalThis&&globalThis.__awaiter||function(r,t,n,e){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function u(c){try{f(e.next(c))}catch(l){s(l)}}function p(c){try{f(e.throw(c))}catch(l){s(l)}}function f(c){c.done?i(c.value):o(c.value).then(u,p)}f((e=e.apply(r,t||[])).next())})},yn=globalThis&&globalThis.__generator||function(r,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(f){return function(c){return p([f,c])}}function p(f){if(e)throw new TypeError("Generator is already executing.");for(;n;)try{if(e=1,o&&(i=f[0]&2?o.return:f[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,f[1])).done)return i;switch(o=0,i&&(f=[f[0]&2,i.value]),f[0]){case 0:case 1:i=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,o=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!i||f[1]>i[0]&&f[1]<i[3])){n.label=f[1];break}if(f[0]===6&&n.label<i[1]){n.label=i[1],i=f;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(f);break}i[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(r,n)}catch(c){f=[6,c],o=0}finally{e=i=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},vt=function(){function r(){}return r.prototype.validate=function(t,n,e){return this.coreValidate(t,n,e)},r.prototype.validateOrReject=function(t,n,e){return vn(this,void 0,void 0,function(){var o;return yn(this,function(i){switch(i.label){case 0:return[4,this.coreValidate(t,n,e)];case 1:return o=i.sent(),o.length?[2,Promise.reject(o)]:[2]}})})},r.prototype.validateSync=function(t,n,e){var o=typeof t=="string"?n:t,i=typeof t=="string"?e:n,s=typeof t=="string"?t:void 0,u=new gt(this,i);u.ignoreAsyncValidations=!0;var p=[];return u.execute(o,s,p),u.stripEmptyErrors(p)},r.prototype.coreValidate=function(t,n,e){var o=typeof t=="string"?n:t,i=typeof t=="string"?e:n,s=typeof t=="string"?t:void 0,u=new gt(this,i),p=[];return u.execute(o,s,p),Promise.all(u.awaitingPromises).then(function(){return u.stripEmptyErrors(p)})},r}(),Sn=new(function(){function r(){this.instances=[]}return r.prototype.get=function(t){var n=this.instances.find(function(e){return e.type===t});return n||(n={type:t,object:new t},this.instances.push(n)),n.object},r}());function H(r){return Sn.get(r)}var mn=function(){function r(t,n,e){e===void 0&&(e=!1),this.target=t,this.name=n,this.async=e}return Object.defineProperty(r.prototype,"instance",{get:function(){return H(this.target)},enumerable:!1,configurable:!0}),r}();function xn(r){var t;if(r.validator instanceof Function){t=r.validator;var n=H(At).getTargetValidatorConstraints(r.validator);if(n.length>1)throw"More than one implementation of ValidatorConstraintInterface found for validator on: ".concat(r.target.name,":").concat(r.propertyName)}else{var e=r.validator;t=function(){function i(){}return i.prototype.validate=function(s,u){return e.validate(s,u)},i.prototype.defaultMessage=function(s){return e.defaultMessage?e.defaultMessage(s):""},i}(),tt().addConstraintMetadata(new mn(t,r.name,r.async))}var o={type:r.name&&b.isValid(r.name)?r.name:b.CUSTOM_VALIDATION,target:r.target,propertyName:r.propertyName,validationOptions:r.options,constraintCls:t,constraints:r.constraints};tt().addValidationMetadata(new Ot(o))}function _t(r,t){return function(n){var e=t&&t.each?"each value in ":"";return r(e,n)}}function Et(r,t){return function(n,e){xn({name:r.name,target:n.constructor,propertyName:e,options:t,constraints:r.constraints,validator:r.validator})}}var wn="isInt";function On(r){return typeof r=="number"&&Number.isInteger(r)}function An(r){return Et({name:wn,validator:{validate:function(t,n){return On(t)},defaultMessage:_t(function(t){return t+"$property must be an integer number"},r)}},r)}var _n="isString";function En(r){return r instanceof String||typeof r=="string"}function Mn(r){return Et({name:_n,validator:{validate:function(t,n){return En(t)},defaultMessage:_t(function(t){return t+"$property must be a string"},r)}},r)}function Cn(r,t,n){return typeof r=="string"?H(vt).validateSync(r,t,n):H(vt).validateSync(r,t)}const bn=(r,t,n=!0)=>{const o=bt((()=>{const i=localStorage.getItem(t);if(!i)return null;try{const s=JSON.parse(i),u=cn(r,s),p=Cn(u);if(p.length>0){if(n){const f=new r;p.forEach(c=>{const l=c.property;s[l]=f[l],localStorage.setItem(t,JSON.stringify(s))})}return n?s:null}return s}catch(s){return console.log(s),null}})()??ht(new r));return rt(()=>o,mt(i=>{localStorage.setItem(t,JSON.stringify(i))},400,{trailing:!0}),{deep:!0}),{storage:o,reset:()=>{Object.assign(o,ht(new r))},clear(){localStorage.removeItem(t)}}};var Tn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Mt=(r,t,n,e)=>{for(var o=e>1?void 0:e?In(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&Tn(t,n,o),o};class ot{constructor(){this.fontSize=14,this.fontFamily='"Helvetica Neue","Luxi Sans","DejaVu Sans","Hiragino Sans GB","Microsoft Yahei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols"'}}Mt([An()],ot.prototype,"fontSize",2);Mt([Mn()],ot.prototype,"fontFamily",2);const Ln=P({props:{resetFn:{type:Function,required:!0}},setup(r){return()=>d(It,{trigger:"hover"},{trigger(){return d(Tt,{text:!0,class:"ml-2",onClick:()=>r.resetFn()},{default:()=>[d(Z,{size:"20",class:"opacity-40 hover:opacity-100 transition-opacity duration-500"},{default:()=>[d(qt,null,null)]})]})},default(){return"\u5C06\u4F1A\u91CD\u7F6E\u8FD9\u4E9B\u8BBE\u5B9A"}})}}),Nn={editor:"editor-pref",general:"editor-general"},Pn=()=>{const{storage:r,reset:t}=bn(ot,Nn.general),n=P(()=>()=>d(Nt,null,[d(Lt,{class:"!flex items-center !mt-0"},{default:()=>[Q("\u901A\u7528\u8BBE\u7F6E"),d(Ln,{resetFn:t},null)]}),d(G,{label:"\u5B57\u4F53\u8BBE\u5B9A"},{default:()=>[d(yt,{onInput:e=>void(r.fontFamily=e),value:r.fontFamily},null)]}),d(G,{label:"\u5B57\u53F7\u8BBE\u5B9A"},{default:()=>[d(Rt,{onUpdateValue:e=>void(r.fontSize=e??14),value:r.fontSize},null)]}),d(G,{label:"\u6CE8\u610F: ",labelAlign:"right"},{default:()=>[d(St,null,{default:()=>[Q("\u4EE5\u4E0A\u8BBE\u5B9A\u6682\u65F6\u4E0D\u9002\u4E8E Monaco Editor")]})]})]));return{general:{setting:r,resetSetting:t,Panel:n}}},kn=()=>{const r=localStorage.getItem(xt.editor);if(!r)return null;try{const t=JSON.parse(r);return Object.keys(N).includes(t)?t:null}catch{return null}};let X=!1;const Vn=P({props:{...it,loading:{type:Boolean,required:!0}},setup(r){const t=kn(),n=B(t??N.codemirror),e=B(!1),o=Pt(),i=B();lt(()=>{if(X)return;const c=o.addFloatButton(d("button",{onClick:()=>{e.value=!0}},[d(Z,{size:18},{default:()=>[d(nn,null,null)]})])),l=o.addFloatButton(d("button",{onClick:()=>{i.value?.$el.requestFullscreen()}},[d(Z,{size:18},{default:()=>[d(Xt,null,null)]})]));return X=!0,()=>{o.removeFloatButton(c),o.removeFloatButton(l),X=!1}}),lt(()=>{document.addEventListener("fullscreenchange",c=>{document.fullscreenElement===i.value?document.documentElement.classList.add("editor-fullscreen"):document.documentElement.classList.remove("editor-fullscreen")})}),rt(()=>n.value,mt(c=>{localStorage.setItem(xt.editor,JSON.stringify(c))},300,{trailing:!0}));const s=B(),u=B(),{general:p}=Pn(),f=kt(()=>{if(r.loading)return d("div",{class:[W.editor,W.loading]},[d(D,{strokeWidth:14,show:!0,rotate:!0},null)]);switch(n.value){case"monaco":{const c=U(n.value);return d(c,ct({ref:s},r),null)}case"plain":{const c=U(n.value);return d(c,r,null)}case"vditor":{const c=U(n.value);return console.log(c),d(c,ct(r,{innerRef:u}),null)}case"codemirror":{const c=U(n.value);return d(c,r,null)}default:return null}});return()=>{const{Panel:c,setting:l}=p;return d(Vt,{tag:"div",style:{"--editor-font-size":l.fontSize?`${l.fontSize/14}rem`:"","--editor-font-family":l.fontFamily},class:"editor-wrapper",ref:i},{default:()=>[f.value,d(Bt,{transformOrigin:"center",show:e.value,onUpdateShow:a=>void(e.value=a)},{default:()=>[d(Dt,{closable:!0,onClose:()=>{e.value=!1},title:"\u7F16\u8F91\u5668\u8BBE\u5B9A",style:"max-width: 90vw;width: 500px; max-height: 65vh; overflow: auto",bordered:!1},{default:()=>[d(St,{class:"text-center"},{default:()=>[d(jt,{depth:"3"},{default:()=>[Q("\u6B64\u8BBE\u5B9A\u4EC5\u5B58\u50A8\u5728\u672C\u5730!")]})]}),d(Ut,{labelPlacement:"left",labelWidth:"8rem",labelAlign:"right"},{default:()=>[d(G,{label:"\u7F16\u8F91\u5668\u9009\u62E9"},{default:()=>[d($t,{value:n.value,onUpdateValue:a=>void(n.value=a),options:Object.keys(N).map(a=>({key:a,label:a,value:a}))},null)]}),d(c,null,null)]})]})]})]})}}}),Fn=$({loader:()=>Promise.resolve(Vn),loadingComponent:()=>d(D,{strokeWidth:14,show:!0,rotate:!0},null)}),Wn=P({props:{...it,loading:{type:Boolean,required:!0}},setup(r){return()=>d(Ft,null,{default(){return d(Fn,r,null)},fallback(){return d("div",{class:[W.editor,W.loading]},[d(D,{strokeWidth:14,show:!0,rotate:!0},null)])}})}});export{Wn as E,Mn as I,pt as P,Et as V,_t as b,it as e,W as s,bn as u};
