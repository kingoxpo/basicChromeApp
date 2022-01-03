const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("ul#todo-list");

const HIDDEN = "hidden";
const USER_TODO = "todo";

function deleteBtn(event) {
  console.log(event);
}

function viewTodo(newTodo) {
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  createSpan.innerText = newTodo;
  const createBtn = document.createElement("button");
  createBtn.innerText = "🗑️";
  createBtn.addEventListener("click", deleteBtn);
  createLi.appendChild(createSpan);
  createLi.appendChild(createBtn);
  todoList.appendChild(createLi);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  viewTodo(newTodo);
}

todoForm.addEventListener("submit", todoSubmit);
