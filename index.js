/* empty css                      */import{S as s}from"./assets/vendor-CZNqwp3y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".header-li a");r.forEach(o=>{o.addEventListener("click",function(){r.forEach(n=>n.classList.remove("active")),this.classList.add("active")})})});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".hero-btn");r.forEach(o=>{o.addEventListener("click",function(n){n.preventDefault(),r.forEach(i=>i.classList.remove("active")),this.classList.add("active")})})});document.addEventListener("DOMContentLoaded",function(){var r=new s(".splide",{perPage:3,focus:0,omitEnd:!0});r.mount()});
//# sourceMappingURL=index.js.map
