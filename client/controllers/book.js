angular.module('controllers')

.controller('bookController', function($scope) {

    $scope.bookGroups = [
        hardwareGroup, programmingGroup ,webDevGroup, videoGamesGroup, hobbyistGroup
    ];

});

