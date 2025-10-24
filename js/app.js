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

let index = 0

async function carusell() {
  const leftArrow = document.querySelector("#leftArrow")
  const rightArrow = document.querySelector("#rightArrow")
  const radioCont = document.querySelector("#radiobtns")

  const res = await fetch("https://raw.githubusercontent.com/LeahJKH/Portifolio/refs/heads/main/json/projects/all.json")
  let data = await res.json()
  setInterval(() => {
    if (index >= 3) {
      index = 0
      builder(data[index])
    } else {
      index += 1
      builder(data[index])
    }
  }, 8000)
  leftArrow.addEventListener("click", (e) => {
    if (index <= 0) {
      index = 3
      builder(data[index])
    } else {
      index -= 1
      builder(data[index])
    }
  })
  rightArrow.addEventListener("click", (e) => {
    if (index >= 3) {
      index = 0
      builder(data[index])
    } else {
      index += 1
      builder(data[index])
    }
  })

  data.forEach((e) => {
    const input = document.createElement("input")
    input.type = "radio"
    input.name = "projShow"
    input.classList = "radioBtnsStyle"
    input.id = `radio${e.index}`

    const obj = e
    input.addEventListener("click", (a) => {
      index = obj.index
      console.log(obj)
      console.log(obj.index)
      console.log(index)
      builder(obj)
    })
    radioCont.appendChild(input)
  })

  builder(data[index])
}
carusell()

function builder(a) {
  let data = a
  const currRadio = document.querySelector(`#radio${data.index}`)
  currRadio.checked = true
  const projectContShowing = document.querySelector("#project-cont-showing")
  projectContShowing.innerHTML = ""

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("projcard", "row");

  const img = document.createElement("img");
  img.classList.add("projImg");
  img.src = data.img;
  img.alt = data.alt;

  const divider = document.createElement("div");
  divider.classList.add("info-cont-div");
  const mainHead = document.createElement("h2");
  mainHead.classList.add("projHeading", "highlighted-text");
  let textHead = document.createTextNode(data.header);
  mainHead.append(textHead);

  const p = document.createElement("p");
  const ptxt = document.createTextNode(data.desc);
  p.append(ptxt);

  const btn = document.createElement("button");
  btn.classList.add("btnproj");
  const btnTxt = document.createTextNode("GO");

  btn.append(btnTxt)
  btn.addEventListener("click", (e) => {
    window.open(data.link)
  })


  mainDiv.appendChild(img);
  divider.appendChild(mainHead);
  divider.appendChild(p);
  divider.appendChild(btn);
  mainDiv.appendChild(divider);
  projectContShowing.appendChild(mainDiv);
}