$(document).ready(function () {


});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView : 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, 
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});