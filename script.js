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

// Object.seal(obj)
// delete obj.name
// obj.name = "Priya"
// Object.freeze(obj)
// obj.name = "Priya"
// console.log(obj)
// console.log('mobileNumber' in obj)

// const arr = ["banana","mango","cherry","papaya"]
// const arr1 = ["car","bike","bus","auto","train"]
// const arr2 = ["cat","dog","goat","cow","horse","buffalo"]
// const concat = arr.concat(arr1,arr2)
// arr.pop()
// arr.shift()
// arr.push("kela")
// arr.unshift("jelly")
// const index = concat.indexOf("car")
// const includes = concat.includes("car")
// const reverse = concat.reverse("car")
// const index1 = concat.indexOf("car")
// const sort = concat.sort()
// const reverse = sort.reverse()
// const slice = sort.slice(5,9)
// const splice = sort.splice(5,9)
// console.log(sort)
// console.log(splice)


// const ticTacToi = [["O",null,null],[null,null,"O"],["O",null,"X"]]
// console.log(ticTacToi)


// let num = 0
// while(num <= 100){
//     console.log(num)
//     num++
// }

// console.log("code ended")


// const arr = ["rohan","vikash","anil","abhishek","himanshu"]
// let i = 0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }


// const arr = ["karan","yesh","himanshu","priyanka","anjali","akansha","varun","maya","simran","diya"]
// let i = 0
// while(i<arr.length){
//     console.log(`${i + 1}.${arr.sort()[i]}`)
//     i++
// }


// const arr = ["karan","yesh","himanshu","priyanka","anjali","akansha","varun","maya","simran","diya"]
// for(let i = 0; i<arr.length; i++){
//     console.log(`${i + 1}. ${arr[i]}`)
// }

// for(let i = 0; i<= 100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i> 10)

    // function introduction(name,profession,age){
    //     console.log(`Hi, My name is ${name}`)
    //     console.log(`I am a ${profession}`)
    //     console.log(`I am ${age} years old`)
    // }

    // introduction("Vivek","Software Developer",24)



    // debugger
// const name = "rohan"
// let age = 25
// function myFun(){
//     const a = 5
//     const b = 28
//     console.log(a+b)
//     myFun2()
//     return name
// }
// myFun()
// function myFun2(){
//     const x = 25
//     const y = 21
//     myFun3()
//     return x+y
// }
// function myFun3(){
//     const firstName = "karan"
//     const age = 24
//     const roomNo = 16
// }

// function myFun(){
//     function myFun2(){
//         function myFun3(){
//             let a = "nick"
//             let b = 23
//             let x = d + f
//             return x
//         }
//         let c = "mark"
//         let d = 12
//         myFun3()
//     }
//     let e = "karan"
//     let f = 24
//     myFun2()
// }
// myFun()

// myFun()
// function myFun(){         <---- function declaration and function definition
//     console.log(name)   
// }


// const myFun = function(){     <---- function expression and function definition
//     console.log(name)
// }

