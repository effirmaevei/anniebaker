$(document).ready(

    function (e) {
        // jQuery $() uses CSS selectors 
        var contents = document.getElementById('hhh').innerHTML = "stuff B";
        $('#hhh').html("Stuff B");


    });

// The ! is just a hack to avoid wrapping the self invoking anonymous function in parenthesis
// e is being replaced with jQuery.
// See for more info. https://stackoverflow.com/questions/10371539/why-define-an-anonymous-function-and-pass-it-jquery-as-the-argument
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
    a(), e(window).scroll(a)
}(jQuery);
