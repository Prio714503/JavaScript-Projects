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


// Function expression

 var add = function sum(val1, val2) {
    return val1 + val2;
};
document.getElementById("p1").innerHTML = add(20,20);
document.getElementById("p2").innerHTML = sum(20,20);