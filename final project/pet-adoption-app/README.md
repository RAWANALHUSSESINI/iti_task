# Pet Haven - React Adoption Website

**Pet Haven** is a responsive React application that allows users to explore adoptable pets and submit adoption applications. This project uses **React Router**, **Bootstrap** for styling, and data fetched from an external API. It also features reusable components, structured routing, and organized folder structure.

---

## 📂 Project Structure

Pet-adoption-app/
│
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ └── (Images used for pets and UI)
│ ├── components/
│ │ ├── Navbar/
│ │ │ └── Navbar.jsx
│ │ ├── Footer/
│ │ │ └── Footer.jsx
│ │ ├── PetCard/
│ │ │ └── PetCard.jsx
│ ├── pages/
│ │ ├── Home/
│ │ │ └── Home.jsx
│ │ ├── Pets/
│ │ │ └── Pets.jsx
│ │ ├── PetDetails/
│ │ │ └── PetDetails.jsx
│ │ ├── Adopt/
│ │ │ └── Adopt.jsx
│ │ ├── NotFound/
│ │ │ └── NotFound.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── data.json (Local pet data)
└── README.md


---

##  Features

- Responsive design using Bootstrap
- Dynamic routing using React Router
- Pet listing with name, breed, and age
- Pet details page with more information
- Adoption form with auto-complete for pet names
- 404 Not Found page for invalid routes

---

##  Screenshots

-  **Home Page**
  
  ![Home Screenshot](/pet-adoption-app/src/Screenshots/home.jpg)

-  **Pets Page**

  ![Pets Screenshot](/pet-adoption-app/src/Screenshots/pets.PNG)

![Pets Screenshot](/pet-adoption-app/src/Screenshots/pets2.PNG)

![Pets Screenshot](/pet-adoption-app/src/Screenshots/pets3.PNG)


-  **Pet Details Page**

  ![Pet Details Screenshot](/pet-adoption-app/src/Screenshots/pet%20details.PNG)

-  **Adopt Page**

  ![Adopt Screenshot](/pet-adoption-app/src/Screenshots/adopt.PNG)

-  **404 Not Found**

  ![404 Screenshot](/pet-adoption-app/src/Screenshots/notfound.PNG)

---

##  How It Works

###  1. Home Page (`Home.jsx`)
Displays a welcoming section with information about pet adoption and links to explore pets.

---

###  2. Pets Page (`Pets.jsx`)
- Maps through the pet data from `data.json`
- Displays each pet inside a reusable `PetCard` component
- Data includes: `name`, `breed`, `age`

---

###  3. Pet Details (`PetDetails.jsx`)
- Uses `useParams()` from React Router to fetch the pet's ID from the URL
- Finds the matching pet from the data and shows full details

---

###  4. Adopt Page (`Adopt.jsx`)
- Contains a form for users to adopt a pet
- Includes inputs for name, email, and pet name
- The pet name field has an **auto-complete** feature using a `datalist`

---

### 5. Not Found (`NotFound.jsx`)
- Displayed for undefined routes
- Helps users navigate back using a link

---

###  Reusable Components:

- **Navbar**: Navigation bar with links to Home, Pets, and Adopt
- **Footer**: Consistent footer at the bottom of each page
- **PetCard**: Card-style UI that shows pet info (used in Pets page)

---

##  Technologies Used

- React
- React Router DOM
- Bootstrap 5
- JavaScript (ES6+)
- JSX
- HTML & CSS

---

## Navigate to the project folder:
cd pet-adoption-app

## Install dependencies:
npm install

## Start the development server:
npm run dev


