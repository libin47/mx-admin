import{dE as u,dF as F,dG as T,dH as w,dI as D,dJ as K,dc as R,dK as W,dL as C,dM as m,dN as Y,ca as M,ds as A,dO as d,dP as _,bW as H,c9 as J,dQ as Q,d7 as V,dR as X,dS as Z,dT as q,dU as z,dV as k,dW as rr,dX as er,dY as tr,dZ as B,d_ as nr,d$ as ar,e0 as or}from"./index-e5a974ac.js";import{a as sr}from"./_arrayEach-2ff48152.js";function ir(r,e){return r&&u(e,F(e),r)}function cr(r,e){return r&&u(e,T(e),r)}function fr(r,e){return u(r,w(r),e)}var gr=Object.getOwnPropertySymbols,ur=gr?function(r){for(var e=[];r;)K(e,w(r)),r=R(r);return e}:D,P=ur;function br(r,e){return u(r,P(r),e)}function U(r){return W(r,T,P)}var lr=Object.prototype,yr=lr.hasOwnProperty;function dr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&yr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function Tr(r,e){var n=e?C(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var Ar=/\w*$/;function jr(r){var e=new r.constructor(r.source,Ar.exec(r));return e.lastIndex=r.lastIndex,e}var O=m?m.prototype:void 0,I=O?O.valueOf:void 0;function pr(r){return I?Object(I.call(r)):{}}var $r="[object Boolean]",Sr="[object Date]",mr="[object Map]",Or="[object Number]",Ir="[object RegExp]",Lr="[object Set]",Er="[object String]",Fr="[object Symbol]",wr="[object ArrayBuffer]",Cr="[object DataView]",Mr="[object Float32Array]",_r="[object Float64Array]",Br="[object Int8Array]",Pr="[object Int16Array]",Ur="[object Int32Array]",Gr="[object Uint8Array]",vr="[object Uint8ClampedArray]",hr="[object Uint16Array]",xr="[object Uint32Array]";function Nr(r,e,n){var s=r.constructor;switch(e){case wr:return C(r);case $r:case Sr:return new s(+r);case Cr:return Tr(r,n);case Mr:case _r:case Br:case Pr:case Ur:case Gr:case vr:case hr:case xr:return Y(r,n);case mr:return new s;case Or:case Er:return new s(r);case Ir:return jr(r);case Lr:return new s;case Fr:return pr(r)}}var Dr="[object Map]";function Kr(r){return M(r)&&A(r)==Dr}var L=d&&d.isMap,Rr=L?_(L):Kr,Wr=Rr,Yr="[object Set]";function Hr(r){return M(r)&&A(r)==Yr}var E=d&&d.isSet,Jr=E?_(E):Hr,Qr=Jr,Vr=1,Xr=2,Zr=4,G="[object Arguments]",qr="[object Array]",zr="[object Boolean]",kr="[object Date]",re="[object Error]",v="[object Function]",ee="[object GeneratorFunction]",te="[object Map]",ne="[object Number]",h="[object Object]",ae="[object RegExp]",oe="[object Set]",se="[object String]",ie="[object Symbol]",ce="[object WeakMap]",fe="[object ArrayBuffer]",ge="[object DataView]",ue="[object Float32Array]",be="[object Float64Array]",le="[object Int8Array]",ye="[object Int16Array]",de="[object Int32Array]",Te="[object Uint8Array]",Ae="[object Uint8ClampedArray]",je="[object Uint16Array]",pe="[object Uint32Array]",t={};t[G]=t[qr]=t[fe]=t[ge]=t[zr]=t[kr]=t[ue]=t[be]=t[le]=t[ye]=t[de]=t[te]=t[ne]=t[h]=t[ae]=t[oe]=t[se]=t[ie]=t[Te]=t[Ae]=t[je]=t[pe]=!0;t[re]=t[v]=t[ce]=!1;function y(r,e,n,s,c,o){var a,b=e&Vr,l=e&Xr,x=e&Zr;if(n&&(a=c?n(r,s,c,o):n(r)),a!==void 0)return a;if(!H(r))return r;var j=J(r);if(j){if(a=dr(r),!b)return Q(r,a)}else{var g=A(r),p=g==v||g==ee;if(V(r))return X(r,b);if(g==h||g==G||p&&!c){if(a=l||p?{}:Z(r),!b)return l?br(r,cr(a,r)):fr(r,ir(a,r))}else{if(!t[g])return c?r:{};a=Nr(r,g,b)}}o||(o=new q);var $=o.get(r);if($)return $;o.set(r,a),Qr(r)?r.forEach(function(i){a.add(y(i,e,n,i,r,o))}):Wr(r)&&r.forEach(function(i,f){a.set(f,y(i,e,n,f,r,o))});var N=x?l?U:k:l?T:F,S=j?void 0:N(r);return sr(S||r,function(i,f){S&&(f=i,i=r[f]),z(a,f,y(i,e,n,f,r,o))}),a}function $e(r){var e=r==null?0:r.length;return e?r[e-1]:void 0}function Se(r,e){return e.length<2?r:rr(r,er(e,0,-1))}function me(r,e){return e=B(e,r),r=Se(r,e),r==null||delete r[tr($e(e))]}function Oe(r){return nr(r)?void 0:r}var Ie=1,Le=2,Ee=4,Fe=ar(function(r,e){var n={};if(r==null)return n;var s=!1;e=or(e,function(o){return o=B(o,r),s||(s=o.length>1),o}),u(r,U(r),n),s&&(n=y(n,Ie|Le|Ee,Oe));for(var c=e.length;c--;)me(n,e[c]);return n}),Me=Fe;export{y as b,Me as o};
