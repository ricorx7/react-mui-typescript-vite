var P=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,E=(t,e)=>{for(var o in e||(e={}))f.call(e,o)&&m(t,o,e[o]);if(u)for(var o of u(e))p.call(e,o)&&m(t,o,e[o]);return t},h=(t,e)=>L(t,R(e));var g=(t,e)=>{var o={};for(var n in t)f.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(o[n]=t[n]);return o};import{r as l,R as s,a as i,b as O,H as A,S as b,c as w,d as C,e as I,P as k}from"./vendor.14c9ff51.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};$();const D="modulepreload",y={},N="./",d=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${N}${n}`,n in y)return;y[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":D,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((S,x)=>{a.addEventListener("load",S),a.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function T(){const[t,e]=l.exports.useState(null);async function o(){await _();const r={userName:"Capricorncd",userId:9527};return e(r),r}async function n(){await _();const r={code:0,message:"success"};return e(null),r}return{user:t,signIn:o,signOut:n}}function _(){return new Promise(t=>{setTimeout(()=>{t()},1e3)})}const v=l.exports.createContext({});function z({children:t}){const e=T();return s.createElement(v.Provider,{value:e},t)}function H(){return l.exports.useContext(v)}function V(o){var n=o,{children:t}=n,e=g(n,["children"]);const r=H();return s.createElement(i,h(E({},e),{render:({location:c})=>r.user?t:s.createElement(O,{to:{pathname:"/login",state:{from:c}}})}))}const q=l.exports.lazy(()=>d(()=>import("./Welcome.c595d40c.js"),["assets/Welcome.c595d40c.js","assets/vendor.14c9ff51.js","assets/index.299306c6.js"])),F=l.exports.lazy(()=>d(()=>import("./Login.393476d0.js"),["assets/Login.393476d0.js","assets/vendor.14c9ff51.js","assets/index.299306c6.js"])),M=l.exports.lazy(()=>d(()=>import("./Home.30d5c963.js"),["assets/Home.30d5c963.js","assets/vendor.14c9ff51.js"]));function U(){return s.createElement(z,null,s.createElement(A,null,s.createElement(b,null,s.createElement(i,{path:"/",exact:!0},s.createElement(l.exports.Suspense,{fallback:"loading..."},s.createElement(q,null))),s.createElement(i,{path:"/login"},s.createElement(l.exports.Suspense,{fallback:"loading..."},s.createElement(F,null))),s.createElement(V,{path:"/home"},s.createElement(l.exports.Suspense,{fallback:"loading..."},s.createElement(M,null))))))}const W={count:0},B=w({name:"counter",initialState:W,reducers:{increase:(t,{payload:e})=>{t.count+=e},decrease:(t,{payload:e})=>{t.count-=e}}}),K=C({reducer:{counter:B.reducer}});var j=K;I.render(s.createElement(s.StrictMode,null,s.createElement(k,{store:j},s.createElement(U,null))),document.getElementById("app"));export{B as c,j as s,H as u};
