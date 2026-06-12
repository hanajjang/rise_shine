import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Intro({ onSignUpClick }) {
  const lines = [
    "바쁜 일상을 잠시 내려놓고,",
    "하나님과 함께하는 시간을 가져보세요.",
    "당신을 기다리고 있습니다.",

  ];

  return (
    <section id="intro" className="py-36 md:py-48 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] text-[#1E293B] relative overflow-visible">

      {/* 1. Jagged Ripped-Paper SVG Divider (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] z-25 pointer-events-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-[45px] text-[#F5F2EB] fill-current">
          <path d="M0,0 Q50,4 100,1 Q150,10 200,3 Q250,15 300,7 Q350,2 400,9 Q450,15 500,6 Q550,4 600,11 Q650,5 700,13 Q750,2 800,8 Q850,14 900,9 Q950,4 1000,10 Q1050,1 1100,6 Q1150,14 1200,7 L1200,60 L0,60 Z" />
        </svg>
      </div>

      {/* Background low-opacity collage details */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Layout Content wrapper */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* Left Column: Polaroid Collage */}
        <div className="lg:col-span-7 relative flex flex-col sm:flex-row items-center justify-center gap-8 min-h-[480px] py-10">

          {/* Polaroid 1: Wide Shot Altar (본당_전체) */}
          <motion.div
            className="bg-white p-4 pb-12 border border-slate-200 shadow-xl max-w-[290px] w-full relative z-10 select-none cursor-grab active:cursor-grabbing"
            style={{ rotate: "-3deg" }}
            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 left-1/4 w-16 h-5 bg-[#C5A059]/25 backdrop-blur-[1.5px] rotate-[-7deg] border-l border-r border-[#C5A059]/10" />
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm">
              <img
                src="/사진/KakaoTalk_Photo_2026-06-10-14-56-05 010.jpeg"
                alt="Sanctuary Sanctuary wide view"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-center font-sans text-xs tracking-widest text-slate-500 font-bold mt-5">
              cozy chapel view
            </p>
          </motion.div>

          {/* Polaroid 2: Medium Stage Close-up (본당 2) */}
          <motion.div
            className="bg-white p-4 pb-12 border border-slate-200 shadow-2xl max-w-[250px] w-full relative z-20 sm:-ml-12 sm:-mt-16 select-none cursor-grab active:cursor-grabbing"
            style={{ rotate: "4deg" }}
            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 right-1/4 w-14 h-5 bg-white/50 backdrop-blur-[1.5px] rotate-[8deg] border-l border-r border-slate-300/20" />
            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 rounded-sm">
              <img
                src="/사진/본당(2).jpeg"
                alt="Chapel Sanctuary altar view"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-center font-sans text-xs tracking-widest text-slate-400 font-bold mt-5">
              warm interior
            </p>
          </motion.div>

          {/* Polaroid 3: Detail Stage view (본당 1) */}
          <motion.div
            className="bg-white p-3 pb-8 border border-slate-200 shadow-lg max-w-[170px] w-full absolute bottom-4 left-6 z-30 hidden xl:block select-none cursor-grab active:cursor-grabbing"
            style={{ rotate: "-10deg" }}
            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 35 }}
            transition={{ duration: 0.3 }}
          >
            {/* Minimal Tape */}
            <div className="absolute -top-2 left-1/3 w-10 h-4 bg-[#C5A059]/15 backdrop-blur-[1px] rotate-[-12deg]" />
            <div className="aspect-square w-full overflow-hidden bg-slate-100 rounded-sm">
              <img
                src="/사진/본당(1).jpeg"
                alt="Sanctuary details"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-center font-sans text-[10px] tracking-wider text-slate-400 font-semibold mt-3">
              welcome lights
            </p>
          </motion.div>
        </div>

        {/* Right Column: Narrative Storytelling (Editorial theme - Gothic text) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10 relative">

          {/* Editorial Label */}
          <div className="space-y-3 relative">
            <div className="w-12 h-[2px] bg-brand-gold-dark mb-4" />
            <span className="text-[10px] tracking-[0.25em] text-brand-gold-dark font-extrabold uppercase block select-none font-sans">
              Editorial Memoir
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-brand-navy-deep leading-tight tracking-tight">
              이끌림,<br />설레는 발걸음
            </h2>
          </div>

          {/* Story Confessions in conversational Korean */}
          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-slate-700">
            <p className="text-xl md:text-2xl text-brand-gold-dark font-bold border-l-2 border-brand-gold-dark/40 pl-5 mb-8 leading-relaxed">
              “유럽의 작은 성전에 온 듯한,<br />
              환상적인 공간에서 드리는 특별한 청년예배”

            </p>

            <div className="space-y-4 font-sans font-light text-slate-600 leading-loose">
              {lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Vertical Stamp Text */}
          <div className="hidden xl:block absolute -right-20 top-1/2 transform -translate-y-1/2 rotate-90 origin-center text-[10px] tracking-[0.35em] text-slate-400 font-sans uppercase select-none">
            Rise & Shine — Open Space
          </div>
        </div>

      </motion.div>

      {/* 2. Jagged Ripped-Paper SVG Divider (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[99%] z-25 pointer-events-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-[45px] text-[#F5F2EB] fill-current rotate-180">
          <path d="M0,0 Q50,4 100,1 Q150,10 200,3 Q250,15 300,7 Q350,2 400,9 Q450,15 500,6 Q550,4 600,11 Q650,5 700,13 Q750,2 800,8 Q850,14 900,9 Q950,4 1000,10 Q1050,1 1100,6 Q1150,14 1200,7 L1200,60 L0,60 Z" />
        </svg>
      </div>

    </section>
  );
}
