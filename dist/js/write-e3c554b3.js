import{H as b}from"./rounded-button-72b1e886.js";import{P as y,T as w}from"./parse-content-650b579d.js";import{E as C}from"./toggle-22917f4e.js";import{f as I,j as P,p as R,n as x,m as E,R as n,H as N,u as S,E as M,a,F as u,br as T,I as B,C as H,bt as U,W as D,bs as W}from"./index-e5bed378.js";import{S as F,M as L}from"./material-input-6133ad8b.js";import{U as m}from"./underline-input-9196dcad.js";import{u as V}from"./use-parse-payload-87ac3556.js";import{i as $}from"./isString-41a5ba2c.js";import{N as k}from"./FormItem-24528282.js";import{N as j}from"./InputNumber-3a52e580.js";import"./CollapseItem-1a024516.js";import"./ChevronRight-dc5aeee4.js";import"./Form-73b4dc50.js";import"./ButtonGroup-e105db15.js";import"./use-async-monaco-18fd4c1f.js";import"./index-ba2a8749.js";import"./editor.main-fd384321.js";import"./use-save-confirm-a8d5eab8.js";import"./Switch-bffe92a5.js";import"./DynamicInput-1002c2fc.js";import"./Add-e315e65f.js";import"./ArrowDown-69f332f3.js";import"./js-yaml-fae8e8ce.js";import"./use-react-0ae4677a.js";import"./throttle-a5ae19ab.js";import"./Select-239870b5.js";import"./Tag-51d685b8.js";import"./index-fad78fc5.js";const vt=I(()=>{const p=P(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>V(t)(e),t=R(d()),l=x(()=>p.query.id);E(async()=>{const e=l.value;if(e&&typeof e=="string"){const i=(await n.api.pages(e).get({})).data;c(i)}});const s=N(!1),r=S(),g=M(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"\u6807\u9898\u4E3A\u7A7A";if(!t.slug)throw"\u8DEF\u5F84\u4E3A\u7A7A";return{...W(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw r.error(o),o}};if(l.value){if(!$(l.value))return;const o=l.value;await n.api.pages(o).put({data:e()}),r.success("\u4FEE\u6539\u6210\u529F")}else await n.api.pages.post({data:e()}),r.success("\u53D1\u5E03\u6210\u529F");g.push({name:U.ListPage,hash:"|publish"})};return()=>a(H,{actionsElement:a(u,null,[a(y,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:i,subtitle:v,...h}=e;t.title=o??t.title,t.slug=i??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(b,{icon:a(T,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{s.value=!0}},[a(B,null,{default:()=>[a(F,null,null)]})])])},{default:()=>[a(L,{class:"mt-3 relative z-10",label:"\u4E0E\u4F60\u6709\u4E2A\u597D\u5FC3\u60C5~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 pt-3"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${D}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(C,{loading:!!(l.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(w,{onUpdateShow:e=>{s.value=e},data:t,show:s.value},{default:()=>[a(k,{label:"\u9875\u9762\u987A\u5E8F"},{default:()=>[a(j,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{vt as default};
