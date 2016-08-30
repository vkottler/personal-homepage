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
