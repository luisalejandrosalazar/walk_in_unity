import { ManageAccount } from "./firebaseconect.js";

const user = localStorage.getItem("user");

//console.log(localStorage.getItem("user"));
//console.log(user);

if (!(user == null || user == "null")) {
  const userName = firstWord(user);
  // console.log(userName);

  document.getElementById("authLink").innerHTML =
    '<a href="#" itemprop="' +
    user +
    '  ▶  Log out..." onclick="window.logout()">👤 ' +
    userName +
    "...</a>";
} else {
  document.getElementById("authLink").innerHTML =
    '<a href="./Pages/login.html">Log in</a>';
}

window.logout = function () {
  let result = confirm("Are you sure you want to log out?");
  if (result) {
    const manageAccount = new ManageAccount();
    manageAccount.signOut();
  } else {
    console.log("Logout canceled.");
  }
};

function firstWord(string) {
  string = string.trim();
  var firstWord = string.split(/\s+/)[0];
  return firstWord;
}
