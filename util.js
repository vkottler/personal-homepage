var images = ["img/hack_illi.jpg", "img/presentation1.jpg", "img/presentation2.jpg", "img/presentation3.jpg", "img/presentation4.jpg"];

var currImageIndex = 0;
var currImage = images[currImageIndex];

function updateImage(galleryId, direction) {
    currImageIndex += direction;
    if (currImageIndex == 0) currImageIndex = images.length - 1;
    if (currImageIndex == images.length) currImageIndex = 0;
    document.getElementById(galleryId).style.backgroundImage = "url(" + images[currImageIndex] + ")";
}
