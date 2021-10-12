let things =[];

for (let i = 0; i < 10; i++) {
    things.push(document.createElement("div"));
}

for (let i = 0; 1 < things.length; i++) {
    document.getElementById("bro").appendChild(things[i])
    things[i].id = i+1;
    things[i].className = "mate";
    things[i].innerText = "damm thats crazy bro but can you define the moment i requested this ?";

}