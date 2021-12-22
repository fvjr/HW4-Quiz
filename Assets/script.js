//Access to start button
var startButton = document.getElementById("start-button");
//Access value of time remaining 
var time = document.getElementById("time");
//Access area where questions will be displayed
var questionDisplay = document.getElementById("question");
//Access area where answers will be displayed
var answerChoices = document.querySelectorAll(".answer-text")
//Access elements to remove them from screen
var removeIntro = document.getElementById("intro");
var removeInstructions = document.querySelector(".quiz-instructions");
//saves user name
// var userName = ; 
//saves score
var score = timeLeft;
//Text for incorrect answer
var answerValidator = document.getElementById("results");
//Initial amount of time for quiz 
var timeLeft = 60;
var currentQuestion = {};

//Quiz questions object
var questions = [
  {
    question: 'Which of the following JavaScript operators would you use to check strict equality between two different values?',
    choices: ['===', '==', '<=>', '(=)'],
    correctAnswer: "a",
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    choices: ['string', 'delta', 'number', 'boolean'],
    correctAnswer: "b",
  },
  {
    question: 'What is the following line of code an example of? var cats = ["Maine Coon", "Scottish Fold", "Tabby", "Siamese"]',
    choices: ['for loop', 'boolean', 'array', 'const'],
    correctAnswer: "c",
  },
  {
    question: 'Which method would you use to remove the last element from an array?',
    choices: ['pop()', 'removeLast()', 'push()', 'flex()'],
    correctAnswer: "a",
  },
  {
    question: 'Which type of variable has a value that is unable to be reassinged?',
    choices: ['perm', 'let', 'var', 'const'],
    correctAnswer: "d",
  }];


// Function for start button
startButton.addEventListener('click', function () {
  //removes start button
  startButton.remove();
  //removes quiz intro
  removeIntro.remove();
  //removes quiz instructions
  removeInstructions.remove();
  var quizBox = document.querySelector(".quiz-box");
  quizBox.classList.remove("hide");
  //starts timer starting at 60s (timeLeft)
  var timer = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft + " seconds remaining, hurry!";
    if (timeLeft === 0) {
      endGame();
      //Stops timer when it hits 0 
      clearInterval(timer);
      time.setAttribute('style', 'color:red');
      time.textContent = "You're out of time!";
    }
  }, 1000);
callQuestion();
});

function callQuestion() {
  questionDisplay.textContent = questions[q].question;
  var answerContainer = document.querySelector(".answers-container");
  answerContainer.innerHTML = "";
  questions[q].choices.forEach(function(choice){
  var answerBox = document.createElement("div");
  answerBox.setAttribute("class", "answers-box");
  answerBox.textContent = choice;
  answerBox.dataset.choice = choice;
  answerBox.onclick = checkAnswer;
  answerContainer.appendChild(answerBox);
  });
}
function checkAnswer(event){
  var choice =event.target.dataset.choice; 
  if (choice === questions[q].correctAnswer) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
    timeLeft = timeLeft - 5;
    
  } 
  q ++;
  if (questions.length === q) {
    console.log("End game")
  } else {
    callQuestion();
  }
  
}
function endGame() {
  if (q.length = 5 || timeLeft <0)
  alert("Game over"); 
}

var q = 0

// replace console logs with functions
// In local storage i want to make an object for each score with initial and score, push those into an array of objects, stringify that array into local storage and then parse it out of local storage
// stingify data in, parse out