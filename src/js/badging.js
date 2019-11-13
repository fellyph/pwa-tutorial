const addBadge = document.querySelector('.badgingAPI__add');
const cleanBadge = document.querySelector('.badginAPI_clean');

if (addBadge) {
  addBadge.addEventListener('click', () => {
    window.ExperimentalBadge.set();
  });
}

if (cleanBadge) {
  cleanBadge.addEventListener('click', () => {
    window.ExperimentalBadge.clear();
  });
}
