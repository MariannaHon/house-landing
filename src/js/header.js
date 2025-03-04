const headerBtn = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-mob');
const mobClose = document.querySelector('.nav-button-close');

function toggle() {
  nav.classList.toggle('hidden');
}

headerBtn.addEventListener('click', () => {
  toggle();
  mobClose.style.display = 'flex';
});

mobClose.addEventListener('click', () => {
  toggle();
  mobClose.style.display = 'none';
});
