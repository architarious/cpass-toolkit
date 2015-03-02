require(['jquery', 'bootstrap/collapse', 'bootstrap/carousel', 'bootstrap/dropdown', 'bigTitles', 'jquery-smoothScroll', 'overthrow-sidescroller', 'jquery-perfect-scrollbar'], function($, collapse, carousel, dropdown){
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
	
    $('#masthead-cpass a, #header a, a.footer--return').smoothScroll(
    {
    	easing: 'swing',
    	speed: 'auto',
    	autoCoefficient: 6
    });


    
	$('#postfix--thumbs').perfectScrollbar({
		suppressScrollY: true,
		minScrollBarLength: 167

	});
    
    overthrow.sidescroller(
      document.querySelectorAll( ".overthrow-enabled .sidescroll-nextprev" ), {disableNav: true, fixedItemWidth: true, snapScroll: true });

    overthrow.sidescroller( document.querySelectorAll(".sidescroll"), {
        snapScroll: true,
        snapTolerance: 30
    });

    overthrow.sidescroller( document.querySelectorAll( ".overthrow-enabled .snapscroll" ), { snapScroll: false });


    
    resizeSegmentTitles("h1.title");
   	$('.collapse').collapse(); //bootstrap solution for navigation "navbar"$('.site-logo').bigText($('.site-logo'));

   	

    
    /* these former utilities have been replaced by addthis
       for reasons regarding it's simplicity and it's availability of analytics
    //bookmarker();
    //tweet();
    //facebook_share();
    //popup();
    //$('.fb__share').onClick( fbs_click() );
    */

    /* these jquery-mobile methods have been removed and replaced with
	   overshot-js 
	$('#mainCarousel').swiperight(function(){
	  $(this).carousel('prev');
	});
	$('#mainCarousel').swipeleft(function(){
	  $(this).carousel('next');
	});
	*/

	/* this custom smoothscroll function has been replaced by jquery.smooth-scroll
	   due to it's ability to target individual links
	   smoothScroll();
	*/

});