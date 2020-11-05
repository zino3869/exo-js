var div = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];

function ucFirst(string) {
    return string.charAt().toUpperCase() + string.slice(1);
}

function Hero(nom, classe, intel, force) {
    this.nom = nom;
    this.classe = classe;
    this.intel = intel;
    this.force = force;


    var majNom = ucFirst(this.nom);

    if (this.intel > 1) {
        intelPoint = 'points';

    } else {
        intelPoint = 'point';
    }

    if (this.force > 1) {
        forcePoint = 'points';

    } else {
        forcePoint = 'point';
    }

    div.innerHTML += 'I am ' + majNom + ' the ' + this.classe + ', I have ' + this.intel + ' intelligence ' + intelPoint + ' and ' + this.force + ' strength ' + forcePoint + '<br/>';
}

var mage = new Hero("amadeus", "mage", 10, 3);
var warrior = new Hero("pontius", "warrior", 1, 8);
mage.toString();
warrior.toString();
