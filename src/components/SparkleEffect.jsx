import React, { useEffect, useState } from 'react';

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const emojis = ['✨', '⭐', '🎈', '🌸', '💫', '🌟'];

    const handleClick = (e) => {
      // Don't spawn if clicking input or textarea
      if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target.tagName)) {
        return;
      }

      const id = Date.now() + Math.random();
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const newSparkle = {
        id,
        x: e.clientX,
        y: e.clientY,
        emoji,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute text-xl select-none animate-float-slow transition-opacity duration-1000"
          style={{
            left: `${s.x - 10}px`,
            top: `${s.y - 15}px`,
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}
