const burgerBtn = document.querySelector('.burger__menu--btn'),
      menu = document.querySelector('.nav__drop-down');

function toggleMenu () {
  burgerBtn.classList.toggle('burger-btn__open');
  menu.classList.toggle('menu__open');
}