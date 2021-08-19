import './style.css';
import { toggleCompleted } from './upDate.js';

// Array of todos object
let todos = JSON.parse(localStorage.getItem("todos"));
if (!todos) {
  todos = [
    {
      description: 'Go to school',
      completed: false,
      index: 0,
    },

    {
      description: 'cook',
      completed: true,
      index: 1,
    },

    {
      description: 'wash',
      completed: false,
      index: 2,
    },
  ];
  localStorage.setItem('todos', JSON.stringify(todos));
}

const todoItems = document.querySelector('.todo__items');
// Populates DOM with todos
const displayTodosOnUI = () => {
  todoItems.innerHTML = '';
  todos.forEach((todo) => {
    const checked = todo.completed ? 'checked' : '';
    todoItems.innerHTML += `
  <div class="todo__placeholder">
<div>
  <input ${checked} type="checkbox" id="${todo.index}" class="todo__checkbox" >
  <input class="todo__text ${checked}" value = "${todo.description}">
</div>
 <i class="todo__drag-icon fas fa-ellipsis-v" ></i>
</div>
  `;
  });
};

displayTodosOnUI();

document.addEventListener('change', (e) => {
  const index = parseInt(e.target.id, 10);
  toggleCompleted(todos, index);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodosOnUI();
});