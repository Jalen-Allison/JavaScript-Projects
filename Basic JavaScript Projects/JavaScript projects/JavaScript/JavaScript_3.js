function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is/was on the " + character.innerHTML + " team!");
}