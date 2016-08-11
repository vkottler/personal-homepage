angular.module('directives')

.directive('gallery', function () {
    return {
        templateUrl: 'directives/gallery.html',
        controller: 'galleryController'
    }
});
