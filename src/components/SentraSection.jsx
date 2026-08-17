import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playPopSound, playBubbleSound } from '../utils/soundEffects';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';

export default function SentraSection() {
  const { soundEnabled } = useSelector((state) => state.ui);
  const [activeSentra, setActiveSentra] = useState(0);

  const sentraList = [
    {
      id: 0,
      title: 'Sentra Ibadah',
      emoji: '🕌',
      badge: 'Spiritual & Karakter',
      color: 'from-emerald-500 to-teal-700',
      tabColor: 'border-emerald-500 bg-emerald-50 text-emerald-950',
      summary: 'Menumbuhkan kecintaan ananda kepada Allah SWT dan Rasulullah SAW sejak usia emas.',
      points: [
        'Praktik wudhu & sholat dhuha / dzuhur berjamaah dengan tertib',
        'Menghafal doa sehari-hari (sebelum makan, tidur, keluar rumah, dll)',
        'Mengenal huruf hijaiyah dan kisah teladan 25 Nabi & Rasul',
        'Pembiasaan kalimat thoyyibah (Bismillah, Alhamdulillah, Subhanallah)'
      ],
      funActivity: 'Simulasi Manasik Haji cilik & hafalan hadits adab makan!'
    },
    {
      id: 1,
      title: 'Sentra Bahan Alam',
      emoji: '🌿',
      badge: 'Sensori & Sains',
      color: 'from-amber-500 to-yellow-700',
      tabColor: 'border-amber-500 bg-amber-50 text-amber-950',
      summary: 'Eksplorasi tekstur alami dan fenomena alam untuk mengasah rasa ingin tahu ilmiah ananda.',
      points: [
        'Bermain tekstur pasir kinetik, air, biji-bijian, daun kering, dan spons',
        'Eksperimen sains sederhana (mencampur warna air, benda terapung/tenggelam)',
        'Melatih sensori motorik halus dan koordinasi tangan-mata anak',
        'Membangun kesadaran mencintai dan menjaga kebersihan alam sekitar'
      ],
      funActivity: 'Menanam bibit tanaman hijau di pot mini buatan sendiri!'
    },
    {
      id: 2,
      title: 'Sentra Persiapan',
      emoji: '✏️',
      badge: 'Kognitif & Pra-Calistung',
      color: 'from-blue-500 to-indigo-700',
      tabColor: 'border-blue-500 bg-blue-50 text-blue-950',
      summary: 'Mempersiapkan ananda menyongsong jenjang Sekolah Dasar (SD) dengan gembira tanpa beban stres.',
      points: [
        'Pra-membaca & literasi melalui kartu bergambar (flashcards)',
        'Pra-menulis melalui tracing garis, labirin, dan puzzle huruf',
        'Pengenalan konsep angka, berhitung jumlah benda, dan klasifikasi pola',
        'Melatih konsentrasi, daya fokus, dan logika berpikir runut'
      ],
      funActivity: 'Permainan tebak kata rahasia & merangkai balok geometri!'
    },
    {
      id: 3,
      title: 'Sentra Seni & Kreativitas',
      emoji: '🎨',
      badge: 'Estetika & Motorik Halus',
      color: 'from-rose-500 to-pink-700',
      tabColor: 'border-rose-500 bg-rose-50 text-rose-950',
      summary: 'Wadah kebebasan berekspresi, menuangkan ide, dan mengasah kepekaan estetika seni.',
      points: [
        'Melukis dengan kuas, finger painting, dan teknik cap spons warna',
        'Membentuk benda 3D dengan plastisin / playdough buatan sendiri',
        'Melipat kertas origami, menempel kolase, dan membuat hasta karya unik',
        'Bermain peran (*role play*) dan bernyanyi dengan alat musik perkusi mini'
      ],
      funActivity: 'Pameran galeri karya cilik saat puncak tema semester!'
    }
  ];

  const current = sentraList[activeSentra];

  return (
    <section id="sentra" className="py-20 relative bg-[#F6FBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiSparkles className="text-amber-500 w-4 h-4" />
            Pendekatan Sentra Modern
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            4 Model Sentra Pembelajaran
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            SPS Salsabila menggunakan pendekatan pembelajaran sentra terpadu yang memfasilitasi seluruh dimensi kecerdasan majemuk (*multiple intelligences*) anak.
          </p>
        </div>

        {/* Sentra Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {sentraList.map((sentra, idx) => {
            const isActive = activeSentra === idx;
            return (
              <button
                key={sentra.id}
                onClick={() => {
                  playPopSound(soundEnabled);
                  setActiveSentra(idx);
                }}
                className={`p-4 sm:p-5 rounded-3xl border-3 font-bold transition-all duration-300 flex items-center gap-3 cursor-pointer text-left ${
                  isActive
                    ? `${sentra.tabColor} shadow-lg scale-102 ring-2 ring-emerald-400/50`
                    : 'bg-white border-emerald-100 text-emerald-900/70 hover:bg-white hover:text-emerald-950 hover:shadow-md'
                }`}
              >
                <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-white shadow-xs">
                  {sentra.emoji}
                </span>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold block text-emerald-600">
                    Sentra #{idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold font-heading block">
                    {sentra.title.replace('Sentra ', '')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sentra Showcase Display Card */}
        <div className="rounded-[2.5rem] bg-white p-6 sm:p-10 border-2 border-emerald-100 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description & Bullet Points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl p-3 rounded-2xl bg-emerald-100 text-emerald-800 shadow-xs">
                  {current.emoji}
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {current.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-emerald-950 mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg font-semibold text-emerald-900/85 leading-relaxed">
                {current.summary}
              </p>

              {/* Points list */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  Fokus Pembiasaan & Kegiatan:
                </p>
                {current.points.map((point, index) => (
                  <div
                    key={index}
                    onClick={() => playBubbleSound(soundEnabled)}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/60 hover:bg-emerald-100/50 border border-emerald-100/80 transition-colors cursor-pointer"
                  >
                    <HiCheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-emerald-950">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Fun Highlight Card */}
            <div className="lg:col-span-5">
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${current.color} text-white shadow-xl flex flex-col justify-between h-full relative overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 text-8xl opacity-15">
                  {current.emoji}
                </div>

                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4">
                    ✨ Aktivitas Favorit Santri
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 leading-snug">
                    {current.funActivity}
                  </h4>
                  <p className="text-sm font-medium text-emerald-100 leading-relaxed">
                    Setiap ananda bergantian mengeksplorasi sentra dengan bimbingan bunda guru secara personal dan penuh kasih sayang.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-emerald-100">
                  <span>SPS Salsabila</span>
                  <span>Belajar Sambil Bermain 🎈</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
