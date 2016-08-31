var bookCard1 = new Card("Example Book", "What is this?", 
    new IconSet(["book"]), "img/css.jpg", 
    "Where did this go?", "where did THIS go?",
    function() {});

angular.module('controllers')

.controller('bookController', function($scope) {

    $scope.card = bookCard1;

});