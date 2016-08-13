angular.module('myHomepage', [
    'ngMaterial',
    'ngRoute',
    'controllers',
    'directives'])

.config(function($routeProvider, $mdThemingProvider, $mdIconProvider) {

    // Theme
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
    .warnPalette('teal')
    .backgroundPalette('grey');

    // Routing
    $routeProvider
    .when('/', { redirectTo: '/home' })

    .when('/home', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryController'
    })

    .otherwise({ redirectTo: '/home' })

});
