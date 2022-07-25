$(function () {
    $('.at_home_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
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
});