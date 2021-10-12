let colorCode = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
let teller = 0;

document.getElementById('color').addEventListener("click", colorChanger);

function colorChanger () {
    teller ++;
    document.getElementById('counter').innerText = teller;
colorCode[6];
document.getElementById("output").innerText = Math.floor (Math.random() *colorCode.length);

}