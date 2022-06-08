for(let i = 1; i <= 16; i++) {
    console.log(Math.pow(2, i));
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conePurchase = Math.floor(Math.random() * 5) + 1;
    if(conePurchase > allCones) {
        console.log("I cannot sell you " + conePurchase + " cones. I only have " + allCones + ".")
    }
    else if(conePurchase <= allCones) {
        console.log(conePurchase + " cones sold")
        allCones -= conePurchase;
    }
} while(allCones > 0);
console.log("Yay! I sold them all!")