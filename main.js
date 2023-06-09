//Creation through new
function Phone(phoneBrand, sizeScreen, capacityBattery){
    this.phoneBrand = phoneBrand,
    this.sizeScreen = sizeScreen,
    this.capacityBattery = capacityBattery,
    this.plug = function(){
        console.log("Sending Message");
    }
}

const phone = new Phone ("Iphone", 8.8, 6000);
console.log(phone);