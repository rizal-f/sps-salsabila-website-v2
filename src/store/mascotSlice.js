import { createSlice } from '@reduxjs/toolkit';

const mascotGreetings = [
  'Hai Ayah & Bunda! Selamat datang di SPS Salsabila! 🌟',
  'Di sini belajarnya seru banget lho, sambil bermain dan menghafal hadits! 📖',
  'Ayo ikut Fun Cooking dan Outing Class bersama kami! 🍳🚌',
  'Klik tombol WhatsApp kalau mau tanya-tanya ke Ibu Novi ya! 💬',
  'Yeay! Kamu hebat sudah berkunjung ke website kami hari ini! 🎉',
  'Sentra Ibadah, Seni, Bahan Alam & Persiapan menunggumu! 🎨🕌',
];

const initialState = {
  isOpen: true,
  currentGreetingIndex: 0,
  clickCount: 0,
  mood: 'happy', // 'happy' | 'waving' | 'cheering' | 'singing'
  bubbleVisible: true,
};

export const mascotSlice = createSlice({
  name: 'mascot',
  initialState,
  reducers: {
    nextGreeting: (state) => {
      state.clickCount += 1;
      state.currentGreetingIndex = (state.currentGreetingIndex + 1) % mascotGreetings.length;
      state.bubbleVisible = true;
      const moods = ['happy', 'waving', 'cheering', 'singing'];
      state.mood = moods[state.clickCount % moods.length];
    },
    toggleBubble: (state) => {
      state.bubbleVisible = !state.bubbleVisible;
    },
    setMascotOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setMood: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const {
  nextGreeting,
  toggleBubble,
  setMascotOpen,
  setMood,
} = mascotSlice.actions;

export { mascotGreetings };
export default mascotSlice.reducer;
