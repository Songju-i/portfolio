$(document).ready(function(){

$('div.gnb ul.menu li').mouseenter(function(){
  $(this).children('ul').stop().slideDown();
});
$('div.gnb ul.menu li').mouseleave(function(){
  $(this).children('ul').stop().slideUp();
});

let now_img, next_img;
setInterval(function(){
  now_img = $('div.main_slide ul li').eq(0);
  next_img = $('div.main_slide ul li').eq(1);
  next_img.addClass('viwe').css({opacity:0})
  .animate({opacity:1},1000, function(){
  $('div.main_slide ul').append(now_img); 
  now_img.removeClass('viwe');
})
},3000);


$(function(){  
  $('div.sub_menu a').click(function(e){
    e.preventDefault();
    $('div.top > div').hide().filter(this.hash).fadeIn();
    $('div.sub_menu a').removeClass('active');
    $(this).addClass('active')
    return true;
  });
});

});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,  
  slidesPerView : 3,
  autoplay: {delay: 2500,
    disableOnInteraction: false,},

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
