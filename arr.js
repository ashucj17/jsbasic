//__________push__________________//
let color = ["red", "green", "blue"];
color.push("yellow");
console.log(color);
color.push("pink", "brown");
console.log(color);
//_____________splice is used to remove the element from the given index___________//
// color.splice(2, 3);
// console.log(color);

//__________________pop_________________//
// color.pop();
// console.log(color);

//____________unshift_________________//
color.unshift("grey");
console.log(color);

//______________shift________________//
// color.shift();
// console.log(color);

//______________lenght_______________//
// let lengthofColor = color.lenght;
console.log(color.length);
//________index of the element____________//
console.log(color[4]);

//___________array contains the specific element_____________//
let containsGreen = color.includes("green");
console.log(containsGreen);

//_________________combine two array___________//
let shape = ["circle", "sqyare", "rectangle", "triangle", "pantagon"];
let combineArray = color.concat(shape);
console.log(combineArray);

//____________________shorting an array________//
console.log(color.sort());
//__________reversing an array___________//
console.log(color.reverse());
//___________indexof______________//
console.log(color);
let indexofGrey = color.indexOf("grey");
console.log(indexofGrey);
//___________adding element using splice at specific locaton__________
console.log(combineArray);
combineArray.splice(6, 0, "quadilateral");
console.log(combineArray);
color.splice(1, 0, "purple");
console.log(color);

//_________________object of array_________________
let user = [
  { name: "ashish", age: 30, email: "ashu@gmail.com" },
  { name: "anil", age: 31, email: "anil@gmail.com" },
  { name: "neha", age: 14, email: "neha@gmail.com" },
  { name: "suchi", age: 15, email: "suchi@gmail.com" },
  { name: "varun", age: 17, email: "varun@gmail.com" },
  { name: "tarun", age: 21, email: "tarun@gmail.com" },
  { name: "harsh", age: 25, email: "harsh@gmail.com" },
  { name: "sagar", age: 22, email: "sagar@gmail.com" },
  { name: "rachit", age: 31, email: "rachit@gmail.com" },
  { name: "radha", age: 23, email: "radha@gmail.com" },
  { name: "aman", age: 27, email: "aman@gmail.com" },
];
console.log(user);
