import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound } from '../utils/soundEffects';
import { HiHeart, HiPhone, HiClock, HiLocationMarker, HiSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { soundEnabled } = useSelector((state) => state.ui);
  const { adminPhone, adminName } = useSelector((state) => state.registration);

  const quickLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Visi & Karakter', href: '#visi' },
    { label: 'Program Unggulan', href: '#program' },
    { label: 'Model Sentra', href: '#sentra' },
    { label: 'Galeri Foto', href: '#galeri' },
    { label: 'Jadwal & Seragam', href: '#jadwal' },
    { label: 'Pendaftaran PPDB', href: '#pendaftaran' },
  ];

  return (
    <footer className="relative bg-emerald-950 text-white pt-24 pb-12 overflow-hidden mt-12">
      
      {/* Animated Wave SVG Transition at top */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12 sm:h-16 text-[#FFFDF4]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-md">
                <img
                  src="/assets/images/logo-salsabila.png"
                  alt="Logo SPS Salsabila"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-white flex items-center gap-1.5">
                  SPS Salsabila
                  <span className="text-amber-400">✨</span>
                </span>
                <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                  Pendidikan Anak Usia Dini
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-200/90 leading-relaxed font-medium max-w-md">
              Membangun generasi cerdas, mandiri, kreatif, dan berakhlakul karimah melalui pendekatan pembelajaran model sentra yang menyenangkan dan islami.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-bold text-amber-300">
              <span>🌈</span>
              <span>Tempat belajar, bermain, dan tumbuh penuh cinta kasih.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold font-heading text-amber-300 uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={() => playPopSound(soundEnabled)}
                    className="text-emerald-200 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    👉 {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-heading text-amber-300 uppercase tracking-wider">
              Kontak & Informasi
            </h4>
            <div className="space-y-3 text-sm text-emerald-200">
              <div className="flex items-start gap-3">
                <FaWhatsapp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">WhatsApp Admin ({adminName})</p>
                  <a
                    href={`https://wa.me/${adminPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:underline"
                  >
                    0896-9186-8775
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiClock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Jam Pembelajaran</p>
                  <p className="text-xs text-emerald-300">Senin - Kamis: 07.30 - 11.00 WIB</p>
                  <p className="text-xs text-emerald-300">Jumat: 07.30 - 10.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiSparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Kelompok Usia</p>
                  <p className="text-xs text-emerald-300">Kelompok A (4-5 th) & Kelompok B (5-6 th)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-emerald-400">
          <p>© {new Date().getFullYear()} SPS Salsabila. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <span>Dibuat dengan</span>
            <HiHeart className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>untuk Buah Hati Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
