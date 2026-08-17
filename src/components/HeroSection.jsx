import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { triggerConfetti } from '../store/uiSlice';
import { playBubbleSound, playPopSound, playChimeSound } from '../utils/soundEffects';
import { fireSchoolCelebration, fireStarsExplosion } from '../utils/confetti';
import {
  HiSparkles,
  HiArrowRight,
  HiHeart,
  HiStar,
  HiSun,
  HiCheckCircle
} from 'react-icons/hi';
import { FaBookOpen, FaMosque, FaPalette, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function HeroSection() {
  const dispatch = useDispatch();
  const { soundEnabled } = useSelector((state) => state.ui);
  const [sunWinking, setSunWinking] = useState(false);

  const handleCtaClick = () => {
    playChimeSound(soundEnabled);
    dispatch(triggerConfetti());
    fireSchoolCelebration();
  };

  const handleSunClick = (e) => {
    playBubbleSound(soundEnabled);
    setSunWinking(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireStarsExplosion(x, y);
    setTimeout(() => setSunWinking(false), 1200);
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      
      {/* Background Animated Floating Elements (Clouds, Balloon, Rainbow glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Soft Radial Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>

        {/* Cloud 1 */}
        <div className="absolute top-12 left-10 text-white/80 animate-cloud-drift-1 opacity-70">
          <svg width="140" height="70" viewBox="0 0 140 70" fill="currentColor">
            <path d="M20 50 A 20 20 0 0 1 50 30 A 25 25 0 0 1 95 30 A 20 20 0 0 1 120 50 A 15 15 0 0 1 115 65 L 25 65 A 15 15 0 0 1 20 50 Z" />
          </svg>
        </div>

        {/* Cloud 2 */}
        <div className="absolute top-48 right-16 text-white/90 animate-cloud-drift-2 opacity-60">
          <svg width="160" height="80" viewBox="0 0 160 80" fill="currentColor">
            <path d="M25 55 A 22 22 0 0 1 60 35 A 30 30 0 0 1 110 35 A 22 22 0 0 1 140 55 A 16 16 0 0 1 135 72 L 30 72 A 16 16 0 0 1 25 55 Z" />
          </svg>
        </div>

        {/* Floating Hot Air Balloon */}
        <div className="absolute top-24 left-[75%] animate-float-slow opacity-80">
          <div className="relative text-3xl">
            🎈
          </div>
        </div>

        {/* Floating Paper Airplane / Kite */}
        <div className="absolute top-72 left-8 animate-wiggle text-2xl opacity-75">
          🪁
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Playful Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 border-2 border-emerald-200/80 shadow-xs mb-5 animate-bounce-kid">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wide uppercase">
                Penerimaan Peserta Didik Baru (PPDB) Ceria
              </span>
              <span className="text-base">🌈</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-emerald-950 leading-[1.15] mb-6">
              Tumbuh Cerdas, <br className="hidden sm:inline" />
              <span className="relative inline-block text-emerald-700">
                Ceria & Berakhlak
                {/* Cheerful curved underline doodle */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-amber-400"
                  viewBox="0 0 250 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11.5C65 3.5 185 3.5 247 11.5"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              di <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">SPS Salsabila</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-lg sm:text-xl text-emerald-900/80 leading-relaxed max-w-2xl mb-8 font-medium">
              Tempat terbaik ananda belajar, bermain, dan bereksplorasi dalam suasana yang{' '}
              <strong className="text-emerald-950 font-bold">menyenangkan, islami, kreatif</strong>, serta dipenuhi kasih sayang para pendidik berdedikasi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#pendaftaran"
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-extrabold text-base text-emerald-950 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 hover:from-amber-400 hover:to-yellow-500 shadow-lg shadow-amber-400/30 hover:shadow-xl hover:shadow-amber-400/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 border-2 border-white cursor-pointer group"
              >
                <HiSparkles className="w-5 h-5 text-emerald-900 group-hover:rotate-45 transition-transform" />
                <span>Daftar Sekarang Juga</span>
                <HiArrowRight className="w-5 h-5 text-emerald-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#program"
                onClick={() => playPopSound(soundEnabled)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-3xl font-bold text-base text-emerald-900 bg-white/90 hover:bg-emerald-50 border-2 border-emerald-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Lihat Program & Sentra</span>
                <span className="text-lg">🎡</span>
              </a>
            </div>

            {/* Interactive Floating Badge Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-emerald-100 shadow-xs hover:scale-105 transition-transform">
                <span className="p-1.5 rounded-xl bg-amber-100 text-amber-700 text-sm">📖</span>
                <span className="text-xs font-bold text-emerald-900">Tahfidz & Hadits</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-emerald-100 shadow-xs hover:scale-105 transition-transform">
                <span className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700 text-sm">🕌</span>
                <span className="text-xs font-bold text-emerald-900">Sentra Islami</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-emerald-100 shadow-xs hover:scale-105 transition-transform">
                <span className="p-1.5 rounded-xl bg-rose-100 text-rose-700 text-sm">🎨</span>
                <span className="text-xs font-bold text-emerald-900">Kreativitas & Cooking</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-emerald-100 shadow-xs hover:scale-105 transition-transform">
                <span className="p-1.5 rounded-xl bg-blue-100 text-blue-700 text-sm">⭐</span>
                <span className="text-xs font-bold text-emerald-900">Karakter Mandiri</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card with Interactive Smiling Sun & School Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Interactive Animated Smiling Sun */}
            <div
              onClick={handleSunClick}
              title="Klik aku untuk kejutan ceria!"
              className="absolute -top-6 -right-1 sm:-top-10 sm:-right-4 z-30 cursor-pointer group transition-transform hover:scale-110 active:scale-95"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
                {/* Sun Rays Rotating */}
                <div className="absolute inset-0 animate-sun-spin">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400 drop-shadow-md">
                    {[...Array(12)].map((_, i) => (
                      <rect
                        key={i}
                        x="46"
                        y="2"
                        width="8"
                        height="18"
                        rx="4"
                        fill="currentColor"
                        transform={`rotate(${i * 30} 50 50)`}
                      />
                    ))}
                  </svg>
                </div>

                {/* Sun Face Circle */}
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-2 border-amber-500 flex flex-col items-center justify-center shadow-lg shadow-amber-500/30">
                  <div className="flex gap-2 mb-1">
                    {sunWinking ? (
                      <>
                        <span className="w-2 h-0.5 bg-emerald-950 rounded-full inline-block"></span>
                        <span className="w-2 h-2 bg-emerald-950 rounded-full inline-block"></span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-950 rounded-full inline-block group-hover:scale-y-50 transition-transform"></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-950 rounded-full inline-block group-hover:scale-y-50 transition-transform"></span>
                      </>
                    )}
                  </div>
                  {/* Rosy Cheeks */}
                  <div className="flex justify-between w-8 sm:w-10 px-1 -mt-1">
                    <span className="w-1.5 h-1 bg-rose-400 rounded-full"></span>
                    <span className="w-1.5 h-1 bg-rose-400 rounded-full"></span>
                  </div>
                  {/* Smile */}
                  <div className="w-3 sm:w-4 h-1.5 sm:h-2 border-b-2 border-emerald-950 rounded-b-full"></div>
                </div>

                {/* Little speech hint */}
                <span className="absolute -bottom-5 bg-white text-[10px] font-bold text-amber-900 px-2 py-0.5 rounded-full border border-amber-200 shadow-xs whitespace-nowrap group-hover:inline-block">
                  Klik aku! ☀️
                </span>
              </div>
            </div>

            {/* Main Image Frame with Polaroid & Stickers */}
            <div className="relative w-full max-w-md mx-auto px-2 sm:px-0">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 sm:-inset-3 bg-gradient-to-tr from-emerald-400 via-amber-300 to-rose-300 rounded-[2.2rem] sm:rounded-[2.5rem] blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Photo Card */}
              <div className="relative bg-white p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.2rem] shadow-2xl border-4 border-white overflow-hidden">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-emerald-100">
                  <img
                    src="/assets/images/lanskap-sekolah.jpg"
                    alt="Lanskap Sekolah SPS Salsabila"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
                  
                  {/* Photo Corner Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/80 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl">🏫</span>
                      <div>
                        <p className="text-xs font-bold text-emerald-950">Lingkungan Belajar Asri</p>
                        <p className="text-[10px] font-semibold text-emerald-700">Aman, Luas & Nyaman</p>
                      </div>
                    </div>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] sm:text-[11px]">
                      SPS Salsabila
                    </span>
                  </div>
                </div>

                {/* Decorative Stickers on Frame */}
                <div className="absolute -top-3 left-6 bg-rose-400 text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-md -rotate-6 border-2 border-white">
                  ❤️ Kasih Sayang
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-400 text-emerald-950 text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-md rotate-3 border-2 border-white">
                  🎨 Kreatif & Ceria
                </div>
              </div>

              {/* Little Floating Child Quote Card */}
              <div className="absolute -bottom-5 left-1 sm:-left-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border-2 border-emerald-200 shadow-xl max-w-[200px] sm:max-w-[240px] animate-float-reverse">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] sm:text-xs">
                    ⭐
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-emerald-950">Model Sentra Islami</p>
                </div>
                <p className="text-[10px] sm:text-[11px] text-emerald-800/80 font-medium leading-tight">
                  Mengembangkan kecerdasan majemuk anak sejak usia dini.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
