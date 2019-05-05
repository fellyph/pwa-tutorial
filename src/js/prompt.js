let myPrompt;
const installPWAButton = document.querySelector('.pwaMenu__installBtn');
const isPWA = window.matchMedia('(display-mode: standalone)');
const pwaMenu = document.querySelector('.pwaMenu');


if (installPWAButton) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    myPrompt = e;
    installPWAButton.style.display = 'inline-block';
    if (isPWA.matches && pwaMenu) {
      pwaMenu.style.display = 'flex';
    }
  });

  installPWAButton.addEventListener('click', () => {
    myPrompt.prompt();
    myPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult === 'accepted') {
          installPWAButton.style.display = 'none';
        }
      });
  });
}
