require(['jquery', 'bootstrap/collapse', 'bootstrap/carousel', 'bootstrap/dropdown', 'bigTitles', 'smoothScroll','utils', 'jquery-mobile'  ], function($, collapse, carousel, dropdown){
	$('.site-logo').css('display', 'block');
	$('.site-logo').text('[changed by jQuery]');
	

	$('#mainCarousel').carousel({
		interval:false,
		wrap:false
	});  
	$('.carousel-control.left').click(function() {
	  $('#mainCarousel').carousel('prev');
	});
	$('.carousel-control.right').click(function() {
	  $('#mainCarousel').carousel('next');
	});
	$('#mainCarousel').swiperight(function(){
	  $(this).carousel('prev');
	});
	$('#mainCarousel').swipeleft(function(){
	  $(this).carousel('next');
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


