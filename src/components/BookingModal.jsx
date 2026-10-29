import React, { useState, useEffect } from 'react';
import { X, Calendar, Mail, Phone, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { counselorData } from '../data/content';

// Safe sanitization helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
};

export default function BookingModal({ isOpen, onClose, prefilledService, prefilledNotes }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState('Grade 8-10');
  const [service, setService] = useState(prefilledService || 'Stream & Subject Selection');
  const [notes, setNotes] = useState(prefilledNotes || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) setService(prefilledService);
    if (prefilledNotes) setNotes(prefilledNotes);
  }, [prefilledService, prefilledNotes]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setErrorMessage('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanName = sanitizeInput(name).slice(0, 80);
    const cleanEmail = sanitizeInput(email).slice(0, 100);
    const cleanPhone = sanitizeInput(phone).slice(0, 30);
    const cleanNotes = sanitizeInput(notes).slice(0, 1500);

    // Validation checks
    if (!cleanName || cleanName.length < 2) {
      setErrorMessage('Please provide a valid full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please provide a valid email address (e.g. name@example.com).');
      return;
    }

    const phoneRegex = /^[+0-9\s\-()]{7,25}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage('Please enter a valid contact phone or WhatsApp number.');
      return;
    }

    setSubmitted(true);

    const subject = encodeURIComponent(`Consultation Inquiry: ${cleanName} (${stage})`);
    const body = encodeURIComponent(
      `Dear Karishma,\n\nI would like to schedule a career counseling consultation with Eunoia Works.\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone / WhatsApp: ${cleanPhone}\nAcademic Stage: ${stage}\nProgram of Interest: ${service}\n\nQuestions / Notes:\n${cleanNotes}\n\nLooking forward to speaking with you!`
    );

    // Safely trigger user email client
    window.location.href = `mailto:${counselorData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Heavy, High-Contrast Dark Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid Opaque White Modal Card (Zero transparency bleed) */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header with Eunoia Logo */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <img
                src="/assets/eunoia_logo.png"
                alt="Eunoia Works Logo"
                className="h-9 w-auto object-contain"
              />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#0A1A30] text-[11px] font-semibold border border-slate-200">
                <Sparkles className="w-3 h-3 text-gold-600" />
                <span>1-on-1 Confidential Advisory</span>
              </div>
            </div>

            <div className="space-y-1.5 mb-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1A30]">
                Schedule a Discovery Call
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Take the first step towards academic certainty. We will review your child's background and schedule a dedicated private session with Karishma Gureja.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Full Name (Student or Parent) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={30}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Current Academic Stage *
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                  >
                    <option value="Grade 8-10">Grade 8–10 (Stream Selection)</option>
                    <option value="Grade 11-12">Grade 11–12 (College Prep & Entrances)</option>
                    <option value="Undergraduate">College Student / Recent Graduate</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Parent of Student">Parent Seeking Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Program of Interest *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                  >
                    <option value="Stream & Subject Selection">Stream & Subject Selection</option>
                    <option value="College & Major Selection">College & Major Selection</option>
                    <option value="Sports & Frontier Careers Advisory">Sports & Frontier Careers</option>
                    <option value="Early Career Advisory">Early Career Advisory</option>
                    <option value="Life Coaching & Mindset">Life Coaching & Mindset</option>
                    <option value="Parent-Student Harmony">Parent-Student Harmony</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Specific Questions or Context
                </label>
                <textarea
                  rows="3"
                  maxLength={1500}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us a little bit about your current academic dilemma, syllabus (CBSE / ICSE / IB / Cambridge), or aspirations..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Direct Google Form Alternative */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 mb-2">
                Prefer using the practice's original Google Form or direct email?
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={counselorData.googleForms.getInTouch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-eunoia-blue hover:underline"
                >
                  <span>Open Official Google Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={`mailto:${counselorData.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0A1A30] hover:underline"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>{counselorData.email}</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-scale-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#0A1A30]">
              Thank You, {sanitizeInput(name)}!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been initiated. Karishma reviews every inquiry personally and will reach out via WhatsApp/Email within 24 hours to coordinate your consultation.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
