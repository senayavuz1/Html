// Localde veri tutmak için kullanılır.

// Oluşturmak için
localStorage.setItem("myCat","KodKedisi");

//Çağırmak için
localStorage.getItem("myCat");

//Silmek İçin
localStorage.removeItem("myCat");

// Ls içindeki veriler "Key:Value" şeklinde string türünde saklanır.
// İçinde birden fazla değer barındıran değişkenler OBJE olarak görülür.
// Bunu Önlemek için bu objeleri STRİNG e çevirmemiz gerekir.

let user = { name : "Osman" , secondName : "Baş"}


localStorage.setItem("userInfo",JSON.stringify(user))

user2 =JSON.parse(localStorage.getItem("userInfo"));
console.log(user2)