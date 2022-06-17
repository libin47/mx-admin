import{_,b as B,S as $,M as q,N as G,a as J}from"./material-input-94a8968d.js";import{f as R,H as p,a as e,bP as K,bR as Q,d as F,N as j,b as U,F as w,j as X,k as Y,u as Z,E as ee,n as D,p as te,m as ae,R as N,bs as x,br as le,I as ne,C as oe,bt as re,W as se}from"./index-23675994.js";import{U as ue}from"./Upload-3351b9e6.js";import{H as k}from"./rounded-button-7c59c61c.js";import{E as P}from"./toggle-cebab316.js";import{U as ie}from"./underline-input-21e7236d.js";import{u as de}from"./album-c7272296.js";import{i as ce}from"./isString-f2f8848c.js";import{a as fe}from"./Upload-6e9d366d.js";import{N as pe}from"./Form-803b561c.js";import{N as S}from"./FormItem-f55390e0.js";import{N as he}from"./Select-96fa6219.js";import{N as M}from"./Switch-ff645ce9.js";import"./use-react-b6888cd4.js";import"./use-save-confirm-6f0bbfea.js";import"./throttle-d4ef57ab.js";import"./InputNumber-4cc9bfb6.js";import"./Add-17a04330.js";import"./Image-ee018841.js";import"./Tooltip-fa6ed610.js";import"./index-c6a5c591.js";import"./Tag-cf0fa0d0.js";const me=R({props:{data:{type:Object,required:!0}},setup(h){const l=p(!1),s=p(""),y=u=>{const c=u.trim().split(`
`),v=c.slice(0,1)[0].replace("# ","");h.data.title=v,c.shift(),h.data.text=c.filter(Boolean).join(`

`),l.value=!1};return()=>e(w,null,[e(k,{icon:e(_,null,null),variant:"info",onClick:()=>l.value=!0},null),e(K,{show:l.value,onUpdateShow:u=>l.value=u},{default:()=>[e(Q,{title:"\u89E3\u6790 Markdown",class:"modal-card",closable:!0,onClose:()=>l.value=!1},{default:()=>[e(F,{vertical:!0,size:"large"},{default:()=>[e(P,{loading:!1,onChange:u=>void(s.value=u),text:s.value,unSaveConfirm:!1},null),e(F,{justify:"end"},{default:()=>[e(j,{round:!0,type:"primary",onClick:()=>y(s.value)},{default:()=>[U("\u786E\u5B9A")]}),e(j,{onClick:u=>{s.value=""},round:!0},{default:()=>[U("\u91CD\u7F6E")]})]})]})]})]})])}});class ve{arr=[];add(l){this.indexOf(l)<0&&this.arr.push(l)}remove(l){var s=this.indexOf(l);s>=0&&delete this.arr[s]}indexOf(l){return this.arr.indexOf(l)}size(){return Object.keys(this.arr).length}toArray(){for(var l=new Array,s=0;s<this.arr.length;s++)this.arr[s]&&l.push(this.arr[s]);return l}clear(){this.arr=[]}}const ze=R(()=>{const h=X(),l=Y(de),s=Z(),y=ee(),u=D(()=>h.query.id);var m=new ve;const c=p(!1);var f=p(!1),v=p(!0);u.value&&(f.value=!0);const a=te((()=>({albumId:l.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,hide:!1,length:0,photos:[],photo:[]}))());function W(t,n){var r=new Image;r.src=t.result,r.onload=function(){var o=r.naturalWidth,d=r.naturalHeight,i=0,C=0,g={width:1e3,height:1e3,level:.5};if(o>g.width||d>g.height){var E=Math.max(o/g.width,d/g.height);i=o/E,C=d/E}else return n();var b=document.createElement("canvas"),L=b.getContext("2d");b.width=i,b.height=C,L?.drawImage(r,0,0,i,C);var T=b.toDataURL("image/jpeg",g.level);n(T)}}let I;ae(async()=>{await l.fetch();const t=u.value;if(t&&typeof t=="string"){const{data:n}=await N.api.photos(t).get();O(n)}I=R({setup(){return()=>e(w,null,[e(B,null,null),e(fe,{multiple:!0,accept:".png,.jpg,.jpeg,.webp,.gif","show-preview-button":!0,"show-download-button":!0,"default-upload":!1,"list-type":"image-card",action:"/upload","default-file-list":a.photo,"create-thumbnail-url":n=>{var r=new FileReader;return r.readAsDataURL(n),new Promise(o=>{r.onload=function(d){W(r,function(i){o(i)})}})},"on-finish":n=>{const r=n.event.target.response.substr(67,32);n.file.file=r},"on-change":n=>{var r=n.fileList.length,o=0;m.clear();for(let d=0;d<r;d++){const i=n.fileList[d];if(i.status=="finished")o+=1,m.add(typeof i.file=="string"?i.file:"");else break}r==o?v.value=!0:v.value=!1},"on-remove":n=>{n.file.status=="finished"&&console.log(n.file.file)},ref:A},{default:()=>[U("\u70B9\u51FB\u6DFB\u52A0\u56FE\u7247")]}),e(B,null,null)])}})});const O=t=>{const n=x(a),r=Object.keys(n);for(const o in t)r.includes(o)&&(a[o]=t[o]);a.photo=a.photos.map(o=>(m.add(o),{id:o,file:o,name:"pic",status:"finished",percentage:100,url:"https://image.wind-watcher.cn/"+o})),a.length=a.photos.length},V=D(()=>l.get(a.albumId)||l.data?.value?.[0]||{}),z=async()=>{A.value.submit()},H=async()=>{if(a.photos=m.toArray(),a.length=a.photos.length,u.value){if(!ce(u.value))return;const t=u.value;await N.api.photos(t).put({data:{...x(a)}}),s.success("\u4FEE\u6539\u6210\u529F")}else await N.api.photos.post({data:{...x(a)}}),s.success("\u53D1\u5E03\u6210\u529F");y.push({name:re.EditAlbum,hash:"|publish"})},A=p(null);return()=>e(oe,{title:u.value?"\u4E0A\u4F20\u7167\u7247":"\u4E0A\u4F20\u65B0\u7167\u7247",actionsElement:e(w,null,[e(me,{data:a},null),e(k,{icon:e(ue,null,null),onClick:z},null),e(k,{icon:e(le,null,null),onClick:H,disabled:!f.value||!v.value},null)]),footerButtonElement:e(w,null,[e("button",{onClick:()=>{c.value=!0}},[e(ne,null,{default:()=>[e($,null,null)]})])])},{default:()=>[e("div",{class:"text-gray-500 py-3"},[e("label",{class:"prefix"},[`${se}/${V.value.slug}/`]),e(ie,{class:"ml-2",value:a.slug,onChange:t=>{a.slug=t,t.length>0&&a.title.length>0?f.value=!0:f.value=!1}},null)]),e(I,null,null),e(q,{class:"mt-3 relative z-10",label:"\u7B80\u8981\u4ECB\u7ECD\u4E00\u4E0B\u5427~",value:a.title,onChange:t=>{a.title=t,t.length>0&&a.slug.length>0?f.value=!0:f.value=!1}},null),e(P,{loading:!!(u.value&&!a.title),onChange:t=>{a.text=t},text:a.text},null),e(G,{show:c.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:t=>{c.value=t}},{default:()=>[e(J,{title:"\u4E0A\u4F20\u5230"},{default:()=>[e(pe,null,{default:()=>[e(S,{label:"\u5206\u7C7B",required:!0,path:"album"},{default:()=>[e(he,{placeholder:"\u8BF7\u9009\u62E9",value:a.albumId,onUpdateValue:t=>{a.albumId=t},options:l.data.value?.map(t=>({label:t.name,value:t.id,key:t.id}))||[]},null)]}),e(S,{label:"\u662F\u5426\u9690\u85CF",labelWidth:100,labelAlign:"right",labelPlacement:"left"},{default:()=>[e(M,{value:a.hide,onUpdateValue:t=>void(a.hide=t)},null)]}),e(S,{label:"\u7248\u6743\u6CE8\u660E",labelWidth:100,labelAlign:"right",labelPlacement:"left"},{default:()=>[e(M,{value:a.copyright,onUpdateValue:t=>void(a.copyright=t)},null)]})]})]})]})]})});export{ze as default};
