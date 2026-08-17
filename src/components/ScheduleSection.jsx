import React from 'react';
import { useSelector } from 'react-redux';
import { playPopSound } from '../utils/soundEffects';
import { HiCalendar, HiClock, HiSparkles } from 'react-icons/hi';
import { FaTshirt } from 'react-icons/fa';

export default function ScheduleSection() {
  const { soundEnabled } = useSelector((state) => state.ui);

  const uniforms = [
    {
      day: 'Senin',
      name: 'Seragam Kotak Ungu',
      emoji: '🟪',
      color: 'bg-purple-100 text-purple-900 border-purple-200',
      badge: 'Upacara / Pembiasaan',
    },
    {
      day: 'Selasa',
      name: 'Seragam Olahraga',
      emoji: '🏃‍♂️',
      color: 'bg-amber-100 text-amber-900 border-amber-200',
      badge: 'Senam & Motorik Kasar',
    },
    {
      day: 'Rabu',
      name: 'Kebaya & Pangsi',
      emoji: '🥻',
      color: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      badge: 'Pakaian Adat & Budaya',
    },
    {
      day: 'Kamis',
      name: 'Seragam Batik',
      emoji: '🌺',
      color: 'bg-rose-100 text-rose-900 border-rose-200',
      badge: 'Budaya & Karakter',
    },
    {
      day: 'Jumat',
      name: 'Baju Muslim Putih',
      emoji: '🕌',
      color: 'bg-sky-100 text-sky-900 border-sky-200',
      badge: 'Jumat Berkah & Tahfidz',
    },
  ];

  return (
    <section id="jadwal" className="py-20 relative bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiCalendar className="text-blue-600 w-4 h-4" />
            Agenda & Rutinitas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            Waktu Belajar & Jadwal Seragam
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Jadwal kegiatan belajar yang teratur untuk membangun kedisiplinan dan rasa nyaman ananda setiap hari.
          </p>
        </div>

        {/* Two Columns: Waktu Belajar & Jadwal Seragam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Waktu Belajar Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl p-3 rounded-2xl bg-amber-100 text-amber-700 shadow-xs">
                  ⏰
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    Jam Operasional
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-emerald-950 mt-1">
                    Waktu Belajar
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-200 text-emerald-950 font-bold text-sm mb-6 flex items-center justify-between">
                <span>Kelompok Belajar:</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-extrabold text-emerald-800 shadow-xs">
                  Kelompok A & Kelompok B
                </span>
              </div>

              {/* Time Slots */}
              <div className="space-y-4">
                <div
                  onClick={() => playPopSound(soundEnabled)}
                  className="p-5 rounded-2xl bg-[#FFFDF4] border-2 border-amber-200 shadow-xs hover:shadow-md transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h4 className="text-base font-bold text-emerald-950">Senin — Kamis</h4>
                      <p className="text-xs font-semibold text-emerald-800/70">Pembelajaran Sentra Penuh</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-amber-400 text-emerald-950 font-extrabold text-sm shadow-xs">
                      07.30 - 11.00 WIB
                    </span>
                  </div>
                </div>

                <div
                  onClick={() => playPopSound(soundEnabled)}
                  className="p-5 rounded-2xl bg-[#FFFDF4] border-2 border-emerald-200 shadow-xs hover:shadow-md transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕌</span>
                    <div>
                      <h4 className="text-base font-bold text-emerald-950">Jumat</h4>
                      <p className="text-xs font-semibold text-emerald-800/70">Ibadah & Karakter Islami</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-extrabold text-sm shadow-xs">
                      07.30 - 10.00 WIB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
              <span>🔔</span>
              <span>Diharapkan hadir 10 menit sebelum jam pelajaran dimulai.</span>
            </div>
          </div>

          {/* Jadwal Seragam Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl p-3 rounded-2xl bg-rose-100 text-rose-700 shadow-xs">
                  👕
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-200">
                    Kerapian & Ceria
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-emerald-950 mt-1">
                    Jadwal Pemakaian Seragam
                  </h3>
                </div>
              </div>

              {/* Uniform Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {uniforms.map((u, i) => (
                  <div
                    key={i}
                    onClick={() => playPopSound(soundEnabled)}
                    className={`p-4 rounded-2xl border-2 ${u.color} shadow-xs hover:shadow-md hover:scale-102 transition-all cursor-pointer flex items-center gap-3.5`}
                  >
                    <span className="text-3xl p-2 rounded-xl bg-white shadow-xs">
                      {u.emoji}
                    </span>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wide opacity-80 block">
                        {u.day}
                      </span>
                      <h4 className="text-sm font-extrabold font-heading block">
                        {u.name}
                      </h4>
                      <span className="text-[11px] font-semibold opacity-90 block mt-0.5">
                        {u.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>✨ Nyaman untuk bergerak dan bermain aktif</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                SPS Salsabila
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
