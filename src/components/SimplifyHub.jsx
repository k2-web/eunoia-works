import React, { useState } from 'react';
import { simplifyArticles } from '../data/content';
import { BookOpen, Clock, ArrowRight, Layers, Cpu, CheckCircle2 } from 'lucide-react';

export default function SimplifyHub() {
  const [selectedArticleId, setSelectedArticleId] = useState(simplifyArticles[0].id);

  const selectedArticle = simplifyArticles.find(a => a.id === selectedArticleId) || simplifyArticles[0];

  return (
    <section id="simplify" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            Educational Whitepapers & Policy Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            The "Simplify" Educational Series
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our initiative to demystify Indian national education reforms, university board transitions, and the changing global labor market.
          </p>
        </div>

        {/* 2-Column Editorial Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Article Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {simplifyArticles.map((article) => {
              const isSelected = article.id === selectedArticleId;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white border-[#0A1A30] shadow-sm'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0A1A30] mb-1.5 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {article.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-eunoia-blue">
                    <span>Read Advisory Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Full Article Display Reader */}
          <div className="lg:col-span-7 card-sophisticated rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 bg-white animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                {selectedArticle.tag} · {selectedArticle.date}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {selectedArticle.readTime}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1A30] leading-tight">
                {selectedArticle.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                {selectedArticle.subtitle}
              </p>
            </div>

            {/* Special Visual Interactive Widget for NEP 2020 */}
            {selectedArticle.id === 'nep-2020' && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A1A30] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-eunoia-blue" />
                    The 5 + 3 + 3 + 4 Educational Stage Model
                  </span>
                  <span className="text-[11px] text-slate-400 line-through">Replaces Legacy 10+2</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-sm font-serif font-bold text-[#0A1A30]">5 Years</div>
                    <div className="text-xs font-bold text-slate-800">Foundation</div>
                    <div className="text-[10px] text-slate-500">Ages 3–8</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-sm font-serif font-bold text-[#0A1A30]">3 Years</div>
                    <div className="text-xs font-bold text-slate-800">Preparatory</div>
                    <div className="text-[10px] text-slate-500">Grades 3–5</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-sm font-serif font-bold text-[#0A1A30]">3 Years</div>
                    <div className="text-xs font-bold text-slate-800">Middle</div>
                    <div className="text-[10px] text-slate-500">Grades 6–8</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-sm font-serif font-bold text-[#0A1A30]">4 Years</div>
                    <div className="text-xs font-bold text-slate-800">Secondary</div>
                    <div className="text-[10px] text-slate-500">Grades 9–12</div>
                  </div>
                </div>
              </div>
            )}

            {/* Special Visual Widget for Emerging Trends */}
            {selectedArticle.id === 'emerging-trends' && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-[#0A1A30] flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-eunoia-blue" />
                  AICTE Overhaul & Multidisciplinary Convergence
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-[#0A1A30] block mb-1">Computational & Technical Core</span>
                    AI, Data Systems, Robotics, Precision Agriculture & Autonomous Networks.
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-eunoia-blue block mb-1">Human Wellbeing & Strategy</span>
                    Sports Performance, Psychology, Preventive Health, Nutrition & Organizational Coaching.
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Key Counsel Insights for Parents:
              </h4>
              <div className="space-y-2.5">
                {selectedArticle.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="text-xs text-slate-600">
                Unsure how NEP 2020 subject choices affect your child's university eligibility?
              </div>
              <a
                href="#services"
                className="btn-primary shrink-0 ml-3 px-4 py-2 rounded-full text-xs font-semibold"
              >
                Explore Guidance
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
