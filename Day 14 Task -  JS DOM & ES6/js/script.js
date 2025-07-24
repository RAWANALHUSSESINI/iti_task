
document.getElementById("page-title").addEventListener("click", function () {   //لونه هيتغير لما ادوس عليه
  this.style.color = "red";
  this.style.fontSize = "30px";
  this.innerText = "hello";
});


var container = document.getElementById("container");
var createBtn = document.getElementById("create-div");

createBtn.addEventListener("click", function () {
  var newBox = document.createElement("div"); //كل مرة هدوس عليه هيعمل بوكس جديد

  newBox.innerText = "new box";
  newBox.style.padding = "10px";
  newBox.style.margin = "10px";
  newBox.style.border = "2px solid black";
  newBox.style.backgroundColor = "tomato";

  
  newBox.addEventListener("mouseover", function () {
    newBox.style.backgroundColor = "red"; // اللون هيكون احمر اما اقف بالماوس عليه
    newBox.style.cursor = "pointer";
  });

  // لما اشيل الماوس
  newBox.addEventListener("mouseout", function () {
    newBox.style.backgroundColor = "tomato"; //اللون هيتيغر اما اشيل الماوس
  });

  newBox.addEventListener("click", function () {
  newBox.style.backgroundColor = "green"; //اما اضغط عليه هيتحول لونه اخضر
});

  container.appendChild(newBox);
}); 


