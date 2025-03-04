document.addEventListener('DOMContentLoaded', function () {
  const slider = function () {
    const dotsContainer = document.querySelector('.dots');
    const aboutItems = document.querySelectorAll('.box-list-item');
    const aboutList = document.querySelector('.box-list');
    const box = document.querySelector('.box');

    aboutItems.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.classList.add('dots-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('data-index', i);
      dotsContainer.appendChild(dot);
    });

    if (aboutItems.length === null) {
      console.error('No houses found');
      return;
    }

    const dots = document.querySelectorAll('.dots-dot');

    function goToSlide(index) {
      const itemWidth = aboutItems[0].getBoundingClientRect().width + 32;
      const boxWidth = box.clientWidth;
      let scrollPosition = index * itemWidth;

      if (index !== 0 && index !== -1) {
        scrollPosition -= (boxWidth - itemWidth) / 2;
      }

      aboutList.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    dots.forEach(dot => {
      dot.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'), 10);
        goToSlide(index);
      });
    });

    aboutList.addEventListener('scroll', function () {
      const itemWidth = aboutItems[0].getBoundingClientRect().width + 32;
      const scrollLeft = aboutList.scrollLeft;
      const index = Math.ceil(scrollLeft / itemWidth);

      dots.forEach(dot => dot.classList.remove('active'));
      if (index >= 0 && index < dots.length) {
        dots[index].classList.add('active');
      }
    });

    aboutList.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        aboutList.scrollTo({
          left: 200,
          behavior: 'smooth',
        });
      }
      if (e.key === 'ArrowLeft') {
        aboutList.scrollTo({
          left: -200,
          behavior: 'smooth',
        });
      }
    });
  };

  slider();
});
