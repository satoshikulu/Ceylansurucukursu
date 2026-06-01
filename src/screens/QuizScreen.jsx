import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHeader } from '../components/ui/PageHeader';

export function QuizScreen({
  quizState,
  currentQuestion,
  quizProgress,
  score,
  onExit,
  onSelectOption,
  onNext,
  onShareResult
}) {
  const { currentQ, data, hasAnswered, showResult, answers } = quizState;
  const correctCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="screen">
      <PageHeader
        title="Soru"
        highlight={`${currentQ + 1}/${data.length}`}
        showTheme={false}
      >
        <button type="button" className="nav-text-button" onClick={onExit}>
          Sınavdan Çık
        </button>
      </PageHeader>

      <div className="quiz-progress-bar">
        <motion.div
          className="quiz-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${quizProgress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {showResult ? (
        <motion.div
          className="result-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="result-circle"
            style={{ background: `conic-gradient(var(--green) ${score}%, var(--surface2) 0)` }}
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="result-score">%{score}</div>
          </motion.div>
          <h3 className="result-title">Tebrikler!</h3>
          <p className="result-desc">
            {data.length} sorudan <strong>{correctCount} doğru</strong> ve{' '}
            <strong>{data.length - correctCount} yanlış</strong> yaptın.
          </p>
          <motion.button
            type="button"
            className="btn-primary"
            onClick={onShareResult}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Akışta Paylaş 📣
          </motion.button>
          <button type="button" className="btn-full btn-ghost" onClick={onExit}>
            Ana Sayfaya Dön
          </button>
        </motion.div>
      ) : (
        <>
          <GlassCard className="question-card" delay={0}>
            <p className="question-text">{currentQuestion?.q}</p>
          </GlassCard>
          <div className="options-list">
            {currentQuestion?.opts.map((opt, i) => {
              const answer = answers[currentQ];
              const isCorrect = hasAnswered && i === currentQuestion.a;
              const selectedWrong = hasAnswered && answer?.userAns === i && i !== currentQuestion.a;
              return (
                <motion.button
                  key={i}
                  type="button"
                  className={`option-btn glass-card ${isCorrect ? 'correct' : ''} ${selectedWrong ? 'wrong' : ''}`}
                  onClick={() => onSelectOption(i)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={!hasAnswered ? { x: 4 } : undefined}
                  whileTap={!hasAnswered ? { scale: 0.98 } : undefined}
                >
                  <span className="option-letter">{String.fromCharCode(65 + i)})</span>
                  <span>{opt}</span>
                </motion.button>
              );
            })}
          </div>
          <div className={`explanation-box ${hasAnswered ? 'show' : ''}`}>
            <strong>💡 Çözüm Açıklaması:</strong>
            <br />
            {currentQuestion?.exp}
          </div>
          {hasAnswered && (
            <motion.button
              type="button"
              className="btn-full"
              onClick={onNext}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {currentQ === data.length - 1 ? 'Sınavı Bitir 🏁' : 'Sonraki Soru ➡️'}
            </motion.button>
          )}
        </>
      )}
    </div>
  );
}
