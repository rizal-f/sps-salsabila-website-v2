import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from './store/uiSlice';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickStats from './components/QuickStats';
import VideoPengenalanSection from './components/VideoPengenalanSection';
import VisiMisiSection from './components/VisiMisiSection';
import KurikulumSection from './components/KurikulumSection';
import ProgramSection from './components/ProgramSection';
import SentraSection from './components/SentraSection';
import GallerySection from './components/GallerySection';
import ScheduleSection from './components/ScheduleSection';
import FaqSection from './components/FaqSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

import MascotWidget from './components/MascotWidget';
import SparkleEffect from './components/SparkleEffect';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Observe sections for active navigation highlights
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#FFFDF4] overflow-x-hidden w-full max-w-full">
      {/* Sparkle Click Trail */}
      <SparkleEffect />

      {/* Header & Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden pt-16 sm:pt-18">
        <HeroSection />
        <QuickStats />
        <VideoPengenalanSection />
        <VisiMisiSection />
        <KurikulumSection />
        <ProgramSection />
        <SentraSection />
        <GallerySection />
        <ScheduleSection />
        <FaqSection />
        <RegistrationSection />
      </main>

      {/* Interactive Mascot & Floating Action Widgets */}
      <MascotWidget />
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
