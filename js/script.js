$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header.header').addClass('fixed');
            $('#f_cart').stop().animate({
                bottom: '150px'
            }, 100);
            $('#go-top').stop().animate({
                bottom: '70px'
            }, 150);
        } else {
            $('header.header').removeClass('fixed');
            $('#f_cart').stop().animate({
                bottom: '-70px'
            }, 100);
            $('#go-top').stop().animate({
                bottom: '-50px'
            }, 150);
        }
    });
    $('#go-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function () {
            $('#go-top').stop().animate({
                bottom: '-50px'
            }, 150);
        });
    });
});