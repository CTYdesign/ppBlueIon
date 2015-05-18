
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


function toggleNav() {
	$('nav').addClass('navOpen');
}

function closeNav() {
	$('nav').removeClass('navOpen');
}

$(function() {
	$('.toggleNav').click(function() {
		toggleNav();
	});
	$('.close').click(function() {
		closeNav();
	});
});
