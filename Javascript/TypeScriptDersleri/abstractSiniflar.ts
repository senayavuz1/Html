abstract class Kisi{
    ad:string;
    soyad:string;
    tcNo:string;
    protected gsm:string;
    KisiBilgileriGoster():void { console.log(this.ad + " " + this.soyad) }
    abstract Ara(string):Kisi
}

class Personel extends Kisi{
    readonly _email:string; 
    personelKod:string;
    constructor(Ad:string,Soyad:string,email:string){
        super();
        this.ad=Ad;
        this.soyad=Soyad;
        this.gsm="123123";
        this._email=email;
    }
    Ara(isim: any): Kisi {
        // Velevki burada db yada web api'den veri cekiliyor 
        return new Personel(isim ,this.soyad,`${this._email}`);
    }

    getGsm():string{
        return this.gsm;
    }
    
}

//Personel ali = new Personel("Ali","Yilmaz");
let ali:Personel = new Personel("Ali","Yilmaz","ali@gmail.com");


console.log(ali.Ara("Veli") + " Gsm:" + ali.getGsm());