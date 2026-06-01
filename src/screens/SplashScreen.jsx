import { motion } from 'framer-motion';
import { allBranches } from '../data/constants';
import { totalQuestionCount } from '../data/questions';
import { ThemeToggle } from '../components/ui/ThemeToggle';

const features = [
  { icon: '📚', label: `${totalQuestionCount}+ soru bankası` },
  { icon: '🎯', label: 'E-Sınav hazırlık' },
  { icon: '🏆', label: 'Liderlik tablosu' },
  { icon: '📱', label: 'Mobil eğitim' },
  { icon: '🔒', label: 'Gizlilik odaklı' },
  { icon: '⚡', label: 'Anlık geri bildirim' }
];

const stats = [
  { value: '12', label: 'Şube' },
  { value: '15+', label: 'Yıl' },
  { value: '50K+', label: 'Mezun' }
];

const steps = ['Bilgilerini gir', 'Kategori seç', 'Sınava hazırlan'];

/** Önceki splash ile aynı — direksiyon / sürücü kursu temalı görsel */
const SPLASH_HERO_IMAGE =
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80&auto=format&fit=crop';

const SPLASH_SLOGAN = 'Direksiyonda özgüven, ehliyet yolunda yanınızdayız';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export function SplashScreen({ nameInput, branchInput, onNameChange, onBranchChange, onLogin }) {
  const canSubmit = nameInput.trim().length > 1 && branchInput;

  return (
    <motion.div
      id="splash"
      className="splash-modern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Arka plan: mesh + hafif görsel */}
      <div className="splash-modern__bg" aria-hidden>
        <div className="splash-modern__mesh" />
        <img
          className="splash-modern__photo"
          src={SPLASH_HERO_IMAGE}
          alt="Ceylan Sürücü Kursu — direksiyon ve sürücü eğitimi"
          loading="eager"
        />
        <div className="splash-modern__grain" />
      </div>

      <div className="splash-modern__content">
        {/* Üst bar */}
        <motion.header
          className="splash-modern__top"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="splash-modern__brand splash-badge-pill">
            <div className="splash-modern__logo-ring" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="5" fill="none" />
                <circle cx="28" cy="28" r="5" fill="currentColor" />
                <line x1="28" y1="23" x2="28" y2="10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="28" y1="33" x2="21" y2="45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="28" y1="33" x2="35" y2="45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="splash-modern__brand-name">Ceylan Sürücü Kursu</span>
          </div>
          <ThemeToggle />
        </motion.header>

        {/* Hero */}
        <motion.div className="splash-modern__hero" variants={stagger} initial="hidden" animate="visible">
          <motion.div className="splash-modern__pill" variants={fadeUp}>
            <span className="splash-modern__pill-dot" />
            {SPLASH_SLOGAN}
          </motion.div>

          <motion.h1 className="splash-modern__headline" variants={fadeUp}>
            Ehliyet yolculuğunda
            <span className="splash-modern__headline-accent"> bir adım önde</span>
          </motion.h1>

          <motion.p className="splash-modern__lead" variants={fadeUp}>
            Teorik sınav pratiği, anlık çözümler ve şube desteği — tek uygulamada.
          </motion.p>

          {/* Kaydırılan özellik şeridi */}
          <motion.div className="splash-modern__marquee-wrap" variants={fadeUp}>
            <div className="splash-modern__marquee">
              {[...features, ...features].map((f, i) => (
                <span key={`${f.label}-${i}`} className="splash-modern__chip">
                  <span aria-hidden>{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* İstatistik kartları */}
          <motion.div className="splash-modern__stats" variants={fadeUp}>
            {stats.map((s) => (
              <div key={s.label} className="splash-modern__stat glass-card">
                <span className="splash-modern__stat-val">{s.value}</span>
                <span className="splash-modern__stat-lbl">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Form kartı */}
        <motion.section
          className="splash-modern__panel glass-card"
          initial={{ y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, type: 'spring', stiffness: 260, damping: 26 }}
        >
          <div className="splash-modern__steps" aria-hidden>
            {steps.map((label, i) => (
              <div key={label} className="splash-modern__step">
                <span className={`splash-modern__step-num ${i === 0 ? 'active' : ''}`}>{i + 1}</span>
                <span className="splash-modern__step-lbl">{label}</span>
              </div>
            ))}
          </div>

          <h2 className="splash-modern__panel-title">Hemen başla</h2>
          <p className="splash-modern__panel-sub">Ücretsiz — kayıt 30 saniye</p>

          <div className="splash-form-inner">
            <div className="splash-input-group">
              <label className="splash-label" htmlFor="name-input">
                Ad Soyad
              </label>
              <div className="splash-input-wrap">
                <svg className="splash-input-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <input
                  id="name-input"
                  className="splash-inp"
                  value={nameInput}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  onKeyDown={(e) => e.key === 'Enter' && canSubmit && onLogin()}
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="splash-input-group">
              <label className="splash-label" htmlFor="branch-select">
                Şube
              </label>
              <div className="splash-input-wrap">
                <svg className="splash-input-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <select
                  id="branch-select"
                  className="splash-inp splash-select"
                  value={branchInput}
                  onChange={(e) => onBranchChange(e.target.value)}
                >
                  <option value="">Şubenizi seçin</option>
                  {allBranches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              type="button"
              className={`splash-btn splash-btn--premium ${canSubmit ? '' : 'splash-btn--disabled'}`}
              onClick={onLogin}
              disabled={!canSubmit}
              whileHover={canSubmit ? { scale: 1.02 } : undefined}
              whileTap={canSubmit ? { scale: 0.98 } : undefined}
            >
              <span className="splash-btn__shimmer" aria-hidden />
              <span>Platforma Giriş Yap</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </motion.button>
          </div>

          <div className="splash-modern__trust">
            <span>🔒 Veriler yalnızca cihazınızda</span>
            <span className="splash-modern__trust-dot">·</span>
            <span>✓ MEB müfredatına uygun içerik</span>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
