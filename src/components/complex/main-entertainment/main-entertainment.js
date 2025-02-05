/* begin main-entertainment */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
  if (document.querySelector('.main-entertainment')) {
    const mainEntertainmentTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-entertainment',
        start: 'top center-=40%',
        markers: false,
      },
    });

    const mainEntertainmentTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-entertainment--main',
        start: 'top bottom-=25%',
        markers: false,
      },
    });

    const mainEntertainmentTL3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-entertainment__list-images',
        start: 'top bottom-=25%',
        markers: false,
      },
    });

    const items = gsap.utils.toArray('.main-entertainment__item-img-container-inner');
    const logos = gsap.utils.toArray('.main-entertainment__item-logo-container');

    // set
    if (logos.length) {
      mainEntertainmentTL.set(logos, {
        bottom: '-100px',
        opacity: 0,
      });
    }

    gsap.set('.main-entertainment--main .main-entertainment__header', {
      opacity: 0,
    });

    gsap.set('.main-entertainment__list-images-item-img--1', {
      opacity: 0,
      translateY: '100%',
    });

    gsap.set('.main-entertainment__list-images-item-img--2', {
      opacity: 0,
      translateY: '100%',
    });

    gsap.set('.main-entertainment__list-images-item-img--3', {
      opacity: 0,
      translateY: '100%',
    });

    gsap.set('.main-entertainment__list-images-item-content--1', {
      opacity: 0,
    });

    gsap.set('.main-entertainment__list-images-item-content--2', {
      opacity: 0,
    });

    // to
    if (items.length) {
      mainEntertainmentTL.to(items, {
        height: '100%',
        opacity: 1,
        ease: 'power1.out',
        duration: 0.6,
      });

      mainEntertainmentTL.to(items, {
        alignItems: 'center',
        duration: 0,
      });
    }

    if (logos.length) {
      mainEntertainmentTL.to(logos, {
        bottom: 0,
        opacity: 1,
        ease: 'power1.out',
        duration: 0.6,
        onComplete: () => {
          document.querySelectorAll('.main-entertainment__item').forEach((item) => {
            item.classList.add('main-entertainment__item--active');
          });
        },
      });
    }

    mainEntertainmentTL2.to('.main-entertainment--main .main-entertainment__header', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
    });

    mainEntertainmentTL3.to('.main-entertainment__list-images-item-img--1', {
      opacity: 1,
      translateY: 0,
      duration: 0.6,
      ease: 'power1.out',
    });

    mainEntertainmentTL3.to('.main-entertainment__list-images-item-img--2', {
      opacity: 1,
      translateY: 0,
      duration: 0.4,
      ease: 'power1.out',
    });

    mainEntertainmentTL3.to('.main-entertainment__list-images-item-img--3', {
      opacity: 1,
      translateY: 0,
      duration: 0.4,
      ease: 'power1.out',
    });

    mainEntertainmentTL3.to('.main-entertainment__list-images-item-content--1', {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.out',
    });

    mainEntertainmentTL3.to('.main-entertainment__list-images-item-content--2', {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.out',
    });
  }
}, 1600);
/* end main-entertainment */
