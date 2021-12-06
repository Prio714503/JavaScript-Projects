

// Local variable

function helloWorld() {
    var greeting = "Hello";
    greeting = greeting + " Tech " + " Academy";
    document.write(greeting);
    document.getElementById("localVariable").innerHTML = greeting;
}


// Global variable

let firstName = "Boss Hog";
myFunction();

function myFunction() {
  document.getElementById("globalVariable").innerHTML = "Hello, my name is " + firstName;
}

// Function with an IF statement

function get_Date() {
  if (new Date().getHours() < 20) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}



// My example of using the IF statement
function my_Function() {
  var num1 = 20;
  var num2 = 60;
  if (num1 < num2) {
    document.getElementById("demo").innerHTML = "Number 2 is larger!";
  }
}

// If/Else statement

function Age_Function() {
  Age = document.getElementById("Age"). Value;
  if (Age >= 18) {
    Vote = "You are old enough to vote!";
  }
  else {
    Vote = "You are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Another IF/Else statement

function timeFunction() {
  var hour = new Date().getHours(); 
  var greeting;
  
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  
  document.getElementById("What_time_of_the_day_is_it?").innerHTML = greeting;
} 


// Else If Statement

function Time_function() {
  var Time = new Date() .getHours();
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

