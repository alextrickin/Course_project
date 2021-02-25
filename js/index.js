window.addEventListener('DOMContentLoaded', function() {
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
            clickable: 'true',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery-button-prev',
            prevEl: '.gallery-button-next',
        },
        initialSlide: 12,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        spaceBetween: 34
    });
})