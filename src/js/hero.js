const heroBtn = document.querySelector('.left-btn-container-search-button');
const heroInput = document.querySelector('.input-search');

heroBtn.addEventListener('click', () => {
  heroInput.value = '';
});
