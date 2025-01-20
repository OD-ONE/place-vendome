/* begin main-gift */
import initObserver from '../../../services/custom-libs/observer.js';

export default function initMainGift() {
  const section = document.querySelector('.main-gift');
  if (!section) return;

  const title = document.querySelector('.main-gift__title');
  initObserver(section, () => {
    title.classList.add('main-gift__title--show');
  }, { threshold: 0.4 });
}
/* end main-gift */
