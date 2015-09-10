$('head').append('<link rel="stylesheet" href="http://sinfonie-und-kammerorchester-kit-edu.netlify.com/style.css" type="text/css" />');

$(document).ready(function() 
{
	$(".nav div").each(function(idx, e) { 
		$(e).html('<a href="' + $("a:contains('" + e.innerText + "')")[0].href + '">' + e.innerText + '</a>'); 
	});

	$("#pressestimmen-content");

});