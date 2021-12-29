const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "userId";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userId = loginInput.value;
  localStorage.setItem(USERID_KEY, loginInput.value);
  welcomeText(userId);
}

function welcomeText(userId) {
  greeting.innerText = `Welcome ${userId}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserId = localStorage.getItem(USERID_KEY);

if (savedUserId === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  welcomeText(savedUserId);
}
