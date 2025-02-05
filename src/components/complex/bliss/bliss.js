/* begin bliss */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const blissTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.bliss',
    start: 'top bottom-=25%',
    markers: false,
  },
});

gsap.set('.bliss__item-img--1', {
  opacity: 0,
  translateY: '100%',
});

gsap.set('.bliss__item-img--2', {
  opacity: 0,
  translateY: '100%',
});

setTimeout(() => {
  blissTL.to('.bliss__item-img--1', {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: 'power1.out',
  });

  blissTL.to('.bliss__item-img--2', {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: 'power1.out',
  }, '<40%');
}, 1600);
/* end bliss */
