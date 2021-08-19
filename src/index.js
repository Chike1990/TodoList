//Array of todos object
todos = [
    {
      description: 'Go to school',
      completed: false,
      index: 0
    },

    {
      description: 'Prepare Dinner',
      completed: true,
      index: 1
    },

    {
      description: 'wash',
      completed: false,
      index: 2
    }
  ];

const todoItems = document.querySelector(".todo__items");

// Populates DOM with todos
const displayTodosOnUI = () => {
  todoItems.innerHTML = "";
   todos.forEach((todo) => {
    const checked = todo.completed ? "checked" : "";
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
}

displayTodosOnUI();