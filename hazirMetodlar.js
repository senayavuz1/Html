let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
let qwe = str.slice(-12, -6);
console.log(part);
console.log(qwe);
//ilk 7 karakter haric gerisini verir
console.log(str.slice(7));
console.log("---------------\n");
console.log(str.substr(7, 9)+"\n");
console.log(str.substr(7)+"\n");

console.log(str.substring(3, 2)+"\n");

// concat :String Birlestirme
let str1="Test";
let str2="Deneme";
let birlesim = str1.concat(" ",str2);
console.log(birlesim);

let x = "100";
let y = "10";
let z = x / y;
console.log(z);
console.log(100 / 0);
console.log(isNaN(10/"qwe"));

let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

let k = 9.656;
console.log(k.toExponential(2));
console.log(k.toExponential(4));
console.log(k.toFixed(2));
console.log(k.toFixed(4));
console.log(k.toPrecision(2));
console.log(k.toPrecision(4));

let sayi3 = "11.04.2022";
console.log(Number(sayi3));
console.log(parseInt(sayi3));
console.log(parseFloat(sayi3));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
