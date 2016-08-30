// Panel References
var panel;

var yt_config = {
    templateUrl: 'API/youtube.html',
    escapeToClose: true,
    trapFocus: true,
    hasBackdrop: true,
    controller: 'ytController'
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
    function() { window.location = "#/school"; });

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

var hobbyCard = new Card("Hobbies", "Things I like!", 
    new IconSet(["videogame_asset"]), "img/battlenet.png", 
    "Games I play, things I do.", "Hobbies",
    function() { window.location = "#/hobbies"; });

var techCard = new Card("Favorite Tech", "Things I prefer to use", 
    new IconSet(["devices_other"]), "img/logitech.png", 
    "The secret to productivity, in my opinion!", "Favorite Tech",
    function() { window.location = "#/technology"; });

var contactCard = new Card("Contact Me", "Let's collaborate!", 
    new IconSet(["mail"]), "img/office.jpg", 
    "Ways to get in touch with me.", "Contact Me",
    function() { window.location = "#/contact"; });

var bookCard = new Card("Books I Use", "So much to learn, so little time", 
    new IconSet(["book"]), "img/css.jpg", 
    "My secret to learning and DIY", "Books I Like",
    function() { window.location = "#/books"; });

var helpCard = new Card("My Tutorials", "Feedback encouraged!", 
    new IconSet(["forum"]), "img/stack.png", 
    "Helpful videos & guides I have created to help fellow programmers.", "Tutorials",
    function() { window.location = "#/tutorials"; });
