$(window).load(function () {
    $('.preloader-wrapper').delay(500).fadeOut();
    $('.preloader').delay(1000).fadeOut("slow");
});

$(document).ready(function () {
    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.parallax').parallax();

    $('#toggle_color').click(function () {
        $('.blue').toggleClass('teal', 'blue');
        $('.blue-text').toggleClass('teal-text', 'blue-text');
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        items: 1,
        loop: true
    });
    $('#carousel-prev').click(function () {
       owl.trigger('prev.owl.carousel', [300]);
    });
    $('#carousel-next').click(function () {
        owl.trigger('next.owl.carousel', [300]);
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

                //navbar focus active class toggle
                if (!$(this).hasClass('btn')) {
                    $(this).closest('ul').find('a').removeClass('active');
                    $(this).addClass('active');
                }

                //side-nav
                if ($(this).closet('ul').hasClass('side-nav')) {

                }

                return false;
            }
        }
    });
});
