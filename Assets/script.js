//When I click the start button, a timer starts and a question appears
var startButton = document.querySelector(".start-btn");
var choices = document.querySelector(".choices"); 
    
choices.style.visibility = 'hidden';

function startQuiz() {
    timerCount = 30;
    startButton.style.visibility = 'hidden';
    choices.style.visibility = 'visible';
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

//Array used to create questions and multiple choice answers on screen
var quiz = [
    {
        question: "What are the names of Annika's dogs?",
        choices: ["Teague & Bailey", "Bailey and Suki", "Suki and Teague"],
        answer: "Suki and Teague"
    },
    {
        question: "Who is Annika's favorite singer?",
        choices: ["Harry Styles", "Taylor Swift", "Ariana Grande"],
        answer: "Taylor Swift"
    },
    {
        question: "What is Annika's current occupation?",
        choices: ["Dietitian", "Engineer", "Teacher"],
        answer: "Dietitian"
    }
]

//Display first question
    //Replace start quiz instruction w/ question - done 
    //Reveal answer choice buttons - done
    //Add answer choice text in A/B/C buttons 
//When I answer a question, I am given another question    
    //Add eventListener to each answer choice button
    //Move to next question when an answer button has been clicked
    //Store score of each answer selection as correct or incorrect

var questionText = document.querySelector(".quiz-content");
var optiona = document.querySelector(".a")
var optionb = document.querySelector(".b")
var optionc = document.querySelector(".c")
var question = "";

function askQuestion() {
    question = questionText.textContent;
    questionText.textContent = quiz[0].question;
    optiona.textContent=quiz[0].choices[0];
    optionb.textContent=quiz[0].choices[1];
    optionc.textContent=quiz[0].choices[2];
    console.log(quiz[0].question)
    console.log(quiz[0].choices)
    console.log(quiz[0].answer)
}

//When I answer wrong, time subtracts from the clock
    //Create an if/else ()
    //If selected answer === correct answer, no change to time
    //If selected answer != correct answer, take 5 seconds off the clock

//When the quiz is done or the timer runs out, the quiz is over
function endQuiz() {

}

//When the quiz is over, I can save my initials and score.

startButton.addEventListener("click", startQuiz);