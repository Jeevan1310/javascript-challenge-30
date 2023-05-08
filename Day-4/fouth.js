const todoList = [];

const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoListElement = document.querySelector('#todo-list');


//We need to create function to add the todo items to the todolist and then new element is added it will display on the li element
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

// also we need to add option to delete the todo list by clickimng over it and it will deleted from the list
todoListElement.addEventListener('click', function(event) {
    const clickedListItem = event.target;
    const clickedListItemIndex = Array.from(todoListElement.children).indexOf(clickedListItem);
    if (clickedListItemIndex >= 0) {
      todoList.splice(clickedListItemIndex, 1);
      todoListElement.removeChild(clickedListItem);
    }
  });
  