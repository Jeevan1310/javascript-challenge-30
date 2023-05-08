const todoList = [];

const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoListElement = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoItem = todoInput.value;
  if (todoItem) {
    todoList.push(todoItem);
    const listItemElement = document.createElement('li');
    listItemElement.textContent = todoItem;
    todoListElement.appendChild(listItemElement);
    todoInput.value = '';
  }
});
