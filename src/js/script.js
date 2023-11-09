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

    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 200) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

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

    header.addEventListener('click', event => {
        if (event.target.classList.contains('header__link')) {
            event.preventDefault();

            const targetId = event.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, 600);
                window.scrollTo(0, run);
                if (timeElapsed < 600) requestAnimationFrame(animation);
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});