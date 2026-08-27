# Amasya Anons — Mobil Uygulama Kurulumu

Bu klasördeki dosyalar (`index.html`, `manifest.json`, `sw.js`, `jingle.mp3`, `icon-192.png`, `icon-512.png`)
telefonda **uygulama gibi çalışan** bir web uygulaması (PWA) oluşturur.

---

## YÖNTEM 1 — Hemen "Ana Ekrana Ekle" (APK'sız, en hızlı)

1. Bu dosyaları ücretsiz bir barındırma adresine yükleyin (aşağıdakilerden biri):
   - **GitHub Pages** (github.com → yeni repo → dosyaları sürükle-bırak → Settings → Pages → Enable)
   - **Netlify Drop** (app.netlify.com/drop → klasörü sürükle-bırak, saniyeler içinde link verir)
   - **Vercel** (vercel.com → "Add New Project" → klasörü yükle)
2. Size verilen linki (örn. `https://kullaniciadi.github.io/anons/`) telefonunuzda Chrome ile açın.
3. Chrome'da sağ üst ⋮ menüsünden **"Ana ekrana ekle" / "Uygulama yükle"** seçeneğine dokunun.
4. Telefonunuzda gerçek bir uygulama ikonu gibi görünür, tam ekran açılır, internet olmasa bile arayüzü çalışır.

> Not: Dosyaları doğrudan telefona atıp tarayıcıdan `file://` ile açarsanız bazı özellikler
> (servis çalışanı / çevrimdışı önbellek) çalışmayabilir. Yukarıdaki gibi bir adrese
> (http/https) yüklemeniz en sağlıklısı.

---

## YÖNTEM 2 — Gerçek bir .apk dosyası almak

1. Önce Yöntem 1'deki gibi dosyaları bir adrese yükleyip yayınlayın (link elde edin).
2. Tarayıcıdan **https://www.pwabuilder.com** adresine gidin.
3. Yayınladığınız linki (örn. `https://kullaniciadi.github.io/anons/`) kutuya yapıştırıp
   "Start" butonuna basın.
4. Site uygulamanızı tarayıp puanlar; **"Android"** sekmesine geçin, **"Generate Package"**
   butonuna basın.
5. İndirilen paketin içinde gerçek bir **`.apk`** (veya `.aab`) dosyası olacaktır.
   Bu dosyayı telefonunuza kopyalayıp (WhatsApp, e-posta, USB kablo vb. ile) açtığınızda
   "Bilinmeyen kaynaklardan yükleme" izni isteyecek, izin verip kurabilirsiniz.

Bu, kodlama gerektirmeyen, tamamen ücretsiz ve resmi (Microsoft'un desteklediği) bir yöntemdir.

---

## Sesler hakkında

Uygulama telefonunuzun kendi Türkçe konuşma motorunu (TTS) kullanır — internete ihtiyaç duymadan
çalışır. Eğer ses listesi tek/az görünüyorsa:

`Telefon Ayarları → Sistem/Erişilebilirlik → Metni Sese Çevirme (Text-to-Speech) çıktısı`
kısmından **Google Konuşma Servisleri**'ni açın ve Türkçe ses paketini indirin.

Uygulama içindeki "Ses Profilleri" (Ahmet Normal, Emel Tiz, Ahmet Derin Ton vb.) telefonun
sunduğu sesin tonunu ve hızını değiştirerek farklı anons karakterleri üretir — masaüstü
programdaki gibi tek bir motora bağlı kalmazsınız.

---

## Neler var, neler eksik (masaüstü sürümle kıyasla)

**Var:** Metin girip seslendirme, birden fazla ses/ton profili, anons öncesi jingle,
yerelde (telefonda) saklanan anons arşivi, arşivden tekrar okutma, opsiyonel PIN kilidi,
çevrimdışı çalışan arayüz.

**Şimdilik yok (istenirse eklenir):** Zamanlanmış otomatik anonslar, çoklu kullanıcı/kurum
yönetimi, yazdırma/dışa aktarma, istatistik ekranı. Bunları da eklememi istersen söyle.
