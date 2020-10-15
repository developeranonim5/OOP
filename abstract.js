function jumlah(jmlh){

    var jmlh =jmlh;
    var totalBiaya= function(){
        return jmlh * 14000;
    }
    this.tampilBiaya= function(){
        return totalBiaya();
    }
}

const penumpang = new jumlah(4);
console.log (penumpang.tampilBiaya());