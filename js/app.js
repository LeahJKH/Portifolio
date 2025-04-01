import langC from "./json/langC.json"

const langCont = document.querySelector("#language-cont")


langC.forEach((e) => {
    console.log(e.txt)
    const divLan = document.createElement("div")
    const imgLan = document.createElement("img")
    const pLan = document.createElement("p")
    const pTxtLan = document.createTextNode(e.txt)
    imgLan.src = e.img
    imgLan.alt = e.alt
    imgLan.classList.add("icon-image")
    pLan.classList.add("icon-txt")
    divLan.classList.add("lang-hold-div")

    pLan.append(pTxtLan)
    divLan.appendChild(imgLan)
    divLan.appendChild(pLan)
    langCont.appendChild(divLan)
})