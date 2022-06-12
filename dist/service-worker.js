(()=>{"use strict";function e(e,n,t,r,a,c,u){try{var i=e[c](u),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,a)}function n(n){return function(){var t=this,r=arguments;return new Promise((function(a,c){var u=n.apply(t,r);function i(n){e(u,a,c,i,s,"next",n)}function s(n){e(u,a,c,i,s,"throw",n)}i(void 0)}))}}const t={cachingAppShell:function(e){var t=this;return n(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.openCache();case 2:n.sent.addAll(e);case 4:case"end":return n.stop()}}),n)})))()},deleteOldCache:function(){return n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:e.sent.filter((function(e){return"CuacaIn"!==e})).map((function(e){return caches.delete(e)}));case 4:case"end":return e.stop()}}),e)})))()},revalidateCache:function(e){var t=this;return n(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,caches.match(e);case 2:if(!(r=n.sent)){n.next=5;break}return n.abrupt("return",r);case 5:return n.abrupt("return",t.fetchRequest(e));case 6:case"end":return n.stop()}}),n)})))()},openCache:function(){return n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",caches.open("CuacaIn"));case 1:case"end":return e.stop()}}),e)})))()},fetchRequest:function(e){var t=this;return n(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if((r=n.sent)&&200===r.status){n.next=5;break}return n.abrupt("return",r);case 5:return n.next=7,t.addCache(e);case 7:return n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))()},addCache:function(e){var t=this;return n(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.openCache();case 2:n.sent.add(e);case 4:case"end":return n.stop()}}),n)})))()}};var r=["/","/index.html","/manifest.json","/app.js","/icons/Icon-36.png","/icons/Icon-48.png","/icons/Icon-72.png","/icons/Icon-96.png","/icons/Icon-144.png","/icons/Icon-192.png","/icons/Icon-512.png"];self.addEventListener("install",(function(e){e.waitUntil(t.cachingAppShell(r))})),self.addEventListener("activate",(function(e){e.waitUntil(t.deleteOldCache())})),self.addEventListener("fetch",(function(e){e.respondWith(t.revalidateCache(e.request))}))})();