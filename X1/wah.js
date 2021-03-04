const plaatjes = document.getElementsByTagName("img");
let currentlyClickedCards = [];
let score = 0;

var randomNumbers = []

var random = 0;

while (randomNumbers.length < 18) {
    random = Math.floor(Math.random() * 18) +1;
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }
}
//console.log(randomNumbers);
/*
random = 0;

for (var plaatje  in plaatjes) {
    plaatjes [plaatje].src = "../fotos/fox" + randomNumbers[random] + ".jpg"
    random++;
}
*/
initGame();
function initGame(){
    const randomNumbersArray = shuffle(generateRandomNumbers(9, 2));
    for (let i = 0; i < plaatjes.length; i++){
        plaatjes[i].src = `../fotos/fox${randomNumbersArray[i]}.jpg`;
        plaatjes[i].src = `../fotos/like.jpg`;
        plaatjes[i].twinNumber = randomNumbersArray[i];
        plaatjes[i].id = i;
        plaatjes[i].addEventListener("click", cardClicked);
    }
}


function cardClicked(){
    //  console.log(this);

    if (currentlyClickedCards.length === 1 && currentlyClickedCards[0].id === this.id) return;
    //console.log(this, this.twinNumber);
    document.getElementById("q").innerText = "punten: "+score+"";
    if (currentlyClickedCards.length === 1){
        //console.log(456);
        currentlyClickedCards[1] = this;
        this.src = `../fotos/fox${this.twinNumber}.jpg`;
        //verghelijken
        if (currentlyClickedCards[0].twinNumber === currentlyClickedCards[1].twinNumber){
            //zijn de kaarten gelijk
            //console.log("Gelijk");
            currentlyClickedCards = [];
            score++;
            //console.log(score);

        } else {
            setTimeout(function(){
                currentlyClickedCards[0].src = `../fotos/like.jpg`;
                currentlyClickedCards[1].src = `../fotos/like.jpg`;
                currentlyClickedCards = [];
            }, 1000);

        }
    } else if (currentlyClickedCards.length === 0){
        //  console.log(123);
        currentlyClickedCards[0] = this;
        this.src = `../fotos/fox${this.twinNumber}.jpg`;
    }

}









function generateRandomNumbers (numberOfDifferentImages, times){
    const returnArray = [];
    for (let j = 0; j < times; j++){
        for(let i = 1; i <= numberOfDifferentImages; i++){

            returnArray.push(i);

        }
    }
    return returnArray;
}
function shuffle(arrayOne){
    const returnArray = [];
    const times = arrayOne.length;
    for (let i = 0; i < times; i++){
        const randomNumber = Math.floor(Math.random() * arrayOne.length);
        returnArray.push(arrayOne[randomNumber]);
        arrayOne.splice(randomNumber, 1);
    }
    return returnArray;
}




