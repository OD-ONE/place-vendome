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
      end: '+=270%',
      pinSpacing: true,
      scrub: 0.6,
      snap: false,
      markers: false,
      anticipatePin: 0.5,
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

  GSAPHorizontalScrollTL.to('.life__start', {
    xPercent: -800,
    ease: 'none',
  });

  GSAPHorizontalScrollTL.to(sections, {
    xPercent: -100 * (sections.length - 1.15),
    ease: 'none',
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--1 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // ease: 'power2.out',
    // duration: 0.135,
    duration: 0.1,
    onUpdate() {
      if (this.progress() === 1) {
        document.querySelector('.life__item--1').classList.add('life__item--visible');
      } else {
        document.querySelector('.life__item--1').classList.remove('life__item--visible');
      }
    },
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--2 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // ease: 'power2.out',,
    // duration: 0.315,
    duration: 0.2,
    onUpdate() {
      if (this.progress() === 1) {
        document.querySelector('.life__item--2').classList.add('life__item--visible');
      } else {
        document.querySelector('.life__item--2').classList.remove('life__item--visible');
      }
    },
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--3 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // ease: 'power2.out',
    // duration: 0.495,
    duration: 0.39,
    onUpdate() {
      if (this.progress() === 1) {
        document.querySelector('.life__item--3').classList.add('life__item--visible');
      } else {
        document.querySelector('.life__item--3').classList.remove('life__item--visible');
      }
    },
  }, '<');

  GSAPHorizontalScrollTL.to('.life__item--4 .life__item-img-container', {
    y: '0vh',
    ease: 'none',
    // ease: 'power2.out',
    // duration: 0.6,
    duration: 0.5,
    onUpdate() {
      if (this.progress() === 1) {
        document.querySelector('.life__item--4').classList.add('life__item--visible');
      } else {
        document.querySelector('.life__item--4').classList.remove('life__item--visible');
      }
    },
  }, '<');
}
/* end life */
