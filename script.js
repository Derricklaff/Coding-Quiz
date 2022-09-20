const beginButton = document.querySelector("#beginButton");
const timer = document.querySelector("timer");
const startHead = document.querySelector("#startHead");
const startMessage = document.querySelector("startMessage");
const questionForm = document.querySelector("form");
const choi1 = document.querySelector("#choi1");
const choi2 = document.querySelector("#choi2");
const choi3 = document.querySelector("#choi3");
const choi4 = document.querySelector("#choi4");
const question = document.querySelector("question");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");
const nextButton = document.querySelector("#nextBut");
const quizRespone = document.querySelector("#Response");

const questions = ["In Gitbash, the command 'Mkdir' does what?", "In CSS, What selector denotes 'class'?", "In HTML, <a> is a ____ tag", "In Javascript, Bracket notation indicates what?"]

const answerChoices = [["What file am I currently in.","Make new directory.", "Change directory.", "Commit to main branch"], ["*", ".","#","{}"], ["Anchor", "Image", "Header", "Button"], ["An array", "A boolean", "A query selector", "A string"]];

let secondsLeft = 45;
function setTime() {
    timer.textContent = "Time Remaining: 45 Seconds";
    let timerInt = setInterval(function(){
        secondsLeft = secondsLeft - 1;
        timer.textContent = "Time Remaining: ${secondsLeft} seconds";

        if(secondsLeft <= 10){
            timer.style.color = "red";
        }
        if(secondsLeft === 0){
            clearInterval(timerInt);
            scrollIndex = 0;
            questionForm.style.display = "none";
            startHead.textContent ="You have run out of time!";
            document.querySelector("#info").textContent = "Click BEGIN to try again";
            startMessage.style.display = "inherit";
            secondsLeft = 30;
            scoreMod = 0;
            timer.style.color ="grey";
        }
        if(scrollIndex === 6)
        clearInterval(timerInt);
        timer.textContent = "";
    })
}

