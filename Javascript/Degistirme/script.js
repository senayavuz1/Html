// ADDEVENTLİSTENER 
// Eventleri javaScriptte yakalayıp işlem yapmak için kullanılır.
document.getElementById("demo").addEventListener("click",function(){
    console.log("Tıklandı")
    
})

document.querySelector("a").addEventListener("click",function(e){
    e.preventDefault();
})

document.getElementById("adsoyad").addEventListener("keypress",function(e){
    let kopya =document.getElementById("lbl1");
    console.log(kopya);
   document.getElementById("kopya").value=e.key;
    input.innerText= e.key;
    kopya.value = e.key;
    console.log("onkeypress:"+e.key)
    
})