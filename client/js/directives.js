angular.module('directives')

.directive('vaughnToolbar', function() {
    return {
        templateUrl: 'directives/toolbar.html',
        controller: 'toolbarController'
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
})

.directive('vaughnButtonInner', function() {
    return {
        templateUrl: 'directives/toolbar_button.html'
    }
});
