  function play_a_turn(char) {
    let infoSpan = document.getElementById("span");
    let infoTextSpan = 'Choisis une compétence';
    infoSpan.innerHTML = infoTextSpan;
    console.log(char.hpOfTheChar);
    break
    console.log("ok");
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
    if (char1.hpOfTheChar > 0 && char2.hpOfTheChar > 0) {
      start_turn(char1, char2);
    }
    if (char1.hpOfTheChar > 0) {
      console.log("char 1 win");
    } else {
      console.log("char 2 win");
    }
  }
  
  let Joueur1 = new human();
  
  let Joueur2 = new elf();

  console.log("GAME JS FILE DETECTED");