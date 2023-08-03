import { setItem, getItem } from './storage.js';

export default class TodoList {
  constructor() {
    this.$todoList = document.createElement('ul');
    this.todos = getItem('todos', []);

    this.renderTodos();
  }

  setTodos(todos) {
    this.todos = todos;
    setItem('todos', JSON.stringify(todos));
    this.renderTodos();
  }

  renderTodos() {
    this.$todoList.innerHTML = '';
    this.todos.forEach((todo) => {
      const $todoItem = document.createElement('li');
      $todoItem.textContent = todo;
      this.$todoList.appendChild($todoItem);
    });
  }

  render($target) {
    $target.appendChild(this.$todoList);
  }
}
