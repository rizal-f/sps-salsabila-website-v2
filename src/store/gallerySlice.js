import { createSlice } from '@reduxjs/toolkit';

const galleryItems = [
  {
    id: 1,
    title: 'Kegiatan Sentra Ibadah',
    category: 'sentra',
    description: 'Pembiasaan sholat berjamaah, wudhu, dan penanaman adab islami anak sejak usia dini.',
    image: '/assets/images/sentra-ibadah.jpeg',
    tag: 'Sentra Ibadah',
    emoji: '🕌',
  },
  {
    id: 2,
    title: 'Kegiatan Sentra Bahan Alam',
    category: 'sentra',
    description: 'Eksplorasi tekstur alami, stimulasi sensori motorik, dan belajar sains sederhana.',
    image: '/assets/images/sentra-bahan-alam.jpeg',
    tag: 'Sentra Bahan Alam',
    emoji: '🌿',
  },
  {
    id: 3,
    title: 'Kegiatan Sentra Persiapan',
    category: 'sentra',
    description: 'Melatih konsentrasi, pra-membaca, pra-menulis, dan pengenalan konsep angka.',
    image: '/assets/images/sentra-persiapan.jpg',
    tag: 'Sentra Persiapan',
    emoji: '✏️',
  },
  {
    id: 4,
    title: 'Kreasi Sentra Seni',
    category: 'kreatif',
    description: 'Aktivitas kreatif melukis, kolase, dan eksplorasi karya imajinatif anak di Sentra Seni.',
    image: '/assets/images/sentra-seni-2.jpeg',
    tag: 'Sentra Seni',
    emoji: '🎨',
  },
  {
    id: 5,
    title: 'Seni & Kreativitas',
    category: 'kreatif',
    description: 'Mengekspresikan ide, warna, dan imajinasi bebas melalui berbagai karya tangan ceria.',
    image: '/assets/images/seni-kreatifitas.jpeg',
    tag: 'Seni Kreatif',
    emoji: '🎨',
  },
  {
    id: 6,
    title: 'Fun Cooking Cilik',
    category: 'kreatif',
    description: 'Memasak sederhana yang melatih motorik halus, kemandirian, dan kerjasama tim.',
    image: '/assets/images/fun-cooking.jpeg',
    tag: 'Fun Cooking',
    emoji: '🍳',
  },
  {
    id: 7,
    title: 'Outing Class Edukatif',
    category: 'outing',
    description: 'Belajar langsung dari alam terbuka dan eksplorasi lingkungan seru di luar kelas.',
    image: '/assets/images/outing-class.jpg',
    tag: 'Outing Class',
    emoji: '🚌',
  },
  {
    id: 8,
    title: 'Outing Class Ceria',
    category: 'outing',
    description: 'Keceriaan ananda saat menjelajahi dunia luar dan belajar bersama bunda guru.',
    image: '/assets/images/outing-class-2.jpg',
    tag: 'Outing Class',
    emoji: '🚌',
  },
  {
    id: 9,
    title: 'Outing Class Manasik Haji',
    category: 'islami',
    description: 'Pengenalan rukun Islam dan praktik manasik haji anak usia dini dengan penuh suka cita.',
    image: '/assets/images/outing-class-manasik-haji.jpg',
    tag: 'Manasik Haji',
    emoji: '🕋',
  },
  {
    id: 10,
    title: 'Kebersamaan & Puncak Tema',
    category: 'belajar',
    description: 'Momen keceriaan perayaan hasil karya seni dan unjuk keberanian anak di depan orang tua.',
    image: '/assets/images/galery-3.jpg',
    tag: 'Puncak Tema',
    emoji: '🎉',
  }
];

const initialState = {
  items: galleryItems,
  selectedCategory: 'all',
  lightboxOpen: false,
  activeItemIndex: 0,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    openLightbox: (state, action) => {
      state.activeItemIndex = action.payload;
      state.lightboxOpen = true;
    },
    closeLightbox: (state) => {
      state.lightboxOpen = false;
    },
    nextLightboxItem: (state) => {
      state.activeItemIndex = (state.activeItemIndex + 1) % state.items.length;
    },
    prevLightboxItem: (state) => {
      state.activeItemIndex = (state.activeItemIndex - 1 + state.items.length) % state.items.length;
    },
  },
});

export const {
  setCategory,
  openLightbox,
  closeLightbox,
  nextLightboxItem,
  prevLightboxItem,
} = gallerySlice.actions;

export default gallerySlice.reducer;
