import confetti from 'canvas-confetti';

export function fireSchoolCelebration() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FBBF24', '#34D399', '#60A5FA', '#F472B6', '#A78BFA', '#F87171'],
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export function fireStarsExplosion(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 40,
    spread: 80,
    origin: { x, y },
    colors: ['#FDE047', '#FBBF24', '#38BDF8', '#4ADE80', '#FB7185'],
    shapes: ['star', 'circle'],
    zIndex: 9999,
    ticks: 150,
  });
}
