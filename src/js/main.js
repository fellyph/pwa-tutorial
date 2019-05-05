if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('Registrado nosso primeiro service worker', reg);
      }).catch((err) => {
        console.log('Algo de errado aconteceu', err);
      });
  });
}

const isPWA = window.matchMedia('(display-mode: standalone)');
const pwaMenu = document.querySelector('.pwaMenu');

if (('share' in navigator || isPWA.matches) && pwaMenu) {
  pwaMenu.style.display = 'flex';
}
