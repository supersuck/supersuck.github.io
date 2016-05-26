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

// Smooth Scroll
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
