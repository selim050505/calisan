// Bu numarayı HER dosya güncellemesinde bir artır (v2, v3, ...).
// Böylece eski önbellek otomatik silinir, kullanıcı elle temizlemek zorunda kalmaz.
const CACHE_ADI = "amasya-anons-v5";
const DOSYALAR = [
  "./",
  "./index.html",
  "./manifest.json",
  "./jingle.mp3",
  "./icon-192.png",
  "./icon-512.png",
  "./logo.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_ADI).then((cache) => cache.addAll(DOSYALAR))
  );
  self.skipWaiting();
});

self.addEventListener("message", (e) => {
  if (e.data && e.data.tip === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((anahtarlar) =>
      Promise.all(anahtarlar.filter((k) => k !== CACHE_ADI).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Sayfa (HTML) istekleri: ÖNCE internetten güncelini çek, sadece çevrimdışıysa
// önbellekten göster. Diğer dosyalar (resim, ses vb.): önce önbellek, hız için.
self.addEventListener("fetch", (e) => {
  const istekTuru = e.request.mode === "navigate" || e.request.destination === "document";

  if (istekTuru) {
    e.respondWith(
      fetch(e.request)
        .then((yanit) => {
          const kopya = yanit.clone();
          caches.open(CACHE_ADI).then((cache) => cache.put(e.request, kopya));
          return yanit;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((yanit) => yanit || fetch(e.request))
  );
});
