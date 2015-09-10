
var basePath = "//sinfonie-und-kammerorchester-kit-edu.netlify.com/";

$('head').append('<link rel="stylesheet" href="' + basePath + 'style.css" type="text/css" />');

$(document).ready(function() 
{
	$(".nav div").each(function(idx, e) { 
		$(e).html('<a href="' + $("a:contains('" + e.innerText + "')")[0].href + '">' + e.innerText + '</a>'); 
	});

	$("#pressestimmen-content").each(function(idx, e) {
		
		
		
		$.getJSON(basePath + "data/pressestimmen.json", function(data) {
		  var html = "";
		  $.each(data, function(key, val) {
			html += "<p>";
			
			html += '<a href="' + val.link + '">' + val.title + '</a>';
			html += val.text;
			
			html += "</p>";
			
		  });
		 
		  $(e).html(html);
		});
	});

});