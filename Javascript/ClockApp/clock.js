let isim = prompt("İsminizi Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = isim;

setInterval(saat,500);

function saat()
{
    var tarih = new Date();
    var gun = tarih.getDate();
    var ay = tarih.getMonth()+1;
    var yil = tarih.getFullYear();
    var saat =tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();

    let clock = document.querySelector(".clock");
    clock.innerHTML = gun+"/"+ay+"/"+yil+" "+saat+":"+dakika+":"+saniye;
}
isim = " Ercan";
var isim;
