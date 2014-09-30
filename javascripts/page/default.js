define(['jquery', 'bootstrap/collapse'], function($, collapse){
	$('.site-logo').css('display', 'block');
	$('.site-logo').text('[changed by jQuery]');
	alert('hello world');

	$('.collapse').collapse(); //bootstrap solution for navigation "navbar"
});
