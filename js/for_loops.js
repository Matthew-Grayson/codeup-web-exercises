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

function numNums() {
    for(let i = 1; i < 10; i++) {
        let placeHolder = i;
        for(let j = 1; j < i; j++) {
            placeHolder += i.toString();
        }
        console.log(placeHolder);
    }
}

function countDownFives() {
    for(let i = 20; i > 0; i--) {
        console.log(i * 5)
    }
}



