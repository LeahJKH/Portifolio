fetch("./json/langC.json")
  .then((res) => res.json())
  .then((langC) => {
    const langCont = document.querySelector("#language-cont");

    langC.forEach((e) => {
      const divLan = document.createElement("div");
      const imgLan = document.createElement("img");
      const pLan = document.createElement("p");
      const pTxtLan = document.createTextNode(e.txt);

      imgLan.src = e.img;
      imgLan.alt = e.alt;
      imgLan.classList.add("icon-image");

      pLan.classList.add("icon-txt");
      divLan.classList.add("lang-hold-div");

      pLan.append(pTxtLan);
      divLan.appendChild(imgLan);
      divLan.appendChild(pLan);
      langCont.appendChild(divLan);
    });
  })
  .catch((err) => console.error("Failed to load JSON:", err));