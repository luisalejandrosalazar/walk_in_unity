const shoesArrayMen = [
  {
    name: "Air Force",
    img: "../Images/Airforce-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Converse",
    img: "../Images/Converse-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Vans",
    img: "../Images/Vans-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Boots",
    img: "../Images/p1.jpg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Timberland",
    img: "../Images/timberland-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Off-White",
    img: "../Images/Offwhite-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Puma",
    img: "../Images/Puma-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Prada",
    img: "../Images/Prada-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Reebok",
    img: "../Images/Reebok-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Sports",
    img: "../Images/p2.jpg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Sports",
    img: "../Images/Runningshoes-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Under-Armour",
    img: "../Images/UnderArmour-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Dr. Martens",
    img: "../Images/Marten-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  {
    name: "Skechers",
    img: "../Images/Skechers-Men.jpeg",
    gender: "Men's Shoe",
    price: 10,
  },
  ];
  

  
const shoesGrid = document.getElementById("shoesGrid");

shoesArrayMen.forEach((key)=>{
    
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
    
    shoesDiv.appendChild(shoesDivImg);
    
    shoesDiv.appendChild(shoeName);
    
    shoesDiv.appendChild(shoeGender);
    shoesDiv.appendChild(shoePrice);
    
    shoesGrid.appendChild(shoesDiv);

})