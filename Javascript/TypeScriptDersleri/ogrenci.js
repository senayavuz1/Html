"use strict";
exports.__esModule = true;
exports.Ogrenci = void 0;
/// <reference path="NameSpace4String.ts" />
var NameSpace4String_1 = require("./NameSpace4String");
var Ogrenci = /** @class */ (function () {
    function Ogrenci(ad, soyad) {
        this.ad = NameSpace4String_1.stringHelper.BuyukHarfeCevir(ad);
        this.soyad = NameSpace4String_1.stringHelper.BuyukHarfeCevir(soyad);
    }
    return Ogrenci;
}());
exports.Ogrenci = Ogrenci;
var ali = new Ogrenci("ali", "yilmaz");
console.log(ali);
