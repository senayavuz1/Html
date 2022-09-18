"use strict";
exports.__esModule = true;
exports.stringHelper = void 0;
var stringHelper;
(function (stringHelper) {
    function BuyukHarfeCevir(mesaj) {
        return mesaj.toUpperCase();
    }
    stringHelper.BuyukHarfeCevir = BuyukHarfeCevir;
    function Substring(str, baslangic, bitis) {
        return str.substring(baslangic, bitis);
    }
    stringHelper.Substring = Substring;
    var Test = /** @class */ (function () {
        function Test() {
        }
        return Test;
    }());
    stringHelper.Test = Test;
})(stringHelper = exports.stringHelper || (exports.stringHelper = {}));
