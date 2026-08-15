import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound } from '../utils/soundEffects';

export default function QuickStats() {
  const { soundEnabled } = useSelector((state) => state.ui);

  const stats = [
    {
      icon: '🕌',
      badge: 'Nilai Karakter',
      value: '100%',
      label: 'Berbasis Akhlak Islami',
      desc: 'Hadits, Al-Quran & Doa Harian',
      color: 'from-emerald-500/10 to-teal-500/20',
      border: 'border-emerald-200',
      textAccent: 'text-emerald-700',
    },
    {
      icon: '🎪',
      badge: 'Aktivitas Seru',
      value: '8+',
      label: 'Program Unggulan',
      desc: 'Cooking, Outing, Sentra & Sanlat',
      color: 'from-amber-500/10 to-yellow-500/20',
      border: 'border-amber-200',
      textAccent: 'text-amber-700',
    },
    {
      icon: '🧩',
      badge: 'Metode Modern',
      value: '4',
      label: 'Sentra Terpadu',
      desc: 'Ibadah, Bahan Alam, Seni, Persiapan',
      color: 'from-blue-500/10 to-sky-500/20',
      border: 'border-blue-200',
      textAccent: 'text-blue-700',
    },
    {
      icon: '❤️',
      badge: 'Dedikasi Guru',
      value: '100%',
      label: 'Penuh Kasih Sayang',
      desc: 'Pendidik Ramah & Berpengalaman',
      color: 'from-rose-500/10 to-pink-500/20',
      border: 'border-rose-200',
      textAccent: 'text-rose-700',
    },
  ];

  return (
    <section className="relative py-8 -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              onClick={() => playPopSound(soundEnabled)}
              className={`p-6 rounded-3xl bg-gradient-to-br ${item.color} bg-white/90 backdrop-blur-md border-2 ${item.border} shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-2.5 rounded-2xl bg-white shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 border border-emerald-100 text-emerald-900">
                  {item.badge}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-950 mb-1">
                {item.value}
              </div>
              <h3 className={`text-base font-bold ${item.textAccent} mb-1`}>
                {item.label}
              </h3>
              <p className="text-xs font-semibold text-emerald-900/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
