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

const projects = [
  {
    img: "./images/projects/JobScraper.webp",
    alt: "A screenshot of the code in python",
    header: "JobScraper",
    desc: "Denne var laget for og søke etter jobber med minnimalt arbeid for markeds teamet",
    link: "https://github.com/LeahJKH/pyScraper",
  },
  {
    img: "./images/projects/Hometown.webp",
    alt: "a picture of the frontpage for a site about telavåg",
    header: "My hometown",
    desc: "Denne var laget for og vise fram bilder jeg hadde tatt av min hjemby",
    link: "https://github.com/LeahJKH/my-hometown",
  },
  {
    img: "./images/projects/Go-Calc.webp",
    alt: "picture of a dark themed simple calculator",
    header: "Go-Calc",
    desc: "Her testet jeg Go Lang og lagde en simpel kalkulator",
    link: "https://github.com/LeahJKH/Go-calc",
  },
  {
    img: "./images/projects/CheatSheet.webp",
    alt: "a screen dump of the page with some foundational Javascript",
    header: "Coding Cheatsheet",
    desc: "this is made for fun just a cheat sheet for coding langs around web dev",
    link: "https://github.com/LeahJKH/Coding-Cheatsheet"
  }
];

projects.forEach((e) => {
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
  btn.append(btnTxt);

  mainDiv.appendChild(img);
  divider.appendChild(mainHead);
  divider.appendChild(p);
  divider.appendChild(btn);
  mainDiv.appendChild(divider);
  cont.appendChild(mainDiv);
});
