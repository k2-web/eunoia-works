import React, { useState } from 'react';
import { X, Globe, ShieldCheck, CheckCircle2, ArrowRight, Server, Copy, Check, AlertTriangle } from 'lucide-react';

export default function MigrationAssistantModal({ isOpen, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 border border-white/60 dark:border-white/15 shadow-apple-modal z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#515154] dark:text-[#A1A1A6]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Downtime Migration Guide</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1D1D1F] dark:text-white">
              Migrating www.eunoiaworks.com from Google Sites
            </h3>
            <p className="text-xs text-[#86868B] dark:text-[#A1A1A6]">
              Keep your existing Google search ranking, custom domain, and Google Workspace emails intact.
            </p>
          </div>

          {/* Critical Caution Notice */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-800 dark:text-amber-200">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <p className="font-bold">Protect Your Email (inspire@eunoiaworks.com):</p>
              <p className="mt-0.5 leading-relaxed">
                Your domain uses Google Workspace for email (MX records: <code>aspmx.l.google.com</code>). <strong>DO NOT</strong> touch or delete your MX records! Only update the <code>www</code> CNAME record.
              </p>
            </div>
          </div>

          {/* 4 Steps */}
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0071E3] uppercase tracking-wider">
                  Step 1: Deploy to Free Global CDN (Vercel / Cloudflare)
                </span>
                <span className="text-[11px] font-semibold text-emerald-600">Free forever</span>
              </div>
              <p className="text-xs text-[#515154] dark:text-[#D2D2D7] leading-relaxed">
                Push this project folder to GitHub, go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#0071E3] underline">Vercel.com</a> (or Cloudflare Pages), click "Add New Project", and import the repository. Vercel automatically detects Vite and builds it in 30 seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0071E3] uppercase tracking-wider">
                  Step 2: Disconnect Custom Domain in Google Sites
                </span>
              </div>
              <p className="text-xs text-[#515154] dark:text-[#D2D2D7] leading-relaxed">
                Open your old Google Site in edit mode → Click <strong>Settings (Gear Icon)</strong> → Select <strong>Custom Domains</strong> → Remove <code>www.eunoiaworks.com</code> so Google releases the domain lock.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0071E3] uppercase tracking-wider">
                  Step 3: Update DNS in Google Domains / Squarespace
                </span>
              </div>
              <p className="text-xs text-[#515154] dark:text-[#D2D2D7] leading-relaxed">
                Log into your domain DNS provider (Google Domains / Squarespace Domains):
              </p>

              <div className="p-3 rounded-xl bg-black/5 dark:bg-black/40 font-mono text-[11px] flex items-center justify-between">
                <div>
                  <span className="text-[#86868B]">CNAME: </span>
                  <span className="font-bold">www</span>
                  <span className="text-[#86868B]"> ➔ </span>
                  <span className="text-[#0071E3]">cname.vercel-dns.com</span>
                </div>
                <button
                  onClick={() => handleCopy('cname.vercel-dns.com', 1)}
                  className="p-1 text-[#86868B] hover:text-[#0071E3]"
                >
                  {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/5 dark:bg-black/40 font-mono text-[11px] flex items-center justify-between">
                <div>
                  <span className="text-[#86868B]">A Record: </span>
                  <span className="font-bold">@ (apex)</span>
                  <span className="text-[#86868B]"> ➔ </span>
                  <span className="text-[#0071E3]">76.76.21.21</span>
                </div>
                <button
                  onClick={() => handleCopy('76.76.21.21', 2)}
                  className="p-1 text-[#86868B] hover:text-[#0071E3]"
                >
                  {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
              <span className="text-xs font-bold text-[#0071E3] uppercase tracking-wider">
                Step 4: Automatic SSL & Search Indexing
              </span>
              <p className="text-xs text-[#515154] dark:text-[#D2D2D7] leading-relaxed">
                Vercel immediately provisions a free, auto-renewing SSL certificate. Because your domain is unchanged (<code>www.eunoiaworks.com</code>), Google Search will crawl the lightning-fast modern code and preserve all your rankings!
              </p>
            </div>

          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="apple-btn px-6 py-2.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold"
            >
              Got It, Close Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
