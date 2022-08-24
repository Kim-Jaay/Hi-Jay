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
        perMove: 1,
    }).mount();




    const TabMenu = document.querySelectorAll('.TabMenu>li');
    const TabCon = document.querySelectorAll('.TabCon>li')

    for (var i = 0; i < TabMenu.length; i++) {
        TabMenu[i].querySelector('.TabMenu>li>a').addEventListener('click', function (e) {
            e.preventDefault();
            for (var j = 0; j < TabMenu.length; j++) {
                // 나머지 버튼 클래스 제거
                TabMenu[j].classList.remove('on');

                // 나머지 컨텐츠 display:none 처리
                TabCon[j].style.display = 'none';
            }

            // 버튼 관련 이벤트
            this.parentNode.classList.add('on');

            // 버튼 클릭시 컨텐츠 전환
            activeCont = this.getAttribute('href');
            document.querySelector(activeCont).style.display = 'block';
        });
    }








});