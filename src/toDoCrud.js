// Creates a new todo object
const createTodo = (todos, description) => {
  const newTodo = {
    description: description,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(newTodo);
};

// Update todo object by index
const updateTodo = (todos, index, description) => {
  const todo = todos.find((todo) => {
    todo.index === index;
  });
  todo.description = description;
};

// Deletes a todo object by index
const deleteTodo = (todos, index) => {
  const todoIndex = todos.findIndex((todo) => {
    todo.index === index;
  });
  todos.splice(todoIndex, 1);
  updateTodoIndex();
};

// Clears all completed todo
const clearAllCompleted = (todos) => {
  todos.forEach((todo) => {
    if (todo.completed === true) {
      deleteTodo(todo.index);
    }
  });

  //   todos.filter(todo => {
  //       todo.completed !== true;
  //   })
};

// updating the indexes of the index property after deleting a todo
const updateTodoIndex = (todos) => {
  todos.forEach((todo, index) => {
    todo.index = index + 1;
  });
};
