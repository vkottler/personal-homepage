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

    .when('/school', {
        templateUrl: 'views/school.html'
    })

    .when('/code', {
        templateUrl: 'views/code.html'
    })

    .when('/engineering', {
        templateUrl: 'views/engineering.html'
    })

    .when('/videos', {
        templateUrl: 'views/videos.html'
    })

    .when('/hobbies', {
        templateUrl: 'views/hobbies.html'
    })

    .when('/technology', {
        templateUrl: 'views/technology.html'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html'
    })

    .when('/books', {
        templateUrl: 'views/books.html'
    })

    .when('/tutorials', {
        templateUrl: 'views/tutorials.html'
    })

    .otherwise({ redirectTo: '/home' })

});
