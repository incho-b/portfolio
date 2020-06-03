$(function () {
    $(window).scrollTop(0);

    $(window).scroll(function () {
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 10) {
            $('#notice').css({ opacity: 0.5 });
        } else {
            $('#notice').css({ opacity: 1 });
        }

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

    $('.polaroid a').click(function (e) {
        e.preventDefault();
    });
}); //portfolio fn

// $(function () {
//     $('#portfolio-img-popup').hide();

//     $('.port-list .etc').click(function (e) {
//         e.preventDefault();
//         $('#portfolio-img-popup').show();

//         // let $hwatoo = $(this).find('.polaroid');
//         let path = $(this).find('a').attr('href');

//         if (path != $('.pop-inner img').attr('src')) {
//             // if ($hwatoo.hasClass('hwatoo')) {
//             $('.pop-inner img').attr({ src: path }).css({ width: '100%' });
//             // }
//         }
//     });
//     $('#portfolio-img-popup .close, .pop-bg').click(function () {
//         $('#portfolio-img-popup').hide();
//     });
// }); //portfolio-img-popup fn

$(function () {
    $('#loading').hide();
    // loadHeart();

    function loadHeart() {
        $('.heart img').css({ opacity: 0 });
        $('#loading').show();
        setTimeout(function () {
            $('.heart1 img').eq(3).animate({ opacity: 1 }, 1000);
        }, 0);
        setTimeout(function () {
            $('.heart1 img').eq(2).animate({ opacity: 1 }, 1000);
        }, 1000);
        setTimeout(function () {
            $('.heart1 img').eq(1).animate({ opacity: 1 }, 1000);
        }, 2000);
        setTimeout(function () {
            $('.heart1 img').eq(0).animate({ opacity: 1 }, 1000);
        }, 3000);

        setTimeout(function () {
            $('#loading').animate({ top: '-100vh', opacity: 0 }, 1000);
        }, 4000);
        // setTimeout(function () {
        //     $('.heart1 img').eq(0).animate({ opacity: 1 }, 1000);
        // }, 0);
        // setTimeout(function () {
        //     $('.heart1 img').eq(1).animate({ opacity: 1 }, 1000);
        // }, 1000);
        // setTimeout(function () {
        //     $('.heart1 img').eq(2).animate({ opacity: 1 }, 1000);
        // }, 2000);
        // setTimeout(function () {
        //     $('.heart1 img').eq(3).animate({ opacity: 1 }, 1000);
        // }, 3000);

        // setTimeout(function () {
        //     $('#loading').animate({ top: '-100vh', opacity: 0 }, 1000);
        // }, 4000);

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
    // $('.side li').hover(function () {
    //     $('.side li').removeClass('on');
    //     $(this).toggleClass('on');
    // });

    $('.side a').click(function () {
        console.log($(this));
    });
}); //side btn fn

$(function () {
    $('#notice').draggable();
    $('.notice-button').click(function () {
        $('#notice').hide();
    });
}); // #notice - popup fn

$(function () {
    $('.pp-bg').hide();
    $('.port-list-sub.design .port-thum, .port-list-sub.copy .port-thum, .port-list-sub.etc .port-thum').click(function () {
        $('.portfolio-popup-inner').hide();

        if ($(this).parents('.port-list-sub').hasClass('web-fairy')) {
            $('#portfolio-popup .portfolio-popup-inner.web-fairy').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-mungdo')) {
            $('#portfolio-popup .portfolio-popup-inner.web-mungdo').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-penguni')) {
            $('#portfolio-popup .portfolio-popup-inner.web-penguni').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-preciosa')) {
            $('#portfolio-popup .portfolio-popup-inner.web-preciosa').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-a-chon')) {
            $('#portfolio-popup .portfolio-popup-inner.web-a-chon').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-pizzahut')) {
            $('#portfolio-popup .portfolio-popup-inner.web-pizzahut').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-hanatour')) {
            $('#portfolio-popup .portfolio-popup-inner.web-hanatour').show();
        } else if ($(this).parents('.port-list-sub').hasClass('web-medicalog')) {
            $('#portfolio-popup .portfolio-popup-inner.web-medicalog').show();
        } else if ($(this).parents('.port-list-sub').hasClass('de-hwatoo')) {
            $('#portfolio-popup .portfolio-popup-inner.de-hwatoo').show();
        } else if ($(this).parents('.port-list-sub').hasClass('de-a-chon')) {
            $('#portfolio-popup .portfolio-popup-inner.de-a-chon').show();
        } else if ($(this).parents('.port-list-sub').hasClass('de-yogurt')) {
            $('#portfolio-popup .portfolio-popup-inner.de-yogurt').show();
        }

        $('#portfolio-popup').animate({ top: 0 });
        $('.pp-bg').fadeIn();
    });

    $('.pp-bg, .pp-button-close').click(function () {
        $('#portfolio-popup').animate({ top: '100%' });
        $('.pp-bg').hide();
    });
}); //#portfolio - popup fn

$(function () {
    $('.pp-slider-btn--right').click(function () {
        $(this)
            // .parent('.pp-slider-btn')
            .siblings('.pp-sub-img__slide')
            .animate({ left: '-=100%' }, function () {
                $(this).append($(this).find('img').first());
                $(this).css({ left: 0 });
            });
    });

    $('.pp-slider-btn--left').click(function () {
        $(this)
            // .parent('.pp-slider-btn')
            .siblings('.pp-sub-img__slide')
            .animate({ left: '+=100%' }, function () {
                // $('.pp-sub-img__slide').prepend($('.pp-sub-img__slide img').last());
                $(this).prepend($(this).find('img').last());
                $(this).css({ left: 0 });
            });
    });
});
