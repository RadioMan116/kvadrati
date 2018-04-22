$(function () {


    var btnUp = $('.up');

    function scroolBtn(){
        var top = $(this).scrollTop();

        if (top > 300) {
            btnUp.fadeIn(500);
        }
        else {
            btnUp.fadeOut(500);
        }
    }

    scroolBtn();

    $(document).on('scroll', scroolBtn);

    btnUp.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);

    })


});

window.onload = function () {
    VK.init({apiId: 6337697, onlyWidgets: true});
    VK.Widgets.Comments('vk_comments', {autoPublish: 1, limit: 5}, 321);
}