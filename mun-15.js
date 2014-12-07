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
		if($(this).scrollTop() > 3) {
			$('.text').hide();
			}
		else{
			$('.text').show();
			}
		lastScrollTop = st;
	}
	if($(window).width() > 600)                    // sets js don't work in mobile
	{    
		var targets = [$('#about'), $('#committees'), $('#apply'), $('#venue'), $('#team'), $('#contact')];
	
		for (var i = 0; i < targets.length; i++) {
			watchForScroll(targets[i]);
		}

		function watchForScroll(target) {
			var targetHeight = target.offset().top;
			$(document).scroll(function (e) {
			var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
			if (scrollPercent >= 0) {
				target.css('opacity', 1 - scrollPercent);
			}
		});
	  }
	}
});

