import React, { useState } from 'react';
import { demographicBridge } from '../data/careersData';
import { Users, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DemographicBridge({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeItem = demographicBridge[activeTab];

  return (
    <section id="demographic-bridge" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Family Harmony & Communication
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            Bridging Parent Security with Student Passion
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Career decisions frequently create unspoken tension between parents' natural desire for security and children's search for personal identity. Here is how our counseling methodology builds mutual alignment.
          </p>

          {/* Dilemma Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {demographicBridge.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-[#0A1A30] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {item.topic}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Comparison Matrix Card */}
        <div className="card-sophisticated rounded-3xl p-6 sm:p-10 space-y-8 animate-fade-in">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Left: What Parents Worry About */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-800 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <span>The Parental Perspective</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {activeItem.parentPerspective}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                Core Intent: Long-term Financial Stability, Predictability & Peace of Mind.
              </div>
            </div>

            {/* Right: What Teens Crave */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-eunoia-blue text-xs font-semibold uppercase tracking-wider">
                <Users className="w-4 h-4 text-eunoia-blue" />
                <span>The Student Perspective</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                {activeItem.teenPerspective}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                Core Intent: Authenticity, Day-to-Day Engagement & Creative Relevance.
              </div>
            </div>

          </div>

          {/* Bottom Card: How Eunoia Bridges Both */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gold-50 via-slate-50 to-white border border-gold-200/80 space-y-3">
            <div className="flex items-center gap-2 text-gold-800 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-gold-700" />
              <span>The Eunoia Resolution Framework:</span>
            </div>

            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
              {activeItem.eunoiaSolution}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold-200/60">
              <span className="text-xs text-slate-600">
                Joint sessions ensure both student and parents leave with complete mutual conviction.
              </span>
              <button
                onClick={onOpenBooking}
                className="btn-primary px-6 py-2.5 rounded-full text-xs font-semibold shrink-0"
              >
                Schedule Family Alignment Session
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
