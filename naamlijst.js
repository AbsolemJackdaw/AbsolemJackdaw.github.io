"use strict";

const unorganizedList = document.createElement("ul");
document.querySelector("body").appendChild(unorganizedList);

for (const button of document.getElementsByTagName("button")) {
    button.onclick = function () {
        const textFieldContent = document.getElementsByTagName("input")[0].value;

        if (textFieldContent.length > 0) {

            if (!checkHasNameAndUpdate(textFieldContent)) {
                const listItem = document.createElement("li");
                listItem.dataset.aantal = 1;
                listItem.dataset.naam = textFieldContent;
                listItem.innerText = `${listItem.dataset.naam}: ${listItem.dataset.aantal}`;
                unorganizedList.appendChild(listItem)
            }
        }
    }
}

function checkHasNameAndUpdate(nameToCheck) {
    for (const entry of unorganizedList.children) {
        if (entry.dataset.naam === nameToCheck) {
            entry.dataset.aantal++;
            found = true;
            entry.innerText = `${entry.dataset.naam}: ${entry.dataset.aantal}`;
            return true;
        }
    }
    return false;
}