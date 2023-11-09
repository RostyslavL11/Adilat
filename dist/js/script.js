// $(document).ready(function () {

//     $('ul.works__tabs button').on('click', 'button:not(.works__btn_active)', function () {
//         $(this)
//             .addClass('works__btn_active')
//             .siblings()
//             .removeClass('works__btn_active')
//     })

// });

// $(document).ready(function () {
//     $('ul.works__tabs button').on('click', function () {
//         $(this)
//             .addClass('works__btn_active')
//             .parent().siblings().find('button')
//             .removeClass('works__btn_active');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {

        slidesPerView: 2,
        spanceBetween: 20,
        pagination: {
            el: '.review__dots',
            bulletActiveClass: 'review__dots_dot-active',
            bulletClass: 'review__dots_dot',
            clickable: true
        },

        navigation: {
            nextEl: ".review__button_next",
            prevEl: ".review__button_prev",
        },
    });
});