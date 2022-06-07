function showMultiplicationTable(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i))
    }
}

function randomNum() {
    for(let i = 0; i < 10; i++){
        let placeHolder = Math.floor((Math.random() * 181) + 20)
        if(placeHolder % 2 === 0) {
            console.log(placeHolder + " is even.");
        }
        if(placeHolder % 2 !== 0) {
            console.log(placeHolder + " is odd.");
        }
    }
}

