
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBCvllRyzvXhXNNmSgs86OCB2dWlX7UGkU",
  authDomain: "students-quiz-app.firebaseapp.com",
  projectId: "students-quiz-app",
  storageBucket: "students-quiz-app.appspot.com",
  messagingSenderId: "20239389641",
  appId: "1:20239389641:web:ac2200ed8d167d580b0e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();




let yourSignInName = document.getElementById("yourSignInName");
let yourSignInEmail = document.getElementById("yourSignInEmail");
let yourSignInPassword = document.getElementById("yourSignInPassword");
let btnSignInAccount = document.getElementById("btnSignInAccount");

btnSignInAccount.addEventListener("click",function add() {
  console.log(yourSignInName.value)
  console.log(yourSignInEmail.value)
  console.log(yourSignInPassword.value)
  signInWithEmailAndPassword(auth, yourSignInEmail.value, yourSignInPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

  });

})


let yourName = document.getElementById("yourName");
let yourEmail = document.getElementById("yourEmail");
let yourPassword = document.getElementById("yourPassword");
let btnCreateAccount = document.getElementById("btnCreateAccount");

btnCreateAccount.addEventListener("click" , function signupAccount() {

    createUserWithEmailAndPassword(auth, yourEmail.value, yourPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("data=====>",user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error--->",errorMessage);

    // ..
  });
})


btnSignInAccount.addEventListener("click",function signInAccount() {
    console.log(yourSignInEmail.value)
    console.log(yourSignInPassword.value)
    signInWithEmailAndPassword(auth, yourSignInEmail.value, yourSignInPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;  
      console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

  });

})

// window.onclick.signInAccount()



