import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenFeedback }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Karishma', href: '#about' },
    { name: 'Future Careers Radar', href: '#career-universe' },
    { name: 'Parent-Student Harmony', href: '#demographic-bridge' },
    { name: 'Counseling Programs', href: '#services' },
    { name: 'Clarity Assessment', href: '#quiz' },
    { name: 'NEP 2020 Insights', href: '#simplify' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav-light py-2.5 shadow-sm'
            : 'bg-[#FAF9F6]/95 py-3.5 border-b border-black/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src="/assets/eunoia_logo.png"
                alt="Eunoia Works - Career Counseling & Educational Advisory"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0A1A30] hover:bg-black/[0.03] rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenBooking}
                className="btn-primary inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary px-3.5 py-1.5 rounded-full text-xs font-semibold sm:hidden"
              >
                Schedule
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white mt-2 px-6 py-6 border-b border-black/[0.08] space-y-4 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#0A1A30]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl btn-primary text-xs font-semibold text-center"
              >
                Schedule 1-on-1 Consultation
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFeedback();
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 text-center"
              >
                Client Feedback Portal
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
