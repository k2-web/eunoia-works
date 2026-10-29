import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, Compass, Brain, Award } from 'lucide-react';

export default function CareerNavigator({ onBookWithPlan }) {
  const [step, setStep] = useState(1);
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedDilemma, setSelectedDilemma] = useState('');
  const [selectedStrength, setSelectedStrength] = useState('');

  const stages = [
    { id: 'grade8-10', label: 'Grade 8–10 Student', sub: 'Deciding Stream Selection (Science / Commerce / Humanities / NEP)' },
    { id: 'grade11-12', label: 'Grade 11–12 High Schooler', sub: 'Evaluating University Applications, Entrances & College Majors' },
    { id: 'college', label: 'College Student or Recent Graduate', sub: 'Navigating Internships, Master’s / MBA Degrees & Early Careers' },
    { id: 'professional', label: 'Working Professional', sub: 'Contemplating Strategic Career Pivots & Overcoming Stagnation' },
    { id: 'parent', label: 'Parent of a Student', sub: 'Seeking Objective, Unbiased Diagnostic Guidance for My Child' }
  ];

  const dilemmas = [
    { id: 'stream-confusion', label: 'Uncertainty between Science, Commerce, Arts or Multidisciplinary Subject Combinations' },
    { id: 'college-options', label: 'Deciding between top Indian universities and Overseas admissions (US, UK, Canada, Europe)' },
    { id: 'future-proof', label: 'Concerns about AI and economic automation rendering traditional degrees obsolete' },
    { id: 'burnout-purpose', label: 'Struggling with competitive exam stress, lack of motivation, or self-doubt' },
    { id: 'parent-student', label: 'Generational disconnect between parental expectations and student aspirations' }
  ];

  const strengths = [
    { id: 'logic', label: 'Quantitative Reasoning, Structured Logic & Analytical Thinking' },
    { id: 'creative', label: 'Visual Creativity, Written Storytelling & Design Expression' },
    { id: 'people', label: 'Empathy, Human Psychology, Social Dynamics & Counseling' },
    { id: 'business', label: 'Strategic Organization, Financial Acumen & Leadership' },
    { id: 'tech', label: 'Technical Problem Solving, Systems Architecture & Scientific Discovery' }
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedStage('');
    setSelectedDilemma('');
    setSelectedStrength('');
  };

  const getRecommendation = () => {
    let focusTitle = "Comprehensive 360° Educational Blueprint";
    let battery = "Mindler 5-Dimensional Comprehensive Battery (Aptitude, Personality, Work Orientation, Values & Interests)";
    let recommendedAction = "1-on-1 Deep Discovery & Stream Alignment Consultation with Karishma Gureja";

    if (selectedStage === 'grade8-10') {
      focusTitle = "Secondary School Stream & Subject Optimization Strategy";
      recommendedAction = "Psychometric Aptitude Mapping + NEP 2020 Multi-Disciplinary Course Planning";
    } else if (selectedStage === 'grade11-12') {
      focusTitle = "Global Higher Education & Major Fit Roadmap";
      recommendedAction = "University Selection Matrix (India & Overseas) + Holistic Profile Architecture";
    } else if (selectedStage === 'professional' || selectedStage === 'college') {
      focusTitle = "Career Realignment & Graduate School Strategy";
      recommendedAction = "Transferable Competency Audit + Executive Resume & Master's/MBA Admissions Roadmap";
    } else if (selectedStage === 'parent') {
      focusTitle = "Collaborative Family Harmony & Educational Blueprint";
      recommendedAction = "Joint Parent-Student Alignment Session backed by Objective 5-D Psychometric Data";
    }

    return { focusTitle, battery, recommendedAction };
  };

  const recommendation = getRecommendation();

  return (
    <section id="quiz" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Interactive Diagnostic Navigator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1A30]">
            The Career Clarity Navigator
          </h2>
          <p className="text-base text-slate-600">
            Select three parameters to generate a customized diagnostic counseling recommendation.
          </p>
        </div>

        {/* Evaluation Card */}
        <div className="card-sophisticated rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden bg-white">
          
          {/* Progress Indicator */}
          {step <= 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                <span>Phase {step} of 3</span>
                <span>{step === 1 ? 'Current Academic Stage' : step === 2 ? 'Core Crossroads Question' : 'Innate Cognitive Preference'}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0A1A30] transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Current Stage */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1A30]">
                Which profile best describes your current situation?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {stages.map((stg) => (
                  <button
                    key={stg.id}
                    onClick={() => {
                      setSelectedStage(stg.id);
                      setStep(2);
                    }}
                    className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                      selectedStage === stg.id
                        ? 'border-[#0A1A30] bg-slate-50'
                        : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/50'
                    }`}
                  >
                    <div>
                      <div className="text-base font-semibold text-[#0A1A30]">
                        {stg.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {stg.sub}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A1A30] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Main Crossroads */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1A30]">
                What is your most pressing crossroads question?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {dilemmas.map((dil) => (
                  <button
                    key={dil.id}
                    onClick={() => {
                      setSelectedDilemma(dil.label);
                      setStep(3);
                    }}
                    className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                      selectedDilemma === dil.label
                        ? 'border-[#0A1A30] bg-slate-50'
                        : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-medium text-slate-800">
                      {dil.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A1A30] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-[#0A1A30] transition-colors"
              >
                ← Return to previous step
              </button>
            </div>
          )}

          {/* STEP 3: Core Strength */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1A30]">
                What cognitive orientation or subject area energizes you most?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {strengths.map((str) => (
                  <button
                    key={str.id}
                    onClick={() => {
                      setSelectedStrength(str.label);
                      setStep(4);
                    }}
                    className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                      selectedStrength === str.label
                        ? 'border-[#0A1A30] bg-slate-50'
                        : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-medium text-slate-800">
                      {str.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A1A30] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-500 hover:text-[#0A1A30] transition-colors"
              >
                ← Return to previous step
              </button>
            </div>
          )}

          {/* STEP 4: Generated Diagnostic Recommendation */}
          {step === 4 && (
            <div className="space-y-6 animate-scale-in">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                    Recommended Counseling Strategy
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#0A1A30] mt-0.5">
                    {recommendation.focusTitle}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0A1A30] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Selections context */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 text-slate-600">
                <p><strong>Primary Crossroads Question:</strong> {selectedDilemma}</p>
                <p><strong>Innate Strength Identified:</strong> {selectedStrength}</p>
              </div>

              {/* Action plan details */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-eunoia-blue shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0A1A30]">
                        Recommended Consultation Pathway:
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {recommendation.recommendedAction}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0A1A30]">
                        Recommended Diagnostic Instrument:
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {recommendation.battery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    onBookWithPlan(
                      `Roadmap Plan: ${recommendation.focusTitle} | Challenge: ${selectedDilemma} | Strength: ${selectedStrength}`
                    )
                  }
                  className="btn-primary flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
                >
                  <span>Discuss This Blueprint With Karishma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="btn-secondary px-5 py-3.5 rounded-full text-xs font-semibold text-center"
                >
                  Evaluate Another Profile
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
