document.addEventListener('DOMContentLoaded', () => {
  const petalsOverlay = document.querySelector('.petals-overlay');
  if (petalsOverlay) {
    for (let i = 0; i < 15; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${5 + Math.random() * 10}s`;
      petal.style.animationDelay = `-${Math.random() * 5}s`;
      petalsOverlay.appendChild(petal);
    }
  }
});