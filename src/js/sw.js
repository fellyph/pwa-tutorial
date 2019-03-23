const cacheName = 'v2';

const resourcesToPrecache = [
  '/',
  'index.html',
  '/img/profile.svg',
  '/img/fav.jpg',
  '/img/fav-192.jpg',
  '/img/facebook.svg',
  '/img/wordpress.svg',
  '/img/slideshare.svg',
  '/img/twitter.svg',
  '/img/github.svg',
  '/img/linkedin.svg',
  '/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUtil(
    caches.open(cacheName)
      .then(cache => (cache.addAll(resourcesToPrecache))),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cacheResponse => (cacheResponse || fetch(event.request))),
  );
});
