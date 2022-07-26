$(function () {
    $('.main_visual').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.btn').on('click', function () {
        $('.at_home_slide').slick('slickNext');
    })

    $('.at_home_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        centerMode: true,
    });

    $('.slide01').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 0,
        speed: 3000,
        vertical: true,
        slidesToShow: 3,
        cssEase: "linear",
    });

    $('.slide02').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 0,
        speed: 3000,
        vertical: true,
        slidesToShow: 3,
        cssEase: "linear",
    });

    $('.slide_small').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        variableWidth: true
    });

    $('.small_btn').on('click', function () {
        $('.slide_small').slick('slickNext');
    })

    AOS.init();

});