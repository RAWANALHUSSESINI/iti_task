"use strict";
// بضيف عنصر جديد
var newDiv = document.createElement("div");
newDiv.setAttribute("class", "demo");
newDiv.setAttribute("id", "test");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);

//حذف عنصر
document.querySelector(".demo").remove();

//classList
var heading = document.createElement("h1");
heading.textContent = "Test Heading";
document.body.appendChild(heading);

heading.classList.add("big-title"); // إضافة كلاس
heading.classList.remove("big-title"); // حذف كلاس
heading.classList.replace("demo", "info"); // بستبدل كلاس

console.log("have class?", heading.classList.contains("info")); //بشوف جواها كلاس ولا لا

//var,let,const
var x = 10; // متغير عام أو داخل function
let y = 20; // متغير داخل بلوك فقط
const z = 30; // قيمة ثابتة لا تتغير

//Default Parameters , Template Literal
function greet(user = "visitor", age =("undefined")) {
  console.log(`hello ${user}،your age ${age}`);
}
greet("Rawan", 20);
greet();

//Spread Operator 
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let all = [...arr1, ...arr2];
console.log("Array:", all);

//Rest Parameter
function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log("total=", total);
}
sumAll(10, 20, 30, 40);

//Destructuring 
let user = {
  fullName: "Rawan Mahmoud",
  age: 20,
  son: {
    name: "Ali",
    gender: "male"
  }
};

let {
  fullName,
  age,
  son: { name: sonName }
} = user;
console.log(fullName, age, sonName);

//For of
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("color:", color);
}

//For in
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//map 
let plus100 = numbers.map(num => num + 100);
console.log("map:", plus100);

// filter 
let above25 = numbers.filter(num => num > 25); //بطلع اعنصر اللي بيحقق الشرط
console.log("filter:", above25);

//find
let found = numbers.find(num => num === 30); //بطلع اول عنصر بيحقق الشرط
console.log("find:", found);

//findIndex
let index = numbers.findIndex(num => num === 40); // اول indexيحقق الشرط 
console.log("findIndex:", index);
