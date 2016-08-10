angular.module('myHomepage', ['ngMaterial'])

.config(function($mdThemingProvider, $mdIconProvider) {

    // Theme
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
    .warnPalette('teal')
    .backgroundPalette('grey');

    // Icons

})

.controller('mainController', function($scope) {

    var images = [];

    $scope.currImage = "img/hack_illi.jpg";
    $scope.currentNavItem = "notImplemented";
});