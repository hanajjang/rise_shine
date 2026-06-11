import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Hero() {
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
    rotateXSpring.set(-yNormalized * 12); // Tilt vertically
    rotateYSpring.set(xNormalized * 12);  // Tilt horizontally
    translateXSpring.set(xNormalized * 15); // Slide slightly horizontally
    translateYSpring.set(yNormalized * 15); // Slide slightly vertically
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
      {/* Background Image updated to '본당_전체' (KakaoTalk wide photo) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/사진/KakaoTalk_Photo_2026-06-10-14-56-05 010.jpeg')` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 15, ease: "easeOut" }}
      />
      
      {/* 30% Dark Overlay for contrast to protect typography */}
      <div className="absolute inset-0 z-10 bg-brand-navy-deep/35 bg-gradient-to-b from-transparent via-brand-navy-deep/15 to-brand-navy-deep/65" />

      {/* Hero Content (Centered Glassmorphism Card with Mouse Parallax) */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-xl w-full"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          x: translateXSpring,
          y: translateYSpring,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Bright clear glass card in Gothic typography */}
        <motion.div 
          className="backdrop-blur-[12px] bg-white/60 border border-white/45 shadow-xl p-10 md:p-14 rounded-3xl"
          style={{ transform: "translateZ(40px)" }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-6">
            <span className="text-xs tracking-[0.25em] text-brand-gold-dark font-bold uppercase select-none font-sans">
              Rise & Shine
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-brand-navy-deep tracking-wide leading-tight filter drop-shadow-sm">
              Rise and Shine
            </h1>
            <p className="font-sans text-lg md:text-xl font-normal text-slate-700 tracking-wide">
              이끌림, 함께 시작하는 예배
            </p>
            <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-6" />
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
