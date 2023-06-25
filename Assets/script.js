//When I click the start button, a timer starts and a question appears
var startButton = document.querySelector(".start-btn");
var choices = document.querySelector(".choices"); 
var timerCount;

//Before startQuiz(), choices buttons are hidden. After startQuiz(), startButton is hidden and choices buttons appear. 
choices.style.visibility = 'hidden';

function startQuiz() {
    timerCount = 30;
    startButton.style.visibility = 'hidden';
    choices.style.visibility = 'visible';
    askQuestion()
    startTimer();
 }

var timerElement = document.querySelector(".timer");
var timer;

//startTimer() begins when startQuiz() runs. endQuiz() runs when timer runs out.
function startTimer() {
     timer = setInterval(function() {
        if (timerCount == -1) {
            endQuiz();
        }
        else {
            timerElement.innerHTML = "Time Remaining: " + timerCount;
            timerCount --;
        }
    }, 1000)
 }

//Array used to create questions, answer choices, and correct answers.
var quiz = [
    {
        question: "What are the names of Annika's dogs?",
        choices: ["Teague and Bailey", "Bailey and Suki", "Suki and Teague"],
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

//Variables for questions and answer choices.
var questionText = document.querySelector(".quiz-content");
var optiona = document.querySelector(".a")
var optionb = document.querySelector(".b")
var optionc = document.querySelector(".c")
var currentQuestion = 0
var question = "";

//Variables for determining score and recording score.
var rightWrong = document.querySelector(".right-wrong")
var saveScore = document.getElementById("scores")
var saveButton = document.getElementById("saveUsername")
var score = 0

//Save button is hidden until endQuiz() runs. 
saveScore.style.visibility = 'hidden'

//When I answer a question, I am given another question.
function askQuestion() {
    question = questionText.textContent;
    questionText.textContent = quiz[currentQuestion].question;
    optiona.textContent=quiz[currentQuestion].choices[0];
    optionb.textContent=quiz[currentQuestion].choices[1];
    optionc.textContent=quiz[currentQuestion].choices[2];
    console.log(quiz[currentQuestion].question)
    console.log(quiz[currentQuestion].choices)
    console.log(quiz[currentQuestion].answer)
}

//When a "click" event occurs on the answer choice buttons, checkAnswer(event) runs. 
    //The selected choice is compared to the correct answer to determine if the score is increased and to relay a message telling the user if they chose an incorrect or correct answer.
//When I answer wrong, time subtracts from the clock.    
    //The timer subtracts 5 seconds if user selects an incorrect answer.
    //If there are no remaining questions, endQuiz() runs. 
function checkAnswer(event) {
    var userSelection = event.target.textContent;
    console.log(userSelection)
    if(userSelection === quiz[currentQuestion].answer){
        score +=1
        rightWrong.textContent = "You got it right!"
    }else{
        timerCount -=5
        rightWrong.textContent = "Not quite."
    }
    if(currentQuestion < quiz.length-1 ){
        currentQuestion++
        askQuestion()
    }else{
        endQuiz()
    }
}

//When the quiz is done (determined in "checkAnswer(event)") or the timer runs out (determined in "startTimer()"), the endQuiz() will run.
    //Timer will stop.
    //Score is recorded.
    //Answer choices are hidden. The question is replaced with the final score. The saveScore text is visible. 
function endQuiz() {
    clearInterval(timer);
    console.log(score)
    choices.style.visibility = 'hidden';
    questionText.textContent = "Final Score: " + (score) + " out of 3"
    saveScore.style.visibility = 'visible'
}

//When the quiz is over, I can save my initials and score.
    //saveScore text becomes visible and directs the user to the View High Scores button, which links to a new page containing a table of stored scores w/ username (initals).
saveButton.addEventListener("click", function(){
    var userName = document.getElementById("username").value
    var storedScores = JSON.parse(localStorage.getItem("scoreboard")) || []
    storedScores.push({
        user:userName, score: (score)
    })
    localStorage.setItem("scoreboard", JSON.stringify(storedScores))
    saveScore.innerText = "Scores saved to scoreboard. Click on View High Scores."
} )

//When button "Start Quiz" is clicked, startQuiz() runs.
startButton.addEventListener("click", startQuiz);

//When an answer choice button is clicked, checkAnswer() runs.
optiona.addEventListener("click", checkAnswer)
optionb.addEventListener("click", checkAnswer)
optionc.addEventListener("click", checkAnswer)