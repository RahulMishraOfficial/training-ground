// memory creating and executing values var, let or const
console.log(name);
var name = "Harsh";
let city = "Jaipur";
const country = "India";

// alert, confirm and prompt 

// alert("hello world")
// confirm("click ok to continue")
// prompt("write any message")

//string methods

const user = "mark";
const title = "    hello I am mark     ";
const accountLastFourDigit = "6925";
let userLength = user.length;
let userCapital = user.toUpperCase();
let userSmall = user.toLowerCase();
let removeExtraSpaceWithBothEnds = title.trim();
let characterFindsByIndex = user.charAt(3);
let concatTwoVariabels = user.concat(title);
let accountNumberWithStars = accountLastFourDigit.padStart(16,"*");
let replaceAnySpacificValueInTheVariable = title.replace("mark","Jack");
let replaceMultipleCharacter = title.replaceAll('a',"A");
