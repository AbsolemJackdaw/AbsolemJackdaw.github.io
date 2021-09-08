/* eslint-disable multiline-comment-style */
"use strict";

let showAll = true;
let show = "men";
let inputstream;
let jsonFile;
//suggestion : get json file from website ?
const path = "json/geslachten.json";

readJsonFile();

document.querySelectorAll("a").forEach(link => {
    link.onclick = function () {
        show = link.id;
        showAll = link.id === "all"
        reset();
    }
});

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
        if (person.geslacht === show || showAll) {
            build(person);
        }
    }
}

//fill one row of the table with a person read from json
//'dot slash' for img path is a fix for running on a site, so the img path gets looked at in the root.
//tested on git pages and VSC live server
function build(person) {
    const table = document.querySelector("tbody");
    const tableRow = table.insertRow();
    newCellWithText(tableRow, person.voornaam);
    newCellWithText(tableRow, person.familienaam);
    newCellWithImg(tableRow, `${person.geslacht}.png`, person.geslacht);
    newCellWithImg(tableRow, `${person.foto}`, person.voornaam);
}

//helper method
//after note: this is pointless. it saves no lines of code.
//keeping it just in case
function newCell(row) {
    return row.insertCell();
}

//adendum, added these after everything worked and when checking through code.
//helper methods to keep readability high
function newCellWithText(row, text) {
    newCell(row).innerText = text;
}
function newCellWithImg(row, imgpath, flavortext) {
    newCell(row).appendChild(picture(`./image/${imgpath}`, flavortext));
}

//helper method
function picture(imgpath, alt) {
    const img = document.createElement("img");
    img.src = imgpath;
    img.alt = alt;
    return img;
}

//clear table and refill entries
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

/*
 * completely unnecesairy, but the table twitching on refresh and link click was ticking me off.
 * this prevent me from having to edit the default css I was given
 */
function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
}

addStyle(`th,td{
    min-height: 48px;
    min-width: 48px;
}`);