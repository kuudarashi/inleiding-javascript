var plaatje = [1,2,3,4];
var telle = 0;
var slideholde = document.getElementById("slideholde");
var slidehold = document.getElementById("slidehold")
var slidehol = document.getElementById("slidehol")
slideholde.style.backgroundImage = "url('../fotos/tcurse1.jpg')";
slidehold.style.backgroundImage = "url('../fotos/mcurse1.jpg')";
slidehol.style.backgroundImage = "url('../fotos/bcurse1.jpg')";

slideholde.addEventListener("click",function (){

    slideholde.style.backgroundImage = "url('../fotos/tcurse"+getcurse()+".jpg')"
})

slidehold.addEventListener("click",function (){

    slidehold.style.backgroundImage = "url('../fotos/mcurse"+getcurse()+".jpg')"
})

slidehol.addEventListener("click",function (){

    slidehol.style.backgroundImage = "url('../fotos/bcurse"+getcurse()+".jpg')"
})

function getcurse () {
    if (telle >=plaatje.length) {
        telle = 0;
    }
    telle++;
    console.log(telle)
    return telle;
}


