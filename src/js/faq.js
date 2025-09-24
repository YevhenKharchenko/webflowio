import Swiper from 'swiper';
import 'swiper/css/bundle';

const faqDots = document.querySelectorAll('.faq-dot');

let faqSwiper;

faqSwiper = new Swiper('.faq-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 8,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.faq-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateFaqDots(this.realIndex);
    },
  },
});

function updateFaqDots(index) {
  faqDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

faqDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    faqSwiper.slideTo(index);
  });
});
