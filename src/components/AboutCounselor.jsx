import React, { useState } from 'react';
import { Award, Briefcase, Globe, GraduationCap, Quote, CheckCircle2, Maximize2, X, ShieldCheck } from 'lucide-react';
import { counselorData } from '../data/content';

export default function AboutCounselor({ onOpenBooking }) {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Academic & Leadership Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            Meet Your Lead Counselor
          </h2>
          <p className="text-base text-slate-600">
            A rare combination of analytical finance rigor, top-tier school administration experience, and 7 years of Western academic immersion.
          </p>
        </div>

        {/* Split Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Certificate & Credential Showcase Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-sophisticated rounded-3xl p-5 relative overflow-hidden bg-white border border-slate-200/90 shadow-md">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Official Verified Credential
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Mindler Certified</span>
                </div>
              </div>

              {/* Framed Certificate with Hover Zoom Cue */}
              <div 
                onClick={() => setIsCertModalOpen(true)}
                className="group relative cursor-pointer aspect-[1280/936] rounded-xl overflow-hidden bg-slate-50 border-2 border-gold-200/70 shadow-inner flex items-center justify-center transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src="/assets/counselor_certificate.jpg"
                  alt="Karishma Gureja - Mindler Certified International Career Coach Certificate"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to karishma.jpg if needed
                    e.target.src = '/assets/karishma.jpg';
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0A1A30]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#0A1A30] text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-600" />
                    <span>Click to Inspect Full Certificate</span>
                  </div>
                </div>
              </div>

              {/* Certificate Caption */}
              <div className="pt-3.5 text-center space-y-1">
                <h4 className="text-sm font-serif font-bold text-[#0A1A30]">
                  International Certified Career Coach (ICCC)
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Conferred upon Karishma Gureja by Mindler • Aligned with NCDA & CDA Global Standards
                </p>
              </div>

            </div>

            {/* Counselor Identity Bar */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0A1A30] text-gold-400 font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                  KG
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0A1A30]">Karishma Gureja</h4>
                  <p className="text-xs text-slate-500">Founder & Lead Advisory Coach</p>
                </div>
              </div>
              <img
                src="/assets/eunoia_logo.png"
                alt="Eunoia Works Logo"
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
          </div>

          {/* Right Column: Bio & Core Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quote Callout */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-l-[#0A1A30] border border-slate-200 shadow-sm">
              <Quote className="w-6 h-6 text-gold-600 mb-2 opacity-80" />
              <p className="text-base sm:text-lg font-serif font-normal text-slate-800 italic leading-relaxed">
                "Returning from 7 years in the United States, I realized that the world holds boundless opportunities wherever you go—as long as young minds are empowered to release their authentic potential."
              </p>
              <p className="text-xs font-semibold text-slate-500 mt-3 uppercase tracking-wider">
                — Karishma Gureja (Founder, Eunoia Works)
              </p>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p>
                With an <strong>MBA in Finance</strong> and extensive leadership experience serving as the <strong>Human Resources and Public Relations Head for a premier school in Mumbai</strong>, Karishma understands the exact academic, emotional, and social pressures students navigate in competitive environments.
              </p>
              <p>
                Her <strong>7 years of residence in the United States</strong> after her upbringing in India gave her a deep comparative perspective on Western university expectations, holistic application processes, and modern global job markets.
              </p>
              <p>
                To bring the highest international rigor to her counseling, she completed <strong>Certification as a Career Coach through Mindler</strong> (aligned with CDA and NCDA benchmarks) alongside formal <strong>Certification in Life Coaching</strong>.
              </p>
            </div>

            {/* Credential Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0A1A30] shrink-0">
                  <GraduationCap className="w-5 h-5 text-eunoia-blue" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0A1A30]">MBA in Finance</h5>
                  <p className="text-[11px] text-slate-500">Analytical & strategic career lens</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0A1A30] shrink-0">
                  <Globe className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0A1A30]">7 Years in the USA</h5>
                  <p className="text-[11px] text-slate-500">Global university & market insight</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0A1A30] shrink-0">
                  <Briefcase className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0A1A30]">Head of HR & PR, Mumbai</h5>
                  <p className="text-[11px] text-slate-500">Reputed private school administration</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0A1A30] shrink-0">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0A1A30]">Mindler & Life Certified</h5>
                  <p className="text-[11px] text-slate-500">5-D psychometric assessment tools</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span>Schedule a 1-on-1 Consultation with Karishma</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Full-Screen Certificate Lightbox Modal */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsCertModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl z-10 border border-slate-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-serif font-bold text-[#0A1A30]">
                  Verified Mindler Certification
                </h3>
                <p className="text-xs text-slate-500">
                  International Certified Career Coach — Karishma Gureja
                </p>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center max-h-[75vh]">
              <img
                src="/assets/counselor_certificate.jpg"
                alt="Karishma Gureja Mindler Certificate full view"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
