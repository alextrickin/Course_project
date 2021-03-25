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
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50
            },
            1024: {
                slidesPerColumn: 2,
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34
            },
            768: {
                slidesPerColumn: 2,
                slidesPerGroup: 1,
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

    var events_Swiper = new Swiper('.events-swiper', {
        // Optional parameters    
        loop: false,
        spaceBetween: 50,
        // If we need pagination
        pagination: {
            el: '.events-swiper-pagination',
            clickable: 'true'
        },
    });

    $(function () {

    });

    $(function () {
        $(".catalog__accordion").accordion({
            header: ".catalog__accordion_items-title",
            heightStyle: 'content'
        });
    });
    document.querySelector(".events__button").onclick = function () {
        document.querySelector(".events__button").style.cssText = "display: none;"
        if ((768 <= window.innerWidth) & (window.innerWidth < 1024)) {
            document.querySelector(".events__flex-container").style.cssText = "max-height: 2130px; "
        }
        if (1024 <= window.innerWidth) {
            document.querySelector(".events__flex-container").style.cssText = "max-height: 1420px; justify-content: space-evenly;"
        }
    };

    //    $(function () {
    //        $(".publications__accordion").accordion({
    //            active: true,
    //            collapsible: true,
    //            header: ".publications__accordion_items-title",
    //            heightStyle: 'content'
    //        });
    //    });
})
function getCheckedCheckBoxes() {
    $(".publications__categories-title").toggleClass("categories-opened");
    $(".publications__categories-title").toggleClass("categories-closed");
    var checkboxes = document.getElementsByClassName("categories__item_base-checkbox");
    if ($(".publications__categories-title").hasClass("categories-closed")) {
        for (var i = 0; i < checkboxes.length; i++) {
            var spanElement = $(checkboxes[i]).next();
            $(spanElement).css({ "display": "block" });
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            var spanElement = $(checkboxes[i]).next();
            if (checkboxes[i].checked) {
                $(spanElement).css({ "display": "block" });
            } else {
                $(spanElement).css({ "display": "none" });
            }
        }
    }
}