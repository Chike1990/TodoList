function updateCompleted(event) {
  const idArray = event.target.id.split("");
  const index = parseInt(idArray[idArray.length - 1]);
  const todo = todos.find((todo) => {
    return todo.index === index;
  });
  todo.completed = !todo.completed;
}
