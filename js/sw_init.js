// Service Worker Registration
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	navigator.serviceWorker.register('./sw.js', {scope: '/index.html' })
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
	});
}
