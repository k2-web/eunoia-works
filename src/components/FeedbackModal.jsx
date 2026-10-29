import React, { useState, useEffect } from 'react';
import { X, Star, Heart, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { counselorData } from '../data/content';

// Safe sanitization helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
};

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [clientName, setClientName] = useState('');
  const [comments, setComments] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

    const cleanName = sanitizeInput(clientName).slice(0, 80);
    const cleanComments = sanitizeInput(comments).slice(0, 2000);
    const safeRating = Math.min(5, Math.max(1, parseInt(rating, 10) || 5));

    if (!cleanComments || cleanComments.length < 5) {
      setErrorMessage('Please share a few words about your session experience.');
      return;
    }

    setSubmitted(true);
    const subject = encodeURIComponent(`Session Feedback from ${cleanName || 'Valued Client'}`);
    const body = encodeURIComponent(
      `Rating: ${safeRating} / 5 Stars\nClient: ${cleanName || 'Anonymous'}\n\nFeedback:\n${cleanComments}`
    );
    window.location.href = `mailto:${counselorData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Heavy Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid White Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-slate-900">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center justify-center mb-4">
              <img
                src="/assets/eunoia_logo.png"
                alt="Eunoia Works Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="space-y-1.5 mb-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 fill-gold-600 text-gold-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0A1A30]">
                Session Feedback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Your reflections help us continually nurture beautiful thinking for all families.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Star Rating */}
              <div className="text-center">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Session Experience Rating:
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Your Name (or Student / Parent Name)
                </label>
                <input
                  type="text"
                  maxLength={80}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Meera S."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  What was the biggest clarity or insight gained? *
                </label>
                <textarea
                  rows="4"
                  required
                  maxLength={2000}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Share how the session assisted your decision making..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A1A30] focus:border-[#0A1A30] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                Submit Feedback
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a
                href={counselorData.googleForms.feedback}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-eunoia-blue font-semibold hover:underline"
              >
                <span>Or use the Original Google Feedback Form</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-scale-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#0A1A30]">
              Thank You for Your Feedback!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your words mean the world to us and help future students navigate their choices with confidence.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
