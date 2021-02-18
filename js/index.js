window.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.main-top-swiper', {
    // Optional parameters    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.main-top-pagination',
      clickable: 'true'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.main-top-button-prev',
      prevEl: '.main-top-button-next',
    },
  });
})