//Polymorp
class Transportation{
    constructor (name){
        this.name=name;
        }
    jalur(){
    console.log(`${this.name} Pergi dengan transportasi Darat`);
    }
}
class Persons extends Transportation{
    constructor (name){
        super(name)
    }
    // jalur(){
    //     console.log(`${this.name} Pergi dengan transportasi Udara`)
    // }
}
const saya = new Persons ("Saya");
saya.jalur();