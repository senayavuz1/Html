import { CLIENT_RENEG_LIMIT } from "tls";

enum IsitmaTip{
    Soba,
    DogalGazSoba,
    Dogalgaz,
    Katalitik,
    Elektirikli
}

interface EvOzellikleri{
    odaSayisi:number;
    kat:number;
    metreKare:number;
    isitma:IsitmaTip
}

class Ev implements EvOzellikleri{
    odaSayisi: number;
    kat: number;
    metreKare: number;
    isitma: IsitmaTip;
    constructor(odasayisi?:number,kat?:number)
    {
        this.odaSayisi=odasayisi;
        this.kat=kat;
    }
    EkranaYaz() : void {
        console.log("Oda Sayisi:"+this.odaSayisi+" MetreKare:"+this.metreKare);
        
    } 
}

let benimEvim = new Ev();
let seninEvin = new Ev(3,120);
benimEvim.isitma= IsitmaTip.Dogalgaz;
benimEvim.kat=2;
benimEvim.metreKare=90;
benimEvim.odaSayisi=3;
benimEvim.EkranaYaz();
console.log(seninEvin);


class Kisi{
    Ad:string;
    Soyad:string;
    TcNo:string;
    Gsm:string;
    email:string;

    constructor(ad:string,soyad:string){
        this.Ad=ad;
        this.Soyad=soyad;
    }
}
//class Personel :Kisi
class Personel extends Kisi{

    brans:string;
constructor(ad:string,soyad:string,brans:string){
   //base class'taki cosntructer'i calistirir
   super(ad,soyad); 
   this.brans=brans;
    
}
}

var ali = new Personel("Ali","Yilmaz","Muhasebe");
console.log(ali);

/*
Metod Overriding
*/

export class Arac{
marka:string;
    constructor(_marka:string)
    {
        this.marka=_marka;
    }

    HareketEt(hiz:number){
        console.log(`${this.marka} , ${hiz} ile gidiyor`);
    }
}
class Bmw extends Arac{

    constructor(_marka:string){ 
        super(_marka);
}
  HareketEt(hiz:number){
    console.log("Bmw hareket ediyor");
       super.HareketEt(hiz)
  }
}

let bmw = new Bmw("Bmw");
bmw.HareketEt(100);
