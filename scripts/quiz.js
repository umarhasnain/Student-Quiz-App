// import htmlQuestions from "../scripts/mcqs.js"

const htmlQuestions = [
    {
        question: "What is HTML used for?",
        options: ["Structuring web pages", "Styling web pages", "Programming web pages", "Managing databases"],
        answer: "Structuring web pages"
    },
    {
        question: "Who is credited with inventing HTML?",
        options: ["Bill Gates", "Tim Berners-Lee", "Larry Page", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What does the 'DOCTYPE' declaration do?",
        options: ["Defines the document type", "Links external CSS", "Includes JavaScript files", "Creates a section"],
        answer: "Defines the document type"
    },
    {
        question: "What does the 'lang' attribute specify?",
        options: ["Programming language", "Natural language", "Font style", "Screen reader mode"],
        answer: "Natural language"
    },
    {
        question: "Which attribute is used to provide an advisory text about an element?",
        options: ["title", "alt", "src", "href"],
        answer: "title"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "css"],
        answer: "style"
    },
    {
        question: "What is the purpose of the 'meta' tag?",
        options: ["Provide metadata", "Create links", "Embed images", "Structure the document"],
        answer: "Provide metadata"
    },
    {
        question: "What is the function of the 'charset' attribute in a 'meta' tag?",
        options: ["Specify character encoding", "Define CSS styles", "Link JavaScript files", "Set viewport settings"],
        answer: "Specify character encoding"
    },
    {
        question: "What is the primary purpose of the 'alt' attribute in image tags?",
        options: ["Display alternate text", "Define image size", "Create hyperlinks", "Add CSS classes"],
        answer: "Display alternate text"
    },
    {
        question: "What does the 'href' attribute specify?",
        options: ["URL of the linked resource", "Image source", "CSS class", "JavaScript function"],
        answer: "URL of the linked resource"
    },
    {
        question: "What is the 'viewport' meta tag used for?",
        options: ["Control layout on mobile browsers", "Specify character encoding", "Link external scripts", "Embed videos"],
        answer: "Control layout on mobile browsers"
    },
    {
        question: "What is the 'rel' attribute used for in link tags?",
        options: ["Specify the relationship between documents", "Define image source", "Embed scripts", "Add styles"],
        answer: "Specify the relationship between documents"
    },
    {
        question: "What is the purpose of 'data-*' attributes?",
        options: ["Store custom data", "Define classes", "Link stylesheets", "Add comments"],
        answer: "Store custom data"
    },
    {
        question: "What does the 'name' attribute do in form elements?",
        options: ["Identify form data", "Create links", "Embed images", "Define styles"],
        answer: "Identify form data"
    },
    {
        question: "What is the 'action' attribute in a form used for?",
        options: ["Specify the URL to send form data to", "Define form layout", "Style form elements", "Embed images"],
        answer: "Specify the URL to send form data to"
    },
    {
        question: "What does the 'method' attribute in a form specify?",
        options: ["HTTP method to use", "CSS styles", "JavaScript function", "Form validation rules"],
        answer: "HTTP method to use"
    },
    {
        question: "What is the 'placeholder' attribute used for?",
        options: ["Provide hint text", "Style elements", "Embed images", "Link external files"],
        answer: "Provide hint text"
    },
    {
        question: "What does the 'required' attribute do in a form input?",
        options: ["Make the field mandatory", "Style the input", "Link external files", "Provide alternate text"],
        answer: "Make the field mandatory"
    },
    {
        question: "What is the 'disabled' attribute used for?",
        options: ["Disable an element", "Define styles", "Embed images", "Create links"],
        answer: "Disable an element"
    },
    {
        question: "What is the purpose of the 'readonly' attribute in form inputs?",
        options: ["Make the field non-editable", "Link external stylesheets", "Embed videos", "Style the input"],
        answer: "Make the field non-editable"
    },
    {
        question: "What does the 'target' attribute specify in a link?",
        options: ["Where to open the linked document", "Image source", "CSS class", "JavaScript function"],
        answer: "Where to open the linked document"
    },
    {
        question: "What is the purpose of the 'autofocus' attribute in form inputs?",
        options: ["Automatically focus the input field", "Style the input", "Embed images", "Create links"],
        answer: "Automatically focus the input field"
    },
    {
        question: "What does the 'download' attribute do in a link?",
        options: ["Indicate the file to be downloaded", "Link to external stylesheets", "Embed scripts", "Add metadata"],
        answer: "Indicate the file to be downloaded"
    },
    {
        question: "What is the purpose of the 'enctype' attribute in a form?",
        options: ["Specify how form data should be encoded", "Style form elements", "Embed images", "Link external files"],
        answer: "Specify how form data should be encoded"
    },
    {
        question: "What does the 'novalidate' attribute do in a form?",
        options: ["Disable form validation", "Link external stylesheets", "Embed videos", "Add comments"],
        answer: "Disable form validation"
    }
];








let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let numberCount = document.getElementById("numberCount");
let time = document.getElementById("timer");


let nextBtn = document.getElementById("nextBtn")




let index = 0;
let score = 0;

function nextQuestion() {
    let options = document.getElementsByName("opt");

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let selected = options[i].value;
            let userAnswer = htmlQuestions[i][`option${selected}`]
            let correctAnswer = htmlQuestions[i].answer;
            if (userAnswer === correctAnswer) {
                score++
                console.log(score)
            }

            console.log(selected)
            console.log(correctAnswer)
        }
        
        options[i].checked = false;
        nextBtn.disabled=true
        numberCount.innerHTML = index

  

    }

    if (index > htmlQuestions.length -1) {
        let result = ((score / htmlQuestions.length) * 100 + "%")
        if (result => 70) {
            // Swal.fire({
            //     title: "Good job!",
            //     text: `You Are Passed! & Your Score Is ${result}`,
            //     icon: "success"
            //   });
            alert("You Are Passed Your Score is"+ result)
            
        } else {
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "You Are Failed Your Score Is"+ result,
                
            //   });
            alert("You Are Failed Your Score is"+ result)
        }
    } else {
        question.innerHTML = htmlQuestions[index].question;
        option1.innerHTML = htmlQuestions[index].options[0]
        option2.innerHTML = htmlQuestions[index].options[1]
        option3.innerHTML = htmlQuestions[index].options[2]
        option4.innerHTML = htmlQuestions[index].options[3]
        index++;
    }



}
nextQuestion()

function enableBtn(){
    nextBtn.disabled = false;
}

var min = 2;
var sec = 59;

var timer = document.getElementById("timer");


var interval = setInterval(function () {
    timer.innerHTML = `${min}:${sec}`
    sec --;
    if(sec < 0){
        if(min < 1){
            nextQuestion();
            min = 1;
            sec = 59;
            
        }else{
            min--
            sec = 59;
        }
    }

}, 1000)

console.log(htmlQuestions)