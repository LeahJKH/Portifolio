// use fetch for when ill move this too the api too get an easier transition
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

  sorter("all", 1)
  
  function sorter(cat, pos) {
    // display 4 object may be 4, 12 and so on
    // 0 1 2 3, 4 5 6 7, 8 9 10
    // for first i can have a random
    if (cat === "all" && pos === 1) {
      fetch(`./json/projects/${cat}.json`)
       .then((res) => res.json())
       .then((proj) => {
        const cardCont = document.querySelector("#card-proj-cont")
        for (let i = 0; i < 4; i++) {
          let ran = Math.floor(Math.random() * proj.length)
          
          const divcont1 = document.createElement("div")
          const imgProj1 = document.createElement("img")
          const txtCont1 = document.createElement("div")
          const txt1 = document.createElement("p")
          const txt1Name = document.createTextNode(proj[ran].name)
          
          divcont1.classList.add("cardCont", "column")
          imgProj1.classList.add("cardImgProj")
          txtCont1.classList.add("cardTextCont")
          
          imgProj1.src = proj[ran].img
          imgProj1.alt = proj[ran].alt
          
          txt1.append(txt1Name)
          txtCont1.appendChild(txt1)
          divcont1.appendChild(imgProj1)
          divcont1.appendChild(txtCont1)
          cardCont.appendChild(divcont1)
        }
      })
    } else if (cat === "all" && pos === 2) {

    } else if (pos === 1 && cat != "all") {
      
        
    } else if (pos === 2 && cat != "all") {
      fetch(`./json/projects/${cat}.json`)
       .then((res) => res.json())
       .then((proj) => {
          
       })
    }
  }