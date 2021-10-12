let number = 0;

document.getElementById("ah").addEventListener("mouseover", teller)

function teller () {
   number++;
   document.getElementById("nummers").innerText = number;
   console.log(number)
   
}