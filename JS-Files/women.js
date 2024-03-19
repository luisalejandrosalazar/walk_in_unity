const shoesArrayFemale = [
  {
    name: "Air Force",
    img: "../Images/Airforce-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Converse",
    img: "../Images/Converse-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Vans",
    img: "../Images/Vans-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Boots",
    img: "../Images/Shoe-11.jpg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Timberland",
    img: "../Images/Timberland-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Off-White",
    img: "../Images/OffWhite-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Puma",
    img: "../Images/Puma-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Prada",
    img: "../Images/Prada-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Reebok",
    img: "../Images/Reebok-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Skechers",
    img: "../Images/Skechers-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Under-Armour",
    img: "../Images/UnderArmour-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Dr. Martens",
    img: "../Images/Marten-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "Blundstone",
    img: "../Images/Blundstone-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
  {
    name: "New Balance",
    img: "../Images/NewBalance-Women.jpeg",
    gender: "Women's Shoe",
    price: 10,
  },
];

const shoesGrid = document.getElementById("shoesGrid");

shoesArrayFemale.forEach((key) => {
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
  const cart = document.createElement("button");
  cart.classList.add("addToCart");
  cart.innerHTML = "Add to Cart";

  shoesDiv.appendChild(shoesDivImg);

  shoesDiv.appendChild(shoeName);

  shoesDiv.appendChild(shoeGender);
  shoesDiv.appendChild(shoePrice);
  shoesDiv.appendChild(cart);

  shoesGrid.appendChild(shoesDiv);
});
