import { createSlice } from '@reduxjs/toolkit';

const galleryItems = [
  {
    id: 1,
    title: 'Kegiatan Belajar Ceria',
    category: 'belajar',
    description: 'Anak-anak belajar dengan suasana aktif, gembira, dan interaktif.',
    image: '/assets/images/kegiatan-belajar.jpg',
    tag: 'Sentra Persiapan',
    emoji: '📖',
  },
  {
    id: 2,
    title: 'Kegiatan Model Sentra',
    category: 'sentra',
    description: 'Pembelajaran aktif melalui pendekatan model sentra yang komprehensif.',
    image: '/assets/images/sentra.jpg',
    tag: 'Sentra Utama',
    emoji: '🌿',
  },
  {
    id: 3,
    title: 'Seni & Kreativitas',
    category: 'kreatif',
    description: 'Mengekspresikan ide, warna, dan imajinasi bebas melalui karya tangan.',
    image: '/assets/images/seni-kreatifitas.jpeg',
    tag: 'Sentra Seni',
    emoji: '🎨',
  },
  {
    id: 4,
    title: 'Outing Class Edukatif',
    category: 'outing',
    description: 'Belajar langsung dari alam terbuka dan eksplorasi lingkungan seru.',
    image: '/assets/images/outing-class.jpg',
    tag: 'Outdoor Fun',
    emoji: '🚌',
  },
  {
    id: 5,
    title: 'Fun Cooking Cilik',
    category: 'kreatif',
    description: 'Memasak sederhana yang melatih motorik halus, kemandirian, dan kerjasama tim.',
    image: '/assets/images/fun-cooking.jpeg',
    tag: 'Fun Cooking',
    emoji: '🍳',
  },
  {
    id: 6,
    title: 'Kegiatan Islami & Manasik Haji',
    category: 'islami',
    description: 'Mengenalkan rukun Islam dan praktik ibadah sejak dini dengan riang gembira.',
    image: '/assets/images/manasik-haji.jpg',
    tag: 'Sentra Ibadah',
    emoji: '🕋',
  },
  {
    id: 7,
    title: 'Kebersamaan & Puncak Tema',
    category: 'belajar',
    description: 'Momen keceriaan perayaan hasil karya dan unjuk keberanian anak.',
    image: '/assets/images/galery-3.jpg',
    tag: 'Puncak Tema',
    emoji: '🎉',
  },
  {
    id: 8,
    title: 'Senyum Bahagia Buah Hati',
    category: 'islami',
    description: 'Membentuk karakter santun, ramah, dan berakhlakul karimah sejak dini.',
    image: '/assets/images/galery-6.jpeg',
    tag: 'Akhlak Mulia',
    emoji: '⭐',
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
