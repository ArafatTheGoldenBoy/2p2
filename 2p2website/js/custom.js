// -- counter
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 50,
        time: 1000
    });
});

// -- Scrolling Effect
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})