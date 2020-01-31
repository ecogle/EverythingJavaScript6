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

//object creation
function Wheel(ccar){
    this.car = ccar; //property
    //method
    this.showCarModel = (function(){
        console.log(this.car.carname + " Weel");
    });
}

var wheel = new Wheel(myCar);
wheel.showCarModel();