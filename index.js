const closeQuiz = document.querySelector(".quiz-container").style.display = 'none';
// grt the DOM
const firstPageContainer = document.querySelector(".firstPage-container");
const toQuiz = document.getElementById("to-quiz");
const quizContainer = document.querySelector(".quiz-container");
const quizHeader = document.querySelector(".quiz-header");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnSubmit = document.getElementById("submit")

// add an event-listener to return quiz

toQuiz.addEventListener('click',() =>{
    firstPageContainer.style.display = 'none';
    quizContainer.style.display = 'block';
});

// set Questions in objects
const quizData = [
    {
        Question: "Which language runs in a web browser?",
        A: "Python",
        B: "Java",
        C: "JavaScript",
        D: "PHP",
        Correct: "C"
    },

    {
        Question: "HTML means ?",
        A: "HyperText Marking Mathematical Language",
        B: "HyperTest Marknp Language",
        C: "HyperText Markup Language",
        D: "HyperTexture Markup Language",
        Correct: "C",

    },

    {
        Question: "javaScript is ?",
        A: "Procedual Language",
        B: "Object Oriented",
        C: "Informative Language",
        D: "Functional Programming",
        Correct: "B",
    },

    {
        Question: "What does CSS stand for?",
        A: "Cascading Simple Sheets",
        B: "Cascading Style Sheets",
        C: "Central Style Sheets",
        D: "Cars SUVs Sailboats",
        Correct: "B",

    },

    {

        Question: "What year was JavaScript launched?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "none of the above",
        Correct: "B",
    },

    
    {

        Question: " - is distributed version control system in the world",
        A: "Vscode",
        B: "GitHub",
        C: "Git",
        D: "Git Bash",
        Correct: "C",
    },

    
    {

        Question: "Git was created by who and in what year?",
        A: "Ada, 2004",
        B: "Linus Tovard 2005",
        C: "Brendan Eich 2005",
        D: "Linus Torvalds, 2005",
        Correct: "D",
    },

    
    {

        Question: " Pointing to a woman, a man said, 'Her father is the only son of my father.' How is the man related to the woman?",
        A: "Father",
        B: "Son",
        C: "Grandfather",
        D: "Brother",
        Correct: "A",
    },

    
    {

        Question: " Pointing to an image Madhu tells Sohan, 'I am the only daughter of this lady, and her son is your maternal uncle.' How is the Madhu related to Sohan's father?",
        A: "None of the above",
        B: "Sister-In-law",
        C: "Sister",
        D: "Wife",
        Correct: "D",
    },

      
    {

        Question: "Sunil is the brother of Anil. Anil is the son of Sohan. Meena is Sohan's mother. How is Sunil related to Meena?",
        A: "Grandson",
        B: "Brother",
        C: "Son",
        D: "Grandfather",
        Correct: "A",
    },
  
];

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    //function for loading questions
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    //display question
    questionEl.innerText = currentQuizData.Question
    //present the options
    a_text.innerText = currentQuizData.A
    b_text.innerText = currentQuizData.B
    c_text.innerText = currentQuizData.C
    d_text.innerText = currentQuizData.D

}

function deselectAnswers(){
    // function for wrong answer
    answerEls.forEach(answerEl => answerEl.checked = false)
};

function getSelected(){
    //for correct answers
     let answer 
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer
};

//button action when clicked

btnSubmit.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        
        if(answer == quizData[currentQuiz].Correct){
             
           score++
        }
        //load new quiz after one as been answered
        currentQuiz++

        if(currentQuiz < quizData.length){

            loadQuiz()
        }else{
            //show scores when all quiz has been attempted

            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()">Reload</button>

            `
            
        };
    };
    console.log("submit button clicked!");
});
