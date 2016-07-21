$(document).ready(function(){
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

  $('.m-primaryNav__more a').smoothScroll({
		easing: 'swing',
		speed: 'auto',
		autoCoefficient: 6
	});

  $('a.b-footer__return').on('click', function(){

		$.smoothScroll({
	    	easing: 'swing',
	    	speed: 'auto',
	    	autoCoefficient: 6
	  });
		return false;
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


    $('.b-featuredLink').each(function(){
			var i = $(this).children("img").attr("alt");
			$(this).prepend('<h3>' + i + '</h3>');
			$(this).append('<span class="outer"><span class="inner"></span></span>');

			var link = $(this);
			var href = link.attr("href");
			var icon = $(this).find(".inner");
			var target = $(this).attr('target');

			if(target !== undefined && target !== false && target !== '_blank' ){
				$(this).attr('target', '_blank')
			}

			if(href.indexOf("wvu.edu") <= 0){
				$(this).attr('target', '_blank');
				icon.addClass("icon-newtab");
			}if(href.indexOf(".pdf") >= 0){
				icon.addClass("icon-file-pdf");
			}if(href.indexOf("youtube.com") >= 0){
				icon.addClass("icon-youtube2");
			}if(href.indexOf(".doc", ".docX", ".dotx", ".dotm", ".dot", ".docm", ".docb") >= 0){
				icon.addClass("icon-file-word");
			}if(href.indexOf(".xls", ".xlt", ".xlm", ".xlsx", ".xlsm", ".csv", ".xltx", ".xltm", ".xla", ".xlam") >= 0){
				icon.addClass("icon-file-excel");
			}if(href.indexOf(".ppt", ".pot", ".pps", ".pptx", ".pptm", ".potx", ".potm", ".ppam", ".ppsx", ".ppsm", ".sldx", ".sldm") >= 0){
				icon.addClass("icon-file-powerpoint");
			}if(href.indexOf(".zip", ".7z", ".s7z", ".cab", ".dmg", ".jar", ".rar", ".tar", ".xar", ".zipx") >= 0){
				icon.addClass("icon-file-zip");
			}else{
				icon.addClass("icon-arrow-right")
			}
		});

    $('.b-advert').each(function(){
       var i = $(this).children("img").attr("alt");
       $(this).prepend('<span class="b-advert__text">' + i + '</span>');
       $(this).children("img").addClass("b-advert__img");
    });


	//resizeSegmentTitles("h1.title");







	$('#postfix--thumbs').perfectScrollbar({
		suppressScrollY: true,
		minScrollBarLength: 167

	});

	overthrow.sidescroller(
   document.querySelectorAll( ".overthrow-enabled .sidescroll-nextprev" ), {
		disableNav: true,
		fixedItemWidth: true
		});


});//end requireJS
