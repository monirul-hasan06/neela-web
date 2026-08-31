import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { NeelaSection } from './components/NeelaSection';
import { LetterSection } from './components/LetterSection';
import { ThingsToSay } from './components/ThingsToSay';
import { MemoryGallery } from './components/MemoryGallery';
import { QuestionSection } from './components/QuestionSection';
import { SecretSurprise } from './components/SecretSurprise';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  const scrollToFinal = () => {
    const section = document.getElementById('final-surprise');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-purple-500/30 selection:text-purple-200">
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Navbar onOpenSecret={() => setIsSecretOpen(true)} />
      
      <main>
        <Hero />
        <AboutSection />
        <NeelaSection />
        <LetterSection />
        <ThingsToSay />
        <MemoryGallery />
        <QuestionSection />
        <FinalSection />
      </main>

      <Footer />

      <SecretSurprise 
        isOpen={isSecretOpen} 
        onClose={() => setIsSecretOpen(false)} 
        onProceedToFinal={scrollToFinal}
      />
    </div>
  );
}

export default App;