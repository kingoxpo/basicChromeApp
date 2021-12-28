const title = document.querySelector(".hey:first-child h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "pink";
  console.log("it was clicked");
}

function hndleMseEnter() {
  title.innerText = "mouse is here";
  console.log("mouse is here");
}
function hndleMseWheel() {
  console.log("mouse is wheel");
}
function hndleMseLve() {
  title.innerText = "mouse is leave";
  console.log("mouse is Lve");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", hndleMseEnter);
title.addEventListener("mousewheel", hndleMseWheel);
title.addEventListener("mouseleave", hndleMseLve);
