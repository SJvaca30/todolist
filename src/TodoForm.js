import { setItem } from './storage.js';

export default class TodoForm {
  constructor(onSubmit) {
    this.$todoForm = document.createElement('div');
    this.$input = document.createElement('input');
    this.$button = document.createElement('button');

    this.$input.placeholder = 'Todo를 입력하세요.';
    this.$button.textContent = '입력';

    this.$todoForm.classList.add('todo-form'); 

    this.$button.addEventListener('click', this.handleAdd.bind(this));

    this.onSubmit = onSubmit;
  }

  handleAdd() {
    const todoText = this.$input.value.trim();
    if (todoText) {
      this.onSubmit(todoText);
      this.$input.value = '';
    }
  }

  render($target) {
    this.$todoForm.appendChild(this.$input);
    this.$todoForm.appendChild(this.$button);
    $target.appendChild(this.$todoForm);
  }
}
