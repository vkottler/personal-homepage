angular.module('controllers')

.controller('cardController', function($scope) {

    function Card(title, subtitle, iconSet, mediaUrl, content) {
        this.title = title;
        this.subtitle = subtitle;
        this.iconSet = iconSet;
        this.mediaUrl = mediaUrl;
        this.content = content;
    }

    function IconSet(icons) {
        this.icons = [];
        for (var i = 0; i < icons.length; i++) 
            this.icons.push(new Icon(icons[i]));
        this.icons.length > 1 ? this.separator = " / " : this.separator = "";
        this.checkLastElement = function(item) {
            return this.icons[this.icons.length - 1].text === item.text;
        } 
    }

    function Icon(text) { this.text = text; }

    var schoolCard = new Card("School", "University of Wisconsin-Madison", new IconSet(["school", "assignment"]), "img/uw_logo.jpg", "Just over half-way through this journey.");
    var codeCard = new Card("Code", "Java, C, Javascript and more", new IconSet(["code"]), "img/github.png", "Check out some code snippts, with commentary.");
    var engineeringCard = new Card("Engineering", "Embedded Systems, PCBs", new IconSet(["build"]), "img/chip.png", "Hardware projects I have worked on.");
    var videoCard = new Card("Videos", "My YouTube Channel", new IconSet(["movie"]), "img/yt.png", "Content I have produced, more on the way!");
    var hobbyCard = new Card("Hobbies", "Things I like!", new IconSet(["videogame_asset"]), "img/battlenet.png", "Games I play, things I do.");
    var techCard = new Card("Favorite Tech", "Things I prefer to use", new IconSet(["devices_other"]), "img/logitech.png", "The secret to productivity, in my opinion!");
    var contactCard = new Card("Contact Me", "", new IconSet(["mail"]), "img/office.jpg", "Let's get in touch!");
    var bookCard = new Card("Books I Use", "So much to learn, so little time", new IconSet(["book"]), "img/css.jpg", "My secret to learning and DIY");
    var helpCard = new Card("Need help?", "", new IconSet(["help"]), "img/stack.png", "Where am I? What is this page?");
    
    $scope.cards1 = [schoolCard, codeCard, engineeringCard];
    $scope.cards2 = [videoCard, hobbyCard, techCard];
    $scope.cards3 = [contactCard, bookCard, helpCard];
    $scope.allCards = [$scope.cards1, $scope.cards2, $scope.cards3];

    /*
    function TButton(icons, text, standard) {
        this.icons = icons;
        this.text = text;
        this.showTooltip = true;

        this.icons.length > 1 ? this.separator = " / " : this.separator = "";

        standard !== "true" ? this.class = "md-fab md-mini md-primary" : this.class = "md-raised md-primary";

        this.checkLastElement = function(item) {
            return icons[icons.length - 1].text === item.text;
        }

        this.setClass = function(newClass) {
            this.class = newClass;
        }
    }

    $scope.beforeText = [
        new TButton([new Icon("home")], "Home Page"),
        new TButton([new Icon("school"), new Icon("assignment")], "Classwork and Resume", "true"),
        new TButton([new Icon("code")], "Code Examples"),
        new TButton([new Icon("build")], "Hardware Projects"),
        new TButton([new Icon("movie")], "Videos"),
        new TButton([new Icon("videogame_asset")], "Hobbies"),
        new TButton([new Icon("devices_other")], "Favorite Tech"),
        new TButton([new Icon("book")], "Books I Like")
    ];

    $scope.afterText = [
        new TButton([new Icon("mail_outline")], "Get in touch!"),
        new TButton([new Icon("help_outline")], "Confused?")
    ];

    // need new button objects
    $scope.fabBar = [];
    for (var i = 0; i < $scope.beforeText.length; i++) {
        var button = new TButton($scope.beforeText[i].icons, $scope.beforeText[i].text);
        button.setClass("md-icon-button md-raised md-primary");
        button.showTooltip = false;
        button.checkLastElement = function() { return true; }
        button.icons = [button.icons[0]];
        $scope.fabBar.push(button);
    }

    for (var i = 0; i < $scope.afterText.length; i++) {
        var button = new TButton($scope.afterText[i].icons, $scope.afterText[i].text);
        button.setClass("md-icon-button md-raised md-primary");
        button.showTooltip = false;
        $scope.fabBar.push(button);
    }
    */
});