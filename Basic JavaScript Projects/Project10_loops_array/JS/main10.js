
//telling the computer to execute certain code repeatedly while a particular condition is present. 
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


//For loop -  used to repeat a section of code a number of times. 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//rrays are used to organize items in a logical way.
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

//let statements eclares variables that can have block scope.
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

// an object using the let keyword. object includes properties and a method.
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//The break statement can be used to jump out of a loop:
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("Break").innerHTML = text;

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
let tex = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text;