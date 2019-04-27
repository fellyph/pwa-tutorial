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
