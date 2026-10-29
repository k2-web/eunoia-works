import React from 'react';
import { Award, ShieldCheck, MapPin, Globe, Sparkles } from 'lucide-react';

export default function ExecutiveTrustBar() {
  return (
    <div className="bg-[#0A1A30] text-slate-300 py-2.5 px-4 text-[11px] font-sans border-b border-navy-700/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Credential Badge */}
        <div className="flex items-center space-x-2 text-gold-300">
          <Award className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-semibold tracking-wide text-white">
            Eunoia Works Educational Advisory
          </span>
          <span className="text-slate-500 hidden md:inline">•</span>
          <span className="text-slate-300 hidden md:inline">
            Mindler Certified Career Coach & NCDA Benchmark
          </span>
        </div>

        {/* Right: Geographic & Mode indicator */}
        <div className="flex items-center space-x-4 text-[11px] text-slate-300">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-gold-400" />
            <span>Mumbai Consultations</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center space-x-1">
            <Globe className="w-3 h-3 text-gold-400" />
            <span>Global Virtual (USA, UAE, Singapore)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
