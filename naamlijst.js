"use strict";

const unorganizedList = document.createElement("ul");
document.querySelector("body").appendChild(unorganizedList);

document.getElementById("validate").onclick = function () {
    const textFieldContent = document.getElementById("input").value;

    if (textFieldContent.length > 0) {
        if (!hasNameAndUpdate(textFieldContent)) {
            const listItem = document.createElement("li");
            listItem.dataset.aantal = 1;
            listItem.dataset.naam = textFieldContent;
            listItem.innerText = `${listItem.dataset.naam}: ${listItem.dataset.aantal}`;
            unorganizedList.appendChild(listItem)
        }
    }
}

function hasNameAndUpdate(nameToCheck) {
    const li = document.querySelector(`li[data-naam="${nameToCheck}"]`);
    if (li == null)
        return false;
    li.dataset.aantal++;
    li.innerText = `${li.dataset.naam}: ${li.dataset.aantal}`;
    return true;
}