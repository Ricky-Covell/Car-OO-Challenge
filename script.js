// PART 1
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep!";
    }

    toString(){
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}

// PART 2
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}


// PART 3
class Motorcycle extends Car{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!";
    }
}


// PART 4
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        } else {
            this.vehicles.push(newVehicle);
        }    
    }
}




