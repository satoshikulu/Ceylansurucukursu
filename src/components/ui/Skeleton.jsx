import { motion } from 'framer-motion';

export function Skeleton({ className = '', width, height, rounded = 'md' }) {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <motion.div
      className={`skeleton skeleton--${rounded} ${className}`.trim()}
      style={style}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="skeleton-screen" aria-busy="true" aria-label="Yükleniyor">
      <div className="skeleton-header">
        <Skeleton width="55%" height={28} />
        <Skeleton width={100} height={36} rounded="full" />
      </div>
      <Skeleton className="skeleton-hero" height={120} rounded="lg" />
      <div className="skeleton-stats">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="skeleton-stat" height={88} rounded="md" />
        ))}
      </div>
      <Skeleton width="40%" height={18} />
      <div className="skeleton-grid">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} height={100} rounded="md" />
        ))}
      </div>
      <Skeleton width="35%" height={18} style={{ marginTop: 24 }} />
      <Skeleton height={100} rounded="md" />
    </div>
  );
}

export function FeedSkeleton() {
  return (
    <div className="skeleton-screen" aria-busy="true">
      <Skeleton width="50%" height={28} />
      <Skeleton height={72} rounded="md" style={{ marginTop: 20 }} />
      {[0, 1].map((i) => (
        <Skeleton key={i} height={160} rounded="md" style={{ marginTop: 12 }} />
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="skeleton-screen skeleton-screen--center" aria-busy="true">
      <Skeleton width={80} height={80} rounded="full" />
      <Skeleton width="60%" height={24} style={{ marginTop: 16 }} />
      <Skeleton width="40%" height={16} style={{ marginTop: 8 }} />
      <div className="skeleton-badges">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} height={72} rounded="md" />
        ))}
      </div>
    </div>
  );
}

export function LeaderboardSkeleton() {
  return (
    <div className="skeleton-screen" aria-busy="true">
      <Skeleton width="55%" height={28} />
      <div className="skeleton-tabs">
        <Skeleton height={36} rounded="sm" />
        <Skeleton height={36} rounded="sm" />
      </div>
      <div className="skeleton-podium">
        <Skeleton height={140} rounded="md" />
        <Skeleton height={180} rounded="md" />
        <Skeleton height={120} rounded="md" />
      </div>
      {[0, 1, 2].map((i) => (
        <Skeleton key={i} height={56} rounded="md" style={{ marginTop: 8 }} />
      ))}
    </div>
  );
}
