const menu = document.getElementById('menu');
const content = document.getElementById('content');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click',() => {
        menu.classList.toggle('is-open');
        content.classList.toggle('is-open');
    })