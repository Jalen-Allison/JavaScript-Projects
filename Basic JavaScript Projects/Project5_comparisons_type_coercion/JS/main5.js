document.write(typeof 3); //code for "type of" operator. Gives data type the variable i.e. 3=number
document.write("10" +5); //code for type coercion. converts the value to the type it chooses. Pushed "10" and "5" together to make 105

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; //0 cant divide by 0 so the code would display NaN since its not a number 
}

function string_Function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string'); //checking if its a number or not. True because its not a number and is a string 
    }
    
    function string2_Function() {
    document.getElementById("Test").innerHTML = isNaN('007'); //checking if its a number or not. False because it is a number not a string 
    }

    document.write(2E310); //positive infinity
    document.write(-3E310); //negative infinity

    document.write(10 > 2); //Boolean logic for a true statement
    document.write(10 < 2); //Boolean logic for a false statement 

    console.log(2 + 2); //will display 4 in the console on webpage
    console.log(3 > 4); //will display false in the console on webpage

    document.write(10 == 10); //comparing the first and second item to see if the data is true or false
    document.write(3 == 11); //same as above

//triple = sign comparing if Value and Type are equal. (True/False)
    X = 10;
    Y = 10;
    document.write(X === Y); //true - matching data and value

    X = 10;
    Y = "10";
    document.write(X === Y); //false - different data type but same value

    X = 10;
    Y = 25;
    document.write(X === Y); //false - different value same data type

    X = 10;
    Y = "25";
    document.write(X === Y); //false - different data type and value

//Logical operations
    document.write(5 > 2 && 10 > 4); //true - both are true
    document.write(5 > 10 && 10 > 4); //false - both arent true

    document.write(5 > 10 || 10 > 4); //true - one of the statements is true
    document.write(5 > 10 || 10 > 40); //false- neither statement is true 

//Not operator (!)
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //False 
}

function not_Function2() {
    document.getElementById("Not").innerHTML = !(5 > 10); //double negative so this would be true
} 