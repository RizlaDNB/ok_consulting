$(document).ready(function(){
    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<button class="prev-feedback"></button>',
        nextArrow: '<button class="next-feedback"></button>'
    });
});