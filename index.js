// nameInput.addEventListener("blur", function() {console.log('blur')});
// nameInput.addEventListener("click", function() {console.log('click')});
// nameInput.addEventListener("focus", function() {console.log('focus')});
// nameInput.addEventListener("input", function() {console.log('input')});
// document.addEventListener("keyup", console.log);
document.addEventListener("keydown", function (event) {
  // event.preventDefault();
  console.log(event.key);
});
// document.addEventListener("keypress", console.log);



const character = {
  name: "Betsy Barrows",
  playerName: "Basti",
  occupation: "Hausmeisterin / Mechanikerin",
  birthday: new Date(1924 - 41, 7, 1),
  age: 41,
  gender: "female",
  placeOfResidence: "Arkham University",
  placeOfBirth: "Atlanta",
  attributes: {
    strength: {
      dc: 60,
      dcHard: 30,
      dcExtreme: 12
    },
    constitution: {
      dc: 30,
      dcHard: 15,
      dcExtreme: 6,
    },
    size: {
      dc: 65,
      dcHard: 32,
      dcExtreme: 13
    },
    dexterity: {
      dc: 45,
      dcHard: 22,
      dcExtreme: 9
    },
    appearance: {
      dc: 65,
      dcHard: 30,
      dcExtreme: 12
    },
    intelligence: {
      dc: 65,
      dcHard: 30,
      dcExtreme: 12
    },
    power: {
      dc: 50,
      dcHard: 25,
      dcExtreme: 10
    },
    education: {
      dc: 72,
      dcHard: 36,
      dcExtreme: 14
    },
    movement: 6,
  },
  luck: {
    current: 65,
    max: 99,
    unlucky: false
  },
  sanity: {
    current: 50,
    max: 99,
    temporarilyInsane: false,
    permanentlyInsane: false
  },
  hitPoints: {
    current: 9,
    max: 9,
    majorWound: false,
    unconcious: false,
    dying: false
  },
  magicPoints: {
    current: 10,
    max: 10
  },
  skills: {
    firstAid: {
      dc: 40,
      dcHard: 20,
      dcExtreme: 8
    },
    creditRating: 30,
    combat: {
      damageBonus: "+1d4",
      build: "+1",
      dodge: {
        dc: 22,
        dcHard: 11,
        dcExtreme: 4
      },
      meleeBrawl: {
        dc: 25,
        dcHard: 11,
        dcExtreme: 4,
        damage: "1d3 + dB",
        range: undefined
      },
      meleeAxe: {
        dc: 70,
        dcHard: 35,
        dcExtreme: 14,
        weapon: "Axe",
        damage: "1d8 + 2 + dB",
        range: undefined
      },
      rangedHandgun: {
        dc: 70,
        dcHard: 35,
        dcExtreme: 14,
        weapon: ".45 Revolver",
        damage: "1d10 + 2",
        range: "50 ft",
        numberAttacks: "1 (3)",
        ammo: {
          current: 6,
          max: 6
        },
        malfunction: 100,
      },
    },
  },
}

// const nameInput = document.querySelector("input[name='character-name']");
// nameInput.value = character.name;

// const ageInput = document.querySelector("input[name='character-age']");
// ageInput.value = character.age;
// console.log('our original model: ', character);

// // immer wenn der nutzer den `value` von `nameInput` anpasst
// nameInput.addEventListener("change", overwriteCharacterName);
ageInput.addEventListener("change", overwriteCharacterAge);

// // überschreibe den wert in unserem model
function overwriteCharacterName(changeEvent) {
  const newName = changeEvent.target.value;
  character.name = newName;
  console.log('our new model: ', character);
}

// function overwriteCharacterAge(changeEvent) {
//   const newAge = parseInt(changeEvent.target.value, 10);

//   if (Number.isInteger(newAge)) {
//     character.age = newAge;
//   }
//   else {
//     window.alert("please enter a number");
//   }
//   console.log('our new model: ', character);
// }

/**
 * generate form field statically from specific label and property name
 * dynamically generate form fields from label and property name
 * extend with eventlistener for text fields
 * extend with eventlistener for number fields
 */
function createElement(property, text) {
  const label = document.createElement("label");
  label.setAttribute("for", property);
  label.textContent = text;
  const input = document.createElement("input");
  input.setAttribute("name", property)
  input.setAttribute("type", "text")
  label.appendChild(input);
  const root = document.getElementById("bio");
  root.appendChild(label);

  // const nameInput = document.querySelector("input[name='character-name']");
  // nameInput.value = character.name;
  // nameInput.addEventListener("change", overwriteCharacterName);

}

window.onload = function () {
  // use createElement()
  createElement("character-name", "Character Name");
  createElement("player-name", "Player Name");
  createElement("character-occupation", "Occupation");
  createElement("character-birthday", "Birthday");
  createElement("character-place-of-residence", "Place Of Residence");
  createElement("character-place-of-birth", "Place Of Birth");
}


