import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Compass } from 'lucide-react';
import { letterContent } from '../data/content';

export const LetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            A little letter for you
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Click the envelope below to open your message.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(true)}
              className="glass-panel glass-panel-hover rounded-3xl p-12 md:p-16 max-w-lg mx-auto cursor-pointer relative group flex flex-col items-center border border-purple-500/30 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent rounded-3xl pointer-events-none" />
              
              <div className="w-20 h-20 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-2">
                For Sumaiya ♡
              </h3>
              <p className="text-purple-600 dark:text-purple-300/80 text-sm font-medium tracking-wide flex items-center gap-1.5 mt-2">
                <Compass className="w-4 h-4" />
                <span>Click to open the letter</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="letter-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-8 md:p-14 text-left relative border border-purple-500/30 shadow-2xl max-w-2xl mx-auto"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <h4 className="font-serif text-2xl text-purple-600 dark:text-purple-200 mb-6 font-medium">
                {letterContent.salutation}
              </h4>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 font-light text-base md:text-lg leading-relaxed">
                {letterContent.paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <p className="text-sm font-serif italic text-purple-600 dark:text-purple-300">
                  {letterContent.signoff}
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-wider uppercase text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Close envelope
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};