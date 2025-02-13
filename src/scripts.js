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
import './components/complex/hero-anim/hero-anim.js';
import './components/complex/main-news-2/main-news-2.js';
import './components/complex/gift-card/gift-card.js';
import './components/complex/main-entertainment/main-entertainment.js';
import './components/complex/inspiration/inspiration.js';
import './components/complex/fountains/fountains.js';
import './components/complex/bliss/bliss.js';
import './components/complex/saint-germain/saint-germain.js';
import './components/complex/awards/awards.js';

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
