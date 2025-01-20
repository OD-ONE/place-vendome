/* begin scripts */
import LazyLoad from 'vanilla-lazyload';

import initFooter from './components/complex/footer/footer.js';
import initHero from './components/complex/hero/hero.js';
import initMainNews from './components/complex/main-news/main-news.js';
import initMainCinema from './components/complex/main-cinema/main-cinema.js';
import initMainGift from './components/complex/main-gift/main-gift.js';
import initMainStay from './components/complex/main-stay/main-stay.js';

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
/* end scripts */
