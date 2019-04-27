let myPrompt;
const installPWAButton = document.querySelector('.pwaMenu__installBtn');

if (installPWAButton) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    myPrompt = e;
    installPWAButton.style.display = 'block';
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
