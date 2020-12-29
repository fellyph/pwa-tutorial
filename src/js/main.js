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
          if(status === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
              registration.showNotification('Notification example', {
                body: 'PWA Course',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: 'vibration-sample'
              });
            });
          }
        });

      } else {
        console.log('has no support to notifications');
      }
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// link documentation : https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
