import{i as y,S as g}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=document.querySelector(".gallery"),b=document.querySelector(".input-picstyle"),v=document.querySelector(".search-btn");v.addEventListener("click",()=>{const l="42490410-91d7fda5db61c0a899b50e1d9",t="https://pixabay.com/api/",s=b.value.split(" ").join("+"),r=`${t}?key=${l}&q=${s}&orientation=horizontal&safesearch=${!0}`;console.log(r),a.innerHTML='<span class="loader"></span>',fetch(r).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()}).then(o=>{console.log(o);const c=o.hits;c.length===0&&y.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}),a.innerHTML=c.map(({webformatURL:p,tags:d,likes:f,views:u,comments:m,downloads:h,largeImageURL:n})=>`<div class="pic-card">
            <a class="gallery-link" href="${n}">
            <img 
              src="${p}"
              data-source="${n}"
              alt="${d}" />
              </a>
              <div class="pic-info">
              <div class="info"><p class="label">Likes</p> <p class="info-label">${f}</p></div>
              <div class="info"><p class="label">Views</p> <p class="info-label">${u}</p></div>
              <div class="info"><p class="label">Comments</p> <p class="info-label">${m}</p></div>
              <div class="info"><p class="label">Downloads</p> <p class="info-label">${h}</p></div>
              </div></div>`).join(""),new g(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{alert("error while fetching images")})});
//# sourceMappingURL=commonHelpers.js.map
