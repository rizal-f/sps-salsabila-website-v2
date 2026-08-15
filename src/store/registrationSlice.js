import { createSlice } from '@reduxjs/toolkit';

const initialQuickTemplates = [
  'Saya ingin mendaftarkan anak saya untuk tahun ajaran baru.',
  'Berapa rincian biaya pendaftaran dan SPP bulanan?',
  'Apakah masih ada kuota untuk Kelompok A / Kelompok B?',
  'Saya ingin konsultasi & berkunjung survei lokasi sekolah.',
];

const initialState = {
  parentName: '',
  childName: '',
  childAgeGroup: 'Kelompok A (4-5 Tahun)',
  customMessage: '',
  selectedTemplate: initialQuickTemplates[0],
  isSubmitting: false,
  submittedSuccess: false,
  adminPhone: '6289691868775', // Ibu Novi
  adminName: 'Ibu Novi',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setParentName: (state, action) => {
      state.parentName = action.payload;
    },
    setChildName: (state, action) => {
      state.childName = action.payload;
    },
    setChildAgeGroup: (state, action) => {
      state.childAgeGroup = action.payload;
    },
    setCustomMessage: (state, action) => {
      state.customMessage = action.payload;
    },
    setSelectedTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
      state.customMessage = action.payload;
    },
    resetForm: (state) => {
      state.parentName = '';
      state.childName = '';
      state.customMessage = '';
      state.selectedTemplate = initialQuickTemplates[0];
      state.submittedSuccess = false;
    },
    setSubmittedSuccess: (state, action) => {
      state.submittedSuccess = action.payload;
    },
  },
});

export const {
  setParentName,
  setChildName,
  setChildAgeGroup,
  setCustomMessage,
  setSelectedTemplate,
  resetForm,
  setSubmittedSuccess,
} = registrationSlice.actions;

export default registrationSlice.reducer;
