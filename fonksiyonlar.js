
var isim = "Ali";
let yas = 20;

function topla(sayi1,sayi2){
    return sayi1+sayi2;
}

let toplam = topla(3,"ali");
console.log(toplam) 
let toplam2 = topla("ali","veli")
console.log(toplam2);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    hobiler:["Okuma","Yuzme","Dans","Sarki"],
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
  };

  console.log(person.firstName);
  console.log(person["lastName"]);
  console.log(person.fullName());
  person.hobiler.forEach(x=>console.log(x));

  let text = "We are the so-called \"Vikings\" from the north.";

  console.log(text);