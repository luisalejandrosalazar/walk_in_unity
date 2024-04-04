//import date added calculation
import { timeSince, conditionWord } from "./dateAdded.js";

fillPage(JSON.parse(localStorage.getItem("shoesData")));

function fillPage(data) {
    data = data.filter((shoe) => shoe.gender === "Women's Shoe");

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
        const shoeSize = document.createElement("div");
        shoeSize.innerHTML = "Size: " + key.sizeUS + " (US)";

        const cart = document.createElement("button");
        cart.classList.add("addToCart");
        cart.innerHTML = "Add to Cart";

        shoesDiv.appendChild(shoesDivImg);

        //-------------------------------------------------------------
        //div
        const imgInfo = document.createElement("div");
        imgInfo.className = "imgInfo";
        //date addded
        const shoeDate = document.createElement("div");
        if (key.date) shoeDate.innerHTML = `${timeSince(key.date)}`;
        shoeDate.className = "dateAdded";

        const conditionDiv = document.createElement("div");
        conditionDiv.className = "conditionDiv";
        conditionDiv.setAttribute("tooltiptext", `${conditionWord(key.condition)}`);

        //condition
        for (let i = 1; i <= 5 - key.condition; i++) {
            const checkEmpty = document.createElement("i");
            checkEmpty.className = "fa-regular fa-circle";
            conditionDiv.appendChild(checkEmpty);
        }
        for (let i = 1; i <= key.condition; i++) {
            const checkOk = document.createElement("i");
            checkOk.className = "fa-solid fa-circle-check";
            conditionDiv.appendChild(checkOk);
        }

        imgInfo.appendChild(shoeDate);
        imgInfo.appendChild(conditionDiv);
        shoesDiv.appendChild(imgInfo);

        //-------------------------------------------------------------

        shoesDiv.appendChild(shoeName);
        shoesDiv.appendChild(shoeGender);
        shoesDiv.appendChild(shoeSize);
        shoesDiv.appendChild(shoePrice);
        shoesDiv.appendChild(cart);

        shoesGrid.appendChild(shoesDiv);
    });
}
