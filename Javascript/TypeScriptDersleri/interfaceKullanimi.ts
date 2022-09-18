

interface IKisi{
    ad:string;
    soyad:string;
    tcNo:string;
    Yazdir():void;
}
interface IPersonel{
    brans:string;
    maas:number;

}
class A{
 sayi:number;
 private mesaj:string
 setMesaj(mesaj:string):void{
    this.mesaj=mesaj;
    
 }
 getMesaj():string{
     return this.mesaj;
 }
}
class B{

}
class Calisan implements IPersonel,IKisi{
    ad: string;
    soyad: string;
    tcNo: string;
    Yazdir(): void {
        console.log(this.ad+" "+ this.soyad + " "+this.brans);
    }
    constructor(ad:string,soyad:string){
        
        this.ad=ad;
        this.soyad=soyad;
    }
    brans: string;
    maas: number;

}
let ali:IPersonel = new Calisan("Ali","Yilmaz");
 
let veli:IKisi = new Calisan("Veli","Ozturk");

let ayse:Calisan = new Calisan("Ayse","Demir");

veli.Yazdir();

//ayse.brans="Pazarlama";
ayse.Yazdir();
//type t = ReturnType<typeof ayse>;
console.log();

// Private Kullanimi
let a:A = new A();
  a.setMesaj(" aksdfşasdfşak ");
  console.log(a.getMesaj());