import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound } from '../utils/soundEffects';
import { HiPlay, HiSparkles, HiVideoCamera, HiExternalLink } from 'react-icons/hi';
import { FaYoutube } from 'react-icons/fa';

export default function VideoPengenalanSection() {
  const { soundEnabled } = useSelector((state) => state.ui);

  return (
    <section id="pengenalan" className="py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <FaYoutube className="text-red-600 w-4 h-4" />
            Video Profil & Pengenalan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            Kenali Suasana Ceria di SPS Salsabila
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Saksikan secara langsung lingkungan belajar yang aman, nyaman, islami, dan penuh kehangatan bersama para bunda guru.
          </p>
        </div>

        {/* Video Frame Card */}
        <div className="relative group px-1 sm:px-0">
          
          {/* Outer Glowing Gradient Ring */}
          <div className="absolute -inset-1 sm:-inset-3 bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 rounded-[2.2rem] sm:rounded-[3rem] blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>

          {/* Video Container Box */}
          <div className="relative bg-white p-3 sm:p-5 rounded-[2.2rem] sm:rounded-[2.7rem] shadow-2xl border-4 border-white overflow-hidden">
            
            {/* 16:9 Responsive Embed */}
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-emerald-950 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/V1Z9pfDhZv8?rel=0&modestbranding=1"
                title="Video Pengenalan SPS Salsabila"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Footer Caption & YouTube Link */}
            <div className="pt-4 sm:pt-5 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 rounded-xl bg-red-50 text-red-600 shadow-xs">
                  🎬
                </span>
                <div>
                  <h3 className="text-base font-bold font-heading text-emerald-950">
                    Video Pengenalan Resmi SPS Salsabila
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800/70">
                    Dipublikasikan di Channel YouTube YPI-LIA Salsabila
                  </p>
                </div>
              </div>

              <a
                href="https://youtu.be/V1Z9pfDhZv8?si=JZ4sxqHaDUc8ZcXS"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound(soundEnabled)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md hover:scale-105 transition-all duration-200"
              >
                <FaYoutube className="w-4 h-4" />
                <span>Tonton di YouTube</span>
                <HiExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Decorative Corner Badges */}
            <div className="hidden sm:block absolute -top-3 left-8 bg-amber-400 text-emerald-950 text-xs font-extrabold px-3.5 py-1 rounded-full shadow-md -rotate-3 border-2 border-white">
              ⭐ Profil Sekolah
            </div>
            <div className="hidden sm:block absolute -bottom-2 right-8 bg-emerald-500 text-white text-xs font-extrabold px-3.5 py-1 rounded-full shadow-md rotate-2 border-2 border-white">
              🎈 Belajar Sambil Bermain
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
