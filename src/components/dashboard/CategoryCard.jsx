import { GlassCard } from '../ui/GlassCard';

export function CategoryCard({ icon, title, subtitle, progress, onClick, delay = 0 }) {
  return (
    <GlassCard className="cat-card" onClick={onClick} delay={delay} hover>
      <div className="cat-card__icon">{icon}</div>
      <div className="cat-title">{title}</div>
      {subtitle ? <div className="cat-subtitle">{subtitle}</div> : null}
      <div className="bar">
        <div className="bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </GlassCard>
  );
}
