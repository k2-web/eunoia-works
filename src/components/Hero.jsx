import React from 'react';
import { ArrowRight, Award, CheckCircle2, Compass, Sparkles, BookOpen, Users, Brain, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToRadar, onScrollToQuiz }) {
  return (
    <section className="relative pt-10 pb-20 md:pt-14 md:pb-28 bg-[#FAF9F6] overflow-hidden">
      {/* Subtle warm architectural backdrop glow */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-gold-100/50 via-slate-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Stately Headline on Left, Eunoia Architecture Compass on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Core Message */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* High-Authority SEO Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 tracking-wide shadow-sm">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>Certified Career Counseling & Educational Advisory • Mindler 5-D Benchmark</span>
            </div>

            {/* Main Headline targeting high-intent Google Queries */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0A1A30] leading-[1.12] tracking-tight">
              Premier Career Counseling &{' '}
              <span className="italic font-normal text-eunoia-blue">
                Stream Selection
              </span>{' '}
              with Scientific Precision.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We replace guesswork and high-stakes family anxiety with comprehensive 5-dimensional psychometrics, future-ready career roadmaps (STEM, Sports, AI & Commerce), and empathetic mentorship by <strong className="text-[#0A1A30] font-semibold">Karishma Gureja</strong> (MBA in Finance, 7 Years US Experience, Former Mumbai School Leadership).
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide"
              >
                <span>Schedule a Discovery Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToRadar}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Explore 2025–35 Career Radar</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-serif font-bold text-[#0A1A30]">500+</div>
                <div className="text-xs text-slate-500 mt-0.5">Students Mentored</div>
              </div>

              <div>
                <div className="text-2xl font-serif font-bold text-[#0A1A30]">98%</div>
                <div className="text-xs text-slate-500 mt-0.5">Clarity & Certainty</div>
              </div>

              <div>
                <div className="text-2xl font-serif font-bold text-[#0A1A30]">7+ Yrs</div>
                <div className="text-xs text-slate-500 mt-0.5">USA & Global Tenure</div>
              </div>

              <div>
                <div className="text-2xl font-serif font-bold text-[#0A1A30]">Mindler</div>
                <div className="text-xs text-slate-500 mt-0.5">5-D Certified Coach</div>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Brand Showcase & Interactive Architecture Compass */}
          <div className="lg:col-span-5">
            <div className="card-sophisticated rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-premium relative">
              
              {/* Brand Header with Official Watercolor Logo */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 block">
                    Educational Advisory Framework
                  </span>
                  <div className="h-10 sm:h-11 flex items-center">
                    <img
                      src="/assets/eunoia_logo.png"
                      alt="Eunoia Works - Official Brand Logo"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified 5-D Standard</span>
                </span>
              </div>

              {/* 4 Core Pillars of Guidance */}
              <div className="py-5 space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3 hover:bg-slate-100/70 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0A1A30] shrink-0 mt-0.5 border border-slate-200">
                    <Brain className="w-4 h-4 text-eunoia-blue" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#0A1A30] uppercase tracking-wide">
                      1. Scientific 5-D Psychometrics
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Rigorous diagnostic battery assessing Aptitude, Personality Traits, Work Orientation, and Vocational Interests.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3 hover:bg-slate-100/70 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0A1A30] shrink-0 mt-0.5 border border-slate-200">
                    <Compass className="w-4 h-4 text-gold-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#0A1A30] uppercase tracking-wide">
                      2. Modern Horizon & Stream Fit
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Connecting student strengths with emerging 2026–2035 horizons (Sports Analytics, AI, Climate FinTech, Law, STEM).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3 hover:bg-slate-100/70 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0A1A30] shrink-0 mt-0.5 border border-slate-200">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#0A1A30] uppercase tracking-wide">
                      3. Parent-Student Harmony
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Bridging long-term parental security with authentic student passion through objective, transparent data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Intake & Advisory Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Current Admissions Cycle
                  </span>
                  <span className="text-xs font-semibold text-[#0A1A30]">
                    2026–2027 Cohort Active
                  </span>
                </div>
                <button
                  onClick={onScrollToQuiz}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-eunoia-blue hover:text-[#0A1A30] transition-colors"
                >
                  <span>Take Clarity Quiz</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
