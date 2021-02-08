pics = document.getElementById("pics");
createpicholder();
createKitsune();
function createpicholder() {
    for (var i = 0; i < 9; i ++){

picholder = document.createElement("div");
picholder.className = "foxpic";
picholder.id = "picture-holder-" + i;
pics.appendChild(picholder);

}
}

function createKitsune() {
    picholder = document.getElementsByClassName("foxpic");
    for (var i = 0; i < 9; i ++){
        fav = document.createElement("div");
        fav.className = "fav";
        fav.id = "fav_" + (i + 1) ;
         vospic = document.createElement("img")
        vospic.src = "../fotos/fox" + (i + 1) + ".jpg";
         vospic.id = (i + 1);
         vospic.addEventListener("click", function (){
             makeFavo(this.id);
         });
         picholder[i].appendChild(fav);
         picholder[i].appendChild(vospic);
    }
}

function makeFavo(id) {
    console.log("amma  favo now <3 no " + id);
    nofavo = document.getElementsByClassName("fav")

    for (var i = 0; i < nofavo.length; i ++) {
        nofavo[i].style.backgroundImage = "none";
    }

        fav = document.getElementById("fav_" + id);
        fav.style.backgroundImage = "url('../fotos/like.jpg')";
}