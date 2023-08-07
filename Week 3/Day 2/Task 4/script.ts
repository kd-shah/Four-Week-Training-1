class Car {
    carMake: string;
    carModel: string;
    carYear: number;

    constructor(make: string, model: string, year: number) {
        this.carMake = make;
        this.carModel = model;
        this.carYear = year
    }
    displayCarInfo() {
        console.log(`${this.carMake} ${this.carModel} (${this.carYear})`)
    }

}
// const myCar = new Car("Toyota", "Corolla", 2022);
// new Car("Toyota", "Corolla", 2022).displayCarInfo();

function displayCar(): void {
    var car = new Car(
        (<HTMLInputElement>document.getElementById("car_make")).value,
        (<HTMLInputElement>document.getElementById("car_model")).value,
        parseInt((<HTMLInputElement>document.getElementById("car_year")).value)
    );
    car.displayCarInfo();
    var out = document.getElementById("display");
    if(out){
        out.innerHTML = `${car.carMake} ${car.carModel} (${car.carYear})`; 

    }
}