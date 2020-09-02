class personnage {
    constructor(parameters) {
        this.hpOfTheChar = parameters.hp;
        this.attackOfTheChar = parameters.attack;
        this.speedOfTheChar = parameters.speed;
        this.defenseOfTheChar = parameters.defense;
        this.dodgeOfTheChar = parameters.dodge;
        this.skillsOfTheChar = parameters.skills;
      }
  
    buff_self(stat, number) {
      console.log(stat, number);
      switch (stat) {
        case "dodge":
          this.dodgeOfTheChar += number;
          console.log(this.dodgeOfTheChar);
        case "attack":
          this.attackOfTheChar += number;
      }
    }
  
    healHP(heal) {
      this.hpOfTheChar += heal;
      console.log(this.hpOfTheChar);
    }

    take_damage(damage) {
        this.hpOfTheChar -= damage;
        console.log(this.hpOfTheChar);
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
  
    attaque(name, damage_mod, accuracy, penetration, cible) {
      if (this.calculation_touch(accuracy, cible.dodgeOfTheChar) == "hit") {
        let damage = this.calcul_damage(
            damage_mod,
            penetration,
            cible.defenseOfTheChar
        );
        cible.take_damage(damage);
      }
    }
  }
  
  class human extends personnage {
    constructor(parameters) {
        super({
          hp : 80,
          attack : 8,
          speed : 12,
          defense : 2,
          dodge : 1,
        });
      }

    skill1(cible){
        this.name = "Sword Slash";
        this.damage_mod = 150;
        this.accuracy = 100;
        this.penetration = 10;
        this.attaque(name, damage_mod, accuracy, penetration, cible)
        this.description = "Strike your opponent"
    }

    skill2(cible){
        this.name = "Tapes y dedans";
        this.damage_mod = 200;
        this.accuracy = 80;
        this.penetration = 20;
        this.attaque(name, damage_mod, accuracy, penetration, cible)
        this.description = "Strike your opponent"
    }

    skill3(cible){
        this.name = "Concentration";
        this.stat = "attack";
        this.number = 10;
        this.buff_self(stat, number)
        this.description = "buff your attack"
    }

    skill4(cible){
        this.name = "DEPECHE TOI DEPECHE TOI";
        this.heal = 15;
        this.healHP(this.heal)
        this.description = "Heal yourself"
    }
  }
  
  class elf extends personnage {
    constructor(parameters) {
        super({
          hp : 60,
          attack : 10,
          speed : 10,
          defense : 15,
          dodge : 20,
        });
      }

    skill1(cible){
        this.name = "Sword Slash";
        this.damage_mod = 150;
        this.accuracy = 100;
        this.penetration = 10;
        this.attaque(name, damage_mod, accuracy, penetration, cible)
        this.description = "Strike your opponent"
    }

    skill2(cible){
        this.name = "Tapes y dedans";
        this.damage_mod = 200;
        this.accuracy = 80;
        this.penetration = 20;
        this.attaque(name, damage_mod, accuracy, penetration, cible)
        this.description = "Strike your opponent"
    }

    skill3(cible){
        this.name = "Speed up";
        this.stat = "dodge";
        this.number = 5;
        this.buff_self(stat, number)
        this.description = "buff your dodge"
    }

    skill4(cible){
        this.name = "DEPECHE TOI DEPECHE TOI";
        this.heal = 15;
        this.healHP(this.heal)
        this.description = "Heal yourself"
    }
  }


  console.log("CHAR JS FILE DETECTED");