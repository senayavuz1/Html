var Daire = /** @class */ (function () {
    function Daire() {
    }
    Daire.AlanHesabi = function (yaricap) {
        return this.Pi * yaricap * yaricap;
    };
    Daire.Pi = 3.14;
    return Daire;
}());
console.log(Daire.AlanHesabi(3));
var daire = new Daire();
console.log(daire.AlanHesabi(3));
