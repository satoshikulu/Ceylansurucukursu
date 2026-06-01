/** Ek soru bankası — mevcut havuzla birleştirilir */
export const questionsExtra = {
  trafik: [
    {
      q: 'Otoyolda aksine bir işaret yoksa hususi otomobiller için azami hız kaç km/s dir?',
      opts: ['90 km/s', '110 km/s', '120 km/s', '130 km/s'],
      a: 2,
      exp: 'Otoyollarda hususi otomobiller için genel azami hız sınırı 120 km/s dir (işaretlerle değişebilir).'
    },
    {
      q: 'Kırmızı ışıkta geçmek veya durmayıp geçmek hangi sonucu doğurur?',
      opts: ['Sadece uyarı', 'Para cezası ve sürücü belgesine işlenen ceza puanı', 'Ehliyetin anında iptali', 'Araç muayenesinin iptali'],
      a: 1,
      exp: 'Kırmızı ışık ihlali idari para cezası ve sürücü belgesine ceza puanı işlenmesine neden olur.'
    },
    {
      q: 'Okul servisi taşıyan araçların durak lambaları yanınca diğer sürücüler ne yapmalıdır?',
      opts: ['Hızlanarak geçmeli', 'Korna çalmalı', 'Durmalı ve çocukların geçişini beklemeli', 'Şerit değiştirmeli'],
      a: 2,
      exp: 'Okul taşıtı durduğunda ve ikaz lambaları yandığında diğer araçlar durup öğrencilerin güvenle inip binmesini beklemelidir.'
    },
    {
      q: 'Sisli havada görüş mesafesi çok kısaldığında hangi farlar kullanılmalıdır?',
      opts: ['Uzun farlar', 'Sis farları veya kısa farlar', 'Sadece park lambaları', 'İç aydınlatma'],
      a: 1,
      exp: 'Siste uzun far kullanmak yansıma yapar; sis veya kısa farlarla görünürlük artırılır.'
    },
    {
      q: 'Telefonla konuşarak veya mesaj yazarak araç kullanmak nasıl değerlendirilir?',
      opts: ['Serbesttir', 'Trafik suçu ve cezai yaptırıma tabidir', 'Sadece otoyolda yasaktır', 'Sadece gece yasaktır'],
      a: 1,
      exp: 'Elde tutularak telefon kullanımı dikkat dağınıklığı yaratır ve yasaklanmış, cezalandırılan bir davranıştır.'
    },
    {
      q: 'Yaya geçidinde yaya bekliyorsa sürücü ne yapmalıdır?',
      opts: ['Korna ile uyarmalı', 'Yayaya geçiş hakkı vererek durmalı', 'Yavaşlayıp yanından geçmeli', 'Hızlanmalı'],
      a: 1,
      exp: 'İşaretli veya işaretsiz yaya geçidine yaklaşan sürücü, yaya geçecekse durup yol vermelidir.'
    },
    {
      q: 'Dönel kavşaklara girerken genel geçiş kuralı nedir?',
      opts: ['Kavşağa önce giren önceliklidir', 'Kavşak içindeki araç önceliklidir', 'Soldaki araç önceliklidir', 'Büyük araç önceliklidir'],
      a: 1,
      exp: 'Dönel kavşağa girecek sürücü, kavşak içindeki ve çıkış yapmak üzere olan araçlara yol vermelidir.'
    },
    {
      q: 'Çocuk koltuğu veya bağlama sistemi hangi yolcular için zorunludur?',
      opts: ['Sadece bebekler', 'Boy/kilo sınırına uyan çocuk yolcular', 'Sadece arka koltuk', 'Hiç kimse için değil'],
      a: 1,
      exp: 'Belirli boy ve kilonun altındaki çocuklar için uygun çocuk kısıtlama sistemleri kullanımı zorunludur.'
    },
    {
      q: 'Arızalı aracı yolda bırakırken en az ne kadar mesafede reflektör konulmalıdır?',
      opts: ['5 metre', 'Şehir içi 30 m, şehir dışı 100 m (koşullara göre)', '200 metre', 'Reflektör şart değil'],
      a: 1,
      exp: 'Reflektör mesafesi yerleşim yeri ve yol tipine göre değişir; görünürlük için yeterli mesafe bırakılmalıdır.'
    },
    {
      q: 'Trafikte agresif sürüş (takip, sıkıştırma) ne tür bir davranıştır?',
      opts: ['Özgürlük hakkı', 'Trafik adabı ihlali ve cezalandırılabilir suç', 'Sadece etik sorun', 'Yarış sporu'],
      a: 1,
      exp: 'Agresif sürüş hem cezai yaptırıma hem de kaza riskinin artmasına yol açan tehlikeli bir davranıştır.'
    },
    {
      q: 'Bisiklet yolunda motorlu araç sürülmesi ne zaman mümkündür?',
      opts: ['Her zaman', 'Genellikle yasaktır, istisnalar dışında', 'Sadece gece', 'Sadece motosikletler için'],
      a: 1,
      exp: 'Bisiklet yolları bisikletliler içindir; motorlu araçların kullanımı kanunen sınırlı ve çoğu zaman yasaktır.'
    },
    {
      q: 'Hız sınırını %10–%30 aşmak genelde nasıl cezalandırılır?',
      opts: ['Uyarı ile bırakılır', 'Hız aşımı oranına göre artan para cezası', 'Hapis', 'Ehliyet yenileme'],
      a: 1,
      exp: 'Hız ihlallerinde ceza, aşılan km/s oranına ve tekrara göre kademeli olarak artar.'
    }
  ],
  isaretler: [
    {
      q: 'Sarı zemin üzerinde siyah sembol bulunan levhalar ne bildirir?',
      opts: ['Tehlike', 'Yol çalışması ve geçici düzenlemeler', 'Park', 'Otoyol'],
      a: 1,
      exp: 'Sarı levhalar genellikle geçici trafik düzenlemeleri ve yol yapım çalışmalarını gösterir.'
    },
    {
      q: 'Kırmızı ışıklı yaya geçidi levhası ne anlama gelir?',
      opts: ['Yayalar her zaman geçebilir', 'Yayalar için kontrollü geçiş noktası', 'Sadece okul önü', 'Yaya yasağı'],
      a: 1,
      exp: 'Işıklı yaya geçidinde yayalar ve araçlar sinyalizasyona göre hareket eder.'
    },
    {
      q: 'Yeşil ok ile birlikte kırmızı ışık yanıyorsa ne yapılabilir?',
      opts: ['Her yöne geçilir', 'Ok yönünde kontrollü geçiş', 'Durulur', 'Geri gidilir'],
      a: 1,
      exp: 'Yeşil ok, o yönde dikkatli ve kontrollü ilerlemeye izin verir; diğer yönler kırmızı kalabilir.'
    },
    {
      q: 'Park yasağı levhası altında ek levha varsa ne ifade eder?',
      opts: ['Park serbest', 'Yasağın süresi veya koşulları', 'Ücretsiz park', 'Sadece otobüs'],
      a: 1,
      exp: 'Ek levhalar park yasağının saat, gün veya araç tipine göre detayını belirtir.'
    },
    {
      q: 'Ana yol levhası (sarı zemin, kırmızı çerçeve) ne bildirir?',
      opts: ['Tali yol', 'Bu yolun ana yol olduğu', 'Dur', 'Tek yön'],
      a: 1,
      exp: 'Ana yol levhası, sürücüye öncelikli yolda olduğunu hatırlatır.'
    },
    {
      q: 'Yaya geçidi zemin işaretleri genelde hangi renktedir?',
      opts: ['Sarı', 'Beyaz', 'Mavi', 'Kırmızı'],
      a: 1,
      exp: 'Yaya geçidi çizgileri beyaz zemin işaretleriyle gösterilir.'
    },
    {
      q: 'Otoyol başlangıcını gösteren levha hangi özelliklere sahiptir?',
      opts: ['Üçgen', 'Otoyol sembolü ve mavi-yeşil tonlar', 'Sekizgen', 'Yuvarlak kırmızı'],
      a: 1,
      exp: 'Otoyol levhaları otoyol sembolü ile sürücüyü otoyol kurallarına hazırlar.'
    },
    {
      q: 'Hız sınırı sonu levhası nasıl anlaşılır?',
      opts: ['Kırmızı eğik çizgili veya “son” ibareli levha', 'Mavi ok', 'Üçgen', 'Sarı üçgen'],
      a: 0,
      exp: 'Hız sınırının bittiği, önceki sınırın kalktığı özel levhalarla bildirilir.'
    },
    {
      q: 'Tek yön yol levhası sürücüye ne söyler?',
      opts: ['Geri dönülebilir', 'Sadece levha yönünde gidilir', 'İki yönlü', 'Park yasak'],
      a: 1,
      exp: 'Tek yön levhaları trafiğin yalnızca belirtilen yönde aktığını bildirir.'
    },
    {
      q: 'Yol ver levhası ile dur levhası arasındaki fark nedir?',
      opts: ['Aynıdır', 'Dur levhasında tam duruş zorunlu', 'Yol verde durmak yasak', 'Dur levhası mavi'],
      a: 1,
      exp: 'DUR levhasında tam durup emniyetli geçiş sağlanır; YOL VER’de gerekirse yavaşlayıp yol açılır.'
    },
    {
      q: 'Sis veya yağmurda görünürlük için hangi zemin işareti önemlidir?',
      opts: ['Şerit çizgileri ve reflektörler', 'Sadece park çizgisi', 'Yeşil ok', 'Kırmızı alan'],
      a: 0,
      exp: 'Şerit ve yol çizgileri kötü havalarda şeridi takip etmek için kritik görsel rehberdir.'
    },
    {
      q: 'Engelli park alanı levhası ne bildirir?',
      opts: ['Herkes park edebilir', 'Sadece engelli araçları için ayrılmış alan', 'Ücretli park', 'Yük indirme'],
      a: 1,
      exp: 'Engelli işaretli park yerleri yalnızca yetkili araçlar içindir; ihlal cezalandırılır.'
    }
  ],
  motor: [
    {
      q: 'ABS fren sisteminin temel faydası nedir?',
      opts: ['Aracı hızlandırır', 'Fren sırasında tekerleklerin kilitlenmesini önler', 'Yakıt tasarrufu', 'Motor soğutur'],
      a: 1,
      exp: 'ABS, ani frenlemede direksiyon kontrolünün sürmesi için tekerlek kaymasını azaltır.'
    },
    {
      q: 'ESP (elektronik denge programı) ne işe yarar?',
      opts: ['Radyo açar', 'Savrulma ve kaymayı azaltır', 'Far yakar', 'Klima çalıştırır'],
      a: 1,
      exp: 'ESP, viraj ve kaygan zeminde aracın stabil kalmasına yardımcı olur.'
    },
    {
      q: 'Motor soğutma suyu seviyesi nereden kontrol edilir?',
      opts: ['Yağ çubuğundan', 'Radyatör/expansion tank seviyesinden', 'Depodan', 'Aküden'],
      a: 1,
      exp: 'Soğutma suyu, motor soğukken expansion tank veya radyatör kapağı yakınından kontrol edilir.'
    },
    {
      q: 'Fren balatalarının aşınması hangi belirtiyi verir?',
      opts: ['Motor titremesi', 'Fren pedalında gıcırtı veya uzun fren mesafesi', 'Far yanması', 'Akü şişmesi'],
      a: 1,
      exp: 'Aşınmış balatalar ses, titreşim ve zayıf fren performansı ile kendini gösterir.'
    },
    {
      q: 'Akü kutup başlarında oksitlenme neye yol açar?',
      opts: ['Daha iyi şarj', 'Şarj ve çalıştırma sorunları', 'Daha az yakıt', 'Lastik patlaması'],
      a: 1,
      exp: 'Kirli veya oksitli kutup başları elektrik iletimini zayıflatır; temizlik gerekir.'
    },
    {
      q: 'Hava filtresinin kirli olması neye neden olur?',
      opts: ['Daha iyi performans', 'Yanma veriminin düşmesi ve yakıt artışı', 'Fren tutmaz', 'Cam buğulanır'],
      a: 1,
      exp: 'Kirli hava filtresi motora yeterli hava sağlayamaz; performans ve tüketim olumsuz etkilenir.'
    },
    {
      q: 'Egzoz dumanının siyah ve yoğun olması genelde neyi gösterir?',
      opts: ['Normal durum', 'Yanma/karışım sorunu veya aşırı yakıt', 'Soğuk motor', 'Temiz filtre'],
      a: 1,
      exp: 'Siyah duman çoğu zaman zengin karışım veya yanma sorununa işaret eder; kontrol gerekir.'
    },
    {
      q: 'Direksiyon hidroliği veya elektrik desteği azalırsa ne hissedilir?',
      opts: ['Direksiyon ağırlaşır', 'Fren tutmaz', 'Motor durur', 'Far söner'],
      a: 0,
      exp: 'Hidrolik kaçağı veya pompa arızasında direksiyon çevirmek zorlaşır.'
    },
    {
      q: 'Kış lastiği ne zaman kullanılmalıdır?',
      opts: ['Sadece yazın', 'Hava sıcaklığı ve karlı/buzlu koşullarda', 'Hiçbir zaman', 'Sadece otoyolda'],
      a: 1,
      exp: 'Kış lastikleri düşük sıcaklıkta tutuş ve çekiş için tasarlanmıştır.'
    },
    {
      q: 'Motor yağı ne kadar sürede bir değiştirilmelidir (genel öneri)?',
      opts: ['Hiç değiştirilmez', 'Üretici bakım aralığına göre', 'Her gün', 'Sadece kışın'],
      a: 1,
      exp: 'Yağ değişimi km ve zaman aralığı, araç kılavuzundaki bakım planına göre yapılır.'
    },
    {
      q: 'Katalitik konvertör ne işe yarar?',
      opts: ['Yakıt depolar', 'Zararlı egzoz gazlarını azaltır', 'Fren yapar', 'Akü şarj eder'],
      a: 1,
      exp: 'Katalizör, egzoz emisyonlarını çevre standartlarına uygun hale getirir.'
    },
    {
      q: 'Vites kutusu yağı eksikse ne olabilir?',
      opts: ['Daha iyi vites', 'Vites geçiş zorluğu ve hasar', 'Far yanar', 'Klima bozulur'],
      a: 1,
      exp: 'Yetersiz şanzıman yağı dişli aşınması ve vites sorunlarına yol açar.'
    }
  ],
  ilkyardim: [
    {
      q: '112 acil hattı ne zaman aranmalıdır?',
      opts: ['Sadece yangında', 'Hayati tehlike ve profesyonel yardım gerektiğinde', 'Asla', 'Sadece hafta içi'],
      a: 1,
      exp: '112, ambulans, itfaiye ve polis için tek acil numaradır; ciddi durumlarda hemen aranmalıdır.'
    },
    {
      q: 'Yanık dereceleri arasında en derin ve tehlikeli hangisidir?',
      opts: ['1. derece', '2. derece', '3. derece (tam kalınlık)', 'Sadece kızarıklık'],
      a: 2,
      exp: '3. derece yanıklarda tüm deri katmanları etkilenir; mutlaka profesyonel tedavi gerekir.'
    },
    {
      q: 'Elektrik çarpması olan kazazedeye ilk yaklaşımda ne yapılır?',
      opts: ['Hemen dokunulur', 'Önce elektrik kaynağı kesilir veya uzaklaştırılır', 'Su dökülür', 'Koşulur'],
      a: 1,
      exp: 'Elektrik devresi kesilmeden dokunmak kurtarıcıyı da riske sokar.'
    },
    {
      q: 'Boyun omurga yaralanması şüphesinde ne yapılmamalıdır?',
      opts: ['112 aranır', 'Başı-boynu oynatmak ve oturtmak', 'Alan güvenliği', 'Solunum kontrolü'],
      a: 1,
      exp: 'Boyun travmasında baş-boyun sabit tutulur; gereksiz hareket felce yol açabilir.'
    },
    {
      q: 'Kalp masajı ve suni solunum oranı (yetişkin) genelde nasıldır?',
      opts: ['1:1', '30:2 (30 bası, 2 nefes)', '10:1', 'Sadece masaj'],
      a: 1,
      exp: 'Tek ilk yardımcıda 30 göğüs basısı, 2 suni solunum önerilir.'
    },
    {
      q: 'Zehirlenme şüphesinde ilk yardım prensibi nedir?',
      opts: ['Kusturmak her zaman doğrudur', 'Zehir türüne göre 112 ve uzman yönlendirmesi', 'Su içirmemek', 'Uyutmak'],
      a: 1,
      exp: 'Bilinçsiz kusturma tehlikelidir; zehir danışma hattı ve 112 yönlendirmesi esastır.'
    },
    {
      q: 'Şok belirtileri arasında hangisi sayılır?',
      opts: ['Canlılık', 'Soğuk ter, solukluk, hızlı nabız', 'Yüksek tansiyon her zaman', 'Aşırı susuzluk hissi yok'],
      a: 1,
      exp: 'Şokta dolaşım yetersizdir; soğuk-clammy cilt ve hızlı zayıf nabız görülebilir.'
    },
    {
      q: 'Burada “RICE” ilk yardımında R ne anlama gelir?',
      opts: ['Koşmak', 'Dinlenme (Rest)', 'Sıcak uygulama', 'Masaj'],
      a: 1,
      exp: 'Burkulma ve yumuşak doku yaralanmalarında dinlenme, buz, bandaj ve yükseltme uygulanır.'
    },
    {
      q: 'Göze kimyasal sıçramasında ne yapılır?',
      opts: ['Ovulur', 'Göz kapatılıp beklenir', 'Bol su ile en az 15 dk yıkanır', 'Yağ sürülür'],
      a: 2,
      exp: 'Göz, içe doğru akan tazyiksiz su ile uzun süre yıkanır; sonra tıbbi yardım alınır.'
    },
    {
      q: 'Bilinçsiz ve nefes almayan yetişkine ilk müdahale nedir?',
      opts: ['Su verilir', '112 + kalp-akciğer canlandırması', 'Oturtulur', 'Yürütülür'],
      a: 1,
      exp: 'Nefes yoksa hemen 112 aranır ve CPR başlanır; AED varsa kullanılır.'
    },
    {
      q: 'Kırık şüphesinde uzuv nasıl sabitlenir?',
      opts: ['Zorla düzeltilir', 'Hareket ettirilmeden atel/tel ile sabitlenir', 'Masaj yapılır', 'Sıcak kompres'],
      a: 1,
      exp: 'Kırık bölge oynatılmadan, varsa açık yara pansumanı ile birlikte immobilize edilir.'
    },
    {
      q: 'Isı çarpması veya güneş çarpmasında ilk adım nedir?',
      opts: ['Sıcak ortamda tutmak', 'Gölgeli serin yere alıp soğutma ve sıvı', 'Alkol vermek', 'Koşmak'],
      a: 1,
      exp: 'Sıcak çarpmasında kişi serinletilir, bilinç açıksa küçük yudumlarla sıvı verilir, 112 gerekirse aranır.'
    }
  ]
};
