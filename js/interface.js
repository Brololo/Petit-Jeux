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

    // Cretae DIVS for BUTTONS
    let divBtn1 = document.createElement("div");
    let divBtn2 = document.createElement("div");
    let divBtn3 = document.createElement("div");
    let divBtn4 = document.createElement("div");

    // Create BUTTONS
    let BTN1 = document.createElement("button");
    BTN1.id = "btn1";

    let BTN2 = document.createElement("button");
    BTN2.id = "btn2";

    let BTN3 = document.createElement("button");
    BTN3.id = "btn3";

    let BTN4 = document.createElement("button");
    BTN4.id = "btn4";



    // Link DIVS to BODY tag
    document.body.appendChild(divBtn1);
    document.body.appendChild(divBtn2);
    document.body.appendChild(divBtn3);
    document.body.appendChild(divBtn4);

    //Link BUTTONS to DIVS tag
    divBtn1.appendChild(BTN1);
    divBtn2.appendChild(BTN2);
    divBtn3.appendChild(BTN3);
    divBtn4.appendChild(BTN4);

    // Give DIVS CSS
    divBtn1.style.position = "absolute";
    divBtn1.style.left = wX / 5 + "px";
    divBtn1.style.width = wX / 5 + "px";
    divBtn1.style.top = wY / 5 + "px";
    divBtn1.style.height = wY / 5 + "px";
    // divBtn1.style.backgroundColor = "black";

    divBtn2.style.position = "absolute";
    divBtn2.style.left = (wX / 5) * 3 + "px";
    divBtn2.style.width = wX / 5 + "px";
    divBtn2.style.top = wY / 5 + "px";
    divBtn2.style.height = wY / 5 + "px";
    // divBtn2.style.backgroundColor = "black";

    divBtn3.style.position = "absolute";
    divBtn3.style.left = wX / 5 + "px";
    divBtn3.style.width = wX / 5 + "px";
    divBtn3.style.top = (wY / 5 ) * 3 + "px";
    divBtn3.style.height = wY / 5 + "px";
    // divBtn3.style.backgroundColor = "black";

    divBtn4.style.position = "absolute";
    divBtn4.style.left = (wX / 5 ) * 3 + "px";
    divBtn4.style.width = wX / 5 + "px";
    divBtn4.style.top = (wY / 5 ) * 3 + "px";
    divBtn4.style.height = wY / 5+ "px";
    // divBtn4.style.backgroundColor = "black";

    // Give BUTTONS CSS
    BTN1.style.width = "100%";
    BTN1.style.height = "100%";
    BTN1.style.fontSize = "30px";

    BTN2.style.width = "100%";
    BTN2.style.height = "100%";
    BTN2.style.fontSize = "30px";


    BTN3.style.width = "100%";
    BTN3.style.height = "100%";
    BTN3.style.fontSize = "30px";


    BTN4.style.width = "100%";
    BTN4.style.height = "100%";
    BTN4.style.fontSize = "30px";


    // Give BUTTONS TEXT
    BTN1.innerHTML = "spell 1"
    BTN2.innerHTML = "spell 2"
    BTN3.innerHTML = "spell 3"
    BTN4.innerHTML = "spell 4"


    //Create DIV SPAN
    let divInfo = document.createElement("div");
    document.body.appendChild(divInfo);
    divInfo.style.position = "absolute";
    divInfo.style.left = (wX / 5) * 2 + "px";
    divInfo.style.width = wX / 5 + "px";
    divInfo.style.top = (wY / 20 ) * 17 + "px";
    divInfo.style.height = wY / 10 + "px";
    // divInfo.style.backgroundColor = "black";

    //Cretae SPAN
    let infoSpan = document.createElement("span");
    infoSpan.id = "span";
    divInfo.appendChild(infoSpan);
    infoSpan.style.width = "100%";
    infoSpan.style.height = "100%";
    // infoSpan.style.backgroundColor = "green";
    // let infoTextSpan = 'ok ça marche';
    // infoSpan.innerHTML = infoTextSpan;

    BTN1.onclick = BTN1PRESSED;
    BTN2.onclick = BTN2PRESSED;
    BTN3.onclick = BTN3PRESSED;
    BTN4.onclick = BTN4PRESSED;


    function BTN1PRESSED(){
        console.log("ok1");
        infoTextSpan = 'SPELL 1 PRESSED';
        infoSpan.innerHTML = infoTextSpan;
    }

    function BTN2PRESSED(){
        console.log("ok2");
        infoTextSpan = 'SPELL 2 PRESSED';
        infoSpan.innerHTML = infoTextSpan;
    }

    function BTN3PRESSED(){
        console.log("ok3");
        infoTextSpan = 'SPELL 3 PRESSED';
        infoSpan.innerHTML = infoTextSpan;
    }

    function BTN4PRESSED(){
        console.log("ok4");
        infoTextSpan = 'SPELL 4 PRESSED';
        infoSpan.innerHTML = infoTextSpan;
    }

    combat(Joueur1, Joueur2);
}

console.log("INDEX JS FILE DETECTED");