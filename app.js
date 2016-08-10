angular.module('myHomepage', ['ngMaterial'])

.config(function($mdThemingProvider, $mdIconProvider) {

    // Theme
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('grey');

    // Icons

})

.controller('mainController', function($scope) {

});