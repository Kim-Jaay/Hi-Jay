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


    const ProductCon = new Splide('.ProductCon', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
    }).mount();

});

{/* <script>
    $(function () {
        $('.tab_menu>li>a').on('click', function (e) {
            e.preventDefault();
            // console.log($(this).parent().index());
            var idx = $(this).parent().index();
            $('.tab_content>li').removeClass('on');
            $('.tab_content>li').eq(idx).addClass('on');
            $('.tab_menu>li').removeClass('on')
            $(this).parent().addClass('on');
        });


</script> */}