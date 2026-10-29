import React, { useState } from 'react';
import { servicesData } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesBento({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'school', label: 'Grades 8–10' },
    { id: 'college-prep', label: 'Grades 11–12 & College' },
    { id: 'professionals', label: 'Early Career' },
    { id: 'life', label: 'Life Coaching' },
    { id: 'family', label: 'Parent Sessions' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Structured Guidance Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            Counseling Programs for Every Academic Milestone
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every family is unique. Whether your child is deciding their Grade 11 stream or shortlisting global universities, our programs combine psychometric precision with deep emotional reassurance.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0A1A30] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`card-sophisticated rounded-3xl p-6 sm:p-8 flex flex-col justify-between ${
                idx === 0 && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50' : 'bg-white'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-[#0A1A30] border border-slate-200">
                    {service.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1A30] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Key Deliverables & Milestones:
                  </p>
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-eunoia-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Individual Confidential Session
                </span>
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                >
                  <span>Inquire for Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
