let loan;
let percent;
let maand;
let totaal;
let resultaat = 0;

function payday() {

    loan = document.getElementById("loan").value;

    percent = document.getElementById("percent").value;

    maand = document.getElementById("maand").value;


    totaal = (parseInt(percent) / 100 * parseInt(loan)) + parseInt(loan);

    resultaat = totaal / parseInt(maand);

    document.getElementById("invaded").value = "Uitkomst: " + "$" + resultaat.toFixed(2);

console.log(resultaat);
}