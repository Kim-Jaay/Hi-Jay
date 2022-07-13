$(function () {

    $('.main_slider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_num').text((c ? (c + 1) : 1) + " / " + s.slideCount);


        $('.main_arrow').removeClass('on');
        if (c === 0) {
            $('.main_arrow').addClass('on')
        }


        $('.main_slider').on('afterChange', function () {
            $(".pro-bar").addClass('pro-ani');
        });
        $('.main_slider').on('beforeChange', function () {
            $('.pro-bar').removeClass('pro-ani');
        });
    });


    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 600,
        fade: true,
    });


    $('.main_arrow .prev').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });

    $('.main_arrow .next').on('click', function () {
        $('.main_slider').slick('slickNext');
    });
});