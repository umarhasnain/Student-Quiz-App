// // import { htmlQuestions ,cssQuizQuestion } from "./quizesQuestion.js";
// // import { auth, onAuthStateChanged } from "./firebase.js";
// // import {
// //   db,
// //   getFirestore,
// //   doc,
// //   setDoc,
// //   collection,
// //   addDoc,
// //   onSnapshot,
// //   query,
// //   where,
// // } from "./firebase.js";

// // //Current SIgnIn User

// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     const uid = user.uid;
// //     console.log("Current User", uid, user);
// //     let userGreeting = document.getElementById("userName");
// //     userGreeting.innerHTML = user.displayName;

// //     // ...
// //   } else {
// //     // User is signed out
// //     // ...
// //     console.log("Current User SignOUt");
// //   }
// // });

// // //Show Results

// //   const showResults = () => {
// //     const q = collection(db,'results');
// //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
// //         const tableBody = document.getElementById('tableBody');
// //         tableBody.innerHTML = ''; // Clear existing rows

// //         let rows = '';
// //         querySnapshot.forEach((doc) => {
// //             const data = doc.data();
// //             console.log(data);
            
// //             rows += `
// //                 <tr>
// //                     <td>${data.name}</td>
// //                     <td>${data.date || 'N/A'}</td>
// //                     <td>${data.score || 'N/A'}</td>
// //                     <td>${data.quizName || 'N/A'}</td>
                   
// //                 </tr> 
// //             `;
// //         });

// //         tableBody.innerHTML = rows;
// //     });
// // };

// // showResults();

// // let question = document.getElementById("question");
// // let option1 = document.getElementById("option1");
// // let option2 = document.getElementById("option2");
// // let option3 = document.getElementById("option3");
// // let option4 = document.getElementById("option4");
// // let numberCount = document.getElementById("numberCount");
// // let time = document.getElementById("timer");


// // let htmlQuizStart = document.getElementById("htmlQuizStart");
// // // let cssQuizStart = document.getElementById("cssQuizStart");

// // let nextBtn = document.getElementById("nextBtn");
// // nextBtn.addEventListener("click", () => {
// //   nextQuestion();
// // });   

// // function changePageLocation() {
// //   setTimeout(function () {
// //     window.location.href = "quizCourse.html";
// //   }, 5000); // Redirect after 4 seconds
// // }

// // let index = 0;
// // let score = 0;
// // // let quizName = document.getElementById('quizName');
// // // console.log(quizName)

// // function nextQuestion() {
// //   var options = document.getElementsByName("opt");
  

// //   for (var i = 0; i < options.length; i++) {
// //     if (options[i].checked) {
// //       var selected = options[i].value;
// //       var userAnswer = htmlQuestions[index - 1][`option${selected}`];
// //       var correctAnswer = htmlQuestions[index - 1].correctOption;
// //       if (userAnswer === correctAnswer) {
// //         score++;
// //       }
// //       console.log();
// //     }

// //     options[i].checked = false;
// //     nextBtn.disabled = true;
// //   }

// //   if (index > htmlQuestions.length - 1) {
    
// //     var scoreBoard = (score / htmlQuestions.length) * 100 + "%";

// //     function result() {
      
// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     const uid = user.uid;
// //     var date = new Date().toDateString()
// //     console.log("Current User", uid, user);
// //     const docRef = addDoc(collection(db, "results"), {
// //       score: scoreBoard,
// //       name:user.displayName,
// //       email:user.email,
// //       uid:user.uid,
// //       date : date,
// //      quizName:"HTML5"

// //     });
// //     console.log("result Submitted", docRef.id);
    
// //   } else {
// //     // User is signed out
// //     console.log("Current User SignOUt");
// //   }
// // });
    
// //     }
// //     result();

// //     if (scoreBoard >= "70") {
// //       Swal.fire(
// //         "Congratulation! 🎉",
// //         "You are Passed!" + "<br>" + "Your Score is " + scoreBoard,
// //         "success"
// //       );

// //       changePageLocation();
// //     } else {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Oops...",
// //         text: "You are Failed!" + "  " + "Your Score is " + scoreBoard,
// //         footer: '<a href="quizDetails.html">RETAKE QUIZ</a>',
// //       });
// //       changePageLocation();
// //     }
// //   } else {
// //     numberCount.innerHTML = index;
// //     question.innerHTML = htmlQuestions[index].question;
// //     option1.innerText = htmlQuestions[index].option1;
// //     option2.innerText = htmlQuestions[index].option2;
// //     option3.innerText = htmlQuestions[index].option3;
// //     option4.innerText = htmlQuestions[index].option4;

