angular.module('controllers')

.controller('cardController', function($scope) {

    function Card(title, subtitle, icons, mediaUrl, content) {
        this.title = title;
        this.subtitle = subtitle;
        this.icons = icons;
        this.mediaUrl = mediaUrl;
        this.content = content;

        this.icons.length > 1 ? this.separator = " / " : this.separator = "";

        this.checkLastElement = function(item) {
            return icons[icons.length - 1].text === item.text;
        }  
    }

    function Icon(text) {
        this.text = text;
    }
    
    $scope.cards1 = [
        new Card("School", "University of Wisconsin-Madison", [ new Icon("school"), new Icon("assignment")], "img/uw_logo.jpg", "Just over half-way through this journey."),
        new Card("Code", "Java, C, Javascript and more", [ new Icon("code")], "img/github.png", "Check out some code snippts, with commentary."),
        new Card("Engineering", "Embedded Systems, PCBs", [ new Icon("build")], "img/chip.png", "Hardware projects I have worked on.")
    ];

    $scope.cards2 = [
        new Card("Videos", "My YouTube Channel", [ new Icon("movie")], "img/yt.png", "Content I have produced, more on the way!"),
        new Card("Hobbies", "Things I like!", [ new Icon("videogame_asset")], "img/battlenet.png", "Games I play, things I do."),
        new Card("Favorite Tech", "Things I prefer to use", [new Icon("devices_other")], "img/logitech.png", "The secret to productivity, in my opinion!")
    ];

    $scope.cards3 = [
        new Card("Contact Me", "", [ new Icon("mail")], "img/office.jpg", "Let's get in touch!"),
        new Card("Books I Use", "So much to learn, so little time", [ new Icon("book")], "img/css.jpg", "My secret to learning and DIY"),
        new Card("Need help?", "", [ new Icon("help")], "img/stack.png", "Where am I? What is this page?")
    ];

    $scope.allCards = [$scope.cards1, $scope.cards2, $scope.cards3];
});