window.addEventListener('DOMContentLoaded', () => {


    //////////////////


    const BgSlider = new Swiper('.bg_slide', {
        loop: true,
        effect: 'fade',

    });

    const PosterSlider = new Swiper('.poster_slide', {
        loop: true,
        slidesPerView: 9,
        spaceBetween: 20,
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




    const counters = document.querySelectorAll('.value');
    const speed = 300;

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

