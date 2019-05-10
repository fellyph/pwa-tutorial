const addBadge = document.querySelector('.badingAPI__add');
const cleanBadge = document.querySelector('.badingAPI__clean');
const counterBadge = 0;
let bagdeTimer;

if(addBadge) {
  addBadge.addEventListener('click', () => {
    if(counterBadge === 0) {
      bagdeTimer = window.setInterval(() => {
        counterBadge += 1;
        window.ExperimentalBadge.set(counterBadge);
      }, 1000);
    }
  });

  if(cleanBadge) {
    cleanBadge.addEventListener('click', () => {
      counterBadge = 0;
      window.ExperimentalBadge.clear();
      clearInterval(bagdeTimer);
    });
  }
}


