/* begin inspiration */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.inspiration')) {
  const inspirationTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.inspiration',
      start: 'top bottom-=25%',
      markers: false,
    },
  });

  gsap.set('.inspiration .main-entertainment__header', {
    opacity: 0,
  });

  setTimeout(() => {
    const items = gsap.utils.toArray('.inspiration__item');
    let widthItems = 0;
    const wrapperWidth = document.documentElement.clientWidth - document.querySelector('.inspiration__wrapper').offsetWidth - 40 - 10;

    items.forEach((item) => {
      widthItems += item.offsetWidth;
    });

    const inspirationHorizontalScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.inspiration__list',
        pin: true,
        start: () => { return '0% 0%'; },
        end: () => { return `+=${items.length * 25}%`; },
        pinSpacing: true,
        scrub: 1,
        snap: false,
        markers: false,
      },
    });

    inspirationHorizontalScrollTL.to(items, {
      left: `-${widthItems - document.documentElement.clientWidth + wrapperWidth}px`,
      ease: 'none',
    });

    inspirationTL.to('.inspiration .main-entertainment__header', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
    });
  }, 1600);
}
/* end inspiration */
