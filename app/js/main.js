$(function () {

    $(".filter-price__input").ionRangeSlider({
        prefix: "$",

        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },

        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.mobile__btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    $('.mobile__btn').on('click', function () {
        $('.mobile__btn').toggleClass('mobile__btn--active');
    });

    $('.shop__grid').on('click', function () {
        $('.shop__btn-grid').addClass('shop__btn-grid--active');
        $('.shop__btn-list').removeClass('shop__btn-list--active');
        $('.shop__items').removeClass('shop__items--list');
    });

    $('.shop__list').on('click', function () {
        $('.shop__btn-list').addClass('shop__btn-list--active');
        $('.shop__items').addClass('shop__items--list');
        $('.shop__btn-grid').removeClass('shop__btn-grid--active');
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
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".recent-card__stars").rateYo({
        starWidth: "13px",
        normalFill: "#e0e0e0",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "5px",
    });

    $(".product-card__stars").rateYo({
        starWidth: "19px",
        normalFill: "#e0e0e0",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "13px",
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