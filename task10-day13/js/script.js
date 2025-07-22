
var user = {
  name: "Rawan",
  age: 20,
  isStudent: true
};
user.age = 21;
console.log("User name:", user.name);


var colors = ["red", "green", "blue"];
//بحط عنصر في الاخر
colors.push("yellow");

// بحذف عنصر
colors.splice(1, 1);
console.log(colors);


//String Methods
var text = "hello world";
console.log(text.toUpperCase());       //بحول كل الحروف كابتل
console.log(text.includes("world"));    //بشوف الكلمه موجودة في النص ولالا

//DOM 
var title = document.getElementById("main-title");               // بوصل للعنصر ب id بتاعه
var para = document.getElementsByClassName("my-class")[0];       // بوصل ب اول عنصر في نفس الكلاس
var firstP = document.querySelector(".my-class");                // بوصل ب اول عنصر يطابق ال selector
var allPs = document.querySelectorAll("p");                      // كل العناصر اللي تطابقه

// innerHTML و innerText و textContent 
console.log("innerHTML:", title.innerHTML);       // بيرجع HTML الداخلي
console.log("innerText:", title.innerText);       // بيرجع النص اللي الظاهر
console.log("textContent:", title.textContent);   // بيرجع كل النص حتى لو مش ظاهر



var container = document.getElementById("container");

var newDiv = document.createElement("div");               
newDiv.setAttribute("class", "box");                      

var textNode = document.createTextNode("click here"); 
newDiv.appendChild(textNode);                              

container.appendChild(newDiv);                             


document.getElementById("remove-btn").addEventListener("click", function () {
  if (container.firstChild) {
    container.removeChild(container.firstChild);  // حذف أول عنصر داخل الكونتينر
  }
});


document.getElementById("add-btn").addEventListener("click", function () {
  var item = document.createElement("p");
  item.innerText = "New item added!";
  item.setAttribute("class", "my-class");
  container.appendChild(item);  // إضافة العنصر الجديد داخل الكونتينر
});




function addHoverEffect(element) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "tomato";  // لما اقف عليه
    element.style.color = "white";
    element.style.cursor = "pointer";
  });

  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "black";    // لما اشيل الماوس
    element.style.color = "blue";
  });
}


var allTextItems = document.querySelectorAll(".my-class");
allTextItems.forEach(addHoverEffect);


document.getElementById("add-btn").addEventListener("click", function () {
  var item = document.createElement("p");
  item.innerText = "New item added!";
  item.setAttribute("class", "my-class");
  container.appendChild(item);

  addHoverEffect(item);
});

