
self.addEventListener('install', function() {
  console.log('Service worker installed at ' + new Date().toLocaleTimeString());
});


self.addEventListener('activate', function() {
  console.log('Service worker activated at ' + new Date().toLocaleTimeString());
});
