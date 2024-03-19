const shoesArrayKids = [
  {
    name: "Air Force",
    img: "../Images/Airforce-Kid.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Converse",
    img: "../Images/Converse-Kid.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Vans",
    img: "../Images/vans-kids.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Skechers",
    img: "../Images/Skechers-Kid.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "New Balance",
    img: "../Images/NewBalance-Kid.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Air Force",
    img: "../Images/A2-K.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Vans",
    img: "../Images/CustomKidsVans.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Custom Shoe",
    img: "../Images/Mick.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Air Force",
    img: "../Images/A3-K.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Custom Kid",
    img: "../Images/snow.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Custom Kid",
    img: "../Images/dog.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Custom Converse Girls",
    img: "../Images/Conv-K.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },
  {
    name: "Custom Girls",
    img: "../Images/Vans-Kid.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },

  {
    name: "Custom Girls",
    img: "../Images/girls.jpeg",
    gender: "Kid's Shoe",
    price: 10,
  },

  ];

  
const shoesGrid = document.getElementById("shoesGrid");

shoesArrayKids.forEach((key)=>{
    
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