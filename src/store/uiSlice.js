import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  soundEnabled: true,
  mobileMenuOpen: false,
  activeSection: 'home',
  confettiTriggerCount: 0,
  sparkleCount: 0,
  toastMessage: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    setSoundEnabled: (state, action) => {
      state.soundEnabled = action.payload;
    },
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    triggerConfetti: (state) => {
      state.confettiTriggerCount += 1;
    },
    triggerSparkle: (state) => {
      state.sparkleCount += 1;
    },
    setToastMessage: (state, action) => {
      state.toastMessage = action.payload;
    },
    clearToast: (state) => {
      state.toastMessage = null;
    }
  },
});

export const {
  toggleSound,
  setSoundEnabled,
  setMobileMenuOpen,
  toggleMobileMenu,
  setActiveSection,
  triggerConfetti,
  triggerSparkle,
  setToastMessage,
  clearToast
} = uiSlice.actions;

export default uiSlice.reducer;
