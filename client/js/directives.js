angular.module('directives')

.directive('vaughnToolbar', function() {
    return {
        templateUrl: 'directives/toolbar.html'
    }
})

.directive('vaughnFooter', function() {
    return {
        templateUrl: 'directives/footer.html'
    }
})

.directive('galleryCards', function() {
    return {
        templateUrl: 'directives/gallery_cards.html',
        controller: 'cardController'
    }
})

.directive('vaughnCard', function() {
    return {
        templateUrl: 'directives/card_template.html'
    }
});
