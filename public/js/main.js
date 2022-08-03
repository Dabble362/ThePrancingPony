function maybeBindEventListener(selector, eventName, callback) {
  if (document.querySelector(selector)) {
    document.querySelector(selector).addEventListener(eventName, callback);
  }
  displayName();
  DisplayClassData();
}

function storeName() {
  const characterName = window.localStorage.setItem(
    "characterName",
    document.getElementById("characterName").value
  );
  console.log(characterName);
  return characterName;
}

function displayName() {
  const characterName = window.localStorage.getItem("characterName");
  if (document.getElementById("savedCharacterName")) {
    document.getElementById(
      "savedCharacterName"
    ).innerText = `${characterName}`;
  }
}

const abilityModifier = (score) => {
  if (score < 3) throw new Error(`Ability scores must be at least 3`);
  if (score > 18) throw new Error(`Ability scores can be at most 18`);
  return Math.floor((score - 10) / 2);
};

class Character {
  static rollAbilityScores() {
    let min = 6,
      sum = 0,
      abilityScoreValue = 0;

    for (let i = 0; i < 4; i++) {
      let diceRoll = Math.floor(Math.random() * 6) + 1;

      sum += diceRoll;

      if (diceRoll < min) {
        min = diceRoll;
      }
    }
    abilityScoreValue = sum - min;
    return abilityScoreValue;
  }

  #STR;
  #DEX;
  #CON;
  #INT;
  #WIS;
  #CHA;

  constructor() {
    this.#STR = Character.rollAbilityScores();
    this.#DEX = Character.rollAbilityScores();
    this.#CON = Character.rollAbilityScores();
    this.#INT = Character.rollAbilityScores();
    this.#WIS = Character.rollAbilityScores();
    this.#CHA = Character.rollAbilityScores();
  }

  get strength() {
    return this.#STR;
  }
  get dexterity() {
    return this.#DEX;
  }
  get constitution() {
    return this.#CON;
  }
  get intelligence() {
    return this.#INT;
  }
  get wisdom() {
    return this.#WIS;
  }
  get charisma() {
    return this.#CHA;
  }
  get hitpoints() {
    return 10 + abilityModifier(this.#CON);
  }
}
//create a function that displays data generated new class declarations
function DisplayClassData() {
  let userData = new Character();
  let strength = userData.strength,
      dexterity= userData.dexterity,
      constitution = userData.constitution,
      intelligence = userData.intelligence,
      wisdom = userData.wisdom,
      charisma = userData.charisma;
      hitPoints = userData.hitpoints;
      document.getElementById('str').innerHTML = strength;
      document.getElementById('dex').innerHTML = dexterity;
      document.getElementById('con').innerHTML = constitution;
      document.getElementById('int').innerHTML = intelligence;
      document.getElementById('wis').innerHTML = wisdom;
      document.getElementById('cha').innerHTML = charisma;
      document.getElementById('hp').innerHTML = hitPoints;
}

maybeBindEventListener("#astrologer", "click", storeName);
maybeBindEventListener("#vagabond", "click", storeName);
maybeBindEventListener("#prophet", "click", storeName);
displayName();
