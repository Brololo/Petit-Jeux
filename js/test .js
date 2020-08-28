class personnage {
  constructor(hp, attack, speed, defense, dodge, skills) {
    this.hpOfTheChar = hp;
    this.attackOfTheChar = attack;
    this.speedOfTheChar = speed;
    this.defenseOfTheChar = defense;
    this.dodgeOfTheChar = dodge;
    this.skillsOfTheChar = skills;
  }

  attaque(skill, cible) {
    calculation_touch(skill[4], cible.dodgeOfTheChar);
  }

  calculation_touch(accuracy, dodge) {
    let hitCHance = accuracy - dodge;
    if (hitCHance >= Math.floor(Math.random() * 101)) {
      console.log("hit");
    } else {
      console.log("miss");
    }
  }
}

class human extends personnage {
  constructor(hp, attack, speed, defense, dodge, skills) {
    super(
      (hp = 80),
      (attack = 8),
      (speed = 8),
      (defense = 25),
      (dodge = 10),
      (skills = [
        ["Coup d'épée", "attack", 0, 150, 100, 10],
        ["Tapes y dedans", "attack", 0, 200, 80, 20],
        ["La CHAAATE", "attack", 0, 500, 45, 50],
        ["DEPECHE TOI DEPECHE TOI", "heal", 20, 0, 0, 0],
      ])
    );
  }
}

class elf extends personnage {
  constructor(hp, attack, speed, defense, dodge, skills) {
    super(
      (hp = 60),
      (attack = 10),
      (speed = 10),
      (defense = 15),
      (dodge = 20),
      (skills = [
        ["Coup d'épée", "attack", 0, 150, 100, 10],
        ["Tapes y dedans", "attack", 0, 200, 80, 20],
        ["La CHAAATE", "attack", 0, 500, 45, 50],
        ["DEPECHE TOI DEPECHE TOI", "heal", 20, 0, 0, 0],
      ])
    );
  }
}

let you = new human();

let ennemi = new elf();

function play_a_turn(char) {
  let skills = char.skillsOfTheChar;
  let skill1 = skills[0];
  let skill2 = skills[1];
  let skill3 = skills[2];
  let skill4 = skills[3];
  console.log(skill1);
  console.log(skills);
  console.log(`choisissez votre compétence :
      skill 1: 
          ${skill1[0]} 
          coef : ${skill1[3]}
          précision : ${skill1[4]}
          pénétration de défense : ${skill1[5]}
  
      skill 2: 
          ${skill2[0]} 
          coef : ${skill2[3]}
          précision : ${skill2[4]}
          pénétration de défense : ${skill2[5]}
      
      skill 3: 
          ${skill3[0]} 
          coef : ${skill3[3]}
          précision : ${skill3[4]}
          pénétration de défense : ${skill3[5]}
  
      skill 1: 
          ${skill1[0]} 
          coef : ${skill1[3]}
          précision : ${skill1[4]}
          pénétration de défense : ${skill1[5]}
          `);
}

function start_turn(char1, char2) {
  if (char1.speedOfTheChar > char2.speedOfTheChar) {
    console.log("char1 commence");
    play_a_turn(char1);
  } else {
    console.log("char2 commence");
    play_a_turn(char2);
  }
}

function combat(char1, char2) {
  if (char1.hpOfTheChar || char2.hpOfTheChar > 0) {
    // Lance un round
    start_turn(char1, char2);
  }
}

combat(you, ennemi);

// function battle(...args) {
//   console.log(args);
// }

// battle(you, ennemi);
