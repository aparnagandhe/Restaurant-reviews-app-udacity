// Service Worker Registration
if('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	navigator.serviceWorker.register('../sw.js')
	.then((reg) => {
		console.log('Service Worker Registration Successful', reg);
	})
	.catch((err) => {
		console.log('Service Worker Registration Unsuccessful', err);
	})

}); 
	else {
	console.log('This browser does not support Service Workers.');
}
