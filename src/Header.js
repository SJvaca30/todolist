export default class Header {
    constructor() {
      this.$header = document.createElement('h1');
      this.$header.textContent = 'Todo-app 뫈들기';
    }
  
    render($target) {
      $target.appendChild(this.$header);
    }
  }
