import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSound, toggleMobileMenu, setMobileMenuOpen } from '../store/uiSlice';
import { playPopSound } from '../utils/soundEffects';
import {
  HiVolumeUp,
  HiVolumeOff,
  HiMenuAlt3,
  HiX,
  HiSparkles,
  HiHome,
  HiBookOpen,
  HiAcademicCap,
  HiPhotograph,
  HiCalendar,
  HiHeart,
  HiVideoCamera,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi';

export default function Navbar() {
  const dispatch = useDispatch();
  const { soundEnabled, mobileMenuOpen, activeSection } = useSelector((state) => state.ui);
  const navRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home', icon: HiHome },
    { name: 'Pengenalan', href: '#pengenalan', id: 'pengenalan', icon: HiVideoCamera },
    { name: 'Visi & Karakter', href: '#visi', id: 'visi', icon: HiHeart },
    { name: 'Program', href: '#program', id: 'program', icon: HiAcademicCap },
    { name: 'Sentra', href: '#sentra', id: 'sentra', icon: HiBookOpen },
    { name: 'Galeri', href: '#galeri', id: 'galeri', icon: HiPhotograph },
    { name: 'Jadwal', href: '#jadwal', id: 'jadwal', icon: HiCalendar },
  ];

  // Check scroll position to display left/right fade cues
  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleLinkClick = () => {
    playPopSound(soundEnabled);
    dispatch(setMobileMenuOpen(false));
  };

  const handleSoundToggle = () => {
    dispatch(toggleSound());
    if (!soundEnabled) {
      setTimeout(() => playPopSound(true), 50);
    }
  };

  const scrollNav = (direction) => {
    if (navRef.current) {
      const offset = direction === 'left' ? -150 : 150;
      navRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF4]/95 backdrop-blur-md border-b-2 border-emerald-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
          
          {/* Brand Logo - Compact & Sleek */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none flex-shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-emerald-400 via-amber-300 to-yellow-200 p-0.5 sm:p-1 shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <img
                src="/assets/images/logo-salsabila.png"
                alt="Logo SPS Salsabila"
                className="w-full h-full object-contain drop-shadow-xs"
              />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-heading text-emerald-950 tracking-tight flex items-center gap-1 leading-none group-hover:text-emerald-700 transition-colors">
                SPS Salsabila
                <span className="text-amber-500 text-xs sm:text-sm animate-bounce-kid">✨</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-700/80 tracking-wider uppercase mt-0.5">
                Pendidikan Anak Usia Dini
              </span>
            </div>
          </a>

          {/* Horizontally Scrollable Sleek Tabs Bar */}
          <div className="relative hidden md:flex items-center flex-1 min-w-0 max-w-2xl mx-1 sm:mx-2">
            
            {/* Left Scroll Indicator Button */}
            {canScrollLeft && (
              <button
                onClick={() => scrollNav('left')}
                className="absolute -left-2 z-10 p-1 rounded-full bg-white/95 border border-emerald-200 shadow-md text-emerald-800 hover:bg-emerald-50 hover:scale-110 transition-all cursor-pointer"
                title="Geser Kiri"
              >
                <HiChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Scrollable Navigation Strip */}
            <nav
              ref={navRef}
              onScroll={checkScroll}
              className="w-full flex items-center gap-1.5 p-1 bg-emerald-50/80 rounded-full border border-emerald-200/70 shadow-inner overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap touch-pan-x"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 select-none ${
                      isActive
                        ? 'bg-white text-emerald-900 shadow-xs border border-emerald-100/90 scale-102 font-black'
                        : 'text-emerald-900/75 hover:text-emerald-950 hover:bg-white/80 hover:shadow-2xs'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Scroll Indicator Button */}
            {canScrollRight && (
              <button
                onClick={() => scrollNav('right')}
                className="absolute -right-2 z-10 p-1 rounded-full bg-white/95 border border-emerald-200 shadow-md text-emerald-800 hover:bg-emerald-50 hover:scale-110 transition-all cursor-pointer"
                title="Geser Kanan"
              >
                <HiChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action Buttons: Sound SFX & CTA - Compact & Slim */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {/* Sound Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={soundEnabled ? 'Matikan Efek Suara' : 'Nyalakan Efek Suara'}
              className={`p-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-bold ${
                soundEnabled
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs hover:bg-amber-200'
                  : 'bg-stone-100 text-stone-500 border-stone-200 hover:bg-stone-200'
              }`}
            >
              {soundEnabled ? (
                <>
                  <HiVolumeUp className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="hidden xl:inline text-[11px]">Suara ON</span>
                </>
              ) : (
                <>
                  <HiVolumeOff className="w-4 h-4 text-stone-500" />
                  <span className="hidden xl:inline text-[11px]">Suara OFF</span>
                </>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#pendaftaran"
              onClick={handleLinkClick}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2 rounded-full font-extrabold text-xs sm:text-sm text-emerald-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 hover:from-amber-400 hover:to-emerald-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white whitespace-nowrap"
            >
              <HiSparkles className="w-3.5 h-3.5 text-emerald-900" />
              <span>Daftar Sekarang</span>
            </a>
          </div>

          {/* Mobile Menu & Sound Toggle Trigger */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <HiVolumeUp className="w-4 h-4" /> : <HiVolumeOff className="w-4 h-4 text-stone-400" />}
            </button>

            <button
              onClick={() => {
                playPopSound(soundEnabled);
                dispatch(toggleMobileMenu());
              }}
              className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-b-4 border-amber-400 shadow-2xl p-5 transition-all animate-pop-in z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Menu Navigasi</p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-300 text-emerald-950 shadow-xs font-extrabold'
                      : 'text-emerald-950 bg-emerald-50/70 hover:bg-amber-100 hover:text-amber-950 active:scale-98'
                  }`}
                >
                  <div className="p-1.5 rounded-xl bg-white text-emerald-600 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-2">
              <a
                href="#pendaftaran"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-emerald-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 shadow-md text-center active:scale-95 transition-transform text-sm"
              >
                <HiSparkles className="w-4 h-4 text-emerald-900" />
                <span>Pendaftaran Santri Baru</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
