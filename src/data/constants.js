export const branchPhones = {
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

export const allBranches = [
  'Meram Şubesi', 'Karatay Şubesi', 'Selçuklu Şubesi', 'Ereğli Şubesi', 'Akşehir Şubesi',
  'Beyşehir Şubesi', 'Cihanbeyli Şubesi', 'Ilgın Şubesi', 'Kadınhanı Şubesi',
  'Kulu Şubesi', 'Seydişehir Şubesi', 'Yunak Şubesi'
];

export const defaultPosts = [
  {
    id: 1,
    user: 'Mehmet K.',
    av: 'MK',
    color: '#ff6b00',
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

export const initialStats = { q: 0, correct: 0, streak: 0, weeklyCorrect: 0 };

export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const getInitials = (name) => {
  const words = name.trim().split(' ').filter(Boolean);
  return words.map((word) => word[0]).join('').substring(0, 2).toUpperCase();
};
