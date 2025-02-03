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

    const items = gsap.utils.toArray('.main-entertainment__item-img-container-inner');
    const logos = gsap.utils.toArray('.main-entertainment__item-logo-container');

    // set
    mainEntertainmentTL.set(logos, {
      bottom: '-100px',
      opacity: 0,
    });

    // to
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
}, 1600);
/* end main-entertainment */
