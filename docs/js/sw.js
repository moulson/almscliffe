/*! danmoulson.com v1.0.0 | (c) 2021  | ISC License | git+https://github.com/moulson/portfolio.git */
// On install, cache some stuff
addEventListener('install', (function (event) {
	event.waitUntil(caches.open('core').then((function (cache) {
		cache.add(new Request('https://almscliffe.danmoulson.com/index.html'));
		return;
	})));
}));

// listen for requests
addEventListener('fetch', (function (event) {

	// Get the request
	var request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

	// HTML files
	// Network-first
	if (request.headers.get('Accept').includes('text/html')) {
		event.respondWith(
			fetch(request).then((function (response) {
				return response;
			})).catch((function (error) {
				return caches.match('https://almscliffe.danmoulson.com/index.html');
			}))
		);
	}

}));