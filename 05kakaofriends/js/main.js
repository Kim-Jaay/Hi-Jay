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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                }
            }],
    });

    $('.angle i:nth-child(1)').on('click', function () {
        $('.friends_slide').slick('slickPrev');
    })

    $('.angle i:nth-child(2)').on('click', function () {
        $('.friends_slide').slick('slickNext');
    })


    $('.shop_slider').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                }
            }],
    });
    $('.shop_angle i:nth-child(1)').on('click', function () {
        $('.shop_slider').slick('slickPrev');
    })

    $('.shop_angle i:nth-child(2)').on('click', function () {
        $('.shop_slider').slick('slickNext');
    })


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


    $('.contianer_slide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        slidesToShow: 2,
    });

});

