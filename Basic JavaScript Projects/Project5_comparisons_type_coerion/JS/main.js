

//Typeof Operator - Number
document.write(typeof 13);


//typeof operator - String
document.write(typeof "Computer");


//Typeof - type coercion
document.write("50" + 3);

//Result in NAN
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}


//NAN result in true
function my_Example() {
    document.getElementById("Example").innerHTML = isNaN('This is a string');
}


//NAN result in false
function result_False() {
    document.getElementById("Result").innerHTML = isNaN('503');
}


//Infinity
function bigNumber() {
    var num = 2E510
    document.getElementById("positiveInfinity").innerHTML = num;
}


//Negative Infinity
function big_Number() {
    var num = -2E550
    document.getElementById("negitiveInfinity").innerHTML = num;
}


//Boolean logic = true
function myFunction() {
    var num = 10 > 9
    document.getElementById("demo").innerHTML = num;
}


//Boolean logic = false
function false_Result() {
    var num = 8 < 4
    document.getElementById("x").innerHTML = num;
}


//Math operation in the console
console.log(3 * 8);


//Boolean logic in the console
console.log(14 < 6);



//Checking for equality == true
function isEqual() {
    var num = 50 == 50
    document.getElementById("y").innerHTML = num;
}


//Checking for equality == false
function falseResult() {
    var num1 = 50 == 51
    document.getElementById('z').innerHTML = num1;
}


//Triple equal - Return true matching the data type and value
function practice() {
    X = 45;
     Y = 45;
     document.getElementById("compare").innerHTML = X === Y;
 }


//Triple equal - Return false writing different data type and value
function practiceTwo() {
    X = 45;
    var Y = 35;
    document.getElementById("comp").innerHTML = X === Y;
}



//Triple equal - Return false writing different data type but same value for both
function compare() {
    X = 45;
    Y = "45";
    document.getElementById("comp_2").innerHTML = X === Y;
}
    


//Triple equal - Return false writing the same data type but a different value for both
function compareTwo() {
    X = "35";
    Y = "45";
    document.getElementById("comp_3").innerHTML = X === Y;
 }



//Logical operator - utilizing the AND operator to display true
function trueResult() {
    X = 10 > 8;
    Y = 7 > 2;
    document.getElementById("demo_1").innerHTML = 10 > 8 && 7 > 2;
}
   


//Logical operator - utilizing the AND operator to display false
function falseTest() {
    X = 8 > 9;
    Y = 7 > 11;
    document.getElementById("demo_2").innerHTML = 8 > 9 && 7 > 11;
    }



 //Logical operator - utilizing the OR operator to display true
function orTrue() {
    X = 7 > 9;
    Y = 12 > 11;
    document.getElementById("demo_3").innerHTML = 7 > 9 || 12 > 11;
    }



//Logical operator - utilizing the OR operator to display false
function orFalse() {
    X = 7 > 9;
    Y = 10 > 11;
    document.getElementById("demo_4").innerHTML = 7 > 9 || 10 > 11;
    }


//NOT Operator result in false
function not_Function() {
    document.getElementById("Not").innerHTML = !(40 > 30);
}


//NOT Operator result in true
function notFunction() {
    document.getElementById("Not_OP").innerHTML = !(30 > 40);
}