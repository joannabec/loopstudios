const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu-mobile');
const body = document.querySelector('body');
const iBurger = document.querySelector('#icon-h');
const btnX = document.querySelector('#icon-x');

btnMenu.addEventListener('click', () => {
  body.classList.toggle('scroll');
  menu.classList.toggle('active');
  iBurger.classList.toggle('none');
  btnX.classList.toggle('none');
});