require(['jquery', 'bootstrap/collapse', 'bootstrap/carousel', 'bootstrap/dropdown', 'bigTitles', 'smoothScroll'  ], function($, collapse, carousel, dropdown){
	$('.site-logo').css('display', 'block');
	$('.site-logo').text('[changed by jQuery]');
	$('.carousel').carousel({
		interval:5000
	});
	smoothScroll();
    resizeSegmentTitles("h1.title");
	$('.collapse').collapse(); //bootstrap solution for navigation "navbar"$('.site-logo').bigText($('.site-logo'));
	$('.dropdown-toggle').dropdown();
	

});


