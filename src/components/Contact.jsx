import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-24 bg-[#F9F7F2] text-[#1E293B] relative overflow-hidden border-t border-brand-gold-dark/10">

      {/* Soft background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto space-y-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs tracking-widest text-brand-gold-dark font-bold uppercase font-sans">Guide & Contact</span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-brand-navy-deep">
            오시는 길 및 문의
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto font-sans">
            처음 오시는 분들도 헤매지 않고 편안하게 찾으실 수 있도록 안내해 드립니다.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch font-sans">

          {/* Left: Location Card */}
          <div className="backdrop-blur-[12px] bg-white/60 border border-white/45 shadow-xl p-8 rounded-3xl flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-gold-dark">
                <MapPin className="w-6 h-6" />
                <h3 className="text-lg font-bold text-brand-navy-deep">예배 장소</h3>
              </div>
              <div className="space-y-2 text-slate-700">
                <p className="font-bold text-base">주성령교회 5층 본당</p>
                <p className="text-sm text-slate-500">경기 안산시 단원구 중앙대로 918</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  ※ 중앙역 2번 출구에서 신호등쪽으로 도보 5분 거리입니다.
                </p>
              </div>
            </div>

            {/* Map Link Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://naver.me/IDFRpHqs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-brand-gold rounded-full text-xs font-semibold text-slate-700 transition-all shadow-sm cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-gold-dark" />
                <span>네이버 지도</span>
                <ExternalLink className="w-3 h-3 text-slate-450" />
              </a>
              <a
                href="https://place.map.kakao.com/10793481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-brand-gold rounded-full text-xs font-semibold text-slate-700 transition-all shadow-sm cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-gold-dark" />
                <span>카카오 맵</span>
                <ExternalLink className="w-3 h-3 text-slate-450" />
              </a>
            </div>
          </div>

          {/* Right: Ask Card */}
          <div className="backdrop-blur-[12px] bg-white/60 border border-white/45 shadow-xl p-8 rounded-3xl flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-gold-dark">
                <MessageCircle className="w-6 h-6" />
                <h3 className="text-lg font-bold text-brand-navy-deep">문의하기</h3>
              </div>
              <div className="space-y-2 text-slate-700">
                <p className="font-bold text-base">무엇이든 편하게 물어보세요</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  처음이라 어색할까 봐 걱정되시거나 궁금한 점이 있으시다면 언제든 편하게 말 걸어주세요. 담당 청년 멘토가 친절히 안내해 드릴게요!
                </p>
              </div>
            </div>

            {/* Kakao Open Chat Button */}
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#191919] font-bold rounded-2xl flex items-center justify-center space-x-3 transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-[#191919] text-[#191919]" />
              <span className="text-sm font-semibold tracking-wide">카카오톡 1:1 오픈채팅 문의</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
