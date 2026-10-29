import React, { useState } from 'react';
import ExecutiveTrustBar from './components/ExecutiveTrustBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerUniverse from './components/CareerUniverse';
import DemographicBridge from './components/DemographicBridge';
import Philosophy from './components/Philosophy';
import AboutCounselor from './components/AboutCounselor';
import ServicesBento from './components/ServicesBento';
import CareerNavigator from './components/CareerNavigator';
import Methodology from './components/Methodology';
import SimplifyHub from './components/SimplifyHub';
import Testimonials from './components/Testimonials';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FeedbackModal from './components/FeedbackModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleOpenBooking = (service = '', notes = '') => {
    setBookingService(service);
    setBookingNotes(notes);
    setIsBookingOpen(true);
  };

  const handleScrollToRadar = () => {
    const el = document.getElementById('career-universe');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1D20] font-sans antialiased selection:bg-[#0A1A30] selection:text-white">
      {/* Top Academic & Credential Trust Bar */}
      <ExecutiveTrustBar />

      {/* Main Navigation with Official Brand Logo */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Dignified Executive Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToRadar={handleScrollToRadar}
          onScrollToQuiz={handleScrollToQuiz}
        />

        {/* The Meaning & Philosophy of Eunoia */}
        <Philosophy />

        {/* Meet Karishma Gureja (MBA, Former Mumbai School Leadership, 7 Yrs US Experience) */}
        <AboutCounselor onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive 2025–2035 Career Radar (Sports, AI, Climate, Law, Neuroscience) */}
        <CareerUniverse
          onSelectCareerForBooking={(careerTitle) =>
            handleOpenBooking(careerTitle, `Inquiring about roadmap for: ${careerTitle}`)
          }
        />

        {/* The Demographic Bridge: Aligning Parent Security with Student Passion */}
        <DemographicBridge onOpenBooking={() => handleOpenBooking('Parent-Student Harmony Session')} />

        {/* Structured Counseling Programs & Bento Grid */}
        <ServicesBento
          onSelectServiceForBooking={(serviceName) =>
            handleOpenBooking(serviceName, `Interested in enrolling for: ${serviceName}`)
          }
        />

        {/* Interactive 5-D Career Clarity Navigator Quiz */}
        <CareerNavigator
          onBookWithPlan={(planContext) =>
            handleOpenBooking('Interactive Navigator Follow-up', planContext)
          }
        />

        {/* The 4-Stage Eunoia Advisory Framework */}
        <Methodology onOpenBooking={() => handleOpenBooking()} />

        {/* The "Simplify" Educational Whitepapers (NEP 2020 & Policy) */}
        <SimplifyHub />

        {/* Authentic Client Testimonials with University Admits */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqAccordion />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />

      {/* Solid Opaque Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledService={bookingService}
        prefilledNotes={bookingNotes}
      />

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
}
