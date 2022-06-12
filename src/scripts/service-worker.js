import CacheHelper from './utils/cache-helper';

const assetsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/app.js',
    '/icons/Icon-36.png',
    '/icons/Icon-48.png',
    '/icons/Icon-72.png',
    '/icons/Icon-96.png',
    '/icons/Icon-144.png',
    '/icons/Icon-192.png',
    '/icons/Icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell(assetsToCache));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
