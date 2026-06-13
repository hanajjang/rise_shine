import React, { useState } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WorshipInfo from './components/WorshipInfo';
import Contact from './components/Contact';
import SignUp from './components/SignUp';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="bg-[#F9F7F2] min-h-screen text-[#1E293B] selection:bg-brand-gold selection:text-brand-navy-deep">
      
      {/* Sticky Light Glass Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#F9F7F2]/80 backdrop-blur-md py-4 md:py-6 px-4 md:px-12 flex justify-between items-center border-b border-brand-gold-dark/10 shadow-sm font-sans">
        <div className="flex items-center space-x-2 md:space-x-3">
          <span className="text-base md:text-xl font-bold tracking-widest text-brand-gold-dark uppercase">
            청년예배
          </span>
          <span className="hidden md:inline-block w-[1px] h-4 bg-slate-300" />
          <span className="hidden md:inline-block text-xs font-semibold tracking-widest text-[#1E293B]/60">
            이끌림
          </span>
        </div>
        
        <nav className="flex items-center space-x-3 md:space-x-6">
          <button 
            onClick={() => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })}
            className="text-[11px] md:text-sm font-semibold tracking-wider text-slate-700 hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            소개
          </button>
          <button 
            onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}
            className="text-[11px] md:text-sm font-semibold tracking-wider text-slate-700 hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            예배 안내
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-[11px] md:text-sm font-semibold tracking-wider text-slate-700 hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            위치/문의
          </button>
          <button 
            onClick={() => setIsSignUpOpen(true)}
            className="text-[11px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 border border-brand-gold/40 hover:border-brand-gold bg-brand-gold/10 hover:bg-brand-gold/25 rounded-full text-brand-gold-dark transition-all cursor-pointer"
          >
            신청하기
          </button>
        </nav>
      </header>

      {/* Layout Sections */}
      <main>
        <Hero onSignUpClick={() => setIsSignUpOpen(true)} />
        <Intro onSignUpClick={() => setIsSignUpOpen(true)} />
        <WorshipInfo onSignUpClick={() => setIsSignUpOpen(true)} />
        <Contact />
        <SignUp isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} onSignUpClick={() => setIsSignUpOpen(true)} />
      </main>

      {/* Footer in Light theme */}
      <footer className="bg-[#F2EFE9] border-t border-brand-gold-dark/15 py-14 px-6 text-center text-xs tracking-wider text-slate-500 space-y-3 font-sans">
        <p className="text-brand-gold-dark font-semibold">Rise and Shine: 이끌림</p>
        <p>© 2026 Hana Church Youth Community. All Rights Reserved.</p>
        <p className="text-[10px] text-slate-400 font-sans">“Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.” Matthew 7:7</p>
      </footer>
    </div>
  );
}

export default App;
