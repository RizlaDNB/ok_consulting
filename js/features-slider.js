$(document).ready(function(){
    $('.features-slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        swipe: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button class="prev-features"></button>',
        nextArrow: '<button class="next-features"></button>'
    });
});