angular.module('directives')

.directive('vaughnToolbar', function () {
    return {
        templateUrl: 'directives/toolbar.html'
    }
})

.directive('vaughnGallery', function () {
    return {
        templateUrl: 'directives/gallery.html',
        controller: 'galleryController'
    }
});
