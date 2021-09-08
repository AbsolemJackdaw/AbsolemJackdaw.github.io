"use strict";

let showAll = true;
let showMen = false;
let inputstream;
let jsonFile;
//suggestion : get json file from website ?
const path = "json/geslachten.json";

readJsonFile();

document.getElementById("men").onclick = function () {
    showAll = false;
    showMen = true;
    reset();
};
document.getElementById("women").onclick = function () {
    showAll = false;
    showMen = false;
    reset();
};
document.getElementById("all").onclick = function () {
    showAll = true;
    reset();
};

//readJsonFile is called once, when the website is started up / refreshed / called. 
//no need to recall this when refreshing the table (pick choice men, women, all)
async function readJsonFile() {
    inputstream = await fetch(path);
    jsonFile = await inputstream.json();
    //comment this out if you want to start with a blank table
    checkTables(path);
}

//seperate to check tables for reset functionality
function checkTables() {
    if (inputstream.ok && jsonFile.length > 0) {
        fillTable();
    } else {
        console.log(`${path} presented errors and couldn't be read`);
    }
}

//fill table with people depending on flags (showMen, showAll, showWomen)
function fillTable() {
    for (const person of jsonFile) {
        if (showMen && person.geslacht === "man" || !showMen && person.geslacht === "vrouw" || showAll) {
            build(person);
        }
    }
}

//fill one row of the table with a person read from json
function build(person) {
    const table = document.querySelector("tbody");
    const tableRow = table.insertRow();
    newCell(tableRow).innerText = person.voornaam;
    newCell(tableRow).innerText = person.familienaam;
    newCell(tableRow).appendChild(picture(`./image/${person.geslacht}.png`, person.geslacht));
    newCell(tableRow).appendChild(picture(`./image/${person.foto}`, person.foto));
}

//helper method
function newCell(row) {
    return row.insertCell();
}

//helper method
function picture(imgpath, alt) {
    const img = document.createElement("img");
    img.src = imgpath;
    img.alt = alt;
    return img;
}

//clear tale and refill entries
function reset() {
    clearTable();
    checkTables();
}

//clears all children in the tbody
function clearTable() {
    const tableBody = document.querySelector("tbody");
    while (tableBody.lastChild !== null) {
        tableBody.lastChild.remove();
    }
}