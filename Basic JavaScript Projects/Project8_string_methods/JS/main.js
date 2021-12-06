
// Concat() method
function full_Sentence() {
    var part_1 = "I really enjoy ";
    var part_2 = "living in the NorthWest ";
    var part_3 = "for it's rainy days!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


// Slice() method
function slice_Method() {
    var Sentence = "Learning JavaScript is not fun!!!";
    var Section = Sentence.slice(23,26);
    document.getElementById("Slice").innerHTML = Section;
}


//  ANOTHER Slice() method
function sliceMethod() {
    var cars = "Audi, Porshe, Benz, BMW, Tesla";
    document.getElementById("sliceCar").innerHTML = cars.slice(6,12);
}


// UpperCase() method
function upper_Case() {
    var text = "Christmas is coming!!";
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}


// Search() method
function search_Method() {
    var text = "Everyday is a beautiful day!!";
    document.getElementById("Search").innerHTML = text.search("beautiful");
}


// toString() method
function string_Method() {
    var X = 2021;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}


//toPrecision() method
function precision_Method() {
    var X = 68346.237476783623;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}


// toFixed() method
function toFixed() {
    var num1 = 3.2684;
    document.getElementById("convertNumber").innerHTML = num1.toFixed();
}


// valueOf() method
function value_Of() {
    var text = "how are you doing today?";
    var result = text.valueOf();
    document.getElementById("demo").innerHTML = result;
}