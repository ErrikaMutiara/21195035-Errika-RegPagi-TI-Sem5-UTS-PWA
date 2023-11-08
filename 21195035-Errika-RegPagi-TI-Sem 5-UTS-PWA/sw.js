var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/IMG/cellphone.png',
  '/IMG/fotoku.jpeg',
  '/IMG/fotosaya.jpeg',
  '/IMG/gambarig.png',
  '/IMG/gmail.png',
  '/IMG/preview.png',
  '/IMG/preview2.png',
  '/IMG/preview3.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
