import { motion } from 'framer-motion';
import { CategoryCard } from '../components/dashboard/CategoryCard';
import { DashboardStatCard } from '../components/dashboard/DashboardStatCard';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHeader } from '../components/ui/PageHeader';
import { questionCounts } from '../data/questions';

const categories = [
  { key: 'trafik', icon: '🚗', title: 'Trafik Adabı', progress: (s) => (s.q > 0 ? 70 : 10) },
  { key: 'isaretler', icon: '🛑', title: 'Trafik İşaretleri', progress: (s) => (s.q > 0 ? 50 : 10) },
  { key: 'motor', icon: '⚙️', title: 'Motor & Araç', progress: (s) => (s.q > 0 ? 40 : 10) },
  { key: 'ilkyardim', icon: '💼', title: 'İlk Yardım', progress: (s) => (s.q > 0 ? 80 : 10) }
].map((c) => ({ ...c, count: questionCounts[c.key] }));

export function HomeScreen({ user, stats, onStartQuiz }) {
  const successRate = stats.q > 0 ? Math.round((stats.correct / stats.q) * 100) : 0;

  return (
    <div className="screen">
      <PageHeader title="Ceylan" highlight="Sürücü">
        <div className="user-chip glass-card glass-card--chip">
          <div className="avatar">{user?.initials}</div>
          <span>{user?.name}</span>
        </div>
      </PageHeader>

      <div className="section-pad">
        <GlassCard className="welcome-card" variant="accent" delay={0}>
          <div className="welcome-card__glow" aria-hidden />
          <h2 className="welcome-card__title">Sınava Hazır mısın?</h2>
          <p className="welcome-card__sub">Hemen bir kategori seçip kendini test etmeye başla.</p>
          <span className="welcome-card__badge">Premium Eğitim</span>
        </GlassCard>

        <div className="stats-row">
          <DashboardStatCard value={stats.q} label="Çözülen" icon="📝" delay={1} />
          <DashboardStatCard value={stats.correct} label="Doğru" icon="✓" accent="accent" delay={2} />
          <DashboardStatCard value={`%${successRate}`} label="Başarı" icon="🏆" delay={3} />
        </div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          🚀 Hızlı Kategoriler
        </motion.h2>
        <div className="cat-grid">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.key}
              icon={cat.icon}
              title={cat.title}
              subtitle={`${cat.count} soru`}
              progress={cat.progress(stats)}
              onClick={() => onStartQuiz(cat.key)}
              delay={i + 4}
            />
          ))}
        </div>
      </div>

      <div className="section-pad">
        <h2 className="section-title">📢 Duyurular</h2>
        <GlassCard className="announcement-card" delay={8}>
          <div className="ann-header">
            <span className="ann-badge">YENİ</span>
            <span className="ann-date">Bugün</span>
          </div>
          <div className="ann-body">
            <strong>E-Sınav Randevuları Hakkında:</strong> Şubemiz üzerinden teorik sınav
            randevularınızı güncelleyebilirsiniz. Detaylar için danışmanınızla görüşün.
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
