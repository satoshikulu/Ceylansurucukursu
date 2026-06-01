import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHeader } from '../components/ui/PageHeader';
import { ThemeToggle } from '../components/ui/ThemeToggle';

export function ProfileScreen({ user, stats, branchPhone, onAbout, onLogout }) {
  const badges = [
    { icon: '🚗', name: 'İlk Adım', locked: false },
    { icon: '🔥', name: '10 Soru', locked: stats.q < 10 },
    { icon: '🎓', name: 'Usta Adayı', locked: stats.correct < 10 },
    { icon: '👑', name: 'Şampiyon', locked: stats.correct < 30 }
  ];

  return (
    <div className="screen">
      <PageHeader title="Profil" highlight="Sayfam" showTheme={false}>
        <ThemeToggle />
      </PageHeader>

      <motion.div
        className="profile-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="profile-av"
          whileHover={{ scale: 1.05, boxShadow: '0 0 32px var(--primary-glow)' }}
        >
          {user?.initials}
        </motion.div>
        <h2 className="profile-name">{user?.name}</h2>
        <p className="profile-branch">📍 {user?.branch}</p>
      </motion.div>

      <h2 className="section-title section-title--pad">🏅 Sürücü Rozetlerin</h2>
      <div className="badges-grid">
        {badges.map((b, i) => (
          <GlassCard
            key={b.name}
            className={`badge-item ${b.locked ? 'locked' : ''}`}
            delay={i}
            hover={!b.locked}
          >
            <div className="badge-icon">{b.icon}</div>
            <div className="badge-name">{b.name}</div>
          </GlassCard>
        ))}
      </div>

      <div className="menu-list">
        <a
          className="menu-item glass-card"
          href={`tel:${branchPhone.replace(/\s+/g, '')}`}
        >
          <div className="menu-left">
            📞 <span>Şubemi Ara ({branchPhone})</span>
          </div>
          <span className="menu-arrow">➔</span>
        </a>
        <GlassCard className="menu-item" onClick={onAbout} delay={0}>
          <div className="menu-left">
            ℹ️ <span>Uygulama Hakkında</span>
          </div>
          <span className="menu-arrow">➔</span>
        </GlassCard>
        <GlassCard className="menu-item menu-item--danger" onClick={onLogout} delay={0}>
          <div className="menu-left">
            <span className="menu-danger">🚪 Çıkış Yap</span>
          </div>
          <span className="menu-danger">➔</span>
        </GlassCard>
      </div>
    </div>
  );
}
