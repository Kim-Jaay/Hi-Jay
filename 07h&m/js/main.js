window.addEventListener('DOMContentLoaded', () => {

    const MainSlider = new Splide('.MainVisual', {
        type: 'loop',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        perPage: 1,
    }).mount();

    const ProductCon01 = new Splide('.ProductCon01', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();

    const ProductCon02 = new Splide('.ProductCon02', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();

    const ProductCon03 = new Splide('.ProductCon03', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();

    const ProductCon04 = new Splide('.ProductCon04', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();

    const ProductCon05 = new Splide('.ProductCon05', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();

    const ProductCon06 = new Splide('.ProductCon06', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
            },
        },
    }).mount();



    const tabList = document.querySelectorAll('.TabMenu>li');
    const contents = document.querySelectorAll('.TabCon>li')

    tabList.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            tabList.forEach(el => el.classList.remove('on'))
            el.classList.add('on');
            contents.forEach(el => el.classList.remove('on'))
            contents[idx].classList.add('on')

        })

    });




});
