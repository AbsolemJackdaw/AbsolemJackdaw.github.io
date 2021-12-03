"use strict"

function switchToLight() {
    const messages = document.querySelectorAll(".light");
    for (let index = 0; index < messages.length; index++) {
        messages[index].classList.remove("light");
        messages[index].classList.add("dark");
    }
}

function switchToDark() {
    const messages = document.querySelectorAll(".dark");
    for (let index = 0; index < messages.length; index++) {
        messages[index].classList.remove("dark");
        messages[index].classList.add("light");
    }
}

const toggle = document.querySelectorAll("input");
console.log(toggle[0]);
toggle[0].onclick = function(){
    if (toggle[0].checked) {
        switchToDark();
    } else {
        switchToLight();
    }
}
