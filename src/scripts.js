/* begin scripts */
import LazyLoad from 'vanilla-lazyload';

import initHero from './components/complex/hero/hero.js';
import initMainNews from './components/complex/main-news/main-news.js';

new LazyLoad({
  elements_selector: '.js-lazy',
  threshold: 1000,
});

initHero();
initMainNews();
/* end scripts */
