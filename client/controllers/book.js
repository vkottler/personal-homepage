angular.module('controllers')

.controller('bookController', function($scope) {

    var cssCard = new Card("CSS Secrets", "Lea Verou", 
    new IconSet(["border_style", "border_color"]), "img/books/css.jpg", 
    "Better Solutions to Everyday Web Design Problems", "", function() {});

    var gameCoding = new Card("Game Coding Complete", "Mike McShaffry and David Graham", 
    new IconSet(["videogame_asset"]), "img/books/gameCoding.jpg", 
    "Fourth Edition", "", function() {});

    var multiplayerCard = new Card("Multiplayer Game Programming", "Josh Glazer and Sanjay Madhav", 
    new IconSet(["router"]), "img/books/multiplayer.jpg", 
    "Architecting Networked Games (Game Design)", "", function() {});

    var gameEngine = new Card("Game Engine Architecture", "Jason Gregory", 
    new IconSet(["memory"]), "img/books/gameEngine.jpg", 
    "Second Edition", "", function() {});

    var helloStartup = new Card("Hello, Startup", "Yevgeniy Brikman", 
    new IconSet(["business_center", "monetization_on"]), "img/books/hello.jpg", 
    "A programmer's guide to building products, technologies, and teams", "", function() {});

    var springCard = new Card("Spring Essentials", "Shameer Kunjumohamed and Hamidreza Sattari", 
    new IconSet(["developer_board"]), "img/books/spring.jpg", 
    "Build mission-critical enterprise applications", "", function() {});

    var nodeCard = new Card("Node.js Design Patterns", "Mario Casciaro", 
    new IconSet(["http"]), "img/books/node.jpg", 
    "Get the best out of node by mastering a series of patterns and techniques", "", function() {});

    var rabpCard = new Card("Rails Angular Postgres Bootstrap", "David Bryant Copeland", 
    new IconSet(["bug_report"]), "img/books/rapb.jpg", 
    "Powerful Effective Efficient Full-Stack Web Development", "", function() {});

    var modernPHPCard = new Card("Modern PHP", "Josh Lockhart", 
    new IconSet(["code"]), "img/books/modernPHP.jpg", 
    "New Features and Good Practices", "", function() {});

    var sqlCard = new Card("SQL in 10 Minutes", "Ben Forta", 
    new IconSet(["dns"]), "img/books/sql10.jpg", 
    "Sams Teach Yourself", "", function() {});

    var PHPwebServices = new Card("PHP Web Services", "Lorna Jane Mitchell", 
    new IconSet(["extensions"]), "img/books/php_web_services.jpg", 
    "APIs for the Modern Web", "", function() {});

    var mechantronics = new Card("Embedded Computing", "Kevin Lynch, Nicholas Marchuk, and Matthew Elwin", 
    new IconSet(["build"]), "img/books/mechatronics.jpg", 
    "Mechatronics with the PIC32", "", function() {});

    var embeddedSystems = new Card("Making Embedded Systems", "Elecia White", 
    new IconSet(["usb"]), "img/books/embedded-systems.jpg", 
    "Design Patterns for Great Software", "", function() {});

    var makeMoreElectronics = new Card("Make: More Electronics", "Charles Platt", 
    new IconSet(["memory"]), "img/books/make.jpg", 
    "Logic Chips, Amplifiers, Sensors and more", "", function() {});

    var CANopen = new Card("Embedded Networking", "Olaf Pfeiffer, Andrew Arye, and Christian Keydel", 
    new IconSet(["call_split"]), "img/books/canopen.jpg", 
    "with CAN and CANopen", "", function() {});

    var exploringPIC32 = new Card("Programming 32-bit Microcontrollers in C", "Lucio Di Jasio", 
    new IconSet(["sd_storage"]), "img/books/pic32.jpg", 
    "Exploring the PIC32", "", function() {});

    var photon = new Card("Make: Getting Started with the Photon", "Simon Monk", 
    new IconSet(["wifi_lock"]), "img/books/photon.jpg", 
    "Making Things with the Affordable, Compact, Hackable WiFi Module", "", function() {});

    var programmingPi = new Card("Programming the Raspberry Pi", "Simon Monk", 
    new IconSet(["keyboard"]), "img/books/programmingPi.jpg", 
    "Getting Started with Python", "", function() {});

    var pygame = new Card("Making Games with Python & Pygame", "Al Sweigart", 
    new IconSet(["mouse"]), "img/books/pygame.png", 
    "A guide to programming with graphics, animations, and sound", "", function() {});

    var pythonCiphers = new Card("Hacking Secret Ciphers with Python", "Al Sweigart", 
    new IconSet(["https"]), "img/books/ciphers.png", 
    "A beginner's guide to cryptography", "", function() {});

    var cppPrimer = new Card("C++ Primer", "Stanley B. Lippman, Josée Lajoie, Barbara Moo", 
    new IconSet(["code"]), "img/books/cpp.jpg", 
    "Fifth Edition", "", function() {});

    var rpiUserGuide = new Card("Raspberry Pi User Guide", "Eben Upton and Gareth Halfacree", 
    new IconSet(["developer_mode"]), "img/books/piUserGuide.jpg", 
    "Third Edition", "", function() {});

    var programmingPatterns = new Card("Game Programming Patterns", "Robert Nystrom", 
    new IconSet(["code"]), "img/books/patterns.jpg", 
    "", "", function() {});

    var sensorNetworks = new Card("Building Wireless Sensor Networks", "Robert Faludi", 
    new IconSet(["bluetooth"]), "img/books/sensor_networks.jpg", 
    "with ZigBee, XBee, Arduino, and Processing", "", function() {});

    var electEncyc = new Card("Encyclopedia of Electronic Components", "Charles Platt", 
    new IconSet(["power"]), "img/books/encyc.jpeg", 
    "Volume 1", "", function() {});

    var hardwareGroup = {
        title: "Hardware",
        books: [mechantronics, exploringPIC32, embeddedSystems, CANopen, electEncyc]
    };
    var hobbyistGroup = {
        title: "Hobbyist",
        books: [photon, programmingPi, rpiUserGuide, sensorNetworks, helloStartup, makeMoreElectronics]
    };
    var webDevGroup = {
        title: "Web Development",
        books: [rabpCard, modernPHPCard, PHPwebServices, cssCard, nodeCard, sqlCard, springCard]
    };
    var programmingGroup = {
        title: "Programming",
        books: [pythonCiphers, cppPrimer, programmingPatterns]
    };
    var videoGamesGroup = {
        title: "Video Game Programming",
        books: [gameCoding, multiplayerCard, gameEngine, pygame]
    };

    $scope.bookGroups = [
        webDevGroup, hardwareGroup, programmingGroup, videoGamesGroup, hobbyistGroup
    ];

});
