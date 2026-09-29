import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Compass, Gift } from 'lucide-react';

interface NavbarProps {
  onOpenSecret: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSecret }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Neela', href: '#neela' },
    { name: 'Letter', href: '#letter' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-space-dark/80 backdrop-blur-md border-b border-purple-500/10 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform">
            <Compass className="w-4 h-4" />
          </span>
          <span className="font-serif font-medium tracking-wide text-sm md:text-base">Sumaiya Orpa</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
              {link.name}
            </a>
          ))}

          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition-all"
            title="Toggle Dark/Light Mode"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={onOpenSecret}
            className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-all"
            title="Secret"
            aria-label="Open surprise"
          >
            <Gift className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300"
            title="Toggle Dark/Light Mode"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={onOpenSecret}
            className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400"
            title="Secret"
            aria-label="Open surprise"
          >
            <Gift className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-slate-700 dark:text-slate-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-space-secondary/95 backdrop-blur-xl border-b border-purple-500/20 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif py-1 border-b border-slate-200 dark:border-slate-800/60"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};