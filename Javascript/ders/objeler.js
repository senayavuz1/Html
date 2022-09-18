// // // // Object (Nesne) "Key : Value" yapısıyla çalışır.
// // // // Key : Value yapısına Property denir.

// // // //Object Oluşturma Yolları
// // // let item = {};
// // // let item1 = new Object();
// // // let item2 = Object.create(null); //Boş obje herhangi bir değer almaz
// // // let item3 = Object.create(Object.prototype) //Standar obje kalıtımıdır.
// // // let item4 = Object.create(item) // Daha önce oluşturduğumuz item objesini aldı.Onun içinde ne varsa bunda da var .
                    

// // // let car = {
// // //     name :"BMW",
// // //     model :"i320"
// // // } // car isminde bir obje oluşturduk . İçinde name ve model adında 2 adet KEY var.
// // // console.log(car.name); // Bize BMW çıktısını verir yani objenin içindeki proplara ulaşabiliriz.

// // // // objeye Yeni key ekleme
// // // car.km = 50000; // KM isminde bir KEY ekledik içinede 50000 değerinde bir value ekledik.
// // // console.log(car.km)
// // // console.log(car)

// // // // Objeden prop kaldırma
// // // delete car.km; // Objeden KM propunu kaldırdık
// // // console.log(car)

// // // // objenin sadece keylerine ulaşma
// // // console.log(Object.keys(car)) //1.yol

// // // keys = Object.keys(car) //2.yol
// // // console.log(keys)

// // // //Objenin Value lerine ulaşma
// // // console.log(Object.values(car)) //1.Yol

// // // values = Object.values(car) //2.yol
// // // console.log(values)

// // // car.name ="Mercedes";
// // // console.log(car)

// // //Objenin içine Fonksiyon Ekleme
// // let info = {
// //  name : "Osman",
// //  secondName : "Baş",
// //  job : "Student",
// //  age : 26,
// //  city : "İstanbul",
// //  introduce : function() {
// //      console.log(`My name is ${this.name} ${this.secondName}, 
// //      I'm ${this.age} yo. I live in ${this.city} `)
// //  }
// // }
// // info.introduce();

// // // let info2 = {
// // //     name : "Furkan",
// // //  secondName : "Taşcı",
// // //  job : "Student",
// // //  age : 20,
// // //  city : "İstanbul",
// // //  introduce2 : () => {
// // //      return `My name is ${info2.name} ${info2.secondName}, 
// // //      I'm ${info2.age} yo. I live in ${info2.city} `
// // //  }
// // // }
// // // console.log(info2.introduce2());

// // //Objeye sonradan Fonksiyon Ekleme
// // info.myHobbies = function(){
// //     console.log("Müzik , Spor , Video Oyunları")
// // }

// // info.myHobbies();

// ////Objenin içindeki Fonksiyonu kaldırma
// //  delete info.myHobbies;

// // console.log(info)

// //Javascript Object Constructor 
// //Fonksiyon yöntemiyle OBJE oluşturma. Artık "new" anahtar kelimesiyle 
// // belirttiğimiz şablonda bir obje oluşturabiliriz.

// // function human(isim,yas){
// //     this.isim = isim;
// //     this.yas = yas;
// // }
// // const Berkay = new human("Berkay",23);
// // console.log(Berkay);

// // Berkay.yeniOzellik ="Berkay tavuklu pilavı çok sever";

// // console.log(Berkay.yeniOzellik);


// //Object Destructuring 
// //  Destructuring bir obje veya dizi içinden her bir elemanın
// //  alınıp yeni bir değişken içine atanması.

// const sayilar =  { sayi1 : 15 , sayi2 : 25}

// // // Uzun Yol
// // //  const sayii1 = sayilar.sayi1;
// // //  const sayii2 = sayilar.sayi2;

// //  // Kısa Yol yani Destructuring
// //  const {sayi1,sayi2} = sayilar;
// //  console.log(sayi1);

//  const cikarma = ({sayi1,sayi2}) => {
//      return sayi1-sayi2;
//  }

//  console.log(cikarma(sayilar))
// //  console.log(sayilar.sayi1 - sayilar.sayi2)
// //  Artık fonksiyonun içinde devamlı sayilar.sayi1 sayilar.sayi2 diye
// //  tekrarlamamıza gerek yok. Çıkarma fonk.un parametresine dikkat edelim.
// //  Oradaki {} bir objeyi ifade etmez . Dest. işlemini ifade eder.
// // Yani çıkarma fonksiyonuna gelen sayılar , sayılar objesinin içindeki
// // sayi1 ve sayi2 proplarını bulup parçalayıp fonksiyon içinde kullanabilir.
// // Dest işleminde sıralama önemsizdir . Yani fonksiyonu şu şekilde yazsaydık :
// // sonuç değişmezdi.
// const cikarma2 = ({sayi2,sayi1}) =>
// {
//     return sayi1-sayi2;
// }
// console.log(cikarma2(sayilar))

// //Destr işlemi yapan fonksiyona Gönderilen Obje Eksik Prop içeriyorsa :
// let bolme = ({sayi1,sayi2=1}) =>
// {
//     return sayi1/sayi2;
// }
//  let sayiObjesi = {
//      sayi1 : 8
//  }
//  console.log(bolme(sayiObjesi))
//  // Aynı durum tam tersi için de geçerlidir

//  let bolme2 =({sayi1}) =>
//  {
//      return sayi1/sayi2
//  }
//  const ornek = {
//      sayi1 :10,
//      sayi2 : 2
//  }
//  console.log(bolme2(ornek))

// Bu tarz durumların Çözümü için de Spreading Operator 
// const toplama = ({sayi1,sayi2}) => {
//     return sayi1+sayi2+sayi3+sayi4+sayi5
// }

// console.log(toplama(sayilar)) 
// Çözüm
const sayilar = {
    sayi1 : 5,
    sayi2 : 10,
    sayi3 : 15,
    sayi4 : 20,
    sayi5 : 25
}
const toplama = ({sayi1,sayi2,...args})=>{
    let sonuc = sayi1+sayi2;
    for(let sayi in args){
        sonuc += args[sayi];
    }
    return sonuc;
}
console.log(toplama(sayilar))
// Yani burada sayi1 ve sayi2 dest olsun ama geri kalanlar ARGS değişkenine
// obje olarak atansın. Yani args = {sayi3 : 15 , sayi4 : 20 , sayi5 :25} 
// şeklinde bir obje. Bu obje dest işleminden arta kalan değerleri alır.

// Bu obje içindeki değerlere ulaşmak için de for ... in ile dolaşabiliriz.
// for let sayi in args satırı der ki : args içindeki tüm propların keylerini dön bana
// yani sayi3 sayi4 , sayi5 ama biz value değerlerini istiyoruz bunun için de
// args[sayi] kodunu kullanırız . Bu bize 15 ,20,25 değerlerini döner
