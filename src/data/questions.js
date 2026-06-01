import { questionsExtra } from './questionsExtra.js';

const baseQuestions = {
  trafik: [
    {
      q: 'Sürücüler, trafik ışıklarında sarı ışık yandığında ne yapmalıdır?',
      opts: ['Hızlanmalı', 'Durmalı veya durağa hazırlanmalı', 'Geçmeye devam etmeli', 'Korna çalmalı'],
      a: 1,
      exp: 'Sarı ışık, kırmızıya geçileceğini bildirir; emniyetle durulamayacak durumlar hariç durulmalıdır.'
    },
    {
      q: 'Şehir içinde aksine bir işaret yoksa azami hız limiti kaç km/s dir?',
      opts: ['50 km/s', '70 km/s', '90 km/s', '110 km/s'],
      a: 0,
      exp: 'Yerleşim yeri (şehir içi) yollarında standart azami hız sınırı 50 km/s dir.'
    },
    {
      q: 'Kontrolsüz kavşaklarda hangi araç öncelikli geçiş hakkına sahiptir?',
      opts: ['Soldaki araç', 'Sağdaki araç', 'Büyük araç', 'Hız yapan araç'],
      a: 1,
      exp: 'Kontrolsüz kavşaklarda sürücüler sağdaki araca geçiş hakkı vermek zorundadır.'
    },
    {
      q: 'Araçlarda emniyet kemeri takmak ne zaman yasal zorunluluktur?',
      opts: ['Sadece otoyollarda', 'Hayır zorunlu değil', 'Evet, tüm yollarda ve koltuklarda', 'Sadece şehir dışında'],
      a: 2,
      exp: 'Emniyet kemeri şehir içi, şehirler arası tüm yollarda tüm yolcular için zorunludur.'
    },
    {
      q: 'Hususi otomobil sürücüleri için alkollü araç kullanma yasal limiti nedir?',
      opts: ['0.50 promil', '1.00 promil', '0.00 promil', '0.20 promil'],
      a: 0,
      exp: 'Hususi araç sürücüleri için yasal üst sınır 0.50 promildir.'
    },
    {
      q: 'Park yasağı ihlali yapılan araçlara hangi işlem uygulanır?',
      opts: ['Sadece sözlü uyarı', 'Para cezası ve araç çekilmesi', 'Hapis cezası', 'Ehliyetin kalıcı iptali'],
      a: 1,
      exp: 'Park yasağı ihlalinde para cezası kesilir ve trafik akışını engelliyorsa çekiciyle çekilir.'
    },
    {
      q: 'Gece karşı taraftan gelen sürücünün gözünü kamaştırmamak için hangi farlar yakılır?',
      opts: ['Uzun farlar', 'Sis farları', 'Kısa farlar', 'Park lambaları'],
      a: 2,
      exp: 'Karşılaşmalarda veya bir aracı yakından takip ederken kısa farlar (yakın ışıklar) kullanılmalıdır.'
    },
    {
      q: 'Takip mesafesi kural olarak en az ne kadar olmalıdır?',
      opts: ['10 metre', 'Araç boyunun 3 katı', 'Hızın yarısı kadar metre', '20 metre'],
      a: 2,
      exp: 'Güvenli takip mesafesi, kilometre cinsinden saatteki hızın en az yarısı kadar metre olmalıdır.'
    },
    {
      q: 'Geçiş üstünlüğüne sahip bir ambulansın sirenini duyan sürücü ne yapmalıdır?',
      opts: ['Hızlanıp ambulansın önüne geçmeli', 'Sağa yanaşıp fermuar sistemiyle yol vermeli', 'Hemen ani fren yapmalı', 'Korna çalıp durmalı'],
      a: 1,
      exp: 'Can ve mal güvenliğini tehlikeye sokmadan sağa yanaşarak ambulansa yol açılmalıdır.'
    },
    {
      q: 'Trafik kazası sonrası olay yerinde alınması gereken ilk güvenlik önlem nedir?',
      opts: ['Hemen yaralıyı taşımak', 'Reflektör koyup alanı işaretlemek', 'Polisi beklemek', 'Aracı kilitlemek'],
      a: 1,
      exp: 'İkinci bir kazayı önlemek amacıyla araçların önüne ve arkasına uygun mesafede üçgen reflektör yerleştirilmelidir.'
    }
  ],
  isaretler: [
    {
      q: 'Üçgen şeklindeki kırmızı çerçeveli trafik işaretleri genel olarak ne bildirir?',
      opts: ['Trafik yasağı', 'Tehlike ve uyarı', 'Bilgilendirme', 'Zorunlu yön'],
      a: 1,
      exp: 'Üçgen levhalar yol üzerindeki tehlikeleri ve sürücülerin dikkat etmesi gereken uyarıları gösterir.'
    },
    {
      q: 'Yuvarlak kırmızı çerçeveli trafik işaretleri ne anlama gelir?',
      opts: ['Yolun bittiğini', 'Hızlanılması gerektiğini', 'Trafik tanzim (yasaklama veya kısıtlama)', 'Turistik rota uyarısı'],
      a: 2,
      exp: 'Kırmızı halka içerisindeki semboller o yasaklamayı veya kısıtlamayı belirtir.'
    },
    {
      q: 'Mavi zeminli dikdörtgen veya kare trafik levhaları ne amaçla kullanılır?',
      opts: ['Sadece hız sınırları', 'Tehlike uyarıları', 'Bilgilendirme ve yönlendirme', 'Durma mecburiyeti'],
      a: 2,
      exp: 'Mavi dikdörtgen veya kare levhalar sürücülere yol hakkında bilgi verir.'
    },
    {
      q: 'Sekizgen (8 köşeli) kırmızı renkli levha neyi ifade eder?',
      opts: ['Hız Sınırı', 'Yol Ver', 'DUR', 'Park Yeri'],
      a: 2,
      exp: 'Sekizgen levha tüm dünyada evrensel olarak DUR işaretidir.'
    },
    {
      q: 'Ters üçgen (tabanı yukarıda olan) levha ne anlama gelir?',
      opts: ['Yol Ver', 'Ana Yol', 'Dikkat', 'Dur'],
      a: 0,
      exp: 'Ters üçgen levha tali yoldan ana yola çıkarken sürücülere Yol Ver anlamını taşır.'
    },
    {
      q: 'Mavi yuvarlak levha içerisinde beyaz ok işaretleri neyi bildirir?',
      opts: ['Mecburi yönü', 'Yolun kapandığını', 'Hız limiti sonunu', 'Park yasağını'],
      a: 0,
      exp: 'Mavi yuvarlak levhalar mecburi yön veya mecburi hareket bildiren tanzim işaretleridir.'
    },
    {
      q: 'Üzerinde kırmızı eğik çizgi olan yuvarlak levhalar neyi anlatır?',
      opts: ['Hız sınırını', 'Belirtilen yasağın sona erdiğini', 'Girişin yasaklandığını', 'Yol çalışmasını'],
      a: 1,
      exp: 'Kırmızı eğik çizgili siyah/beyaz levhalar önceki yasaklama veya kısıtlamaların bittiğini ifade eder.'
    },
    {
      q: 'Yol zeminindeki kesik kesik çizgiler sürücüye ne hakkı tanır?',
      opts: ['Durma hakkı', 'Şerit değiştirme ve öndeki aracı geçme hakkı', 'Hız sınırını aşma hakkı', 'Ters yöne girme hakkı'],
      a: 1,
      exp: 'Kesik şerit çizgileri boyunca kurallara uymak şartıyla şerit değiştirilebilir veya solma yapılabilir.'
    },
    {
      q: 'Yol zeminindeki düz devamlı çizgi neyi bildirir?',
      opts: ['Şerit değiştirmenin ve öndeki aracı geçmenin yasak olduğunu', 'Hızlanılması gerektiğini', 'Park edilebileceğini', 'Yolun bittiğini'],
      a: 0,
      exp: 'Düz devamlı çizgi boyunca şerit değiştirmek ve öndeki aracı geçmek kesinlikle yasaktır.'
    },
    {
      q: 'Kırmızı daire içerisinde iki otomobil yan yana duruyorsa ve soldaki kırmızıysa ne anlama gelir?',
      opts: ['Öndeki aracı geçme yasağı', 'Hız yarışı serbestliği', 'Park yasağı', 'İki şeritli yol başlangıcı'],
      a: 0,
      exp: 'Bu levha, motorlu araçların önlerindeki araçları geçmelerinin (solama yapmalarının) yasak olduğunu bildirir.'
    }
  ],
  motor: [
    {
      q: 'Motor yağı kontrol edilirken aracın konumu nasıl olmalıdır?',
      opts: ['Yokuş yukarı durmalı', 'Rampa aşağı durmalı', 'Düz bir zeminde ve motor stop edilmiş olmalı', 'Çalışır durumda olmalı'],
      a: 2,
      exp: 'Doğru bir yağ seviyesi ölçümü için araç düz zeminde olmalı ve yağın kartere süzülmesi için motor durdurulmuş olmalıdır.'
    },
    {
      q: 'Motorun hararet yapmasının temel sebeplerinden biri hangisidir?',
      opts: ['Lastik basıncının düşük olması', 'Radyatörde suyun azalması veya sızıntı olması', 'Fren hidroliğinin bitmesi', 'Depodaki yakıtın azalması'],
      a: 1,
      exp: 'Soğutma sistemindeki radyatör suyunun azalması motorun soğutulamamasına ve hararet yapmasına yol açar.'
    },
    {
      q: 'Gösterge panelinde yağ lambası yanarken sürüşe devam edilirse ne olur?',
      opts: ['Yakıt tasarrufu sağlanır', 'Motor aşırı ısınır ve yatak sararak büyük hasar görür', 'Frenler daha iyi tutar', 'Akü daha hızlı şarj olur'],
      a: 1,
      exp: 'Yağlama sistemi çalışmadığında sürtüşme artar, motor parçaları birbirine kaynar ve motor kilitlenir.'
    },
    {
      q: 'Seyir halindeyken şarj lambasının (akü resmi) yanması neyi gösterir?',
      opts: ['Akünün tam dolu olduğunu', 'Alternatörün (şarj sisteminin) elektrik üretmediğini', 'Farların açık kaldığını', 'Radyonun bozulduğunu'],
      a: 1,
      exp: 'Şarj lambası yanıyorsa alternatör aküyü beslemiyor demektir; araç kısa süre sonra elektriksiz kalıp durur.'
    },
    {
      q: 'Motor bloğundaki aşınmaları ve sürtünmeyi önleyen sistem hangisidir?',
      opts: ['Ateşleme sistemi', 'Soğutma sistemi', 'Yağlama sistemi', 'Şarj sistemi'],
      a: 2,
      exp: 'Yağlama sistemi, motorun hareketli parçaları arasında bir film tabakası oluşturarak aşınma ve ısınmayı önler.'
    },
    {
      q: 'Dizel motorlar hangi yakıt türü ile çalışır?',
      opts: ['Benzin', 'LPG', 'Motorin (Mazot)', 'Gazyağı'],
      a: 2,
      exp: 'Dizel motorların yakıtı motorindir (halk arasında mazot olarak bilinir).'
    },
    {
      q: 'Buji hangi motor tipinde yakıtın ateşlenmesini sağlar?',
      opts: ['Dizel motorlarda', 'Benzinli motorlarda', 'Buharlı motorlarda', 'Elektrikli motorlarda'],
      a: 1,
      exp: 'Buji, benzin ve LPG li motorlarda silindir içerisindeki yakıt hava karışımını kıvılcımla ateşler.'
    },
    {
      q: 'Antifriz maddesi kışın motor soğutma suyuna neden eklenir?',
      opts: ['Suyun donmasını engellemek için', 'Yakıtı temizlemek için', 'Aracı hızlandırmak için', 'Frenleri güçlendirmek için'],
      a: 0,
      exp: 'Antifriz, soğutma suyunun sıfırın altındaki derecelerde donmasını engelleyerek motor bloğunun çatlamasını önler.'
    },
    {
      q: 'Fren hidrolik seviyesi azalırsa aşağıdakilerden hangisi meydana gelir?',
      opts: ['Motor hararet yapar', 'Fren tutuş performansı düşer veya tamamen kaybolur', 'Lastikler patlar', 'Akü boşalır'],
      a: 1,
      exp: 'Fren hidroliği, fren pedalına basıldığında basıncı balatalara iletir. Eksilmesi frenin tutmamasına yol açar.'
    },
    {
      q: 'Lastiklerin hava basıncı normalden az olursa ne gibi bir olumsuzluk yaşanır?',
      opts: ['Yakıt tüketimi artar ve lastik kenarları aşınır', 'Araç daha hızlı gider', 'Fren mesafesi kısalır', 'Motor yağ yakar'],
      a: 0,
      exp: 'Düşük lastik basıncı yuvarlanma direncini artırarak yakıt tüketimini yükseltir ve düzensiz lastik aşınmasına sebep olur.'
    }
  ],
  ilkyardim: [
    {
      q: 'İlk yardımın öncelikli amaçlarından biri aşağıdakilerden hangisidir?',
      opts: ['Hayati tehlikeyi ortadan kaldırmak ve durumu korumak', 'Yaralıya hemen ilaç vermek', 'Hastaneye telefon etmek', 'Hemen ameliyata almak'],
      a: 0,
      exp: 'İlk yardımın amacı tıbbi tedavi değil; yaşamı korumak, durumun kötüleşmesini önlemek ve hayati tehlikeyi bitirmektir.'
    },
    {
      q: 'Olay yerinde ilk yardımcının kendisinin ve yaralının güvenliği için yapması gereken ilk şey nedir?',
      opts: ['Yaralıyı hemen kucaklayıp kaçırmak', 'Çevredeki insanları azarlamak', 'Olay yeri güvenliğini sağlamak (üçgen vb.)', 'Hemen suni solunum yapmak'],
      a: 2,
      exp: 'Önce can güvenliği prensibi gereği, yeni bir kaza riskine karşı çevre güvenliği tam alınmalıdır.'
    },
    {
      q: 'Yetişkin bir insana yapılan dış kalp masajında göğüs kemiği kaç cm aşağı inecek şekilde bası uygulanır?',
      opts: ['1 cm', '5 cm', '10 cm', '12 cm'],
      a: 1,
      exp: 'Yetişkinlerde etkili bir yapay dolaşım sağlamak için göğüs kemiği dik olarak 5 cm aşağı inecek şekilde bastırılmalıdır.'
    },
    {
      q: 'Solunum yolu tam tıkanmış (Konuşamayan, nefes alamayan) bir kazazedeye hangi teknik uygulanır?',
      opts: ['Heimlich Manevrası', 'Rentek Manevrası', 'Şok Pozisyonu', 'Koma Pozisyonu'],
      a: 0,
      exp: 'Tam tıkanmalarda yabancı cismi dışarı fırlatmak için karın bölgesine bası uygulanan Heimlich manevrası yapılır.'
    },
    {
      q: 'Bilinci kapalı fakat solunumu olan bir yaralıya hangi pozisyon verilmelidir?',
      opts: ['Sırtüstü yatış', 'Koma (Yarı yan yatış) pozisyonu', 'Baş çene pozisyonu', 'Oturuş pozisyonu'],
      a: 1,
      exp: 'Koma pozisyonu, dilin geriye kaçmasını ve kusmuğun ciğerlere dolmasını engelleyen güvenli yan yatış pozisyonudur.'
    },
    {
      q: 'Kanamalarda turnike (boğucu sargı) uygulaması hangi durumda tercih edilir?',
      opts: ['Hafif sıyrıklarda', 'Uzuv kopması veya çok sayıda yaralının olduğu büyük kanamalarda', 'Burun kanamasında', 'Baş yaralanmasında'],
      a: 1,
      exp: 'Turnike, baskı noktalarına bası uygulamanın yetersiz kaldığı büyük uzuv kopmalarında kanamayı durdurmak için son çare olarak uygulanır.'
    },
    {
      q: 'Kazazedeyi araç içinden omuriliğine zarar vermeden çıkarmak için kullanılan teknik hangisidir?',
      opts: ['Heimlich Manevrası', 'Rentek Manevrası', 'İtfaiyeci Yöntemi', 'Altın Beşik Yöntemi'],
      a: 1,
      exp: 'Rentek manevrası, yaralının omuriliğini koruyarak felç kalmasını önlemek amacıyla araçtan çıkarma tekniğidir.'
    },
    {
      q: 'Şok pozisyonunda yaralının bacakları kaç cm yukarı kaldırılır?',
      opts: ['10 cm', '30 cm', '50 cm', '75 cm'],
      a: 1,
      exp: 'Şok pozisyonunda beyne kan akışını desteklemek için yaralının bacakları yaklaşık 30 cm yukarı kaldırılır.'
    },
    {
      q: 'Burun kanaması olan bir yaralıya hangi pozisyon verilmelidir?',
      opts: ['Baş geriye doğru atılarak sırtüstü yatırılır', 'Baş hafifçe öne eğilerek oturtulur ve burun kanatları sıkılır', 'Yüzüstü yatırılır', 'Koma pozisyonu verilir'],
      a: 1,
      exp: 'Burun kanamasında kanın yutulmaması veya ciğerlere kaçmaması için baş öne eğilmeli ve burun kanatları 5 dakika sıkılmalıdır.'
    },
    {
      q: 'Kimyasal madde yanıklarında ilk yardım olarak bölgeye ne uygulanmalıdır?',
      opts: ['Yoğurt ve diş macunu', 'Bol ve tazyiksiz temiz su ile en az 15-20 dakika yıkamak', 'Hemen sargı beziyle sıkıca kapatmak', 'Zeytinyağı sürmek'],
      a: 1,
      exp: 'Kimyasal yanıklarda maddeyi deriden uzaklaştırmak için alan hemen tazyiksiz bol akan suyla uzun süre yıkanmalıdır.'
    }
  ]
};

export const questions = Object.fromEntries(
  Object.keys(baseQuestions).map((key) => [
    key,
    [...baseQuestions[key], ...(questionsExtra[key] || [])]
  ])
);

export const questionCounts = Object.fromEntries(
  Object.entries(questions).map(([key, list]) => [key, list.length])
);

export const totalQuestionCount = Object.values(questions).reduce((sum, list) => sum + list.length, 0);
