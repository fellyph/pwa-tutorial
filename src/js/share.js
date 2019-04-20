if (navigator.share) {
  const shareButton = document.querySelector('.social__shareButton');
  shareButton.style.display = 'inline-block';

  shareButton.addEventListener('click', () => {
    navigator.share({
      title: 'Lorem Ipsum Front-end Engineer',
      text: 'Check out Web Fundamentals — it rocks!',
      url: 'https://localhost:8080/',
    });
  });
} else {
  // no support
}
