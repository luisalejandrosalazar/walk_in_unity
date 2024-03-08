const shoesGrid = document.getElementById("shoesGrid");

const shoesDiv = document.createElement("div");
shoesDiv.classList.add("shoesDiv");
const shoesDivImg = document.createElement("img");
shoesDivImg.src = "../Images/p1.jpg";
shoesDivImg.classList.add("shoesImg");
const shoeName = document.createElement("div");
shoeName.innerHTML = "Air Force";
const shoePrice = document.createElement("div");
shoePrice.innerHTML = "$10";
const shoeGender = document.createElement("div");
shoeGender.innerHTML = "Men's Shoe";

shoesDiv.appendChild(shoesDivImg);

shoesDiv.appendChild(shoeName);

shoesDiv.appendChild(shoeGender);
shoesDiv.appendChild(shoePrice);

shoesGrid.appendChild(shoesDiv);

