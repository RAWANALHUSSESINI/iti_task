let searchInput = document.querySelector("#searchInput");
let userSelect = document.querySelector("#userSelect");
let row = document.querySelector("#row");
let loader = document.querySelector("#loader");

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleSheet);

// ✅ تشغيل التنسيق بعد تحميل الصفحة
window.addEventListener("DOMContentLoaded", function () {
  applyCustomTheme();
});

function applyCustomTheme() {
  document.body.style.background = "#fdf6f0";
  document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  document.body.style.color = "#5d4037";

  searchInput.style.border = "2px solid #d7ccc8";
  searchInput.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  searchInput.style.backgroundColor = "#fffaf5";
  searchInput.style.color = "#5d4037";
  searchInput.style.padding = "10px";

  userSelect.style.border = "2px solid #d7ccc8";
  userSelect.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  userSelect.style.backgroundColor = "#fffaf5";
  userSelect.style.color = "#5d4037";
  userSelect.style.padding = "10px";

  loader.style.border = "5px solid #f3f3f3";
  loader.style.borderTop = "5px solid #5d4037";
  loader.style.borderRadius = "50%";
  loader.style.width = "50px";
  loader.style.height = "50px";
  loader.style.margin = "20px auto";
  loader.style.animation = "spin 1s linear infinite";
  loader.style.display = "none";
}

(function () {
  const recipesList = [
    "pizza", "pasta", "cake", "salad", "chicken", "fish", "beef", "burger", "sushi", "steak",
    "apple", "banana", "cherry", "mango", "lemon", "watermelon", "ice cream", "soup", "pie"
  ];
  let options = "";
  for (let item of recipesList) {
    options += `<option value="${item}">${item}</option>`;
  }
  userSelect.innerHTML = options;
})();

async function getRecipes(searchTerm = "pizza") {
  try {
    row.innerHTML = "";
    loader.style.display = "block";

    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);
    const data = await res.json();
    loader.style.display = "none";

    if (data.recipes && data.recipes.length > 0) {
      displayRecipes(data.recipes);
    } else {
      row.innerHTML = `<p style="color:#e74c3c; font-weight:bold;">No recipes found for "${searchTerm}".</p>`;
    }
  } catch (err) {
    loader.style.display = "none";
    row.innerHTML = `<p style="color:#e74c3c; font-weight:bold;">Something went wrong!</p>`;
    console.error(err);
  }
}

function displayRecipes(arrayOfRecipes) {
  row.innerHTML = "";

  for (let recipe of arrayOfRecipes) {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    const card = document.createElement("div");
    card.className = "border rounded p-2 h-100";
    card.style.backgroundColor = "#fffaf5";
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.style.boxShadow = "0 2px 8px rgba(93, 64, 55, 0.1)";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 4px 12px rgba(93, 64, 55, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 2px 8px rgba(93, 64, 55, 0.1)";
    });

    const img = document.createElement("img");
    img.src = recipe.image_url;
    img.alt = recipe.title;
    img.className = "w-100 rounded";
    img.style.height = "250px";
    img.style.objectFit = "cover";

    const title = document.createElement("h5");
    title.textContent = recipe.title.length > 40 ? recipe.title.slice(0, 37) + "..." : recipe.title;
    title.style.color = "#5d4037";
    title.style.marginTop = "10px";

    const publisher = document.createElement("p");
    publisher.textContent = recipe.publisher;
    publisher.style.color = "#a1887f";
    publisher.style.fontSize = "0.9rem";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(publisher);
    col.appendChild(card);
    row.appendChild(col);
  }
}

let debounceTimer;
searchInput.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const term = e.target.value.trim();
    if (term.length >= 2 || term.length === 0) {
      getRecipes(term.toLowerCase());
    }
  }, 500);
});

userSelect.addEventListener("change", (e) => {
  getRecipes(e.target.value.toLowerCase());
});

getRecipes();
