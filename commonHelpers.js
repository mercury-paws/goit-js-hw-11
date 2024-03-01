import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(o){const r=`https://pixabay.com/api/?key=42490410-91d7fda5db61c0a899b50e1d9&q=${o}&orientation=horizontal&safesearch=${!0}`;return fetch(r).then(s=>{if(!s.ok)throw new Error("Image error!");return s.json()})}function f(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:i,tags:n,likes:e,views:r,comments:s,downloads:p,largeImageURL:c})=>`<div class="pic-card">
          <a class="gallery-link" href="${c}">
            <img 
              src="${i}"
              data-source="${c}"
              alt="${n}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${e}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${r}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${s}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${p}</p></div>
          </div>
        </div>`).join("")}const l=document.querySelector(".input-picstyle"),m=document.querySelector(".search-btn"),g=document.querySelector(".gallery");m.addEventListener("click",()=>{const o=l.value.trim().split(" ").join("+");if(!o){a.error({color:"red",message:"Please fill in the querry, what are you looking for?",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3});return}g.innerHTML='<span class="loader"></span>',d(o).then(t=>{const i=t.hits;i.length===0&&a.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}),f(i),new u(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{a.error({color:"red",message:"Error while fetching images",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3})}).finally(()=>{l.value="";let t=o.split("+").join(" ");l.placeholder=`Last searched for "${t}"`})});
//# sourceMappingURL=commonHelpers.js.map
