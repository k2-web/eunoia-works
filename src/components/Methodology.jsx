import React from 'react';
import { frameworkSteps } from '../data/content';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Methodology({ onOpenBooking }) {
  return (
    <section id="framework" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-eunoia-blue">
            The Scientific Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            The 4-Stage Eunoia Advisory Framework
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our structured, step-by-step diagnostic process transforms subjective anxiety into methodical clarity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map((step) => (
            <div
              key={step.step}
              className="card-sophisticated rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0A1A30] font-serif font-bold text-lg mb-6 border border-slate-200">
                  {step.step}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0A1A30] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-eunoia-blue mb-4">
                  {step.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <span>Phase {step.step}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Every consultation is completely customized to the student's unique cognitive fingerprint.
          </p>
          <button
            onClick={onOpenBooking}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold"
          >
            <span>Begin Your Child's Discovery Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
