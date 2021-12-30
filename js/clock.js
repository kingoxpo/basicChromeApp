const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let hours = date.getHours();
  let AMPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  clock.innerText = `현재시간 ${AMPM} ${hours}:${minutes}:${seconds}`;
  clock.classList.remove("hidden");
}
getClock();
setInterval(getClock, 1000);
