window.addEventListener('DOMContentLoaded', () => {

    new Splide('.splide', {
        type: 'loop',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        perPage: 1,
        // padding: { left: '40px', right: '40px' }

    }).mount();

});