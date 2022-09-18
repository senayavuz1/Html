const container = document.querySelector(".container");
const miktar = document.getElementById("miktar");
const ucret = document.getElementById("ucret");
const select =document.querySelector(".movie");
const koltuklar =document.querySelectorAll(".koltuk:not(.reserved)")

getFromLocal();
container.addEventListener("click",function(e){
    if(e.target.classList.contains("koltuk") && !e.target.classList.contains("reserved"))
    {
        e.target.classList.toggle("selected")

            tutarHesapla();
       
    }

})

// Film listesindeki film değiştikçe Fiyatın güncellenmesi için
select.addEventListener("change",function(e){
tutarHesapla();
})

//LocalStorage
//Bütün koltukları ve seçili olanlarla rezerve olanları ayrı ayrı listeye almamız
// gerekir.

function tutarHesapla(){
    const seciliKoltukSayisi = container.querySelectorAll(".koltuk.selected");
    const seciliKoltukDizisi=[];
    const koltukDizisi=[];

    seciliKoltukSayisi.forEach(function(koltuk){
        seciliKoltukDizisi.push(koltuk)
    })
     koltuklar.forEach(function(koltuk){
         koltukDizisi.push(koltuk)
     })

     let seciliKoltukIndexleri = seciliKoltukDizisi.map(function(koltuk){
         return seciliKoltukDizisi.indexOf(koltuk)
     })

     let seciliKoltukUzunluk = seciliKoltukSayisi.length;
     miktar.innerText=seciliKoltukUzunluk;
     ucret.innerText = seciliKoltukUzunluk * select.value;
    
     saveToLocalStorage(seciliKoltukIndexleri)
}

// LS a kaydetme
function saveToLocalStorage(index){
    localStorage.setItem("seciliKoltuklar",JSON.stringify(index))
    localStorage.setItem("seciliFilmIndexi",select.selectedIndex)
}

//LS dan Çekme 
function getFromLocal(){
    const seciliKoltuklar = JSON.parse(localStorage.getItem("seciliKoltuklar"))
    const seciliFilmler =localStorage.getItem("seciliFilmIndexi")

    if(seciliKoltuklar != null && seciliKoltuklar > 0)
    {
        koltuklar.forEach(koltuk,index)
        {
            if(seciliKoltuklar.indexOf(index)>-1){
                koltuk.classList.add("selected")
            }
        }
    }
}