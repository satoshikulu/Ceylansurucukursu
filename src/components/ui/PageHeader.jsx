import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export function PageHeader({ title, highlight, children, showTheme = true }) {
  return (
    <motion.header
      className="page-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="page-title">
        {title} {highlight ? <span>{highlight}</span> : null}
      </h1>
      <div className="page-header__actions">
        {children}
        {showTheme ? <ThemeToggle /> : null}
      </div>
    </motion.header>
  );
}
