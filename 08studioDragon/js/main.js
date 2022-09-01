window.addEventListener('DOMContentLoaded', () => {


    //////////////////


    const BgSlider = new Swiper('.bg_slide', {
        loop: true,
        effect: 'fade',

    });

    const PosterSlider = new Swiper('.poster_slide', {
        loop: true,
        slidesPerView: 9,
        spaceBetween: 30,
    });

    document.querySelector('.bg_slide_handler .prev').addEventListener('click', () => {
        BgSlider.slidePrev();
    });
    document.querySelector('.bg_slide_handler .next').addEventListener('click', () => {
        BgSlider.slideNext();
    });
    document.querySelector('.bg_slide_handler .prev').addEventListener('click', () => {
        PosterSlider.slidePrev();
    });
    document.querySelector('.bg_slide_handler .next').addEventListener('click', () => {
        PosterSlider.slideNext();
    });






    //////////////////



});

