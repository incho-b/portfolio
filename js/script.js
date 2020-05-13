$(function () {
    $(window).scrollTop(0);

    $(window).scroll(function () {
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 10) {
            $('#notice').css({ opacity: 0.5 });
        } else if ($(window).scrollTop() > 400 && $(window).scrollTop() < 1900) {
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
            $('#notice').css({ opacity: 1 });
        }
    });

    if ($(window).scrollTop() > 2600) {
        $('.cont-inner .title').addClass('on');
    }
}); // scroll fn

$(function () {
    $('.tab-btn li').click(function () {
        $('.port-list li').hide(500);
        $('.tab-btn li').removeClass('on');
        $(this).addClass('on');

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
            $('.pop-inner img').attr({ src: path }).css({ width: '100%' });
            // }
        }
    });
    $('#popup .close, .pop-bg').click(function () {
        $('#popup').hide();
    });
}); //popup fn

$(function () {
    $('#loading').hide();
    // loadHeart();

    function loadHeart() {
        $('.heart img').css({ opacity: 0 });
        $('#loading').show();
        setTimeout(function () {
            $('.heart1 img').eq(0).animate({ opacity: 1 }, 1000);
        }, 0);
        setTimeout(function () {
            $('.heart1 img').eq(1).animate({ opacity: 1 }, 1000);
        }, 1000);
        setTimeout(function () {
            $('.heart1 img').eq(2).animate({ opacity: 1 }, 1000);
        }, 2000);
        setTimeout(function () {
            $('.heart1 img').eq(3).animate({ opacity: 1 }, 1000);
        }, 3000);

        setTimeout(function () {
            $('#loading').animate({ top: '-100vh', opacity: 0 }, 1000);
        }, 4000);

        // setTimeout(function () {
        //     $('.heart1 img').hide();
        //     $('.heart2 img').eq(0).animate({ opacity: 1 }, 1000);
        // }, 4000);
        // setTimeout(function () {
        //     $('.heart2 img').eq(1).animate({ opacity: 1 }, 1000);
        // }, 5000);
        // setTimeout(function () {
        //     $('.heart2 img').eq(2).animate({ opacity: 1 }, 1000);
        // }, 6000);
        // setTimeout(function () {
        //     $('.heart2 img').eq(3).animate({ opacity: 1 }, 1000);
        // }, 7000);
        // setTimeout(function () {
        //     $('#loading').hide();
        // }, 8000);
    }
}); //loading fn

$(function () {
    $('.side li').hover(function () {
        $('.side li').removeClass('on');
        $(this).toggleClass('on');
    });
}); //side btn fn
