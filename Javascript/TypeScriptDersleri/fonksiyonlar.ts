// fonksiyonlarda parametreler default deger verme



function tsTopla(sayi1:number,sayi2:number=2000):number
{
    return sayi1+sayi2;
}

console.log(tsTopla(200));
console.log(tsTopla(200,500));

// undifend parametre yani deger vermesende olur diyebilmek icin 
// parametrenin basina ? eklemek yeterlidir
function tsTopla2(x:number,y?:number):number
{
    let toplam = 0;
    try {
        toplam=x/0;
    } catch (e ) {
        console.log(e);
    }


    if(typeof(y)=="number")
        return x+y;
    else 
    return x;    
}
console.log(tsTopla2(23));

function tsTopla3(x:number,y:number,...digerleri:number[])
{
    let genelToplam = x+y;
    let toplam = digerleri.forEach(function(deger){genelToplam+=deger});
     console.log(genelToplam);
}

tsTopla3(1,2,3,4,5,6,7,8,9);

//Arrow Function
let sum = (x:number,y:number):number =>{
    return x+y;
}