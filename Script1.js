// JavaScript source code
$(document).ready(function () {
    $(window).scroll(function (e) {
        var h = $(document).height(); $('.navbar').css('background-size', 'auto ' + h + 'px')
        var scr = $(window).scrollTop();
        $('.nav-stuff').css('background-position', '0px -' + scr + 'px');
    });
});