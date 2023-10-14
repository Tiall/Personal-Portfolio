// JavaScript source code
$(document).ready(function () {
    // set the background size to the height of the document
    var h = $(document).height();
    $('.nav-stuff').css('background-size', 'auto ' + h + 'px')

    var scr = $(window).scrollTop();
    $('.nav-stuff').css('background-position', '0px -' + scr + 'px');

    // scrolling set
    $(window).scroll(function (e) {        
        var scr2 = $(window).scrollTop();
        $('.nav-stuff').css('background-position', '0px -' + scr2 + 'px');
    });

    window.addEventListener('resize', function (event) {
        // do stuff here
        var h2 = $(document).height();
        $('.nav-stuff').css('background-size', 'auto ' + h2 + 'px')
    });
        
});