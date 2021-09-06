"use strict";

const PAPER = 0;
const ROCK = 1;
const SCISSORS = 2;

//let userPicked = -1;
let computerPicked = -1;
const compImg = document.getElementById("result");
const winner = document.getElementById("winner");

//this program works on the principle where paper < rock < scissor so we can check their values instead of explicitelty checking winning conditions

//user picks side
for (const clickable of document.getElementsByClassName("clickable")) {
    clickable.onclick = function () {
        reset();
        // userPicked = imgToInt(clickable.alt);
        computerChooseSide();
        calculateWin(computerPicked, imgToInt(clickable.alt));
    };
}


//computer picks random side
function computerChooseSide() {
    computerPicked = Math.floor(Math.random() * 3)
    setCompImg(intToImg(computerPicked), false);
}

//calculate wether you won, lost, or played equal game
function calculateWin(comp, user) {
    if (user == comp)
        setResults("Equal Play");
    else if (user + 1 == comp || user == 2 && comp == 0)
        setResults("Won ! ");
    else if (user - 1 == comp || user == 0 && comp == 2)
        setResults("Lost");
}


//reset all variables to initial position for debug testing and/or clearing the page correctly
function reset() {
    // userPicked = -1;
    computerPicked = -1;
    setCompImg("leeg", true);
    setResults("");
}


function setResults(text) {
    winner.innerText = text;
}

function setCompImg(imgname, flag) {
    compImg.src = `image/${imgname}.png`;
    compImg.hidden = flag;
}


function imgToInt(name) {
    return name === "blad" ? PAPER : name === "steen" ? ROCK : name === "schaar" ? SCISSORS : -1;
}
function intToImg(int) {
    return int === PAPER ? "blad" : int === ROCK ? "steen" : int === SCISSORS ? "schaar" : "leeg";
}

