/* begin scripts */
import LazyLoad from 'vanilla-lazyload';

import initFooter from './components/complex/footer/footer.js';
import initHero from './components/complex/hero/hero.js';
import initMainNews from './components/complex/main-news/main-news.js';
import initMainCinema from './components/complex/main-cinema/main-cinema.js';
import initMainGift from './components/complex/main-gift/main-gift.js';
import initMainStay from './components/complex/main-stay/main-stay.js';
import initCursorArrow from './components/embedded/cursor-arrow/cursor-arrow.js';

import './components/complex/life/life.js';
import './components/complex/holidays/holidays.js';
import './components/complex/preloader/preloader.js';
import './components/complex/swiper-anim/swiper-anim.js';

new LazyLoad({
  elements_selector: '.js-lazy',
  threshold: 1000,
});

initFooter();
initHero();
initMainNews();
initMainCinema();
initMainGift();
initMainStay();
initCursorArrow();
/* end scripts */
