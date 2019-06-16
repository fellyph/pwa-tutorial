const isPWA = window.matchMedia('(display-mode: standalone)');
const pwaMenu = document.querySelector('.pwaMenu');

if (('share' in navigator || isPWA.matches) && pwaMenu) {
  pwaMenu.style.display = 'flex';
}
