//----JavaScript basics------------------
// console.log("basic.js is connected");

// ----------------variables-------------

// let firstName = "Raman";
// console.log(firstName);
// firstName = "Asha";
// firstName = 100;
// console.log(firstName);

// const value = 1134;
// value = 543;
// console.log(value);

// =============Alert=================
// alert("Are you sure !!");

//==============Prompt===========
// prompt("Define Ypurslef");

//==============Data Types============

//-----String-------
// let hobbie = "MLBB";
// console.log(hobbie);

//--------------Number------------
// let num = 100;
// num = 250;
// num = 1200;
// console.log(num);

//------Boolea--------------
// let ans = true;
// let ans1 = ans;
// console.log(ans1);

//____________OBJESTS_____________
// let detailsOfStudent = {
// name: "Asoop",
// class: 6,
// phone: 7418529634,
// address: "Pune",
// };
// console.log(detailsOfStudent);

// _______________ARRAY_____________;

// let arr = [10, 52, 3, 12, 41];
// console.log(arr);

//______________Nested array and objects____________
// let Data = [
//   10,
//   52,
//   {
//     assets: ["bat", "ball", "stumps"],
//   },
//   96,
//   36,
//   1,
//   0,
// ];
// console.log(Data);
// console.log(typeof Data);

// let bigNum = 741852963789562654684n;
// console.log(typeof bigNum);

// merory allocation in javascript

/* Primitive dataypes stored in stack and non-primitive/ reference datatypes stored in heap */

// primitive datatype memrory stored in heap as it variable creats a dupilcate vale in stack and the og value remains same.

// let num1 = 10;
// let num2 = num1;
// num2 = 21;
// console.log(num1);
// console.log(num2);

// Non-primitive datatype or reference dataype: it allocate the value in heap memory and modifies the og value.

// let obj1 = {
//   name: "Agni",
//   email: "agni@gmail.com",
// };
// let obj2 = obj1;
// obj2.email = "agni17.ashu@gmail.com";
// console.log(obj1.email);
// console.log(obj2.email);

// let newUsername = { name: "dheeraj", hobby: "Cricket" };
// console.log(newUsername);
//
let hero = "shaktiman";
console.log(`${hero} is my a superhero`);
let newHero = new String("heman");
console.log(newHero.toUpperCase());
