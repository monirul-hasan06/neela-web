import React from 'react';
import { motion } from 'framer-motion';
import { thingsToSayData } from '../data/content';

export const ThingsToSay: React.FC = () => {
  return (
    <section className="py-28 px-6 relative bg-slate-100/30 dark:bg-space-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            A few things I wanted to say
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Thoughts shared quietly across the digital space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thingsToSayData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-8 relative flex flex-col justify-between group"
            >
              <div className="text-purple-600/40 dark:text-purple-400/40 font-serif text-3xl font-bold mb-4 group-hover:text-purple-600/80 dark:group-hover:text-purple-400/80 transition-colors">
                {item.number}
              </div>
              <p className="font-serif text-xl md:text-2xl font-normal leading-relaxed">
                “{item.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};