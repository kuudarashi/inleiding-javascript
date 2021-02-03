var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../fotos/fox1.jpg')";

slideholder.addEventListener("click",function (){

    slideholder.style.backgroundImage = "url('../fotos/fox"+getfox()+".jpg')"
})

function getfox () {
    if (teller >=plaatjes.length) {
      teller = 0;
    }
   teller++;
   console.log(teller)
   return teller;
}