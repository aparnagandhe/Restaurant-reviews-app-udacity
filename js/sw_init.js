// Service Worker Registration
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	navigator.serviceWorker.register('./sw.js', {scope: '/restaurant-review/' })
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
	});
}
