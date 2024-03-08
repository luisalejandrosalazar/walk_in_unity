const fName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const eyeLogo = document.getElementById("eyeIcon");

eyeLogo.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
    return;
  }
};

const clearAll = () => {
  const fName = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  fName.value = "";
  email.value = "";
  password.value = "";
};
