angular.module('controllers')

.controller('cardController', function($scope, $mdPanel) {

    // Youtube Panel
    yt_config.position = $mdPanel.newPanelPosition().absolute().center();
    panel = $mdPanel;

    $scope.allCards2 = [schoolCard, codeCard, engineeringCard, videoCard, hobbyCard, techCard, bookCard, contactCard, helpCard];

});
