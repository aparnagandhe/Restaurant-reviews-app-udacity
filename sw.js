const cachedItems = [
				'./',
	                        './index.html',
				'./restaurant.html',
	                        './css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/sw_init.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg'
				];

const version = 'v1';

// Installs service worker and caches files
self.addEventListener('install', (event) => {
	console.log('Servive Worker Installing');
	event.waitUntil(
		caches.open(version).then( (cache) => {
			return cache.addAll(cachedItems);
		})
	);
});

// Fetches Cached files
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
		.then( (res) => {
			if (res) {
				return res
			} 
			return fetch(event.request);
		})
	)
});
