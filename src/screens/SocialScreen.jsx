import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHeader } from '../components/ui/PageHeader';

export function SocialScreen({ posts, postText, likes, onPostTextChange, onAddPost, onLike }) {
  return (
    <div className="screen">
      <PageHeader title="Sürücü" highlight="Akışı" />

      <GlassCard className="post-composer" delay={0}>
        <textarea
          value={postText}
          onChange={(e) => onPostTextChange(e.target.value)}
          rows={2}
          placeholder="Sınav hazırlığı nasıl gidiyor, bir şeyler yaz..."
          aria-label="Gönderi yaz"
        />
        <motion.button
          type="button"
          className="btn-share"
          onClick={onAddPost}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Paylaş
        </motion.button>
      </GlassCard>

      <div className="feed">
        {posts.map((post, i) => (
          <GlassCard key={post.id} className="post-card" delay={i + 1}>
            <div className="post-header">
              <div className="post-avatar" style={{ background: post.color || 'var(--primary)' }}>
                {post.av}
              </div>
              <div className="post-meta">
                <span className="post-user">{post.user}</span>
                <span className="post-sub">
                  {post.badge} · {post.time}
                </span>
              </div>
            </div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.text }} />
            {post.ach ? (
              <div className="achievement-banner">
                <div className="ach-icon">{post.ach.icon}</div>
                <div>
                  <div className="ach-title">{post.ach.title}</div>
                  <div className="ach-sub">{post.ach.sub}</div>
                </div>
              </div>
            ) : null}
            <div className="post-actions">
              <motion.button
                type="button"
                className={`action-btn ${likes[post.id] ? 'liked' : ''}`}
                onClick={() => onLike(post.id)}
                whileTap={{ scale: 0.9 }}
              >
                ❤️ <span>{post.likes} Beğeni</span>
              </motion.button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
