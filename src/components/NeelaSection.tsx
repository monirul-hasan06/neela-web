import React from 'react';
import { motion } from 'framer-motion';
import { MusicPlayer } from './MusicPlayer';
import { personalInfo } from '../data/content';

export const NeelaSection: React.FC = () => {
  return (
    <section id="neela" className="py-28 px-6 relative bg-slate-100/50 dark:bg-space-secondary/40 border-y border-purple-500/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 mb-3 block font-medium">
            Atmosphere & Melody
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {personalInfo.favoriteSongTitle} — {personalInfo.favoriteSongArtist}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed italic">
            “Some songs are just songs. And then there are songs that somehow become attached to a person, a moment, or a feeling.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MusicPlayer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 max-w-xl mx-auto text-center space-y-6 text-slate-600 dark:text-slate-300 text-lg font-light"
        >
          <p className="text-slate-500 dark:text-slate-400">Some songs remind us of places.</p>
          <p className="text-slate-500 dark:text-slate-400">Some remind us of moments.</p>
          <p className="font-serif italic text-slate-700 dark:text-slate-300">And sometimes…</p>
          <p className="text-slate-800 dark:text-slate-200">A song simply starts reminding you of someone.</p>
          <div className="pt-4">
            <p className="text-purple-600 dark:text-purple-300 font-serif text-xl">
              For some reason, Neela made me think of you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};