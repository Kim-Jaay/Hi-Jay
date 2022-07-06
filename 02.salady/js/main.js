$(function () {

    $('.main_slide').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_num').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });


    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.main_food'
    });

    $('.main_food').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        verticalSwiping: true,
        cssEase: 'linear'
    })



    $('.main_arrow img:nth-child(1)').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_arrow img:nth-child(2)').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.main_arrow img:nth-child(1)').on('click', function () {
        $('.main_food').slick('slickPrev');
    });

    $('.main_arrow img:nth-child(2)').on('click', function () {
        $('.main_food').slick('slickNext');
    });

});