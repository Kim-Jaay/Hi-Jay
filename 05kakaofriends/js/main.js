$(function () {
    $('.topbanner i').on('click', function () {
        $('.topbanner').slideUp();
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.friends_slide').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
    });

    $('.angle i:nth-child(1)').on('click', function () {
        $('.friends_slide').slick('slickPrev');
    })

    $('.angle i:nth-child(2)').on('click', function () {
        $('.friends_slide').slick('slickNext');
    })



})