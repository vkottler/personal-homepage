var harvardQuote = 
	"<span style=\"font-size:0.75em\">\"Our motivation to <b>learn</b> is profoundly affected by how we think about intelligence.\" - ".concat(
	"<i>Dr. Carol Deck, Harvard Psychologist</i></span>");

var hsQuote = 
	"<span style=\"font-size:0.75em\">\"Every single new, creative thing that you've ever seen is just a mashup of ideas that came before it.".concat(
	"\" - <i>Yevgeniy Brikman</i> (<a href=\"https://www.amazon.com/").concat(
	"Hello-Startup-Programmers-Building-Technologies/dp/1491909900/").concat(
	"ref=sr_1_1?s=books&ie=UTF8&qid=1471412787&sr=1-1&keywords=hello+startup\" target=\"_newtab\">hello, startup</a>)</span>");

var simplicity = 
	"\"One day I will find the right words, and they will be simple.\"".concat(
	" - <i>Jack Kerouac</i> (<a href=\"https://www.amazon.com/Dharma-Bums-Jack-Kerouac/dp/0140042520\" ").concat(
	"target=\"_newtab\">The Dharma Bums</a>)");

var linus = 
	"\"Talk is cheap. Show me the <a href=\"https://github.com/vkottler/personal-homepage\" ".concat(
	"target=\"_newtab\"><b>code</b></a>.\" ― <i>Linus Torvalds</i>");

var quotes = [
	harvardQuote,
	hsQuote,
	linus,
	"Technology is my passion . . .",
	"<span style=\"font-size:0.95em\">understanding the gritty details is my obsession . . .</span>",
	"solving real human problems is my motivation . . .",
	"and a collective love for computing is my dream.",
	simplicity
];

var images = [
	"img/slideshow/panel.jpg",
	"img/slideshow/hack_illi.jpg",
	"img/slideshow/electrical_box.jpg",
	"img/slideshow/presentation2.jpg",
	"img/slideshow/bench.jpg",
	"img/slideshow/breadboard.jpg"
];

var loopDuration = 6000;
var currImageIndex = 0;
var currQuoteIndex = 0;
var currImage = images[currImageIndex];
var loopingSlideshow;

angular.module('controllers')

.controller('galleryController', function($scope) {

    // we need to do this because the controller reloads 
    // when you switch away from it and switch back to it
    clearInterval(loopingSlideshow);
    
    document.getElementById("slideshow-text").innerHTML = quotes[currQuoteIndex];

    // cool function that handles transition
    $scope.updateImage = function(galleryId, direction) {

        clearInterval(loopingSlideshow);

        var element = document.getElementById(galleryId);

        var behind = galleryId + "_behind";
        currImageIndex += direction;
        currQuoteIndex += direction;

        if (currImageIndex < 0) currImageIndex = images.length - 1; // tried to go behind 0
        else if (currImageIndex == images.length) currImageIndex = 0; // tried to go past last one

        if (currQuoteIndex < 0) currQuoteIndex = quotes.length - 1;
        else if (currQuoteIndex == quotes.length) currQuoteIndex = 0;

        try {
            element.className = "";
            document.getElementById(behind).style.backgroundImage = "url(" + images[currImageIndex] + ")";
            element.className = "transitionClear";

            setTimeout(function() {
                element.style.opacity = "0";
                element.style.backgroundImage = "url(" + images[currImageIndex] + ")";
                document.getElementById(galleryId + "-text").innerHTML = quotes[currQuoteIndex];
            }, 500);

            setTimeout(function() {
                element.className = "transitionBack";
                element.style.opacity = "1";
            }, 750);
        
            // restart automatic slideshow
            setTimeout(function() {
                loopingSlideshow = setInterval(startLoop, loopDuration);
            }, 1250);

        } catch (err) { console.log('Page navigation caused an error with slideshow.'); }
    }

    function startLoop() {
        $scope.updateImage('slideshow', 1);
    }
    loopingSlideshow = setInterval(startLoop, loopDuration);
});
