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

const userName = "mark"
const userAge = 23

console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)

switch(true){
  case userAge >= 18 && userAge <= 25 :
    console.log(`your age is ${userAge} and you can vote now`)
    break
  case userAge >= 0 && userAge <= 18 :
    console.log(`your age is ${userAge} you can't vote`)
}