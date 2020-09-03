let BTN1 = document.getElementById("btn1");
let BTN2 = document.getElementById("btn2");
let BTN3 = document.getElementById("btn3");
let BTN4 = document.getElementById("btn4");

function play_a_turn(char) {
    let infoSpan = document.getElementById("span");
    let infoTextSpan = 'Choisis une compétence';
    infoSpan.innerHTML = infoTextSpan;
    console.log(char.hpOfTheChar);
    if(BTN1.clicked == TRUE)[
        console.log("brugfhjdkl")
    ]
  }
  
  function start_turn(char1, char2) {
    if (char1.speedOfTheChar > char2.speedOfTheChar) {
      console.log("char1 commence");
      play_a_turn(char1);
      play_a_turn(char2);
    } else {
      console.log("char2 commence");
      play_a_turn(char2);
      play_a_turn(char1);
    }
  }
  
  function combat(char1, char2) {
    start_turn(char1, char2);
  }
  
  let Joueur1 = new human();
  
  let Joueur2 = new elf();

  console.log("GAME JS FILE DETECTED");