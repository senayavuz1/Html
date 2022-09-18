"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.setMesaj = function (mesaj) {
        this.mesaj = mesaj;
    };
    A.prototype.getMesaj = function () {
        return this.mesaj;
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var Calisan = /** @class */ (function () {
    function Calisan(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    Calisan.prototype.Yazdir = function () {
        console.log(this.ad + " " + this.soyad + " " + this.brans);
    };
    return Calisan;
}());
var ali = new Calisan("Ali", "Yilmaz");
var veli = new Calisan("Veli", "Ozturk");
var ayse = new Calisan("Ayse", "Demir");
veli.Yazdir();
//ayse.brans="Pazarlama";
ayse.Yazdir();
//type t = ReturnType<typeof ayse>;
console.log();
// Private Kullanimi
var a = new A();
a.setMesaj(" aksdfşasdfşak ");
console.log(a.getMesaj());
