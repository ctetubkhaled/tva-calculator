const CACHE = 'tva-calc-v1';
const ASSETS = [
  "./css/app.css",
  "./css/fonts.css",
  "./fonts/cairo-arabic-400-normal.woff2",
  "./fonts/cairo-arabic-500-normal.woff2",
  "./fonts/cairo-arabic-600-normal.woff2",
  "./fonts/cairo-arabic-700-normal.woff2",
  "./fonts/cairo-latin-400-normal.woff2",
  "./fonts/cairo-latin-500-normal.woff2",
  "./fonts/cairo-latin-600-normal.woff2",
  "./fonts/cairo-latin-700-normal.woff2",
  "./fonts/inter-latin-400-normal.woff2",
  "./fonts/inter-latin-500-normal.woff2",
  "./fonts/inter-latin-600-normal.woff2",
  "./fonts/inter-latin-700-normal.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest",
  "./"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(r => r || fetch(e.request)));
});
