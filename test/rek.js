let getal1 ="";
let getal2 = "";
let value = "";
let res = "";

function tel1 () {
    if (value == "")
    {
        getal1 += "1";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "1"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel2 () {
    if (value == "")
    {
        getal1 += "2";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "2"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel3 () {
    if (value == "")
    {
        getal1 += "3";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "3"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel4 () {
    if (value == "")
    {
        getal1 += "4";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "4"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel5 () {
    if (value == "")
    {
        getal1 += "5";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "5"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel6 () {
    if (value == "")
    {
        getal1 += "6";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "6"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel7 () {
    if (value == "") {
        getal1 += "7";
        document.getElementById("nombo").innerText = getal1;
    } else {


        getal2 += "7"
        document.getElementById("nombo").innerText = getal2;
    }
}
function tel8 () {
    if (value == "")
    {
        getal1 += "8";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "8"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel9 () {
    if (value == "") {
        getal1 += "9";
        document.getElementById("nombo").innerText = getal1;
    } else {


        getal2 += "9"
        document.getElementById("nombo").innerText = getal2;
    }
}

function tel0 () {
    if (value == "")
    {
        getal1 += "0";
        document.getElementById("nombo").innerText = getal1;
    }else {


        getal2 += "0"
        document.getElementById("nombo").innerText = getal2;
    }
}



function telp () {
    value = "+";
}

function telm () {
    value = "-";
}

function teld () {
    value = "/";
}

function telt () {
    value = "*";
}

function telr () {
    if (value == "+") {
        res = parseInt(getal1) + parseInt(getal2);
        document.getElementById("nombo").innerText = res;
        value = "";
        getal1 = "";
        getal2= "";
    }
    else if (value == "-") {
        res = parseInt(getal1) - parseInt(getal2);
        document.getElementById("nombo").innerText = res;
        value = "";
        getal1 = "";
        getal2= "";

    }
    else if (value == "/") {
        res = parseInt(getal1) / parseInt(getal2);
        document.getElementById("nombo").innerText = res;
        value = "";
        getal1 = "";
        getal2= "";

    }
    else if (value == "*") {
        res = parseInt(getal1) * parseInt(getal2);
        document.getElementById("nombo").innerText = res;
        value = "";
        getal1 = "";
        getal2= "";
    }
}

