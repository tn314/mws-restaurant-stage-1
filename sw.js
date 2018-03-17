self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-review-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'restaurant.html',
        'css/styles.css',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'data/restaurants.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) {
          console.log(response);
          return response;
        }

        return fetch(event.request);
    })
  );
});