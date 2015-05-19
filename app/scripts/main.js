
/*

Powell Peralta Test Project - Scripts
Author: Topher Young
Version: 1.0

*/


/* Set up slideshow */

$(document).ready(function() {

$('.slides').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: 'linear'
});
			
});


/* Declare mobile nav functions */

function toggleNav() {
	$('nav').addClass('navOpen');
}

function closeNav() {
	$('nav').removeClass('navOpen');
}

/* Trigger mobile nav functions */

$(function() {
	$('.toggleNav').click(function() {
		toggleNav();
	});
	$('.close').click(function() {
		closeNav();
	});
});

/* Enable nav scroll */

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});