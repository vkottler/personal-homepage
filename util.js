var images = ["img/hack_illi.jpg", "img/presentation1.jpg", "img/presentation2.jpg", "img/presentation3.jpg", "img/presentation4.jpg"];

var currImageIndex = 0;
var currImage = images[currImageIndex];

// cool function that handles transition
function updateImage(galleryId, direction) {
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
    }, 500);

    setTimeout(function() {
        element.className = "transitionBack";
        element.style.opacity = "1";
    }, 750);
}
