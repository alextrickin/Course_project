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
        //loop: false,

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
        //slidesPerView: 2,
        //slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        //slidesPerGroup: 2,
        //spaceBetween: 34,
        breakpoints: {
            1920: {
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 5
            },
            1024: {
                slidesPerColumn: 2,
                slidesPerGroup: 2,
                slidesPerView: 2
                    //spaceBetween: 5

            },
            768: {
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                slidesPerView: 2
            },
            640: {
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                slidesPerView: 1
                    //spaceBetween: 20
            },
        },
    });
})