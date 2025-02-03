/* begin gift-card */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
  if (document.querySelector('.gift-card')) {
    const giftCardTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.gift-card',
        start: 'top center',
        markers: false,
      },
    });

    // set
    gsap.set('.gift-card__top-title', {
      top: '100px',
      opacity: 0,
    });

    gsap.set('.gift-card__title-left', {
      top: '100px',
      opacity: 0,
    });

    gsap.set('.gift-card__title-right', {
      top: '100px',
      opacity: 0,
    });

    gsap.set('.gift-card__content', {
      top: '100px',
      opacity: 0,
    });

    // to
    giftCardTL.to('.gift-card__top-title', {
      top: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.6,
    });

    giftCardTL.to('.gift-card__title-left', {
      top: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.6,
    }, '<50%');

    giftCardTL.to('.gift-card__title-right', {
      top: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.6,
    }, '<50%');

    giftCardTL.to('.gift-card__content', {
      top: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.6,
    }, '<50%');
  }
}, 1600);
/* end gift-card */
