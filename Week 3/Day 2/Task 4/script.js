"use strict";
class Car {
    constructor(make, model, year) {
        this.carMake = make;
        this.carModel = model;
        this.carYear = year;
    }
    displayCarInfo() {
        console.log(`${this.carMake} ${this.carModel} (${this.carYear})`);
    }
}
// const myCar = new Car("Toyota", "Corolla", 2022);
// new Car("Toyota", "Corolla", 2022).displayCarInfo();
function displayCar() {
    var car = new Car(document.getElementById("car_make").value, document.getElementById("car_model").value, parseInt(document.getElementById("car_year").value));
    car.displayCarInfo();
    var out = document.getElementById("display");
    if (out) {
        out.innerHTML = `${car.carMake} ${car.carModel} (${car.carYear})`;
    }
}
