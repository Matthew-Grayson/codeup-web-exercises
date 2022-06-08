while(true) {
    var oddNum = prompt("Please enter an odd number between 1 and 50.");
    if (oddNum % 2 === 1 && oddNum >= 1 && oddNum < 50) {
        break;
    }
}



console.log("Number to skip is: " + oddNum);
for(let i = 0; i < 50; i++) {
    if(i === Number(oddNum)) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    if(i % 2 === 1) {
        console.log("Here is an odd number: " + i);
    }
}

