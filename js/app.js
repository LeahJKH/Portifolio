const starGrid = document.getElementById("star-grid");

const icons = [
  "./images/icons/cPlusPlus.svg",
  "./images/icons/CSharp.svg",
  "./images/icons/htmlCssJs.svg",
  "./images/icons/Python.svg",
  "./images/icons/React.svg",
  "./images/icons/TS.svg",
];

function spawnStar() {
  const star = document.createElement("img");
  star.src = icons[Math.floor(Math.random() * icons.length)];
  star.classList.add("star");

  const section = document.getElementById("moon-scape");
  const sectionRect = section.getBoundingClientRect();

  const x = Math.random() * sectionRect.width - 40;
  const y = Math.random() * sectionRect.height - 40;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  starGrid.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

// Spawn a star every ~800ms
setInterval(spawnStar, 800);
setInterval(spawnStar, 800);
setInterval(spawnStar, 800);

const cont = document.querySelector("#projects-sect");
async function getData() {

  const res = await fetch("https://raw.githubusercontent.com/LeahJKH/Portifolio/refs/heads/main/json/projects/all.json")
  let data = await res.json()

  data.forEach((e) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("projcard", "column");

    const img = document.createElement("img");
    img.classList.add("projImg");
    img.src = e.img;
    img.alt = e.alt;

    const divider = document.createElement("div");
    divider.classList.add("info-cont-div");
    const mainHead = document.createElement("h2");
    mainHead.classList.add("projHeading", "highlighted-text");
    let textHead = document.createTextNode(e.header);
    mainHead.append(textHead);

    const p = document.createElement("p");
    const ptxt = document.createTextNode(e.desc);
    p.append(ptxt);

    const btn = document.createElement("button");
    btn.classList.add("btnproj");
    const btnTxt = document.createTextNode("GO");
    const a = document.createElement("a")
    a.href = e.link
    a.target = "_blank"
    a.append(btnTxt)
    btn.append(a)

    mainDiv.appendChild(img);
    divider.appendChild(mainHead);
    divider.appendChild(p);
    divider.appendChild(btn);
    mainDiv.appendChild(divider);
    cont.appendChild(mainDiv);
  });
}
getData()