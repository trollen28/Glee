$(function () {

    $('.mobile__btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    $('.mobile__btn').on('click', function () {
        $('.mobile__btn').toggleClass('mobile__btn--active');
    });

    $('.main-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 5000,
    });

    $('.partners__box').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpead: 5000,
    });

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);

});