const wallPapers = [
  "0.jpg",
  "1.jpg",
  "2.jpeg",
  "3.jpg",
  "4.jpg",
  "5.jpeg",
  "6.jpg",
  "7.jpeg",
  "8.jpg",
  "9.jpg",
];
const chosenBg = wallPapers[Math.floor(Math.random() * wallPapers.length)];

const wallPaper = document.createElement("img");
wallPaper.src = `img/${chosenBg}`;

document.body.appendChild(wallPaper);
