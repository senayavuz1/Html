function EkranaYaz(isim):void{
    console.log(isim);
}
EkranaYaz("Ali Veli");
/*
veri tipleri
*/ 

var sayi = 15; // ilk deger atamasi yaptigimizda bunu number olarak algilar
//sayi ="aliveli"; // Burasi hata verecektir.

// Primitive
var cevap : Boolean;
var sayi2:number;
var sehir:string;
var dogumTarihi:Date;


cevap=true;
sayi2=12;
sehir="Adana";
dogumTarihi=new Date();
console.log(dogumTarihi);
/*
Diziler
*/
var sayilar = [1,2,3,4,5,6,7,8,9];
let sehirler =["Adana","Ankara","Bursa","Istanbul","Izmir"];
let sayilar2:Array<number> =[1,2,3,4,5,6,7,8];



sayilar.push(12);

function Topla(sayi1:number,sayi2:number):number
{
    return sayi1+sayi2;
}

console.log(Topla(3,5));

/*
Tuple
*/
var complex2:[number,string] =[12,"sdfsdf"];
var complexDizi = [12,"Adana"];
complexDizi.forEach(function(deger){return console.log(deger)});

/*
Enum
*/ 
enum Renkler{
    mavi,
    kirmizi,
    siyah,
    beyaz
}

let renk:Renkler= Renkler.kirmizi;
console.info(renk);

/*
Any,Void ,Null

*/

let xyz:any = "Ali";
xyz=15;

dogumTarihi=null;
/*Union*/

let code:(string|number);
code = 123;
code = "ali";

function displayCode(code:(string|number))
{
 
    if(typeof(code)==="number")
    console.log("Kode sayisaldir..");

    if(typeof(code)==="string")
    console.log("Kode string tir..");
    
}

function UnionToplama(x:(string|number),y:(string|number)):(string|number)
{

    if(typeof(x)==="number" && typeof(y)==="number")
        return x+y;
    if(typeof(x)==="string" && typeof(y)==="string")
        return x+y;
}

console.log(UnionToplama(3,5));
console.log(UnionToplama("3","5"));
