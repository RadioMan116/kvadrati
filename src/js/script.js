

$('.responsive').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


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