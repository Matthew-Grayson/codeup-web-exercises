alert("Welcome to my Website");
var userInput = prompt("What is your favorite color?");
alert("Great, " + userInput + " is my favorite color too!");
var userInput1 = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
alert("The answer is $" + (3 + 5 + 1) * 3);
var userInput2 = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");
var payAMZN = 380, payGOOG = 400, payMETA = 350, hoursAMZN = 4, hoursGOOG = 6, hoursMETA = 10;
alert("The answer is $" + ((payAMZN * hoursAMZN) + (payGOOG * hoursGOOG) + (payMETA * hoursMETA)));
var userInput3 = prompt("A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.")
//function isScheduleConflict () {
//	for() {
//		if () {
//			return
//		}
//		else () {
//			return
//		}
//	}
//function isClassAvailable () {
//}
//}
alert("isScheduleConflict() + isClassAvailable()")
var userInput4 = prompt("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.")
// function isExpired() {
//}
//function isMember() {
//}
//if (isMember()) {
//	continue
//}
//function itemCount() {
//}
alert("This offer offer has expired.")