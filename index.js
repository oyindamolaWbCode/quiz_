// grt the DOM

const quizContainer = document.querySelector(".quiz-container");
const quizHeader = document.querySelector(".quiz-header");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEls = document.getElementsByClassName("answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn_submit = document.getElementById("submit");

// set Questions

const quizData = [
    {
        Questions: "Which language runs in a web browser?",
        A: "Python",
        B: "Java",
        C: "JavaScript",
        D: "PHP",
    },

    {
        Questions: "HTML means ?",
        A: "HyperText Marking Mathematical Language",
        B: "HyperTest Marknp Language",
        C: "HyperText Markup Language",
        D: "HyperTexture Markup Language",
        correct: "C",

    },

    {
        Questions: "javaScript is ?",
        A: "Procedual Language",
        B: "Object Oriented",
        C: "Informative Language",
        D: "Functional Programming",
        correct: "B",
    },

    {
        Questions: "What does CSS stand for?",
        A: "Cascading Simple Sheets",
        B: "Cascading Style Sheets",
        C: "Central Style Sheets",
        D: "Cars SUVs Sailboats",
        correct: "B",

    },

    {

        Questions: "What year was JavaScript launched?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "none of the above",
        correct: "B",
    },
  
];

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    //function for loading questions
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    //display question
    questionEl.innerText = currentQuizData.question
    //present the options
    a_text.innerText = currentQuizData.A
    b_text.innerText = currentQuizData.B
    c_text.innerText = currentQuizData.C
    d_text.innerText = currentQuizData.D

}

function deselectAnswers(){
    // function for wrong answer
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    //for correct answers
}
