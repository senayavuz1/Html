import { kedi, kopek } from './animal';

export type Hayvan=kedi|kopek;

function HayvanBesle(hayvan:Hayvan){
    console.log(hayvan.cins + " beslendi");
}
let tekir:kedi ={cins:"Ankara",yas:2};
let kangal:kopek={cins:"Kangal",yas:1};
HayvanBesle(tekir);
HayvanBesle(kangal);