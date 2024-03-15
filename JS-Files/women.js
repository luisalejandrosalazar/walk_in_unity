const shoesArrayFemale = [
    {
      name: "Air Force",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Converse",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Vans",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Running Shoes",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Timberland",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Off-White",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Puma",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Prada",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Reebook",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Skechers",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Under-Armour",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Dr. Martens",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "Blundstone",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
    {
      name: "New Balance",
      img: "../Images/p1.jpg",
      gender: "Women's Shoe",
      price: 10,
    },
  ];

  
const shoesGrid = document.getElementById("shoesGrid");

shoesArrayFemale.forEach((key)=>{
    
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