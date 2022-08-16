$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });
    $('.slider01').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });
    $('.slider02').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.angle i:nth-child(1)').on('click', function () {
        $('.friends_slide').slick('slickPrev');
    })

    $('.circle_arrows img:nth-child(1)').on('click', function () {
        $('.slider').slick('slickPrev');
    })
    $('.circle_arrows img:nth-child(2)').on('click', function () {
        $('.slider').slick('slickNext');
    })

    $('.circle_arrows img:nth-child(1)').on('click', function () {
        $('.slider01').slick('slickPrev');
    })
    $('.circle_arrows img:nth-child(2)').on('click', function () {
        $('.slider01').slick('slickNext');
    })

    $('.circle_arrows img:nth-child(1)').on('click', function () {
        $('.slider02').slick('slickPrev');
    })
    $('.circle_arrows img:nth-child(2)').on('click', function () {
        $('.slider02').slick('slickNext');
    })

    $('.since_slider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.since_slider02').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });
    $('.since_arrows img:nth-child(1)').on('click', function () {
        $('.since_slider').slick('slickPrev');
    })
    $('.since_arrows img:nth-child(2)').on('click', function () {
        $('.since_slider').slick('slickNext');
    })
    $('.since_arrows img:nth-child(1)').on('click', function () {
        $('.since_slider02').slick('slickPrev');
    })
    $('.since_arrows img:nth-child(2)').on('click', function () {
        $('.since_slider02').slick('slickNext');
    })


});