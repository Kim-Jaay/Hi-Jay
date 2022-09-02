window.addEventListener('DOMContentLoaded', () => {


    //////////////////


    const BgSlider = new Swiper('.bg_slide', {

        loop: true,
        effect: 'fade',
        touchRatio: 0, //드래그 금지

    });

    const PosterSlider = new Swiper('.poster_slide', {
        loop: true,
        slidesPerView: 8,
        spaceBetween: 20,
        touchRatio: 0, //드래그 금지
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
        }
    });

    const PosterBigSlider = new Swiper('.poster_slide_big', {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        touchRatio: 0, //드래그 금지

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
    document.querySelector('.bg_slide_handler .prev').addEventListener('click', () => {
        PosterBigSlider.slidePrev();
    });
    document.querySelector('.bg_slide_handler .next').addEventListener('click', () => {
        PosterBigSlider.slideNext();
    });


    const counters = document.querySelectorAll('.value');
    const speed = 500;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });










    //////////////////  
});



















