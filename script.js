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
        question: 'who is the president of the usa',
        a: 'obama',
        b: 'donald trump',
        c: 'joe biden',
        d: 'george bush',
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

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


var currentQuiz = 0;



loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
   
   
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}


submitBtn.addEventListener("click", function() {
    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {

        // show results 
        alert('test is over!');
    }

    
});