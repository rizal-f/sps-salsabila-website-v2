import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound, playBubbleSound } from '../utils/soundEffects';
import { HiSparkles, HiStar, HiHeart } from 'react-icons/hi';

export default function ProgramSection() {
  const { soundEnabled } = useSelector((state) => state.ui);

  const programs = [
    {
      title: 'Menghafal Hadits Pilihan',
      category: 'Karakter & Adab',
      desc: 'Hadits pendek tentang kasih sayang, kebersihan, berbuat baik, dan senyum melalui lagu ceria.',
      emoji: '📚',
      bgGradient: 'from-amber-100 to-yellow-50',
      borderColor: 'border-amber-200',
      badgeBg: 'bg-amber-500 text-white',
      accentColor: 'text-amber-900',
    },
    {
      title: 'Menghafal Al-Quran (Tahfidz)',
      category: 'Spiritual Al-Quran',
      desc: 'Pengenalan dan hafalan surat-surat pendek Juz ‘Amma dengan metode talaqqi yang ramah anak.',
      emoji: '🕋',
      bgGradient: 'from-emerald-100 to-teal-50',
      borderColor: 'border-emerald-200',
      badgeBg: 'bg-emerald-600 text-white',
      accentColor: 'text-emerald-950',
    },
    {
      title: 'Sentra Terpadu',
      category: 'Sentra & Motorik',
      desc: 'Sentra Ibadah, Sentra Bahan Alam, Sentra Persiapan, dan Sentra Seni untuk kecerdasan majemuk.',
      emoji: '🏫',
      bgGradient: 'from-blue-100 to-sky-50',
      borderColor: 'border-blue-200',
      badgeBg: 'bg-blue-600 text-white',
      accentColor: 'text-blue-950',
    },
    {
      title: 'Fun Cooking Cilik',
      category: 'Kreativitas & Mandiri',
      desc: 'Praktik membuat bekal sehat, melatih motorik halus, mengenal bahan makanan, dan kerjasama.',
      emoji: '🍳',
      bgGradient: 'from-rose-100 to-pink-50',
      borderColor: 'border-rose-200',
      badgeBg: 'bg-rose-500 text-white',
      accentColor: 'text-rose-950',
    },
    {
      title: 'Menghafal Asmaul Husna',
      category: 'Pondasi Tauhid',
      desc: 'Mengenal 99 nama keagungan Allah SWT dengan lantunan irama yang merdu dan menyenangkan.',
      emoji: '✨',
      bgGradient: 'from-purple-100 to-fuchsia-50',
      borderColor: 'border-purple-200',
      badgeBg: 'bg-purple-600 text-white',
      accentColor: 'text-purple-950',
    },
    {
      title: 'Sanlat Ramadhan Ceria',
      category: 'Event Tahunan',
      desc: 'Pesantren kilat di bulan suci Ramadhan, mendongeng kisah para Nabi, dan berbagi takjil.',
      emoji: '🌙',
      bgGradient: 'from-teal-100 to-emerald-50',
      borderColor: 'border-teal-200',
      badgeBg: 'bg-teal-600 text-white',
      accentColor: 'text-teal-950',
    },
    {
      title: 'Outing Class Edukatif',
      category: 'Eksplorasi Alam',
      desc: 'Kegiatan belajar kontekstual di luar kelas mengunjungi tempat wisata edukasi & pengenalan profesi.',
      emoji: '🚌',
      bgGradient: 'from-orange-100 to-amber-50',
      borderColor: 'border-orange-200',
      badgeBg: 'bg-orange-500 text-white',
      accentColor: 'text-orange-950',
    },
    {
      title: 'Puncak Tema & Pentas Seni',
      category: 'Unjuk Bakat',
      desc: 'Pameran hasil karya seni anak, festival kostum, dan panggung keberanian di hadapan orang tua.',
      emoji: '🎉',
      bgGradient: 'from-lime-100 to-yellow-50',
      borderColor: 'border-lime-200',
      badgeBg: 'bg-lime-600 text-white',
      accentColor: 'text-lime-950',
    },
  ];

  return (
    <section id="program" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiStar className="text-amber-500 w-4 h-4" />
            Aktivitas Unggulan Sekolah
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            8 Program Unggulan SPS Salsabila
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Ragam kegiatan interaktif yang dirancang untuk merangsang aspek kognitif, motorik, sosial, dan spiritual ananda.
          </p>
        </div>

        {/* 8 Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => (
            <div
              key={index}
              onClick={() => playBubbleSound(soundEnabled)}
              className={`p-6 rounded-[2rem] bg-gradient-to-br ${prog.bgGradient} border-2 ${prog.borderColor} shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl p-2 rounded-2xl bg-white shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {prog.emoji}
                  </span>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${prog.badgeBg}`}>
                    {prog.category}
                  </span>
                </div>

                <h3 className={`text-xl font-bold font-heading ${prog.accentColor} mb-2 leading-snug`}>
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-emerald-900/75 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-950/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-800">
                  Program #{index + 1}
                </span>
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  🎈
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
