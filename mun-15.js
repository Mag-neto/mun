// JS for hide header when scroll down and show when scroll up
// Hide Header on on scroll down
$(document).ready(function () {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var pageHeight = $('#welcome').height();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
    
    // Make sure they scroll more than pageHeight
		//if(Math.abs(lastScrollTop - st) <= pageHeight)
			//return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
		if (st > pageHeight){
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		}
		else {
        // Scroll Up
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    
		lastScrollTop = st;
	}
});