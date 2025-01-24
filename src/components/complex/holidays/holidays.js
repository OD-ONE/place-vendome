/* begin holidays */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

if (document.querySelector('.holidays')) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set('.holidays__bg', {
    scale: 0.2,
    xPercent: -36,
    yPercent: -169.7,
  });

  gsap.to('.holidays__bg', {
    scrollTrigger: {
      trigger: '.holidays',
      start: 'top bottom',
      end: 'center top',
      markers: false,
      scrub: true,
      pinSpacing: false,
      pinSpacer: false,
    },
    scale: 1,
    xPercent: 0,
    yPercent: 0,
    ease: 'none',
    onUpdate() {
      if (this.progress() === 0.95 || this.progress() > 0.95) {
        document.querySelector('.holidays').classList.add('holidays--visible');
      } else {
        document.querySelector('.holidays').classList.remove('holidays--visible');
      }
    },
  });

  document.querySelectorAll('.holidays__brand').forEach((brand) => {
    if (brand.dataset.brand) {
      const attr = brand.dataset.brand;

      brand.addEventListener('click', () => {
        if (document.querySelector('.holidays__brand--active')) {
          document.querySelector('.holidays__brand--active').classList.remove('holidays__brand--active');
        }

        if (document.querySelector('.holidays__item--active')) {
          document.querySelector('.holidays__item--active').classList.remove('holidays__item--active');
        }

        document.querySelector(`.holidays__item[data-brand="${attr}"]`).classList.add('holidays__item--active');
        brand.classList.add('holidays__brand--active');
      });
    }
  });
}
/* end holidays */
