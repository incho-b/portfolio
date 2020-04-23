$(function () {
    $(window).scrollTop(0);

    $(window).scroll(function () {
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 400 && $(window).scrollTop() < 1900) {
            // $('.graph').addClass('on');

            setTimeout(function () {
                $('.graph').eq(0).addClass('on');
            }, 0);
            setTimeout(function () {
                $('.graph').eq(1).addClass('on');
            }, 500);
            setTimeout(function () {
                $('.graph').eq(2).addClass('on');
            }, 1000);
            setTimeout(function () {
                $('.graph').eq(3).addClass('on');
            }, 1500);
            setTimeout(function () {
                $('.graph').eq(4).addClass('on');
            }, 2000);
            setTimeout(function () {
                $('.graph').eq(5).addClass('on');
            }, 2500);
            setTimeout(function () {
                $('.graph').eq(6).addClass('on');
            }, 3000);
        } else {
            $('.graph').removeClass('on');
        }
    });
});
