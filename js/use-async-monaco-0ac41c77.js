import{cd as d,ce as ie,x as Y,w as z,d as ae,h as oe,j as se,cf as ce,k as ue,bS as le,bh as fe,U as de}from"./index-34956879.js";import{u as he,C as ve}from"./index-ff4af6ce.js";import{e as pe}from"./editor.main-759b9211.js";import{u as ye}from"./use-save-confirm-803c5db5.js";var q={},E={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.DummySourceCache=void 0;var ge=function(){function i(){}return i.prototype.getFile=function(t){return Promise.resolve(void 0)},i.prototype.isFileAvailable=function(t){return Promise.resolve(!1)},i.prototype.storeFile=function(t,e){return Promise.resolve(void 0)},i.prototype.clear=function(){return Promise.resolve(void 0)},i}();N.DummySourceCache=ge;var A={},J=d&&d.__awaiter||function(i,t,e,n){function a(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function c(u){try{s(n.next(u))}catch(f){o(f)}}function l(u){try{s(n.throw(u))}catch(f){o(f)}}function s(u){u.done?r(u.value):a(u.value).then(c,l)}s((n=n.apply(i,t||[])).next())})},B=d&&d.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(r=s[0]&2?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1],r=s;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(s);break}r[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(i,e)}catch(u){s=[6,u],a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};Object.defineProperty(A,"__esModule",{value:!0});A.UnpkgSourceResolver=void 0;var me=function(){function i(){}return i.prototype.resolvePackageJson=function(t,e,n){return J(this,void 0,void 0,function(){return B(this,function(a){switch(a.label){case 0:return[4,this.resolveFile("https://unpkg.com/".concat(t).concat(e?"@".concat(e):"").concat(n?"/".concat(n):"","/package.json"))];case 1:return[2,a.sent()]}})})},i.prototype.resolveSourceFile=function(t,e,n){return J(this,void 0,void 0,function(){return B(this,function(a){switch(a.label){case 0:return[4,this.resolveFile("https://unpkg.com/".concat(t).concat(e?"@".concat(e):"","/").concat(n))];case 1:return[2,a.sent()]}})})},i.prototype.resolveFile=function(t){return J(this,void 0,void 0,function(){var e;return B(this,function(n){switch(n.label){case 0:return[4,fetch(t,{method:"GET"})];case 1:return e=n.sent(),e.ok?[4,e.text()]:[3,3];case 2:return[2,n.sent()];case 3:if(e.status===404)return[2,""];throw Error("Error other than 404 while fetching from Unpkg at ".concat(t));case 4:return[2]}})})},i}();A.UnpkgSourceResolver=me;var x={},L={};function P(i){if(typeof i!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(i))}function H(i,t){for(var e="",n=0,a=-1,r=0,o,c=0;c<=i.length;++c){if(c<i.length)o=i.charCodeAt(c);else{if(o===47)break;o=47}if(o===47){if(!(a===c-1||r===1))if(a!==c-1&&r===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",n=0):(e=e.slice(0,l),n=e.length-1-e.lastIndexOf("/")),a=c,r=0;continue}}else if(e.length===2||e.length===1){e="",n=0,a=c,r=0;continue}}t&&(e.length>0?e+="/..":e="..",n=2)}else e.length>0?e+="/"+i.slice(a+1,c):e=i.slice(a+1,c),n=c-a-1;a=c,r=0}else o===46&&r!==-1?++r:r=-1}return e}function be(i,t){var e=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+n:e+i+n:n}var j={resolve:function(){for(var t="",e=!1,n,a=arguments.length-1;a>=-1&&!e;a--){var r;a>=0?r=arguments[a]:(n===void 0&&(n=process.cwd()),r=n),P(r),r.length!==0&&(t=r+"/"+t,e=r.charCodeAt(0)===47)}return t=H(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(P(t),t.length===0)return".";var e=t.charCodeAt(0)===47,n=t.charCodeAt(t.length-1)===47;return t=H(t,!e),t.length===0&&!e&&(t="."),t.length>0&&n&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return P(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var n=arguments[e];P(n),n.length>0&&(t===void 0?t=n:t+="/"+n)}return t===void 0?".":j.normalize(t)},relative:function(t,e){if(P(t),P(e),t===e||(t=j.resolve(t),e=j.resolve(e),t===e))return"";for(var n=1;n<t.length&&t.charCodeAt(n)===47;++n);for(var a=t.length,r=a-n,o=1;o<e.length&&e.charCodeAt(o)===47;++o);for(var c=e.length,l=c-o,s=r<l?r:l,u=-1,f=0;f<=s;++f){if(f===s){if(l>s){if(e.charCodeAt(o+f)===47)return e.slice(o+f+1);if(f===0)return e.slice(o+f)}else r>s&&(t.charCodeAt(n+f)===47?u=f:f===0&&(u=0));break}var v=t.charCodeAt(n+f),p=e.charCodeAt(o+f);if(v!==p)break;v===47&&(u=f)}var h="";for(f=n+u+1;f<=a;++f)(f===a||t.charCodeAt(f)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+e.slice(o+u):(o+=u,e.charCodeAt(o)===47&&++o,e.slice(o))},_makeLong:function(t){return t},dirname:function(t){if(P(t),t.length===0)return".";for(var e=t.charCodeAt(0),n=e===47,a=-1,r=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),e===47){if(!r){a=o;break}}else r=!1;return a===-1?n?"/":".":n&&a===1?"//":t.slice(0,a)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');P(t);var n=0,a=-1,r=!0,o;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var c=e.length-1,l=-1;for(o=t.length-1;o>=0;--o){var s=t.charCodeAt(o);if(s===47){if(!r){n=o+1;break}}else l===-1&&(r=!1,l=o+1),c>=0&&(s===e.charCodeAt(c)?--c===-1&&(a=o):(c=-1,a=l))}return n===a?a=l:a===-1&&(a=t.length),t.slice(n,a)}else{for(o=t.length-1;o>=0;--o)if(t.charCodeAt(o)===47){if(!r){n=o+1;break}}else a===-1&&(r=!1,a=o+1);return a===-1?"":t.slice(n,a)}},extname:function(t){P(t);for(var e=-1,n=0,a=-1,r=!0,o=0,c=t.length-1;c>=0;--c){var l=t.charCodeAt(c);if(l===47){if(!r){n=c+1;break}continue}a===-1&&(r=!1,a=c+1),l===46?e===-1?e=c:o!==1&&(o=1):e!==-1&&(o=-1)}return e===-1||a===-1||o===0||o===1&&e===a-1&&e===n+1?"":t.slice(e,a)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return be("/",t)},parse:function(t){P(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var n=t.charCodeAt(0),a=n===47,r;a?(e.root="/",r=1):r=0;for(var o=-1,c=0,l=-1,s=!0,u=t.length-1,f=0;u>=r;--u){if(n=t.charCodeAt(u),n===47){if(!s){c=u+1;break}continue}l===-1&&(s=!1,l=u+1),n===46?o===-1?o=u:f!==1&&(f=1):o!==-1&&(f=-1)}return o===-1||l===-1||f===0||f===1&&o===l-1&&o===c+1?l!==-1&&(c===0&&a?e.base=e.name=t.slice(1,l):e.base=e.name=t.slice(c,l)):(c===0&&a?(e.name=t.slice(1,o),e.base=t.slice(1,l)):(e.name=t.slice(c,o),e.base=t.slice(c,l)),e.ext=t.slice(o,l)),c>0?e.dir=t.slice(0,c-1):a&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};j.posix=j;var $=j,_e=d&&d.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var a=Object.getOwnPropertyDescriptor(t,e);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,a)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),ke=d&&d.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),we=d&&d.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&_e(t,i,e);return ke(t,i),t},Pe=d&&d.__read||function(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var n=e.call(i),a,r=[],o;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)r.push(a.value)}catch(c){o={error:c}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(o)throw o.error}}return r},Se=d&&d.__spreadArray||function(i,t,e){if(e||arguments.length===2)for(var n=0,a=t.length,r;n<a;n++)(r||!(n in t))&&(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return i.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(L,"__esModule",{value:!0});L.DependencyParser=void 0;var Ce=we($),De=function(){function i(){this.REGEX_CLEAN=/[\n|\r]/g,this.REGEX_DETECT_IMPORT=/(?:(?:(?:import)|(?:export))(?:.)*?from\s+["']([^"']+)["'])|(?:\/+\s+<reference\s+path=["']([^"']+)["']\s+\/>)/g}return i.prototype.parseDependencies=function(t,e){var n=this,a=t;return Se([],Pe(a.matchAll(this.REGEX_DETECT_IMPORT)),!1).map(function(r){var o;return(o=r[1])!==null&&o!==void 0?o:r[2]}).filter(function(r){return!!r}).map(function(r){var o=n.resolvePath(r,e);return o})},i.prototype.resolvePath=function(t,e){if(typeof e=="string"){if(t.startsWith("."))return{kind:"relative",importPath:t,sourcePath:e};if(t.startsWith("@")){var n=t.split("/");return{kind:"package",packageName:"".concat(n[0],"/").concat(n[1]),importPath:n.slice(2).join("/")}}else{var n=t.split("/");return{kind:"package",packageName:n[0],importPath:n.slice(1).join("/")}}}else switch(e.kind){case"package":throw Error("TODO?");case"relative":throw Error("TODO2?");case"relative-in-package":if(t.startsWith("."))return{kind:"relative-in-package",packageName:e.packageName,sourcePath:Ce.join(e.sourcePath,e.importPath),importPath:t};if(t.startsWith("@")){var n=t.split("/");return{kind:"package",packageName:"".concat(n[0],"/").concat(n[1]),importPath:n.slice(2).join("/")}}else{var n=t.split("/");return{kind:"package",packageName:n[0],importPath:n.slice(1).join("/")}}}},i}();L.DependencyParser=De;var R={},Oe=d&&d.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(R,"__esModule",{value:!0});R.importResourcePathToString=void 0;var K=Oe($),je=function(i){var t;switch(i.kind){case"package":return K.default.join(i.packageName,(t=i.importPath)!==null&&t!==void 0?t:"","package.json");case"relative":return K.default.join(i.sourcePath,i.importPath);case"relative-in-package":return K.default.join(i.packageName,i.sourcePath,i.importPath)}};R.importResourcePathToString=je;var F={};Object.defineProperty(F,"__esModule",{value:!0});F.invokeUpdate=void 0;var Ae=function(i,t){var e,n="".concat(i.type,": ");switch(i.type){case"CodeChanged":n+="";break;case"ResolveNewImports":n+="";break;case"LookedUpTypeFile":n+='"'.concat(i.path,'" was ').concat(i.success?"sucessfully":"not sucessfully"," looked up");break;case"AttemptedLookUpFile":n+='"'.concat(i.path,'" was ').concat(i.success?"sucessfully":"not sucessfully"," attempted to looked up");break;case"LookedUpPackage":n+='package.json for package "'.concat(i.package,'" was ').concat(i.success?"sucessfully":"not sucessfully"," looked up").concat(i.definitelyTyped?" (found in definitely typed repo)":"");break;case"LoadedFromCache":n+='"'.concat(i.importPath,'" was loaded from cache');break;case"StoredToCache":n+='"'.concat(i.importPath,'" was stored to cache');break}n.endsWith(": ")&&(n=n.slice(void 0,-2)),(e=t.onUpdate)===null||e===void 0||e.call(t,i,n)};F.invokeUpdate=Ae;var T={};Object.defineProperty(T,"__esModule",{value:!0});T.RecursionDepth=void 0;var Re=function(){function i(t,e,n){e===void 0&&(e=0),n===void 0&&(n=0),this.options=t,this.fileRecursionDepth=e,this.packageRecursionDepth=n}return i.prototype.nextPackage=function(){return new i(this.options,this.fileRecursionDepth,this.packageRecursionDepth+1)},i.prototype.nextFile=function(){return new i(this.options,this.fileRecursionDepth+1,this.packageRecursionDepth)},i.prototype.same=function(){return new i(this.options,this.fileRecursionDepth,this.packageRecursionDepth)},i.prototype.shouldStop=function(){return this.options.fileRecursionDepth>0&&this.fileRecursionDepth>=this.options.fileRecursionDepth||this.options.packageRecursionDepth>0&&this.packageRecursionDepth>=this.options.packageRecursionDepth},i}();T.RecursionDepth=Re;var M=d&&d.__assign||function(){return M=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},M.apply(this,arguments)},Fe=d&&d.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var a=Object.getOwnPropertyDescriptor(t,e);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,a)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),Te=d&&d.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),Ie=d&&d.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&Fe(t,i,e);return Te(t,i),t},C=d&&d.__awaiter||function(i,t,e,n){function a(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function c(u){try{s(n.next(u))}catch(f){o(f)}}function l(u){try{s(n.throw(u))}catch(f){o(f)}}function s(u){u.done?r(u.value):a(u.value).then(c,l)}s((n=n.apply(i,t||[])).next())})},D=d&&d.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(r=s[0]&2?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1],r=s;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(s);break}r[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(i,e)}catch(u){s=[6,u],a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},G=d&&d.__values||function(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],n=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},Ue=d&&d.__read||function(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var n=e.call(i),a,r=[],o;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)r.push(a.value)}catch(c){o={error:c}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(o)throw o.error}}return r};Object.defineProperty(x,"__esModule",{value:!0});x.ImportResolver=void 0;var Me=L,Ee=R,m=Ie($),b=F,Ne=T,xe=function(){function i(t){var e,n;if(this.options=t,this.loadedFiles=[],this.dependencyParser=new Me.DependencyParser,this.cache=t.sourceCache,this.sourceResolver=t.sourceResolver,this.newImportsResolved=!1,this.monaco=t.monaco,t.preloadPackages&&t.versions)try{for(var a=G(Object.entries(t.versions)),r=a.next();!r.done;r=a.next()){var o=Ue(r.value,2),c=o[0],l=o[1];this.resolveImport({kind:"package",packageName:c,importPath:""},new Ne.RecursionDepth(this.options)).catch(function(s){console.error(s)})}}catch(s){e={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}}return i.prototype.wereNewImportsResolved=function(){return this.newImportsResolved},i.prototype.resetNewImportsResolved=function(){this.newImportsResolved=!1},i.prototype.resolveImportsInFile=function(t,e,n){var a,r,o;return C(this,void 0,void 0,function(){var c,l,s,u,f,v,p,h;return D(this,function(y){switch(y.label){case 0:if(n.shouldStop())return[2];c=this.dependencyParser.parseDependencies(t,e),y.label=1;case 1:y.trys.push([1,8,9,10]),l=G(c),s=l.next(),y.label=2;case 2:if(s.done)return[3,7];u=s.value,y.label=3;case 3:return y.trys.push([3,5,,6]),[4,this.resolveImport(u,n)];case 4:return y.sent(),[3,6];case 5:return f=y.sent(),this.options.onError?(r=(a=this.options).onError)===null||r===void 0||r.call(a,(o=f.message)!==null&&o!==void 0?o:f):console.error(f),[3,6];case 6:return s=l.next(),[3,2];case 7:return[3,10];case 8:return v=y.sent(),p={error:v},[3,10];case 9:try{s&&!s.done&&(h=l.return)&&h.call(l)}finally{if(p)throw p.error}return[7];case 10:return[2]}})})},i.prototype.resolveImport=function(t,e){return C(this,void 0,void 0,function(){var n,a,r;return D(this,function(o){switch(o.label){case 0:if(n=this.hashImportResourcePath(t),this.loadedFiles.includes(n))return[2];switch(this.loadedFiles.push(n),a=t.kind,a){case"package":return[3,1];case"relative":return[3,5];case"relative-in-package":return[3,6]}return[3,8];case 1:return[4,this.resolveImportFromPackageRoot(t)];case 2:return r=o.sent(),r?[4,this.resolveImportInPackage(r,e.nextPackage().nextFile())]:[3,4];case 3:return[2,o.sent()];case 4:return[3,8];case 5:throw Error("Not implemented yet");case 6:return[4,this.resolveImportInPackage(t,e.nextFile())];case 7:return[2,o.sent()];case 8:return[2]}})})},i.prototype.resolveImportInPackage=function(t,e){return C(this,void 0,void 0,function(){var n,a,r;return D(this,function(o){switch(o.label){case 0:return[4,this.loadSourceFileContents(t)];case 1:return n=o.sent(),n?(a=n.source,r=n.at,this.createModel(a,this.monaco.Uri.parse(this.options.fileRootPath+m.join("node_modules/".concat(t.packageName),r))),[4,this.resolveImportsInFile(a,{kind:"relative-in-package",packageName:t.packageName,sourcePath:m.dirname(r),importPath:""},e)]):[3,3];case 2:o.sent(),o.label=3;case 3:return[2]}})})},i.prototype.resolveImportFromPackageRoot=function(t){var e,n,a,r,o,c,l,s,u;return C(this,void 0,void 0,function(){var f,v,p,h,y,_,k,g,w,_;return D(this,function(S){switch(S.label){case 0:return f={type:"LookedUpPackage",package:t.packageName,definitelyTyped:!1,success:!1},this.options.onlySpecifiedPackages&&!(!((e=this.versions)===null||e===void 0)&&e[t.packageName])&&!(!((n=this.versions)===null||n===void 0)&&n["@types/"+t.packageName])?((0,b.invokeUpdate)(f,this.options),[2]):(v=(r=(a=t.importPath)===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:0>0,p=v?"/".concat(t.importPath):"",[4,this.resolvePackageJson(t.packageName,(o=this.versions)===null||o===void 0?void 0:o[t.packageName],v?t.importPath:void 0)]);case 1:return h=S.sent(),!h&&v?[4,this.resolvePackageJson(t.packageName,(c=this.versions)===null||c===void 0?void 0:c[t.packageName])]:[3,3];case 2:h=S.sent(),p="",S.label=3;case 3:return h?(y=JSON.parse(h),y.typings||y.types?(_=y.typings||y.types,this.createModel(h,this.monaco.Uri.parse("".concat(this.options.fileRootPath,"node_modules/").concat(t.packageName).concat(p,"/package.json"))),(0,b.invokeUpdate)({type:"LookedUpPackage",package:t.packageName,definitelyTyped:!1,success:!0},this.options),this.setVersion(t.packageName,y.version),[2,{kind:"relative-in-package",packageName:t.packageName,sourcePath:"",importPath:m.join((l=t.importPath)!==null&&l!==void 0?l:"",_.startsWith("./")?_.slice(2):_)}]):[3,4]):[3,7];case 4:return k="@types/".concat(t.packageName.startsWith("@")?t.packageName.slice(1).replace(/\//,"__"):t.packageName),[4,this.resolvePackageJson(k,(s=this.versions)===null||s===void 0?void 0:s[k])];case 5:if(g=S.sent(),g){if(w=JSON.parse(g),w.typings||w.types)return _=w.typings||w.types,this.createModel(g,this.monaco.Uri.parse("".concat(this.options.fileRootPath,"node_modules/").concat(k,"/package.json"))),(0,b.invokeUpdate)({type:"LookedUpPackage",package:k,definitelyTyped:!0,success:!0},this.options),this.setVersion(k,w.version),[2,{kind:"relative-in-package",packageName:k,sourcePath:"",importPath:m.join((u=t.importPath)!==null&&u!==void 0?u:"",_.startsWith("./")?_.slice(2):_)}];(0,b.invokeUpdate)(f,this.options)}else(0,b.invokeUpdate)(f,this.options);S.label=6;case 6:return[3,8];case 7:(0,b.invokeUpdate)(f,this.options),S.label=8;case 8:return[2]}})})},i.prototype.loadSourceFileContents=function(t){return C(this,void 0,void 0,function(){var e,n,a,r,o,h,c,l,s,p,h,u,f,v,p,h,y,k;return D(this,function(g){switch(g.label){case 0:return e=m.join(t.packageName,t.sourcePath,t.importPath),n={type:"LookedUpTypeFile",path:e,definitelyTyped:!1,success:!1},a=t.packageName,r=this.getVersion(t.packageName),o=[".d.ts","/index.d.ts",".ts",".tsx","/index.ts","/index.tsx"],o.map(function(w){return t.importPath.endsWith(w)}).reduce(function(w,_){return w||_},!1)?[4,this.resolveSourceFile(a,r,m.join(t.sourcePath,t.importPath))]:[3,2];case 1:return h=g.sent(),h?[2,{source:h,at:m.join(t.sourcePath,t.importPath)}]:[3,9];case 2:g.trys.push([2,7,8,9]),c=G(o),l=c.next(),g.label=3;case 3:return l.done?[3,6]:(s=l.value,p=m.join(t.sourcePath,t.importPath)+s,[4,this.resolveSourceFile(a,r,p)]);case 4:if(h=g.sent(),(0,b.invokeUpdate)({type:"AttemptedLookUpFile",path:m.join(a,p),success:!!h},this.options),h)return(0,b.invokeUpdate)({type:"LookedUpTypeFile",path:m.join(a,p),success:!0},this.options),[2,{source:h,at:p}];g.label=5;case 5:return l=c.next(),[3,3];case 6:return[3,9];case 7:return u=g.sent(),y={error:u},[3,9];case 8:try{l&&!l.done&&(k=c.return)&&k.call(c)}finally{if(y)throw y.error}return[7];case 9:return[4,this.resolvePackageJson(a,r,m.join(t.sourcePath,t.importPath))];case 10:return f=g.sent(),f?(v=JSON.parse(f).types,v?(p=m.join(t.sourcePath,t.importPath,v),[4,this.resolveSourceFile(a,r,p)]):[3,12]):[3,12];case 11:if(h=g.sent(),h)return(0,b.invokeUpdate)({type:"LookedUpTypeFile",path:m.join(a,p),success:!0},this.options),[2,{source:h,at:p}];g.label=12;case 12:return(0,b.invokeUpdate)(n,this.options),[2,null]}})})},i.prototype.getVersion=function(t){var e;return(e=this.versions)===null||e===void 0?void 0:e[t]},i.prototype.setVersions=function(t){var e,n;this.versions=t,(n=(e=this.options).onUpdateVersions)===null||n===void 0||n.call(e,t)},i.prototype.setVersion=function(t,e){var n;this.setVersions(M(M({},this.versions),(n={},n[t]=e,n)))},i.prototype.createModel=function(t,e){e=e.with({path:e.path.replace("@types/","")}),this.monaco.editor.getModel(e)||(this.monaco.editor.createModel(t,"typescript",e),this.newImportsResolved=!0)},i.prototype.hashImportResourcePath=function(t){return(0,Ee.importResourcePathToString)(t)},i.prototype.resolvePackageJson=function(t,e,n){return C(this,void 0,void 0,function(){var a,r,o,c;return D(this,function(l){switch(l.label){case 0:return a=m.join(t+(e?"@".concat(e):""),n??"","package.json"),r=!1,o=void 0,this.cache.isFileAvailable?[4,this.cache.isFileAvailable(a)]:[3,2];case 1:return r=l.sent(),[3,4];case 2:return[4,this.cache.getFile(a)];case 3:o=l.sent(),r=o!==void 0,l.label=4;case 4:return r?o==null?[3,5]:(c=o,[3,7]):[3,8];case 5:return[4,this.cache.getFile(a)];case 6:c=l.sent(),l.label=7;case 7:return[2,c];case 8:return[4,this.sourceResolver.resolvePackageJson(t,e,n)];case 9:return o=l.sent(),o&&this.cache.storeFile(a,o),[2,o]}})})},i.prototype.resolveSourceFile=function(t,e,n){return C(this,void 0,void 0,function(){var a,r,o,c;return D(this,function(l){switch(l.label){case 0:return a=m.join(t+(e?"@".concat(e):""),n),r=!1,o=void 0,this.cache.isFileAvailable?[4,this.cache.isFileAvailable(a)]:[3,2];case 1:return r=l.sent(),[3,4];case 2:return[4,this.cache.getFile(a)];case 3:o=l.sent(),r=o!==void 0,l.label=4;case 4:return r?((0,b.invokeUpdate)({type:"LoadedFromCache",importPath:a},this.options),o==null?[3,5]:(c=o,[3,7])):[3,8];case 5:return[4,this.cache.getFile(a)];case 6:c=l.sent(),l.label=7;case 7:return[2,c];case 8:return[4,this.sourceResolver.resolveSourceFile(t,e,n)];case 9:return o=l.sent(),o&&((0,b.invokeUpdate)({type:"StoredToCache",importPath:a},this.options),this.cache.storeFile(a,o)),[2,o]}})})},i}();x.ImportResolver=xe;var Le=ie(pe),O=d&&d.__assign||function(){return O=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},O.apply(this,arguments)},$e=d&&d.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var a=Object.getOwnPropertyDescriptor(t,e);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,a)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),Ve=d&&d.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),Z=d&&d.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&$e(t,i,e);return Ve(t,i),t},I=d&&d.__awaiter||function(i,t,e,n){function a(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function c(u){try{s(n.next(u))}catch(f){o(f)}}function l(u){try{s(n.throw(u))}catch(f){o(f)}}function s(u){u.done?r(u.value):a(u.value).then(c,l)}s((n=n.apply(i,t||[])).next())})},U=d&&d.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(r=s[0]&2?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1],r=s;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(s);break}r[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(i,e)}catch(u){s=[6,u],a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},Je=d&&d.__values||function(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],n=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(E,"__esModule",{value:!0});E.AutoTypings=void 0;var Be=N,Ke=A,Ge=x,We=Z($),Q=F,Xe=T,ze=function(){function i(t,e){var n=this;this.editor=t,this.options=e,this.disposables=[],this.importResolver=new Ge.ImportResolver(e);var a=t.onDidChangeModelContent(function(r){n.debouncedResolveContents()});this.disposables.push(a),this.resolveContents(),e.dontAdaptEditorOptions||e.monaco.languages.typescript.typescriptDefaults.setCompilerOptions(O(O({},e.monaco.languages.typescript.typescriptDefaults.getCompilerOptions()),{moduleResolution:e.monaco.languages.typescript.ModuleResolutionKind.NodeJs,allowSyntheticDefaultImports:!0,rootDir:e.fileRootPath}))}return i.create=function(t,e){var n,a;return I(this,void 0,void 0,function(){var r,o;return U(this,function(c){switch(c.label){case 0:return e?.shareCache&&e.sourceCache&&!i.sharedCache&&(i.sharedCache=e.sourceCache),(n=e?.monaco)!==null&&n!==void 0?(o=n,[3,3]):[3,1];case 1:return[4,Promise.resolve().then(function(){return Z(Le)})];case 2:o=c.sent(),c.label=3;case 3:if(r=o,!r)throw new Error("monacoInstance not found, you can specify the monaco instance via options.monaco");return[2,new i(t,O(O({fileRootPath:"inmemory://model/",onlySpecifiedPackages:!1,preloadPackages:!1,shareCache:!1,dontAdaptEditorOptions:!1,dontRefreshModelValueAfterResolvement:!1,sourceCache:(a=i.sharedCache)!==null&&a!==void 0?a:new Be.DummySourceCache,sourceResolver:new Ke.UnpkgSourceResolver,debounceDuration:4e3,fileRecursionDepth:10,packageRecursionDepth:3},e),{monaco:r}))]}})})},i.prototype.dispose=function(){var t,e;try{for(var n=Je(this.disposables),a=n.next();!a.done;a=n.next()){var r=a.value;r.dispose()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},i.prototype.setVersions=function(t){this.importResolver.setVersions(t),this.options.versions=t},i.prototype.clearCache=function(){return I(this,void 0,void 0,function(){return U(this,function(t){switch(t.label){case 0:return[4,this.options.sourceCache.clear()];case 1:return t.sent(),[2]}})})},i.prototype.debouncedResolveContents=function(){var t=this;this.isResolving||((0,Q.invokeUpdate)({type:"CodeChanged"},this.options),this.options.debounceDuration<=0?this.resolveContents():(this.debounceTimer!==void 0&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(function(){return I(t,void 0,void 0,function(){return U(this,function(e){switch(e.label){case 0:return[4,this.resolveContents()];case 1:return e.sent(),this.debounceTimer=void 0,[2]}})})},this.options.debounceDuration)))},i.prototype.resolveContents=function(){var t;return I(this,void 0,void 0,function(){var e,n,a,r;return U(this,function(o){switch(o.label){case 0:if(this.isResolving=!0,(0,Q.invokeUpdate)({type:"ResolveNewImports"},this.options),e=this.editor.getModel(),!e)throw Error("No model");n=e.getLinesContent(),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.importResolver.resolveImportsInFile(n.join(`
`),We.dirname(e.uri.toString()),new Xe.RecursionDepth(this.options))];case 2:return o.sent(),[3,4];case 3:if(a=o.sent(),this.options.onError)this.options.onError((t=a.message)!==null&&t!==void 0?t:a);else throw a;return[3,4];case 4:return this.importResolver.wereNewImportsResolved()&&(this.options.dontRefreshModelValueAfterResolvement||(r=this.editor.getPosition(),e.setValue(e.getValue()),r&&this.editor.setPosition(r)),this.importResolver.resetNewImportsResolved()),this.isResolving=!1,[2]}})})},i}();E.AutoTypings=ze;var V={},W=d&&d.__awaiter||function(i,t,e,n){function a(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function c(u){try{s(n.next(u))}catch(f){o(f)}}function l(u){try{s(n.throw(u))}catch(f){o(f)}}function s(u){u.done?r(u.value):a(u.value).then(c,l)}s((n=n.apply(i,t||[])).next())})},X=d&&d.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(r=s[0]&2?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){e.label=s[1];break}if(s[0]===6&&e.label<r[1]){e.label=r[1],r=s;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(s);break}r[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(i,e)}catch(u){s=[6,u],a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};Object.defineProperty(V,"__esModule",{value:!0});V.LocalStorageCache=void 0;var qe=function(){function i(){}return i.prototype.getFile=function(t){var e;return W(this,void 0,void 0,function(){return X(this,function(n){return[2,(e=localStorage.getItem(i.LOCALSTORAGE_PREFIX+t))!==null&&e!==void 0?e:void 0]})})},i.prototype.storeFile=function(t,e){return W(this,void 0,void 0,function(){return X(this,function(n){return localStorage.setItem(i.LOCALSTORAGE_PREFIX+t,e),[2]})})},i.prototype.clear=function(){return W(this,void 0,void 0,function(){var t,e;return X(this,function(n){for(t=0;t<localStorage.length;t++)e=localStorage.key(t),e?.startsWith(i.LOCALSTORAGE_PREFIX)&&localStorage.removeItem(e);return[2]})})},i.LOCALSTORAGE_PREFIX="__autotyper_cache_",i}();V.LocalStorageCache=qe;var ee={};Object.defineProperty(ee,"__esModule",{value:!0});var te={};Object.defineProperty(te,"__esModule",{value:!0});var re={};Object.defineProperty(re,"__esModule",{value:!0});var ne={};Object.defineProperty(ne,"__esModule",{value:!0});(function(i){var t=d&&d.__createBinding||(Object.create?function(n,a,r,o){o===void 0&&(o=r);var c=Object.getOwnPropertyDescriptor(a,r);(!c||("get"in c?!a.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(n,o,c)}:function(n,a,r,o){o===void 0&&(o=r),n[o]=a[r]}),e=d&&d.__exportStar||function(n,a){for(var r in n)r!=="default"&&!Object.prototype.hasOwnProperty.call(a,r)&&t(a,n,r)};Object.defineProperty(i,"__esModule",{value:!0}),e(E,i),e(R,i),e(V,i),e(ee,i),e(te,i),e(re,i),e(ne,i),e(A,i)})(q);const et=i=>{const t=Y(i.value);return z(()=>i.value,e=>{t.value=e}),t},tt=(i,t,e,n)=>{const{unSaveConfirm:a=!0,...r}=n;ye(a,()=>!1,"\u662F\u5426\u786E\u5B9A\u79BB\u5F00\uFF1F"),he();const o=Y(!1),c={editor:null,module:null,loaded:null,Snip:ae({setup(){return()=>o.value?null:oe(ve,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."})}})},{isDark:l}=se(de);ce(t),c.loaded=o,z(()=>t.value,u=>{const f=c.editor;f&&u!=f.getValue()&&f.setValue(u)}),z(()=>l.value,u=>{c.editor.updateOptions({theme:u?"dark":"light"})});let s;return ue(()=>{le(()=>import("./editor.main-759b9211.js").then(function(u){return u.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(u=>{const f={...r,value:t.value,theme:l.value?"dark":"light",automaticLayout:!0,cursorStyle:"line-thin",minimap:{enabled:!1},tabSize:2,fontFamily:"operator mono, fira code, monaco, monospace",fontSize:14};f.language==="typescript"&&(s=u.editor.createModel(t.value,"typescript"),Object.assign(f,{model:s})),c.editor=u.editor.create(i.value,f),q.AutoTypings.create(c.editor,{sourceCache:new q.LocalStorageCache}),c.module=u,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(v=>{const p=c.editor;p[v](()=>{const h=p.getValue();e(h)})}),c.editor.addAction({id:"trigger-suggestion",label:"Trigger Suggestion",keybindings:[u.KeyMod.Shift|u.KeyCode.Space],run:()=>{c.editor.trigger("","editor.action.triggerSuggest",{})}}),c.editor.onKeyDown(function(v){(v.ctrlKey||v.metaKey)&&v.keyCode===u.KeyCode.KeyS&&v.preventDefault()}),c.editor.onKeyUp(function(v){(v.ctrlKey||v.metaKey)&&v.keyCode===u.KeyCode.KeyS&&v.preventDefault()}),o.value=!0})}),fe(()=>{const u=c.editor;u&&(s&&s.dispose(),u.dispose())}),c};export{et as a,$ as p,tt as u};
