$(document).ready(function () {

    $('ul.works__tab').on('click', 'li:not(.works__btn_active)', function () {
        $(this)
            .addClass('works__btn_active').siblings().removeClass('works__btn_active')
    })

});