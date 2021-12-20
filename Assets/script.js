//Access to start button
var startButton = document.getElementById("start-button");
//Access value of time remaining 
var remainingTime = document.getElementById("time");
//Initial amount of time for quiz 
var timeLeft = 60;
//Access area where questions will be displayed
var questionsDisplay = document.getElementById("quiz-questions");
//Access area where answers will be displayed
var answersDisplay = document.querySelectorAll(".answers")
//Access elements to remove them from screen
var removeIntro = document.getElementById("intro");
var removeInstructions = document.querySelector(".quiz-instructions");
//Access answer buttoms
var answerButtons = document.querySelector(".answer-buttons");

//Quiz questions
var questions = [
   {
 question: 'Which of the following Javascript operators would you use to check strict equality between two different values?',
 answers: {
 a: '===',
 b: '==', 
 c: '<=>',
 d: '(=)',
},
correctAnswer: "a"
},
{  question: 'What are the three ways to declare a variable in Javascript?',
answers: {
a: 'var, let, set-variable',
b: 'let, set, scope', 
c: 'var, let, const',
d: 'scope, set-variable, for',
},
correctAnswer: "c"
},
{  question: 'What is the proper format to set an array?',
answers: {
a: 'set array = {}',
b: 'for array = []', 
c: 'var array = {}',
d: 'var array = []',
},
correctAnswer: "d"
},
{  question: 'Which of the following Javascript operators would you use to check strict equality between two different values?',
answers: {
a: '===',
b: '==', 
c: '<=>',
d: '(=)',
},
correctAnswer: "a"
},
{  question: 'Which of the following Javascript operators would you use to check strict equality between two different values?',
answers: {
a: '===',
b: '==', 
c: '<=>',
d: '(=)',
},
correctAnswer: "a"
}];

//Quiz answers



// Function for start button
startButton.addEventListener('click', function() {
  console.log("button works!");
  //starts timer 
  var timerInterval = setInterval(function() {
    timeLeft--;
    time.textContent = timeLeft + " seconds remaining, hurry!";
    if(timeLeft === 0) {
      //Stops timer when it hits 0 
      clearInterval(timerInterval);
      time.textContent = "You're out of time!";
    }
    //removes introduction and instructions on timer start
removeIntro.remove();
removeInstructions.remove();
startButton.remove();
// questionsDisplay.add();
// answersDisplay.add();


  }, 10);

for (var i = 0; i < questions.length; index++) {
  const element = questions[i];
  
}});

//Add buttons when game starts


// // Function for selection of questions

// //Function to save name and score

