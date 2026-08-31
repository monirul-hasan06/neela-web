import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Heart } from 'lucide-react';
import { personalInfo } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/10 via-indigo-900/15 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/20 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs md:text-sm tracking-wide mb-6">
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" />
          <span>A digital surprise for you</span>
        </span>

        <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight">
          {personalInfo.name}
        </h1>

        <p className="text-lg md:text-2xl text-purple-600/90 dark:text-purple-200/90 font-light mb-4 max-w-xl">
          A little corner of the internet, made just for you.
        </p>

        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-10 max-w-md">
          Because sometimes a message isn't enough.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-900/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#letter"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-purple-900/20 font-medium text-sm tracking-wide border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all flex items-center justify-center"
          >
            Open Your Letter
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-purple-500 dark:text-purple-400" />
      </motion.div>
    </section>
  );
};