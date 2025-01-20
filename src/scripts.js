/* begin scripts */
import LazyLoad from 'vanilla-lazyload';

import initHero from './components/complex/hero/hero.js';
import initMainNews from './components/complex/main-news/main-news.js';
import initMainCinema from './components/complex/main-cinema/main-cinema.js';

import './components/complex/life/life.js';

new LazyLoad({
  elements_selector: '.js-lazy',
  threshold: 1000,
});

initHero();
initMainNews();
initMainCinema();
/* end scripts */
