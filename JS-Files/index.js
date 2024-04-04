"use strict";

window.cartArray = [];

// let cartArray = [];

const loading = [
  {
    name: "Loading...",
    img: "./Images/loading.gif",
    gender: "",
    price: 0.0,
  },
];
fillPage(loading);

//import date added calculation
import { timeSince } from "./dateAdded.js";

//conect to firebase
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKAAnJyCpGJnOBD4_vuvLDoIhNZ8zc9Q",
  authDomain: "walkin-unity.firebaseapp.com",
  projectId: "walkin-unity",
  storageBucket: "walkin-unity.appspot.com",
  messagingSenderId: "539378214336",
  appId: "1:539378214336:web:cdbc22d706b202d4145425",
  //measurementId:
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get the database reference
const db = getDatabase(app);

//node to read
const dataRef = ref(db, "shoes");

//get the data
onValue(
  dataRef,
  (snapshot) => {
    let tempData = snapshot.val();
    fillPage(tempData);
  },
  {
    onlyOnce: true, // Prevents to query more than one time
  }
);

//---------- fill the page ----------

function fillPage(data) {
  // data = data.filter(shoe => shoe.gender === "Kid's Shoe");

  const shoesGrid = document.getElementById("shoesGrid");

  shoesGrid.innerHTML = "";

  data.forEach((key) => {
    const shoesDiv = document.createElement("div");
    shoesDiv.classList.add("shoesDiv");

    const shoesDivImg = document.createElement("img");
    shoesDivImg.src = key.img;
    shoesDivImg.classList.add("shoesImg");

    const shoeName = document.createElement("div");
    shoeName.classList.add("shoeName");
    shoeName.innerHTML = key.name;

    const shoePrice = document.createElement("div");
    if (key.price > 0) shoePrice.innerHTML = `$${key.price}`;

    const shoeGender = document.createElement("div");
    shoeGender.innerHTML = key.gender;

    const shoeDate = document.createElement("div");
    if (key.date) shoeDate.innerHTML = `${timeSince(key.date)}`;
    shoeDate.className = "dateAdded";

    const cart = document.createElement("button");
    cart.classList.add("addToCart");
    cart.innerHTML = "Add to Cart";
    cart.onclick = () => {
      // cartArray.push(key);

      // cartArray.forEach(()=>{
      //     let chosenShoe = JSON.stringify(cartArray);
      //     localStorage.setItem("chosenShoe", chosenShoe);
      //     console.log("Chosen Shoe:", chosenShoe)

      // })
      addItemsToCart(key);
    };

    shoesDiv.appendChild(shoesDivImg);

    shoesDiv.appendChild(shoeName);

    shoesDiv.appendChild(shoeGender);
    shoesDiv.appendChild(shoePrice);
    shoesDiv.appendChild(shoeDate);
    shoesDiv.appendChild(cart);

    shoesGrid.appendChild(shoesDiv);

    //write data to localStorage (global)
    //localStorage admit text only
    localStorage.setItem("shoesData", JSON.stringify(data));
  });
}

function addItemsToCart(key) {
  let cartArray = JSON.parse(localStorage.getItem("chosenShoe")) || [];
  cartArray.push(key);
  localStorage.setItem("chosenShoe", JSON.stringify(cartArray));

  console.log(`You chose ${key.name} which is $${key.price}!`);
}
