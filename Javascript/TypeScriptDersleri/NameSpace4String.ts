
export namespace stringHelper{

 export function  BuyukHarfeCevir(mesaj:string):string{
     return mesaj.toUpperCase();
 }

 export function Substring(str:string,baslangic:number,bitis:number):string {
     return str.substring(baslangic,bitis);
     
 }
 export class Test{
    a:string;
 }

 export interface ITest{
     b:string;
 }
}