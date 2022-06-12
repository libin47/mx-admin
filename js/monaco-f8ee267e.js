import{f as x,H as C,k as E,v as S,O as _,m as w,bs as L,w as b,a as h,b_ as y}from"./index-d12868e1.js";import{u as D,C as R}from"./index-0ec46b47.js";import{u as k}from"./use-save-confirm-e6ccd567.js";import{e as A,s as N}from"./toggle-42bad408.js";import"./use-react-c61188f0.js";import"./throttle-6b7e9902.js";import"./FormItem-c40e0e72.js";import"./Form-ba393540.js";import"./index-17c3e39a.js";import"./InputNumber-911f731c.js";import"./Add-7dfeb60a.js";import"./Select-07750eb4.js";import"./Tag-ae5139ae.js";const V=x({props:{innerRef:{type:Object},...A},setup(a){const i=C(),l=C(!1);let n;const{isDark:r}=E(S);D(),_(()=>{n?.dispose?.()}),w(async()=>{!i.value||(n=await K(i.value,a.text,r),l.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(e=>{n[e](()=>{const c=n.getValue();a.onChange(c)})}),a.innerRef&&(a.innerRef.value=n))});let t=L(a.text);return b(()=>a.text,e=>{!t&&e&&(t=e),n&&e!=n.getValue()&&n.setValue(e)}),k(a.unSaveConfirm,()=>t===n.getValue()),()=>h("div",{class:["editor relative overflow-hidden",N.editor],ref:i},[l.value?null:h(R,null,null)])}}),z=V,K=async(a,i,l)=>{const{editor:n,KeyCode:r,KeyMod:t}=await y(()=>import("./editor.main-8d5a4ff7.js").then(function(o){return o.e}),["js/editor.main-8d5a4ff7.js","assets/editor.main.339eee99.css","js/index-d12868e1.js","assets/index.f746a3c0.css"]),e=n.create(a,{value:i,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:l.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});b(()=>l.value,o=>{e.updateOptions({theme:o?"dark":"light"})}),e.addAction({id:"bold",label:"bold",keybindings:[t.CtrlCmd|r.KeyB],run:o=>(m(e,"**"),null)}),e.addAction({id:"em",label:"em",keybindings:[t.CtrlCmd|r.KeyI],run:o=>(m(e,"*"),null)}),e.addAction({id:"null",label:"null",keybindings:[t.CtrlCmd|r.KeyS,t.Shift|t.Alt|r.KeyF],run:o=>null}),e.addAction({id:"del",label:"del",keybindings:[t.Alt|r.KeyD],run:o=>(m(e,"~~"),null)});const c=[,r.Digit1,r.Digit2,r.Digit3,r.Digit4,r.Digit5];return Array.from({length:5}).fill(null).forEach((o,v)=>{const s=v+1;e.addAction({id:`head-${s}`,label:"heading",keybindings:[t.CtrlCmd|c[s]],run:u=>{const g=u.getSelection();if(!g)return null;const d=g.startLineNumber,f={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:s+2},p=u.getModel()?.getValueInRange(f);if(p&&p==`${"#".repeat(s)} `){u.executeEdits("",[{range:f,text:""}]);return}u.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(s)} `}])}})}),e},m=async(a,i)=>{const{Selection:l}=await y(()=>import("./editor.main-8d5a4ff7.js").then(function(e){return e.e}),["js/editor.main-8d5a4ff7.js","assets/editor.main.339eee99.css","js/index-d12868e1.js","assets/index.f746a3c0.css"]),n=a;if(!n)return;const r=i.length,t=n.getSelection();if(!!t)if(t.startLineNumber==t.endLineNumber&&t.startColumn==t.endColumn){n.executeEdits("",[{range:t,text:i.repeat(2)}]);const e=new l(t.startLineNumber,t.startColumn+r,t.startLineNumber,t.startColumn+r);n.setSelection(e)}else{const e=n.getModel()?.getValueInRange(t);if(!e)return;if(e.startsWith(i)&&e.endsWith(i)){n.executeEdits("",[{range:t,text:`${e.slice(r,e.length-r)}`}]);return}n.executeEdits("",[{range:t,text:`${i}${e}${i}`}])}};export{z as MonacoEditor};
