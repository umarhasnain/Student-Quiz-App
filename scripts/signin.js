import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCvllRyzvXhXNNmSgs86OCB2dWlX7UGkU",
  authDomain: "students-quiz-app.firebaseapp.com",
  projectId: "students-quiz-app",
  storageBucket: "students-quiz-app.appspot.com",
  messagingSenderId: "20239389641",
  appId: "1:20239389641:web:ac2200ed8d167d580b0e18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

let yourSignInName = document.getElementById("yourSignInName");
let yourSignInEmail = document.getElementById("yourSignInEmail");
let yourSignInPassword = document.getElementById("yourSignInPassword");
let btnSignInAccount = document.getElementById("btnSignInAccount");

// btnSignInAccount.addEventListener("click", function add() {
//   console.log(yourSignInName.value);
//   console.log(yourSignInEmail.value);
//   console.log(yourSignInPassword.value);
//   signInWithEmailAndPassword(
//     auth,
//     yourSignInEmail.value,
//     yourSignInPassword.value
//   )
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// });


let signInWithGoogle = document.getElementById("signInWithGoogle");

signInWithGoogle.addEventListener("click", ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage)

    // ...
  });  
})
