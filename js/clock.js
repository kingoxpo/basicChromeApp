const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재 시간 ${date.getHours()}:${date.getMinutes()}:${second}`;
  clock.classList.remove("hidden");
}
getClock();
setInterval(getClock, 1000);
