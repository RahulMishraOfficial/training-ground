// memory creating and executing values var, let or const
// console.log(name);
// var name = "Harsh";
// let city = "Jaipur";
// const country = "India";

// alert, confirm and prompt 

// alert("hello world")
// confirm("click ok to continue")
// prompt("write any message")

//string methods

// const user = "mark";
// const title = "    hello I am mark     ";
// const accountLastFourDigit = "6925";
// let userLength = user.length;
// let userCapital = user.toUpperCase();
// let userSmall = user.toLowerCase();
// let removeExtraSpaceWithBothEnds = title.trim();
// let characterFindsByIndex = user.charAt(3);
// let concatTwoVariabels = user.concat(title);
// let accountNumberWithStars = accountLastFourDigit.padStart(16,"*");
// let replaceAnySpacificValueInTheVariable = title.replace("mark","Jack");
// let replaceMultipleCharacter = title.replaceAll('a',"A");
// let templateLiterals = `Your user name is ${user} and title is ${removeExtraSpaceWithBothEnds}`

//Math methods

// let a = Math.round(Math.random()*24)
// console.log(a)

//Types of falsy
// ""
// 0
// undefined
// null 
// NaN
// let myVal = " "
// if(myVal){
//     console.log("myVal is truthy")
// }else{
//     console.log("myVal is falsy")
// }

//comparison operator
// "=="
// "==="
// "!="
// "!=="
// "<"
// ">"
// "<="
// ">="

//AND OR NOT
// "&&"
// "||"
// "!"

// const userName =  "Procodder"
// const userAge =  22 //we can use + for convert string number to nubmer 
//in parseInt it convert null value to NaN and + convert null value to 0
// const userGender = confirm("Are you male") //if value is true user is male else if value is false user is female
// const userGenderForMale = "he"
// const userGenderForFemale = "she"



// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);

// if(13) console.log("hello")   //Truthy
// if(!13) console.log("world")  //Falsy

// if(userAge > 0 && userAge <= 5 && userGender == true){
//     console.log(`${userName} is kid`);
//     console.log(`and ${userGenderForMale} is playing`);
// }else if(userAge > 0 && userAge <= 5 && userGender == false){
//     console.log(`${userName} is kid`);
//     console.log(`and ${userGenderForFemale} is playing`);
// }else if(userAge > 5 && userAge <= 17 && userGender == true){
//     console.log(`${userName} is a school student`);
//     console.log(`and ${userGenderForMale} is learning science and math`);
// }else if(userAge > 5 && userAge <= 17 && userGender == false){
//     console.log(`${userName} is a school student`);
//     console.log(`and ${userGenderForFemale} is learning science and math`);
// }else if(userAge > 17 && userAge <= 25 && userGender == true){
//     console.log(`${userName} is a collage student`);
//     console.log(`and ${userGenderForMale} is learning compute science`);
//     if(userAge){
//         console.log("Your age is greater then 16.")
//     }
// }else if(userAge > 17 && userAge <= 25 && userGender == false){
//     console.log(`${userName} is a collage student`);
//     console.log(`and ${userGenderForFemale} is learning compute science`);
// }else if(userAge > 25 && userAge <= 45 && userGender == true){
//     console.log(`${userName} is working professional`);
//     console.log(`and ${userGenderForMale} is a software developer`);
// }else if(userAge > 25 && userAge <= 45 && userGender == false){
//     console.log(`${userName} is working professional`);
//     console.log(`and ${userGenderForFemale} is a software developer`);
// }else if(userAge > 45 && userAge <= 65 && userGender == true){
//     console.log(`${userName} is retiared`);
//     console.log(`and ${userGenderForMale} reads newspaper`);
// }else if(userAge > 45 && userAge <= 65 && userGender == false){
//     console.log(`${userName} is retiared`);
//     console.log(`and ${userGenderForFemale} reads newspaper`);
// }

// const dayNumber = 5
// switch(dayNumber){
//     case 0: console.log("It is sunday")
//     break
//     case 1: console.log("It is monday")
//     break
//     case 2: console.log("It is tuesday")
//     break
//     case 3: console.log("It is wednesday")
//     break
//     case 4: console.log("It is thursday")
//     break 
//     case 5: console.log("It is friday")
//     break
//     case 6: console.log("It is saturday")
//     break
// }
// console.log("code ended");

// const userName = "mark"
// const userAge = 23

// console.log(`Name: ${userName}`)
// console.log(`Age: ${userAge}`)

// switch(true){
//   case userAge >= 18 && userAge <= 25 :
//     console.log(`your age is ${userAge} and you can vote now`)
//     break
//   case userAge >= 0 && userAge <= 18 :
//     console.log(`your age is ${userAge} you can't vote`)
// }

// let a = 4
// a > 5 ? console.log("yes a is less then 5") : console.log("no a is greater then 5")


//OBJECT  <-------------------------------------------------------------------

// let obj = {
//     name:"karan",
//     "phone-number":8283720023,
//     address:{
//         state:"up",
//         city:"kanpur",
//         weather:{
//             temprature:"16F",
//             wind:"22km/h",
//             "air-quality":"very-poor"
//         }
//     }
// }

// console.log(obj.address.weather["air-quality"])