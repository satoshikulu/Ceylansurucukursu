import { useEffect, useMemo, useState } from 'react';

const branchPhones = {
  'Meram Şubesi': '0532 303 28 16',
  'Karatay Şubesi': '0532 303 28 16',
  'Selçuklu Şubesi': '0532 303 28 16',
  'Ereğli Şubesi': '0532 303 28 16',
  'Akşehir Şubesi': '0532 303 28 16',
  'Beyşehir Şubesi': '0532 303 28 16',
  'Cihanbeyli Şubesi': '0532 303 28 16',
  'Ilgın Şubesi': '0532 303 28 16',
  'Kadınhanı Şubesi': '0532 303 28 16',
  'Kulu Şubesi': '0532 303 28 16',
  'Seydişehir Şubesi': '0532 303 28 16',
  'Yunak Şubesi': '0532 303 28 16'
};

const questions = {
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

const defaultPosts = [
  {
    id: 1,
    user: 'Mehmet K.',
    av: 'MK',
    color: '#f97316',
    badge: 'Meram Şubesi',
    text: 'Bugün motor dersinde motor yağı kontrolünü öğrendik, pratik harikaydı! 🎉',
    ach: { icon: '⚙️', title: 'Motor Ustadı', sub: 'Teknik Eğitim' },
    likes: 14,
    time: '2 saat önce'
  },
  {
    id: 2,
    user: 'Ayşe Y.',
    av: 'AY',
    color: '#22d3ee',
    badge: 'Selçuklu Şubesi',
    text: 'Direksiyon sınav parkurunu hatasız tamamladım, darısı başınıza! 🚗✨',
    ach: { icon: '🎖️', title: 'Usta Sürücü', sub: 'Parkur Başarısı' },
    likes: 22,
    time: '5 saat önce'
  }
];

const initialStats = { q: 0, correct: 0, streak: 0, weeklyCorrect: 0 };

const allBranches = [
  'Meram Şubesi', 'Karatay Şubesi', 'Selçuklu Şubesi', 'Ereğli Şubesi', 'Akşehir Şubesi',
  'Beyşehir Şubesi', 'Cihanbeyli Şubesi', 'Ilgın Şubesi', 'Kadınhanı Şubesi',
  'Kulu Şubesi', 'Seydişehir Şubesi', 'Yunak Şubesi'
];

const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const getInitials = (name) => {
  const words = name.trim().split(' ').filter(Boolean);
  return words.map((word) => word[0]).join('').substring(0, 2).toUpperCase();
};

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('ey_user') || 'null'));
  const [stats, setStats] = useState(() => JSON.parse(localStorage.getItem('ey_stats') || JSON.stringify(initialStats)));
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('ey_posts');
    return saved ? JSON.parse(saved) : defaultPosts;
  });
  const [likes, setLikes] = useState(() => JSON.parse(localStorage.getItem('ey_likes') || '{}'));
  const [screen, setScreen] = useState(user ? 'home' : 'splash');
  const [nameInput, setNameInput] = useState('');
  const [branchInput, setBranchInput] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [modal, setModal] = useState({ open: false, message: '' });
  const [postText, setPostText] = useState('');
  const [quizState, setQuizState] = useState({
    category: '',
    data: [],
    currentQ: 0,
    answers: [],
    hasAnswered: false,
    showResult: false
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('ey_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ey_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('ey_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('ey_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('ey_likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    if (user && screen === 'splash') {
      setScreen('home');
    }
  }, [user, screen]);

  useEffect(() => {
    if (modal.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal.open]);

  const currentQuestion = quizState.data[quizState.currentQ] || null;
  const quizProgress = quizState.data.length ? ((quizState.currentQ) / quizState.data.length) * 100 : 0;
  const branchPhone = user ? branchPhones[user.branch] || '0532 303 28 16' : '0532 303 28 16';
  const score = quizState.data.length
    ? Math.round((quizState.answers.filter((answer) => answer.isCorrect).length / quizState.data.length) * 100)
    : 0;

  const allUsers = useMemo(() => {
    if (!user) return [];
    const myScore = stats.correct * 10;
    const list = [
      { name: 'Mehmet K.', sub: 'Meram Şubesi', score: 450, av: 'MK', color: '#f97316' },
      { name: 'Ayşe Y.', sub: 'Selçuklu Şubesi', score: 380, av: 'AY', color: '#22d3ee' },
      { name: 'Zeynep D.', sub: 'Karatay Şubesi', score: 290, av: 'ZD', color: '#4ade80' },
      { name: user.name, sub: user.branch, score: myScore, av: user.initials, color: 'linear-gradient(135deg, var(--orange), #ea580c)', isMe: true }
    ];
    return [...list].sort((a, b) => b.score - a.score);
  }, [stats.correct, user]);

  const podium = allUsers.slice(0, 3);
  const rest = allUsers.slice(3);

  const showToast = (message) => {
    setToastMessage(message);
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const showModal = (message) => setModal({ open: true, message });
  const closeModal = () => setModal({ open: false, message: '' });

  const login = () => {
    if (!nameInput.trim() || !branchInput) {
      showModal('Lütfen adınızı girin ve bir şube seçin.');
      return;
    }
    setUser({ name: nameInput.trim(), branch: branchInput, initials: getInitials(nameInput) });
    setNameInput('');
    setBranchInput('');
    setScreen('home');
    showToast(`Hoş geldin, ${nameInput.trim()}! 👋`);
  };

  const logout = () => {
    setUser(null);
    setStats(initialStats);
    setPosts(defaultPosts);
    setLikes({});
    setQuizState({ category: '', data: [], currentQ: 0, answers: [], hasAnswered: false, showResult: false });
    setScreen('splash');
    showToast('Oturum kapatıldı.');
  };

  const startQuiz = (category) => {
    const pool = questions[category] || [];
    const quizData = shuffle(pool).slice(0, 10);
    setQuizState({ category, data: quizData, currentQ: 0, answers: [], hasAnswered: false, showResult: false });
    setScreen('quiz');
  };

  const selectOption = (index) => {
    if (quizState.hasAnswered || quizState.showResult || !currentQuestion) return;
    const correctIdx = currentQuestion.a;
    const isCorrect = index === correctIdx;
    showToast(isCorrect ? 'Doğru cevap! 🎉' : 'Yanlış cevap! 🧐');
    setQuizState((prev) => ({
      ...prev,
      hasAnswered: true,
      answers: [...prev.answers, { isCorrect, userAns: index, correctAns: correctIdx }]
    }));
    setStats((prev) => ({
      ...prev,
      q: prev.q + 1,
      correct: prev.correct + (isCorrect ? 1 : 0)
    }));
  };

  const nextQuestion = () => {
    if (quizState.currentQ < quizState.data.length - 1) {
      setQuizState((prev) => ({ ...prev, currentQ: prev.currentQ + 1, hasAnswered: false }));
    } else {
      setQuizState((prev) => ({ ...prev, showResult: true }));
    }
  };

  const shareResultToFeed = () => {
    if (!user) return;
    const newPost = {
      id: Date.now(),
      user: user.name,
      av: user.initials,
      color: 'var(--orange)',
      badge: user.branch,
      text: `Yapılan mini deneme testinde <strong>%${score}</strong> başarı skoru yakaladım! 🚗💨`,
      ach: score >= 80 ? { icon: '🔥', title: 'Yüksek Başarı', sub: 'Mini Sınav Başarısı' } : null,
      likes: 0,
      time: 'Şimdi'
    };
    setPosts((prev) => [newPost, ...prev]);
    setScreen('social');
    showToast('Sonuç akışta paylaşıldı!');
  };

  const addNewPost = () => {
    if (!postText.trim() || !user) return;
    const newPost = {
      id: Date.now(),
      user: user.name,
      av: user.initials,
      color: 'var(--orange)',
      badge: user.branch,
      text: postText.trim(),
      ach: null,
      likes: 0,
      time: 'Şimdi'
    };
    setPosts((prev) => [newPost, ...prev]);
    setPostText('');
  };

  const handleLike = (id) => {
    const liked = !!likes[id];
    setLikes((prev) => ({ ...prev, [id]: !liked }));
    setPosts((prev) => prev.map((post) => (post.id === id ? { ...post, likes: post.likes + (liked ? -1 : 1) } : post)));
  };

  const homeContent = (
    <div id="screen-home" className="screen active">
      <div className="page-header">
        <div className="page-title">Ceylan <span>Sürücü</span></div>
        <div className="user-chip">
          <div className="avatar">{user?.initials}</div>
          <span>{user?.name}</span>
        </div>
      </div>

      <div className="section-pad">
        <div className="welcome-card">
          <h2 style={{ fontFamily: 'Syne', fontSize: 20, marginBottom: 4 }}>Sınava Hazır mısın?</h2>
          <p style={{ fontSize: 13, opacity: 0.8 }}>Hemen bir kategori seçip kendini test etmeye başla.</p>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-num">{stats.q}</div>
            <div className="stat-lbl">Çözülen</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">{stats.correct}</div>
            <div className="stat-lbl">Doğru</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">%{stats.q > 0 ? Math.round((stats.correct / stats.q) * 100) : 0}</div>
            <div className="stat-lbl">Başarı</div>
          </div>
        </div>

        <div className="section-title">🚀 Hızlı Kategoriler</div>
        <div className="cat-grid">
          <div className="cat-card" onClick={() => startQuiz('trafik')}>
            <div className="quick-icon">🚗</div>
            <div className="cat-title" style={{ marginTop: 6 }}>Trafik Adabı</div>
            <div className="bar"><div className="bar-fill" style={{ width: stats.q > 0 ? '70%' : '10%' }} /></div>
          </div>
          <div className="cat-card" onClick={() => startQuiz('isaretler')}>
            <div className="quick-icon">🛑</div>
            <div className="cat-title" style={{ marginTop: 6 }}>Trafik İşaretleri</div>
            <div className="bar"><div className="bar-fill" style={{ width: stats.q > 0 ? '50%' : '10%' }} /></div>
          </div>
          <div className="cat-card" onClick={() => startQuiz('motor')}>
            <div className="quick-icon">⚙️</div>
            <div className="cat-title" style={{ marginTop: 6 }}>Motor & Araç</div>
            <div className="bar"><div className="bar-fill" style={{ width: stats.q > 0 ? '40%' : '10%' }} /></div>
          </div>
          <div className="cat-card" onClick={() => startQuiz('ilkyardim')}>
            <div className="quick-icon">💼</div>
            <div className="cat-title" style={{ marginTop: 6 }}>İlk Yardım</div>
            <div className="bar"><div className="bar-fill" style={{ width: stats.q > 0 ? '80%' : '10%' }} /></div>
          </div>
        </div>
      </div>

      <div className="section-pad">
        <div className="section-title">📢 Duyurular</div>
        <div className="announcement-card">
          <div className="ann-header">
            <span className="ann-badge">YENİ</span>
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>Bugün</span>
          </div>
          <div className="ann-body">
            <strong>E-Sınav Randevuları Hakkında:</strong> Şubemiz üzerinden teorik sınav randevularınızı güncelleyebilirsiniz. Detaylar için danışmanınızla görüşün.
          </div>
        </div>
      </div>
    </div>
  );

  const quizContent = (
    <div id="screen-quiz" className="screen active">
      <div className="page-header">
        <div className="page-title">Soru <span>{quizState.currentQ + 1}/{quizState.data.length}</span></div>
        <button className="nav-text-button" onClick={() => setScreen('home')}>Sınavdan Çık</button>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${quizProgress}%` }} />
      </div>

      {quizState.showResult ? (
        <div className="result-container">
          <div className="result-circle" style={{ background: `conic-gradient(var(--green) ${score}%, var(--surface2) 0)` }}>
            <div className="result-score">%{score}</div>
          </div>
          <h3 style={{ fontFamily: 'Syne', fontSize: 22 }}>Tebrikler!</h3>
          <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 260 }}>
            {quizState.data.length} sorudan <strong>{quizState.answers.filter((a) => a.isCorrect).length} doğru</strong> ve <strong>{quizState.data.length - quizState.answers.filter((a) => a.isCorrect).length} yanlış</strong> yaptın.
          </p>
          <button className="btn-primary" style={{ width: '100%', maxWidth: 240, marginTop: 10 }} onClick={shareResultToFeed}>
            Akışta Paylaş 📣
          </button>
          <button className="btn-full" style={{ width: '100%', maxWidth: 240, background: 'var(--surface2)', border: '1px solid var(--border)' }} onClick={() => setScreen('home')}>
            Ana Sayfaya Dön
          </button>
        </div>
      ) : (
        <>
          <div className="question-card">
            <p className="question-text">{currentQuestion?.q}</p>
          </div>
          <div className="options-list">
            {currentQuestion?.opts.map((opt, i) => {
              const answer = quizState.answers[quizState.currentQ];
              const isCorrect = quizState.hasAnswered && i === currentQuestion.a;
              const selectedWrong = quizState.hasAnswered && answer?.userAns === i && i !== currentQuestion.a;
              return (
                <button
                  key={i}
                  className={`option-btn ${isCorrect ? 'correct' : ''} ${selectedWrong ? 'wrong' : ''}`}
                  onClick={() => selectOption(i)}
                >
                  <span style={{ fontFamily: 'Syne', fontWeight: 700, color: 'var(--orange)' }}>{String.fromCharCode(65 + i)})</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
          <div className={`explanation-box ${quizState.hasAnswered ? 'show' : ''}`}>
            <strong>💡 Çözüm Açıklaması:</strong><br />{currentQuestion?.exp}
          </div>
          <button className="btn-full" style={{ display: quizState.hasAnswered ? 'block' : 'none' }} onClick={nextQuestion}>
            {quizState.currentQ === quizState.data.length - 1 ? 'Sınavı Bitir 🏁' : 'Sonraki Soru ➡️'}
          </button>
        </>
      )}
    </div>
  );

  const socialContent = (
    <div id="screen-social" className="screen active">
      <div className="page-header">
        <div className="page-title">Sürücü <span>Akışı</span></div>
      </div>
      <div className="post-composer">
        <textarea value={postText} onChange={(e) => setPostText(e.target.value)} rows="2" placeholder="Sınav hazırlığı nasıl gidiyor, bir şeyler yaz..." />
        <button className="btn-share" onClick={addNewPost}>Paylaş</button>
      </div>
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-avatar" style={{ background: post.color || 'var(--orange)' }}>{post.av}</div>
              <div className="post-meta">
                <span className="post-user">{post.user}</span>
                <span className="post-sub">{post.badge} · {post.time}</span>
              </div>
            </div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.text }} />
            {post.ach ? (
              <div className="achievement-banner">
                <div className="ach-icon">{post.ach.icon}</div>
                <div>
                  <div className="ach-title">{post.ach.title}</div>
                  <div className="ach-sub">{post.ach.sub}</div>
                </div>
              </div>
            ) : null}
            <div className="post-actions">
              <button className={`action-btn ${likes[post.id] ? 'liked' : ''}`} onClick={() => handleLike(post.id)}>
                ❤️ <span>{post.likes} Beğeni</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const leaderboardContent = (
    <div id="screen-leaderboard" className="screen active">
      <div className="page-header">
        <div className="page-title">Liderlik <span>Tablosu</span></div>
      </div>
      <div className="tabs">
        <div className="tab active">Konya Geneli</div>
        <div className="tab" onClick={() => showToast('Şube filtrelemesi çok yakında!')}>{user?.branch}</div>
      </div>
      <div className="podium">
        {podium[1] && (
          <div className="podium-item p2">
            <div className="podium-avatar">{podium[1].av}</div>
            <span style={{ fontSize: 12, fontWeight: 600, width: 70, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{podium[1].name}</span>
            <div className="podium-base">2<span className="podium-score">{podium[1].score} P</span></div>
          </div>
        )}
        {podium[0] && (
          <div className="podium-item p1">
            <div style={{ fontSize: 18, marginBottom: -4 }}>👑</div>
            <div className="podium-avatar">{podium[0].av}</div>
            <span style={{ fontSize: 13, fontWeight: 700, width: 80, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{podium[0].name}</span>
            <div className="podium-base">1<span className="podium-score">{podium[0].score} P</span></div>
          </div>
        )}
        {podium[2] && (
          <div className="podium-item p3">
            <div className="podium-avatar">{podium[2].av}</div>
            <span style={{ fontSize: 12, fontWeight: 600, width: 70, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{podium[2].name}</span>
            <div className="podium-base">3<span className="podium-score">{podium[2].score} P</span></div>
          </div>
        )}
      </div>
      <div className="rank-list">
        {rest.map((u, index) => (
          <div key={u.name + index} className={`rank-item ${u.isMe ? 'me' : ''}`}>
            <div className="rank-num">{index + 4}</div>
            <div className="avatar" style={{ width: 32, height: 32, fontSize: 12, background: u.isMe ? 'var(--orange)' : '#1f2937' }}>{u.av}</div>
            <div className="rank-details">
              <span style={{ fontSize: 14, fontWeight: 600 }}>{u.name} {u.isMe ? '(Sen)' : ''}</span>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>{u.sub}</span>
            </div>
            <div className="rank-val">{u.score} <span style={{ fontSize: 10, fontWeight: 400, color: 'var(--muted)' }}>puan</span></div>
          </div>
        ))}
      </div>
    </div>
  );

  const profileContent = (
    <div id="screen-profile" className="screen active">
      <div className="page-header">
        <div className="page-title">Profil <span>Sayfam</span></div>
      </div>
      <div className="profile-header">
        <div className="profile-av">{user?.initials}</div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 22 }}>{user?.name}</h2>
        <p style={{ color: 'var(--orange)', fontSize: 13, fontWeight: 600, marginTop: -6 }}>📍 {user?.branch}</p>
      </div>
      <div className="section-title" style={{ padding: '0 20px' }}>🏅 Sürücü Rozetlerin</div>
      <div className="badges-grid">
        <div className="badge-item">
          <div className="badge-icon">🚗</div>
          <div className="badge-name">İlk Adım</div>
        </div>
        <div className={`badge-item ${stats.q >= 10 ? '' : 'locked'}`}>
          <div className="badge-icon">🔥</div>
          <div className="badge-name">10 Soru</div>
        </div>
        <div className={`badge-item ${stats.correct >= 10 ? '' : 'locked'}`}>
          <div className="badge-icon">🎓</div>
          <div className="badge-name">Usta Adayı</div>
        </div>
        <div className={`badge-item ${stats.correct >= 30 ? '' : 'locked'}`}>
          <div className="badge-icon">👑</div>
          <div className="badge-name">Şampiyon</div>
        </div>
      </div>
      <div className="menu-list">
        <a className="menu-item" style={{ textDecoration: 'none', color: 'inherit' }} href={`tel:${branchPhone.replace(/\s+/g, '')}`}>
          <div className="menu-left">📞 <span>Şubemi Ara ({branchPhone})</span></div>
          <span style={{ color: 'var(--muted)' }}>➔</span>
        </a>
        <div className="menu-item" onClick={() => showModal('Ceylan Sürücü Kursu v2.0 - Konya. Tüm Hakları Saklıdır.') }>
          <div className="menu-left">ℹ️ <span>Uygulama Hakkında</span></div>
          <span style={{ color: 'var(--muted)' }}>➔</span>
        </div>
        <div className="menu-item" onClick={logout} style={{ borderColor: 'rgba(248,113,113,0.2)', background: 'rgba(248,113,113,0.05)' }}>
          <div className="menu-left"><span style={{ color: 'var(--red)' }}>🚪 Çıkış Yap</span></div>
          <span style={{ color: 'var(--red)' }}>➔</span>
        </div>
      </div>
    </div>
  );

  const splashContent = (
    <div id="splash" className="splash-new">
      {/* Hero görsel alanı */}
      <div className="splash-hero">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80&auto=format&fit=crop"
          alt="Sürücü kursu"
          className="splash-hero-img"
        />
        <div className="splash-hero-overlay" />
        {/* Üst logo bandı */}
        <div className="splash-topbar">
          <div className="splash-badge-pill">
            <svg width="20" height="20" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="22" stroke="white" strokeWidth="5" fill="none"/>
              <circle cx="28" cy="28" r="5" fill="white"/>
              <line x1="28" y1="23" x2="28" y2="10" stroke="white" strokeWidth="5" strokeLinecap="round"/>
              <line x1="28" y1="33" x2="21" y2="45" stroke="white" strokeWidth="5" strokeLinecap="round"/>
              <line x1="28" y1="33" x2="35" y2="45" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <span>Ceylan Sürücü Kursu</span>
          </div>
        </div>
        {/* Hero alt metin */}
        <div className="splash-hero-text">
          <div className="splash-hero-tag">KONYA'NIN LİDERİ</div>
          <h1 className="splash-hero-title">Güvenli Sürüşün<br /><span>Doğru Adresi</span></h1>
          <div className="splash-stats-row">
            <div className="splash-stat">
              <span className="splash-stat-num">12</span>
              <span className="splash-stat-lbl">Şube</span>
            </div>
            <div className="splash-stat-divider" />
            <div className="splash-stat">
              <span className="splash-stat-num">15+</span>
              <span className="splash-stat-lbl">Yıl Deneyim</span>
            </div>
            <div className="splash-stat-divider" />
            <div className="splash-stat">
              <span className="splash-stat-num">50K+</span>
              <span className="splash-stat-lbl">Mezun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form kartı */}
      <div className="splash-card">
        <div className="splash-card-header">
          <h2 className="splash-card-title">Hemen Başla</h2>
          <p className="splash-card-sub">Bilgilerini gir, sınava hazırlanmaya başla.</p>
        </div>
        <div className="splash-form-inner">
          <div className="splash-input-group">
            <label className="splash-label">Ad Soyad</label>
            <div className="splash-input-wrap">
              <svg className="splash-input-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <input
                className="splash-inp"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Adınızı ve soyadınızı girin"
                onKeyDown={(e) => e.key === 'Enter' && login()}
              />
            </div>
          </div>
          <div className="splash-input-group">
            <label className="splash-label">Şube Seçimi</label>
            <div className="splash-input-wrap">
              <svg className="splash-input-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <select
                className="splash-inp splash-select"
                value={branchInput}
                onChange={(e) => setBranchInput(e.target.value)}
              >
                <option value="">— Şubenizi seçin —</option>
                {allBranches.map((branch) => (<option key={branch} value={branch}>{branch}</option>))}
              </select>
            </div>
          </div>
          <button className="splash-btn" onClick={login}>
            <span>Platforma Giriş Yap</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>
        <div className="splash-trust">
          <span>🔒 Verileriniz cihazınızda güvende saklanır</span>
        </div>
      </div>
    </div>
  );

  return (
    <div id="app">
      {screen === 'splash' ? splashContent : null}
      {screen !== 'splash' && (
        <>
          <div id="screen-home" className="screen" style={{ display: screen === 'home' ? 'block' : 'none' }}>{homeContent}</div>
          <div id="screen-quiz" className="screen" style={{ display: screen === 'quiz' ? 'block' : 'none' }}>{quizContent}</div>
          <div id="screen-social" className="screen" style={{ display: screen === 'social' ? 'block' : 'none' }}>{socialContent}</div>
          <div id="screen-leaderboard" className="screen" style={{ display: screen === 'leaderboard' ? 'block' : 'none' }}>{leaderboardContent}</div>
          <div id="screen-profile" className="screen" style={{ display: screen === 'profile' ? 'block' : 'none' }}>{profileContent}</div>

          <nav className={`bottom-nav visible`} id="nav">
            <button className={`nav-btn ${screen === 'home' ? 'active' : ''}`} onClick={() => setScreen('home')}>
              <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              <span>Ana Sayfa</span>
            </button>
            <button className={`nav-btn ${screen === 'social' ? 'active' : ''}`} onClick={() => setScreen('social')}>
              <svg viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" /></svg>
              <span>Akış</span>
            </button>
            <button className={`nav-btn ${screen === 'leaderboard' ? 'active' : ''}`} onClick={() => setScreen('leaderboard')}>
              <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
              <span>Sıralama</span>
            </button>
            <button className={`nav-btn ${screen === 'profile' ? 'active' : ''}`} onClick={() => setScreen('profile')}>
              <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              <span>Profil</span>
            </button>
          </nav>
        </>
      )}

      <div className={`toast ${toastMessage ? 'show' : ''}`}>{toastMessage}</div>
      <div className={`modal ${modal.open ? 'show' : ''}`} style={{ display: modal.open ? 'flex' : 'none' }}>
        <div className="modal-content">
          <p id="modal-text">{modal.message}</p>
          <button className="btn-full" onClick={closeModal}>Kapat</button>
        </div>
      </div>
    </div>
  );
}

export default App;
