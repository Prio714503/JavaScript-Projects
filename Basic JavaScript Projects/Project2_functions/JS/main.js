//Using the += operator to concatinate a string in a function

function myFunction() {
    var sentence = "It is raining";
    sentence += "you need an umbrella!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

// Function practice

function ShowMessage(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}
ShowMessage("Phillip", "Rios");

// Function performs a calculation

var x = myFunction(4, 3);
document.getElementById("practice").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

// Function agruments

function message(user, message) {
    document.write("User: " + user + " || Message: " + message + "<br>");
  }
  message("Pete", "How are you?");
  message("Johnny", "I'm fine.");