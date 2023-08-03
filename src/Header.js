export default class Header {
    constructor() {
      this.$header = document.createElement('header');
      this.$header.textContent = 'Simple To-Do App';
    }
  
    render($target) {
      $target.appendChild(this.$header);
    }
  }
  