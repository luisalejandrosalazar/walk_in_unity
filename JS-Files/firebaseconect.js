//conect to firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKAAnJyCpGJnOBD4_vuvLDoIhNZ8zc9Q",
  authDomain: "walkin-unity.firebaseapp.com",
  projectId: "walkin-unity",
  storageBucket: "walkin-unity.appspot.com",
  messagingSenderId: "539378214336",
  appId: "1:539378214336:web:cdbc22d706b202d4145425",
  //measurementId:
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

class ManageAccount {
  register(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        console.log(name);
        updateProfile(auth.currentUser, { displayName: name });
        window.location.href = "./login.html";
        // Sign up successful
        alert("Sign up successful!");
      })
      .catch((error) => {
        console.error(error.message);
        // Create account Error
        alert("Create account Error: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("user", auth.currentUser.displayName);

        // log in successful
        alert("Welcome " + localStorage.getItem("user"));

        let hideLogin = document.getElementById("authLink");
        hideLogin.innerHTML = localStorage.getItem("user");

        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.error(error.message);
        // log in Error
        alert("log in Error: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "index.html";
        localStorage.setItem("userEmail", null);
        localStorage.setItem("user", null);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

export { ManageAccount };
