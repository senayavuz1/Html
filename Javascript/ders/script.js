//Event Bubbling

// document.querySelector(".parent").addEventListener("click",function(e){
//     console.log("Parent")
//     e.stopPropagation(); //Event Bubbling i engellemek için gerekli kod.
// })
// document.querySelector(".child").addEventListener("click",function(e){
//     console.log("Child")
//     e.stopPropagation(); //Event Bubbling i engellemek için gerekli kod.
    
// })

//{capture:true} = Sıralamayı Dıştan İçe doğru olarak almamıza yarayan kod.

// Fonksiyon

// function Hello(){
//     alert("Merhaba")
// }
// Hello();

// HTML e Yazı Gönderen Fonksiyon 
// function yaziGonder(id,mesaj){
//     let gonderilcekYer = document.querySelector(`.${id}`)
//     gonderilcekYer.innerHTML = mesaj
// }

// yaziGonder("demo","Class a yazı gönderdik")

//Fat Arrow(=>) Function

//Eski Tip Fonksiyon Tanımı
// function hello(name){
//     alert(`Merhaba ${name}`)
// }
// hello("Furkan")
// //Yeni Tip Fat Arrowla tanımlama
// const helloFunc1 = (isim) => {console.log(`Merhaba ${isim}`)}

// helloFunc1("Kadir")

// const helloFunc2 = (firtsName,secondName) => {
// let info =`Merhaba ${firtsName} ${secondName}`
// alert(info)

// }
// helloFunc2("Berkay","Türk")

//Dizi İşlemleri Arrays
let domain ="@gmail.com"
let isActive = true;
let items = [1,2,3,domain,isActive]

// console.log(typeof(items))
// console.log(Array.isArray(items))

//Dizinin sonuna eleman eklemek için  push
// items.push(50)
// console.log(items)

//Dizinin başına öğe eklemek için unshift
items.unshift("Furkan")
console.log(items)

//Sondaki elemanı Çıkarmak için pop
items.pop()
console.log(items)

//Baştaki Elemanı çıkarmak için shift
items.shift()
console.log(items)

// Array içerisinden öğe ayırmak için splice
// let newitems =items.splice(0,2)
// console.log(newitems)

//Array Kopyalamak için slice
//1. Yol
let copyitems = items.slice()
console.log(copyitems)

//2.Yol
let kopyaitems = [...items]
console.log(kopyaitems)

//İstediğimiz İndex e eleman ekleme
items.splice(items.length-1,0,"Kadir")
console.log(items)

//Array içinden koşula göre eleman çekme (Filter)
let yeniDizi=[4,"Bilgisayar","Fare","Klavye","cin","top"]

const newArray = yeniDizi.filter(yeniCekilenEleman => yeniCekilenEleman.length>3)
console.log(newArray)

// Array içinden istediğim elemanları değiştirerek yeni Array a atma (MAP)
const users =["Furkan","Mehmet","İsak","Kadir"]
console.log(users)
const newUsers = users.map(user => user.toLowerCase())
console.log(newUsers)

const sayilar =[2,4,6,8,10]
const yeniSayilar = sayilar.map(sayi=>{return sayi*2})
console.log(sayilar)
console.log(yeniSayilar)

// 4000 liradan az olanlara %50 , Çok olanlara %25 Zam

const maaslar =[2000,2500,3500,5000,7500]
const yeniMaaslar=maaslar.map(maas=>{
    if(maas<4000)
    {
        return maas * 1.5;
    }
    else{
        return maas *1.25;
    }
})
console.log(maaslar)
console.log(yeniMaaslar)



//Furkan ın Çözümü
// var newMaaskar=maaslar.map(
// //     x=>{
// //         var zam=x>4000?x*0.25:x*0.5;
// //         return x+zam;
// //     }

// // );
// console.log(newMaaskar);





