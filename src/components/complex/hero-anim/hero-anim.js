/* begin hero-anim */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', ScrollTrigger.update);

if (document.querySelector('.hero-anim')) {
  const heroAnimTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-anim',
      pin: true,
      pinSpacing: true,
      start: 'top top',
      end: '+=550%',
      scrub: 0.5,
    },
  });

  // set
  heroAnimTimeline.set(document.querySelector('.hero-anim__bg'), {
    translateY: 150,
    borderTopLeftRadius: 1600,
    borderTopRightRadius: 1600,
  });

  heroAnimTimeline.set(document.querySelector('.hero-anim__front-container'), {
    top: '44vh',
  });

  heroAnimTimeline.set(document.querySelector('.hero-anim__front'), {
    width: '3322px',
  });

  heroAnimTimeline.set(document.querySelector('.hero-anim__bg2'), {
    top: '36.2%',
    opacity: 0,
  });

  heroAnimTimeline.set(document.querySelector('.hero-anim__finish-text-container'), {
    opacity: 0,
  });

  heroAnimTimeline.set(document.querySelector('.hero-anim__start-title'), {
    top: '50vh',
    opacity: 0,
  });

  // to
  heroAnimTimeline.to(document.querySelector('.hero-anim__bg'), {
    translateY: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__front-container'), {
    top: '6vh',
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__front'), {
    width: '100%',
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__start-text-container'), {
    opacity: 0,
    ease: 'power1.out',
  }, '<50%');

  heroAnimTimeline.to(document.querySelector('.hero-anim__bg2'), {
    opacity: 1,
    duration: 0.35,
    ease: 'power1.out',
  }, '<50%');

  /* heroAnimTimeline.to(document.querySelector('.hero-anim__bg2'), {
    top: '65.2vh',
    ease: 'power1.out',
  }); */

  heroAnimTimeline.to(document.querySelector('.hero-anim__front-container'), {
    top: '27vh',
    ease: 'power1.out',
  });

  heroAnimTimeline.to(document.querySelector('.hero-anim__front'), {
    opacity: 0.5,
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__finish-text-container'), {
    opacity: 1,
    top: '18vh',
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__bg2'), {
    top: '-27vh',
    width: '100%',
    height: '100vh',
    duration: 0.6,
    ease: 'power1.out',
  });

  heroAnimTimeline.to(document.querySelector('.hero-anim__bg2'), {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    duration: 0.5,
    ease: 'power1.out',
  }, '<15%');

  heroAnimTimeline.to(document.querySelector('.hero-anim__front'), {
    opacity: 0,
    ease: 'power1.out',
  }, '<');

  heroAnimTimeline.to(document.querySelector('.hero-anim__bg'), {
    opacity: 0,
    duration: 0,
    ease: 'power1.out',
  });

  heroAnimTimeline.to(document.querySelector('.hero-anim__finish-text-container'), {
    opacity: 0,
    duration: 0,
    ease: 'power1.out',
  });

  heroAnimTimeline.to(document.querySelector('.hero-anim__bg2'), {
    opacity: 0.75,
    ease: 'power1.out',
    duration: 0.3,
  });

  heroAnimTimeline.to(document.querySelector('.hero-anim__start-title'), {
    top: '40.5vh',
    opacity: 1,
    ease: 'power1.out',
    duration: 0.2,
  }, '<');
}
/* end hero-anim */