// //     index++;
// //   }
// // }
// // nextQuestion();


// // function enableBtn() {
// //   nextBtn.disabled = false;
// // }

// // window.enableBtn = enableBtn;


// // // TIMER

// // // var min = 1;
// // var sec = 59;

// // var timer = document.getElementById("timer");

// // var interval = setInterval(function () {
// //   timer.innerHTML = `Time: ${sec}`;
// //   sec--;

// //   if (sec == 0) {
// //     nextQuestion();
// //     // min = 1;
// //     sec = 59;
// //   } else if (nextBtn == true) {
// //     sec = 59;
// //   }
// // }, 1000);


// // console.log(htmlQuestions);






// import { htmlQuestions, cssQuizQuestion } from "./quizesQuestion.js";
// import { auth, onAuthStateChanged, sendEmailVerification } from "./firebase.js";
// import {
//   db,
//   collection,
//   addDoc,
//   onSnapshot,
// } from "./firebase.js";

// // Current Signed-In User
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     if (!user.emailVerified) {
//       sendEmailVerification(user).then(() => {
//         alert("Verification email sent! Please verify your email.");
//       });
//     }
//     console.log("Current User", user.uid, user);
//     document.getElementById("userName").innerHTML = user.displayName;
//   } else {
//     console.log("Current User SignOut");
//   }
// });

// // Show Results
// const showResults = () => {
//   const q = collection(db, "results");
//   onSnapshot(q, (querySnapshot) => {
//     const tableBody = document.getElementById("tableBody");
//     tableBody.innerHTML = "";
//     let rows = "";
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       rows += `
//         <tr>
//           <td>${data.name || "N/A"}</td>
//           <td>${data.date || "N/A"}</td>
//           <td>${data.score || "N/A"}</td>
//           <td>${data.quizName || "N/A"}</td>
//         </tr>`;
//     });
//     tableBody.innerHTML = rows;
//   });
// };
// showResults();

// // Quiz Logic
// let question = document.getElementById("question");
// let option1 = document.getElementById("option1");
// let option2 = document.getElementById("option2");
// let option3 = document.getElementById("option3");
// let option4 = document.getElementById("option4");
// let numberCount = document.getElementById("numberCount");
// let nextBtn = document.getElementById("nextBtn");
// nextBtn.addEventListener("click", nextQuestion);

// let index = 0;
// let score = 0;

// function nextQuestion() {
//   let options = document.getElementsByName("opt");
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].checked) {
//       let selected = options[i].value;
//       let userAnswer = htmlQuestions[index - 1][`option${selected}`];
//       let correctAnswer = htmlQuestions[index - 1].correctOption;
//       if (userAnswer === correctAnswer) {
//         score++;
//       }
//     }
//     options[i].checked = false;
//     nextBtn.disabled = true;
//   }
//   if (index >= htmlQuestions.length) {
//     submitResult();
//   } else {
//     numberCount.innerHTML = index + 1;
//     question.innerHTML = htmlQuestions[index].question;
//     option1.innerText = htmlQuestions[index].option1;
//     option2.innerText = htmlQuestions[index].option2;
//     option3.innerText = htmlQuestions[index].option3;
//     option4.innerText = htmlQuestions[index].option4;
//     index++;
//   }
// }

// function submitResult() {
//   let scoreBoard = ((score / htmlQuestions.length) * 100).toFixed(2) + "%";
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       addDoc(collection(db, "results"), {
//         score: scoreBoard,
//         name: user.displayName,
//         email: user.email,
//         uid: user.uid,
//         date: new Date().toDateString(),
//         quizName: "HTML5",
//       }).then(() => {
//         alert("Result Submitted");
//       });
//     }
//   });
//   displayScore(scoreBoard);
// }

// function displayScore(scoreBoard) {
//   if (parseFloat(scoreBoard) >= 70) {
//     Swal.fire("Congratulation! 🎉", `You Passed! Your Score: ${scoreBoard}`, "success");
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `You Failed! Your Score: ${scoreBoard}`,
//       footer: '<a href="quizDetails.html">RETAKE QUIZ</a>',
//     });
//   }
//   setTimeout(() => {
//     window.location.href = "quizCourse.html";
//   }, 5000);
// }

// function enableBtn() {
//   nextBtn.disabled = false;
// }
// window.enableBtn = enableBtn;

// // Timer
// let sec = 59;
// let timer = document.getElementById("timer");
// let interval = setInterval(() => {
//   timer.innerHTML = `Time: ${sec}`;
//   sec--;
//   if (sec === 0) {
//     nextQuestion();
//     sec = 59;
//   }
// }, 1000);


import { htmlQuestions, cssQuizQuestion } from "./quizesQuestion.js";
import { auth, onAuthStateChanged, sendEmailVerification } from "./firebase.js";
import {
  db,
  collection,
  addDoc,
  onSnapshot
} from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  // Get elements safely
  const userGreeting = document.getElementById("userName");
  const nextBtn = document.getElementById("nextBtn");
  const tableBody = document.getElementById("tableBody");
  const timerElement = document.getElementById("timer");

  // Current Signed-In User
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("Current User", user.uid, user);
      if (userGreeting) userGreeting.innerHTML = user.displayName;
      
      // Verify email if not verified
      if (!user.emailVerified) {
        try {
          await sendEmailVerification(user);
          console.log("Verification email sent!");
        } catch (error) {
          console.error("Error sending verification email:", error.message);
        }
      }
    } else {
      console.log("User signed out");
    }
  });

  // Show Results Function
  const showResults = () => {
    const q = collection(db, "results");
    console.log("resule===>",q);
    
    onSnapshot(q, (querySnapshot) => {
      if (tableBody) tableBody.innerHTML = ""; // Clear existing rows

      let rows = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        rows += `
          <tr>
            <td>${data.name}</td>
            <td>${data.date || 'N/A'}</td>
            <td>${data.score || 'N/A'}</td>
            <td>${data.quizName || 'N/A'}</td>
          </tr> 
        `;
      });

      if (tableBody) tableBody.innerHTML = rows;
    });
  };

  showResults();

  if (nextBtn) {
    nextBtn.addEventListener("click", nextQuestion);
  } else {
    console.error("Error: 'nextBtn' not found.");
  }

  let index = 0;
  let score = 0;

  function nextQuestion() {
    const options = document.getElementsByName("opt");
    
    options.forEach(option => {
      if (option.checked) {
        const userAnswer = htmlQuestions[index - 1][`option${option.value}`];
        const correctAnswer = htmlQuestions[index - 1].correctOption;
        if (userAnswer === correctAnswer) {
          score++;
        }
      }
      option.checked = false;
    });
    
    nextBtn.disabled = true;

    if (index >= htmlQuestions.length) {
      submitResult();
      return;
    }

    updateQuestionUI();
    index++;
  }

  function submitResult() {
    const scoreBoard = (score / htmlQuestions.length) * 100 + "%";
    const date = new Date().toDateString();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        addDoc(collection(db, "results"), {
          score: scoreBoard,
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          date: date,
          quizName: "HTML5"
        })
          .then(() => console.log("Result submitted successfully"))
          .catch((error) => console.error("Error submitting result:", error));
      }
    });

    displayResult(scoreBoard);
  }

  function displayResult(scoreBoard) {
    if (parseFloat(scoreBoard) >= 70) {
      Swal.fire("Congratulations! 🎉", `You Passed! Your Score is ${scoreBoard}`, "success");
      setTimeout(() => window.location.href = "quizCourse.html", 4000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You Failed! Your Score is ${scoreBoard}`,
        footer: '<a href="quizDetails.html">RETAKE QUIZ</a>'
      });
      setTimeout(() => window.location.href = "quizCourse.html", 4000);
    }
  }

  function updateQuestionUI() {
    const numberCount = document.getElementById("numberCount");
    const question = document.getElementById("question");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");

    if (question && option1 && option2 && option3 && option4) {
      numberCount.innerHTML = index;
      question.innerHTML = htmlQuestions[index].question;
      option1.innerText = htmlQuestions[index].option1;
      option2.innerText = htmlQuestions[index].option2;
      option3.innerText = htmlQuestions[index].option3;
      option4.innerText = htmlQuestions[index].option4;
    }
  }

  function enableBtn() {
    nextBtn.disabled = false;
  }
  window.enableBtn = enableBtn;

  // TIMER
  let sec = 59;
  setInterval(() => {
    if (timerElement) timerElement.innerHTML = `Time: ${sec}`;
    sec--;
    if (sec === 0) {
      nextQuestion();
      sec = 59;
    }
  }, 1000);

  nextQuestion();
});
