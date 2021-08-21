
//Declaring the elements that we will use.
var body = document.body;
var buttonContainer = document.createElement('div');
var startButton = document.createElement('button');
var titleContainer = document.createElement('header');
var title = document.createElement('h1');
var questionContainer = document.createElement('div');
var timerContainer = document.createElement('div');
var timer = document.createElement('h2');
//var firstSet = "Which of the following is not a Javascript data type?";
var score = 100;




startButton.textContent = 'Start Quiz';
startButton.id = 'startButtonId';
startButton.className = 'starButtonClass';
buttonContainer.setAttribute('style', 'margin: auto; width: 25%; text-align: center;');
buttonContainer.id = "buttonId";

title.textContent = 'Welcome to the coding quiz!';
title.setAttribute('style', 'margin: auto; width: 50%; text-align: center; ');

questionContainer.id = "qId";

timer.textContent = 60 + " Seconds remaining";
timer.setAttribute('style', 'margin: auto; width: 50%; text-align: center; ');


//Appending things to the body of the html DOM.
body.appendChild(questionContainer);
questionContainer.appendChild(timer);
body.appendChild(titleContainer);
titleContainer.appendChild(title);
body.appendChild(questionContainer);
body.appendChild(buttonContainer);
buttonContainer.appendChild(startButton);

function timeUp() {
    window.alert("Time is up!");
}



function begintimer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timer.textContent = 1;
            timeLeft--;
        }
        else {
            timer.textContent = '';
            clearInterval(timeInterval);
            timeUp();
        }




    }, 1000);
}

function firstSetOfQuestionsFunction() {
    document.getElementById("buttonId").innerHTML = "which of the following is not a Javascript data type? <button class='aButtons' id='firstTrue'>Boolean</button> <button class='aButtons' id='firstFalse'>Word</button> <button class='aButtons' id='firstTrue'>Numbers</button>";
};

function secondSetOfQuestionsFunction() {
    document.getElementById("buttonId").innerHTML = "Which of the following is not a coding language? <button class='bButtons' id='secondTrue'>JavaScript</button> <button class='bButtons' id='secondFalse'>HTML</button> <button class='bButtons' id='secondTrue'>Python</button>";
}

function thirdSetOfQuestionsFunction() {
    document.getElementById("buttonId").innerHTML = "Which of the following is the correct way to declare a variable? <button class='cButtons' id='thirdFalse'>var = number 3 </button> <button class='cButtons' id='thirdFalse'> number = var 3</button> <button class='cButtons' id='thirdTrue'> var number = 3</button>";
}
// var taskButtonHandler = function(event) {
//     // get target element from event
//     var targetEl = event.target;

//     // edit button was clicked
//     if (targetEl.matches(".edit-btn")) {
//       var taskId = targetEl.getAttribute("data-task-id");
//       editTask(taskId);
//     } 
//     // delete button was clicked
//     else if (targetEl.matches(".delete-btn")) {
//       var taskId = targetEl.getAttribute("data-task-id");
//       deleteTask(taskId);
//     }
//   };
var delegate = function (event) {
    var grabThis = event.target;
    var grabThisId = grabThis.id;
    if (grabThis.matches(".aButtons")) {

        console.log("Delegating is working");
        console.log("Your grabThis id is " + grabThisId);
    }


};







function beginQuiz() {
    firstSetOfQuestionsFunction();






}


startButton.addEventListener("click", beginQuiz);
startButton.addEventListener("click", begintimer);
body.addEventListener("click", delegate);