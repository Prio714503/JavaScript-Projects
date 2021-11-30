
//Addition
function addition_Function() {
    var addition = 10 + 10;
    document.getElementById('Math').innerHTML = "10 + 10 = " + addition;
}

//Subtraction
function subtract_Function () {
  var subtraction = 50 - 30;
  document.getElementById("Subtract").innerHTML = "50 - 30 = " + subtraction;
}


//Multiplication
function myFunction() {
  var multiplication = 7 * 4;
  document.getElementById("Multiply").innerHTML = "7 * 4 = " + multiplication;
}

//Division
function divide_Function() {
  var division = 100 / 50;
  document.getElementById("letsLearnDivision").innerHTML = "100 / 50 = " + division;
}

//Multiple Operations
function extreme_Math() {
  var simple_Math = (7 + 8) * 12 / 2 -4;
  document.getElementById("Math").innerHTML = " 7 plus 8, multiplied by 12, divided in half and then subtracted by 4 equals " + simple_Math;
}

//Modulus Operator
function modulus_Operator() {
let x = 43;
let y = 12;
let z = x % y;
document.getElementById("demo").innerHTML = z;
}

//Unary Operator called a Negation Operator
function negation_Operator() {
  var x = 100;
  document.getElementById("learnNegation").innerHTML = -x;
}

//Increment Operator
function increment() {
let x = 38;
x++;
let z = x;
document.getElementById("incrementNumbers").innerHTML = z;
}

//Decrement Operator
function decrement() {
let x = 45;
 x--;
 let z = x;
document.getElementById("decrementNumbers").innerHTML = z;
 }

//Random number between 0 and 1
window.alert(Math.random());

//Randon number between 0 and 100
window.alert(math.random() * 100);

//The Math Object is static. All METHODS and properties can be used without creating a math object first.

function math_Round() {
document.getElementById("demo_2").innerHTML = Math.round(4.5);
}

