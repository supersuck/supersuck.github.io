$(window).load(function () {
    $('.preloader-wrapper').delay(500).fadeOut();
    $('.preloader').delay(1000).fadeOut("slow");
});

$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    $('#toggle_color').click(function () {
       $('.blue').toggleClass('teal', 'blue');
       $('.blue-text').toggleClass('teal-text', 'blue-text');
    });
});

