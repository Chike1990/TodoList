export function toggleCompleted(todos, index) {
  const todo = todos.find(todo => todo.index === index);
  console.log(todo)
  todo.completed = !todo.completed
  //todo.completed ? todo.completed = false : todo.completed = true;
}

//export { toggleCompleted }