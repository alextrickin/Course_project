window.addEventListener('DOMContentLoaded', function () {
  var main_top_Swiper = new Swiper('.main-top-swiper', {
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
  var gallery_Swiper = new Swiper('.gallery-swiper', {
    // Optional parameters    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.gallery-pagination',
      clickable: 'true'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery-button-prev',
      prevEl: '.gallery-button-next',
    },
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "column",
    slidesPerGroup: 3,
    spaceBetween: 34
  });
})