import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());


const todos = [
  {
    description: "Buy milk",
    completed: true,
    index: 4,
  },
  {
    description: "Wash the red car",
    completed: false,
    index: 3,
  },
  {
    description: "Code for two hours on my milestone project",
    completed: false,
    index: 2,
  },
  {
    description: "Apply for 50 Remote jobs",
    completed: true,
    index: 1,
  },
];

const todoEl = document.querySelector(".todo");

todos.sort((a, b) => {
  return a.index - b.index;
});

todos.forEach((todo) => {
  todoEl.innerHTML += `
    <li class="todo__list-item">
        <div>
            <input type="checkbox" id="todo-list-${todo.index}" class="todo__list-input" />
            <label for="todo-list-${todo.index}">${todo.description}</label>
        </div>
        <i class="fas fa-ellipsis-v todo__list-menu-icon"></i>
    </li>
    `;
});
