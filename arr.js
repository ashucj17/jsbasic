// //__________push__________________//
// let color = ["red", "green", "blue"];
// color.push("yellow");
// console.log(color);
// color.push("pink", "brown");
// console.log(color);
// //_____________splice is used to remove the element from the given index___________//
// // color.splice(2, 3);
// // console.log(color);

// //__________________pop_________________//
// // color.pop();
// // console.log(color);

// //____________unshift_________________//
// color.unshift("grey");
// console.log(color);

// //______________shift________________//
// // color.shift();
// // console.log(color);

// //______________lenght_______________//
// // let lengthofColor = color.lenght;
// console.log(color.length);
// //________index of the element____________//
// console.log(color[4]);

// //___________array contains the specific element_____________//
// let containsGreen = color.includes("green");
// console.log(containsGreen);

// //_________________combine two array___________//
// let shape = ["circle", "sqyare", "rectangle", "triangle", "pantagon"];
// let combineArray = color.concat(shape);
// console.log(combineArray);

// //____________________shorting an array________//
// console.log(color.sort());
// //__________reversing an array___________//
// console.log(color.reverse());
// //___________indexof______________//
// console.log(color);
// let indexofGrey = color.indexOf("grey");
// console.log(indexofGrey);
// //___________adding element using splice at specific locaton__________
// console.log(combineArray);
// combineArray.splice(6, 0, "quadilateral");
// console.log(combineArray);
// color.splice(1, 0, "purple");
// console.log(color);

// //_________________object of array_________________
// let user = [
//   { name: "ashish", age: 30, email: "ashu@gmail.com" },
//   { name: "anil", age: 31, email: "anil@gmail.com" },
//   { name: "neha", age: 14, email: "neha@gmail.com" },
//   { name: "suchi", age: 15, email: "suchi@gmail.com" },
//   { name: "varun", age: 17, email: "varun@gmail.com" },
//   { name: "tarun", age: 21, email: "tarun@gmail.com" },
//   { name: "harsh", age: 25, email: "harsh@gmail.com" },
//   { name: "sagar", age: 22, email: "sagar@gmail.com" },
//   { name: "rachit", age: 31, email: "rachit@gmail.com" },
//   { name: "radha", age: 23, email: "radha@gmail.com" },
//   { name: "aman", age: 27, email: "aman@gmail.com" },
// ];
// console.log(user);

// //____________Math function with rendom and floor____________
// // let rendom = Math.random();
// // console.log(rendom);

// let random = Math.floor(Math.random() * user.length);
// console.log(user[random].name);
// clg -> consolle.log

// let naMe;
// naMe = "ashish";
// console.log(naMe);
// basic maths
// let firstNum = 8;
// let secondNum = 5;
// console.log(firstNum + secondNum);
// console.log(firstNum - secondNum);
// console.log(firstNum * secondNum);
// console.log(firstNum / secondNum);
// console.log(firstNum % secondNum);
// console.log(firstNum ** firstNum);

// falsy value = "", '', ``, 0,-0, null, false, undefine.

// let isJsProgramingLanguage = true;
// let isHard = false;
// let favNumb = 17;
// console.log(isJsProgramingLanguage);
// console.log(isHard);
// console.log(favNumb + undefined);

// let firstFavNumb = 10;
// let secondFavNumb = 7;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb == !secondFavNumb);
// console.log(firstFavNumb === !secondFavNumb);

// let favActorFirstName = "Pankaj";
// let favActorLastName = "Tripathi";
// let fullName = favActorFirstName + " " + favActorLastName;
// console.log(fullName.toUpperCase());
// let message = `My favorite Actor is ${fullName.toUpperCase()}`;
// message += `his best movie is gangs of vasepur`;
// console.log(message);

// type conversion
// string to number
// let amount = "50.64";
// amount = parseInt(amount);/* using parseInt method */
// amount = +amount; /* direct method */
// console.log(amount);
// amount = Number(amount); /* using constructor */
// console.log(typeof amount);

//  number to string
// let money = 50;
// money = money.toString();
// console.log(money);
// console.log(typeof money);

// string to decimal
// let money = "50.67";
// money = parseFloat(money);
// console.log(money);
// console.log(typeof money);

/* Date */

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.toDateString());

let newDate = new Date("2024-01-25");
// console.log(newDate);

let createdDate = new Date(2022, 9, 25);
console.log(createdDate);
