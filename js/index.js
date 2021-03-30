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


    var publications_Swiper = new Swiper('.publications-swiper', {
        // Optional parameters    
        loop: false,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.publications-swiper-button-prev',
            prevEl: '.publications-swiper-button-next',
        },
        // If we need pagination
        pagination: {
            el: '.publications-swiper-pagination',
            clickable: 'true',
            type: 'fraction'
        },

        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            640: {
                spaceBetween: 34
            },
        },
    });


    var publications_Swiper = new Swiper('.projects-swiper', {
        // Optional parameters    
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '.projects-swiper-button-prev',
            prevEl: '.projects-swiper-button-next',
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
        },
    });


    $(function () {
        $(".catalog__accordion").accordion({
            header: ".catalog__accordion_items-title",
            heightStyle: 'content'
        });
    });

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var contactMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758585, 37.603154],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });
        

        var myCircle = new ymaps.Circle([
            // Координаты центра круга.
            [55.758463, 37.601079],
            // Радиус круга в метрах.
            25
        ], {
            // Описываем свойства круга.
            // Содержимое балуна.
            //balloonContent: "Радиус круга - 10 км",
            // Содержимое хинта.
            //hintContent: "Подвинь меня"
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            //draggable: true,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#9D5CD0",
            // Цвет обводки.
            strokeColor: "#9D5CD0",
            // Прозрачность обводки.
            //strokeOpacity: 1,
            // Ширина обводки в пикселях.
            //strokeWidth: 5
        });
    
        // Добавляем круг на карту.
        contactMap.geoObjects.add(myCircle);



    }

    document.querySelector(".events__button").onclick = function () {
        document.querySelector(".events__button").style.cssText = "display: none;"
        if ((768 <= window.innerWidth) & (window.innerWidth < 1024)) {
            document.querySelector(".events__flex-container").style.cssText = "max-height: 2130px; "
        }
        if (1024 <= window.innerWidth) {
            document.querySelector(".events__flex-container").style.cssText = "max-height: 1420px; justify-content: space-evenly;"
        }
    };


})

function changeClassCategoriesItem() {
    var currentWidth = document.body.clientWidth + 17
    if (currentWidth < 768) {
        if ($(".publications__categories-title").hasClass("categories-closed")) {
            var checkboxes = document.getElementsByClassName("categories__item_base-checkbox");
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
}

function getCheckedCheckBoxes() {
    var currentWidth = document.body.clientWidth + 17
    var checkboxes = document.getElementsByClassName("categories__item_base-checkbox");
    if (currentWidth < 768) {
        if ($(".publications__categories-title").hasClass("categories-opened")) {
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
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            var spanElement = $(checkboxes[i]).next();
            $(spanElement).css({ "display": "block" });
        }

    }
}

function changeCategoriesClass() {
    $(".publications__categories-title").toggleClass("categories-opened");
    $(".publications__categories-title").toggleClass("categories-closed");
    getCheckedCheckBoxes()
}

window.onresize = function () {
    getCheckedCheckBoxes()
}

//window.addEventListener('focusin', event => console.log(event.target));