import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, ChevronRight, User, Phone, Check } from 'lucide-react';

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cellGroup: ''
  });

  const cellGroups = [
    "10대 후반 (예비 대학생)",
    "20대 초반 (새내기/대학생)",
    "20대 중후반 (취업준비생/회사원)",
    "30대 직장인",
    "모임보다는 예배만 드릴게요"
  ];

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) return;
    if (step === 2 && !formData.phone.trim()) return;
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSelectGroup = (group) => {
    setFormData({ ...formData, cellGroup: group });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cellGroup) return;
    setStep(4);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form states after close animation completes
    setTimeout(() => {
      setStep(1);
      setFormData({ name: '', phone: '', cellGroup: '' });
    }, 400);
  };

  return (
    <>
      {/* 4. Sign-Up Section with elegant curved top */}
      <section className="relative bg-[#FEFAF0] text-brand-navy-deep py-36 px-6 md:px-12 overflow-hidden z-10">
        
        {/* Curved SVG Transition at the top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#FEFAF0] fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.35,26.78,174.68,48.25,243,62.7,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Scroll fade-in wrapper */}
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <div className="space-y-4 font-sans">
            <span className="text-xs tracking-widest text-brand-gold-dark font-bold uppercase">Join Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-brand-navy-deep">
              따뜻한 만남과 새로운 시작,<br />함께 예배드려요.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              가벼운 발걸음으로 찾아주세요. 예배와 소그룹 모임에 참여하실 수 있도록 친절하게 안내해 드릴게요.
            </p>
          </div>

          <motion.button
            onClick={() => setIsOpen(true)}
            className="px-10 py-5 bg-brand-navy-deep text-brand-cream-light font-sans font-semibold tracking-widest rounded-full shadow-2xl relative overflow-hidden group border border-brand-gold/30 hover:border-brand-gold cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 10px 30px rgba(7, 13, 31, 0.15)' }}
          >
            {/* Hover overlay glow */}
            <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="flex items-center space-x-2 relative z-10">
              <span>청년예배 신청하기</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Modal Popup overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop with blur */}
            <motion.div 
              className="absolute inset-0 bg-brand-navy-deep/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Modal Box with bright Glassmorphism (rgba 255, 255, 255, 0.6) */}
            <motion.div
              className="backdrop-blur-[12px] bg-white/65 border border-white/45 text-brand-navy-deep w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 font-sans"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              {/* Modal Header */}
              <div className="p-6 bg-white/50 backdrop-blur-sm text-brand-navy-deep flex justify-between items-center border-b border-slate-200/50">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-navy-deep">청년예배 신청하기</h3>
                  <p className="text-[10px] text-slate-500 tracking-wider font-sans">Rise & Shine : 이끌림</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 text-slate-500 hover:text-brand-gold-dark hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress bar */}
              {step <= 3 && (
                <div className="w-full bg-slate-200 h-[3px] flex">
                  <div 
                    className="bg-brand-gold-dark h-full transition-all duration-500" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              )}

              {/* Modal Body */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  
                  {/* Step 1: Name */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold tracking-wider text-slate-600 flex items-center space-x-1">
                            <User className="w-4 h-4 text-brand-gold-dark" />
                            <span>반갑습니다! 성함이 어떻게 되시나요?</span>
                          </label>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Step 1 / 3</span>
                        </div>
                        <input
                          type="text"
                          placeholder="이름을 입력해주세요"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-gold focus:bg-white text-lg transition-all text-brand-navy-deep placeholder:text-slate-400 font-sans"
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        />
                      </div>
                      <button
                        onClick={handleNext}
                        disabled={!formData.name.trim()}
                        className="w-full py-4 bg-brand-navy-deep text-brand-cream-light rounded-xl font-semibold hover:bg-slate-800 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer font-sans"
                      >
                        <span>다음 단계</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Contact Number */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold tracking-wider text-slate-600 flex items-center space-x-1">
                            <Phone className="w-4 h-4 text-brand-gold-dark" />
                            <span>안내 문자를 보내드릴 연락처를 적어주세요</span>
                          </label>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Step 2 / 3</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="010-0000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-gold focus:bg-white text-lg transition-all text-brand-navy-deep placeholder:text-slate-400 font-sans"
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={handlePrev}
                          className="w-1/3 py-4 border border-slate-200 text-slate-700 bg-white/40 rounded-xl font-semibold hover:bg-slate-50 transition-colors cursor-pointer font-sans"
                        >
                          이전
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={!formData.phone.trim()}
                          className="w-2/3 py-4 bg-brand-navy-deep text-brand-cream-light rounded-xl font-semibold hover:bg-slate-800 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer font-sans"
                        >
                          <span>다음 단계</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Cell Group selection & Submit */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold tracking-wider text-slate-600">
                            어떤 소그룹 모임에 관심이 있으신가요?
                          </label>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Step 3 / 3</span>
                        </div>
                        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                          {cellGroups.map((group, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSelectGroup(group)}
                              className={`w-full text-left px-5 py-3 rounded-xl border flex justify-between items-center transition-all cursor-pointer font-sans ${
                                formData.cellGroup === group 
                                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold-dark font-bold' 
                                  : 'border-slate-200 bg-white/70 hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span className="text-sm">{group}</span>
                              {formData.cellGroup === group && <Check className="w-4 h-4 text-brand-gold-dark" />}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={handlePrev}
                          className="w-1/3 py-4 border border-slate-200 text-slate-700 bg-white/40 rounded-xl font-semibold hover:bg-slate-50 transition-colors cursor-pointer font-sans"
                        >
                          이전
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!formData.cellGroup}
                          className="w-2/3 py-4 bg-brand-navy-deep text-brand-cream-light rounded-xl font-semibold hover:bg-slate-800 disabled:opacity-50 transition-colors cursor-pointer font-sans"
                        >
                          신청 완료하기
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Success confirmation screen */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-6 space-y-6"
                    >
                      <div className="flex justify-center">
                        <CheckCircle2 className="w-16 h-16 text-brand-gold-dark animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-brand-navy-deep">
                          신청해 주셔서 감사해요!
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed px-4 font-sans">
                          <strong className="text-brand-gold-dark">{formData.name}</strong>님의 신청이 잘 접수되었습니다.<br />
                          입력해주신 연락처(<span className="underline">{formData.phone}</span>)로<br /> 
                          예배 전에 따뜻한 안내 문자를 보내드릴게요. 편안한 마음으로 와주세요!
                        </p>
                      </div>
                      <button
                        onClick={handleClose}
                        className="px-8 py-3 bg-brand-navy-deep text-brand-cream-light rounded-full font-semibold hover:bg-slate-800 transition-colors cursor-pointer font-sans"
                      >
                        닫기
                      </button>
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
