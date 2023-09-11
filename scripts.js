const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  if (menu.style.left === '-300px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-300px';
  }
});