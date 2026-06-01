import { GlassCard } from '../ui/GlassCard';

export function DashboardStatCard({ value, label, icon, accent, delay = 0 }) {
  return (
    <GlassCard className={`stat-card stat-card--${accent || 'primary'}`} delay={delay} hover>
      {icon ? <span className="stat-card__icon" aria-hidden>{icon}</span> : null}
      <div className="stat-num">{value}</div>
      <div className="stat-lbl">{label}</div>
    </GlassCard>
  );
}
