const shoesArrayKids = [
    {
      name: "Air Force",
      img: "../Images/p1.jpg",
      gender: "Kid's Shoe",
      price: 10,
    },
    {
      name: "Converse",
      img: "../Images/p1.jpg",
      gender: "Kid's Shoe",
      price: 10,
    },
    {
      name: "Vans",
      img: "../Images/p1.jpg",
      gender: "Kid's Shoe",
      price: 10,
    },
    {
      name: "Skechers",
      img: "../Images/p1.jpg",
      gender: "Kid's Shoe",
      price: 10,
    },
    {
      name: "New Balance",
      img: "../Images/p1.jpg",
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