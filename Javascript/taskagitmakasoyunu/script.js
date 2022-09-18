function oyunuBaslat(secim){
    //Kullanıcının seçimini değişkene alalım
    let kullaniciSecimi = secim.id;
   // console.log("Kullanıcının Seçimi :" +kullaniciSecimi); // Kontrol Amaçlı KOD
    
    //Bilgisayar tarafından oluşturulan rastgele seçimi değişkene alalım

    let rastgeleSayi = Math.floor(Math.random()*3);
    let bilgisayarSecimi =["tas","kagit","makas"][rastgeleSayi];
    //console.log("Bilgisayarın seçimi :" +bilgisayarSecimi); //Kontrol amaçlı kod parçacığı

    //Puanları obje şeklinde oluşturalım
    let oyunPuanlari = {
        "tas":{"makas":1,"tas":0.5,"kagit":0},
        "kagit":{"tas":1,"kagit":0.5,"makas":0},
        "makas":{"kagit":1,"makas":0.5,"tas":0}
    }

    //Objeden seçimimize ait puanı alalım
    let kullaniciPuani = oyunPuanlari[kullaniciSecimi][bilgisayarSecimi];
    //console.log(kullaniciPuani) //Kontrol

    //Kayıtlı tüm resimlerin kaynak adreslerini alıp temizleyelim
    //Sonuç ekranında güzel gözükmesi için
    let kayitliResimler = {
        "tas": document.getElementById("tas").src,
        "kagit": document.getElementById("kagit").src,
        "makas": document.getElementById("makas").src
    };
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();

    //Sildiğimiz nesnelerin yerine sonuçlar için yeni nesneler oluşturalım

    let kullaniciResmi = document.createElement("img"); // HTML kısmı için yeni bir element oluşturmamıza yarayan kod
    let sonucMesaji = document.createElement("div");
    let bilgisayarResmi = document.createElement("img");

    kullaniciResmi.src =kayitliResimler[kullaniciSecimi]
    bilgisayarResmi.src = kayitliResimler[bilgisayarSecimi]

    //Oluşturduğumuz resimleri HTML e Ekleyelim
     document.querySelector(".container").appendChild(kullaniciResmi);
     document.querySelector(".container").appendChild(sonucMesaji);
     document.querySelector(".container").appendChild(bilgisayarResmi);

     //Puana Bakarak Sonucu Yazalım
    
     if(kullaniciPuani == 0){
         sonucMesaji.innerHTML ="Malesef Kaybettiniz";
         sonucMesaji.style.color="red";
         sonucMesaji.style.fontSize="4rem";
     }
     else if(kullaniciPuani == 0.5){
        sonucMesaji.innerHTML ="Berabere";
        sonucMesaji.style.color="orange";
        sonucMesaji.style.fontSize="4rem";
     }
     else{
        sonucMesaji.innerHTML ="Tebrikler Kazandınız";
        sonucMesaji.style.color="green";
        sonucMesaji.style.fontSize="4rem";
     }



}