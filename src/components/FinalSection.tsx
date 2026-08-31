import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { personalInfo } from '../data/content';

export const FinalSection: React.FC = () => {
  return (
    <section id="final-surprise" className="py-36 px-6 relative text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-300 mx-auto mb-6">
            <Compass className="w-5 h-5" />
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            And that's it.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-purple-600 dark:text-purple-200 font-serif italic"
        >
          Except for one thing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 pt-4"
        >
          <p className="text-2xl md:text-3xl font-serif">
            I hope this made you smile.
          </p>

          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Because that was the whole point.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="pt-12 border-t border-slate-200 dark:border-slate-800/80 max-w-xs mx-auto text-xs text-slate-500 tracking-wider uppercase font-medium"
        >
          — Made with a little creativity, a lot of time, and a thought of {personalInfo.name}.
        </motion.div>
      </div>
    </section>
  );
};