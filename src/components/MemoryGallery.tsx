import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Star, Heart } from 'lucide-react';

interface MemoryCard {
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const memoryCards: MemoryCard[] = [
  {
    title: "Midnight Melodies",
    tag: "Atmosphere",
    description: "When the world goes quiet and certain songs just sound different.",
    icon: <Moon className="w-5 h-5 text-indigo-400" />,
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  {
    title: "Unspoken Grace",
    tag: "Impression",
    description: "The effortless charm of someone who brings calm just by being around.",
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
  },
  {
    title: "Starlit Thoughts",
    tag: "Universe",
    description: "A little dedicated corner among endless digital constellations.",
    icon: <Star className="w-5 h-5 text-amber-300" />,
    gradient: "from-amber-500/10 via-purple-500/5 to-transparent",
  },
  {
    title: "Genuine Smiles",
    tag: "Wishes",
    description: "May your days always be filled with reasons to smile brightly.",
    icon: <Heart className="w-5 h-5 text-pink-400" />,
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
  }
];

export const MemoryGallery: React.FC = () => {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 block font-medium">
            Glimpses & Vibes
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Constellations of Thought
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Small reflections woven into this cosmic tribute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memoryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group border border-purple-500/20 shadow-lg"
            >
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-1.5 text-xs text-purple-600/70 dark:text-purple-400/70">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-serif italic">Special Moment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};