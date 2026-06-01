import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Ana Sayfa', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
  { id: 'social', label: 'Akış', icon: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z' },
  { id: 'leaderboard', label: 'Sıralama', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { id: 'profile', label: 'Profil', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' }
];

export function BottomNav({ screen, onNavigate }) {
  return (
    <nav className="bottom-nav visible" aria-label="Ana navigasyon">
      {navItems.map((item) => {
        const active = screen === item.id;
        return (
          <motion.button
            key={item.id}
            type="button"
            className={`nav-btn ${active ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={active ? 'page' : undefined}
            whileTap={{ scale: 0.9 }}
          >
            {active && (
              <motion.span
                className="nav-btn__glow"
                layoutId="nav-glow"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d={item.icon} />
            </svg>
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
