import React from 'react';
import { Activity, ShieldCheck, MapPin, Award, Zap } from 'lucide-react';

export default function StatusHud() {
  return (
    <div className="w-full bg-[#0E1015]/90 border-b border-white/[0.06] backdrop-blur-md px-4 py-2.5 text-[11px] font-mono tracking-wider text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        
        {/* Status indicator */}
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
          </span>
          <span className="text-zinc-200 font-bold tracking-widest text-[10px] uppercase">
            STATUS: <span className="text-[#CCFF00]">2026–27 ADMISSIONS & STREAM SPRINT LIVE</span>
          </span>
        </div>

        {/* Telemetry metrics */}
        <div className="hidden sm:flex items-center space-x-6 text-[10px] uppercase">
          <div className="flex items-center space-x-1.5">
            <Award className="w-3 h-3 text-[#00F2FE]" />
            <span>MINDLER 5-D CERTIFIED</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3 h-3 text-[#FFB800]" />
            <span>MUMBAI • USA • GLOBAL VIRTUAL</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-3 h-3 text-[#CCFF00]" />
            <span>98% PARENT-STUDENT HARMONY</span>
          </div>
        </div>

      </div>
    </div>
  );
}
