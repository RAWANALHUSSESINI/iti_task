
window.alert("Welcome to our page");


var Fname = "Rawan"; 
var age = 20; 
var isStudent = true; 
var grade;     // Undefined
var address = null; 

console.log("Name:", Fname);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Grade:", grade);
console.log("Address:", address);


//if
if (age === 20) {
  console.log("you are exactly 20");
}


//if else
if (isStudent) {
  console.log("You are a student");
} else {
  console.log("You are not a student");
}

//Nested If 
if (age > 18) {
  if (isStudent) {
    console.log("Adult student");
  } else {
    console.log("Adult but not a student");
  }
}


//Switch 
var day = "Monday";
switch (day) {
case "Monday":
console.log("Start of the week");
    break;
  case "Friday":
 console.log("Weekend");
    break;
   default:
    console.log("Another day");
}

//Ternary 
var message = (age >= 18) ? "Adult" : "child";
console.log("Ternary Result:", message);

//For Loop
for (let i = 1; i <= 5; i++) {
  console.log (i);
}

//While Loop
var count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

//Do While Loop
var x = 1;
do {
  console.log(x);
  x++;
} while (x <= 2);

//Function Declaration
function logName(name) {
  console.log("welcome," + name );
}
  logName("Rawan");

//Return
function add(a, b) {
  return a + b;
}
var result = add(5, 3);
console.log("Addition", result);

//Arrow
const multiply = (a, b) => a * b;
console.log("Multiply", multiply(4, 6));



//Operations
var num1 = 15;
var num2 = 10;
        
console.log("Subtraction:", num1 - num2);         
console.log("Division:", num1 / num2);        
console.log("Modulus:", num1 % num2);          
