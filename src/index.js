import './style.css';
import toggleCompleted from './upDate.js';
import { createTodo, updateTodo, clearCompletedTodos } from "./crud.js";

// Array of todos object
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoItems = document.querySelector(".todo__items");

displayTodosOnUI();

// Populate the DOM with todos
function displayTodosOnUI() {
  todoItems.innerHTML = "";
  todos.forEach((todo) => {
    const checked = todo.completed ? "checked" : "";
    todoItems.innerHTML += `
      <div class="todo__placeholder">
        <div>
          <input ${checked} type="checkbox" id="${todo.index}" class="todo__checkbox" />
          <input class="todo__text ${checked}" value="${todo.description}" id="${todo.index}" />
        </div>
        <i class="todo__delete-icon fas fa-ellipsis-v"></i>
      </div>
    `;
  });
}

const todoInput = document.querySelector(".todo__input");

function addTodo() {
  if (!todoInput.value) return;
  const newTodo = {
    description: todoInput.value,
    completed: false,
  };
  createTodo(todos, newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoInput.value = "";
  displayTodosOnUI();
}

document.addEventListener("change", (e) => {
  const { classList, value, id } = e.target;
  if (classList.contains("todo__text")) {
    console.log(e);
    updateTodo(todos, value, parseInt(id));
    localStorage.setItem("todos", JSON.stringify(todos));
    return displayTodosOnUI();
  }
  const index = parseInt(e.target.id);
  toggleCompleted(todos, index);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodosOnUI();
});

document.addEventListener(
  "focus",
  (e) => {
    if (e.target.classList.contains("todo__text")) {
      console.log(e);
      e.target.classList.remove("checked");
    }
  },
  true
);

document.addEventListener(
  "blur",
  (e) => {
    if (e.target.classList.contains("todo__text")) {
      console.log(e);
      e.target.classList.add("checked");
    }
  },
  true
);

document.addEventListener("keyup", (e) => {
  if (e.code === "Enter" && e.target.classList.contains("todo__input")) {
    console.log(e);
    addTodo();
  }
});

document.querySelector(".todo__input-icon").addEventListener("click", () => {
  addTodo();
});

document.querySelector(".todo__clear-btn").addEventListener("click", () => {
  todos = clearCompletedTodos(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodosOnUI();
});
