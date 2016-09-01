angular.module('controllers')

.controller('bookController', function($scope) {

    var cssCard = new Card("CSS Secrets", "Lea Verou", 
    new IconSet(["border_style", "border_color"]), "img/books/css.jpg", 
    "Better Solutions to Everyday Web Design Problems", "", function() {
        window.open("https://www.amazon.com/CSS-Secrets-Solutions-Everyday-Problems/dp/1449372635/");
    });

    var gameCoding = new Card("Game Coding Complete", "Mike McShaffry and David Graham", 
    new IconSet(["videogame_asset"]), "img/books/gameCoding.jpg", 
    "Fourth Edition", "", function() { 
        window.open("https://www.amazon.com/Game-Coding-Complete-Fourth-McShaffry/dp/1133776574/");
    });

    var multiplayerCard = new Card("Multiplayer Game Programming", "Josh Glazer and Sanjay Madhav", 
    new IconSet(["router"]), "img/books/multiplayer.jpg", 
    "Architecting Networked Games (Game Design)", "", function() {
        window.open("https://www.amazon.com/Multiplayer-Game-Programming-Architecting-Networked/dp/0134034309/");
    });

    var gameEngine = new Card("Game Engine Architecture", "Jason Gregory", 
    new IconSet(["memory"]), "img/books/gameEngine.jpg", 
    "Second Edition", "", function() {
        window.open("https://www.amazon.com/Engine-Architecture-Second-Jason-Gregory/dp/1466560010/");
    });

    var helloStartup = new Card("Hello, Startup", "Yevgeniy Brikman", 
    new IconSet(["business_center", "monetization_on"]), "img/books/hello.jpg", 
    "A programmer's guide to building products, technologies, and teams", "", function() {
        window.open("https://www.amazon.com/Hello-Startup-Programmers-Building-Technologies/dp/1491909900/");
    });

    var springCard = new Card("Spring Essentials", "Shameer Kunjumohamed and Hamidreza Sattari", 
    new IconSet(["developer_board"]), "img/books/spring.jpg", 
    "Build mission-critical enterprise applications", "", function() {
        window.open("https://www.packtpub.com/application-development/spring-essentials");
    });

    var nodeCard = new Card("Node.js Design Patterns", "Mario Casciaro", 
    new IconSet(["http"]), "img/books/node.jpg", 
    "Get the best out of node by mastering a series of patterns and techniques", "", function() {
        window.open("https://www.packtpub.com/web-development/nodejs-design-patterns-second-edition");
    });

    var rabpCard = new Card("Rails Angular Postgres Bootstrap", "David Bryant Copeland", 
    new IconSet(["bug_report"]), "img/books/rapb.jpg", 
    "Powerful Effective Efficient Full-Stack Web Development", "", function() {
        window.open("https://www.amazon.com/Rails-Angular-Postgres-Bootstrap-Development/dp/1680501267/");
    });

    var modernPHPCard = new Card("Modern PHP", "Josh Lockhart", 
    new IconSet(["code"]), "img/books/modernPHP.jpg", 
    "New Features and Good Practices", "", function() {
        window.open("https://www.amazon.com/Modern-PHP-Features-Good-Practices/dp/1491905018/");
    });

    var sqlCard = new Card("SQL in 10 Minutes", "Ben Forta", 
    new IconSet(["dns"]), "img/books/sql10.jpg", 
    "Sams Teach Yourself", "", function() {
        window.open("https://www.amazon.com/SQL-Minutes-Sams-Teach-Yourself/dp/0672336073/");
    });

    var PHPwebServices = new Card("PHP Web Services", "Lorna Jane Mitchell", 
    new IconSet(["extensions"]), "img/books/php_web_services.jpg", 
    "APIs for the Modern Web", "", function() {
        window.open("https://www.amazon.com/PHP-Web-Services-APIs-Modern/dp/1491933097/");
    });

    var mechantronics = new Card("Embedded Computing", "Kevin Lynch, Nicholas Marchuk, and Matthew Elwin", 
    new IconSet(["build"]), "img/books/mechatronics.jpg", 
    "Mechatronics with the PIC32", "", function() {
        window.open("https://www.amazon.com/Embedded-Computing-Mechatronics-PIC32-Microcontroller/dp/0124201652/");
    });

    var embeddedSystems = new Card("Making Embedded Systems", "Elecia White", 
    new IconSet(["usb"]), "img/books/embedded-systems.jpg", 
    "Design Patterns for Great Software", "", function() {
        window.open("https://www.amazon.com/Making-Embedded-Systems-Patterns-Software/dp/1449302149/");
    });

    var makeMoreElectronics = new Card("Make: More Electronics", "Charles Platt", 
    new IconSet(["memory"]), "img/books/make.jpg", 
    "Logic Chips, Amplifiers, Sensors and more", "", function() {
        window.open("https://www.amazon.com/Make-Electronics-Journey-Amplifiers-Randomicity/dp/1449344046/");
    });

    var CANopen = new Card("Embedded Networking", "Olaf Pfeiffer, Andrew Arye, and Christian Keydel", 
    new IconSet(["call_split"]), "img/books/canopen.jpg", 
    "with CAN and CANopen", "", function() {
        window.open("https://www.amazon.com/Embedded-Networking-CANopen-Olaf-Pfeiffer/dp/0692740872/");
    });

    var exploringPIC32 = new Card("Programming 32-bit Microcontrollers in C", "Lucio Di Jasio", 
    new IconSet(["sd_storage"]), "img/books/pic32.jpg", 
    "Exploring the PIC32", "", function() {
        window.open("https://www.amazon.com/Programming-32-bit-Microcontrollers-Exploring-Technology/dp/0750687096/");
    });

    var photon = new Card("Make: Getting Started with the Photon", "Simon Monk", 
    new IconSet(["wifi_lock"]), "img/books/photon.jpg", 
    "Making Things with the Affordable, Compact, Hackable WiFi Module", "", function() {
        window.open("https://www.amazon.com/Getting-Started-Photon-Affordable-Hackable/dp/1457187019/");
    });

    var programmingPi = new Card("Programming the Raspberry Pi", "Simon Monk", 
    new IconSet(["keyboard"]), "img/books/programmingPi.jpg", 
    "Getting Started with Python", "", function() {
        window.open("https://www.amazon.com/Programming-Raspberry-Pi-Second-Getting/dp/1259587401/");
    });

    var pygame = new Card("Making Games with Python & Pygame", "Al Sweigart", 
    new IconSet(["mouse"]), "img/books/pygame.png", 
    "A guide to programming with graphics, animations, and sound", "", function() {
        window.open("https://www.amazon.com/Making-Games-Python-Pygame-Sweigart/dp/1469901730/");
    });

    var pythonCiphers = new Card("Hacking Secret Ciphers with Python", "Al Sweigart", 
    new IconSet(["https"]), "img/books/ciphers.png", 
    "A beginner's guide to cryptography", "", function() {
        window.open("https://www.amazon.com/Hacking-Secret-Ciphers-Python-cryptography/dp/1482614375/");
    });

    var cppPrimer = new Card("C++ Primer", "Stanley B. Lippman, Josée Lajoie, Barbara Moo", 
    new IconSet(["code"]), "img/books/cpp.jpg", 
    "Fifth Edition", "", function() {
        window.open("https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113/");
    });

    var rpiUserGuide = new Card("Raspberry Pi User Guide", "Eben Upton and Gareth Halfacree", 
    new IconSet(["developer_mode"]), "img/books/piUserGuide.jpg", 
    "Third Edition", "", function() {
        window.open("https://www.amazon.com/Raspberry-User-Guide-Eben-Upton/dp/1118921666/");
    });

    var programmingPatterns = new Card("Game Programming Patterns", "Robert Nystrom", 
    new IconSet(["code"]), "img/books/patterns.jpg", 
    "", "", function() {
        window.open("https://www.amazon.com/Game-Programming-Patterns-Robert-Nystrom/dp/0990582906/");
    });

    var sensorNetworks = new Card("Building Wireless Sensor Networks", "Robert Faludi", 
    new IconSet(["bluetooth"]), "img/books/sensor_networks.jpg", 
    "with ZigBee, XBee, Arduino, and Processing", "", function() {
        window.open("https://www.amazon.com/Building-Wireless-Sensor-Networks-Processing/dp/0596807732/");
    });

    var electEncyc = new Card("Encyclopedia of Electronic Components", "Charles Platt", 
    new IconSet(["power"]), "img/books/encyc.jpeg", 
    "Volume 1", "", function() {
        window.open("https://www.amazon.com/Encyclopedia-Electronic-Components-Capacitors-Transistors/dp/1449333893/");
    });

    var hardwareGroup = {
        title: "Hardware",
        description: "Books I use to program the Digilent Chipkit Max32 for Badgerloop and other hardware projects.",
        books: [mechantronics, CANopen, embeddedSystems, electEncyc, exploringPIC32]
    };
    var hobbyistGroup = {
        title: "Hobbyist",
        description: "Some fun books for tinerking with Raspberry Pis and other IoT related projects.",
        books: [helloStartup, photon, programmingPi, rpiUserGuide, sensorNetworks, makeMoreElectronics]
    };
    var webDevGroup = {
        title: "Web Development",
        description: "Great resources for any and all web development projects.",
        books: [cssCard, springCard, nodeCard, modernPHPCard, PHPwebServices, sqlCard, rabpCard]
    };
    var programmingGroup = {
        title: "Programming",
        description: "For learning new languages and having references handy.",
        books: [cppPrimer, programmingPatterns, pythonCiphers]
    };
    var videoGamesGroup = {
        title: "Video Game Programming",
        description: "Hoping to begin working on a video game very soon.",
        books: [gameCoding, multiplayerCard, gameEngine, pygame]
    };

    $scope.bookGroups = [
        webDevGroup, hardwareGroup, programmingGroup, videoGamesGroup, hobbyistGroup
    ];

});
