var isCorrect = false;

//When I click the start button, a timer starts and a question appears
var startButton = document.querySelector(".start-btn");
function startQuiz() {
    isCorrect = false;
    timerCount = 30;
    startButton.disabled = true;
    askQuestion()
    startTimer();
 }

var timerCount = 30;
var timerElement = document.querySelector(".timer");
var timer;
var timerCount;
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

 //Arrays used to create questions and multiple choice answers on screen
var quizQuestions = [
    "What are the names of Annika's dogs?",
    "Who is Annika's favorite singer?",
    "What is Annika's current occupation?",
];

var quizAnswerA = ["Teague & Biscuit", "Harry Styles", "Dietitian"]
var quizAnswerB = ["Biscuit & Suki", "Taylor Swift", "Engineer"]
var quizAnswerC = ["Suki & Teague", "Ariana Grande", "Teacher"]

var questionText = document.querySelector(".quiz-content");
var question = "";

function askQuestion() {
    for(var i = 0; i < quizQuestions.length; i++) {
        question = quizQuestions[i];
        questionText.textContent = question;
        return;
    }
}

function endQuiz() {

}

startButton.addEventListener("click", startQuiz);

//When I answer a question, I am given another question


//When I answer wrong, time subtracts from the clock

//When the quiz is done or the timer runs out, the quiz is over

//When the quiz is over, I can save my initials and score.
