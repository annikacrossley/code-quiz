var startButton = document.querySelector(".start-btn")
var timerElement = document.querySelector(".timer");

var isCorrect = false;
var timer;
var timerCount;

var questions = ["What are the names of Annika's dogs?", "Who is Annika's favorite singer?", "What is Annika's current profession?"]

//When I click the start button, a timer starts and a question appears

function startQuiz() {
    isCorrect = false;
    timerCount = 100;
    startButton.disabled = true;
    startQuestions();
   // startTimer();
}

function startQuestions() {
    return questions[0];
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    })
}

startButton.addEventListener("click", startQuiz)

init();

//When I answer a question, I am given another questions

//When I answer wrong, time subtracts from the clock

//When the quiz is done or the timer runs out, the quiz is over

//When the quiz is over, I can save my initials and score.

function getCorrect() {

}

function getIncorrect() {

}