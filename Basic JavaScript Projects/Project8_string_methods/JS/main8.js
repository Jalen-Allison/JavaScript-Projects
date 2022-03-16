
// combines multiple strings together// 
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// pulls out the string that the numbers correspondes to//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// toUpperCase makes string letters all uppercase//
function caps_toUpperCase() {
    let text1 = "Jalen was here!"; 
    let result = text1.toUpperCase(); 
    document.getElementById("Upper").innerHTML = result; 
}

// search method returns the index (position) of the first match
function search_Method() {

let text = "Slowly but surely we're getting there"; 
let position = text.search("getting"); 
document.getElementById("search").innerHTML = position; 
} 

// “toString()” method that returns a number as a string.
function string_Method() {
    var X =102;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// method formats a number to a specified length.
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFixed() converts a number to a string, rounded to a specified number of decimals//
function fixed_Method() {
let num = 5.56789;
let n = num.toFixed(3);
document.getElementById("toFixed").innerHTML = n;
}

// valueOf() returns the primitive value of a string
function value_Method() {
let text = "Hello World!";
let result = text.valueOf();
document.getElementById("valueof").innerHTML = result;
}