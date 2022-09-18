"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var IsitmaTip;
(function (IsitmaTip) {
    IsitmaTip[IsitmaTip["Soba"] = 0] = "Soba";
    IsitmaTip[IsitmaTip["DogalGazSoba"] = 1] = "DogalGazSoba";
    IsitmaTip[IsitmaTip["Dogalgaz"] = 2] = "Dogalgaz";
    IsitmaTip[IsitmaTip["Katalitik"] = 3] = "Katalitik";
    IsitmaTip[IsitmaTip["Elektirikli"] = 4] = "Elektirikli";
})(IsitmaTip || (IsitmaTip = {}));
var Ev = /** @class */ (function () {
    function Ev(odasayisi, kat) {
        this.odaSayisi = odasayisi;
        this.kat = kat;
    }
    Ev.prototype.EkranaYaz = function () {
        console.log("Oda Sayisi:" + this.odaSayisi + " MetreKare:" + this.metreKare);
    };
    return Ev;
}());
var benimEvim = new Ev();
var seninEvin = new Ev(3, 120);
benimEvim.isitma = IsitmaTip.Dogalgaz;
benimEvim.kat = 2;
benimEvim.metreKare = 90;
benimEvim.odaSayisi = 3;
benimEvim.EkranaYaz();
console.log(seninEvin);
var Kisi = /** @class */ (function () {
    function Kisi(ad, soyad) {
        this.Ad = ad;
        this.Soyad = soyad;
    }
    return Kisi;
}());
//class Personel :Kisi
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel(ad, soyad, brans) {
        var _this = 
        //base class'taki cosntructer'i calistirir
        _super.call(this, ad, soyad) || this;
        _this.brans = brans;
        return _this;
    }
    return Personel;
}(Kisi));
var ali = new Personel("Ali", "Yilmaz", "Muhasebe");
console.log(ali);
/*
Metod Overriding
*/
var Arac = /** @class */ (function () {
    function Arac(_marka) {
        this.marka = _marka;
    }
    Arac.prototype.HareketEt = function (hiz) {
        console.log("".concat(this.marka, " , ").concat(hiz, " ile gidiyor"));
    };
    return Arac;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(_marka) {
        return _super.call(this, _marka) || this;
    }
    Bmw.prototype.HareketEt = function (hiz) {
        console.log("Bmw hareket ediyor");
        // super.HareketEt(hiz)
    };
    return Bmw;
}(Arac));
var bmw = new Bmw("Bmw");
bmw.HareketEt(100);
