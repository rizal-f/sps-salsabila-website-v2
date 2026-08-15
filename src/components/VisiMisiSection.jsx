import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playPopSound, playBubbleSound } from '../utils/soundEffects';
import { HiCheck, HiSparkles, HiHeart, HiStar } from 'react-icons/hi';

export default function VisiMisiSection() {
  const { soundEnabled } = useSelector((state) => state.ui);
  const [activeCharacter, setActiveCharacter] = useState(0);

  const missions = [
    'Menanamkan pendidikan agama sejak dini melalui keteladanan akhlak mulia.',
    'Memberikan kesempatan seluas-luasnya kepada peserta didik untuk mengembangkan potensi & bakat alami.',
    'Mengembangkan berbagai kecakapan hidup (life skills) melalui pembiasaan positif sehari-hari.',
    'Menyelenggarakan proses pembelajaran melalui kegiatan bermain yang kreatif, inovatif, dan menyenangkan.',
  ];

  const characters = [
    {
      id: 0,
      title: 'Kemandirian',
      emoji: '🌱',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      badgeColor: 'bg-emerald-500 text-white',
      desc: 'Membiasakan ananda mandiri dalam merapikan barang, makan, berwudhu, serta berani mengambil keputusan sederhana.',
    },
    {
      id: 1,
      title: 'Kepemimpinan',
      emoji: '🧭',
      color: 'bg-amber-50 border-amber-300 text-amber-900',
      badgeColor: 'bg-amber-500 text-white',
      desc: 'Menumbuhkan rasa percaya diri, keberanian berbicara di depan kelas, dan memimpin barisan dengan sikap santun.',
    },
    {
      id: 2,
      title: 'Kreativitas',
      emoji: '🎨',
      color: 'bg-rose-50 border-rose-300 text-rose-900',
      badgeColor: 'bg-rose-500 text-white',
      desc: 'Mengeksplorasi imajinasi tanpa batas lewat seni lukis, bermain peran, membuat hasta karya, dan olah rasa.',
    },
    {
      id: 3,
      title: 'Kerjasama',
      emoji: '🤝',
      color: 'bg-blue-50 border-blue-300 text-blue-900',
      badgeColor: 'bg-blue-500 text-white',
      desc: 'Mengasah empati, berbagi mainan, saling tolong menolong, dan bersahabat erat dengan teman-teman sebaya.',
    },
  ];

  return (
    <section id="visi" className="py-20 relative bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
      
      {/* Decorative Floating Emojis */}
      <div className="absolute top-10 left-6 text-2xl animate-float-slow opacity-40">⭐</div>
      <div className="absolute bottom-10 right-8 text-2xl animate-float-reverse opacity-40">🌱</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiHeart className="text-rose-500 w-4 h-4" />
            Fondasi & Arah Pendidikan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            Visi, Misi & 4 Karakter Utama
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Membimbing buah hati Anda menjadi pribadi cerdas berakhlak mulia dengan metode sentra yang penuh keceriaan.
          </p>
        </div>

        {/* Visi & Misi Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Visi Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Background pattern */}
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-6 border border-white/20">
                <HiSparkles className="w-4 h-4 text-amber-300" />
                Visi Sekolah
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-snug mb-6">
                “Terbentuknya generasi yang berakhlakul karimah, cerdas, mandiri, dan kreatif.”
              </h3>
            </div>

            <div className="pt-6 border-t border-emerald-500/40 flex items-center gap-3">
              <span className="text-3xl">🌟</span>
              <p className="text-xs font-semibold text-emerald-100">
                SPS Salsabila membina kecerdasan spiritual, intelektual, dan sosial sejak dini.
              </p>
            </div>
          </div>

          {/* Misi Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-xl relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-6 border border-amber-200">
              <HiStar className="w-4 h-4 text-amber-600" />
              Misi Pendidikan
            </div>

            <div className="space-y-4">
              {missions.map((misi, idx) => (
                <div
                  key={idx}
                  onClick={() => playPopSound(soundEnabled)}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 hover:bg-emerald-100/60 border border-emerald-100/80 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Karakter Utama Ceria */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-emerald-950">
              4 Nilai Karakter Utama Ananda
            </h3>
            <p className="text-sm font-semibold text-emerald-800/70 mt-1">
              Sentuh atau klik kartu untuk melihat pembiasaan di sekolah
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => {
              const isSelected = activeCharacter === index;
              return (
                <div
                  key={char.id}
                  onClick={() => {
                    playBubbleSound(soundEnabled);
                    setActiveCharacter(index);
                  }}
                  className={`p-6 sm:p-7 rounded-[2rem] border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `${char.color} shadow-xl scale-102 ring-4 ring-emerald-300/40`
                      : 'bg-white border-emerald-100/90 shadow-md hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl p-2 rounded-2xl bg-white shadow-xs animate-wiggle">
                      {char.emoji}
                    </span>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${char.badgeColor}`}>
                      Karakter #{index + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-emerald-950 mb-2">
                    {char.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-emerald-900/80 leading-relaxed">
                    {char.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
