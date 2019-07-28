const isPWA = window.matchMedia('(display-mode: standalone)');
const pwaMenu = document.querySelector('.pwaMenu');

if (('share' in navigator || isPWA.matches) && pwaMenu) {
  pwaMenu.style.display = 'flex';
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
