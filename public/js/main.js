function maybeBindEventListener(selector, eventName, callback) {
  if (document.querySelector(selector)) {
    document.querySelector(selector).addEventListener(eventName, callback);
  }
  displayName();
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

function rollAbilityScores() {
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

maybeBindEventListener("#astrologer", "click", storeName);
maybeBindEventListener("#vagabond", "click", storeName);
maybeBindEventListener("#prophet", "click", storeName);
displayName();
