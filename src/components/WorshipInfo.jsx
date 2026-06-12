import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Music, BookOpen, UserCheck, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export default function WorshipInfo({ onSignUpClick }) {
  const [expandedStep, setExpandedStep] = useState(null);

  const infoCards = [
    {
      icon: <Calendar className="w-8 h-8 text-brand-gold-dark" />,
      title: "예배 일시",
      content: "6월 28일 주일 오후 2시",
      sub: "부담 없이 오셔서 함께해요"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold-dark" />,
      title: "참석 대상",
      content: "고등학생(고1) ~ 2030 청년",
      sub: "고1부터 청년까지 누구나 환영해요"
    }
  ];

  const steps = [
    {
      title: "찬양 (Praise)",
      description: "편안한 음악과 노래로 함께 마음을 열고 소통하는 시간입니다.",
      icon: <Music className="w-7 h-7" />,
      sub: "마음을 여는 노래"
    },
    {
      title: "말씀 (Word)",
      description: "일상에 소소한 힘이 되고 생각할 거리를 주는 따뜻한 메시지를 듣는 시간입니다.",
      icon: <BookOpen className="w-7 h-7" />,
      sub: "따뜻한 삶의 이야기"
    },
    {
      title: "소그룹 모임 (Group)",
      description: "예배가 끝난 후 맛있는 간식을 먹으며 편안하게 서로의 이야기를 나누는 모임입니다.",
      icon: <UserCheck className="w-7 h-7" />,
      sub: "소소한 이야기와 간식"
    }
  ];

  return (
    <section id="info" className="py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-[#F9F7F2] text-brand-navy-deep relative overflow-hidden">
      
      {/* Background Watermark Cross (soft gold tint, very faint) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <svg width="600" height="800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
          <path d="M45 10H55V90H45V10Z" fill="currentColor"/>
          <path d="M20 35H80V45H20V35Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Viewport scroll animation container */}
      <motion.div 
        className="max-w-6xl mx-auto relative z-10 space-y-20 md:space-y-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs tracking-widest text-brand-gold-dark font-bold uppercase font-sans">Worship Flow</span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-brand-navy-deep">
            예배 정보 및 순서
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto font-sans">
            처음 오시는 분들도 누구나 편안하게 참여할 수 있는 순서입니다.
          </p>
        </div>

        {/* 1. Grid Cards (Info) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoCards.map((card, idx) => (
            <motion.div 
              key={idx}
              className="backdrop-blur-[12px] bg-white/60 border border-white/45 shadow-xl p-8 rounded-2xl flex items-center space-x-6 transition-all duration-300"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.85)", borderColor: "rgba(255, 255, 255, 0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-xl text-brand-gold-dark">
                {card.icon}
              </div>
              <div className="font-sans">
                <p className="text-xs tracking-widest text-brand-gold-dark font-bold uppercase mb-1">{card.title}</p>
                <h4 className="text-xl md:text-2xl font-extrabold tracking-tight text-brand-navy-deep">{card.content}</h4>
                <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Interactive Order/Sequence */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="font-sans text-xl md:text-2xl font-bold text-brand-navy-deep mb-2">예배 순서</h3>
            <p className="text-xs text-slate-500 font-sans">순서를 선택하면 상세한 설명을 볼 수 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative items-start">
            {steps.map((step, idx) => {
              const isExpanded = expandedStep === idx;
              return (
                <motion.div
                  key={idx}
                  layout
                  onClick={() => setExpandedStep(isExpanded ? null : idx)}
                  className={`relative backdrop-blur-[12px] bg-white/60 border border-white/45 p-8 rounded-2xl cursor-pointer overflow-hidden select-none transition-all duration-500 shadow-md flex flex-col items-center ${
                    isExpanded 
                      ? 'border-brand-gold bg-white/85 shadow-lg shadow-brand-gold/5' 
                      : ''
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    borderColor: "rgba(255, 255, 255, 0.6)",
                    boxShadow: "0 12px 30px -5px rgba(0, 0, 0, 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center w-full space-y-4">
                    {/* Rotating Icon Container */}
                    <motion.div 
                      className="p-4 rounded-full bg-brand-gold/10 text-brand-gold-dark border border-brand-gold/25"
                      animate={{ rotate: isExpanded ? 360 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <div className="w-full">
                      <h4 className="font-sans text-lg font-bold text-brand-navy-deep flex items-center justify-center gap-2">
                        <span>{step.title}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-slate-400"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 font-sans">{step.sub}</p>
                    </div>

                    {/* Expandable Explanation block */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden w-full text-center"
                        >
                          <p className="text-sm text-slate-700 leading-relaxed font-sans pt-4 border-t border-slate-200/50 mt-4">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Horizontal connecting arrows for desktop */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 transform -translate-y-1/2 z-20 text-brand-gold/40">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Scripture Callout & Bottom CTA Button */}
        <div className="border-t border-b border-brand-gold-dark/20 py-14 text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="font-sans text-lg md:text-2xl lg:text-3xl italic font-normal tracking-wide text-brand-gold-dark leading-relaxed px-4">
              “Arise, shine; for your light has come,<br className="hidden md:inline" />
              and the glory of the Lord rises upon you.”
            </p>
            <div className="space-y-1 font-sans">
              <p className="text-sm md:text-base text-slate-700">
                일어나라 빛을 발하라 이는 네 빛이 이르렀고 여호와의 영광이 네 위에 임하였음이니라
              </p>
              <p className="text-xs tracking-widest text-brand-gold-dark font-bold">Isaiah 60:1 (이사야 60:1)</p>
            </div>
          </div>

          {/* Inline CTA Button added */}
          <div className="pt-2 font-sans flex justify-center">
            <motion.button
              onClick={onSignUpClick}
              className="px-8 py-3.5 bg-brand-navy-deep text-brand-cream-light font-bold text-sm tracking-widest rounded-full shadow-md hover:shadow-lg flex items-center space-x-2 cursor-pointer border border-brand-gold/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4 text-brand-gold-light" />
              <span>청년예배 신청하기</span>
            </motion.button>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
