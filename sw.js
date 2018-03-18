self.addEventListener('install', function(event) {
  
  const urlsToCache = [
    '/',
    'restaurant.html',
    'css/styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'dist/images/1.jpg',
    'dist/images/1-400.jpg',
    'dist/images/1-600.jpg',
    'dist/images/1-800.jpg',
    'dist/images/2.jpg',
    'dist/images/2-400.jpg',
    'dist/images/2-600.jpg',
    'dist/images/2-800.jpg',
    'dist/images/3.jpg',
    'dist/images/3-400.jpg',
    'dist/images/3-600.jpg',
    'dist/images/3-800.jpg',
    'dist/images/4.jpg',
    'dist/images/4-400.jpg',
    'dist/images/4-600.jpg',
    'dist/images/4-800.jpg',
    'dist/images/5.jpg',
    'dist/images/5-400.jpg',
    'dist/images/5-600.jpg',
    'dist/images/5-800.jpg',
    'dist/images/6.jpg',
    'dist/images/6-400.jpg',
    'dist/images/6-600.jpg',
    'dist/images/6-800.jpg',
    'dist/images/7.jpg',
    'dist/images/7-400.jpg',
    'dist/images/7-600.jpg',
    'dist/images/7-800.jpg',
    'dist/images/8.jpg',
    'dist/images/8-400.jpg',
    'dist/images/8-600.jpg',
    'dist/images/8-800.jpg',
    'dist/images/9.jpg',
    'dist/images/9-400.jpg',
    'dist/images/9-600.jpg',
    'dist/images/9-800.jpg',
    'dist/images/10.jpg',
    'dist/images/10-400.jpg',
    'dist/images/10-600.jpg',
    'dist/images/10-800.jpg'                                  
  ];


  event.waitUntil(
    caches.open('restaurant-review-static-v1').then(function(cache) {
      return cache.addAll(urlsToCache);
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