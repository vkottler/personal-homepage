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
});
