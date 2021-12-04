
//Ternary operators

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}



function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").Value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!";
}

//Keywords and Constructors

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehilce_Year = Year;
    this.Vehicle_Color = Color; 
}
var Jack = new Vehicle("dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-Colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehilce_Year;
    
}

// Utilizing the NEW and THIS keyword

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const mySon = new Person( "Brayden", "David", 14, "Hazel");
  function my_Function() {
  document.getElementById("New_and_This").innerHTML = 
  "My son is " + mySon.age + ".";
}

//Nested functions
function myAge() {
     document.write("My age is 21 yrs old");
}
function myName() {
    document.write("My name is Bob<br>");
    myAge();
}
document.getElementById("Nested_Function").innerHTML = myName;
 
