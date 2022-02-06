import{r as $,u as w,a as m,o as a,c,b as l,d as u,e as v,f as h,w as f,g as _,t as L,h as C,i as P,j as x}from"./vendor.48962bfd.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};E();const d=$({user:null,loading:!1,isAuthenticated:!1,auth0:null}),y={domain:"dev-s9lusa35.us.auth0.com",client_id:"aJZSL2BB5IWu4EEDjeJYM80azlRQPicA"},b=s=>{const i=async()=>{s.isAuthenticated=!!await s.auth0.isAuthenticated(),s.user=await s.auth0.getUser(),s.loading=!1};return{login:async()=>{await s.auth0.loginWithPopup(),await i()},logout:async()=>{s.auth0.logout({returnTo:window.location.origin})},initAuth:()=>{s.loading=!0,w({domain:y.domain,client_id:y.client_id,cacheLocation:"localstorage",redirect_uri:window.location.origin}).then(async t=>{s.auth0=t,await i()})}}};const O={id:"app"},H={key:0},N={key:0},S=["src"],V={id:"nav"},j=_("Home"),R=_(" | "),T=_("Chess Game"),B=_(" | "),D=_("About"),I={setup(s){const{login:i,logout:r,initAuth:n}=b(d);return n(),(e,t)=>{const o=m("router-link"),p=m("router-view");return a(),c("div",O,[l(d).loading?v("",!0):(a(),c("div",H,[l(d).isAuthenticated?(a(),c("div",N,[u("img",{style:{position:"absolute",top:"10px",right:"10px","border-radius":"80px",border:"5px solid black"},src:l(d).user.picture},null,8,S)])):v("",!0)])),u("div",V,[h(o,{to:"/"},{default:f(()=>[j]),_:1}),R,h(o,{to:"/chess"},{default:f(()=>[T]),_:1}),B,h(o,{to:"/about"},{default:f(()=>[D]),_:1})]),h(p)])}}},W="modulepreload",k={},q="/",g=function(i,r){return!r||r.length===0?i():Promise.all(r.map(n=>{if(n=`${q}${n}`,n in k)return;k[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":W,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((p,A)=>{o.addEventListener("load",p),o.addEventListener("error",A)})})).then(()=>i())};const z={key:0},G={key:0},J=u("p",null," To Play you must first sign in ",-1),F={key:1},K=_(" Welcome to Chess Online "),M={key:1},Q={setup(s){const{login:i,logout:r,initAuth:n}=b(d);return n(),(e,t)=>(a(),c("div",null,[l(d).loading?(a(),c("div",M," Loading ... ")):(a(),c("div",z,[l(d).isAuthenticated?(a(),c("div",F,[u("p",null,[K,u("strong",null,L(l(d).user.nickname),1)]),u("button",{onClick:t[1]||(t[1]=o=>l(r)()),class:"btn btn-secondary"},"Logout")])):(a(),c("div",G,[J,u("button",{onClick:t[0]||(t[0]=o=>l(i)()),class:"btn btn-primary"},"Login")]))]))]))}};var U=(s,i)=>{const r=s.__vccOpts||s;for(const[n,e]of i)r[n]=e;return r};const Y={name:"Home",components:{HomePage:Q}},Z={class:"home"},X=u("img",{class:"logo",alt:"Chess Online Logo",src:"https://chessapp.s3.us-west-2.amazonaws.com/wpawn.png"},null,-1);function ee(s,i,r,n,e,t){const o=m("HomePage");return a(),c("div",Z,[X,h(o)])}var te=U(Y,[["render",ee]]);const oe=[{path:"/",name:"Home",component:te},{path:"/chess",name:"Chess Game",component:()=>g(()=>import("./Chess.ffa89374.js"),["assets/Chess.ffa89374.js","assets/Chess.24e4d4b9.css","assets/vendor.48962bfd.js"])},{path:"/about",name:"About",component:()=>g(()=>import("./About.1c968bee.js"),["assets/About.1c968bee.js","assets/vendor.48962bfd.js"])},{path:"/callback",name:"Callback",component:()=>g(()=>import("./Callback.264f0b47.js"),["assets/Callback.264f0b47.js","assets/vendor.48962bfd.js"])}],ne=C({history:P("/"),routes:oe});x(I).use(ne).mount("#app");export{U as _};
