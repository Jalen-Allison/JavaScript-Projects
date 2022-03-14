//Ternary Operators
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Assigning a value to the variable based on condition
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"
}

// Using the keywords new and this
function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make; //this = the object that possess the function (the outershell of the object)
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //new = creating new objects (the details of the outershell of the object )
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Contructor function
function Player(Position, Team) {
    this.Player_Position = Position;
    this.Player_Team = Team;
}
var Brady = new Player("QB", "the Bucs,");
var Brees = new Player("QB", "the Saints,");
function miFunction() {
    document.getElementById("New_and_This").innerHTML = 
    " Brady suited for " + Brady.Player_Team + " his position was " + Brady.Player_Position;
}

//Nested function
function miiFunction() {
document.getElementById("Nested_Function").innerHTML = Count();
function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one(); //nested function because we already told it to count then within the counting we told it add one
    return Starting_point;
}
}
