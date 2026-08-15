import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextGreeting, toggleBubble } from '../store/mascotSlice';
import { mascotGreetings } from '../store/mascotSlice';
import { playBubbleSound, playPopSound } from '../utils/soundEffects';
import { fireStarsExplosion } from '../utils/confetti';
import { HiX, HiSparkles, HiChatAlt } from 'react-icons/hi';

export default function MascotWidget() {
  const dispatch = useDispatch();
  const { soundEnabled } = useSelector((state) => state.ui);
  const { currentGreetingIndex, bubbleVisible, mood, clickCount } = useSelector(
    (state) => state.mascot
  );

  const handleMascotClick = (e) => {
    playBubbleSound(soundEnabled);
    dispatch(nextGreeting());

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireStarsExplosion(x, y);
  };

  const message = mascotGreetings[currentGreetingIndex] || mascotGreetings[0];

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-3 pointer-events-auto">
      
      {/* Interactive Mascot Character */}
      <div className="relative group">
        
        {/* Speech Bubble */}
        {bubbleVisible && (
          <div className="absolute bottom-20 left-0 w-64 sm:w-72 p-4 rounded-3xl bg-white border-2 border-amber-300 shadow-2xl animate-pop-in z-50">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                  ⭐ Bintang Salsa
                </span>
                <span className="text-[10px] text-emerald-700 font-bold">Sahabat Ceria</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playPopSound(soundEnabled);
                  dispatch(toggleBubble());
                }}
                className="text-stone-400 hover:text-stone-600 p-0.5 rounded-md"
              >
                <HiX className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
              {message}
            </p>

            {/* Bubble pointer triangle */}
            <div className="absolute -bottom-2.5 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-amber-300 transform rotate-45"></div>
          </div>
        )}

        {/* Mascot Avatar Button */}
        <button
          onClick={handleMascotClick}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-200 border-3 border-white shadow-xl shadow-amber-500/30 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 animate-float-slow group"
          title="Klik Bintang Salsa!"
        >
          {/* Pulsing ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-40"></span>
          
          {/* Animated Star Mascot Face */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <span className="text-3xl sm:text-4xl select-none group-hover:rotate-12 transition-transform">
              ⭐
            </span>
          </div>

          {/* Badge count or hint */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white font-extrabold text-[10px] rounded-full flex items-center justify-center border-2 border-white shadow-xs">
            {clickCount % 10}
          </span>
        </button>

      </div>

    </div>
  );
}
