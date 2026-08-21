const CACHE_NAME = 'sriram-medical-v1.0.0';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Do not intercept non-GET requests or tracker endpoint / external API requests
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  
  if (url.hostname.includes('crm.webmakerit.com') || url.pathname.includes('/api/')) {
    return;
  }

  // Stale-while-revalidate for static items, network first for pages
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background update
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        // Return cached root if navigation request
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
