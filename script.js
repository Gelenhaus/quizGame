

var body = document.body;
var buttonContainer = document.createElement('div');
var myButton = document.createElement('button');
var titleContainer = document.createElement('header');
var title = document.createElement('h1');




myButton.textContent = 'Click me DOOD';
buttonContainer.setAttribute('style', 'margin: auto; width: 25%; text-align: center;');
title.textContent = 'Welcome to the coding quiz!';
title.setAttribute('style', 'margin: auto; width: 50%; text-align: center; ');


body.appendChild(titleContainer);
titleContainer.appendChild(title);
body.appendChild(buttonContainer);
buttonContainer.appendChild(myButton);




function beginQuiz() {
    window.alert("The button function connection is online!");



}

myButton.addEventListener("click", beginQuiz);