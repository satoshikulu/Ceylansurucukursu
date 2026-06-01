import { AnimatePresence, motion } from 'framer-motion';

export function Modal({ open, message, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="modal show"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content glass-card"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p>{message}</p>
            <button type="button" className="btn-primary btn-full" onClick={onClose}>
              Kapat
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
