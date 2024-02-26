import{i as d,S as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(o){const r=`https://pixabay.com/api/?key=42490410-91d7fda5db61c0a899b50e1d9&q=${o}&orientation=horizontal&safesearch=${!0}`;return fetch(r).then(s=>{if(!s.ok)throw new Error("Image error!");return s.json()})}function f(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:i,tags:l,likes:e,views:r,comments:s,downloads:c,largeImageURL:n})=>`<div class="pic-card">
          <a class="gallery-link" href="${n}">
            <img 
              src="${i}"
              data-source="${n}"
              alt="${l}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${e}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${r}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${s}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${c}</p></div>
          </div>
        </div>`).join("")}const a=document.querySelector(".input-picstyle"),y=document.querySelector(".search-btn"),m=document.querySelector(".gallery");y.addEventListener("click",()=>{const o=a.value.trim().split(" ").join("+");m.innerHTML='<span class="loader"></span>',u(o).then(t=>{const i=t.hits;i.length===0&&d.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}),f(i),new p(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{alert("Error while fetching images")}).finally(()=>{a.value="";let t=o.split("+").join(" ");a.placeholder=`Last searched for "${t}"`})});
//# sourceMappingURL=commonHelpers.js.map
