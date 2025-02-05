/* begin main-news-2 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.main-news-2')) {
  const items = gsap.utils.toArray('.main-news-2__item');
  let widthItems = 0;
  const wrapperWidth = document.documentElement.clientWidth - document.querySelector('.main-news-2__wrapper').offsetWidth - 40 - 10;

  items.forEach((item) => {
    widthItems += item.offsetWidth;
  });

  const GSAPHorizontalScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-news-2',
      pin: true,
      start: () => { return '0% 0%'; },
      end: () => { return `+=${items.length * 25}%`; },
      pinSpacing: true,
      scrub: 1,
      snap: false,
      markers: false,
    },
  });

  GSAPHorizontalScrollTL.to(items, {
    left: `-${widthItems - document.documentElement.clientWidth + wrapperWidth}px`,
    ease: 'none',
  });

  const mainNewsTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-news-2',
      start: 'top bottom-=25%',
      markers: false,
    },
  });

  gsap.set('.main-news-2__cartier-header', {
    opacity: 0,
  });

  mainNewsTL.to('.main-news-2__cartier-header', {
    opacity: 1,
    duration: 1,
    ease: 'power1.out',
  });
}
/* end main-news-2 */
