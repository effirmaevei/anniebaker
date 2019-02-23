$(document).ready(function () {

    var x = 56; // $('body').css('padding-top');
    $('.header').height($(window).height() - x);
    $('body').css('padding-top', x);
})