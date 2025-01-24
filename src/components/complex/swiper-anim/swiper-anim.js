/* begin swiper-anim */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const dotTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.swiper-anim',
    pin: true,
    pinSpacing: true,
    start: 'top top',
    end: '+=250%',
    scrub: true,
  },
});

dotTl.to(document.querySelector('.swiper-anim__el'), {
  width: '100%',
  height: '100%',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  ease: 'circ.out',
});

dotTl.to(document.querySelector('.swiper-anim__img'), {
  scale: 1,
  translateY: '0px',
  ease: 'circ.out',
}, '<');
/* end swiper-anim */
