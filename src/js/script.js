document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 200) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    // слайдер
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

    // підсвічування меню відповідно до секціїї (залишилась проблема з миганням)
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

    ///скрол 
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".header__link");

    const activateMenuItem = () => {
        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section;
            } else {
                break;
            }
        }

        menuLinks.forEach((link) => {
            link.classList.toggle("active", link.hash === `#${currentSection.id}`);
        });

    };

    window.addEventListener("scroll", activateMenuItem);

    /////для табів
    const filterBtns = document.querySelectorAll(".works__btn");
    const worksList = document.querySelector(".works__content");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((filterBtn) => {
                filterBtn.classList.remove("is-active");
            });
            btn.classList.add("is-active");

            const filterValue = btn.getAttribute("data-filter");

            for (const item of worksList.children) {
                if (filterValue === "all") {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else if (item.classList.contains(filterValue)) {
                    item.classList.remove('hide')
                    item.classList.add('show')
                } else {
                    item.classList.remove('show')
                    item.classList.add('hide')
                }
            }
        });
    });


});