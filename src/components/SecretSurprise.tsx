import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, X, ArrowRight } from 'lucide-react';

interface SecretSurpriseProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToFinal: () => void;
}

export const SecretSurprise: React.FC<SecretSurpriseProps> = ({ isOpen, onClose, onProceedToFinal }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-3xl p-8 md:p-12 max-w-md w-full relative border border-purple-500/40 text-center shadow-2xl cursor-default"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-300 mx-auto mb-6">
              <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '10s' }} />
            </div>

            <h3 className="text-2xl font-serif font-bold mb-4">
              You found the little secret.
            </h3>

            <p className="text-slate-600 dark:text-slate-300 font-light text-base mb-8 leading-relaxed">
              “Okay, I'll admit it… I spent way too much time making this.”
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onClose();
                  onProceedToFinal();
                }}
                className="w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-900/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>One last thing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-wider text-slate-500 hover:text-slate-300 py-2 transition-colors"
              >
                Back to website
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};