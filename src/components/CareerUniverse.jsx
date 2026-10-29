import React, { useState } from 'react';
import { careerCategories, careerUniverseData } from '../data/careersData';
import { Trophy, Cpu, Gamepad2, Leaf, Scale, Brain, ArrowUpRight, CheckCircle2, TrendingUp, DollarSign, BookOpen, GraduationCap, Compass } from 'lucide-react';

export default function CareerUniverse({ onSelectCareerForBooking }) {
  const [activeCategory, setActiveCategory] = useState('sports');
  const [selectedCareerId, setSelectedCareerId] = useState(careerUniverseData[0].id);

  const iconMap = {
    Trophy: Trophy,
    Cpu: Cpu,
    Gamepad2: Gamepad2,
    Leaf: Leaf,
    Scale: Scale,
    Brain: Brain,
  };

  const filteredCareers = careerUniverseData.filter(c => c.category === activeCategory);
  const activeCareer = careerUniverseData.find(c => c.id === selectedCareerId) || filteredCareers[0] || careerUniverseData[0];

  return (
    <section id="career-universe" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Educational Research & Industry Mapping
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            The 2025–2035 Career Horizon
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Helping parents and students look beyond traditional 1990s careers. Detailed prerequisite roadmaps, industry demand metrics, and college pathways for high-growth modern disciplines.
          </p>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {careerCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Trophy;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    const firstInCat = careerUniverseData.find(c => c.category === cat.id);
                    if (firstInCat) setSelectedCareerId(firstInCat.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0A1A30] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 text-gold-500" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Advisory Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Career Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1 mb-2">
              Select Specialization ({filteredCareers.length} Opportunities)
            </div>

            {filteredCareers.map((career) => {
              const isSelected = career.id === activeCareer.id;
              return (
                <div
                  key={career.id}
                  onClick={() => setSelectedCareerId(career.id)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-slate-50 border-[#0A1A30] shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-800">
                      {career.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {career.growthScore} Demand
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0A1A30]">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {career.tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium text-slate-700">{career.salaryRange}</span>
                    <span className="text-[#0A1A30] font-semibold flex items-center gap-1">
                      Inspect Roadmap <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Blueprint Display */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#FAF9F6] border border-slate-200 shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="border-b border-slate-200 pb-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
                  Academic & Professional Horizon
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {activeCareer.growthScore} Global Growth Outlook
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1A30]">
                {activeCareer.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                {activeCareer.tagline}
              </p>

              {/* Salary & Prerequisites */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Compensation Benchmark</div>
                  <div className="text-sm font-bold text-[#0A1A30] mt-0.5">{activeCareer.salaryRange}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Stream Prerequisites</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">{activeCareer.streamPrerequisites}</div>
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Scope of Work & Professional Role:
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCareer.whatTheyDo}
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Core High-Value Competencies:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeCareer.keySkills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-700 font-medium"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* High School Roadmap */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-eunoia-blue flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-eunoia-blue" />
                High School Preparation Plan (Grades 9–12):
              </h4>
              <div className="space-y-2">
                {activeCareer.highSchoolActionPlan.map((action, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Colleges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1.5">
                  Premier Indian Colleges:
                </span>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  {activeCareer.topColleges.india.map((col, idx) => (
                    <li key={idx}>{col}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1.5">
                  Premier Global Institutions:
                </span>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  {activeCareer.topColleges.global.map((col, idx) => (
                    <li key={idx}>{col}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Counselor Note for Parents */}
            <div className="p-4 rounded-2xl bg-gold-50/70 border border-gold-200/80 flex items-start gap-3">
              <Compass className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-gold-800 uppercase tracking-wider block">
                  Counselor Perspective for Parents:
                </span>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  "{activeCareer.karishmaTip}"
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onSelectCareerForBooking(activeCareer.title)}
                className="btn-primary w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Plan Your Child's Roadmap for {activeCareer.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
