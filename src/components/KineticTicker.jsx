import React from 'react';
import { Sparkles, Trophy, Cpu, Compass, Flame, ShieldCheck, Zap } from 'lucide-react';

export default function KineticTicker() {
  const items = [
    { text: "SPORTS PERFORMANCE & ANALYTICS", icon: Trophy, color: "text-[#CCFF00]" },
    { text: "5-DIMENSIONAL PSYCHOMETRIC CLARITY", icon: Compass, color: "text-[#00F2FE]" },
    { text: "GENERATIVE AI & SPACE TECH", icon: Cpu, color: "text-[#9945FF]" },
    { text: "NEP 2020 MULTIDISCIPLINARY STREAMS", icon: Zap, color: "text-[#CCFF00]" },
    { text: "GLOBAL & TOP INDIAN ADMISSIONS", icon: ShieldCheck, color: "text-[#00F2FE]" },
    { text: "PARENT & TEEN HARMONY", icon: Flame, color: "text-[#FF007A]" },
  ];

  return (
    <div className="relative py-4 bg-[#08090C] border-y border-white/[0.08] overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00]/5 via-[#00F2FE]/5 to-transparent pointer-events-none" />

      {/* Marquee Track 1 (Leftwards) */}
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-zinc-300 font-display"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
              <span className="text-zinc-600 font-light">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
