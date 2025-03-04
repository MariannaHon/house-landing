const tourVideo = document.querySelector('.tour-right-video');
const play = document.querySelector('.tour-right-video-play');
const tourImage = document.querySelector('.tour-video-img');

play.addEventListener('click', () => {
  play.style.display = 'none';
  tourVideo.play();
});

tourVideo.addEventListener('click', () => {
  play.style.display = 'block';
  tourVideo.pause();
});
