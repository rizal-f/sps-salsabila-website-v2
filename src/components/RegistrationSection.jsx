import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setParentName,
  setChildName,
  setChildAgeGroup,
  setCustomMessage,
  setSelectedTemplate,
  setSubmittedSuccess,
} from '../store/registrationSlice';
import { triggerConfetti } from '../store/uiSlice';
import { playPopSound, playBubbleSound, playSuccessFanfare } from '../utils/soundEffects';
import { fireSchoolCelebration } from '../utils/confetti';
import {
  HiClipboardCheck,
  HiChatAlt2,
  HiSparkles,
  HiUser,
  HiIdentification,
  HiPhone,
  HiCheckCircle,
} from 'react-icons/hi';
import { FaWhatsapp, FaChild, FaCalendarAlt } from 'react-icons/fa';

export default function RegistrationSection() {
  const dispatch = useDispatch();
  const { soundEnabled } = useSelector((state) => state.ui);
  const {
    parentName,
    childName,
    childAgeGroup,
    customMessage,
    adminPhone,
    adminName,
  } = useSelector((state) => state.registration);

  const quickChips = [
    'Saya ingin mendaftarkan anak saya untuk tahun ajaran baru.',
    'Berapa rincian biaya pendaftaran & SPP bulanan?',
    'Apakah masih ada kuota untuk kelas ananda?',
    'Saya ingin menjadwalkan kunjungan / trial class.',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessFanfare(soundEnabled);
    dispatch(triggerConfetti());
    fireSchoolCelebration();

    const pesan = `Assalamu'alaikum ${adminName}, saya ingin bertanya tentang pendaftaran SPS Salsabila.

Nama Orang Tua: ${parentName.trim() || '-'}
Nama Calon Santri: ${childName.trim() || '-'}
Kelompok: ${childAgeGroup}
Pesan / Pertanyaan: ${customMessage.trim() || 'Saya ingin mendaftar di SPS Salsabila.'}`;

    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(pesan)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="pendaftaran" className="py-20 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiSparkles className="text-amber-500 w-4 h-4" />
            Penerimaan Santri Baru (PPDB)
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            Syarat Pendaftaran & Konsultasi WhatsApp
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Proses pendaftaran mudah, cepat, dan ramah. Hubungi langsung admin kami untuk informasi kuota dan pendaftaran.
          </p>
        </div>

        {/* 2 Column Box: Requirements & WhatsApp Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Syarat Pendaftaran */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Requirements Card */}
            <div className="p-8 rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl p-3 rounded-2xl bg-amber-100 text-amber-800 shadow-xs">
                  📋
                </span>
                <div>
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    Langkah & Syarat
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-emerald-950 mt-1">
                    Syarat Pendaftaran
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {/* Point 1: Usia */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2 font-bold text-emerald-950 text-sm">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">
                      1
                    </span>
                    <h4>Kelahiran Minimal (per 31 Juli)</h4>
                  </div>
                  <ul className="text-xs sm:text-sm font-semibold text-emerald-900/80 space-y-1.5 pl-8 list-disc">
                    <li><strong className="text-emerald-950">Kelompok A:</strong> Usia 4 Tahun</li>
                    <li><strong className="text-emerald-950">Kelompok B:</strong> Usia 5 Tahun</li>
                  </ul>
                </div>

                {/* Point 2: Biaya Formulir */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
                    <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                      2
                    </span>
                    <h4>Membayar Biaya Formulir Pendaftaran</h4>
                  </div>
                </div>

                {/* Point 3: Berkas Lampiran */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2 font-bold text-emerald-950 text-sm">
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">
                      3
                    </span>
                    <h4>Mengisi Formulir & Menyerahkan Berkas:</h4>
                  </div>
                  <ul className="text-xs sm:text-sm font-semibold text-emerald-900/80 space-y-1 pl-8 list-disc">
                    <li>Fotokopi Kartu Keluarga (KK)</li>
                    <li>Fotokopi Akta Kelahiran Anak</li>
                    <li>Fotokopi KTP Ayah dan Bunda</li>
                  </ul>
                </div>

                {/* Point 4: Tata Tertib */}
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
                    <span className="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs">
                      4
                    </span>
                    <h4>Bersedia mengikuti tata tertib sekolah</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Info Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
                  👩‍🏫
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase text-amber-300 tracking-wider">
                    Admin Pendaftaran
                  </span>
                  <h4 className="text-xl font-bold font-heading">{adminName}</h4>
                  <p className="text-xs font-semibold text-emerald-100">0896-9186-8775</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${adminPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white text-emerald-700 hover:scale-110 active:scale-95 shadow-md transition-transform"
                title="Chat WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-emerald-600" />
              </a>
            </div>

          </div>

          {/* Right Column: WhatsApp Interactive Direct Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] bg-white border-2 border-emerald-100 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl p-3 rounded-2xl bg-emerald-100 text-emerald-800 shadow-xs">
                💬
              </span>
              <div>
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Respon Cepat
                </span>
                <h3 className="text-2xl font-bold font-heading text-emerald-950 mt-1">
                  Formulir Konsultasi & Pendaftaran
                </h3>
              </div>
            </div>

            {/* Quick Template Chips */}
            <div className="mb-6">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-2">
                Pilih Topik Pertanyaan Cepat:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      playBubbleSound(soundEnabled);
                      dispatch(setSelectedTemplate(chip));
                    }}
                    className={`text-xs font-bold px-3.5 py-2 rounded-2xl border transition-all cursor-pointer text-left ${
                      customMessage === chip
                        ? 'bg-amber-300 text-emerald-950 border-amber-400 shadow-xs scale-102 font-extrabold'
                        : 'bg-emerald-50/60 text-emerald-900 border-emerald-100 hover:bg-emerald-100'
                    }`}
                  >
                    ✨ {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nama Orang Tua */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-1.5">
                    Nama Ayah / Bunda
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bunda Aisyah"
                      value={parentName}
                      onChange={(e) => dispatch(setParentName(e.target.value))}
                      className="w-full px-4 py-3 rounded-2xl bg-emerald-50/40 border-2 border-emerald-100 text-emerald-950 font-bold text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Nama Anak */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-1.5">
                    Nama Calon Santri
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Fatih"
                      value={childName}
                      onChange={(e) => dispatch(setChildName(e.target.value))}
                      className="w-full px-4 py-3 rounded-2xl bg-emerald-50/40 border-2 border-emerald-100 text-emerald-950 font-bold text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>

              {/* Kelompok Pilihan */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-1.5">
                  Kelompok Kelas
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Kelompok A (4-5 Tahun)', 'Kelompok B (5-6 Tahun)'].map((kelompok) => (
                    <button
                      key={kelompok}
                      type="button"
                      onClick={() => {
                        playPopSound(soundEnabled);
                        dispatch(setChildAgeGroup(kelompok));
                      }}
                      className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                        childAgeGroup === kelompok
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-emerald-50/50 text-emerald-900 border-emerald-100 hover:bg-emerald-100/50'
                      }`}
                    >
                      {kelompok}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pesan Tambahan */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-1.5">
                  Pesan atau Pertanyaan Khusus
                </label>
                <textarea
                  rows="3"
                  value={customMessage}
                  onChange={(e) => dispatch(setCustomMessage(e.target.value))}
                  placeholder="Tuliskan pertanyaan atau rencana pendaftaran ananda..."
                  className="w-full px-4 py-3 rounded-2xl bg-emerald-50/40 border-2 border-emerald-100 text-emerald-950 font-medium text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="w-6 h-6 text-emerald-200" />
                <span>Kirim Pesan WhatsApp ke Ibu Novi</span>
                <HiSparkles className="w-5 h-5 text-amber-300" />
              </button>

              <p className="text-center text-[11px] font-semibold text-emerald-800/70 pt-1">
                🔒 Data Anda aman dan akan langsung terhubung ke WhatsApp resmi Ibu Novi.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
