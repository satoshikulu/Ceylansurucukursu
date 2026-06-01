import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  })
};

export function GlassCard({
  children,
  className = '',
  hover = true,
  delay = 0,
  onClick,
  variant = 'default',
  ...props
}) {
  const motionProps = {
    initial: 'hidden',
    animate: 'visible',
    custom: delay,
    variants,
    ...(hover && {
      whileHover: {
        y: -4,
        scale: 1.01,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      }
    }),
    whileTap: onClick ? { scale: 0.98 } : undefined
  };

  if (!hover) {
    return (
      <div
        className={`glass-card glass-card--${variant} ${className}`.trim()}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`glass-card glass-card--${variant} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
