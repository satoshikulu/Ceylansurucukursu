import { AnimatePresence, motion } from 'framer-motion';

export function Toast({ message }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          className="toast show"
          role="status"
          initial={{ opacity: 0, y: 24, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 16, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
