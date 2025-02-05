/* begin awards */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
  const awardsTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.awards',
      start: 'top center',
      markers: false,
    },
  });

  gsap.set('.awards__img-content', {
    opacity: 0,
    top: '100%',
  });

  awardsTL.to('.awards__img-content', {
    opacity: 1,
    top: '50%',
    duration: 1,
    ease: 'power1.out',
  });
}, 1600);
/* end awards */
