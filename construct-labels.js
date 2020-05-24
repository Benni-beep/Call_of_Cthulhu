const characterBio = {
    name: "Betsy Barrows",
    playerName: "Basti",
    occupation: "Hausmeisterin / Mechanikerin",
    birthday: new Date(1924 - 41, 7, 1),
    age: 41,
    gender: "female",
    placeOfResidence: "Arkham University",
    placeOfBirth: "Atlanta"
}

const characterAttributes = {
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
};

const characterSkills = {
    firstAid: {
        dc: 40,
        dcHard: 20,
        dcExtreme: 8
    },
    creditRating: 30,
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function constructLabels(obj) {
    labelString = "";
    typeEntry = "";
    objArray = Object.entries(obj);

    for (let element of objArray) {
        switch (typeof element[1]) {
            case "number": typeEntry = "number";
                break;
            case "string": typeEntry = "text";
                break;
            case "object": typeEntry = "date"; // typeof character.birthday value -> 'object'
                break;
        }
        labelString += `
                <label for="character-${element[0]}"> ${capitalize(element[0])}:
                <input name="character-${element[0]}" type="${typeEntry}">
                </label>
                `
    }
    return labelString;
};

function constructScript(obj) {
    let scriptString = "";

    let objArray = Object.entries(obj);

    for (let element of objArray) {
        let overwriteFunction = "overwriteCharacterString";
        if (typeof element[1] === "number") { overwriteFunction = "overwriteCharacterNumber" };
        scriptString += `
    const ${element[0]}Input = document.querySelector("input[name='character-${element[0]}']");
    ${element[0]}Input.value = character.${element[0]};
    ${element[0]}Input.addEventListener("change", ${overwriteFunction});
    `;
    };
    return scriptString;
};

console.log(constructScript(characterBio))
// console.log(constructLabels(characterAttributes));