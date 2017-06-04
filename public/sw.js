
const cacheVersion = 'v4.97';
const cacheItems = [
  'favicon-16x16.ico',
  'favicon-32x32.ico',
  'favicon.ico',
  'app.css',
  'index.css',
  'offline.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function (cache) {
        return cache.addAll(cacheItems);
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (key) {
          return key !== cacheVersion;
        }).map(function (key) {
          return caches.delete(key);
        }));
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
        }

        return fetchAndCache(event.request);
      })
  );
});

function fetchAndCache(request) {
  return fetch(request)
    .then(function (res) {
      if (res) {
        return caches.open(cacheVersion)
          .then(function (cache) {
            return cache.put(request, res.clone())
              .then(function () {
                return res;
              });
          });
      }
    });
}
