if(!self.define){let e,n={};const i=(i,l)=>(i=new URL(i+".js",l).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let s={};const o=e=>i(e,u),a={module:{uri:u},exports:s,require:o};n[u]=Promise.all(l.map((e=>a[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/account.8b47d494.js",revision:null},{url:"_nuxt/admin-only.e1635377.js",revision:null},{url:"_nuxt/admin.e572e868.js",revision:null},{url:"_nuxt/default.661f431a.js",revision:null},{url:"_nuxt/entry.01793946.css",revision:null},{url:"_nuxt/entry.8383e925.js",revision:null},{url:"_nuxt/error-component.0fa2ee9d.js",revision:null},{url:"_nuxt/guest-only.b491ff53.js",revision:null},{url:"_nuxt/guest.cd5a7318.js",revision:null},{url:"_nuxt/index.4849e921.js",revision:null},{url:"_nuxt/indexm.004a5cbe.js",revision:null},{url:"_nuxt/login.005f0a88.js",revision:null},{url:"_nuxt/nuxt-link.da4dd4bb.js",revision:null},{url:"_nuxt/PageUser.vue.53b58512.js",revision:null},{url:"_nuxt/private.ae6cf639.js",revision:null},{url:"_nuxt/swiper-vue.98e2697f.css",revision:null},{url:"_nuxt/test.cd4948ba.js",revision:null},{url:"_nuxt/ua-parser.e04bf7da.js",revision:null},{url:"_nuxt/useAdmin.0546178b.js",revision:null},{url:"_nuxt/user-only.a07d7c93.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"eb507e64f7f9f71b720f10e61e952bf9"},{url:"200",revision:"14407a15a0a45a79265c6f6c4e9f5db9"},{url:"404",revision:"14407a15a0a45a79265c6f6c4e9f5db9"},{url:"account/_payload.js",revision:"a3310a48b497c286fd0a6407a957605e"},{url:"account",revision:"a70231a765170be8038334dfcf81348e"},{url:"guest/_payload.js",revision:"c84b8500bd638a7a918841a2dd07fdbc"},{url:"guest",revision:"378e84c1d0e8eab4e10f31026caa060d"},{url:"/sportuslugi-frontend/",revision:"b24a23cb1c5b286771890f2a07103184"},{url:"indexm/_payload.js",revision:"e468881225fb35a6ff84521dec5ac507"},{url:"indexm",revision:"646c653aa9c63cbe7ca3339a2e7af9c6"},{url:"login/_payload.js",revision:"d815776a3845984af2856608f7d49235"},{url:"login",revision:"5477ba1f7f693799bfedad8c3f16ae90"},{url:"test/_payload.js",revision:"dc5f887712aaba464a5fdc3239f915d9"},{url:"test",revision:"97113bc2daad82db40ddc6e23fb88505"},{url:"manifest.webmanifest",revision:"e814bef43b21575ada183a4eceb4a83e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
