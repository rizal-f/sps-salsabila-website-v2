import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound } from '../utils/soundEffects';
import { HiSparkles, HiBookOpen, HiCheckCircle } from 'react-icons/hi';
import { FaGraduationCap, FaQuran } from 'react-icons/fa';

export default function KurikulumSection() {
  const { soundEnabled } = useSelector((state) => state.ui);

  const highlights = [
    {
      title: 'Kurikulum Nasional Terpadu',
      desc: 'Disesuaikan dengan tahap tumbuh kembang anak usia dini dan standar pendidikan nasional modern.',
      icon: '📖',
      color: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'Integrasi Nilai-Nilai Islami',
      desc: 'Pembiasaan doa harian, hadits adab makan & sopan santun, serta baca tulis huruf hijaiyah.',
      icon: '🕋',
      color: 'bg-amber-100 text-amber-800',
    },
    {
      title: 'Tahfidz & Asmaul Husna Ceria',
      desc: 'Menghafal surat pendek Juz 30 dan 99 Asmaul Husna dengan metode irama lagu yang mudah diingat anak.',
      icon: '✨',
      color: 'bg-teal-100 text-teal-800',
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-[3rem] bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 p-8 sm:p-12 shadow-2xl border-4 border-white overflow-hidden">
          
          {/* Background Doodles & Shapes */}
          <div className="absolute top-4 right-10 text-4xl opacity-30 animate-sun-spin">☀️</div>
          <div className="absolute bottom-4 left-6 text-3xl opacity-30 animate-bounce-kid">🎈</div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-emerald-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-xs">
              <HiSparkles className="text-amber-500 w-4 h-4" />
              Kurikulum Berbasis Karakter
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4 leading-tight">
              Kurikulum Nasional Berpadu Nilai Islami yang Menyenangkan
            </h2>

            <p className="text-base sm:text-lg font-medium text-emerald-900/90 leading-relaxed mb-8">
              Kurikulum SPS Salsabila menggabungkan standar Kurikulum Nasional dengan kekayaan adab dan nilai-nilai Al-Qur'an. Anak-anak diajak belajar melalui metode bermain aktif (*learning through playing*) yang menstimulasi rasa ingin tahu dan cinta belajar sejak dini.
            </p>

            {/* 3 Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  onClick={() => playPopSound(soundEnabled)}
                  className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border-2 border-white/80 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${item.color}`}>
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-bold text-emerald-950 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-emerald-900/70 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
