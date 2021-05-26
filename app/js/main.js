$(function(){
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 5000,
    });

    var mixer = mixitup('.products__items');
});