require(['jquery', 'overthrow-sidescroller',  'bootstrap/collapse', 'bootstrap/carousel', 'bootstrap/dropdown', 'bigTitles', 'jquery-smoothScroll', 'jquery-perfect-scrollbar'], function($, carousel, dropdown){
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

		$(function(){

			var month = [];
			month[0] = "Jan";
			month[1] = "Feb";
			month[2] = "Mar";
			month[3] = "Apr";
			month[4] = "May";
			month[5] = "Jun";
			month[6] = "Jul";
			month[7] = "Aug";
			month[8] = "Sep";
			month[9] = "Oct";
			month[10] = "Nov";
			month[11] = "Dec";

			ev = {}

			$('.b-wvuCalendar .eventName').each(function(i, event) {

				ev.title = $(event).find('a').text();
				ev.link = $(event).find('a').attr('href');

			});//end .eventName

			$('.b-wvuCalendar .eventDate').each(function(i, event) {

				ev.date = new Date($(this).text());
				ev.month = month[ev.date.getMonth()];
				ev.day = ev.date.getDate();

				$(this).html('<a href="' + ev.link + '" class="b-wvuCalendar__event"><span class="b-wvuCalendar__event_month">' + ev.month + '</span><span class="b-wvuCalendar__event_day">' + ev.day + '</span></a>')




			});//end .eventDate



		});//end calendar script




	resizeSegmentTitles("h1.title");
   	//$('.collapse').collapse(); //bootstrap solution for navigation "navbar"$('.site-logo').bigText($('.site-logo'));





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

	$('#postfix--thumbs').perfectScrollbar({
		suppressScrollY: true,
		minScrollBarLength: 167

	});

	overthrow.sidescroller(
   document.querySelectorAll( ".overthrow-enabled .sidescroll-nextprev" ), {disableNav: true, fixedItemWidth: true});


});//end requireJS
