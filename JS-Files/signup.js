import { ManageAccount } from "./firebaseconect.js";

document.getElementById("singupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const account = new ManageAccount();
    account.register(email, password, name);
});

console.log("signup form");
