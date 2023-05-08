const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
const linksMenu = document.querySelectorAll('.menu-lateral__link');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
});

linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo');
    botaoMenu.classList.add('menu-lateral--ativo');
  });
});