// object var to hold question data.

const quizData = [{
    
        question: 'what does html stand for?',
        a: 'Hyper toggle makeup language',
        b: 'hypertext markup language',
        c: 'hotdogs to make laugh',
        d: 'Cascading style sheet',
        correct: 'b'
    }, 
    {
        question: 'what is the most used programming language',
        a: 'python',
        b: 'java',
        c: 'c+',
        d: 'javascript',
        correct: 'd'
    }, 
    {
        question: 'Inside which HTML element do we put the javascript?',
        a: '<javascript>',
        b: '<js>',
        c: '<script>',
        d: '<script)',
        correct: 'c'

    },
    {
        question: 'what year was javascript launched',
        a: '1996',
        b: '1995',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }
];

// vars to get elements needed from html.

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreHigh = document.getElementById("highscor");

// var for score and current page.

let currentQuiz = 0;
let score = 0;
let highscore = "";




function highscoreFunction() {
    var highscore = localStorage.getItem("highscore");

    if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}

scoreHigh.innerHTML = `<h1> HIGHSCORE: </h1> ${highscore}`;


}


function quizTimer() {
    var count = 75;
    var interval = setInterval(function(){
    document.getElementById('time').innerHTML=count;
    count--;
    if (count === 0){
    clearInterval(interval);
    document.getElementById('time').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);
}



// function to start

loadQuiz();








function loadQuiz() {
    deselectAnswers();
    quizTimer();
    highscoreFunction();
    


    const currentQuizData = quizData[currentQuiz];
   
   
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        
    });
    
   return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", function() {

    

    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2> you answered correctly at ${score}/${quizData.length} questions. </h2>
            
            <button onclick="location.reload()">Reload<button>`;

        }
    }
    
});