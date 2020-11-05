var footer = document.getElementsByTagName('footer')[0];
var body = document.getElementsByTagName('body')[0];

var div = footer.getElementsByTagName('div')[0];
var plus = footer.getElementsByTagName('button')[0];
var moin = footer.getElementsByTagName('button')[1];
var sel = footer.getElementsByTagName('select')[0];

var font = window.getComputedStyle(document.body, null).getPropertyValue('font-size');

var taille = parseInt(font);

plus.onclick = function() {
    taille++;
    document.body.style.fontSize = taille + 'px';
};

moin.onclick = function() {
    taille--;
    document.body.style.fontSize = taille + 'px';
}

sel.onchange = function() {
    var col = sel.selectedIndex;
    document.body.style.background = sel.options[col].value;
}