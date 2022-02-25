"use strict"

const toggle = document.querySelectorAll("input");
const theme = sessionStorage.getItem("theme")

console.log(theme)
if (theme === "light") {
    switchToLight()
    toggle[0].checked = true
}


function switchToDark() {
    const messages = document.querySelectorAll(".light");
    for (let index = 0; index < messages.length; index++) {
        messages[index].classList.remove("light");
        messages[index].classList.add("dark");
    }
}

function switchToLight() {
    const messages = document.querySelectorAll(".dark");
    for (let index = 0; index < messages.length; index++) {
        messages[index].classList.remove("dark");
        messages[index].classList.add("light");
    }
}

toggle[0].onclick = function () {
    if (toggle[0].checked) {
        switchToLight();
        sessionStorage.setItem("theme", "light")
    } else {
        switchToDark();
        sessionStorage.setItem("theme", "dark")
    }
}


