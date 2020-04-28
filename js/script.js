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
}); // scroll fn

$(function () {
    $('.tab-btn li').click(function () {
        $('.port-list li').hide(500);

        if ($(this).hasClass('all')) {
            $('.port-list li').fadeIn(1000);
        } else if ($(this).hasClass('copy')) {
            $('.port-list .copy').fadeIn(1000);
        } else if ($(this).hasClass('design')) {
            $('.port-list .design').fadeIn(1000);
        } else if ($(this).hasClass('etc')) {
            $('.port-list .etc').fadeIn(1000);
        }
    });
}); //portfolio fn

$(function () {
    $('#popup').hide();

    $('.port-list .etc').click(function (e) {
        e.preventDefault();
        $('#popup').show();

        let $hwatoo = $(this).find('.polaroid');
        let path = $(this).find('a').attr('href');

        if (path != $('.pop-inner img').attr('src')) {
            // if ($hwatoo.hasClass('hwatoo')) {
            $('.pop-inner img').attr({ src: path });
            // }
        }
    });
    $('#popup .close, .pop-bg').click(function () {
        $('#popup').hide();
    });
}); //popup fn
