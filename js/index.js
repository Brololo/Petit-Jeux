let wX = window.innerWidth;
let wY = window.innerHeight;

// let body = document.getElementsByTagName("body")[0];
// body.style.backgroundImage = "url(../img/bcg.jpg)";
// body.style.backgroundSize = "cover";

let divJouer = document.getElementById("divJouer");
divJouer.style.position = "absolute";
divJouer.style.left = wX / 3 + "px";
divJouer.style.width = wX / 3 + "px";
divJouer.style.top = wY / 6 + "px";
divJouer.style.height = wY / 10 + "px";

let buttonJouer = document.getElementById("buttonJouer");
buttonJouer.style.width = "100%";
buttonJouer.style.height = "100%";
buttonJouer.style.fontSize = "30px";

let divRegles = document.getElementById("divRegles");
divRegles.style.position = "absolute";
divRegles.style.left = wX / 3 + "px";
divRegles.style.width = wX / 3 + "px";
divRegles.style.top = (wY * 2) / 3 + "px";
divRegles.style.height = wY / 10 + "px";
divRegles.style.backgroundColor = "black";

let buttonRegles = document.getElementById("buttonRegles");
buttonRegles.style.width = "100%";
buttonRegles.style.height = "100%";
buttonRegles.style.fontSize = "30px";


function start_game(){
    divJouer.remove();
    buttonJouer.remove();
    divRegles.remove();
    buttonRegles.remove();
}