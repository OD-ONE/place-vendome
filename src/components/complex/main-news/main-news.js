/* begin main-news */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import initObserver from '../../../services/custom-libs/observer.js';

function extractSlideData(activeSlide) {
  const date = activeSlide.querySelector('.main-news__item-date').innerHTML || '';
  const title = activeSlide.querySelector('.main-news__item-title').innerHTML || '';
  const text = activeSlide.querySelector('.main-news__item-text').innerHTML || '';
  const link = activeSlide.querySelector('.main-news__item-link').getAttribute('href') || '#';

  return {
    date, title, text, link,
  };
}

function updateInfo(data) {
  const info = document.querySelector('.main-news__info');
  if (!info) return;

  const date = info.querySelector('.main-news__info-date');
  const title = info.querySelector('.main-news__info-title');
  const text = info.querySelector('.main-news__info-text');
  const link = info.querySelector('.main-news__info-link');

  date.innerHTML = data.date;
  title.innerHTML = data.title;
  text.innerHTML = data.text;
  link.href = data.link;
}

function update(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const {
    date, title, text, link,
  } = extractSlideData(activeSlide);

  updateInfo({
    date, title, text, link,
  });
}

export default function initMainNews() {
  const section = document.querySelector('.main-news');
  if (!section) return;

  new Swiper('.main-news__swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    speed: 600,
    spaceBetween: 213,
    loop: true,
    navigation: {
      prevEl: '.main-news__swiper-nav .navigation__btn--prev',
      nextEl: '.main-news__swiper-nav .navigation__btn--next',
    },
    on: {
      init: (swiper) => {
        update(swiper);
      },
      slideChange: (swiper) => {
        update(swiper);
      },
    },
  });

  const items = document.querySelectorAll('.main-news__item');
  initObserver(section, () => {
    items.forEach((elem, index) => {
      setTimeout(() => {
        elem.classList.add('main-news__item--show');
      }, 500 * index);
    });
  }, { threshold: 0.4 });
}
/* end main-news */
