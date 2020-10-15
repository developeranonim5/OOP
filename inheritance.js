//Inheritance

class Vehicle{
    constructor (licensePlate, manufacture){
        this.licensePlate=licensePlate;
        this.manufacture=manufacture;
    }
    info(){
        console.log(`Nomor Kendaraan : ${this.licensePlate}`);
        console.log(`Nomor Kendaraan : ${this.manufacture}`);
        
    }

    parking(){
        console.log(`Kendaraan : ${this.licensePlate} parkir!`);
    }
}


class Car extends Vehicle{
    constructor (licensePlate,manufacture,wheels){
        super(licensePlate,manufacture);
        this.wheels=wheels;
    }
    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} Melaju!`);
    }
    openDoor(){
        console.log("Membuka Pintu")
    }

info(){
    super.info();
   console.log(`Jumlah Roda: ${this.wheels}`)
    }
}

const car  =new Car ('H12S','Honda', 4);

car.info();

