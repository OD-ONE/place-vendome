/* begin saint-germain */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const saintGermainTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.saint-germain',
    start: 'top bottom-=25%',
    markers: false,
  },
});

gsap.set('.saint-germain__content', {
  opacity: 0,
  translateY: '100%',
});

setTimeout(() => {
  saintGermainTL.to('.saint-germain__content', {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: 'power1.out',
  });
}, 1600);
/* end saint-germain */
