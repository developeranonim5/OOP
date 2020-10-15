// Get and Setter
class Hewan{
    
    constructor (nama, jenis){
        this.nama= nama
        this._jenis= null
    }
    get jenis(){
        return `Jenis Hewan adalah ${this._jenis}`;
    }
    set jenis (jenis){
        this._jenis=`${jenis} anak`;
    }
}

const hewanKucing = new Hewan ("Kucing", "Mamalia");
hewanKucing.jenis= "Melahirkan";
console.log(hewanKucing.nama);
console.log(hewanKucing.jenis);