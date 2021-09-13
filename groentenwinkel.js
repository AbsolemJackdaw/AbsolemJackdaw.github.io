"use strict";

const path = "json/groenten.json";
let inputstream;
let jsonFile;

//read out json file to fill dropdown menu
readJsonFile();
loadFromSessionBasket();

//click button event to add given entries to table
document.getElementById("toevoegen").onclick = function () {
    //call both checks first so errors can be correctly printed and refreshed.
    //calling both functions in the check skips logging of the other if either one is true
    const groenten = checkAndLogDropDown();
    const aantal = checkAndLogCount();
    if (groenten && aantal) {
        addToTable();
        saveBasketToSession();
    }
}

//read json file to fill out dropdown menu, throw error if the file couldnt be read
async function readJsonFile() {
    inputstream = await fetch(path);
    if (inputstream.ok) {
        jsonFile = await inputstream.json();
        if (jsonFile.length > 0) {
            addToDropDownMenu();
        } else {
            console.log(`${path} didnt have any values`);
            showError("fout", true)
        }
    } else {
        console.log(`${path} presented errors and couldn't be read`);
        showError("fout", true);
    }
}

//trigger the hidden flag on set html values.
//args : id=element ID , flag = true(visible, false(hidden))
function showError(id, flag) {
    const foutDiv = document.getElementById(id);
    foutDiv.hidden = !flag;
}

//read json file entries and add to the "groenten" 'select' element.
function addToDropDownMenu() {
    for (const entry of jsonFile) {
        const option = document.createElement("option");
        //option.value = "groente";
        option.dataset.naam = entry.naam;
        option.dataset.prijs = entry.prijs;
        option.dataset.eenheid = entry.eenheid;
        option.innerText = `${entry.naam} (${entry.prijs}/${entry.eenheid})`;
        getDropDownMenu().appendChild(option);
    }
}

function getDropDownMenu() {
    return document.getElementById("groenten");
}
function getSelected() {
    return getDropDownMenu().options[getDropDownMenu().selectedIndex];
}
function getCount() {
    return document.getElementById("aantal").value;
}

//checks if the fields is not blank or at default. shows error if it's on default/empty
function checkAndLogDropDown() {
    const flag = getDropDownMenu().selectedIndex > 0;
    showError("groentenFout", !flag);
    return flag;
}

//checks if the fields is not blank or at default. shows error if it's on default/empty
function checkAndLogCount() {
    const flag = getCount() > 0
    showError("aantalFout", !flag);
    return flag;
}

//adds current selection of dropdownmenu and count to an invisible table, and sets said table to visible if needed
function addToTable() {
    const table = document.querySelector("tbody");
    if (table.childElementCount > 0) {
        let hasEntry = false;
        //modify row if entry already exists
        for (const row of table.children) {
            if (row.firstChild.innerText === getSelected().dataset.naam) {
                row.children[1].innerText = getRowCount(row) + parseFloat(getCount(), 10);
                //new price after setting new count
                const newPrice = getRowCount(row) * getSelected().dataset.prijs;
                row.children[3].innerText = newPrice.toFixed(2);
                hasEntry = true;
            }
        }
        if (!hasEntry) {
            addNewRow(table);
        }
    } else {
        addNewRow(table);
    }

    //only to go from hidden to visible here.
    checkTableVisibility();
    calcAndSetTotal();
}

//add new row to given table
function addNewRow(table) {
    const tableRow = table.insertRow();
    createCell(tableRow, getSelected().dataset.naam);
    createCell(tableRow, getCount());
    createCell(tableRow, getSelected().dataset.prijs);
    const price = getSelected().dataset.prijs * getCount();
    createCell(tableRow, price.toFixed(2));
    createBinCell(tableRow);
}

//returns an int of the number of ordered vegetables (instead of a string)
function getRowCount(row) {
    return parseInt(row.children[1].innerText, 10);
}
//helper method
function createCell(row, description) {
    row.insertCell().innerText = description;
}
//helper method to create a cell with an image
function createBinCell(row) {
    row.insertCell().appendChild(picture("./image/vuilbak.png", "delete")).onclick = function () {
        const table = document.querySelector("tbody");
        table.removeChild(row);
        //remove if last entry was deleted
        checkTableVisibility();
        saveBasketToSession();
        calcAndSetTotal();
    };
}

//helper method
function picture(imgpath, alt) {
    const img = document.createElement("img");
    img.src = imgpath;
    img.alt = alt;
    return img;
}

//toggles visibility if table (hidden if empty, else visible)
function checkTableVisibility() {
    document.getElementById("winkelmand").hidden = !document.querySelector("tbody").children.length > 0;
}

function calcAndSetTotal() {
    const foot = document.querySelector("tfoot tr");
    const table = document.querySelector("tbody");
    let total = 0;
    for (const row of table.children) {
        total += parseFloat(row.children[3].innerText);
    }
    foot.children[1].innerText = total.toFixed(2);
}


///////////////////////////////////////////////////bonus, save to local storage ! ///////////////////////////////////////////////////////////
function saveBasketToSession() {
    let index = 0;
    const table = document.querySelector("tbody");
    //clear session storage so we can catch up to removed entries
    localStorage.clear();
    localStorage.setItem("rows", table.children.length);
    for (const row of table.children) {
        const array = [];
        array.push(row.children[0].innerText);
        array.push(row.children[1].innerText);
        array.push(row.children[2].innerText);
        localStorage.setItem(index, JSON.stringify(array))

        index++;
    }
}

function loadFromSessionBasket() {
    const rows = localStorage.getItem("rows");
    if (rows !== null && rows > 0) {
        for (let index = 0; index < rows; index++) {
            const array = JSON.parse(localStorage.getItem(index));
            addEntry(
                array[0],
                array[1],
                array[2]
            );
        }
        calcAndSetTotal();
        checkTableVisibility();

    }
}

function addEntry(naam, aantal, prijs) {
    const table = document.querySelector("tbody");
    const tableRow = table.insertRow();
    createCell(tableRow, naam);
    createCell(tableRow, aantal);
    createCell(tableRow, prijs);
    const price = parseFloat(aantal, 10) * parseFloat(prijs, 10);
    createCell(tableRow, price.toFixed(2));
    createBinCell(tableRow);
}