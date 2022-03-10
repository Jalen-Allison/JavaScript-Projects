function my_Dictionary() { //code for dictionary
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //deletes the value of "sound" making the output "undefined"
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //if no delete code was written, it returns the element object whose id property matches the specified string
}
