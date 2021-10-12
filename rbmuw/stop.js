var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholde = document.getElementById("slideholde");
slideholde.style.backgroundImage = "url('../fotos/fox1.jpg')";
slideholde.addEventListener("click",dooki,dookie())


    slideholde.style.backgroundImage = "url('../fotos/fox" + dookie() +dooki() + ".jpg')"


function dookie () {
    if (teller >=plaatjes.length) {
        teller = 0;
    }
    teller++;
    console.log(teller)
    return teller;
}

function dooki () {
    if (teller >=plaatjes.length) {
        teller = 0;
    }
    teller--;
    console.log(teller)
    return teller;
}