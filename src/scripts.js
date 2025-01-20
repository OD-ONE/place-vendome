/* begin scripts */
import LazyLoad from 'vanilla-lazyload';

import './components/complex/hero/hero.js';

new LazyLoad({
  elements_selector: '.js-lazy',
  threshold: 1000,
});
/* end scripts */
