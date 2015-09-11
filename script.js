

var basePath = "//hediet.github.io/sinfonie-und-kammerorchester.kit.edu/";
//var basePath = "//sinfonie-und-kammerorchester-kit-edu.netlify.com/";

$('head').append('<link rel="stylesheet" href="' + basePath + 'style.css" type="text/css" />');

$(document).ready(function () {
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