import React from 'react';
import { Brain, Compass, HeartHandshake, Sparkles } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-20 md:py-24 bg-[#FFFFFF] border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Statement Card */}
        <div className="card-sophisticated rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200 relative overflow-hidden">
          
          {/* Subtle Brand Watermark */}
          <div className="absolute top-8 right-8 hidden sm:block opacity-10 pointer-events-none">
            <img
              src="/assets/eunoia_logo.png"
              alt="Eunoia Works Brand Watermark"
              className="h-28 w-auto object-contain"
            />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>The Etymology of Eunoia</span>
              </div>

              {/* Mobile / Small screen brand logo pill */}
              <div className="sm:hidden h-8">
                <img
                  src="/assets/eunoia_logo.png"
                  alt="Eunoia Works Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
                <span className="italic font-normal text-eunoia-blue">eu·noi·a</span>{' '}
                <span className="text-xl sm:text-2xl font-sans font-light text-slate-400">/yoo-noy-uh/</span>
              </h2>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Noun · Ancient Greek (εὔνοια) : "Beautiful Thinking, Goodwill & a Mind in Harmony"
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Major decisions in high school and college often happen in an atmosphere of rush, peer comparison, and anxious hearsay. When choices are reactive, they breed self-doubt. At Eunoia Works, we cultivate <strong className="text-[#0A1A30] font-semibold">beautiful thinking</strong>—a state where rigorous psychometrics, unhurried introspection, and economic realities converge to give young minds an unshakeable sense of purpose.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <Brain className="w-4 h-4 text-[#0A1A30]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0A1A30]">Self-Awareness</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Uncovering intrinsic aptitudes rather than chasing temporary peer trends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-eunoia-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0A1A30]">Scientific Mapping</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Internationally benchmarked Mindler 5-D evaluation tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0A1A30]">Parental Peace</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Creating alignment without emotional friction or forced expectations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
