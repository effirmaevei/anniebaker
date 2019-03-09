$(document).ready(

    function (e) {
        // jQuery $() uses CSS selectors 
        var contents = document.getElementById('hhh').innerHTML = "stuff B";
        $('#hhh').html("Stuff B");

    });

// The ! is just a hack to avoid wrapping the self invoking function in parenthesis
// e is being replaced with jQuery.
// See for more info. https://stackoverflow.com/questions/10371539/why-define-an-anonymous-function-and-pass-it-jquery-as-the-argument
! function (e) {
    e('#hhh').html("sass");
}(jQuery);