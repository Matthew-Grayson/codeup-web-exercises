var oddNum = prompt("Please enter an odd number between 1 and 50.");
while(oddNum % 2 === 0) {
    var oddNum = prompt("Please enter an odd number between 1 and 50.");
    continue;``
}



console.log("Number to skip is: " + oddNum);
for(let i = 0; i < 50; i++) {
    if(i == oddNum) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    if(i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}

