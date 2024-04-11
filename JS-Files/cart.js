const outputDiv = document.getElementById("productContent");
const totalPrice = document.getElementById("total");
const priceShoeDiv = document.getElementById("totPrice");

let cartItems = localStorage.getItem("chosenShoe");
// console.log(cartItems);

let selectedShoeData = JSON.parse(cartItems);
console.log("Selected shoe data:", selectedShoeData);
displayCartItems(selectedShoeData);

function displayCartItems(data) {
  if (data === null) {
    console.log("No Items in the cart.");
    outputDiv.innerHTML = "There is no items in the cart.";
  } else {
    let vBase = 0;
    const vTax = 0.13;

    outputDiv.innerHTML = `There is ${data.length} items the cart.`;

    data.forEach((value, index) => {
      const shoesDataDiv = document.createElement("div");
      shoesDataDiv.classList.add("shoeDataDiv");

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("imageDiv");
      const image = document.createElement("img");
      image.src = data[index].img;
      imageDiv.appendChild(image);

      const shoeDetails = document.createElement("div");
      shoeDetails.classList.add("shoeDetails");
      shoeDetails.innerHTML = `<div> <strong> ${data[index].name} </strong> </div> 
            <div> ${data[index].gender} </div>
            <div> Size: ${data[index].sizeUS} </div>  
            <span> Quantity: </span>
            `;
      const numberOfShoes = document.createElement("select");
      numberOfShoes.id = "quantity-" + index;
      numberOfShoes.classList.add("selection");
      numberOfShoes.onchange = function () {
        // calculateTotal(index);
        changeQuantity(index);
      };
      numberOfShoes.innerHTML = `
            <option value="1" ${
              data[index].quantity == 1 ? "selected" : ""
            }> 1 </option>
            <option value="2" ${
              data[index].quantity == 2 ? "selected" : ""
            }> 2 </option>
            <option value="3" ${
              data[index].quantity == 3 ? "selected" : ""
            }> 3 </option>
            `;

      const deleteIcon = document.createElement("span");
      deleteIcon.classList.add("deleteIcon");
      deleteIcon.innerHTML = `<span class="material-symbols-outlined">
            delete
            </span>`;
      deleteIcon.addEventListener("click", () => {
        deleteCartItem(index);
      });

      shoeDetails.appendChild(numberOfShoes);
      shoeDetails.appendChild(deleteIcon);

      const shoePrice = document.createElement("div");
      shoePrice.classList.add("shoePrice");
      shoePrice.innerHTML = `<div id="totPrice">$${data[index].price}.00 </div>`;

      const horizontalScale = document.createElement("hr");

      outputDiv.appendChild(shoesDataDiv);

      imageDiv.appendChild(shoeDetails);
      shoesDataDiv.appendChild(imageDiv);
      shoesDataDiv.appendChild(shoePrice);
      outputDiv.appendChild(horizontalScale);

      vBase = vBase + data[index].price * data[index].quantity;
    });
    // console.log(vBase);
    // console.log(vBase * vTax);
    const tBase = "$ " + vBase.toFixed(2);
    const tTax = "$ " + (vBase * vTax).toFixed(2);
    const tTotal = "$ " + (vBase + vBase * vTax).toFixed(2);

    document.getElementById("subtotal").innerHTML = tBase;
    document.getElementById("tax").innerHTML = tTax;
    document.getElementById("total").innerHTML = tTotal;
  }
}

function deleteCartItem(index) {
  const deleteItem = selectedShoeData.splice(index, 1);
  console.log("Updated Array:", selectedShoeData);
  console.log(`Removed Item of index ${index}:`, deleteItem);

  // localStorage.removeItem("chosenShoe");
  localStorage.setItem("chosenShoe", JSON.stringify(selectedShoeData));

  outputDiv.innerHTML = `There is ${selectedShoeData.length} items in your cart`;

  displayCartItems(selectedShoeData);
}

function changeQuantity(index) {
  const quantityOfShoes = document.getElementById("quantity-" + index).value;

  //update data
  selectedShoeData[index].quantity = quantityOfShoes;
  localStorage.setItem("chosenShoe", JSON.stringify(selectedShoeData));
  //re-render cart
  displayCartItems(selectedShoeData);
}

// function popCheckout() {
//   const orderedShoes = [];
//   localStorage.setItem("pastOrders", )

//   alert("Order Submitted Successful.");

//   // orderedShoes.push(shoes);

//   selectedShoeData.forEach((index) => {
//     console.log(index);
//     orderedShoes.push(index);
//     console.log(`Ordered shoes:`, orderedShoes);

//     const newHeader = document.createElement("h3");
//     newHeader.classList.add("orderHistory");
//     newHeader.innerHTML = "Your past orders:";

//     const newDiv = document.createElement("div");
//     newDiv.classList.add("parentDiv");

//     const leftDiv = document.createElement("div");
//     leftDiv.classList.add("leftDiv");
//     leftDiv.innerHTML = `
//     <img src="${index.img}"/>
// <div> ${index.name} |</div>
// <div> | ${index.gender} </div>
// `;

//     const rightDiv = document.createElement("div");
//     rightDiv.classList.add("rightDiv");
//     rightDiv.innerHTML = `<button class="dummies"> Track Package </button>
//     <button class="dummies"> Write a product review </button> `;

//     const lineBreaker = document.createElement("hr");

//     outputDiv.innerHTML = "Order Received Successfully.";

//     outputDiv.appendChild(lineBreaker);
//     outputDiv.appendChild(newHeader);
//     outputDiv.appendChild(newDiv);
//     newDiv.appendChild(leftDiv);
//     newDiv.appendChild(rightDiv);
//   });

//  // }

function popCheckout() {
  // Retrieve past orders from localStorage
  let pastOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];

  // Add current order to past orders
  pastOrders.push([...selectedShoeData]);

  // Update localStorage with the updated past orders
  localStorage.setItem("pastOrders", JSON.stringify(pastOrders));

  // Clear current cart data
  localStorage.removeItem("chosenShoe");
  selectedShoeData = [];

  // Display order confirmation message
  alert("Order Submitted Successfully.");

  // Display past orders
  displayPastOrders(pastOrders);
}

function displayPastOrders(pastOrders) {
  outputDiv.innerHTML = "";

  const newHeader = document.createElement("h3");
  newHeader.classList.add("orderHistory");
  newHeader.innerHTML = `Past Orders:`;
  outputDiv.appendChild(newHeader);
  // Display past orders
  pastOrders.forEach((order) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("parentDiv");

    order.forEach((shoe) => {
      const newParentDiv = document.createElement("div");
      newParentDiv.classList.add("newParentDiv");

      const leftDiv = document.createElement("div");
      leftDiv.classList.add("leftDiv");
      leftDiv.innerHTML = `
        <img src="${shoe.img}"/>
        <div>${shoe.name} |</div>
        <div>| ${shoe.gender} </div>`;

      const rightDiv = document.createElement("div");
      rightDiv.classList.add("rightDiv");
      rightDiv.innerHTML = `<button class="dummies"> Track Package </button>
                            <button class="dummies"> Write a product review </button>`;

      const lineBreaker = document.createElement("hr");

      newDiv.appendChild(newParentDiv);
      newDiv.appendChild(lineBreaker);
      newParentDiv.appendChild(leftDiv);
      newParentDiv.appendChild(rightDiv);
    });

    // outputDiv.appendChild(newHeader);
    outputDiv.appendChild(newDiv);

    document.getElementById("subtotal").innerHTML = "-";
    document.getElementById("tax").innerHTML = "-";
    document.getElementById("total").innerHTML = "-";
  });
}
