
const cacheVersion = 'v1';
const cacheItems = [
  'favicon-16x16.ico',
  'favicon-32x32.ico',
  'favicon.ico',
  'app.css',
  'index.css',
  'offline.html'
];

self.addEventListener('install', function () {
  console.log('Service worker installed at ' + new Date().toLocaleTimeString());
});

self.addEventListener('activate', function () {
  console.log('Service worker activated at ' + new Date().toLocaleTimeString());
});

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function (cache) {
        console.log('Initialising caches...');
        return cache.addAll(cacheItems);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (res) {
        if (res) {
          return res;
        }

        if (!navigator.onLine) {
          return caches.match(new Request('offline.html'));
          //return new Response('<h2>Currently offline</h2>', { headers: { 'Content-Type': 'text/html' } });
        }

        console.log('fetching: ' + event.request.url);
        return fetch(event.request);
      })
  );
});
