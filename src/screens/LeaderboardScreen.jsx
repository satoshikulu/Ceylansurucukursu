import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHeader } from '../components/ui/PageHeader';

export function LeaderboardScreen({ user, podium, rest, onBranchTab }) {
  return (
    <div className="screen">
      <PageHeader title="Liderlik" highlight="Tablosu" />

      <div className="tabs">
        <div className="tab active">Konya Geneli</div>
        <button type="button" className="tab" onClick={onBranchTab}>
          {user?.branch}
        </button>
      </div>

      <div className="podium">
        {podium[1] && (
          <motion.div
            className="podium-item p2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="podium-avatar">{podium[1].av}</div>
            <span className="podium-name">{podium[1].name}</span>
            <div className="podium-base">
              2<span className="podium-score">{podium[1].score} P</span>
            </div>
          </motion.div>
        )}
        {podium[0] && (
          <motion.div
            className="podium-item p1"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0, type: 'spring', stiffness: 300 }}
          >
            <div className="podium-crown">👑</div>
            <div className="podium-avatar">{podium[0].av}</div>
            <span className="podium-name podium-name--first">{podium[0].name}</span>
            <div className="podium-base">
              1<span className="podium-score">{podium[0].score} P</span>
            </div>
          </motion.div>
        )}
        {podium[2] && (
          <motion.div
            className="podium-item p3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="podium-avatar">{podium[2].av}</div>
            <span className="podium-name">{podium[2].name}</span>
            <div className="podium-base">
              3<span className="podium-score">{podium[2].score} P</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="rank-list">
        {rest.map((u, index) => (
          <GlassCard
            key={u.name + index}
            className={`rank-item ${u.isMe ? 'me' : ''}`}
            delay={index}
            onClick={undefined}
            hover={false}
          >
            <div className="rank-num">{index + 4}</div>
            <div
              className="avatar rank-avatar"
              style={{ background: u.isMe ? 'var(--primary)' : 'var(--surface2)' }}
            >
              {u.av}
            </div>
            <div className="rank-details">
              <span className="rank-name">
                {u.name} {u.isMe ? '(Sen)' : ''}
              </span>
              <span className="rank-sub">{u.sub}</span>
            </div>
            <div className="rank-val">
              {u.score} <span className="rank-pts">puan</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
