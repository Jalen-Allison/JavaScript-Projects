function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// The length property returns the length of a string.

function Many() {
let text = "Hello World!";
let length = text.length;

document.getElementById("lengthhh").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";
    document.getElementById("Array").innerHTML = "For this option " + cars[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.weight = "1LB";
    document.getElementById("Constant").innerHTML = "The weight of the guitar is " + Musical_Instrument.weight + " and the color is " + Musical_Instrument.color;
}

//let statements
var X = 22;
document.write(X);
{
    let X = 44;
    document.write("<br>" + X);
}
document.write("<br>" + X);


// Return statement = The return statement stops the execution of a function and returns a value.
function myFunction() {
    return Math.PI;
}
document.getElementById("statement").innerHTML = myFunction(); 
