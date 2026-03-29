/* AISimply Service Worker */
/* Simple service worker for caching static assets */

const CACHE_NAME = 'aisimply-v1';
const ASSETS_TO_CACHE = [
  '/style.css',
  '/common.js',
  '/',
  '/index.html',
  '/blog/index.html',
  '/categories/ai-basics.html',
  '/categories/ai-tools.html',
  '/categories/how-to.html',
  '/categories/tech-essentials.html',
  '/about.html',
  '/privacy.html',
  '/404.html',
  '/manifest.json'
];

/* Install event - cache assets */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.log('Cache addAll error:', err);
        /* Continue even if some assets fail to cache */
        return Promise.resolve();
      });
    })
  );
});

/* Activate event - clean up old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/* Fetch event - serve from cache, fallback to network */
self.addEventListener('fetch', event => {
  /* Only handle GET requests */
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      /* Return cached response if available */
      if (response) {
        return response;
      }

      /* Fetch from network */
      return fetch(event.request).then(response => {
        /* Don't cache non-successful responses */
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        /* Clone the response and cache it */
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        /* Return offline fallback if available */
        return caches.match('/index.html');
      });
    })
  );
});
