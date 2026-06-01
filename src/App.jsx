import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { BottomNav } from './components/ui/BottomNav';
import {
  DashboardSkeleton,
  FeedSkeleton,
  LeaderboardSkeleton,
  ProfileSkeleton
} from './components/ui/Skeleton';
import { Modal } from './components/ui/Modal';
import { Toast } from './components/ui/Toast';
import {
  branchPhones,
  defaultPosts,
  getInitials,
  initialStats,
  shuffle
} from './data/constants';
import { questions } from './data/questions';
import { useScreenLoading } from './hooks/useScreenLoading';
import { HomeScreen } from './screens/HomeScreen';
import { LeaderboardScreen } from './screens/LeaderboardScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { QuizScreen } from './screens/QuizScreen';
import { SocialScreen } from './screens/SocialScreen';
import { SplashScreen } from './screens/SplashScreen';

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('ey_user') || 'null'));
  const [stats, setStats] = useState(() =>
    JSON.parse(localStorage.getItem('ey_stats') || JSON.stringify(initialStats))
  );
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

  const loading = useScreenLoading(screen === 'quiz' ? 'quiz' : screen);

  useEffect(() => {
    if (user) localStorage.setItem('ey_user', JSON.stringify(user));
    else localStorage.removeItem('ey_user');
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
    if (user && screen === 'splash') setScreen('home');
  }, [user, screen]);

  useEffect(() => {
    document.body.style.overflow = modal.open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal.open]);

  const currentQuestion = quizState.data[quizState.currentQ] || null;
  const quizProgress = quizState.data.length
    ? (quizState.currentQ / quizState.data.length) * 100
    : 0;
  const branchPhone = user ? branchPhones[user.branch] || '0532 303 28 16' : '0532 303 28 16';
  const score = quizState.data.length
    ? Math.round(
        (quizState.answers.filter((a) => a.isCorrect).length / quizState.data.length) * 100
      )
    : 0;

  const allUsers = useMemo(() => {
    if (!user) return [];
    const myScore = stats.correct * 10;
    const list = [
      { name: 'Mehmet K.', sub: 'Meram Şubesi', score: 450, av: 'MK', color: '#ff6b00' },
      { name: 'Ayşe Y.', sub: 'Selçuklu Şubesi', score: 380, av: 'AY', color: '#22d3ee' },
      { name: 'Zeynep D.', sub: 'Karatay Şubesi', score: 290, av: 'ZD', color: '#4ade80' },
      {
        name: user.name,
        sub: user.branch,
        score: myScore,
        av: user.initials,
        color: 'var(--primary)',
        isMe: true
      }
    ];
    return [...list].sort((a, b) => b.score - a.score);
  }, [stats.correct, user]);

  const podium = allUsers.slice(0, 3);
  const rest = allUsers.slice(3);

  const showToast = (message) => {
    setToastMessage(message);
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => setToastMessage(''), 2500);
  };

  const showModal = (message) => setModal({ open: true, message });
  const closeModal = () => setModal({ open: false, message: '' });

  const login = () => {
    if (!nameInput.trim() || !branchInput) {
      showModal('Lütfen adınızı girin ve bir şube seçin.');
      return;
    }
    const name = nameInput.trim();
    setUser({ name, branch: branchInput, initials: getInitials(name) });
    setNameInput('');
    setBranchInput('');
    setScreen('home');
    showToast(`Hoş geldin, ${name}! 👋`);
  };

  const logout = () => {
    setUser(null);
    setStats(initialStats);
    setPosts(defaultPosts);
    setLikes({});
    setQuizState({
      category: '',
      data: [],
      currentQ: 0,
      answers: [],
      hasAnswered: false,
      showResult: false
    });
    setScreen('splash');
    showToast('Oturum kapatıldı.');
  };

  const startQuiz = (category) => {
    const pool = questions[category] || [];
    const quizData = shuffle(pool).slice(0, 10);
    setQuizState({
      category,
      data: quizData,
      currentQ: 0,
      answers: [],
      hasAnswered: false,
      showResult: false
    });
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
      color: 'var(--primary)',
      badge: user.branch,
      text: `Yapılan mini deneme testinde <strong>%${score}</strong> başarı skoru yakaladım! 🚗💨`,
      ach:
        score >= 80
          ? { icon: '🔥', title: 'Yüksek Başarı', sub: 'Mini Sınav Başarısı' }
          : null,
      likes: 0,
      time: 'Şimdi'
    };
    setPosts((prev) => [newPost, ...prev]);
    setScreen('social');
    showToast('Sonuç akışta paylaşıldı!');
  };

  const addNewPost = () => {
    if (!postText.trim() || !user) return;
    setPosts((prev) => [
      {
        id: Date.now(),
        user: user.name,
        av: user.initials,
        color: 'var(--primary)',
        badge: user.branch,
        text: postText.trim(),
        ach: null,
        likes: 0,
        time: 'Şimdi'
      },
      ...prev
    ]);
    setPostText('');
  };

  const handleLike = (id) => {
    const liked = !!likes[id];
    setLikes((prev) => ({ ...prev, [id]: !liked }));
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + (liked ? -1 : 1) } : post
      )
    );
  };

  const renderScreen = () => {
    if (screen === 'quiz') {
      return (
        <QuizScreen
          quizState={quizState}
          currentQuestion={currentQuestion}
          quizProgress={quizProgress}
          score={score}
          onExit={() => setScreen('home')}
          onSelectOption={selectOption}
          onNext={nextQuestion}
          onShareResult={shareResultToFeed}
        />
      );
    }

    if (loading) {
      if (screen === 'home') return <DashboardSkeleton />;
      if (screen === 'social') return <FeedSkeleton />;
      if (screen === 'leaderboard') return <LeaderboardSkeleton />;
      if (screen === 'profile') return <ProfileSkeleton />;
    }

    switch (screen) {
      case 'home':
        return <HomeScreen user={user} stats={stats} onStartQuiz={startQuiz} />;
      case 'social':
        return (
          <SocialScreen
            posts={posts}
            postText={postText}
            likes={likes}
            onPostTextChange={setPostText}
            onAddPost={addNewPost}
            onLike={handleLike}
          />
        );
      case 'leaderboard':
        return (
          <LeaderboardScreen
            user={user}
            podium={podium}
            rest={rest}
            onBranchTab={() => showToast('Şube filtrelemesi çok yakında!')}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            user={user}
            stats={stats}
            branchPhone={branchPhone}
            onAbout={() =>
              showModal('Ceylan Sürücü Kursu v2.0 - Konya. Tüm Hakları Saklıdır.')
            }
            onLogout={logout}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div id="app">
      <div className="app-bg" aria-hidden>
        <div className="app-bg__grid" />
        <div className="app-bg__orb app-bg__orb--primary" />
        <div className="app-bg__orb app-bg__orb--accent" />
      </div>

      <AnimatePresence mode="wait">
        {screen === 'splash' ? (
          <SplashScreen
            key="splash"
            nameInput={nameInput}
            branchInput={branchInput}
            onNameChange={setNameInput}
            onBranchChange={setBranchInput}
            onLogin={login}
          />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="app-main"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>

            {screen !== 'quiz' && <BottomNav screen={screen} onNavigate={setScreen} />}
          </motion.div>
        )}
      </AnimatePresence>

      <Toast message={toastMessage} />
      <Modal open={modal.open} message={modal.message} onClose={closeModal} />
    </div>
  );
}

export default App;
