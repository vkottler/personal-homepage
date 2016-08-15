angular.module('controllers')

.controller('toolbarController', function($scope) {
    
    function TButton(iconSet, text) {
        this.iconSet = iconSet;
        this.text = text;
        this.showTooltip = true;

        this.iconSet.icons.length > 1 ? this.separator = " / " : this.separator = "";

        this.iconSet.icons.length == 1 ? this.class = "md-fab md-mini md-primary" : this.class = "md-raised md-primary";

        this.setClass = function(newClass) { this.class = newClass; }
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

    var home = new TButton(new IconSet(["home"]), "Home Page");
    var school = new TButton(new IconSet(["school", "assignment"]), "Classwork and Resume");
    var code = new TButton(new IconSet(["code"]), "Code Examples");
    var build = new TButton(new IconSet(["build"]), "Hardware Projects");
    var movie = new TButton(new IconSet(["movie"]), "Videos");
    var videogame = new TButton(new IconSet(["videogame_asset"]), "Hobbies");
    var devices = new TButton(new IconSet(["devices_other"]), "Favorite Tech");
    var book = new TButton(new IconSet(["book"]), "Books I Like");
    var mail = new TButton(new IconSet(["mail_outline"]), "Get in touch!");
    var help = new TButton(new IconSet(["help_outline"]), "Confused?");
    
    $scope.beforeText = [home, school, code, build, movie, videogame, devices, book];

    $scope.afterText = [mail, help];

    $scope.allButtons = $scope.beforeText.concat($scope.afterText);

    // need new button objects
    $scope.fabBar = [];
    for (var i = 0; i < $scope.allButtons.length; i++) {
        var button = new TButton($scope.allButtons[i].iconSet, $scope.allButtons[i].text);
        button.setClass("md-icon-button md-raised md-primary");
        button.showTooltip = false;
        //button.iconSet.checkLastElement = function() { return true; }
        //button.iconSet.icons = [button.iconSet.icons[0]];
        $scope.fabBar.push(button);
    }

});