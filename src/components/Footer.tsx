import React from 'react';
import { Facebook, Instagram, Globe } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/content';

export const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <Facebook className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-purple-500/10 text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h3 className="font-serif text-xl font-semibold">
          Made for {personalInfo.name} ♡
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          A little website. A little story. Just to view something different if you want developer will update it as you want.
        </p>

        {socialLinks.length > 0 && (
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel hover:bg-purple-900/30 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white border border-purple-500/20 transition-all"
                title={link.platform}
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
        )}

        <div className="text-xs text-slate-500 pt-6">
          © {new Date().getFullYear()} — Just a simple gift.
        </div>
      </div>
    </footer>
  );
};