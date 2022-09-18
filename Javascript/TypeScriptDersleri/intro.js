function EkranaYaz(isim) {
    console.log(isim);
}
EkranaYaz("Ali Veli");
/*
veri tipleri
*/
var sayi = 15; // ilk deger atamasi yaptigimizda bunu number olarak algilar
//sayi ="aliveli"; // Burasi hata verecektir.
// Primitive
var cevap;
var sayi2;
var sehir;
var dogumTarihi;
cevap = true;
sayi2 = 12;
sehir = "Adana";
dogumTarihi = new Date();
console.log(dogumTarihi);
/*
Diziler
*/
var sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sehirler = ["Adana", "Ankara", "Bursa", "Istanbul", "Izmir"];
var sayilar2 = [1, 2, 3, 4, 5, 6, 7, 8];
sayilar.push(12);
function Topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}
console.log(Topla(3, 5));
/*
Tuple
*/
var complex2 = [12, "sdfsdf"];
var complexDizi = [12, "Adana"];
complexDizi.forEach(function (deger) { return console.log(deger); });
/*
Enum
*/
var Renkler;
(function (Renkler) {
    Renkler[Renkler["mavi"] = 0] = "mavi";
    Renkler[Renkler["kirmizi"] = 1] = "kirmizi";
    Renkler[Renkler["siyah"] = 2] = "siyah";
    Renkler[Renkler["beyaz"] = 3] = "beyaz";
})(Renkler || (Renkler = {}));
var renk = Renkler.kirmizi;
console.info(renk);
/*
Any,Void ,Null

*/
var xyz = "Ali";
xyz = 15;

