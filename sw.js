// ImmLibrary launcher service worker — ให้ Chrome ติดตั้งเป็นแอปได้ (ไม่เก็บแคช เพื่อให้เห็นเวอร์ชันล่าสุดเสมอ)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
