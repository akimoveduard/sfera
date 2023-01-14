const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  slidesPerView: 2.5,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
let swiperPause = document.querySelector('.swiper__pause')
  swiperPause.addEventListener('click', () => {
    swiper.autoplay = false;
  });
