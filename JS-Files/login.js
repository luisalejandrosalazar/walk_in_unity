import { ManageAccount } from "./firebaseconect.js";

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new ManageAccount();
    account.authenticate(email, password);
});

console.log("login form");
