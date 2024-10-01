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

//___________
let containsGreen = color.includes("green");
console.log(containsGreen);
