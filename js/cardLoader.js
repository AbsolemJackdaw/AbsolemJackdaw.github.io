"use strict"

//eslint-disable-next-line max-params
function create(link, image, altTxt, text) {
    const section = document.createElement("section")
    section.className = "card"
    const alink = document.createElement("a")
    alink.target = "_blank"
    alink.href = link
    const img = document.createElement("img")
    img.className = "cardimg"
    img.src = image
    img.alt = altTxt
    const cardtext = document.createElement("h5")
    cardtext.className = "card-title"
    cardtext.textContent = text

    alink.appendChild(img)
    alink.appendChild(cardtext)

    section.appendChild(alink)

    document.getElementById("cardWrapper").appendChild(section)
}
