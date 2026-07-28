const CACHE = 'alrwad-alrwad-v2-bilingual-complete-1';
const ASSETS = ['./','./index.html','./styles.css','./app.js', './i18n.js', './assets/toyota-corolla-2019.webp','./data/questions.js','./manifest.webmanifest','./assets/logo.webp','./assets/trainer.webp','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => cached)));
});
