const featuredBtnRight = document.getElementById('featuredBtnRight');
const featuredBtnLeft = document.getElementById('featuredBtnLeft');
const featuredList = document.querySelector('.featured-list');

featuredBtnLeft.addEventListener('click', () => {
  featuredList.scrollBy({
    left: -376,
    behavior: 'smooth',
  });
});

featuredBtnRight.addEventListener('click', () => {
  featuredList.scrollBy({
    left: 376,
    behavior: 'smooth',
  });
});
