import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero({ onSignUpClick }) {
  // Spring configurations for smooth mouse parallax movement
  const rotateXSpring = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateYSpring = useSpring(0, { stiffness: 100, damping: 20 });
  const translateXSpring = useSpring(0, { stiffness: 100, damping: 20 });
  const translateYSpring = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Normalize cursor position between -0.5 and 0.5
    const xNormalized = (clientX / width) - 0.5;
    const yNormalized = (clientY / height) - 0.5;

    // Rotate and translate mapping for depth parallax
    rotateXSpring.set(-yNormalized * 10); // Tilt vertically
    rotateYSpring.set(xNormalized * 10);  // Tilt horizontally
    translateXSpring.set(xNormalized * 12); // Slide slightly horizontally
    translateYSpring.set(yNormalized * 12); // Slide slightly vertically
  };

  const handleMouseLeave = () => {
    // Reset positions when mouse leaves viewport
    rotateXSpring.set(0);
    rotateYSpring.set(0);
    translateXSpring.set(0);
    translateYSpring.set(0);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-navy-deep cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Background Image: '본당_천장.jpg' */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('사진/본당_천장.jpg')` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 15, ease: "easeOut" }}
      />

      {/* 30% Dark Overlay for contrast to protect typography */}
      <div className="absolute inset-0 z-10 bg-brand-navy-deep/35 bg-gradient-to-b from-transparent via-brand-navy-deep/15 to-brand-navy-deep/70" />

      {/* Hero Content (Centered Glassmorphism Card with Mouse Parallax) */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-2xl w-full"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          x: translateXSpring,
          y: translateYSpring,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Bright clear glass card in Gothic typography with expanded info */}
        <motion.div
          className="backdrop-blur-[12px] bg-white/60 border border-white/45 shadow-2xl p-8 md:p-12 rounded-3xl space-y-6 md:space-y-8"
          style={{ transform: "translateZ(40px)" }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tag */}
          <span className="text-xs tracking-[0.3em] text-brand-gold-dark font-extrabold uppercase select-none font-sans block">
            하느님께 나도 모르게 어느새 스며들었다
          </span>

          {/* Main Title - Enlarged */}
          <h1 className="font-sans text-5xl md:text-7xl font-black text-brand-navy-deep tracking-tight leading-none filter drop-shadow-sm">
            2026 청년 예배
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base md:text-lg font-bold text-slate-700 tracking-wider">
            유럽의 작은 성전에 온 듯한 특별한 청년 예배
          </p>

          {/* 6월 28일 주일 오후 2시 Key Info Highlighted */}
          <div className="bg-brand-gold/15 border border-brand-gold-dark/20 text-brand-gold-dark font-extrabold py-3 px-6 rounded-2xl inline-block text-base md:text-lg tracking-wide shadow-sm font-sans">
            일시: 6월 28일 주일 오후 2시
          </div>

          {/* Scripture Callout (Matthew 7:7) */}
          <div className="border-t border-slate-300/40 pt-6 space-y-2 select-none font-sans">
            <p className="text-xs md:text-sm italic font-medium text-slate-600 leading-relaxed max-w-md mx-auto">
              <br>“Ask, and it will be given to you;</br> seek, and you will find; knock, and it will be opened to you.”
            </p>
            <p className="text-[11px] md:text-xs text-slate-500 font-normal">
              <br>구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 </br> 문을 두드리라 그러면 너희에게 열릴 것이니
            </p>
            <p className="text-[10px] text-brand-gold-dark font-extrabold">Matthew 7:7</p>
          </div>

          {/* Direct CTA Button inside Hero card */}
          <div className="pt-2 font-sans">
            <motion.button
              onClick={onSignUpClick}
              className="px-8 py-3.5 bg-brand-navy-deep text-brand-cream-light font-bold text-sm tracking-widest rounded-full shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto cursor-pointer border border-brand-gold/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>예배 신청하기</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={() => {
          document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] tracking-widest text-brand-gold-dark font-bold uppercase mb-2 font-sans">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/60 to-transparent relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-brand-gold absolute top-0 left-0"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
