(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function c(t){try{return JSON.parse(t)}catch{return null}}function a(t){if(typeof t!="object"||t===null)return!1;const e=t;return typeof e.id=="number"&&Number.isFinite(e.id)&&typeof e.name=="string"&&e.name.trim().length>0&&Array.isArray(e.scores)&&e.scores.length>0&&e.scores.every(n=>typeof n=="number"&&Number.isFinite(n))}function u(t){return t.reduce((e,n)=>e+n,0)/t.length}function p(){const t=c('{"id":1,"name":"Hermione","scores":[95,100,98]}'),e=c('{"id":"1","name":"Hermione","scores":[95]}');console.assert(a(t),"El estudiante válido debe pasar la validación."),console.assert(!a(e),"El estudiante inválido debe rechazarse.")}const f='{"id":1,"name":"Hermione","scores":[95,100,98]}',o=c(f),l=document.querySelector("#app");if(!l)throw new Error("No se encontró el contenedor de la aplicación.");p();if(a(o)){const t=u(o.scores);l.innerHTML=`
    <section class="card" aria-labelledby="student-name">
      <p class="eyebrow">Respuesta de API validada</p>
      <h1 id="student-name">${o.name}</h1>
      <p class="label">Promedio de scores</p>
      <p class="score">${t.toFixed(2)}</p>
      <p class="detail">ID: ${o.id} · Scores: ${o.scores.join(", ")}</p>
    </section>`}else l.innerHTML=`
    <section class="card error" role="alert">
      <p class="eyebrow">Error de validación</p>
      <h1>No se pudo validar la respuesta de la API.</h1>
      <p>El JSON no cumple con la estructura esperada para un estudiante.</p>
    </section>`;
