/* begin fountains */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const fountainsTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.fountains',
    start: 'top bottom-=25%',
    markers: false,
  },
});

gsap.set('.fountains__title', {
  opacity: 0,
});

gsap.set('.fountains__subtitle', {
  opacity: 0,
});

setTimeout(() => {
  fountainsTL.to('.fountains__title', {
    opacity: 1,
    duration: 1,
    ease: 'power1.out',
  });

  fountainsTL.to('.fountains__subtitle', {
    opacity: 1,
    duration: 1,
    ease: 'power1.out',
  }, '<');
}, 1600);
/* end fountains */
