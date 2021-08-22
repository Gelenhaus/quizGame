
//Declaring the elements that we will use.
var body = document.body;
var buttonContainer = document.createElement('div');
var startButton = document.createElement('button');
var titleContainer = document.createElement('header');
var title = document.createElement('h1');
var questionContainer = document.createElement('div');
var timerContainer = document.createElement('div');
var timer = document.createElement('h2');
var savedInfo = document.createElement('p');
var savedInfoContainer = document.createElement('div');
var usersInitials = [];

var score = 100;



savedInfoContainer.className = "savedInfoContainerClassName";
savedInfoContainer.id = "savedInfoContainerId";

savedInfo.innerHTML = "<button>Jump to top scores</button>";
savedInfo.id = "savedInfoId";
savedInfo.setAttribute('style', 'margin auto; width 25%; text-align: left;');
savedInfo.className = "savedInfoClassName";


startButton.textContent = 'Start Quiz';
startButton.id = 'startButtonId';
startButton.className = 'starButtonClass';
startButton.setAttribute('style', 'color: white; font-size: 16px; background-color:#4CAF50;');

buttonContainer.setAttribute('style', 'margin: auto; width: 25%; text-align: center;');
buttonContainer.id = "buttonId";


title.textContent = 'Welcome to the coding quiz!';
title.setAttribute('style', 'margin: auto; width: 50%; text-align: center; ');

questionContainer.id = "qId";

timer.textContent = 60 + " Seconds remaining";
timer.setAttribute('style', 'margin: auto; width: 50%; text-align: center; ');


//Appending things to the body of the html DOM.
body.appendChild(savedInfoContainer);
savedInfoContainer.appendChild(savedInfo);
body.appendChild(questionContainer);
questionContainer.appendChild(timer);
body.appendChild(titleContainer);
titleContainer.appendChild(title);
body.appendChild(questionContainer);
body.appendChild(buttonContainer);
buttonContainer.appendChild(startButton);

function timeUp() {
    window.alert("Game Over");
}

var timeLeft = 60;
function begintimer() {


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
    document.getElementById("buttonId").innerHTML = "which of the following is not a Javascript data type? <button class='aButtons' id='firstIncorrect'>Boolean</button> <button class='aButtons' id='firstCorrect'>Word</button> <button class='aButtons' id='firstIncorrect'>Numbers</button>";
};

function secondSetOfQuestionsFunction() {
    document.getElementById("buttonId").innerHTML = "Which of the following is not a coding language? <button class='bButtons' id='secondTrue'>JavaScript</button> <button class='bButtons' id='secondFalse'>HTML</button> <button class='bButtons' id='secondTrue'>Python</button>";
};

function thirdSetOfQuestionsFunction() {
    document.getElementById("buttonId").innerHTML = "Which of the following is the correct way to declare a variable? <button class='cButtons' id='thirdFalse'>var = number 3 </button> <button class='cButtons' id='thirdFalse'> number = var 3</button> <button class='cButtons' id='thirdTrue'> var number = 3</button>";
};

function theQuizIsOverFunction() {
    document.getElementById("buttonId").innerHTML = "You have completed the quiz with a score of " + score;
    timeLeft = 0;
};


var savedButton = function (event) {
    var clickedThis = event.target;
    var storedNames = JSON.parse(localStorage.getItem("usersInitials"));
    console.log(storedNames);

    document.getElementById("savedInfoContainerId").innerHTML = "Previous attempt " + storedNames;

};
var delegate = function (event) {
    var grabThis = event.target;
    var grabThisId = grabThis.id;
    if (grabThis.matches(".aButtons")) {
        if (grabThisId === 'firstIncorrect') {
            score = score - 33;
            timeLeft = timeLeft - 10;
        }
        secondSetOfQuestionsFunction();
    } else if (grabThis.matches(".bButtons")) {
        if (grabThisId === 'secondTrue') {
            score = score - 33;
            timeLeft = timeLeft - 10;
        }
        thirdSetOfQuestionsFunction();
    } else if (grabThis.matches(".cButtons")) {
        if (grabThisId === 'thirdFalse') {
            score = score - 33;
            timeLeft = timeLeft - 10;
        }


        usersInitials.push(window.prompt("Enter your initals"));
        usersInitials.push(score);
        localStorage.setItem("usersInitials", JSON.stringify(usersInitials));
        console.log(localStorage);
        var storedNames = JSON.parse(localStorage.getItem("usersInitials"));
        console.log(storedNames);



        theQuizIsOverFunction();
    }



};

//We need to create an array for saving the initials and the scores then
// change them into a string and store them in local storage and then
// when we take them out - turn them back into an array and display them.



function beginQuiz() {
    firstSetOfQuestionsFunction();
};




startButton.addEventListener("click", beginQuiz);
startButton.addEventListener("click", begintimer);
body.addEventListener("click", delegate);
savedInfoContainer.addEventListener("click", savedButton);
