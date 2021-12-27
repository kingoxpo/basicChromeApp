const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  const userId = loginInput.value;
  console.log(userId);
}
loginButton.addEventListener("click", handleLoginBtnClick);
