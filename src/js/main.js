const isPWA = window.matchMedia('(display-mode: standalone)');
const pwaMenu = document.querySelector('.pwaMenu');

if (('share' in navigator || isPWA.matches) && pwaMenu) {
  pwaMenu.style.display = 'flex';
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);

      if('Notification' in window) {
        console.log('has support to notifications');
        Notification.requestPermission( (status) => {
          console.log('Status: ', status);
        });
      } else {
        console.log('has no support to notifications');
      }
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
