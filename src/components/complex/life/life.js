/* begin life */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

if (document.querySelector('.life')) {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.life .life__item');

  const GSAPHorizontalScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.life',
      pin: true,
      start: () => { return '0% 0%'; },
      end: () => {
        if (document.querySelector('.life')) {
          return `+=${document.querySelector('.life').scrollWidth - window.innerWidth}`;
        }

        return '';
      },
      scrub: 0.5,
      snap: false,
      markers: true,
      anticipatePin: 1,
      onEnter: () => {
        document.querySelector('.life').classList.add('life--active');
      },
    },
  });

  gsap.set('.life__item--1 .life__item-img-container', {
    y: '24vh',
  });

  gsap.set('.life__item--2 .life__item-img-container', {
    y: '52.8vh',
  });

  gsap.set('.life__item--3 .life__item-img-container', {
    y: '62.8vh',
  });

  gsap.set('.life__item--4 .life__item-img-container', {
    y: '72.8vh',
  });

  GSAPHorizontalScrollTL.to(sections, {
    xPercent: -100 * (sections.length - 1.2),
    ease: 'none',
  });

  GSAPHorizontalScrollTL.to('.life__item--1 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // duration: 0.135,
    duration: 0.03,
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--2 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // duration: 0.315,
    duration: 0.2,
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--3 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // duration: 0.495,
    duration: 0.39,
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--4 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // duration: 0.6,
    duration: 0.5,
  }, '<');
}
/* end life */
