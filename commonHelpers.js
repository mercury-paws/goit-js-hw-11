import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(i){const r=`https://pixabay.com/api/?key=42490410-91d7fda5db61c0a899b50e1d9&q=${i}&orientation=horizontal&safesearch=${!0}`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()})}function u(i){const t=document.querySelector(".gallery");t.innerHTML=i.map(({webformatURL:s,tags:a,likes:e,views:r,comments:o,downloads:c,largeImageURL:n})=>`<div class="pic-card">
          <a class="gallery-link" href="${n}">
            <img 
              src="${s}"
              data-source="${n}"
              alt="${a}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${e}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${r}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${o}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${c}</p></div>
          </div>
        </div>`).join("")}const f=document.querySelector(".input-picstyle"),y=document.querySelector(".search-btn"),m=document.querySelector(".gallery");y.addEventListener("click",()=>{const i=f.value.split(" ").join("+");m.innerHTML='<span class="loader"></span>',p(i).then(t=>{const s=t.hits;s.length===0&&l.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}),u(s),new d(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{alert("Error while fetching images")})});
//# sourceMappingURL=commonHelpers.js.map
