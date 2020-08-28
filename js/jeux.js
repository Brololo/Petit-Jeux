class personnage {
  constructor(hp, attack, speed, defense, dodge, skills) {
    this.hpOfTheChar = hp;
    this.attackOfTheChar = attack;
    this.speedOfTheChar = speed;
    this.defenseOfTheChar = defense;
    this.dodgeOfTheChar = dodge;
    this.skillsOfTheChar = skills;
  }

  buff(stat, number) {
    console.log(stat, number);
  }

  take_damage(damage) {
    this.hpOfTheChar -= damage;
    console.log(this.hpOfTheChar);
  }

  healHP(heal) {
    this.hpOfTheChar += heal;
    console.log(this.hpOfTheChar);
  }

  calculation_touch(accuracy, dodge) {
    let hitChance = accuracy - dodge;
    let number = Math.floor(Math.random() * 101);
    if (hitChance >= number) {
      console.log("hit");
      return "hit";
    } else {
      console.log("miss");
      return "miss";
    }
  }

  calcul_damage(dmgMod, penetration, defense) {
    let baseDamage = this.attackOfTheChar * (dmgMod / 100);
    let reducDamage = defense - penetration;
    if (reducDamage < 0) {
      reducDamage = 0;
    }
    let damage = Math.round(baseDamage - (baseDamage * reducDamage) / 100);
    return damage;
  }

  attaque(skill, cible) {
    if (this.calculation_touch(skill[4], cible.dodgeOfTheChar) == "hit") {
      let damage = this.calcul_damage(
        skill[3],
        skill[5],
        cible.defenseOfTheChar
      );
      cible.take_damage(damage);
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
        ["Concentration", "buff", "attaque", 10],
        ["DEPECHE TOI DEPECHE TOI", "heal", 15],
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
        ["Accélérer", "buff", "dodge", 5],
        ["DEPECHE TOI DEPECHE TOI", "heal", 15, 0, 0, 0],
      ])
    );
  }
}

function play_a_turn(char) {
  let skills = char.skillsOfTheChar;
  console.log("Choisis une compétence");

  for (let i = 0; i < skills.length; i++) {
    let skillI = skills[i];
    console.log(`skill ${i + 1} :`);

    switch (skillI[1]) {
      case "attack":
        console.log(`        ${skillI[0]} 
            coef : ${skillI[3]}
            précision : ${skillI[4]}
            pénétration de défense : ${skillI[5]}`);
        break;

      case "buff":
        console.log(`        ${skillI[0]} : ${skillI[3]} ${skillI[2]}`);
        break;

      case "heal":
        console.log(`        ${skillI[0]}
            heal : ${skillI[2]}`);
        break;
    }
  }

  let choix = prompt("Choix de la compétence utilisé");

  switch (skills[choix - 1][1]) {
    case "attack":
      if (char == Joueur2) {
        char.attaque(skills[choix - 1], Joueur1);
      } else {
        char.attaque(skills[choix - 1], Joueur2);
      }

    case "buff":
      char.buff(skills[choix - 1][2], skills[choix - 1][3]);

    case "heal":
      char.healHP(skills[choix - 1][2]);
  }
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
  while (char1.hpOfTheChar > 0 && char2.hpOfTheChar > 0) {
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

combat(Joueur1, Joueur2);
