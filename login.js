import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUobRmLCVMTOBwMmpclPy8776tMP8hdwA",
    authDomain: "webapp-94129.firebaseapp.com",
    projectId: "webapp-94129",
    storageBucket: "webapp-94129.appspot.com",
    messagingSenderId: "477668338020",
    appId: "1:477668338020:web:671d65fa678f1c331eb271",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Get the "Register" button by ID
const submit = document.getElementById('submit');

// Add click event listener to the button
submit.addEventListener('click', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Get values from input fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate input fields
    if (!email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create a new user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully registered
            const user = userCredential.user;
            alert("Account created successfully!");
            console.log("User:", user);
            // Optionally redirect to another page (e.g., login page)
            window.location.href = "login.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            console.error("Error Code:", error.code, "Message:", errorMessage);
        });
});
