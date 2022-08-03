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



})