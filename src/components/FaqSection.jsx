import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playBubbleSound } from '../utils/soundEffects';
import { HiQuestionMarkCircle, HiChevronDown, HiSparkles } from 'react-icons/hi';

export default function FaqSection() {
  const { soundEnabled } = useSelector((state) => state.ui);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Berapa usia minimal untuk mendaftar di Kelompok A dan B?',
      a: 'Untuk Kelompok A usia minimal adalah 4 tahun per 31 Juli 2025, sedangkan untuk Kelompok B usia minimal adalah 5 tahun per 31 Juli 2025.',
      emoji: '🎂',
    },
    {
      q: 'Apa saja dokumen yang harus disiapkan saat pendaftaran?',
      a: 'Dokumen yang disiapkan meliputi: Formulir pendaftaran yang telah diisi, Fotokopi Kartu Keluarga (KK), Fotokopi Akta Kelahiran anak, dan Fotokopi KTP Ayah & Bunda.',
      emoji: '📄',
    },
    {
      q: 'Bagaimana metode pembelajaran model sentra di SPS Salsabila?',
      a: 'Model sentra membagi pembelajaran ke dalam 4 sentra tematik (Ibadah, Bahan Alam, Persiapan, Seni & Kreativitas). Anak bergantian menjelajahi sentra untuk merangsang seluruh kecerdasan majemuk tanpa rasa bosan.',
      emoji: '🏫',
    },
    {
      q: 'Apakah ada program trial class atau kunjungan sekolah untuk calon siswa?',
      a: 'Tentu saja! Ayah dan Bunda dapat menghubungi admin Ibu Novi via WhatsApp untuk menjadwalkan kunjungan sekolah dan sesi perkenalan suasana kelas bersama ananda.',
      emoji: '🤝',
    },
    {
      q: 'Apakah anak diajarkan membaca, menulis, dan berhitung (Calistung)?',
      a: 'Calistung diajarkan melalui pendekatan Sentra Persiapan yang menyenangkan, bertahap, dan berbasis visual serta motorik, sehingga ananda siap masuk SD dengan percaya diri tanpa terbebani.',
      emoji: '✏️',
    },
  ];

  const handleToggle = (idx) => {
    playBubbleSound(soundEnabled);
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiQuestionMarkCircle className="text-purple-600 w-4 h-4" />
            Tanya Jawab Seputar Sekolah
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-emerald-950 mb-3">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-emerald-900/80 text-base font-medium">
            Informasi penting yang sering ditanyakan oleh Ayah & Bunda seputar SPS Salsabila.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-300 shadow-lg'
                    : 'bg-white/80 border-emerald-100/90 shadow-sm hover:border-emerald-200'
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl p-2 rounded-xl bg-emerald-50 shadow-xs">
                      {faq.emoji}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-emerald-950">
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-800 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''
                    }`}
                  >
                    <HiChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base font-medium text-emerald-900/80 leading-relaxed border-t border-emerald-50 animate-pop-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
