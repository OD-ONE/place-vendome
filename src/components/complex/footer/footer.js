/* begin footer */
import initObserver from '../../../services/custom-libs/observer.js';

export default function initFooter() {
  const section = document.querySelector('.footer');
  if (!section) return;

  const video = document.querySelector('.footer__video');
  initObserver(video, () => {
    video.play();
  }, { threshold: 0.4 });
}
/* end footer */
