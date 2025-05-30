const headerBtn = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-mob');
const mobClose = document.querySelector('.nav-button-close');
const navItem = document.querySelectorAll('.nav-list-item');

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

navItem.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });
});
