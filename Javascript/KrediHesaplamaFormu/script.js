function krediHesapla()
{
    var anaPara,vade;
    var aylikTaksit,toplamTutar;
    anaPara = document.getElementById("txtKrediTutari").value;
    var liste =document.getElementById("vadeListesi") // Selectten gelen değerleri yakaladık
    vade = liste.options[liste.selectedIndex].value; //Yakaladığımız değerlerin seçili olanının valuesini (selectedIndex) ile aldık

    if(vade==12)
    {
        toplamTutar = anaPara*1.1
        aylikTaksit = toplamTutar/vade;
    }
    else if(vade==24)
    {
        toplamTutar = anaPara*1.2
        aylikTaksit = toplamTutar/vade;
    }
    else if(vade==36)
    {
        toplamTutar = anaPara*1.3
        aylikTaksit = toplamTutar/vade;
    }
    else{
        toplamTutar = anaPara*1.4
        aylikTaksit = toplamTutar/vade;
    }

    document.querySelector("#sonuc").innerHTML ="Geri Ödenecek Tutar :"+toplamTutar.toFixed(2)+"<br>"+"Aylık Taksit :"+aylikTaksit.toFixed(2);






}