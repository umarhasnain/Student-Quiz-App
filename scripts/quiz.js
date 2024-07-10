// import htmlQuestions from "../scripts/mcqs.js"

const htmlQuestions = [
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        option4: '<head>',
        correctOption: '<h1>'
    },
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Home Tool Markup Language',
        option3: 'Hyper Text Markup Language',
        option4: 'Hyperlinking Text Markup Language',
        correctOption: 'Hyper Text Markup Language'
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<lb>',
        option2: '<break>',
        option3: '<br>',
        option4: '<ln>',
        correctOption: '<br>'
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        option1: 'font',
        option2: 'styles',
        option3: 'style',
        option4: 'class',
        correctOption: 'style'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        option1: '<css>',
        option2: '<script>',
        option3: '<style>',
        option4: '<head>',
        correctOption: '<style>'
    },
    // {
    //     question: 'Which is the correct HTML element to define emphasized text?',
    //     option1: '<i>',
    //     option2: '<em>',
    //     option3: '<italic>',
    //     option4: '<strong>',
    //     correctOption: '<em>'
    // },
    // {
    //     question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    //     option1: 'src',
    //     option2: 'title',
    //     option3: 'alt',
    //     option4: 'href',
    //     correctOption: 'alt'
    // },
    // {
    //     question: 'How can you create an ordered list?',
    //     option1: '<ul>',
    //     option2: '<ol>',
    //     option3: '<list>',
    //     option4: '<dl>',
    //     correctOption: '<ol>'
    // },
    // {
    //     question: 'Which HTML element defines navigation links?',
    //     option1: '<nav>',
    //     option2: '<navigate>',
    //     option3: '<navigate>',
    //     option4: '<navlink>',
    //     correctOption: '<nav>'
    // },
    // {
    //     question: 'What is the correct HTML element for playing video files?',
    //     option1: '<media>',
    //     option2: '<video>',
    //     option3: '<movie>',
    //     option4: '<film>',
    //     correctOption: '<video>'
    // },
    // {
    //     question: 'How can you make a numbered list?',
    //     option1: '<list>',
    //     option2: '<dl>',
    //     option3: '<ul>',
    //     option4: '<ol>',
    //     correctOption: '<ol>'
    // },
    // {
    //     question: 'Which HTML element is used to specify a footer for a document or section?',
    //     option1: '<bottom>',
    //     option2: '<footer>',
    //     option3: '<foot>',
    //     option4: '<section>',
    //     correctOption: '<footer>'
    // },
    // {
    //     question: 'What is the correct HTML element for inserting an image?',
    //     option1: '<img>',
    //     option2: '<image>',
    //     option3: '<pic>',
    //     option4: '<photo>',
    //     correctOption: '<img>'
    // },
    // {
    //     question: 'Which doctype is correct for HTML5?',
    //     option1: '<!DOCTYPE html>',
    //     option2: '<!DOCTYPE HTML5>',
    //     option3: '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
    //     option4: '<!DOCTYPE html5>',
    //     correctOption: '<!DOCTYPE html>'
    // },
    // {
    //     question: 'What is the correct HTML for creating a hyperlink?',
    //     option1: '<a href="http://www.example.com">Example</a>',
    //     option2: '<link url="http://www.example.com">Example</link>',
    //     option3: '<a>http://www.example.com</a>',
    //     option4: '<a name="http://www.example.com">Example</a>',
    //     correctOption: '<a href="http://www.example.com">Example</a>'
    // },
    // {
    //     question: 'Which character is used to indicate an end tag?',
    //     option1: '*',
    //     option2: '/',
    //     option3: '<',
    //     option4: '^',
    //     correctOption: '/'
    // },
    // {
    //     question: 'How can you open a link in a new tab/browser window?',
    //     option1: '<a href="url" new>',
    //     option2: '<a href="url" target="_blank">',
    //     option3: '<a href="url" target="new">',
    //     option4: '<a href="url" target="new_tab">',
    //     correctOption: '<a href="url" target="_blank">'
    // },
    // {
    //     question: 'Which HTML element is used to define important text?',
    //     option1: '<b>',
    //     option2: '<strong>',
    //     option3: '<i>',
    //     option4: '<important>',
    //     correctOption: '<strong>'
    // },
    // {
    //     question: 'Which HTML element is used to define a block of text that has been quoted from another source?',
    //     option1: '<blockquote>',
    //     option2: '<q>',
    //     option3: '<quote>',
    //     option4: '<cite>',
    //     correctOption: '<blockquote>'
    // },
    // {
    //     question: 'Which HTML element is used to define a table?',
    //     option1: '<tbl>',
    //     option2: '<table>',
    //     option3: '<t>',
    //     option4: '<tab>',
    //     correctOption: '<table>'
    // },
    // {
    //     question: 'Which HTML element is used to define a list item?',
    //     option1: '<li>',
    //     option2: '<list>',
    //     option3: '<item>',
    //     option4: '<ul>',
    //     correctOption: '<li>'
    // },
    // {
    //     question: 'Which HTML element is used to define a division or a section?',
    //     option1: '<div>',
    //     option2: '<sec>',
    //     option3: '<section>',
    //     option4: '<divs>',
    //     correctOption: '<div>'
    // },
    // {
    //     question: 'What is the correct HTML for making a text input field?',
    //     option1: '<input type="textfield">',
    //     option2: '<textinput>',
    //     option3: '<textfield>',
    //     option4: '<input type="text">',
    //     correctOption: '<input type="text">'
    // },
    // {
    //     question: 'Which HTML attribute is used to specify that an input field must be filled out?',
    //     option1: 'placeholder',
    //     option2: 'formvalidate',
    //     option3: 'required',
    //     option4: 'validate',
    //     correctOption: 'required'
    // },
    // {
    //     question: 'Which HTML element is used to define the document title that is shown in the browser’s title bar or on the page’s tab?',
    //     option1: '<meta>',
    //     option2: '<title>',
    //     option3: '<head>',
    //     option4: '<link>',
    //     correctOption: '<title>'
    // }
];


