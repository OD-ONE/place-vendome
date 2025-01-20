/* begin main-cinema */
import initObserver from '../../../services/custom-libs/observer.js';

export default function initMainCinema() {
  if (!document.querySelector('.main-cinema')) return;

  const media = document.querySelector('.main-cinema__media');
  const video = document.querySelector('.main-cinema__media-video');

  media.addEventListener('mouseover', () => {
    video.play();
    media.classList.add('main-cinema__media--played');
  });

  media.addEventListener('mousemove', () => {
    video.play();
    media.classList.add('main-cinema__media--played');
  });

  media.addEventListener('mouseout', () => {
    video.pause();
    media.classList.remove('main-cinema__media--played');
  });

  initObserver(media, () => {
    media.classList.add('main-cinema__media--show');
  }, { threshold: 0.4 });
}
/* end main-cinema */
