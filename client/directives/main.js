angular.module('directives')

.directive('vaughnGallery', function () {
    return {
        templateUrl: 'directives/gallery.html',
        controller: 'galleryController'
    }
});
