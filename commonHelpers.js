import"./assets/vendor-db7463ae.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),u=document.querySelector(".input-picstyle"),a=document.querySelector(".search-btn");a.addEventListener("click",()=>{const i="42490410-91d7fda5db61c0a899b50e1d9",r="https://pixabay.com/api/",n=u.value.split(" ").join("+"),e=`${r}?key=${i}&q=${n}&orientation=horizontal`;console.log(e),fetch(e).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).then(t=>{console.log(t);const o=t.hits;l.innerHTML=o.map(({webformatURL:s})=>`<img src="${s}">`).join("")}).catch(t=>{alert("error while fetching images")})});
//# sourceMappingURL=commonHelpers.js.map