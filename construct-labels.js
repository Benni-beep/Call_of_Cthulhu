const character = {
    name: "Betsy Barrows",
    playerName: "Basti",
    occupation: "Hausmeisterin / Mechanikerin",
    birthday: new Date(1924 - 41, 7, 1),
    age: 41,
    gender: "female",
    placeOfResidence: "Arkham University",
    placeOfBirth: "Atlanta"
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
            case "string":typeEntry = "text";
                break;
            case "object":typeEntry = "date"; // typeof character.birthday value -> 'object'
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

console.log(constructLabels(character))