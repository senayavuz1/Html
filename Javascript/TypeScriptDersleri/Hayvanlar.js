"use strict";
exports.__esModule = true;
function HayvanBesle(hayvan) {
    console.log(hayvan.cins + " beslendi");
}
var tekir = { cins: "Ankara", yas: 2 };
var kangal = { cins: "Kangal", yas: 1 };
HayvanBesle(tekir);
HayvanBesle(kangal);
