"use strict";

const BLAD = 0;
const STEEN = 1;
const SCHAAR = 2;

//let userPicked = -1;
let computerPicked = -1;
const compImg = document.getElementById("result");
const winner = document.getElementById("winner");

//did programa werked op de basis logica dat blad < steen < schaar zodat blad wint van steen en steen verliest van blad
//Etc
//loops op schaar terug naar het begin (0)

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
        setResults("GelijkSpel");
    else if (user + 1 == comp || user == 2 && comp == 0)
        setResults("Gewonnen");
    else if (user - 1 == comp || user == 0 && comp == 2)
        setResults("Verloren");
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
    return name === "blad" ? BLAD : name === "steen" ? STEEN : name === "schaar" ? SCHAAR : -1;
}
function intToImg(int) {
    return int === BLAD ? "blad" : int === STEEN ? "steen" : int === SCHAAR ? "schaar" : "leeg";
}

