/* 
<div class="lang-hold-div">
<img src="" alt="" class="icon-image">
<p class="icon-txt"></p>
</div>
*/
const langCont = document.querySelector("#language-cont")
let langsC = [
    {
        img: "./images/icons/c-plus-plus_svgrepo.com.svg",
        alt: "C++ programming language logo",
        txt: "C++"
    },
    {
        img: "./images/icons/csharp_svgrepo.com.svg",
        alt: "C# programming language logo",
        txt: "C#"
    },
    {
        img: "./images/icons/css-3_svgrepo.com.svg",
        alt: "CSS3 logo",
        txt: "CSS"
    },
    {
        img: "./images/icons/html-5_svgrepo.com.svg",
        alt: "HTML5 logo",
        txt: "HTML"
    },
    {
        img: "./images/icons/javascript_svgrepo.com.svg",
        alt: "JavaScript programming language logo",
        txt: "JavaScript"
    },
    {
        img: "./images/icons/node_svgrepo.com.svg",
        alt: "Node.js runtime environment logo",
        txt: "Node.js"
    },
    {
        img: "./images/icons/python_svgrepo.com.svg",
        alt: "Python programming language logo",
        txt: "Python"
    },
    {
        img: "./images/icons/react_svgrepo.com.svg",
        alt: "React JavaScript library logo",
        txt: "React"
    },
    {
        img: "./images/icons/typescript-official_svgrepo.com.svg",
        alt: "TypeScript programming language logo",
        txt: "TypeScript"
    }
];

langsC.forEach((e) => {
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