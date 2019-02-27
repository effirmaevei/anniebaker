// $(document).ready(

//     function (e) {
//         // e("#hhh").html("dasda");
//         var contents = $('#hhh').html();
//         $('#hhh').html("ssss");

//     });

// The ! is just a hack to avoid wrapping the self invoking function in parenthesis
// e is being replaced with jQuery.
// See for more info. https://stackoverflow.com/questions/10371539/why-define-an-anonymous-function-and-pass-it-jquery-as-the-argument
! function (e) {
    e('#hhh').html("sass");
}(jQuery);