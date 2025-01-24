/* begin swiper-anim */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import Swiper from 'swiper';

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

const swiper = new Swiper('.swiper-anim__el', {
  loop: true,
  speed: 600,
  slidesPerView: 1,
});

const swiperAnim = document.querySelector('.swiper-anim');

if (swiperAnim) {
  swiperAnim.addEventListener('click', (event) => {
    const rect = swiperAnim.getBoundingClientRect();
    const clickX = event.clientX - rect.left; // Координата клика внутри элемента
    const isLeftSide = clickX < rect.width / 2;

    if (isLeftSide) {
      swiper.slidePrev(); // Прокрутка назад
    } else {
      swiper.slideNext(); // Прокрутка вперед
    }
  });
}
/* end swiper-anim */
