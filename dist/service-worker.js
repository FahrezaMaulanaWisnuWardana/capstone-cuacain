if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const t=e=>n(e,o),c={module:{uri:o},exports:s,require:t};i[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(d(...e),s)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.js",revision:"5b9014f7204d22beebdb0484ea875fce"},{url:"images/weather.png",revision:"c646880965e0fdc6342db66d25de4d09"},{url:"images/weatherIcon-32px.png",revision:"db1babb830c6d26fccc5d378aeb8f6a7"},{url:"index.html",revision:"f7808bd4c2cd0a2f268018f29bac4e9e"},{url:"manifest.json",revision:"2ba3d8861d994f8bf27ccca73d8bdc9e"}],{})}));