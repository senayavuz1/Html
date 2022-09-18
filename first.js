// Degisken Tanimalama
// 4 çeşit degisken tanimlama yontemi vardir

// 1. Yontem 

var yas = 30;
console.log("Yaş:"+yas);

yas = "Ali Veli";
console.log(yas);

// 2. Yontem Let

// let isim ="Ercan ";
// console.log(isim);
// 3. Yontem const : sabit

const adres = "Kadikoy / Istanbul";
console.log(adres);
{
    var ilce = "Kadikoy";
    let telefon = "5321313";
    console.log(telefon);
}

//console.log(telefon);
console.log(ilce);

// for (let index = 0; index < 10; index++) {
//     if(index%2==0)
//     {
//      console.log(index);
//      }
//      else 
//      {
//          console.log("Tek Sayi:"+index);
//      }
    
// }

isim = "ali";
var isim =new Date();
console.log(typeof(isim)); 
console.log(isim);
//Javascript Object Notetion
var ogrenci = {Adi:"Ali",Soyadi:"Yilmaz",TcNo:"123123123"};
console.log(ogrenci);
console.log(ogrenci.Adi);
console.log(ogrenci.Soyadi);

let x = 16 + "Volvo";
console.log(x);
let y = 16 + "Volvo"+5*2;
console.log(y);

// Array 
const araclar =["Toyota","Bmw","Audi","Volvo"];

// console.log(araclar);
// araclar.forEach(element => {
//     console.log(element);
//  });

//  for (let index =0; index < araclar.length; index++) {
//      console.log(araclar[index]);
     
//  }
//Undifend
let car ;
console.log(car);
console.log(typeof(car));
car = "Tofas";
console.log(car);
console.log(typeof(car));
car = undefined;
console.log(car);
console.log(typeof(car));
