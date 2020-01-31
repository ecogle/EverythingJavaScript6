//variable declaration
var one = 1;

var result = one+ one;

console.log(result);

//Class definition
class Car{
    constructor(brand){
         //property
        this.carname = brand;
    }

    //method
    showCar(){
        console.log(this.carname);
    }
    
}

//instantiation
var myCar = new Car("Ford");

//prototyping a method
Car.prototype.showAnother = (function (){
    console.log("Another car " + this.carname);
});

myCar.showCar();
myCar.showAnother();

//object creation using a function
function Wheel(ccar){
    this.car = ccar; //property
    //method
    this.showCarModel = (function(){
        console.log(this.car.carname + " Weel");
    });
}

var wheel = new Wheel(myCar);
wheel.showCarModel();

// ajax request
function loadText(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("text").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","http://localhost:8080/ajax/text.txt",true);
    xhttp.send();
   
}