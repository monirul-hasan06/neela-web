import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Compass, Heart } from 'lucide-react';

export const QuestionSection: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleAnswer = (type: 'yes' | 'absolute') => {
    setAnswered(true);
    if (type === 'absolute') {
      setResponseMessage("Then mission accomplished. That makes me really happy! ♡");
    } else {
      setResponseMessage("Then mission accomplished. ♡");
    }
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8B5CF6', '#F0A6CA', '#A78BFA', '#FFFFFF']
    });
  };

  return (
    <section className="py-28 px-6 relative bg-slate-100/50 dark:bg-space-secondary/40 border-t border-purple-500/10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-10 md:p-14 border border-purple-500/30 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 block font-medium">
            One tiny question…
          </span>

          <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8">
            Did this make you smile?
          </h3>

          <AnimatePresence mode="wait">
            {!answered ? (
              <motion.div
                key="buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={() => handleAnswer('yes')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-900/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>Yes :)</span>
                </button>

                <button
                  onClick={() => handleAnswer('absolute')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-purple-900/20 font-medium text-sm tracking-wide border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                  <span>Absolutely</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="response"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-purple-600 dark:text-purple-200 font-serif text-2xl md:text-3xl"
              >
                {responseMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};