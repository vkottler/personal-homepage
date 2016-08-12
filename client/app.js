angular.module('myHomepage', [
    'ngMaterial',
    'controllers',
    'directives'])

.config(function($mdThemingProvider, $mdIconProvider) {

    // Theme
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
    .warnPalette('teal')
    .backgroundPalette('grey');

    //$mdIconProvider
    //  .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
    //  .defaultIconSet('img/icons/sets/core-icons.svg', 24);

    // Icons

})

.controller('mainController', function($scope) {

    $scope.currentNavItem = "notImplemented";

});
