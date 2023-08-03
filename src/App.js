import Header from './Header.js';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

export default class App {
  constructor() {
    this.$app = document.createElement('div');

    this.header = new Header();
    this.todoForm = new TodoForm(this.addTodo.bind(this));
    this.todoList = new TodoList();
  }

  addTodo(todoText) {
    this.todoList.setTodos([...this.todoList.todos, todoText]);
  }

  mount($target) {
    this.header.render($target);
    this.todoForm.render($target);
    this.todoList.render($target);
  }
}
