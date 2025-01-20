/* begin main-stay */
import initObserver from '../../../services/custom-libs/observer.js';

export default function initMainStay() {
  const section = document.querySelector('.main-stay');
  if (!section) return;

  const title = document.querySelector('.main-stay__title');
  initObserver(section, () => {
    title.classList.add('main-stay__title--show');
  }, { threshold: 0.4 });
}
/* end main-stay */
