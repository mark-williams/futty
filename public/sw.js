
self.addEventListener('install', function() {
  console.log('Service worker installed at ' + new Date().toLocaleTimeString());
});

self.addEventListener('activate', function() {
  console.log('Service worker activated at ' + new Date().toLocaleTimeString());
});

self.addEventListener('fetch', function(event) {
  if (!navigator.onLine) {
    event.respondWith(new Response('<h2>Currently offline</h2>', { headers: { 'Content-Type': 'text/html' } }));
    return;
  }

  console.log('fetching: ' + event.request.url);
});
