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
        loop: false,


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
        //initialSlide: 13,
        slidesPerColumnFill: "row",
        breakpoints: {
            1920: {
                slidesPerColumn: 2,
                slidesPerView: 3,
                spaceBetween: 50
            },
            1024: {
                slidesPerColumn: 2,
                slidesPerView: 2,
                spaceBetween: 34

            },
            768: {
                slidesPerColumn: 2,
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerColumn: 1,
                slidesPerView: 1,
                spaceBetween: 30
            },
        },
    });
    $(function () {
        $(".catalog__accordion").accordion({            
            header: ".catalog__accordion_item-title",
            heightStyle: 'content'
        });
        
    });
})