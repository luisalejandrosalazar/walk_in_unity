const email = document.getElementById("email");
const password = document.getElementById("password");
const eyeLogo = document.getElementById("eyeIcon");
const subBtn = document.getElementById("submit");
const heading = document.getElementById("headerDiv");
const mainContent = document.getElementById("formElements");

const welcomeMess = document.createElement("h2");
welcomeMess.innerHTML = "Welcome";
heading.appendChild(welcomeMess);

const displayUserDetails = () => {

  welcomeMess.innerHTML= "Welcome to Walk-in Unity";

  mainCont.innerHTML = "";

  const mainCont = document.createElement("div");
  mainCont.classList.add("mainContent");
  mainCont.innerHTML = "Start browsing shoes...";

  const homePageLink = document.createElement("a");
  homePageLink.href = "../index.html";
  homePageLink.innerHTML = "Home Page";
  homePageLink.classList.add("homePageLink");

  mainContent.appendChild(mainCont);
  mainContent.appendChild(homePageLink);

}

eyeLogo.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
    return;
  }
};

const clearAll = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  
  email.value = "";
  password.value = "";

};
