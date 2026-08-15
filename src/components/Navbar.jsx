import React from 'react';
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
  HiHeart
} from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

export default function Navbar() {
  const dispatch = useDispatch();
  const { soundEnabled, mobileMenuOpen } = useSelector((state) => state.ui);

  const navLinks = [
    { name: 'Beranda', href: '#home', icon: HiHome },
    { name: 'Visi & Karakter', href: '#visi', icon: HiHeart },
    { name: 'Program', href: '#program', icon: HiAcademicCap },
    { name: 'Sentra', href: '#sentra', icon: HiBookOpen },
    { name: 'Galeri', href: '#galeri', icon: HiPhotograph },
    { name: 'Jadwal', href: '#jadwal', icon: HiCalendar },
  ];

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

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF4]/90 backdrop-blur-md border-b-2 border-emerald-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 via-amber-300 to-yellow-200 p-1 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/images/logo-salsabila.png"
                alt="Logo SPS Salsabila"
                className="w-full h-full object-contain drop-shadow-sm"
              />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-emerald-950 tracking-tight flex items-center gap-1.5 group-hover:text-emerald-700 transition-colors">
                SPS Salsabila
                <span className="text-amber-500 text-lg animate-bounce-kid">✨</span>
              </span>
              <span className="text-xs font-semibold text-emerald-700/80 -mt-1 tracking-wider uppercase">
                Pendidikan Anak Usia Dini
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-emerald-50/60 p-1.5 rounded-full border border-emerald-100/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2 rounded-full text-sm font-bold text-emerald-900/80 hover:text-emerald-800 hover:bg-white hover:shadow-sm hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Sound SFX & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Sound Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={soundEnabled ? 'Matikan Efek Suara' : 'Nyalakan Efek Suara'}
              className={`p-2.5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-1.5 text-xs font-bold ${
                soundEnabled
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-sm hover:bg-amber-200'
                  : 'bg-stone-100 text-stone-500 border-stone-200 hover:bg-stone-200'
              }`}
            >
              {soundEnabled ? (
                <>
                  <HiVolumeUp className="w-5 h-5 text-amber-600 animate-pulse" />
                  <span className="hidden xl:inline">Suara ON</span>
                </>
              ) : (
                <>
                  <HiVolumeOff className="w-5 h-5 text-stone-500" />
                  <span className="hidden xl:inline">Suara OFF</span>
                </>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#pendaftaran"
              onClick={handleLinkClick}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 hover:from-amber-400 hover:to-emerald-400 shadow-md shadow-emerald-600/15 hover:shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border-2 border-white"
            >
              <HiSparkles className="w-4 h-4 text-emerald-900 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Daftar Sekarang</span>
            </a>
          </div>

          {/* Mobile Menu & Sound Toggle Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <HiVolumeUp className="w-5 h-5" /> : <HiVolumeOff className="w-5 h-5 text-stone-400" />}
            </button>

            <button
              onClick={() => {
                playPopSound(soundEnabled);
                dispatch(toggleMobileMenu());
              }}
              className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-md hover:bg-emerald-700 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-b-4 border-amber-400 shadow-2xl p-6 transition-all animate-pop-in z-50">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Menu Navigasi</p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-emerald-950 bg-emerald-50/70 hover:bg-amber-100 hover:text-amber-950 active:scale-98 transition-all"
                >
                  <div className="p-2 rounded-xl bg-white text-emerald-600 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-2">
              <a
                href="#pendaftaran"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-emerald-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 shadow-lg text-center active:scale-95 transition-transform"
              >
                <HiSparkles className="w-5 h-5 text-emerald-900" />
                <span>Pendaftaran Santri Baru</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
