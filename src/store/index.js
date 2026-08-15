import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import galleryReducer from './gallerySlice';
import registrationReducer from './registrationSlice';
import mascotReducer from './mascotSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    gallery: galleryReducer,
    registration: registrationReducer,
    mascot: mascotReducer,
  },
});

export default store;
