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

---

## Sesle Söyle özelliği (yeni)

Anons ekranındaki "🎤 Sesle Söyle" butonuna basıp konuştuğunuzda, telefon söylediğinizi
otomatik olarak yazıya çevirir. Konuşmayı bitirince 7 saniyelik bir kontrol süresi başlar:
bu sürede metni gözden geçirebilir, "✓ Şimdi Yayınla" ile hemen okutabilir veya "✗ İptal"
ile durdurabilirsiniz. Hiçbir şeye dokunmazsanız 7 saniye sonunda otomatik olarak seçili
ses profiliyle okunur.

Bu özellik telefonun **kendi mikrofon + konuşma tanıma** altyapısını kullanır — harici bir
API veya internet servisi gerektirmez (Chrome/Android üzerinde genelde internet ister,
ama ek bir hesap/anahtar gerekmez). İlk kullanımda Android mikrofon izni isteyecektir,
izin vermeniz gerekir.

> Not: Bu, söylediğiniz sesi olduğu gibi kaydetmez — sizin sesinizi yazıya çevirip,
> yukarıda seçtiğiniz ses profiliyle (Ahmet/Emel vb.) yeniden seslendirir.

---

## Ses Kütüphanesi (kendi sesinizle sabit kayıtlar)

Yeni eklenen "📚 Kütüphane" sekmesinden, kendi (veya izinli birinin) sesiyle anons
cümleleri kaydedebilirsiniz. Bu, yapay zeka seslendirmesi değildir — gerçek ses
kaydını telefonda saklar, istediğiniz zaman aynen çalar.

Nasıl çalışır:
1. Kütüphane sekmesinde "Kayda Başla"ya dokunun, mikrofon izni isteyecektir.
2. Anons cümlenizi net bir şekilde okuyun, "Durdur"a basın.
3. Kayda bir isim verin (örn. "Toplantı Duyurusu"), "Kaydet"e basın.
4. Listeden istediğiniz zaman "▶ Çal" ile aynen çalabilir, "🗑 Sil" ile silebilirsiniz.

Kayıtlar telefonda (tarayıcının IndexedDB deposunda) saklanır — internet gerektirmez,
sınırsızdır, hiçbir API/ödeme/kota derdi yoktur. Tek dezavantajı: yeni bir anons metni
söylemeniz gerektiğinde (TTS'in aksine) yeniden kayıt yapmanız gerekir.

---

## Yüksek Kaliteli Bulut Sesleri (ElevenLabs) — salihozgen.com üzerinden

Telefonun kendi TTS motoru sınırlıysa, kendi sunucunda (salihozgen.com) çalışan gizli bir
ara katman (proxy) üzerinden ElevenLabs'in çok daha kaliteli/çeşitli seslerini kullanabilirsin.
API anahtarı sadece sunucuda kalır, uygulamaya veya tarayıcıya hiç gitmez.

### 1) ElevenLabs hesabı ve API anahtarı
1. elevenlabs.io adresinde ücretsiz bir hesap aç.
2. Sağ üstten profil simgesi → **API Keys** kısmından bir anahtar oluştur, kopyala.
3. Kullanmak istediğin sesleri "Voice Library" kısmından seç, her sesin yanındaki
   üç noktadan **Voice ID**'sini kopyala (ElevenLabs sesleri çok dilli modelle Türkçe de
   okuyabiliyor — Türkçe aksanlı sesler için kütüphanede "Turkish" filtresini dene).

### 2) Sunucuya yükleme (cPanel)
1. Bu zip'in içindeki `sunucu/el-tts` klasörünü aç, içindeki 3 dosyayı
   (`config.php`, `tts.php`, `.htaccess`) cPanel → **Dosya Yöneticisi**'nden
   `public_html/el-tts/` klasörüne yükle (klasör yoksa oluştur).
2. `config.php`'yi cPanel üzerinden düzenle:
   - `ELEVENLABS_API_KEY` değerini ElevenLabs'ten aldığın anahtarla değiştir.
   - `APP_SECRET` değerini kendi belirleyeceğin, tahmin edilmesi zor bir yazıyla değiştir
     (bu, uygulamanın "parolası" gibi çalışır).
3. Adresini test et: `https://salihozgen.com/el-tts/tts.php` — tarayıcıda açtığında
   "Sadece POST istekleri kabul edilir." gibi bir JSON hatası görmen normal ve doğrudur
   (uygulama üzerinden çağrıldığında farklı çalışır).

### 3) Uygulamada bağlama
1. Mobil uygulamada **Ayarlar → Yüksek Kaliteli Sesler** bölümüne gir.
2. "Sunucu Adresi" kısmına `https://salihozgen.com/el-tts/tts.php` yaz.
3. "Sunucu Anahtarı" kısmına `config.php`'ye yazdığın **APP_SECRET** ile birebir aynı
   değeri yaz, "Bağlantıyı Kaydet"e bas.
4. "Yeni Bulut Sesi Ekle" kısmından istediğin kadar ses ekle (Ad + ElevenLabs Voice ID).
5. Anons ekranındaki "Ses Profili" listesinde eklediğin sesler "(Bulut)" etiketiyle görünür,
   seçip normal şekilde kullanabilirsin — jingle, arşiv, sesle söyle özellikleri hepsiyle uyumlu çalışır.

### Güvenlik notları
- `config.php` dosyasını **kimseyle paylaşma**, GitHub'a **yükleme**. Sadece cPanel'de dursun.
- Sunucudaki `tts.php` metin uzunluğunu (600 karakter) ve saatlik istek sayısını (30) sınırlar,
  bu kotanı kötüye kullanımdan biraz korur; istersen `config.php`'deki `SAAT_LIMIT` değerini değiştirebilirsin.
- ElevenLabs'in ücretsiz plan karakter kotası zamanla değişebiliyor, güncel limiti
  elevenlabs.io/pricing üzerinden kontrol et.
