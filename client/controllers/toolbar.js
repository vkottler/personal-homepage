angular.module('controllers')

.controller('toolbarController', function($scope) {

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

    function Icon(text) {
        this.text = text;
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

});