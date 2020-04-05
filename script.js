

var basePath = "//sgraf812.github.io/sinfonie-und-kammerorchester.kit.edu/";
//var basePath = "//sinfonie-und-kammerorchester-kit-edu.netlify.com/";
//var basePath = "//localhost:8080/";

$('head').append('<link rel="stylesheet" href="' + basePath + 'style.css" type="text/css" />');



$(document).ready(function () {

	if ($(".level_1_selected.has_no_children").toArray().some(function (e) {
		return $(e).text() === "Konzerttermine";
	})) {
		$.getJSON(basePath + "data/konzerttermine.json", function (data) {

			var content = $("#content");
			for (var i = 0; i < data.length; i++) {
				var entry = data[i];
				if (entry.Vergangen) continue;
				
				content.append("<h1>" + entry.Datum + ", " + entry.Uhrzeit + "</h1>");

				content.append('<div class="firstline">' + entry.Ort + '</div>');

				var text = '<div class="text">';

				text += "<div>" + entry.Orchester + "</div>";

				text += "<br />";

				for (var j = 0; j < entry.Programm.length; j++) {
					piece = entry.Programm[j];
					text += "<em>" + piece.Komponist + ":</em> " + piece.Titel + "<br />";
				}

				text += "<br />";

				if (entry.Solist)
					text += "<div><em>Solist:</em> " + entry.Solist + "</div>";

				if (entry.Leitung)
					text += "<div><em>Leitung:</em> " + entry.Leitung + "</div>";

				text += '</div>';

				content.append(text);
			}
		});
	}

	$(".nav div").each(function (idx, e) {
		$(e).html('<a href="' + $("a:contains('" + e.innerText + "')")[0].href + '">' + e.innerText + '</a>');
	});

	$("#content .text").each(function (idx, e) {

		if ($(e).text().indexOf("Pressestimmen") === -1)
			return;

		$.getJSON(basePath + "data/pressestimmen.json", function (data) {
			var html = "";
			$.each(data, function (key, val) {
				html += "<p>";

				var url = val.Url;

				url = url.replace(/%resources%/g, basePath + "resources");

				html += '<a href="' + url + '">' + val.Title + '</a> ';
				html += val.Text;

				html += "</p>";

			});

			$(e).html(html);
		});
	});

});
