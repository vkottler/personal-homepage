angular.module('controllers')

.controller('cardController', function($scope) {

    function Card(title, subtitle, iconSet, mediaUrl, content, buttonText, clickFunction) {
        this.title = title;
        this.text = buttonText;
        this.subtitle = subtitle;
        this.iconSet = iconSet;
        this.mediaUrl = mediaUrl;
        this.content = content;
        this.iconSet.icons.length == 1 ? this.class = "md-fab md-mini md-primary" : this.class = "md-raised md-primary";
        this.clickFunction = clickFunction; // what should the button do?
    }

    function IconSet(icons) {
        this.icons = [];
        for (var i = 0; i < icons.length; i++) 
            this.icons.push(new Icon(icons[i]));
        this.checkLastElement = function(item) {
            return this.icons[this.icons.length - 1].text === item.text;
        } 
    }

    function Icon(text) { this.text = text; }

    var home = new Card("", "", 
                        new IconSet(["home"]), 
                        "", "", "Home Page", 
                        function() {
                            window.location = "#/home";
                        });

    var schoolCard = new Card("School", "University of Wisconsin-Madison", 
                              new IconSet(["school", "assignment"]), "img/uw_logo.jpg", 
                              "Just over half-way through this journey.", "Classwork and Resume",
                              function() {
                                  window.location = "#/school";
                              });

    var codeCard = new Card("Code", "Java, C, Javascript and more", 
                            new IconSet(["code"]), "img/github.png", 
                            "Check out some code snippts, with commentary.", "Code Examples", function() {
                                window.location = "#/code";
                            });

    var engineeringCard = new Card("Engineering", "Embedded Systems, PCBs", 
                                   new IconSet(["build"]), "img/chip.png", 
                                   "Hardware projects I have worked on.", "Hardware Projects", function() {
                                       window.location = "#/engineering";
                                   });

    var videoCard = new Card("Videos", "My YouTube Channel", 
                             new IconSet(["video_library"]), "img/yt.png", 
                             "Content I have produced, more on the way!", "Videos", function() {
                                 window.location = "#/videos";
                             });

    var hobbyCard = new Card("Hobbies", "Things I like!", 
                             new IconSet(["videogame_asset"]), "img/battlenet.png", 
                             "Games I play, things I do.", "Hobbies", function() {
                                 window.location = "#/hobbies";
                             });

    var techCard = new Card("Favorite Tech", "Things I prefer to use", 
                            new IconSet(["devices_other"]), "img/logitech.png", 
                            "The secret to productivity, in my opinion!", "Favorite Tech", function() {
                                window.location = "#/technology";
                            });

    var contactCard = new Card("Contact Me", "Let's collaborate!", 
                               new IconSet(["mail"]), "img/office.jpg", 
                               "Ways to get in touch with me.", "Contact Me", function() {
                                   window.location = "#/contact";
                               });

    var bookCard = new Card("Books I Use", "So much to learn, so little time", 
                            new IconSet(["book"]), "img/css.jpg", 
                            "My secret to learning and DIY", "Books I Like", function() {
                                window.location = "#/books";
                            });

    var helpCard = new Card("My Tutorials", "Feedback encouraged!", 
                            new IconSet(["forum"]), "img/stack.png", 
                            "Helpful videos & guides I have created to help fellow programmers.", "Tutorials", function() {
                                window.location = "#/tutorials";
                            });

    $scope.allCards2 = [schoolCard, codeCard, engineeringCard, videoCard, hobbyCard, techCard, bookCard, contactCard, helpCard];

    // Toolbar variables
    $scope.beforeText = [home, schoolCard, codeCard, engineeringCard, contactCard, helpCard];
    $scope.afterText = [videoCard, hobbyCard, techCard, bookCard];
    $scope.allButtons = $scope.beforeText.concat($scope.afterText);

});
