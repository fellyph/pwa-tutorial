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

let myPrompt;
const pwaAlert = document.querySelector('.pwa__alert');
const btnPWA = document.querySelector('.pwa__alert__btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  console.log('pronto para instalar', e);
  myPrompt = e;

  pwaAlert.style.display = 'block';
});

btnPWA.addEventListener('click', () => {
  pwaAlert.style.display = 'none';
  myPrompt.prompt();
  myPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult === 'accepted') {
        console.log('Usuário aceitou o prompt');
      } else {
        console.log('Usuário cancelou o prompt');
      }
    });
});
