// $(document).ready(function () {

//     // var x = 56; // $('body').css('padding-top');
//     // $('.header').height($(window).height() - x);
//     // $('body').css('padding-top', x);
//     console.log(32 + 5);
// });

// The ! is just a hack to avoid wrapping the self invoking anonymous function in parenthesis
// e is being replaced with jQuery.
// See for more info. https://stackoverflow.com/questions/10371539/why-define-an-anonymous-function-and-pass-it-jquery-as-the-argument

function audioControl(song) {
    var mediaPlayer;
    mediaPlayer = document.getElementById('player');


    // mediaPlayer.controls = false;

    if (mediaPlayer.paused) {
        mediaPlayer.src = song;
        mediaPlayer.load();
        mediaPlayer.play();
    } else {
        mediaPlayer.pause();
        // mediaPlayer.currentTime = 0;
    }
}

! function (e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({
                    scrollTop: a.offset().top - 72
                }, 1e3, "easeInOutExpo"),
                    !1
        }
    }),
        e(".js-scroll-trigger").click(function () {
            e(".navbar-collapse").collapse("hide")
        }),
        e("body").scrollspy({
            target: "#mainNav",
            offset: 75
        });
    var a = function () {
        100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-scrolled") : e("#mainNav").removeClass("navbar-scrolled")
    };
    a(),
        e(window).scroll(a),
        e("#portfolio").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        })
}(jQuery);