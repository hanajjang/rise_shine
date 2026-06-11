import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WorshipInfo from './components/WorshipInfo';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen text-[#1E293B] selection:bg-brand-gold selection:text-brand-navy-deep">
      
      {/* Sticky Light Glass Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#F9F7F2]/80 backdrop-blur-md py-6 px-6 md:px-12 flex justify-between items-center border-b border-brand-gold-dark/10 shadow-sm font-sans">
        <div className="flex items-center space-x-3">
          <span className="text-lg md:text-xl font-bold tracking-widest text-brand-gold-dark uppercase">
            Rise & Shine
          </span>
          <span className="hidden md:inline-block w-[1px] h-4 bg-slate-300" />
          <span className="hidden md:inline-block text-xs font-semibold tracking-widest text-[#1E293B]/60">
            이끌림
          </span>
        </div>
        
        <nav className="flex items-center space-x-6">
          <button 
            onClick={() => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })}
            className="text-xs md:text-sm font-semibold tracking-wider text-slate-700 hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            소개
          </button>
          <button 
            onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}
            className="text-xs md:text-sm font-semibold tracking-wider text-slate-700 hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            예배 안내
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('info');
              if (element) {
                const nextSection = element.nextElementSibling;
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="hidden sm:inline-block text-xs font-semibold px-4 py-2 border border-brand-gold/40 hover:border-brand-gold bg-brand-gold/10 hover:bg-brand-gold/25 rounded-full text-brand-gold-dark transition-all cursor-pointer"
          >
            신청하기
          </button>
        </nav>
      </header>

      {/* Layout Sections */}
      <main>
        <Hero />
        <Intro />
        <WorshipInfo />
        <SignUp />
      </main>

      {/* Footer in Light theme */}
      <footer className="bg-[#F2EFE9] border-t border-brand-gold-dark/15 py-14 px-6 text-center text-xs tracking-wider text-slate-500 space-y-3 font-sans">
        <p className="text-brand-gold-dark font-semibold">Rise and Shine: 이끌림</p>
        <p>© 2026 Hana Church Youth Community. All Rights Reserved.</p>
        <p className="text-[10px] text-slate-400 font-sans">“Arise, shine; for your light has come.” Isaiah 60:1</p>
      </footer>
    </div>
  );
}

export default App;
