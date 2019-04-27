if (navigator.share) {
  const shareButton = document.querySelector('.pwaMenu__shareButton');

  if (shareButton) {
    shareButton.getElementsByClassName.display = 'inline-block';

    shareButton.addEventListener('click', () => {
      navigator.share({
        title: 'Lorem Ipsum',
        text: 'Lorem Ipsum descricao',
        url: 'https://localhost:8080',
      });
    });
  }
} else {
  //
}
