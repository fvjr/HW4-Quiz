//Access element for start button
var startButton = document.getElementById("start-button");

//Access element for start button
var replayButton = document.getElementById("replay-button");

//Access value of time remaining 
var time = document.getElementById("time");

//Access area where questions will be displayed

var questionDisplay = document.getElementById("question");

//Access area where answers will be displayed
var answerChoices = document.querySelectorAll(".answer-text")

//Access elements to remove them from screen
var removeIntro = document.getElementById("intro");
var removeInstructions = document.querySelector(".quiz-instructions");

//Text for incorrect answer
var answerValidator = document.getElementById("results");

//Initial amount of time for quiz 
var timeLeft = 60;

//variable to track correct questions, used for win condition
var winCount = 0;

//save user score to array
var userScores = [];
var userInitials;

//Quiz questions object
var questions = [
  {
    question: 'Which of the following JavaScript operators would you use to check strict equality between two different values?',
    choices: ['A. ===', 'B. ==', 'C. <=>', 'D. (=)'],
    correctAnswer: 'A. ===',
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    choices: ['A. string', 'B. delta', 'C. number', 'D. boolean'],
    correctAnswer: 'B. delta',
  },
  {
    question: 'What is the following line of code an example of? var cats = ["Maine Coon", "Scottish Fold", "Tabby", "Siamese"]',
    choices: ['A. for loop', 'B. boolean', 'C. array', 'D. const'],
    correctAnswer: 'C. array',
  },
  {
    question: 'Which method would you use to remove the last element from an array?',
    choices: ['A. pop()', 'B. removeLast()', 'C. push()', 'D. flex()'],
    correctAnswer: 'A. pop()',
  },
  {
    question: 'Which type of variable has a value that is unable to be reassinged?',
    choices: ['A. perm', 'B. let', 'C. var', 'D. const'],
    correctAnswer: 'D. const',
  }];


// Function for start button
startButton.addEventListener('click', function () {
  //removes start button
  startButton.remove();
  //removes quiz intro
  removeIntro.remove();
  //removes quiz instructions
  removeInstructions.remove();
  //access quiz-box element
  var quizBox = document.querySelector(".quiz-box");
  //makes quiz-box visible
  quizBox.classList.remove("hide");
  //starts timer starting at 60s (timeLeft)
  var timer = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft + " seconds remaining, hurry!";
    if (timeLeft === 0 || winCount == 5 || timeLeft <= 0) {
      endGame();
      //Stops timer when it hits 0 
      clearInterval(timer);
      time.setAttribute('style', 'color:red');
    }
  }, 1000);
  //begin showing questions
  callQuestion();
});

// Function to replay game
replayButton.addEventListener('click', function () {
  document.location.reload(true)
});

//function to display next question
function callQuestion() {
  questionDisplay.textContent = questions[q].question;
  var answerContainer = document.querySelector(".answers-container");
  answerContainer.innerHTML = "";
  questions[q].choices.forEach(function (choice) {
    var answerBox = document.createElement("div");
    answerBox.setAttribute("class", "answers-box");
    answerBox.textContent = choice;
    answerBox.dataset.choice = choice;
    answerBox.onclick = checkAnswer;
    answerContainer.appendChild(answerBox);
  });
}
//function to check answer and go to next question when answered correctly 
function checkAnswer(event) {
  var choice = event.target.dataset.choice;
  console.log(event);
  if (choice === questions[q].correctAnswer) {
    console.log("Correct!");
    winCount++;
    console.log(winCount);
    //when users select correct answer add correct answer to userChoices array and proceed to next question
    var userChoices = [];
    userChoices.push(choice.value);
    console.log(userChoices);
    q++;
  } else {
    // if incorrect answer is selected, decrease 5 seconds from remaining time
    console.log("Wrong!");
    timeLeft = timeLeft - 5;
  } 
  if (questions.length === q.length) {
    console.log("End game")
  } else {
    if (q < 5) callQuestion();
  }
}
function endGame() {
  //if all questions are answered correctly before time ends, game is won
  if (winCount == 5) {
    alert("You win!");
    console.log(timeLeft);
    time.textContent = "You win! Your score is " + timeLeft + "!";
    // make user score object and save it to local storage
     userInitials = prompt('Enter initials');
     userScores.push({userInitials, timeLeft});
     console.log(userScores);
     localStorage.setItem("score", JSON.stringify(userScores));
     //if not all questions are answered correctly before time ends, game is lost
    }
  if (timeLeft === 0 || timeLeft < 0)
    time.textContent = "You're out of time!";
    timeLeft = 0;
  replayButton.classList.remove("hide"); 
}

var q = 0

// In local storage i want to make an object for each score with initial and score, push those into an array of objects, stringify that array into local storage and then parse it out of local storage
// stingify data in, parse out

// To-do
// Save initials and score 
// add "wrong" or "correct" text for choice select
// make element to view hiscores


