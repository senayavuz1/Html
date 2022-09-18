
/// <reference path="NameSpace4String.ts" />
import { stringHelper } from "./NameSpace4String";

export class Ogrenci{

    tcNo:string;
    ad:string;
    soyad:string
    constructor(ad:string,soyad:string)
    {
        this.ad = stringHelper.BuyukHarfeCevir(ad);
        this.soyad = stringHelper.BuyukHarfeCevir(soyad);
    }
}

let ali = new Ogrenci("ali","yilmaz");
console.log(ali);