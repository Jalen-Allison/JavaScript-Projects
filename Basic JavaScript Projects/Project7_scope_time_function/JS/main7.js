//Global variable because var X is at top
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local variable because var X is within function
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    document.getElementById("Numbers").innerHTML = "X + 100?"
}
Add_numbers_1();
Add_numbers_2();

//debugging 
function Add_numbers_1() {
    Y= 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//if statements - Code should be excuted if condition is true
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (10 < 12) {
    document.write("The right number is bigger than the left number.")
}

// opposite of if statements - code should be excuted if the condition is false
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You're old enough to drive!";
    }
    else {
        Drive = "You are not old enough to drive yet.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}


// "else if" statements - else if comes afer "if" statement if the "if" statement is false
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}