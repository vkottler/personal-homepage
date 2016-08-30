angular.module('controllers')

.controller('toolbarController', function($scope) {
    // Toolbar variables
    $scope.beforeText = [home, schoolCard, codeCard, engineeringCard, contactCard, helpCard];
    $scope.afterText = [videoCard, hobbyCard, techCard, bookCard];
    $scope.allButtons = $scope.beforeText.concat($scope.afterText);
});
