// fonksiyonlarda parametreler default deger verme
function tsTopla(sayi1, sayi2) {
    if (sayi2 === void 0) { sayi2 = 2000; }
    return sayi1 + sayi2;
}
console.log(tsTopla(200));
console.log(tsTopla(200, 500));
// undifend parametre yani deger vermesende olur diyebilmek icin 
// parametrenin basina ? eklemek yeterlidir
function tsTopla2(x, y) {
    var toplam = 0;
    try {
        toplam = x / 0;
    }
    catch (e) {
        console.log(e);
    }
    if (typeof (y) == "number")
        return x + y;
    else
        return x;
}
console.log(tsTopla2(23));
function tsTopla3(x, y) {
    var digerleri = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        digerleri[_i - 2] = arguments[_i];
    }
    var genelToplam = x + y;
    var toplam = digerleri.forEach(function (deger) { genelToplam += deger; });
    console.log(genelToplam);
}
tsTopla3(1, 2, 3, 4, 5, 6, 7, 8, 9);
