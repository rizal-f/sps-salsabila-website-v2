import React from 'react';
import { useSelector } from 'react-redux';
import { playBubbleSound } from '../utils/soundEffects';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const { soundEnabled } = useSelector((state) => state.ui);
  const { adminPhone, adminName } = useSelector((state) => state.registration);

  const handleClick = () => {
    playBubbleSound(soundEnabled);
  };

  const defaultMsg = encodeURIComponent(
    `Assalamu'alaikum ${adminName}, saya ingin bertanya mengenai pendaftaran dan informasi SPS Salsabila.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip hint */}
      <a
        href={`https://wa.me/${adminPhone}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-emerald-300 text-emerald-950 font-bold text-xs shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Chat WhatsApp {adminName}</span>
      </a>

      {/* Floating Circle Button */}
      <a
        href={`https://wa.me/${adminPhone}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-300 group border-3 border-white animate-wiggle"
        aria-label="Chat WhatsApp Admin"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-md" />
      </a>
    </div>
  );
}
