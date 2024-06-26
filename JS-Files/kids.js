//import date added calculation
import { timeSince } from "./dateAdded.js";

fillPage(JSON.parse(localStorage.getItem("shoesData")));

function fillPage(data) {
    data = data.filter((shoe) => shoe.gender === "Kid's Shoe");

    const shoesGrid = document.getElementById("shoesGrid");

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
        shoePrice.innerHTML = `$${key.price}`;
        const shoeGender = document.createElement("div");
        shoeGender.innerHTML = key.gender;

        const shoeDate = document.createElement("div");
        if (key.date) shoeDate.innerHTML = `${timeSince(key.date)}`;
        shoeDate.className = "dateAdded";

        const cart = document.createElement("button");
        cart.classList.add("addToCart");
        cart.innerHTML = "Add to Cart";

        shoesDiv.appendChild(shoesDivImg);

        shoesDiv.appendChild(shoeName);

        shoesDiv.appendChild(shoeGender);
        shoesDiv.appendChild(shoePrice);
        shoesDiv.appendChild(shoeDate);
        shoesDiv.appendChild(cart);

        shoesGrid.appendChild(shoesDiv);
    });
}
