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
    //Add answer choice text in A/B/C buttons - done
//When I answer a question, I am given another question    
    //Add eventListener to each answer choice button
    //Move to next question when an answer button has been clicked
    //Store score of each answer selection as correct or incorrect

var questionText = document.querySelector(".quiz-content");
var optiona = document.querySelector(".a")
var optionb = document.querySelector(".b")
var optionc = document.querySelector(".c")
var question = "";
var rightWrong = document.querySelector(".right-wrong")
optiona.addEventListener("click", checkAnswer)
optionb.addEventListener("click", checkAnswer)
optionc.addEventListener("click", checkAnswer)

var currentQuestion = 0
var score = 0

var saveScore = document.getElementById("scores")
saveScore.style.visibility = 'hidden'
var saveButton = document.getElementById("saveUsername")

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

function checkAnswer(event) {
    var userSelection = event.target.textContent;
    console.log(userSelection)
    if(userSelection === quiz[currentQuestion].answer){
        score +=5
        rightWrong.textContent = "You got it right!"
    }else{
        timerCount -=5
        rightWrong.textContent = "Incorrect"
    }
    if(currentQuestion < quiz.length-1 ){
        currentQuestion++
        askQuestion()
    }else{
        endQuiz()
    }
}

//When I answer wrong, time subtracts from the clock
    //Create an if/else ()
    //If selected answer === correct answer, no change to time
    //If selected answer != correct answer, take 5 seconds off the clock

//When the quiz is done or the timer runs out, the quiz is over
function endQuiz() {
    clearInterval(timer);
    console.log(score)
    choices.style.visibility = 'hidden';
    questionText.textContent = "Final Score: " + (timerCount + score)
    saveScore.style.visibility = 'visible'
}

//When the quiz is over, I can save my initials and score.
saveButton.addEventListener("click", function(){
    var userName = document.getElementById("username").value
    var storedScores = JSON.parse(localStorage.getItem("dashboard")) || []
    storedScores.push({
        user:userName, score: (timerCount+score)
    })
    localStorage.setItem("dashboard", JSON.stringify(storedScores))
    saveScore.innerText = "Scores saved to dashboard. Click on View HighScores"
} )
startButton.addEventListener("click", startQuiz);