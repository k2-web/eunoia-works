import React from 'react';
import { testimonials } from '../data/content';
import { Star, Award, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Parent & Student Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            Stories of Clarity & Purpose
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real outcomes from families who navigated high school stream dilemmas, university admissions, and career transitions with Eunoia Works.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-sophisticated rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1.5 border border-slate-200">
                    <Award className="w-3.5 h-3.5 text-gold-600" />
                    {t.university}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6 font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A1A30] text-gold-300 flex items-center justify-center font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#0A1A30]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
