console.log('\n>> Apps page');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  }
});