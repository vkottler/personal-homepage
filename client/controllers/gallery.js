angular.module('controllers')

.controller('galleryController', function($scope) {

    var quotes = ["asdf1", "asdf2", "asdf3", "asdf4", "asdf5"];
    var images = ["img/hack_illi.jpg", "img/presentation1.jpg", "img/presentation2.jpg", "img/presentation3.jpg", "img/presentation4.jpg"];
    
    var currImageIndex = 0;
    var currImage = images[currImageIndex];
    $scope.current_quote = quotes[0]; // only used initially to load

    // cool function that handles transition
    $scope.updateImage = function(galleryId, direction) {

        clearInterval(loopingSlideshow);

        var element = document.getElementById(galleryId);
        var behind = galleryId + "_behind";
        currImageIndex += direction;
        if (currImageIndex == 0) currImageIndex = images.length - 1;
        if (currImageIndex == images.length) currImageIndex = 0;

        element.className = "";
        document.getElementById(behind).style.backgroundImage = "url(" + images[currImageIndex] + ")";
        element.className = "transitionClear";

        setTimeout(function() {
            element.style.opacity = "0";
            element.style.backgroundImage = "url(" + images[currImageIndex] + ")";
            document.getElementById(galleryId + "-text").innerHTML = quotes[currImageIndex];
        }, 500);

        setTimeout(function() {
            element.className = "transitionBack";
            element.style.opacity = "1";
        }, 750);

        // restart automatic slideshow
        setTimeout(function() {
            loopingSlideshow = setInterval(startLoop, 3000);
        }, 1250);
    }

    function startLoop() {
        $scope.updateImage('slideshow', 1);
    }

    var loopingSlideshow = setInterval(startLoop, 3000);

});
