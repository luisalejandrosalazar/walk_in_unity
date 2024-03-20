fillPage(JSON.parse(localStorage.getItem('shoesData')));

function fillPage(data) {
  data = data.filter(shoe => shoe.gender === "Women's Shoe");

  const shoesGrid = document.getElementById("shoesGrid");
  console.log(data)

  data.forEach((key) => {

    const shoesDiv = document.createElement("div");
    shoesDiv.classList.add("shoesDiv");
    const shoesDivImg = document.createElement("img");
    shoesDivImg.src = '.' + key.img; // - - - - -  add a '.' to the path
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
}
