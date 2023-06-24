var startButton = document.querySelector(".start-btn");
var questionText = document.querySelector(".quiz-content");

var question = "";
var isCorrect = false;
var timer;
var timerCount;

//Array of quiz questions & answers
var quizQuestions = [
    "What are the names of Annika's dogs?",
    "Who is Annika's favorite singer?",
    "What is Annika's current occupation?",
];

var answerChoices = ["a", "b", "c"]

//When I click the start button, a timer starts and a question appears
function startQuiz() {
   isCorrect = false;
   timerCount = 30;
   startButton.disabled = true;
   quizQuestion();
   startTimer();
}

//Arrays used to create questions and multiple choice answers on screen
var outputQuestion = [];
var answerChoices = [];

function quizQuestion() {
    for(var i = 0; i < quizQuestions.length; i++) {
        question = quizQuestions[i];
        questionText.textContent = question;
    }
}

var timerCount = 30;
var timerElement = document.querySelector(".timer");

function startTimer() {
    var timer = setInterval(function() {
        if (timerCount == -1) {
            clearTimeout(timer);
            endQuiz();
        }
        else {
            timerElement.innerHTML = "Time Remaining: " + timerCount;
            timerCount --;
        }
    }, 1000)
}

function endQuiz() {

}

startButton.addEventListener("click", startQuiz)

//When I answer a question, I am given another question

//When I answer wrong, time subtracts from the clock

//When the quiz is done or the timer runs out, the quiz is over

//When the quiz is over, I can save my initials and score.
