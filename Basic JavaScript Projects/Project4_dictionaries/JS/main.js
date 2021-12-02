
//Dictionary example
function my_Dictionary () {
    var Animal = {
        species:"Dog",
        Color:"Black",
        Breed:"Pitbull",
        Age:5,
        Sound:"Bark!" 
    };
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

//Created a dictionary containing Key Value Pairs
function my_carCollection () {
    var Sportscar = {
        Bodystyle:"Coupe",
        Color:"Red",
        Engine:"Gas",
        Trim:"RS",
        Year:2021
    };
    document.getElementById("AudiRS").innerHTML = Sportscar.Bodystyle;
    
}


//Operators as words
function my_eCarCollection () {
    var electricCar = {
        Bodystyle:"Coupe",
        Color:"Silver",
        Drivetrain:"Eletric",
        Trim:"ES",
        Year:2022
    };
    delete electricCar.Trim;
    document.getElementById("PoleStar").innerHTML = electricCar.Trim;
}