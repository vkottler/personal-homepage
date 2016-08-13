angular.module('controllers')

.controller('cardController', function($scope) {

    function Card(title, subtitle, buttonText, mediaUrl, content) {
        this.title = title;
        this.subtitle = subtitle;
        this.buttonText = buttonText;
        this.mediaUrl = mediaUrl;
        this.content = content;
    }
    
    $scope.cards1 = [
        new Card("School", "University of Wisconsin-Madison", "school", "img/uw_logo.jpg", "Just over half-way through this journey."),
        new Card("Code", "Java, C, Javascript and more", "code", "img/github.png", "Check out some code snippts, with commentary."),
        new Card("Engineering", "Embedded Systems, PCBs", "build", "img/chip.png", "Hardware projects I have worked on.")
    ];

    $scope.cards2 = [
        new Card("Videos", "My YouTube Channel", "movie", "img/yt.png", "Content I have produced, more on the way!"),
        new Card("Hobbies", "Things I like!", "videogame_asset", "img/battlenet.png", "Games I play, things I do."),
        new Card("Favorite Tech", "Things I prefer to use", "devices_other", "img/logitech.png", "The secret to productivity, in my opinion!")
    ];

    $scope.cards3 = [
        new Card("Contact Me", "", "mail", "img/office.jpg", "Let's get in touch!"),
        new Card("Books I Use", "So much to learn, so little time", "book", "img/css.jpg", "My secret to learning and DIY"),
        new Card("Need help?", "", "help", "img/stack.png", "Where am I? What is this page?")
    ];
});