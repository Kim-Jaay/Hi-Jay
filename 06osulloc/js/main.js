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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                }
            }],
    });
    $('.right_slider').slick({
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
    });
    $('.since_arrows img:nth-child(2)').on('click', function () {
        $('.since_slider').slick('slickNext');
    });
    $('.since_arrows img:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev');
    });
    $('.since_arrows img:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext');
    });


    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.to_top').fadeIn(300)
        } else {
            $('.to_top').fadeOut(1000)
        }
    });

});