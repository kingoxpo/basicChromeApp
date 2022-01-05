const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("ul#todo-list");

const HIDDEN = "hidden";
const TODOS_KEY = "todoList";

let todoArr = [];

function todos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArr));
}

// function dltFilter(todoArr, li) {
//   return todoArr.id !== Number(li.id);
// }

function deleteBtn(event) {
  const li = event.target.parentElement;
  // todoArr = todoArr.filter(todo => dltFilter(todo, li));
  todoArr = todoArr.filter(todo => todo.id !== Number(li.id));
  todos();
  li.remove();
}

function viewTodo(newTodo) {
  const createLi = document.createElement("li");
  createLi.id = newTodo.id;

  const createSpan = document.createElement("span");
  createSpan.innerText = newTodo.text;

  const createBtn = document.createElement("button");
  createBtn.innerText = "🗑️";
  createBtn.addEventListener("click", deleteBtn);

  todoList.appendChild(createLi);
  createLi.appendChild(createSpan);
  createLi.appendChild(createBtn);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoArr.push(newTodoObj);
  viewTodo(newTodoObj);
  todos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todoArr = parseTodos;
  parseTodos.forEach(viewTodo);
}
