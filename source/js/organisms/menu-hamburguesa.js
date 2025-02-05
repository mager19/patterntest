if (typeof main === 'function') {
  $(document).ready(main);
}

var menu = document.querySelector('.hamburger');

function toggleMenu(event) {
  this.classList.toggle('is-active');
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

if (menu) {
  menu.addEventListener('click', toggleMenu, false);
}