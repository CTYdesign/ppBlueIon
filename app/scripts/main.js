
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


/* Load remote deck information for modal */

$(function () {

    var successfullPull = false;
    
    $('.deckButton').on('click', function () {

        var deckInfo = $(this).data('target');
    
    if ( successfullPull ) {
      $(deckInfo).on('shown.bs.modal', function(e) {
        $(deckInfo).modal('show');
      });
    } else {
      $('#deckModal').load('../decks/deck1.html', function(status) {
            $(deckInfo).modal('show');
        successfullPull = true;
            console.log('The info has loaded' + successfullPull);
          });
    }

    });

});

/* Pre-loader Initialization */
// $(window).load(function() { 
//       $('#status').fadeOut(); 
//       $('#preloader').delay(350).fadeOut('slow'); 
//       $('body').delay(350).css({'overflow':'visible'});
//     })