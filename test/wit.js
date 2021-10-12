document.getElementById("panda").innerText = "panda";
document.getElementById("bes").innerText = "de panda is een grote mollige beer";
document.getElementById("pandie").src = '../fotos/panda.jpg';

document.getElementById("clicker").addEventListener("click", function (){
    pandaimageslider();
    });


function pandaimageslider (){
    document.getElementById("bes").innerText ="Dit is de nieuwe beschrijving";
    document.getElementById("pandie").src ="../fotos/pando.jpeg";
}