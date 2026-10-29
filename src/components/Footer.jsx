import React from 'react';
import { Mail, ArrowUpRight, Award, MapPin } from 'lucide-react';
import { counselorData } from '../data/content';

export default function Footer({ onOpenBooking, onOpenFeedback }) {
  return (
    <footer className="bg-[#0A1A30] text-slate-300 pt-16 pb-12 text-xs border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column with Official Logo */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <img
                src="/assets/eunoia_logo.png"
                alt="Eunoia Works"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed font-serif">
              "elucidate the beautiful mind to unravel your potential"
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
              Premier Career Counseling & Educational Advisory practice founded by Karishma Gureja (MBA Finance, Former Mumbai School Leadership, 7 Years US Experience, Mindler 5-D Certified). Serving students and parents across Mumbai, India, and worldwide.
            </p>
          </div>

          {/* Academic Specializations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Career & Counseling Programs
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-gold-300 transition-colors">Stream Selection (Grades 8–10)</a></li>
              <li><a href="#services" className="hover:text-gold-300 transition-colors">College & Major Strategy (11–12)</a></li>
              <li><a href="#career-universe" className="hover:text-gold-300 transition-colors">Sports Analytics & Management</a></li>
              <li><a href="#career-universe" className="hover:text-gold-300 transition-colors">AI & Frontier Technology</a></li>
              <li><a href="#demographic-bridge" className="hover:text-gold-300 transition-colors">Parent-Student Harmony Sessions</a></li>
            </ul>
          </div>

          {/* Research & Diagnostic Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Advisory Tools & Insights
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#career-universe" className="hover:text-gold-300 transition-colors">2025–2035 Career Horizon</a></li>
              <li><a href="#quiz" className="hover:text-gold-300 transition-colors">Career Clarity Navigator</a></li>
              <li><a href="#simplify" className="hover:text-gold-300 transition-colors">NEP 2020 5+3+3+4 Stage Model</a></li>
              <li><a href="#framework" className="hover:text-gold-300 transition-colors">Mindler 5-D Methodology</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors">Counseling FAQs</a></li>
            </ul>
          </div>

          {/* Advisory Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Advisory Office & Bookings
            </h4>
            <p className="text-xs text-slate-300">
              Direct Counselor Email: <br />
              <a href={`mailto:${counselorData.email}`} className="font-semibold text-gold-400 hover:underline">
                {counselorData.email}
              </a>
            </p>
            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={onOpenBooking}
                className="text-left font-semibold text-white hover:text-gold-300 transition-colors flex items-center gap-1"
              >
                <span>Schedule 1-on-1 Consultation</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
              <button
                onClick={onOpenFeedback}
                className="text-left font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Client Session Feedback</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Eunoia Works. All rights reserved. Registered Educational Advisory Practice.
          </div>
          <div className="flex items-center space-x-4">
            <span>Mindler Certified Partner</span>
            <span>•</span>
            <span>CDA / NCDA Benchmark</span>
            <span>•</span>
            <span>Mumbai & Global Virtual</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
