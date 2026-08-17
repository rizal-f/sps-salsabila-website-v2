import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  openLightbox,
  closeLightbox,
  nextLightboxItem,
  prevLightboxItem,
} from '../store/gallerySlice';
import { playPopSound, playBubbleSound, playChimeSound } from '../utils/soundEffects';
import {
  HiPhotograph,
  HiX,
  HiChevronLeft,
  HiChevronRight,
  HiSparkles,
  HiZoomIn,
} from 'react-icons/hi';

export default function GallerySection() {
  const dispatch = useDispatch();
  const { soundEnabled } = useSelector((state) => state.ui);
  const { items, selectedCategory, lightboxOpen, activeItemIndex } = useSelector(
    (state) => state.gallery
  );

  const categories = [
    { id: 'all', label: 'Semua Momen', emoji: '✨' },
    { id: 'sentra', label: 'Sentra & Kelas', emoji: '🏫' },
    { id: 'kreatif', label: 'Seni & Cooking', emoji: '🎨' },
    { id: 'outing', label: 'Outing Class', emoji: '🚌' },
    { id: 'islami', label: 'Islami & Manasik', emoji: '🕋' },
    { id: 'belajar', label: 'Belajar Ceria', emoji: '📖' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const activeItem = items[activeItemIndex] || items[0];

  const handleFilterClick = (catId) => {
    playPopSound(soundEnabled);
    dispatch(setCategory(catId));
  };

  const handleImageClick = (globalIndex) => {
    playChimeSound(soundEnabled);
    dispatch(openLightbox(globalIndex));
  };

  return (
    <section id="galeri" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <HiPhotograph className="text-rose-500 w-4 h-4" />
            Dokumentasi & Galeri Ceria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-emerald-950 mb-4">
            Momen Bahagia di SPS Salsabila
          </h2>
          <p className="text-emerald-900/80 text-base sm:text-lg font-medium">
            Setiap hari adalah petualangan baru penuh tawa, ilmu berharga, dan kenangan indah yang tak terlupakan bagi buah hati tercinta.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md scale-105 shadow-emerald-600/30'
                    : 'bg-white text-emerald-900/80 hover:bg-emerald-50 border border-emerald-100 shadow-xs'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            // Find global index in items
            const globalIndex = items.findIndex((i) => i.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => handleImageClick(globalIndex)}
                className="group relative rounded-3xl bg-white p-3 border-2 border-emerald-100/90 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center gap-2 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <HiZoomIn className="w-4 h-4 text-amber-300" />
                      <span>Perbesar Foto</span>
                    </div>
                  </div>

                  <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-950 text-[11px] font-extrabold shadow-xs">
                    {item.emoji} {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-base font-bold font-heading text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-900/70 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Redux Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-pop-in">
          {/* Close Button */}
          <button
            onClick={() => {
              playPopSound(soundEnabled);
              dispatch(closeLightbox());
            }}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer z-50"
            aria-label="Tutup Galeri"
          >
            <HiX className="w-7 h-7" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playPopSound(soundEnabled);
              dispatch(prevLightboxItem());
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer z-50 hover:scale-110"
            aria-label="Foto Sebelumnya"
          >
            <HiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playPopSound(soundEnabled);
              dispatch(nextLightboxItem());
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer z-50 hover:scale-110"
            aria-label="Foto Selanjutnya"
          >
            <HiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transition-all flex flex-col md:flex-row"
          >
            {/* Image Preview */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Meta Info */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFDF4]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs">
                    {activeItem.emoji} {activeItem.tag}
                  </span>
                  <span className="text-xs font-bold text-emerald-800">
                    {activeItemIndex + 1} dari {items.length}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-emerald-950 mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-sm font-semibold text-emerald-900/80 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">
                  SPS Salsabila Dokumentasi
                </span>
                <span className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900">
                  Taman Kanak-kanak Ceria
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
