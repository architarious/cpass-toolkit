require(['jquery', 'bootstrap/collapse', 'bootstrap/carousel', 'bootstrap/dropdown', 'bigTitles', 'smoothScroll','utils'  ], function($, collapse, carousel, dropdown){
	$('.site-logo').css('display', 'block');
	$('.site-logo').text('[changed by jQuery]');
	$('.carousel').carousel({
		interval:5000
	});  
	smoothScroll();
    resizeSegmentTitles("h1.title");
    bookmarker();
    tweet();
    facebook_share();
    popup();
    //$('.fb__share').onClick( fbs_click() );
	$('.collapse').collapse(); //bootstrap solution for navigation "navbar"$('.site-logo').bigText($('.site-logo'));

});


