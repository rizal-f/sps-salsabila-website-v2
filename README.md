# SPS Salsabila — Website Ceria & Full Animasi (React + Tailwind + Redux)

Website profil Taman Kanak-Kanak / PAUD **SPS Salsabila** versi modern, ceria, interaktif, dan kaya akan animasi ramah anak.

## 🚀 Fitur Utama
1. **Desain Ceria & Ramah Anak**: Palet warna cerah, font Google *Fredoka* & *Quicksand*, ilustrasi SVG awan, matahari tersenyum, balon udara, dan sticker lucu.
2. **Animasi & Interaktivitas**:
   - **Matahari Animasi**: Berputar, berkedip, dan memancarkan percikan bintang saat diklik.
   - **Maskot Bintang Salsa**: Karakter interaktif di sudut layar yang memberikan sapaan dan tips semangat.
   - **Efek Konfeti**: Letupan konfeti warna-warni saat pendaftaran atau klik tombol utama.
   - **Efek Suara Sintetis (Web Audio SFX)**: Suara pop, chime, dan fanfare yang lembut saat berinteraksi (lengkap dengan tombol mute).
   - **Sparkle Click Trail**: Efek gelembung dan bintang ceria saat mengklik di mana saja.
3. **State Management Redux Toolkit**:
   - `uiSlice`: Sound SFX on/off, mobile drawer, trigger animasi.
   - `gallerySlice`: Filter kategori foto & Lightbox Modal resolusi penuh dengan navigasi next/prev.
   - `registrationSlice`: Form pendaftaran WhatsApp, chip template pertanyaan cepat ke Ibu Novi (`0896-9186-8775`).
   - `mascotSlice`: Dialog dan ekspresi karakter maskot.
4. **Sentra Explorer**: Jelajah 4 model sentra (Sentra Ibadah, Sentra Bahan Alam, Sentra Persiapan, Sentra Seni & Kreativitas).
5. **Jadwal Belajar & Seragam**: Visualisasi harian seragam (Ungu, Olahraga, Muslim, Batik, Putih) dan jam operasional.
6. **WhatsApp Quick Form**: Integrasi formulir langsung ke WhatsApp Ibu Novi dengan preview otomatis.

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Keyframes Animation
- **Icons**: React Icons (`react-icons`) + Lucide Icons
- **State Management**: Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)
- **Confetti**: `canvas-confetti`
- **Audio**: Web Audio API Synthesizer

## 🏃 Cara Menjalankan
```bash
# Masuk ke direktori
cd /Users/rizal/Documents/MyProjects/sps-salsabila-website/sps-salsabila-react

# Jalankan server development
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```
