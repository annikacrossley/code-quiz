var startButton = document.querySelector(".start-btn");
var questionText = document.querySelector(".question-content");

var question = "";
var isCorrect = false;
var timer;
var timerCount;

//Arrays used to create questions and multiple choice answers on screen
var question = [];
var answerChoices = [];

//Array of quiz questions
var questions = ["What are the names of Annika's dogs?", "Who is Annika's favorite singer?", "What is Annika's current profession?"];

//When I click the start button, a timer starts and a question appears
function startQuiz() {
   isCorrect = false;
   timerCount = 30;
   startButton.disabled = true;
   quizQuestion();
   startTimer();
}

function quizQuestion() {
    
}

var timerCount = 30;
var timerElement = document.querySelector(".timer");
var timer = setInterval(startTimer, 1000);

function startTimer() {
    if (timerCount == 0) {
        clearTimeout(timer);
        endQuiz();
    }
    else {
        timerElement.innerHTML = "Time Remaining: " + timerCount;
        timerCount --;
    }
}

function endQuiz() {

}

startButton.addEventListener("click", startQuiz)

//When I answer a question, I am given another question

//When I answer wrong, time subtracts from the clock

//When the quiz is done or the timer runs out, the quiz is over

//When the quiz is over, I can save my initials and score.
