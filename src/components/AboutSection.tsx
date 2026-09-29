import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GraduationCap, Music } from 'lucide-react';
import { personalInfo } from '../data/content';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: personalInfo.name,
      description: "The name this little universe revolves around.",
      icon: <Compass className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      accent: "from-purple-500/20 to-transparent"
    },
    {
      title: personalInfo.university,
      description: "A small detail from your journey that deserved a place here.",
      icon: <GraduationCap className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      accent: "from-indigo-500/20 to-transparent"
    },
    {
      title: `${personalInfo.favoriteSongTitle} — ${personalInfo.favoriteSongArtist}`,
      description: "The song that inspired the mood of this entire experience.",
      icon: <Music className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
      accent: "from-pink-500/20 to-transparent"
    }
  ];

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 block font-medium">
            About This Space
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Welcome to your little universe.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Main three things in the website let's tour togather.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.accent} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-8 flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-medium tracking-wider uppercase opacity-80">
                <span>Element 0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};