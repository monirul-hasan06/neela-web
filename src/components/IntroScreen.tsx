import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 2600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-space-dark text-slate-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden"
    >
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center min-h-[160px] justify-center">
          {step >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-2xl font-serif text-slate-300 italic mb-4"
            >
              “Some people deserve more than a text message.”
            </motion.p>
          )}

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-8 mt-2"
            >
              <p className="text-xl md:text-3xl font-serif text-purple-200">
                “So I made something.”
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={onComplete}
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 hover:scale-105 transition-all duration-300"
                >
                  <Compass className="w-4 h-4 text-purple-200 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Enter</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <button
          onClick={onComplete}
          className="absolute bottom-8 text-xs tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors"
        >
          Skip intro →
        </button>
      </motion.div>
  );
};