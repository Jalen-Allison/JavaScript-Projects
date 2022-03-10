function addition_Function() {  //Addition code
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 +2 = " + addition; 
}

function subtraction_Function() { //subtraction code
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 -2 = " + subtraction;
}

function multiplication_Function() { //Multiplication code
    var simple_Math = 6 * 2;
    document.getElementById("Math").innerHTML = "6 x 2 = " + simple_Math;
}

function division_Function() { //division code
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() { //multiple operations code
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //getting a remainder code
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //getting the opposite integer of x
    var x = 10; 
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;  //Increment increase value by one
X++;
document.write(X); 

var X = 5.25; //Decrement decrease value by one
X--;
document.write(X);

window.alert(Math.random()); //pop up when you open webpage








