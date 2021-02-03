var plaatjes = document.getElementsByTagName("img");

var randomNubers = []

var random = 0;

while (randomNubers.length < 9) {
    random = Math.floor(Math.random() * 9) +1;
    if (randomNubers.lastIndexOf(random) == -1) {
        randomNubers.push(random);
    }

}
random = 0;
for (var plaatje  in plaatjes) {
    plaatjes [plaatje].src = "../fotos/fox" + randomNubers[random] + ".jpg"
random++;
}



