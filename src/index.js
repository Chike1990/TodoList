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
    description: 'Go to school',
    completed: false,
    index: 0,
  },

  {
    description: 'cook',
    completed: true,
    index: 0,
  },

  {
    description: 'wash',
    completed: false,
    index: 0,
  },
];

todos.forEach((todo) => {
  const p = document.createElement('p');
  p.innerText = `${todo.description}`;
});