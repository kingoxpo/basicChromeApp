const wallPapers = ["bg0.jpg", "bg1.jpg", "bg2.jpg"];
const chosenBg = wallPapers[Math.floor(Math.random() * wallPapers.length)];

const wallPaper = document.createElement("img");
wallPaper.src = `img/${chosenBg}`;

document.body.prepend(wallPaper);
