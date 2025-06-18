const cont = document.querySelector("#projects-sect");

const projects = [
  {
    img: "./images/projects/JobScraper.webp",
    alt: "",
    header: "JobScraper",
    desc: "Denne var laget for og søke etter jobber med minnimalt arbeid for markeds teamet",
    link: "",
  },
  {
    img: "./images/projects/telavaag.webp",
    alt: "",
    header: "My hometown",
    desc: "Denne var laget for og vise fram bilder jeg hadde tatt av min hjemby",
    link: "https://github.com/LeahJKH/my-hometown",
  },
  {
    img: "./images/projects/JobScraper.webp",
    alt: "",
    header: "JobScraper",
    desc: "Denne var laget for og søke etter jobber med minnimalt arbeid for markeds teamet",
    link: "",
  },
];

projects.forEach((e) => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("projcard", "column");

  const img = document.createElement("img");
  img.classList.add("projImg");
  img.src = e.img;
  img.alt = e.alt;

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
  mainDiv.appendChild(mainHead);
  mainDiv.appendChild(p);
  mainDiv.appendChild(btn);

  cont.appendChild(mainDiv);
});
