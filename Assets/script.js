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

//Quiz questions
var question1 = {
 question: 'Which of the following Javascript operators would you use to check strict equality between two different values?',
 answer1 = '===',
 answer2 = '==', 
 answer3 = '<=>',
 answer4 = '(=)',
}

var question2 = {

}

var question3 = {}

var question4 = {}

question5 = {}

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
questionsDisplay.add();
answersDisplay.add();
  }, 10);
})


// // Function for selection of questions

  


// //Function to save name and score


