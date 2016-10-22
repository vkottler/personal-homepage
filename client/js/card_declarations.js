// Panel References
var panel;

var yt_config = {
    templateUrl: 'API/youtube.html',
    escapeToClose: true,
    trapFocus: true,
    hasBackdrop: true,
    controller: 'ytController'
};

var contact_config = {
    templateUrl: 'views/contact.html',
    escapeToClose: true,
    trapFocus: true,
    hasBackdrop: true,
    clickOutsideToClose: true
};

// Card References
var yt_ref = { loaded: false };

var home = new Card("", "", 
    new IconSet(["home"]), 
    "", "", "Home Page", 
    function() { window.location = "#/home"; });

var schoolCard = new Card("School", "University of Wisconsin-Madison", 
    new IconSet(["school", "assignment"]), "img/uw_logo.jpg", 
    "Just over half-way through this journey.", "Classwork and Resume",
    function() { window.location = "http://bit.ly/2eqdfJA"; });

var codeCard = new Card("Code", "Java, C, Javascript and more", 
    new IconSet(["code"]), "img/github.png", 
    "Check out some code snippts, with commentary.", "Code Examples",
    function() { window.location = "#/code"; });

var engineeringCard = new Card("Engineering", "Embedded Systems, PCBs", 
    new IconSet(["build"]), "img/chip.png", 
    "Hardware projects I have worked on.", "Hardware Projects",
    function() { window.location = "#/engineering"; });

var videoCard = new Card("Videos", "My YouTube Channel", 
    new IconSet(["video_library"]), "img/yt.png", 
    "Content I have produced, more on the way!", "Videos",
    function() {
        if (!yt_ref.loaded) {
            yt_ref.panel = panel.create(yt_config);
            yt_ref.panel.open();
            yt_ref.loaded = true;
        }
        else yt_ref.panel.show();
    });

var hobbyCard = new Card("Hobbies", "Things I like to do.", 
    new IconSet(["videogame_asset", "music_note"]), "img/battlenet.png", 
    "\"Musicians make great software developers.\"", "Hobbies",
    function() { window.location = "#/hobbies"; });

var techCard = new Card("Favorite Tech", "Things I currently have and use.", 
    new IconSet(["devices_other"]), "img/logitech.png", 
    "Hello, fellow enthusiasts!", "Favorite Tech",
    function() { window.location = "#/technology"; });

var contactCard = new Card("Contact Me", "Let's collaborate!", 
    new IconSet(["mail"]), "img/office.jpg", 
    "Ways to get in touch with me.", "Contact Me",
    function() { 
        contact_config.position = panel.newPanelPosition().absolute().center();
        panel.open(contact_config);
     });

var bookCard = new Card("Books I Use", "The secret to DIY", 
    new IconSet(["book"]), "img/books/hello.jpg", 
    "Learning can be fun, even if academic institutions make attempts to ruin that.", "Books I Like",
    function() { window.location = "#/books"; });

var helpCard = new Card("My Tutorials", "Feedback encouraged!", 
    new IconSet(["forum"]), "img/stack.png", 
    "Helpful videos & guides I am working on to help fellow programmers.", "Tutorials",
    function() { window.location = "#/tutorials"; });