let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let numberCount = document.getElementById("numberCount");
let time = document.getElementById("timer");


let nextBtn = document.getElementById("nextBtn")


function changePageLocation() {
    setTimeout(function() {
        window.location.href = 'quizCourse.html';
    }, 4000); // Redirect after 4 seconds
}


let index = 0;
let score = 0;

function nextQuestion() {
    var options = document.getElementsByName("opt");
    
    for(var i = 0; i < options.length; i++){
    
        if(options[i].checked){
            var selected = options[i].value;
            var userAnswer = htmlQuestions[index -1][`option${selected}`]
           var correctAnswer = htmlQuestions[index -1].correctOption;
           if ( userAnswer === correctAnswer){
            score ++;
           }
            console.log()
        }

        options[i].checked = false;
        nextBtn.disabled = true;
    }

    if (index > htmlQuestions.length -1) {

        var scoreBoard = ((score / htmlQuestions.length) * 100 + "%" );
        if(scoreBoard >= "70"){

            Swal.fire(
                'Congratulation! 🎉',
                'You are Passed!' +"<br>"+ "Your Score is "+ scoreBoard ,
                'success'
                
              )

              changePageLocation()

    
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are Failed!' +"  "+ "Your Score is "+  scoreBoard , 
                footer: '<a href="quizDetails.html">RETAKE QUIZ</a>'
              })
        };
        

    } else {
   
        numberCount.innerHTML = index;
        question.innerHTML = htmlQuestions[index].question;
        option1.innerText = htmlQuestions[index].option1;
        option2.innerText = htmlQuestions[index].option2;
        option3.innerText = htmlQuestions[index].option3;
        option4.innerText = htmlQuestions[index].option4;

        index++;
    }

};


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