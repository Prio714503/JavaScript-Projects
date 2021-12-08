


// While Loop
function Call_Loop() {
    var sum = 0;
    var num = 0;

    while (num < 10) {
        sum += num;
        num++;
    }
document.getElementById("Loops").innerHTML = sum;
}


// While Loop using array
function Array_Loop() {
   var randomStuff = ["bacon", "apple", 1245, "burgers", "cake", "steak"];
   var x = 0;

  while ( x < randomStuff.length) {  
    x++;
  }
  document.getElementById("Loops_1").innerHTML = randomStuff.length;
}


// Length property returns length of a string
function addEmUp() {
let text = "What a beautiful day in the neighborhood!";
let length = text.length;

document.getElementById("getLength").innerHTML = length;

}


//For Loop using the length property
var Fruits = ["Pear", "Apple", "Mango", "Pineapple", "Cherries", "Avocado"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Fruits.length; Y++) {
        Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content;
}

// Array within a function to be called
function array_Function() {
    var Top_Pick = [];
    Top_Pick[0] = "Audi RS";
    Top_Pick[1] = "Benz AMG 63s";
    Top_Pick[2] = "BMW M8";
    Top_Pick[3] = "Subi WRX";
    Top_Pick[4] = "Tesla";
    document.getElementById("Array").innerHTML = "My dream car is a " +
    Top_Pick[1] + "."
}


// Object utilizing the Const keyword

function constant_function() {
    const Sports_Car = {make:"Audi", model:"RS7", color:"Red"};
    Sports_Car.model = "RS6";
    Sports_Car.price = "$120,000";
    document.getElementById("Constant").innerHTML = "The price of the " +
    Sports_Car.model + " is " + Sports_Car.price;
}


// Utilizing the Let keyword
function addingNumbers() {
    let a = 40;
    let b = 30;
    let sum = a + b;
    document.getElementById("adding").innerHTML = sum;
}



// Utilizing the Return statement

function myFunction(name) {
    return "Good Morning " + name;
}
document.getElementById("demo").innerHTML = myFunction("Tech Academy");

 


var x = my_Function(4, 3); 

function my_Function(a, b) {
  return a * b;   
}  
document.getElementById("add").innerHTML = x;

  



